"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";

type SeasonType = "summer" | "winter";

interface FleetRow {
  id: number;
  registration: string;
  coaExpiry: string;
  corExpiry: string;
  noiseExpiry: string;
  insuranceExpiry: string;
}

function getLastWeekdayOfMonth(
  year: number,
  monthIndex: number,
  targetDayOfWeek: number
): string {
  const lastDay = new Date(Date.UTC(year, monthIndex + 1, 0));
  const diff = (lastDay.getUTCDay() - targetDayOfWeek + 7) % 7;
  lastDay.setUTCDate(lastDay.getUTCDate() - diff);
  return `${lastDay.getUTCFullYear()}-${String(
    lastDay.getUTCMonth() + 1
  ).padStart(2, "0")}-${String(lastDay.getUTCDate()).padStart(2, "0")}`;
}

function getSeasonDates(season: SeasonType, year: number) {
  if (season === "summer") {
    return {
      start: getLastWeekdayOfMonth(year, 2, 0), // Last Sunday of March
      end: getLastWeekdayOfMonth(year, 9, 6), // Last Saturday of October
      label: `IATA Summer ${year}`,
    };
  }
  return {
    start: getLastWeekdayOfMonth(year, 9, 0), // Last Sunday of October
    end: getLastWeekdayOfMonth(year + 1, 2, 6), // Last Saturday of March next year
    label: `IATA Winter ${year}/${String(year + 1).slice(-2)}`,
  };
}

type DocStatus = "empty" | "valid" | "mid-season" | "expired";

function evaluateCert(
  expiryDate: string,
  seasonStart: string,
  seasonEnd: string
): { status: DocStatus; label: string } {
  if (!expiryDate) return { status: "empty", label: "" };
  if (expiryDate < seasonStart) {
    return { status: "expired", label: "Expired" };
  }
  if (expiryDate < seasonEnd) {
    return {
      status: "mid-season",
      label: `Expires during the season (${expiryDate})`,
    };
  }
  return { status: "valid", label: "Valid for the whole season" };
}

export function SeasonFleetCheck() {
  const [season, setSeason] = useState<SeasonType>("summer");
  const [year, setYear] = useState<number>(2027);
  const [rows, setRows] = useState<FleetRow[]>([
    {
      id: 1,
      registration: "",
      coaExpiry: "",
      corExpiry: "",
      noiseExpiry: "",
      insuranceExpiry: "",
    },
  ]);
  const [copied, setCopied] = useState<boolean>(false);

  const seasonInfo = useMemo(() => getSeasonDates(season, year), [season, year]);

  const addRow = () => {
    if (rows.length >= 12) return;
    const nextId = rows.length > 0 ? Math.max(...rows.map((r) => r.id)) + 1 : 1;
    setRows((prev) => [
      ...prev,
      {
        id: nextId,
        registration: "",
        coaExpiry: "",
        corExpiry: "",
        noiseExpiry: "",
        insuranceExpiry: "",
      },
    ]);
  };

  const removeRow = (id: number) => {
    if (rows.length <= 1) return;
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const updateRow = (
    id: number,
    field: keyof Omit<FleetRow, "id">,
    value: string
  ) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const evaluatedRows = useMemo(() => {
    return rows.map((row) => {
      const coa = evaluateCert(row.coaExpiry, seasonInfo.start, seasonInfo.end);
      const cor = evaluateCert(row.corExpiry, seasonInfo.start, seasonInfo.end);
      const noise = evaluateCert(
        row.noiseExpiry,
        seasonInfo.start,
        seasonInfo.end
      );
      const ins = evaluateCert(
        row.insuranceExpiry,
        seasonInfo.start,
        seasonInfo.end
      );
      const statuses = [coa, cor, noise, ins];
      const hasAnyInput =
        row.registration.trim().length > 0 ||
        statuses.some((s) => s.status !== "empty");
      const needsUpdate = statuses.some(
        (s) => s.status === "expired" || s.status === "mid-season"
      );
      return { row, coa, cor, noise, ins, hasAnyInput, needsUpdate };
    });
  }, [rows, seasonInfo]);

  const activeRows = evaluatedRows.filter((r) => r.hasAnyInput);
  const needUpdateCount = activeRows.filter((r) => r.needsUpdate).length;

  const handleCopy = async () => {
    const lines = [
      `Season Fleet Document Check — ${seasonInfo.label} (${seasonInfo.start} to ${seasonInfo.end})`,
      ...activeRows.map((item, idx) => {
        const reg = item.row.registration.trim() || `Aircraft ${idx + 1}`;
        return `${reg}: CoA [${item.coa.label || "Not entered"}], CoR [${
          item.cor.label || "Not entered"
        }], Noise [${item.noise.label || "Not entered"}], Insurance [${
          item.ins.label || "Not entered"
        }]`;
      }),
      "",
      "Reference only. Requirements for each authority may differ. Nothing is stored.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(lines);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const requestHref = `/request-flight-support?flightType=schedule&season=${encodeURIComponent(
    seasonInfo.label
  )}`;

  const faqs = SERVICE_TOOL_FAQS["schedule-filing"] || [];

  return (
    <section
      aria-labelledby="season-fleet-check-heading"
      className="py-10 lg:py-12 bg-[#F8FAFC] border-b border-[#CBD5E1]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 shadow-2xs space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2
                id="season-fleet-check-heading"
                className="text-2xl font-bold text-[#0B2545] mb-2"
              >
                Will Your Fleet Documents Last the Whole Season?
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                Pick the season and add your aircraft. We show which certificates run out before the season ends.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div>
                <label
                  htmlFor="iata-season-select"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  IATA season
                </label>
                <select
                  id="iata-season-select"
                  value={season}
                  onChange={(e) => setSeason(e.target.value as SeasonType)}
                  className="text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                >
                  <option value="summer">IATA Summer</option>
                  <option value="winter">IATA Winter</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="iata-year-select"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Year
                </label>
                <select
                  id="iata-year-select"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value, 10))}
                  className="text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                >
                  <option value={2026}>2026</option>
                  <option value={2027}>2027</option>
                  <option value={2028}>2028</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-4 py-2.5 text-base text-[#0B2545] flex flex-wrap items-center justify-between gap-2">
            <span>
              <strong>{seasonInfo.label}:</strong> {seasonInfo.start} to{" "}
              {seasonInfo.end}
            </span>
            {activeRows.length > 0 && (
              <span className="font-semibold">
                {needUpdateCount} of {activeRows.length} aircraft need a document update before the season ends.
              </span>
            )}
          </div>

          {/* Fleet Table */}
          <div className="overflow-x-auto max-h-[260px] overflow-y-auto border border-[#CBD5E1] rounded-[6px]">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1] sticky top-0 z-10">
                <tr className="text-base font-semibold text-[#0B2545]">
                  <th className="p-3">Registration</th>
                  <th className="p-3">Airworthiness</th>
                  <th className="p-3">Registration cert</th>
                  <th className="p-3">Noise cert</th>
                  <th className="p-3">Insurance</th>
                  <th className="p-3 w-12">
                    <span className="sr-only">Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CBD5E1]">
                {evaluatedRows.map(({ row, coa, cor, noise, ins }, idx) => (
                  <tr key={row.id} className="align-top bg-white">
                    <td className="p-2.5">
                      <input
                        type="text"
                        aria-label={`Aircraft ${idx + 1} registration`}
                        placeholder="Registration"
                        value={row.registration}
                        onChange={(e) =>
                          updateRow(
                            row.id,
                            "registration",
                            e.target.value.toUpperCase()
                          )
                        }
                        className="w-32 text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-2.5 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                      />
                    </td>
                    {[
                      { field: "coaExpiry" as const, evalObj: coa, label: "Certificate of Airworthiness" },
                      { field: "corExpiry" as const, evalObj: cor, label: "Certificate of Registration" },
                      { field: "noiseExpiry" as const, evalObj: noise, label: "Noise certificate" },
                      { field: "insuranceExpiry" as const, evalObj: ins, label: "Insurance" },
                    ].map(({ field, evalObj, label }) => (
                      <td key={field} className="p-2.5 space-y-1.5">
                        <input
                          type="date"
                          aria-label={`${label} expiry for aircraft ${idx + 1}`}
                          value={row[field]}
                          onChange={(e) =>
                            updateRow(row.id, field, e.target.value)
                          }
                          className="w-40 text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-2 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                        />
                        {evalObj.status !== "empty" && (
                          <div>
                            <span
                              className={`inline-block text-sm font-medium px-2 py-0.5 rounded-[4px] border ${
                                evalObj.status === "valid"
                                  ? "bg-slate-50 border-[#CBD5E1] text-[#0B2545]"
                                  : evalObj.status === "mid-season"
                                  ? "bg-slate-200 border-[#0B2545] text-[#0B2545]"
                                  : "bg-[#0B2545] border-[#0B2545] text-white"
                              }`}
                            >
                              {evalObj.label}
                            </span>
                          </div>
                        )}
                      </td>
                    ))}
                    <td className="p-2.5">
                      {rows.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRow(row.id)}
                          aria-label={`Remove aircraft ${idx + 1}`}
                          className="text-base font-bold text-[#475569] hover:text-[#0B2545] px-2 py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                        >
                          ×
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {rows.length < 12 && (
                <button
                  type="button"
                  onClick={addRow}
                  className="text-base font-semibold text-[#0B2545] bg-[#F8FAFC] hover:bg-slate-100 border border-[#CBD5E1] px-4 py-2 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                >
                  + Add aircraft ({rows.length}/12)
                </button>
              )}
              <button
                type="button"
                onClick={handleCopy}
                disabled={activeRows.length === 0}
                className="text-base font-semibold text-[#0B2545] bg-white hover:bg-slate-50 disabled:opacity-50 border border-[#CBD5E1] px-4 py-2 rounded-[4px] cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              >
                {copied ? "Fleet check copied" : "Copy fleet check"}
              </button>
            </div>

            <p className="text-base text-[#475569]">
              Reference only. Requirements for each authority may differ. Nothing is stored.
            </p>
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

