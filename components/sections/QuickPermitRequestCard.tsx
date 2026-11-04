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
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = "from" | "to" | "flightType" | "permitType" | "date" | "email";

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

  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>(
    {}
  );
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  function sanitizeIcao(val: string): string {
    return val
      .replace(/[^a-zA-Z]/g, "")
      .toUpperCase()
      .slice(0, 4);
  }

  function handleFromChange(e: React.ChangeEvent<HTMLInputElement>) {
    const clean = sanitizeIcao(e.target.value);
    setFromIcao(clean);
    if (errors.from) {
      setErrors((prev) => ({ ...prev, from: undefined }));
    }
  }

  function handleToChange(e: React.ChangeEvent<HTMLInputElement>) {
    const clean = sanitizeIcao(e.target.value);
    setToIcao(clean);
    if (errors.to) {
      setErrors((prev) => ({ ...prev, to: undefined }));
    }
  }

  function handleIcaoBlur(field: "from" | "to", value: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (!ICAO_REGEX.test(value)) {
      setErrors((prev) => ({
        ...prev,
        [field]: "Enter a 4-letter ICAO code (A–Z).",
      }));
    }
  }

  function handleDateBlur(value: string) {
    setTouched((prev) => ({ ...prev, date: true }));
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, date: "Select planned UTC date." }));
    }
  }

  function handleEmailBlur(value: string) {
    setTouched((prev) => ({ ...prev, email: true }));
    if (!value.trim() || !EMAIL_REGEX.test(value.trim())) {
      setErrors((prev) => ({
        ...prev,
        email: "Enter a valid operations email.",
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
    setTouched({
      from: true,
      to: true,
      flightType: true,
      permitType: true,
      date: true,
      email: true,
    });

    const nextErrors: Partial<Record<FieldName, string>> = {};

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
    if (!email.trim() || !EMAIL_REGEX.test(email.trim())) {
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
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
      className="kcl-card text-[#0B2545] border-x border-b border-slate-200/80 rounded-[2px] p-5 sm:p-6 shadow-xl"
    >
      <div className="border-b border-slate-200/80 pb-3 mb-4 flex items-center justify-between gap-2">
        <h2 className="no-accent-bar text-lg font-bold text-[#0B2545] tracking-tight">
          Quick Permit Request
        </h2>
        <span className="text-[11px] font-mono font-medium text-[#5C6B7A]">
          * Required fields
        </span>
      </div>

      <form
        action="/request-permit"
        method="GET"
        noValidate
        onSubmit={handleSubmit}
        className="space-y-3"
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
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="quick-from-icao"
                className="block text-xs font-bold text-[#0B2545] mb-1"
              >
                From (ICAO) <span className="text-red-700">*</span>
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
                aria-invalid={Boolean(touched.from && errors.from)}
                aria-describedby={
                  touched.from && errors.from ? "err-from-icao" : undefined
                }
                placeholder="OMDB"
                className="w-full min-h-[40px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none font-mono text-sm font-bold text-[#0B2545] placeholder:text-[#94A3B8] placeholder:font-normal uppercase rounded-[2px] transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="quick-to-icao"
                className="block text-xs font-bold text-[#0B2545] mb-1"
              >
                To (ICAO) <span className="text-red-700">*</span>
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
                aria-invalid={Boolean(touched.to && errors.to)}
                aria-describedby={
                  touched.to && errors.to ? "err-to-icao" : undefined
                }
                placeholder="OPKC"
                className="w-full min-h-[40px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none font-mono text-sm font-bold text-[#0B2545] placeholder:text-[#94A3B8] placeholder:font-normal uppercase rounded-[2px] transition-colors"
              />
            </div>
          </div>

          {/* Quick-Select Common Pakistan Airports (Light chips with navy text) */}
          <div className="mt-1.5 flex flex-wrap items-center gap-1 text-[11px]">
            <span className="text-[#475569] font-medium mr-0.5">
              Pakistan ICAO ({activeIcaoField === "from" ? "From" : "To"}):
            </span>
            {PAKISTAN_AIRPORT_SUGGESTIONS.map((apt) => (
              <button
                key={apt.code}
                type="button"
                onClick={() => handleSelectSuggestion(apt.code)}
                title={`${apt.code} — ${apt.city}`}
                className="px-1.5 py-0.5 font-mono text-[10px] font-bold bg-[#F6F8FB] hover:bg-slate-200/80 text-[#0B2545] border border-[#CBD5E1] rounded-[2px] transition-colors cursor-pointer"
              >
                {apt.code}
              </button>
            ))}
          </div>

          {((touched.from && errors.from) || (touched.to && errors.to)) && (
            <p
              id={touched.from && errors.from ? "err-from-icao" : "err-to-icao"}
              role="alert"
              className="mt-1 text-[11px] font-semibold text-red-700"
            >
              {(touched.from && errors.from) || (touched.to && errors.to)}
            </p>
          )}
        </div>

        {/* Flight type toggle */}
        <div>
          <span
            id="quick-flight-type-label"
            className="block text-xs font-bold text-[#0B2545] mb-1"
          >
            Flight type <span className="text-red-700">*</span>
          </span>
          <div
            role="radiogroup"
            aria-labelledby="quick-flight-type-label"
            aria-required="true"
            className="grid grid-cols-2 gap-1.5 bg-[#F6F8FB] p-1 border border-[#CBD5E1] rounded-[2px]"
          >
            <button
              type="button"
              role="radio"
              aria-checked={flightType === "schedule"}
              onClick={() => {
                setFlightType("schedule");
                setTouched((prev) => ({ ...prev, flightType: true }));
                setErrors((prev) => ({ ...prev, flightType: undefined }));
              }}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-bold rounded-[2px] transition-colors cursor-pointer ${
                flightType === "schedule"
                  ? "bg-[#0B2545] text-white shadow-2xs"
                  : "bg-[#F6F8FB] text-[#16202B] hover:bg-slate-200/70"
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
                setTouched((prev) => ({ ...prev, flightType: true }));
                setErrors((prev) => ({ ...prev, flightType: undefined }));
              }}
              className={`min-h-[36px] px-3 py-1.5 text-xs font-bold rounded-[2px] transition-colors cursor-pointer ${
                flightType === "non-schedule"
                  ? "bg-[#0B2545] text-white shadow-2xs"
                  : "bg-[#F6F8FB] text-[#16202B] hover:bg-slate-200/70"
              }`}
            >
              Non-schedule
            </button>
          </div>
          {touched.flightType && errors.flightType && (
            <p
              role="alert"
              className="mt-1 text-[11px] font-semibold text-red-700"
            >
              {errors.flightType}
            </p>
          )}
        </div>

        {/* Permit type */}
        <div>
          <span
            id="quick-permit-type-label"
            className="block text-xs font-bold text-[#0B2545] mb-1"
          >
            Permit type <span className="text-red-700">*</span>
          </span>
          <div
            role="radiogroup"
            aria-labelledby="quick-permit-type-label"
            aria-required="true"
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
                onClick={() => {
                  setPermitType(opt.value);
                  setTouched((prev) => ({ ...prev, permitType: true }));
                  setErrors((prev) => ({ ...prev, permitType: undefined }));
                }}
                className={`min-h-[36px] px-2.5 py-1.5 text-xs font-bold rounded-[2px] transition-colors cursor-pointer ${
                  permitType === opt.value
                    ? "bg-[#0B2545] text-white shadow-2xs"
                    : "bg-[#F6F8FB] text-[#16202B] hover:bg-slate-200/70"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {touched.permitType && errors.permitType && (
            <p
              role="alert"
              className="mt-1 text-[11px] font-semibold text-red-700"
            >
              {errors.permitType}
            </p>
          )}
        </div>

        {/* Date (UTC) & Email */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="quick-date-utc"
                className="block text-xs font-bold text-[#0B2545] mb-1"
              >
                Date (UTC) <span className="text-red-700">*</span>
              </label>
              <input
                id="quick-date-utc"
                name="date"
                type="date"
                required
                value={dateUtc}
                onChange={(e) => {
                  setDateUtc(e.target.value);
                  if (errors.date) {
                    setErrors((prev) => ({ ...prev, date: undefined }));
                  }
                }}
                onBlur={() => handleDateBlur(dateUtc)}
                aria-invalid={Boolean(touched.date && errors.date)}
                className="w-full min-h-[40px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none font-mono text-xs font-semibold text-[#0B2545] rounded-[2px] transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="quick-email"
                className="block text-xs font-bold text-[#0B2545] mb-1"
              >
                Email <span className="text-red-700">*</span>
              </label>
              <input
                id="quick-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) {
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }
                }}
                onBlur={() => handleEmailBlur(email)}
                aria-invalid={Boolean(touched.email && errors.email)}
                placeholder="ops@airline.com"
                className="w-full min-h-[40px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none text-xs font-medium text-[#0B2545] placeholder:text-[#94A3B8] placeholder:font-normal rounded-[2px] transition-colors"
              />
            </div>
          </div>
          {((touched.date && errors.date) ||
            (touched.email && errors.email)) && (
            <p
              role="alert"
              className="mt-1 text-[11px] font-semibold text-red-700"
            >
              {(touched.date && errors.date) ||
                (touched.email && errors.email)}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full min-h-[44px] px-5 py-2.5 bg-[var(--accent)] hover:bg-[#DFB200] text-[#0B2545] font-bold text-sm tracking-tight inline-flex items-center justify-center gap-2 rounded-[2px] transition-colors cursor-pointer shadow-xs"
        >
          <span>Start my request</span>
          <span aria-hidden="true">→</span>
        </button>

        {/* One-line privacy note under the submit button */}
        <p className="text-[11px] text-[#475569] text-center leading-snug pt-0.5">
          Details are used only to coordinate your inquiry.{" "}
          <Link
            href="/privacy-policy"
            className="kcl-link text-[#0B2545] font-semibold"
          >
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
}
