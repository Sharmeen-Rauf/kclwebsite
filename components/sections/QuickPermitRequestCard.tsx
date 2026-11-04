"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchAirports, type Airport } from "@/content/airports";

const ICAO_REGEX = /^[A-Z]{4}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldName = "from" | "to" | "flightType" | "permitType" | "date" | "email";

export function QuickPermitRequestCard() {
  const router = useRouter();

  // Route & Autocomplete State
  const [fromIcao, setFromIcao] = useState("");
  const [fromQuery, setFromQuery] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState<Airport[]>([]);
  const [fromOpen, setFromOpen] = useState(false);

  const [toIcao, setToIcao] = useState("");
  const [toQuery, setToQuery] = useState("");
  const [toSuggestions, setToSuggestions] = useState<Airport[]>([]);
  const [toOpen, setToOpen] = useState(false);

  const fromContainerRef = useRef<HTMLDivElement>(null);
  const toContainerRef = useRef<HTMLDivElement>(null);

  // Form Fields
  const [flightType, setFlightType] = useState<"" | "schedule" | "non-schedule">("");
  const [permitType, setPermitType] = useState<"" | "overflight" | "landing" | "both">("");
  const [showRouteDetails, setShowRouteDetails] = useState(false);
  const [countries, setCountries] = useState("");
  const [dateUtc, setDateUtc] = useState("");
  const [email, setEmail] = useState("");

  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        fromContainerRef.current &&
        !fromContainerRef.current.contains(event.target as Node)
      ) {
        setFromOpen(false);
      }
      if (
        toContainerRef.current &&
        !toContainerRef.current.contains(event.target as Node)
      ) {
        setToOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleFromChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setFromQuery(val);
    const cleanUpper = val.trim().toUpperCase();

    if (ICAO_REGEX.test(cleanUpper)) {
      setFromIcao(cleanUpper);
    } else {
      setFromIcao("");
    }

    if (val.trim().length >= 1) {
      const results = searchAirports(val, 8);
      setFromSuggestions(results);
      setFromOpen(results.length > 0);
    } else {
      setFromSuggestions([]);
      setFromOpen(false);
    }

    if (errors.from) {
      setErrors((prev) => ({ ...prev, from: undefined }));
    }
  }

  function handleToChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setToQuery(val);
    const cleanUpper = val.trim().toUpperCase();

    if (ICAO_REGEX.test(cleanUpper)) {
      setToIcao(cleanUpper);
    } else {
      setToIcao("");
    }

    if (val.trim().length >= 1) {
      const results = searchAirports(val, 8);
      setToSuggestions(results);
      setToOpen(results.length > 0);
    } else {
      setToSuggestions([]);
      setToOpen(false);
    }

    if (errors.to) {
      setErrors((prev) => ({ ...prev, to: undefined }));
    }
  }

  function handleSelectAirport(field: "from" | "to", airport: Airport) {
    if (field === "from") {
      setFromIcao(airport.icao);
      setFromQuery(airport.icao);
      setFromOpen(false);
      if (errors.from) {
        setErrors((prev) => ({ ...prev, from: undefined }));
      }
    } else {
      setToIcao(airport.icao);
      setToQuery(airport.icao);
      setToOpen(false);
      if (errors.to) {
        setErrors((prev) => ({ ...prev, to: undefined }));
      }
    }
  }

  function handleFromBlur() {
    setTouched((prev) => ({ ...prev, from: true }));
    const candidate = (fromIcao || fromQuery).trim().toUpperCase();
    if (ICAO_REGEX.test(candidate)) {
      setFromIcao(candidate);
      setFromQuery(candidate);
      if (errors.from) {
        setErrors((prev) => ({ ...prev, from: undefined }));
      }
    } else {
      setErrors((prev) => ({
        ...prev,
        from: "Enter a valid 4-letter ICAO code (e.g. EGLL).",
      }));
    }
  }

  function handleToBlur() {
    setTouched((prev) => ({ ...prev, to: true }));
    const candidate = (toIcao || toQuery).trim().toUpperCase();
    if (ICAO_REGEX.test(candidate)) {
      setToIcao(candidate);
      setToQuery(candidate);
      if (errors.to) {
        setErrors((prev) => ({ ...prev, to: undefined }));
      }
    } else {
      setErrors((prev) => ({
        ...prev,
        to: "Enter a valid 4-letter ICAO code (e.g. OMDB).",
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

    const activeFrom = (fromIcao || fromQuery).trim().toUpperCase();
    const activeTo = (toIcao || toQuery).trim().toUpperCase();

    const nextErrors: Partial<Record<FieldName, string>> = {};

    if (!ICAO_REGEX.test(activeFrom)) {
      nextErrors.from = "Enter a valid 4-letter ICAO code (e.g. EGLL).";
    }
    if (!ICAO_REGEX.test(activeTo)) {
      nextErrors.to = "Enter a valid 4-letter ICAO code (e.g. OMDB).";
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
      from: activeFrom,
      to: activeTo,
      flightType,
      permitType,
      date: dateUtc.trim(),
      email: email.trim(),
    });

    if (countries.trim()) {
      params.set("countries", countries.trim());
      params.set("notes", `Countries to overfly or land in: ${countries.trim()}`);
    }

    router.push(`/request-permit?${params.toString()}`);
  }

  return (
    <div
      style={{
        backgroundColor: "rgba(11, 37, 69, 0.52)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      className="text-white border border-white/20 rounded-[2px] p-5 sm:p-6 shadow-2xl"
    >
      <div className="border-b border-white/15 pb-3 mb-4 flex items-center justify-between gap-2">
        <h2 className="no-accent-bar text-lg font-bold text-white tracking-tight">
          Quick Permit Request
        </h2>
        <span className="text-[11px] font-mono font-medium text-slate-300">
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
        {countries.trim() && (
          <input type="hidden" name="countries" value={countries.trim()} />
        )}

        {/* From (ICAO) & To (ICAO) with Worldwide Airport Autocomplete */}
        <div className="grid grid-cols-2 gap-3">
          {/* FROM INPUT */}
          <div ref={fromContainerRef} className="relative">
            <label
              htmlFor="quick-from-icao"
              className="block text-xs font-bold text-slate-100 mb-1"
            >
              From (ICAO) <span className="text-slate-300">*</span>
            </label>
            <input
              id="quick-from-icao"
              name="from"
              type="text"
              required
              autoComplete="off"
              value={fromQuery}
              onChange={handleFromChange}
              onFocus={() => {
                if (fromQuery.trim().length >= 1) {
                  const results = searchAirports(fromQuery, 8);
                  setFromSuggestions(results);
                  setFromOpen(results.length > 0);
                }
              }}
              onBlur={handleFromBlur}
              aria-invalid={Boolean(touched.from && errors.from)}
              aria-describedby={
                touched.from && errors.from ? "err-from-icao" : undefined
              }
              placeholder="e.g. EGLL"
              className="w-full min-h-[40px] px-3 py-2 bg-white/10 hover:bg-white/15 focus:bg-white/15 border border-white/25 focus:border-white focus:outline-none font-mono text-sm font-bold text-white placeholder:text-slate-400 placeholder:font-normal uppercase rounded-[2px] transition-colors"
            />

            {/* Worldwide Autocomplete Dropdown for From */}
            {fromOpen && fromSuggestions.length > 0 && (
              <ul
                role="listbox"
                aria-label="Airport suggestions for departure"
                className="absolute left-0 right-0 top-full mt-1 z-50 max-h-56 overflow-y-auto bg-[#07192F] border border-white/30 rounded-[2px] shadow-2xl divide-y divide-white/10 text-left"
              >
                {fromSuggestions.map((apt) => (
                  <li key={`from-${apt.icao}`}>
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectAirport("from", apt);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-white/15 focus:bg-white/15 transition-colors cursor-pointer block"
                    >
                      <div className="flex items-baseline gap-1.5 text-xs text-white">
                        <span className="font-mono font-bold text-white shrink-0">
                          {apt.icao}
                        </span>
                        <span className="text-slate-300 truncate">
                          · {apt.name} · {apt.city}, {apt.country}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {touched.from && errors.from && (
              <p
                id="err-from-icao"
                role="alert"
                className="mt-1 text-[11px] font-semibold text-red-300"
              >
                {errors.from}
              </p>
            )}
          </div>

          {/* TO INPUT */}
          <div ref={toContainerRef} className="relative">
            <label
              htmlFor="quick-to-icao"
              className="block text-xs font-bold text-slate-100 mb-1"
            >
              To (ICAO) <span className="text-slate-300">*</span>
            </label>
            <input
              id="quick-to-icao"
              name="to"
              type="text"
              required
              autoComplete="off"
              value={toQuery}
              onChange={handleToChange}
              onFocus={() => {
                if (toQuery.trim().length >= 1) {
                  const results = searchAirports(toQuery, 8);
                  setToSuggestions(results);
                  setToOpen(results.length > 0);
                }
              }}
              onBlur={handleToBlur}
              aria-invalid={Boolean(touched.to && errors.to)}
              aria-describedby={
                touched.to && errors.to ? "err-to-icao" : undefined
              }
              placeholder="e.g. OMDB"
              className="w-full min-h-[40px] px-3 py-2 bg-white/10 hover:bg-white/15 focus:bg-white/15 border border-white/25 focus:border-white focus:outline-none font-mono text-sm font-bold text-white placeholder:text-slate-400 placeholder:font-normal uppercase rounded-[2px] transition-colors"
            />

            {/* Worldwide Autocomplete Dropdown for To */}
            {toOpen && toSuggestions.length > 0 && (
              <ul
                role="listbox"
                aria-label="Airport suggestions for destination"
                className="absolute left-0 right-0 top-full mt-1 z-50 max-h-56 overflow-y-auto bg-[#07192F] border border-white/30 rounded-[2px] shadow-2xl divide-y divide-white/10 text-left"
              >
                {toSuggestions.map((apt) => (
                  <li key={`to-${apt.icao}`}>
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectAirport("to", apt);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-white/15 focus:bg-white/15 transition-colors cursor-pointer block"
                    >
                      <div className="flex items-baseline gap-1.5 text-xs text-white">
                        <span className="font-mono font-bold text-white shrink-0">
                          {apt.icao}
                        </span>
                        <span className="text-slate-300 truncate">
                          · {apt.name} · {apt.city}, {apt.country}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {touched.to && errors.to && (
              <p
                id="err-to-icao"
                role="alert"
                className="mt-1 text-[11px] font-semibold text-red-300"
              >
                {errors.to}
              </p>
            )}
          </div>
        </div>

        {/* Flight type toggle */}
        <div>
          <span
            id="quick-flight-type-label"
            className="block text-xs font-bold text-slate-100 mb-1"
          >
            Flight type <span className="text-slate-300">*</span>
          </span>
          <div
            role="radiogroup"
            aria-labelledby="quick-flight-type-label"
            aria-required="true"
            className="grid grid-cols-2 gap-1.5 bg-slate-950/35 p-1 border border-white/20 rounded-[2px]"
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
                  ? "bg-white text-[#0B2545] shadow-2xs"
                  : "bg-transparent text-slate-200 hover:bg-white/10 hover:text-white"
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
                  ? "bg-white text-[#0B2545] shadow-2xs"
                  : "bg-transparent text-slate-200 hover:bg-white/10 hover:text-white"
              }`}
            >
              Non-schedule
            </button>
          </div>
          {touched.flightType && errors.flightType && (
            <p
              role="alert"
              className="mt-1 text-[11px] font-semibold text-red-300"
            >
              {errors.flightType}
            </p>
          )}
        </div>

        {/* Permit type */}
        <div>
          <span
            id="quick-permit-type-label"
            className="block text-xs font-bold text-slate-100 mb-1"
          >
            Permit type <span className="text-slate-300">*</span>
          </span>
          <div
            role="radiogroup"
            aria-labelledby="quick-permit-type-label"
            aria-required="true"
            className="grid grid-cols-3 gap-1.5 bg-slate-950/35 p-1 border border-white/20 rounded-[2px]"
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
                    ? "bg-white text-[#0B2545] shadow-2xs"
                    : "bg-transparent text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {touched.permitType && errors.permitType && (
            <p
              role="alert"
              className="mt-1 text-[11px] font-semibold text-red-300"
            >
              {errors.permitType}
            </p>
          )}
        </div>

        {/* Collapsed link: Add route details */}
        <div className="pt-0.5">
          <button
            type="button"
            onClick={() => setShowRouteDetails((prev) => !prev)}
            aria-expanded={showRouteDetails}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer underline underline-offset-4 decoration-slate-400"
          >
            <span>{showRouteDetails ? "− Hide route details" : "+ Add route details"}</span>
          </button>

          {showRouteDetails && (
            <div className="mt-2 space-y-1">
              <label
                htmlFor="quick-countries"
                className="block text-xs font-bold text-slate-100"
              >
                Countries to overfly or land in{" "}
                <span className="text-[11px] font-normal text-slate-300">
                  (Optional)
                </span>
              </label>
              <input
                id="quick-countries"
                name="countries"
                type="text"
                value={countries}
                onChange={(e) => setCountries(e.target.value)}
                placeholder="e.g. Iran, Turkey, Germany, United Kingdom"
                className="w-full min-h-[38px] px-3 py-1.5 bg-white/10 hover:bg-white/15 focus:bg-white/15 border border-white/25 focus:border-white focus:outline-none text-xs text-white placeholder:text-slate-400 placeholder:font-normal rounded-[2px] transition-colors"
              />
            </div>
          )}
        </div>

        {/* Date (UTC) & Email */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="quick-date-utc"
                className="block text-xs font-bold text-slate-100 mb-1"
              >
                Date (UTC) <span className="text-slate-300">*</span>
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
                className="w-full min-h-[40px] px-3 py-2 bg-white/10 hover:bg-white/15 focus:bg-white/15 border border-white/25 focus:border-white focus:outline-none font-mono text-xs font-semibold text-white [color-scheme:dark] rounded-[2px] transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="quick-email"
                className="block text-xs font-bold text-slate-100 mb-1"
              >
                Email <span className="text-slate-300">*</span>
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
                className="w-full min-h-[40px] px-3 py-2 bg-white/10 hover:bg-white/15 focus:bg-white/15 border border-white/25 focus:border-white focus:outline-none text-xs font-medium text-white placeholder:text-slate-400 placeholder:font-normal rounded-[2px] transition-colors"
              />
            </div>
          </div>
          {((touched.date && errors.date) ||
            (touched.email && errors.email)) && (
            <p
              role="alert"
              className="mt-1 text-[11px] font-semibold text-red-300"
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
        <p className="text-[11px] text-slate-300 text-center leading-snug pt-0.5">
          Details are used only to coordinate your inquiry.{" "}
          <Link
            href="/privacy-policy"
            className="kcl-link text-white font-semibold"
          >
            Privacy Policy
          </Link>
        </p>
      </form>
    </div>
  );
}
