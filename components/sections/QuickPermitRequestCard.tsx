"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export function QuickPermitRequestCard() {
  const router = useRouter();
  const [fromIcao, setFromIcao] = useState("");
  const [toIcao, setToIcao] = useState("");
  const [flightType, setFlightType] = useState<"schedule" | "non-schedule">(
    "non-schedule"
  );
  const [permitType, setPermitType] = useState<
    "overflight" | "landing" | "both"
  >("overflight");
  const [dateUtc, setDateUtc] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (fromIcao.trim()) params.set("from", fromIcao.trim().toUpperCase());
    if (toIcao.trim()) params.set("to", toIcao.trim().toUpperCase());
    params.set("flightType", flightType);
    params.set("permitType", permitType);
    if (dateUtc.trim()) params.set("date", dateUtc.trim());
    if (email.trim()) params.set("email", email.trim());

    router.push(`/request-permit?${params.toString()}`);
  }

  return (
    <div className="bg-white text-[#0B2545] border border-slate-200 rounded-[2px] p-5 sm:p-6 shadow-2xl">
      <div className="border-b border-slate-200 pb-3 mb-4 flex items-center justify-between gap-2">
        <h2 className="text-lg font-bold text-[#0B2545] tracking-tight">
          Quick Permit Request
        </h2>
        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0B2545] bg-[#F6F8FB] border border-slate-200 px-2.5 py-1 rounded-[2px]">
          <span className="h-2 w-2 rounded-full bg-[#E8A200]" />
          24/7 Ops Desk
        </span>
      </div>

      <form
        action="/request-permit"
        method="GET"
        onSubmit={handleSubmit}
        className="space-y-3.5"
      >
        <input type="hidden" name="flightType" value={flightType} />
        <input type="hidden" name="permitType" value={permitType} />

        {/* From (ICAO) & To (ICAO) */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="quick-from-icao"
              className="block text-xs font-bold text-[#0B2545] mb-1"
            >
              From (ICAO)
            </label>
            <input
              id="quick-from-icao"
              name="from"
              type="text"
              maxLength={4}
              value={fromIcao}
              onChange={(e) => setFromIcao(e.target.value.toUpperCase())}
              placeholder="e.g. OMDB"
              className="w-full min-h-[42px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] focus:border-[#0B2545] font-mono text-sm font-semibold text-[#0B2545] uppercase rounded-[2px]"
            />
          </div>
          <div>
            <label
              htmlFor="quick-to-icao"
              className="block text-xs font-bold text-[#0B2545] mb-1"
            >
              To (ICAO)
            </label>
            <input
              id="quick-to-icao"
              name="to"
              type="text"
              maxLength={4}
              value={toIcao}
              onChange={(e) => setToIcao(e.target.value.toUpperCase())}
              placeholder="e.g. OPKC"
              className="w-full min-h-[42px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] focus:border-[#0B2545] font-mono text-sm font-semibold text-[#0B2545] uppercase rounded-[2px]"
            />
          </div>
        </div>

        {/* Flight type toggle (Schedule / Non-schedule) */}
        <div>
          <span
            id="quick-flight-type-label"
            className="block text-xs font-bold text-[#0B2545] mb-1"
          >
            Flight type
          </span>
          <div
            role="radiogroup"
            aria-labelledby="quick-flight-type-label"
            className="grid grid-cols-2 gap-1.5 bg-[#F6F8FB] p-1 border border-[#CBD5E1] rounded-[2px]"
          >
            <button
              type="button"
              role="radio"
              aria-checked={flightType === "schedule"}
              onClick={() => setFlightType("schedule")}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-bold rounded-[2px] transition-colors cursor-pointer ${
                flightType === "schedule"
                  ? "bg-[#0B2545] text-white shadow-2xs"
                  : "text-[#5C6B7A] hover:text-[#0B2545]"
              }`}
            >
              Schedule
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={flightType === "non-schedule"}
              onClick={() => setFlightType("non-schedule")}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-bold rounded-[2px] transition-colors cursor-pointer ${
                flightType === "non-schedule"
                  ? "bg-[#0B2545] text-white shadow-2xs"
                  : "text-[#5C6B7A] hover:text-[#0B2545]"
              }`}
            >
              Non-schedule
            </button>
          </div>
        </div>

        {/* Permit type (Overflight / Landing / Both) */}
        <div>
          <span
            id="quick-permit-type-label"
            className="block text-xs font-bold text-[#0B2545] mb-1"
          >
            Permit type
          </span>
          <div
            role="radiogroup"
            aria-labelledby="quick-permit-type-label"
            className="grid grid-cols-3 gap-1.5 bg-[#F6F8FB] p-1 border border-[#CBD5E1] rounded-[2px]"
          >
            {(
              [
                { value: "overflight", label: "Overflight" },
                { value: "landing", label: "Landing" },
                { value: "both", label: "Both" },
              ] as const
            ).map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={permitType === opt.value}
                onClick={() => setPermitType(opt.value)}
                className={`min-h-[36px] px-2.5 py-1.5 text-xs font-bold rounded-[2px] transition-colors cursor-pointer ${
                  permitType === opt.value
                    ? "bg-[#0B2545] text-white shadow-2xs"
                    : "text-[#5C6B7A] hover:text-[#0B2545]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Date (UTC) & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="quick-date-utc"
              className="block text-xs font-bold text-[#0B2545] mb-1"
            >
              Date (UTC)
            </label>
            <input
              id="quick-date-utc"
              name="date"
              type="date"
              value={dateUtc}
              onChange={(e) => setDateUtc(e.target.value)}
              className="w-full min-h-[42px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] focus:border-[#0B2545] font-mono text-xs font-semibold text-[#0B2545] rounded-[2px]"
            />
          </div>
          <div>
            <label
              htmlFor="quick-email"
              className="block text-xs font-bold text-[#0B2545] mb-1"
            >
              Email
            </label>
            <input
              id="quick-email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ops@airline.com"
              className="w-full min-h-[42px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] focus:border-[#0B2545] text-xs font-medium text-[#0B2545] rounded-[2px]"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full min-h-[46px] px-5 py-3 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm tracking-tight inline-flex items-center justify-center gap-2 rounded-[2px] transition-colors cursor-pointer shadow-xs"
        >
          <span>Start my request</span>
          <span aria-hidden="true">→</span>
        </button>
      </form>
    </div>
  );
}

