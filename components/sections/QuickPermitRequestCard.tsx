"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PAKISTAN_AIRPORT_SUGGESTIONS = [
  { code: "OPKC", city: "Karachi" },
  { code: "OPLA", city: "Lahore" },
  { code: "OPIS", city: "Islamabad" },
  { code: "OPPS", city: "Peshawar" },
  { code: "OPQT", city: "Quetta" },
  { code: "OPMT", city: "Multan" },
] as const;

const ICAO_REGEX = /^[A-Z]{4}$/;

export function QuickPermitRequestCard() {
  const router = useRouter();
  const [fromIcao, setFromIcao] = useState("");
  const [toIcao, setToIcao] = useState("");
  const [activeIcaoField, setActiveIcaoField] = useState<"from" | "to">("to");
  const [flightType, setFlightType] = useState<"" | "schedule" | "non-schedule">(
    ""
  );
  const [permitType, setPermitType] = useState<
    "" | "overflight" | "landing" | "both"
  >("");
  const [dateUtc, setDateUtc] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{
    from?: string;
    to?: string;
    flightType?: string;
    permitType?: string;
    date?: string;
    email?: string;
  }>({});

  function sanitizeIcao(val: string): string {
    return val
      .replace(/[^a-zA-Z]/g, "")
      .toUpperCase()
      .slice(0, 4);
  }

  function handleFromChange(e: React.ChangeEvent<HTMLInputElement>) {
    const clean = sanitizeIcao(e.target.value);
    setFromIcao(clean);
    if (errors.from && ICAO_REGEX.test(clean)) {
      setErrors((prev) => ({ ...prev, from: undefined }));
    }
  }

  function handleToChange(e: React.ChangeEvent<HTMLInputElement>) {
    const clean = sanitizeIcao(e.target.value);
    setToIcao(clean);
    if (errors.to && ICAO_REGEX.test(clean)) {
      setErrors((prev) => ({ ...prev, to: undefined }));
    }
  }

  function handleIcaoBlur(field: "from" | "to", value: string) {
    if (value.length > 0 && !ICAO_REGEX.test(value)) {
      setErrors((prev) => ({
        ...prev,
        [field]: "Enter a 4-letter ICAO code (A–Z).",
      }));
    }
  }

  function handleSelectSuggestion(code: string) {
    if (activeIcaoField === "from") {
      setFromIcao(code);
      setErrors((prev) => ({ ...prev, from: undefined }));
    } else {
      setToIcao(code);
      setErrors((prev) => ({ ...prev, to: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors: typeof errors = {};

    if (!ICAO_REGEX.test(fromIcao)) {
      nextErrors.from = "Enter a valid 4-letter ICAO code (e.g. OMDB).";
    }
    if (!ICAO_REGEX.test(toIcao)) {
      nextErrors.to = "Enter a valid 4-letter ICAO code (e.g. OPKC).";
    }
    if (!flightType) {
      nextErrors.flightType = "Select Schedule or Non-schedule.";
    }
    if (!permitType) {
      nextErrors.permitType = "Select a permit type.";
    }
    if (!dateUtc.trim()) {
      nextErrors.date = "Select planned UTC date.";
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Enter a valid operations email.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    const params = new URLSearchParams({
      from: fromIcao,
      to: toIcao,
      flightType,
      permitType,
      date: dateUtc.trim(),
      email: email.trim(),
    });

    router.push(`/request-permit?${params.toString()}`);
  }

  return (
    <div className="bg-black/45 backdrop-blur-md text-white border border-white/25 rounded-[2px] p-4 sm:p-5 shadow-2xl">
      <div className="border-b border-white/15 pb-2.5 mb-3 flex items-center justify-between gap-2">
        <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
          Quick Permit Request
        </h2>
        <span className="text-[11px] font-mono text-slate-200">
          * Required fields
        </span>
      </div>

      <form
        action="/request-permit"
        method="GET"
        noValidate
        onSubmit={handleSubmit}
        className="space-y-2.5"
      >
        <input type="hidden" name="flightType" value={flightType} />
        <input type="hidden" name="permitType" value={permitType} />

        {/* Common Pakistan Airport Suggestions Datalist */}
        <datalist id="pakistan-icao-airports">
          {PAKISTAN_AIRPORT_SUGGESTIONS.map((apt) => (
            <option key={apt.code} value={apt.code}>
              {apt.code} — {apt.city}, Pakistan
            </option>
          ))}
        </datalist>

        {/* From (ICAO) & To (ICAO) */}
        <div>
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label
                htmlFor="quick-from-icao"
                className="block text-xs font-bold text-white mb-1"
              >
                From (ICAO) <span className="text-[#F2C200]">*</span>
              </label>
              <input
                id="quick-from-icao"
                name="from"
                type="text"
                required
                inputMode="text"
                autoComplete="off"
                list="pakistan-icao-airports"
                maxLength={4}
                value={fromIcao}
                onFocus={() => setActiveIcaoField("from")}
                onChange={handleFromChange}
                onBlur={() => handleIcaoBlur("from", fromIcao)}
                aria-invalid={Boolean(errors.from)}
                aria-describedby={errors.from ? "err-from-icao" : undefined}
                placeholder="OMDB"
                className="w-full min-h-[38px] px-3 py-1.5 bg-white/95 border border-slate-300 focus:border-[#F2C200] font-mono text-sm font-bold text-[#0B2545] placeholder:text-[#334155] placeholder:font-normal uppercase rounded-[2px]"
              />
            </div>
            <div>
              <label
                htmlFor="quick-to-icao"
                className="block text-xs font-bold text-white mb-1"
              >
                To (ICAO) <span className="text-[#F2C200]">*</span>
              </label>
              <input
                id="quick-to-icao"
                name="to"
                type="text"
                required
                inputMode="text"
                autoComplete="off"
                list="pakistan-icao-airports"
                maxLength={4}
                value={toIcao}
                onFocus={() => setActiveIcaoField("to")}
                onChange={handleToChange}
                onBlur={() => handleIcaoBlur("to", toIcao)}
                aria-invalid={Boolean(errors.to)}
                aria-describedby={errors.to ? "err-to-icao" : undefined}
                placeholder="OPKC"
                className="w-full min-h-[38px] px-3 py-1.5 bg-white/95 border border-slate-300 focus:border-[#F2C200] font-mono text-sm font-bold text-[#0B2545] placeholder:text-[#334155] placeholder:font-normal uppercase rounded-[2px]"
              />
            </div>
          </div>

          {/* Quick-Select Common Pakistan Airports */}
          <div className="mt-1.5 flex flex-wrap items-center gap-1 text-[11px]">
            <span className="text-slate-200 font-medium mr-0.5">
              Pakistan ICAO ({activeIcaoField === "from" ? "From" : "To"}):
            </span>
            {PAKISTAN_AIRPORT_SUGGESTIONS.map((apt) => (
              <button
                key={apt.code}
                type="button"
                onClick={() => handleSelectSuggestion(apt.code)}
                title={`${apt.code} — ${apt.city}`}
                className="px-1.5 py-0.5 font-mono text-[10px] font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/25 rounded-[2px] transition-colors cursor-pointer"
              >
                {apt.code}
              </button>
            ))}
          </div>

          {(errors.from || errors.to) && (
            <p
              id={errors.from ? "err-from-icao" : "err-to-icao"}
              role="alert"
              className="mt-1 text-[11px] font-semibold text-[#FDE047]"
            >
              {errors.from || errors.to}
            </p>
          )}
        </div>

        {/* Flight type toggle (No default selected) */}
        <div>
          <span
            id="quick-flight-type-label"
            className="block text-xs font-bold text-white mb-1"
          >
            Flight type <span className="text-[#F2C200]">*</span>
          </span>
          <div
            role="radiogroup"
            aria-labelledby="quick-flight-type-label"
            aria-required="true"
            className="grid grid-cols-2 gap-1.5 bg-black/35 p-1 border border-white/25 rounded-[2px]"
          >
            <button
              type="button"
              role="radio"
              aria-checked={flightType === "schedule"}
              onClick={() => {
                setFlightType("schedule");
                setErrors((prev) => ({ ...prev, flightType: undefined }));
              }}
              className={`min-h-[34px] px-3 py-1 text-xs font-bold rounded-[2px] transition-colors cursor-pointer ${
                flightType === "schedule"
                  ? "bg-white text-[#0B2545] shadow-2xs"
                  : "text-slate-100 hover:text-white hover:bg-white/10"
              }`}
            >
              Schedule
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={flightType === "non-schedule"}
              onClick={() => {
                setFlightType("non-schedule");
                setErrors((prev) => ({ ...prev, flightType: undefined }));
              }}
              className={`min-h-[34px] px-3 py-1 text-xs font-bold rounded-[2px] transition-colors cursor-pointer ${
                flightType === "non-schedule"
                  ? "bg-white text-[#0B2545] shadow-2xs"
                  : "text-slate-100 hover:text-white hover:bg-white/10"
              }`}
            >
              Non-schedule
            </button>
          </div>
          {errors.flightType && (
            <p role="alert" className="mt-1 text-[11px] font-semibold text-[#FDE047]">
              {errors.flightType}
            </p>
          )}
        </div>

        {/* Permit type (No default selected) */}
        <div>
          <span
            id="quick-permit-type-label"
            className="block text-xs font-bold text-white mb-1"
          >
            Permit type <span className="text-[#F2C200]">*</span>
          </span>
          <div
            role="radiogroup"
            aria-labelledby="quick-permit-type-label"
            aria-required="true"
            className="grid grid-cols-3 gap-1.5 bg-black/35 p-1 border border-white/25 rounded-[2px]"
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
                onClick={() => {
                  setPermitType(opt.value);
                  setErrors((prev) => ({ ...prev, permitType: undefined }));
                }}
                className={`min-h-[34px] px-2.5 py-1 text-xs font-bold rounded-[2px] transition-colors cursor-pointer ${
                  permitType === opt.value
                    ? "bg-white text-[#0B2545] shadow-2xs"
                    : "text-slate-100 hover:text-white hover:bg-white/10"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {errors.permitType && (
            <p role="alert" className="mt-1 text-[11px] font-semibold text-[#FDE047]">
              {errors.permitType}
            </p>
          )}
        </div>

        {/* Date (UTC) & Email */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label
                htmlFor="quick-date-utc"
                className="block text-xs font-bold text-white mb-1"
              >
                Date (UTC) <span className="text-[#F2C200]">*</span>
              </label>
              <input
                id="quick-date-utc"
                name="date"
                type="date"
                required
                value={dateUtc}
                onChange={(e) => {
                  setDateUtc(e.target.value);
                  setErrors((prev) => ({ ...prev, date: undefined }));
                }}
                aria-invalid={Boolean(errors.date)}
                className="w-full min-h-[38px] px-2.5 py-1.5 bg-white/95 border border-slate-300 focus:border-[#F2C200] font-mono text-xs font-semibold text-[#0B2545] rounded-[2px]"
              />
            </div>
            <div>
              <label
                htmlFor="quick-email"
                className="block text-xs font-bold text-white mb-1"
              >
                Email <span className="text-[#F2C200]">*</span>
              </label>
              <input
                id="quick-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                aria-invalid={Boolean(errors.email)}
                placeholder="ops@airline.com"
                className="w-full min-h-[38px] px-3 py-1.5 bg-white/95 border border-slate-300 focus:border-[#F2C200] text-xs font-medium text-[#0B2545] placeholder:text-[#334155] rounded-[2px]"
              />
            </div>
          </div>
          {(errors.date || errors.email) && (
            <p role="alert" className="mt-1 text-[11px] font-semibold text-[#FDE047]">
              {errors.date || errors.email}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full min-h-[42px] px-5 py-2.5 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm tracking-tight inline-flex items-center justify-center gap-2 rounded-[2px] transition-colors cursor-pointer shadow-md"
        >
          <span>Start my request</span>
          <span aria-hidden="true">→</span>
        </button>

        {/* One-line privacy note under the submit button */}
        <p className="text-[11px] text-slate-200 text-center leading-snug pt-0.5">
          Details are used only to coordinate your inquiry.{" "}
          <Link
            href="/privacy-policy"
            className="underline text-white hover:text-[#F2C200]"
          >
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
}
