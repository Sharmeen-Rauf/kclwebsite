"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";

const UTC_OFFSETS = [
  { label: "Select UTC offset", value: "" },
  { label: "UTC -12:00", value: "-12" },
  { label: "UTC -11:00", value: "-11" },
  { label: "UTC -10:00", value: "-10" },
  { label: "UTC -09:00", value: "-9" },
  { label: "UTC -08:00", value: "-8" },
  { label: "UTC -07:00", value: "-7" },
  { label: "UTC -06:00", value: "-6" },
  { label: "UTC -05:00", value: "-5" },
  { label: "UTC -04:00", value: "-4" },
  { label: "UTC -03:00", value: "-3" },
  { label: "UTC -02:00", value: "-2" },
  { label: "UTC -01:00", value: "-1" },
  { label: "UTC +00:00", value: "0" },
  { label: "UTC +01:00", value: "1" },
  { label: "UTC +02:00", value: "2" },
  { label: "UTC +03:00", value: "3" },
  { label: "UTC +03:30", value: "3.5" },
  { label: "UTC +04:00", value: "4" },
  { label: "UTC +04:30", value: "4.5" },
  { label: "UTC +05:00", value: "5" },
  { label: "UTC +05:30", value: "5.5" },
  { label: "UTC +06:00", value: "6" },
  { label: "UTC +07:00", value: "7" },
  { label: "UTC +08:00", value: "8" },
  { label: "UTC +09:00", value: "9" },
  { label: "UTC +10:00", value: "10" },
  { label: "UTC +11:00", value: "11" },
  { label: "UTC +12:00", value: "12" },
  { label: "UTC +13:00", value: "13" },
  { label: "UTC +14:00", value: "14" },
];

function formatUtcOffsetDate(msUtc: number, offsetHours: number): string {
  const localMs = msUtc + offsetHours * 3600 * 1000;
  const d = new Date(localMs);
  const year = d.getUTCFullYear();
  const month = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  const hours = String(d.getUTCHours()).padStart(2, "0");
  const minutes = String(d.getUTCMinutes()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function getLocalDayIndex(msUtc: number, offsetHours: number): number {
  const localMs = msUtc + offsetHours * 3600 * 1000;
  const d = new Date(localMs);
  return Math.floor(
    Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) / 86400000
  );
}

export function LayoverTimelineBuilder() {
  const [arrivalUtc, setArrivalUtc] = useState<string>("");
  const [departureUtc, setDepartureUtc] = useState<string>("");
  const [utcOffset, setUtcOffset] = useState<string>("");
  const [transferMinutes, setTransferMinutes] = useState<string>("");
  const [crewCount, setCrewCount] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const calculation = useMemo(() => {
    if (!arrivalUtc || !departureUtc || utcOffset === "") {
      return { ready: false as const, reason: "missing" as const };
    }

    const arrMs = Date.parse(`${arrivalUtc}:00Z`);
    const depMs = Date.parse(`${departureUtc}:00Z`);
    if (Number.isNaN(arrMs) || Number.isNaN(depMs) || depMs <= arrMs) {
      return { ready: false as const, reason: "invalid-range" as const };
    }

    const offsetNum = parseFloat(utcOffset);
    const totalMinutes = Math.round((depMs - arrMs) / 60000);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const transfer = Math.max(0, parseInt(transferMinutes || "0", 10) || 0);
    const clampedTransfer = Math.min(transfer, Math.floor(totalMinutes / 2));
    const hotelMinutes = Math.max(0, totalMinutes - clampedTransfer * 2);

    const arrivalLocal = formatUtcOffsetDate(arrMs, offsetNum);
    const departureLocal = formatUtcOffsetDate(depMs, offsetNum);

    const arrDay = getLocalDayIndex(arrMs, offsetNum);
    const depDay = getLocalDayIndex(depMs, offsetNum);
    const roomNights = Math.max(1, depDay - arrDay);

    const transferPct =
      totalMinutes > 0 ? Math.max(6, (clampedTransfer / totalMinutes) * 100) : 0;
    const inboundPct = clampedTransfer > 0 ? Math.min(25, transferPct) : 0;
    const outboundPct = clampedTransfer > 0 ? Math.min(25, transferPct) : 0;
    const hotelPct = Math.max(0, 100 - inboundPct - outboundPct);

    return {
      ready: true as const,
      totalMinutes,
      hours,
      minutes,
      transfer: clampedTransfer,
      hotelMinutes,
      hotelHours: Math.floor(hotelMinutes / 60),
      hotelRemMinutes: hotelMinutes % 60,
      arrivalLocal,
      departureLocal,
      roomNights,
      inboundPct,
      hotelPct,
      outboundPct,
    };
  }, [arrivalUtc, departureUtc, utcOffset, transferMinutes]);

  const handleCopyTimeline = async () => {
    if (!calculation.ready) return;
    const lines = [
      `Crew Layover Summary`,
      `Total Layover: ${calculation.hours}h ${calculation.minutes}m`,
      `Local Arrival: ${calculation.arrivalLocal}`,
      `Local Departure: ${calculation.departureLocal}`,
      `Estimated Room Nights (local dates): ${calculation.roomNights}`,
      `Hotel Window: ${calculation.hotelHours}h ${calculation.hotelRemMinutes}m`,
      transferMinutes ? `Airport-Hotel Transfer: ${transferMinutes} min each way` : null,
      crewCount ? `Crew Count: ${crewCount}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await navigator.clipboard.writeText(lines);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const requestHref = `/request-flight-support?service=crew-logistics${
    arrivalUtc ? `&arrivalUtc=${encodeURIComponent(arrivalUtc)}` : ""
  }${departureUtc ? `&departureUtc=${encodeURIComponent(departureUtc)}` : ""}${
    utcOffset !== "" ? `&utcOffset=${encodeURIComponent(utcOffset)}` : ""
  }${transferMinutes ? `&transferMinutes=${encodeURIComponent(transferMinutes)}` : ""}${
    crewCount ? `&crewCount=${encodeURIComponent(crewCount)}` : ""
  }`;

  const faqs = SERVICE_TOOL_FAQS["crew-logistics"] || [];

  return (
    <section
      aria-labelledby="layover-timeline-heading"
      className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 shadow-2xs space-y-5"
    >
      <div className="max-w-3xl">
        <h2
          id="layover-timeline-heading"
          className="text-2xl font-bold text-[#0B2545] mb-2"
        >
          See Your Crew Layover at a Glance
        </h2>
        <p className="text-base text-[#475569] leading-relaxed">
          Enter your arrival and departure times to see the hotel window and the room nights you need.
        </p>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        <div>
          <label
            htmlFor="layover-arrival-utc"
            className="block text-base font-medium text-[#0B2545] mb-1"
          >
            Arrival date &amp; time (UTC)
          </label>
          <input
            id="layover-arrival-utc"
            type="datetime-local"
            value={arrivalUtc}
            onChange={(e) => setArrivalUtc(e.target.value)}
            className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          />
        </div>

        <div>
          <label
            htmlFor="layover-departure-utc"
            className="block text-base font-medium text-[#0B2545] mb-1"
          >
            Departure date &amp; time (UTC)
          </label>
          <input
            id="layover-departure-utc"
            type="datetime-local"
            value={departureUtc}
            onChange={(e) => setDepartureUtc(e.target.value)}
            className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          />
        </div>

        <div>
          <label
            htmlFor="layover-utc-offset"
            className="block text-base font-medium text-[#0B2545] mb-1"
          >
            Local time offset
          </label>
          <select
            id="layover-utc-offset"
            value={utcOffset}
            onChange={(e) => setUtcOffset(e.target.value)}
            className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          >
            {UTC_OFFSETS.map((opt) => (
              <option key={opt.label} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="layover-transfer-min"
            className="block text-base font-medium text-[#0B2545] mb-1"
          >
            Transfer (min, optional)
          </label>
          <input
            id="layover-transfer-min"
            type="number"
            min={0}
            max={240}
            placeholder="e.g. 25"
            value={transferMinutes}
            onChange={(e) => setTransferMinutes(e.target.value)}
            className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          />
        </div>

        <div>
          <label
            htmlFor="layover-crew-count"
            className="block text-base font-medium text-[#0B2545] mb-1"
          >
            Crew count (optional)
          </label>
          <input
            id="layover-crew-count"
            type="number"
            min={1}
            max={50}
            placeholder="e.g. 6"
            value={crewCount}
            onChange={(e) => setCrewCount(e.target.value)}
            className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          />
        </div>
      </div>

      {/* Output Area */}
      <div
        aria-live="polite"
        className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 sm:p-5 space-y-4"
      >
        {!calculation.ready ? (
          <p className="text-base text-[#475569]">
            {calculation.reason === "invalid-range"
              ? "Departure time must be later than arrival time to calculate the layover window."
              : "Enter your arrival time, departure time, and local time offset above to calculate your hotel window and room nights."}
          </p>
        ) : (
          <>
            {/* Inline SVG Horizontal Timeline Bar */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-base font-semibold text-[#0B2545]">
                <span>Arrival &amp; transfer</span>
                <span>
                  Hotel window ({calculation.hotelHours}h {calculation.hotelRemMinutes}m)
                </span>
                <span>Pick-up &amp; transfer back</span>
              </div>

              <svg
                viewBox="0 0 1000 40"
                className="w-full h-10 rounded-[4px] overflow-hidden"
                role="img"
                aria-label={`Layover timeline showing arrival and transfer, ${calculation.hotelHours} hours ${calculation.hotelRemMinutes} minutes hotel window, and pick-up transfer back`}
              >
                {calculation.inboundPct > 0 && (
                  <rect
                    x="0"
                    y="0"
                    width={calculation.inboundPct * 10}
                    height="40"
                    fill="#94A3B8"
                  />
                )}
                <rect
                  x={calculation.inboundPct * 10}
                  y="0"
                  width={calculation.hotelPct * 10}
                  height="40"
                  fill="#0B2545"
                />
                {calculation.outboundPct > 0 && (
                  <rect
                    x={(calculation.inboundPct + calculation.hotelPct) * 10}
                    y="0"
                    width={calculation.outboundPct * 10}
                    height="40"
                    fill="#64748B"
                  />
                )}
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-3">
                <div className="text-base text-[#475569]">Total layover duration</div>
                <div className="text-lg font-bold text-[#0B2545]">
                  {calculation.hours}h {calculation.minutes}m
                </div>
              </div>
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-3">
                <div className="text-base text-[#475569]">Local arrival</div>
                <div className="text-lg font-bold text-[#0B2545]">
                  {calculation.arrivalLocal}
                </div>
              </div>
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-3">
                <div className="text-base text-[#475569]">Local departure</div>
                <div className="text-lg font-bold text-[#0B2545]">
                  {calculation.departureLocal}
                </div>
              </div>
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-3">
                <div className="text-base text-[#475569]">Room nights (local dates)</div>
                <div className="text-lg font-bold text-[#0B2545]">
                  {calculation.roomNights}{" "}
                  {calculation.roomNights === 1 ? "night" : "nights"}
                </div>
              </div>
            </div>
          </>
        )}

        <p className="text-base text-[#475569]">
          Rest requirements are set by your operator and your regulator. This tool does not check compliance.
        </p>
      </div>

      {/* Quick Questions + Action Buttons */}
      <div className="pt-4 border-t border-[#CBD5E1] flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {faqs.map((item) => (
            <div key={item.question} className="space-y-1">
              <h3 className="text-base font-bold text-[#0B2545]">{item.question}</h3>
              <p className="text-base text-[#475569] leading-snug">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCopyTimeline}
            disabled={!calculation.ready}
            className="bg-white hover:bg-slate-50 disabled:opacity-50 border border-[#CBD5E1] text-[#0B2545] font-semibold text-base px-5 py-3 rounded-[4px] cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          >
            {copied ? "Timeline copied" : "Copy timeline"}
          </button>

          <Link
            href={requestHref}
            className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-6 py-3 rounded-[4px] inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none"
          >
            <span>Start My Request</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

