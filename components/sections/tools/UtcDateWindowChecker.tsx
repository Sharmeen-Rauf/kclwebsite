"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";

interface CrossingRow {
  id: number;
  countryOrFir: string;
  entryTime: string;
  exitTime: string;
}

interface ComputedCrossing {
  id: number;
  countryOrFir: string;
  entryUtcMs: number;
  exitUtcMs: number;
  entryDateStr: string;
  exitDateStr: string;
  dayOffsetEntry: number;
  dayOffsetExit: number;
  startPct: number;
  widthPct: number;
}

function parseHhMm(value: string): number | null {
  if (!value || !value.includes(":")) return null;
  const [hStr, mStr] = value.split(":");
  const h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
}

function formatUtcDate(ms: number): string {
  const d = new Date(ms);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getUTCDate()).padStart(2, "0")}`;
}

function formatUtcDateTime(ms: number): string {
  const d = new Date(ms);
  return `${formatUtcDate(ms)} ${String(d.getUTCHours()).padStart(
    2,
    "0"
  )}:${String(d.getUTCMinutes()).padStart(2, "0")} UTC`;
}

export function UtcDateWindowChecker() {
  const [departureUtc, setDepartureUtc] = useState<string>("");
  const [crossings, setCrossings] = useState<CrossingRow[]>([
    { id: 1, countryOrFir: "", entryTime: "", exitTime: "" },
  ]);

  const addCrossing = () => {
    if (crossings.length >= 8) return;
    const nextId =
      crossings.length > 0 ? Math.max(...crossings.map((c) => c.id)) + 1 : 1;
    setCrossings((prev) => [
      ...prev,
      { id: nextId, countryOrFir: "", entryTime: "", exitTime: "" },
    ]);
  };

  const removeCrossing = (id: number) => {
    if (crossings.length <= 1) return;
    setCrossings((prev) => prev.filter((c) => c.id !== id));
  };

  const updateCrossing = (
    id: number,
    field: keyof Omit<CrossingRow, "id">,
    value: string
  ) => {
    setCrossings((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const analysis = useMemo(() => {
    if (!departureUtc) {
      return { ready: false as const };
    }
    const depMs = Date.parse(`${departureUtc}:00Z`);
    if (Number.isNaN(depMs)) {
      return { ready: false as const };
    }

    const depDateStr = formatUtcDate(depMs);
    const depDayStartMs = Date.UTC(
      new Date(depMs).getUTCFullYear(),
      new Date(depMs).getUTCMonth(),
      new Date(depMs).getUTCDate()
    );

    const validRows = crossings.filter(
      (c) =>
        c.countryOrFir.trim().length > 0 &&
        parseHhMm(c.entryTime) !== null &&
        parseHhMm(c.exitTime) !== null
    );

    if (validRows.length === 0) {
      return { ready: false as const };
    }

    let cursorMs = depMs;
    const computed: ComputedCrossing[] = [];

    for (const row of validRows) {
      const entryMin = parseHhMm(row.entryTime)!;
      const exitMin = parseHhMm(row.exitTime)!;

      const cursorDate = new Date(cursorMs);
      let entryDayMs = Date.UTC(
        cursorDate.getUTCFullYear(),
        cursorDate.getUTCMonth(),
        cursorDate.getUTCDate()
      );
      let entryMs = entryDayMs + entryMin * 60000;
      if (entryMs < cursorMs) {
        entryDayMs += 86400000;
        entryMs = entryDayMs + entryMin * 60000;
      }

      let exitDayMs = entryDayMs;
      let exitMs = exitDayMs + exitMin * 60000;
      if (exitMs < entryMs) {
        exitDayMs += 86400000;
        exitMs = exitDayMs + exitMin * 60000;
      }

      cursorMs = exitMs;

      const dayOffsetEntry = Math.round((entryDayMs - depDayStartMs) / 86400000);
      const dayOffsetExit = Math.round((exitDayMs - depDayStartMs) / 86400000);

      computed.push({
        id: row.id,
        countryOrFir: row.countryOrFir.trim(),
        entryUtcMs: entryMs,
        exitUtcMs: exitMs,
        entryDateStr: formatUtcDate(entryMs),
        exitDateStr: formatUtcDate(exitMs),
        dayOffsetEntry,
        dayOffsetExit,
        startPct: 0,
        widthPct: 0,
      });
    }

    const windowStartMs = depMs;
    const windowEndMs = Math.max(
      depMs + 3600000,
      computed[computed.length - 1].exitUtcMs
    );
    const totalSpan = Math.max(1, windowEndMs - windowStartMs);

    const withLayout = computed.map((item) => {
      const startPct = ((item.entryUtcMs - windowStartMs) / totalSpan) * 100;
      const widthPct = Math.max(
        4,
        ((item.exitUtcMs - item.entryUtcMs) / totalSpan) * 100
      );
      return { ...item, startPct, widthPct };
    });

    const nextDateCrossings = withLayout.filter(
      (c) => c.dayOffsetEntry > 0 || c.dayOffsetExit > 0
    );

    return {
      ready: true as const,
      depDateStr,
      windowStartStr: formatUtcDateTime(windowStartMs),
      windowEndStr: formatUtcDateTime(windowEndMs),
      items: withLayout,
      nextDateCrossings,
    };
  }, [departureUtc, crossings]);

  const crossingsParam = crossings
    .filter((c) => c.countryOrFir.trim())
    .map((c) => `${c.countryOrFir.trim()}:${c.entryTime}-${c.exitTime}`)
    .join("|");

  const requestHref = `/request-flight-support?service=overflight-permits${
    departureUtc ? `&departureUtc=${encodeURIComponent(departureUtc)}` : ""
  }${crossingsParam ? `&crossings=${encodeURIComponent(crossingsParam)}` : ""}`;

  const faqs = SERVICE_TOOL_FAQS["overflight-permits"] || [];

  return (
    <section
      aria-labelledby="utc-date-checker-heading"
      className="py-10 lg:py-12 bg-[#F8FAFC] border-b border-[#CBD5E1]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 shadow-2xs space-y-5">
          <div className="max-w-3xl">
            <h2
              id="utc-date-checker-heading"
              className="text-2xl font-bold text-[#0B2545] mb-2"
            >
              Check Your Crossing Times Against the Date
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Permits are issued for dates. Enter your times to see when your flight crosses midnight UTC in each country.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left: Inputs */}
            <div className="lg:col-span-6 space-y-3">
              <div>
                <label
                  htmlFor="overflight-dep-utc"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Departure date and time (UTC)
                </label>
                <input
                  id="overflight-dep-utc"
                  type="datetime-local"
                  value={departureUtc}
                  onChange={(e) => setDepartureUtc(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                />
              </div>

              <div className="space-y-2 max-h-[250px] overflow-y-auto pr-1">
                {crossings.map((row, idx) => (
                  <div
                    key={row.id}
                    className="grid grid-cols-12 gap-2 items-end bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5"
                  >
                    <div className="col-span-12 sm:col-span-5">
                      <label
                        htmlFor={`crossing-name-${row.id}`}
                        className="block text-base font-medium text-[#0B2545] mb-0.5"
                      >
                        {idx + 1}. Country / FIR
                      </label>
                      <input
                        id={`crossing-name-${row.id}`}
                        type="text"
                        placeholder="Country or FIR"
                        value={row.countryOrFir}
                        onChange={(e) =>
                          updateCrossing(row.id, "countryOrFir", e.target.value)
                        }
                        className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-2.5 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                      />
                    </div>
                    <div className="col-span-5 sm:col-span-3">
                      <label
                        htmlFor={`crossing-entry-${row.id}`}
                        className="block text-base font-medium text-[#0B2545] mb-0.5"
                      >
                        Entry UTC
                      </label>
                      <input
                        id={`crossing-entry-${row.id}`}
                        type="time"
                        value={row.entryTime}
                        onChange={(e) =>
                          updateCrossing(row.id, "entryTime", e.target.value)
                        }
                        className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                      />
                    </div>
                    <div className="col-span-5 sm:col-span-3">
                      <label
                        htmlFor={`crossing-exit-${row.id}`}
                        className="block text-base font-medium text-[#0B2545] mb-0.5"
                      >
                        Exit UTC
                      </label>
                      <input
                        id={`crossing-exit-${row.id}`}
                        type="time"
                        value={row.exitTime}
                        onChange={(e) =>
                          updateCrossing(row.id, "exitTime", e.target.value)
                        }
                        className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex justify-end">
                      {crossings.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeCrossing(row.id)}
                          aria-label={`Remove crossing ${idx + 1}`}
                          className="text-base font-bold text-[#475569] hover:text-[#0B2545] px-2 py-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {crossings.length < 8 && (
                <button
                  type="button"
                  onClick={addCrossing}
                  className="text-base font-semibold text-[#0B2545] bg-[#F8FAFC] hover:bg-slate-100 border border-[#CBD5E1] px-4 py-2 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                >
                  + Add crossing ({crossings.length}/8)
                </button>
              )}
            </div>

            {/* Right: Timeline Output */}
            <div
              aria-live="polite"
              className="lg:col-span-6 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 sm:p-5 space-y-4"
            >
              {!analysis.ready ? (
                <p className="text-base text-[#475569]">
                  Enter your departure date and time in UTC and at least one crossing with country or FIR, entry time, and exit time to see when your flight crosses midnight UTC.
                </p>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="text-base font-semibold text-[#0B2545]">
                      UTC Crossing Timeline
                    </div>
                    <svg
                      viewBox={`0 0 600 ${Math.max(80, analysis.items.length * 36 + 24)}`}
                      className="w-full h-auto bg-white border border-[#CBD5E1] rounded-[4px]"
                      role="img"
                      aria-label="Horizontal UTC crossing timeline showing each FIR or country bar across UTC dates"
                    >
                      {analysis.items.map((item, idx) => {
                        const y = 16 + idx * 36;
                        const x = 10 + (item.startPct / 100) * 580;
                        const w = Math.max(16, (item.widthPct / 100) * 580);
                        return (
                          <g key={item.id}>
                            <rect
                              x={x}
                              y={y}
                              width={w}
                              height="22"
                              rx="3"
                              fill="#0B2545"
                            />
                            <text
                              x={Math.min(x + 6, 460)}
                              y={y + 15}
                              fill="#FFFFFF"
                              fontSize="12"
                              fontWeight="600"
                            >
                              {item.countryOrFir}
                              {item.dayOffsetEntry > 0
                                ? ` (+${item.dayOffsetEntry}d)`
                                : ""}
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  <div className="space-y-2 text-base text-[#1E293B]">
                    <div>
                      <strong className="text-[#0B2545]">Departure date:</strong>{" "}
                      {analysis.depDateStr} (UTC)
                    </div>
                    <div>
                      <strong className="text-[#0B2545]">
                        Crossings on the next UTC date:
                      </strong>{" "}
                      {analysis.nextDateCrossings.length === 0
                        ? "None (all on departure UTC date)"
                        : analysis.nextDateCrossings.map((c) => (
                            <span
                              key={c.id}
                              className="inline-flex items-center gap-1 bg-white border border-[#CBD5E1] text-[#0B2545] px-2 py-0.5 rounded-[4px] mr-1.5 mb-1"
                            >
                              {c.countryOrFir} (+{c.dayOffsetEntry || c.dayOffsetExit}{" "}
                              day)
                            </span>
                          ))}
                    </div>
                    <div>
                      <strong className="text-[#0B2545]">
                        Overall window:
                      </strong>{" "}
                      {analysis.windowStartStr} to {analysis.windowEndStr}
                    </div>
                  </div>
                </>
              )}

              <p className="text-base font-medium text-[#0B2545]">
                Include every UTC date your flight touches when you send your request.
              </p>
              <p className="text-base text-[#475569]">
                Reference only. Requirements and validity periods are set by each country&apos;s authority.
              </p>
            </div>
          </div>

          {/* Quick Questions + Action Button */}
          <div className="pt-4 border-t border-[#CBD5E1] flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {faqs.map((item) => (
                <div key={item.question} className="space-y-1">
                  <h3 className="text-base font-bold text-[#0B2545]">
                    {item.question}
                  </h3>
                  <p className="text-base text-[#475569] leading-snug">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="shrink-0">
              <Link
                href={requestHref}
                className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-6 py-3 rounded-[4px] inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                <span>Start My Request</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

