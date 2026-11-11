"use client";

import React, { useState } from "react";
import Link from "next/link";
import { submitPermitRequestAction } from "@/lib/actions";

interface ServiceQuickPlannerProps {
  slug: string;
  serviceTitle: string;
}

export function ServiceQuickPlanner({ slug, serviceTitle }: ServiceQuickPlannerProps) {
  // Fuel fields
  const [fuelType, setFuelType] = useState("Jet A-1");
  const [upliftAmount, setUpliftAmount] = useState("12,000");
  const [upliftUnit, setUpliftUnit] = useState("Litres");

  // Crew fields
  const [crewCount, setCrewCount] = useState(4);
  const [nights, setNights] = useState(2);
  const [needsTransfers, setNeedsTransfers] = useState(true);

  // Dispatch fields
  const [routeOrigin, setRouteOrigin] = useState("OPIS");
  const [routeDest, setRouteDest] = useState("OMDB");
  const [dispatchAircraft, setDispatchAircraft] = useState("B738");
  const [dispatchServices, setDispatchServices] = useState<string[]>([
    "OFP Generation",
    "Weather Briefing",
    "NOTAM Review",
  ]);

  // Slots fields
  const [slotIcao, setSlotIcao] = useState("OPKC");
  const [movementType, setMovementType] = useState("Turnaround");
  const [slotDate, setSlotDate] = useState("TBD UTC");

  // Shared generic fields
  const [airport, setAirport] = useState(slug.includes("fuel") ? "OPKC" : "OPIS");
  const [utcTime, setUtcTime] = useState("12:00 UTC");

  // Copy & Email state
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [emailMessage, setEmailMessage] = useState("");

  const isFuel = slug.includes("fuel");
  const isCrew = slug.includes("crew") || slug.includes("hotel") || slug.includes("logistics");
  const isDispatch = slug.includes("dispatch") || slug.includes("planning");
  const isSlots = slug.includes("slot");

  const toggleDispatchService = (item: string) => {
    setDispatchServices((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  // Generate clean summary text
  let summaryTitle = `${serviceTitle} Plan`;
  let summaryDetails: string[] = [];
  let checklist: string[] = [];

  if (isFuel) {
    summaryTitle = "Aviation Fuel Uplift Plan";
    summaryDetails = [
      `Fuel Grade: ${fuelType}`,
      `Estimated Uplift: ${upliftAmount} ${upliftUnit}`,
      `Airport (ICAO): ${airport}`,
      `Target Uplift Time: ${utcTime}`,
    ];
    checklist = [
      "Aircraft registration & type",
      "Airport ICAO code & parking stand (if known)",
      "Target fuelling schedule & estimated uplift volume",
      "Billing details / fuel release instructions",
      "Operations contact details",
    ];
  } else if (isCrew) {
    summaryTitle = "Crew Accommodation & Logistics Plan";
    summaryDetails = [
      `Crew Headcount: ${crewCount} crew members`,
      `Layover Duration: ${nights} night(s)`,
      `Airside-to-Hotel Transfers: ${needsTransfers ? "Required" : "Not requested"}`,
      `Station Airport: ${airport}`,
    ];
    checklist = [
      "Crew roster & room configuration preferences",
      "Arrival and departure flight times in UTC",
      "Hotel proximity requirements (airport / city)",
      "Dedicated airside transport timing",
      "Operations contact details",
    ];
  } else if (isDispatch) {
    summaryTitle = "Flight Planning & Dispatch Routing";
    summaryDetails = [
      `Route: ${routeOrigin} to ${routeDest}`,
      `Aircraft Type: ${dispatchAircraft}`,
      `Selected Packages: ${dispatchServices.join(", ") || "Standard OFP"}`,
    ];
    checklist = [
      "Aircraft type, MTOW, and avionics capabilities (RVSM/RNAV)",
      "Route pair (Origin / Destination) and alternates",
      "Estimated time of departure (ETD) in UTC",
      "Payload, passenger count, and cargo weight",
      "Operations contact details",
    ];
  } else if (isSlots) {
    summaryTitle = "Airport Slot Coordination Schedule";
    summaryDetails = [
      `Coordinated Airport (ICAO): ${slotIcao}`,
      `Movement Type: ${movementType}`,
      `Target Schedule Window: ${slotDate}`,
    ];
    checklist = [
      "Aircraft type and registration",
      "Coordinated aerodrome (ICAO / IATA)",
      "Desired arrival / departure slots in UTC",
      "Flight purpose & handler appointment details",
      "Operations contact details",
    ];
  } else {
    // Generic permit / flight support planner
    summaryTitle = `${serviceTitle} Coordination Plan`;
    summaryDetails = [
      `Aerodrome / Airspace: ${airport}`,
      `Target Schedule: ${utcTime}`,
    ];
    checklist = [
      "Aircraft registration, callsign, and type",
      "Complete flight itinerary and UTC timing",
      "Passenger and crew manifest summary",
      "Certificates (Airworthiness, Registration, Insurance)",
      "Operations contact details",
    ];
  }

  const formattedSummaryText = `${summaryTitle} Summary:
${summaryDetails.map((d) => `- ${d}`).join("\n")}

What to send to KCL Ops:
${checklist.map((c) => `- ${c}`).join("\n")}

Note: No prices or turnaround times are calculated automatically. Final arrangements are verified by KCL.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedSummaryText);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2500);
    } catch {
      setCopyStatus("idle");
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailAddress || !emailAddress.includes("@")) {
      setEmailStatus("error");
      setEmailMessage("Please enter a valid email address.");
      return;
    }

    setEmailStatus("sending");
    setEmailMessage("");

    try {
      const formData = new FormData();
      formData.append("operatorName", summaryTitle);
      formData.append("contactName", "Operations Dispatcher");
      formData.append("email", emailAddress);
      formData.append("phoneOrWhatsapp", "+0000000000");
      formData.append("flightType", "non-schedule");
      formData.append("permitType", "landing");
      formData.append("routeFrom", isDispatch ? routeOrigin : "ORIGIN");
      formData.append("routeTo", isDispatch ? routeDest : "DESTINATION");
      formData.append("dateTimeUtc", utcTime);
      formData.append("aircraftTypeAndReg", isDispatch ? dispatchAircraft : "AIRCRAFT");
      formData.append("servicesNeeded", slug);
      formData.append("notes", formattedSummaryText);
      formData.append("websiteHoneypot", "");

      const res = await submitPermitRequestAction({ status: "idle" }, formData);
      if (res.status === "error") {
        setEmailStatus("error");
        setEmailMessage(res.message || "Unable to send summary. Please verify your email.");
      } else {
        setEmailStatus("success");
        setEmailMessage(`Plan summary sent to ${emailAddress}. Our 24/7 ops desk has received your inquiry.`);
      }
    } catch {
      setEmailStatus("error");
      setEmailMessage("An error occurred while routing the inquiry. Please contact ops directly.");
    }
  };

  const requestHref = `/request-flight-support?service=${slug}`;

  return (
    <div id="quick-planner" className="scroll-mt-20 space-y-8">
      {/* Hidden SSR indexable text */}
      <div className="sr-only" data-ssr-planner="true">
        <h3>{summaryTitle}</h3>
        <p>{formattedSummaryText}</p>
      </div>

      <div className="max-w-3xl space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
          Plan Your Requirement
        </h2>
        <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
          Specify your operational parameters below. We will assemble your coordination summary and show exactly what details to send us.
        </p>
      </div>

      <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[8px] p-5 sm:p-8 space-y-8 shadow-xs">
        {/* Conditional Configuration Steps */}
        {isFuel && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="fuel-type" className="block text-[14px] font-medium text-[#0B2545]">
                Fuel Grade
              </label>
              <select
                id="fuel-type"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2 bg-white"
              >
                <option value="Jet A-1">Jet A-1</option>
                <option value="Jet A">Jet A</option>
                <option value="AvGas 100LL">AvGas 100LL</option>
                <option value="TS-1">TS-1</option>
              </select>
            </div>

            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="uplift-amount" className="block text-[14px] font-medium text-[#0B2545]">
                Estimated Uplift
              </label>
              <div className="flex gap-2">
                <input
                  id="uplift-amount"
                  type="text"
                  value={upliftAmount}
                  onChange={(e) => setUpliftAmount(e.target.value)}
                  className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
                />
                <select
                  value={upliftUnit}
                  onChange={(e) => setUpliftUnit(e.target.value)}
                  className="text-xs font-semibold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-2 bg-white"
                >
                  <option value="Litres">Litres</option>
                  <option value="Gallons">Gallons</option>
                  <option value="Pounds">Lbs</option>
                  <option value="KG">KG</option>
                </select>
              </div>
            </div>

            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="fuel-airport" className="block text-[14px] font-medium text-[#0B2545]">
                Airport (ICAO)
              </label>
              <input
                id="fuel-airport"
                type="text"
                maxLength={4}
                value={airport}
                onChange={(e) => setAirport(e.target.value.toUpperCase())}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              />
            </div>

            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="fuel-utc" className="block text-[14px] font-medium text-[#0B2545]">
                Target Window (UTC)
              </label>
              <input
                id="fuel-utc"
                type="text"
                value={utcTime}
                onChange={(e) => setUtcTime(e.target.value)}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              />
            </div>
          </div>
        )}

        {isCrew && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="crew-count" className="block text-[14px] font-medium text-[#0B2545]">
                Crew Count
              </label>
              <input
                id="crew-count"
                type="number"
                min={1}
                max={40}
                value={crewCount}
                onChange={(e) => setCrewCount(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              />
            </div>

            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="nights-count" className="block text-[14px] font-medium text-[#0B2545]">
                Layover Nights
              </label>
              <input
                id="nights-count"
                type="number"
                min={1}
                max={30}
                value={nights}
                onChange={(e) => setNights(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              />
            </div>

            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="crew-station" className="block text-[14px] font-medium text-[#0B2545]">
                Station (ICAO)
              </label>
              <input
                id="crew-station"
                type="text"
                maxLength={4}
                value={airport}
                onChange={(e) => setAirport(e.target.value.toUpperCase())}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              />
            </div>

            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5 flex flex-col justify-between">
              <span className="block text-[14px] font-medium text-[#0B2545]">
                Airside Transfers
              </span>
              <label className="flex items-center gap-2 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={needsTransfers}
                  onChange={(e) => setNeedsTransfers(e.target.checked)}
                  className="w-4 h-4 text-[#0B2545] rounded"
                />
                <span className="text-sm font-semibold text-[#0B2545]">Airport Transfers</span>
              </label>
            </div>
          </div>
        )}

        {isDispatch && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
                <label htmlFor="origin-icao" className="block text-[14px] font-medium text-[#0B2545]">
                  Origin (ICAO)
                </label>
                <input
                  id="origin-icao"
                  type="text"
                  maxLength={4}
                  value={routeOrigin}
                  onChange={(e) => setRouteOrigin(e.target.value.toUpperCase())}
                  className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
                />
              </div>

              <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
                <label htmlFor="dest-icao" className="block text-[14px] font-medium text-[#0B2545]">
                  Destination (ICAO)
                </label>
                <input
                  id="dest-icao"
                  type="text"
                  maxLength={4}
                  value={routeDest}
                  onChange={(e) => setRouteDest(e.target.value.toUpperCase())}
                  className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
                />
              </div>

              <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
                <label htmlFor="aircraft-type" className="block text-[14px] font-medium text-[#0B2545]">
                  Aircraft Type
                </label>
                <input
                  id="aircraft-type"
                  type="text"
                  value={dispatchAircraft}
                  onChange={(e) => setDispatchAircraft(e.target.value.toUpperCase())}
                  className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-[14px] font-medium text-[#0B2545]">
                Select Dispatch Services
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "OFP Generation",
                  "Weather Briefing",
                  "NOTAM Review",
                  "ICAO Filing",
                  "ETOPS / EDTO Calculation",
                ].map((item) => {
                  const active = dispatchServices.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleDispatchService(item)}
                      className={`px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        active
                          ? "bg-[#0B2545] text-white border-[#0B2545]"
                          : "bg-white text-[#16202B] border-[#CBD5E1]"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {isSlots && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="slot-icao" className="block text-[14px] font-medium text-[#0B2545]">
                Airport (ICAO)
              </label>
              <input
                id="slot-icao"
                type="text"
                maxLength={4}
                value={slotIcao}
                onChange={(e) => setSlotIcao(e.target.value.toUpperCase())}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              />
            </div>

            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="slot-movement" className="block text-[14px] font-medium text-[#0B2545]">
                Movement Type
              </label>
              <select
                id="slot-movement"
                value={movementType}
                onChange={(e) => setMovementType(e.target.value)}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2 bg-white"
              >
                <option value="Turnaround">Turnaround (Arrival + Departure)</option>
                <option value="Arrival Only">Arrival Only</option>
                <option value="Departure Only">Departure Only</option>
                <option value="Night Stop">Night Stop / Layover</option>
              </select>
            </div>

            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="slot-date" className="block text-[14px] font-medium text-[#0B2545]">
                Target Date / UTC
              </label>
              <input
                id="slot-date"
                type="text"
                value={slotDate}
                onChange={(e) => setSlotDate(e.target.value)}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              />
            </div>
          </div>
        )}

        {!isFuel && !isCrew && !isDispatch && !isSlots && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="generic-station" className="block text-[14px] font-medium text-[#0B2545]">
                Station or Airspace (ICAO)
              </label>
              <input
                id="generic-station"
                type="text"
                value={airport}
                onChange={(e) => setAirport(e.target.value.toUpperCase())}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              />
            </div>

            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="generic-utc" className="block text-[14px] font-medium text-[#0B2545]">
                Target Schedule (UTC)
              </label>
              <input
                id="generic-utc"
                type="text"
                value={utcTime}
                onChange={(e) => setUtcTime(e.target.value)}
                className="w-full text-base font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
              />
            </div>
          </div>
        )}

        {/* Output Summary Card */}
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#CBD5E1]">
            <div>
              <span className="text-[13px] font-semibold text-[#5C6B7A] uppercase tracking-wider block">
                Order summary
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                {summaryTitle}
              </h3>
            </div>
            <div className="text-[13px] text-[#5C6B7A]">
              <span>No turnaround times or prices are calculated automatically.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[15px] text-[#16202B]">
            <div className="bg-[#F8FAFC] p-4 rounded-[4px] border border-[#CBD5E1]/60 space-y-2">
              <span className="font-bold text-[#0B2545] block">Configured Parameters</span>
              <ul className="space-y-1 text-sm text-[#475569]">
                {summaryDetails.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-4 rounded-[4px] border border-[#CBD5E1]/60 space-y-2 sm:col-span-2">
              <span className="font-bold text-[#0B2545] block">Checklist of What to Send</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-sm text-[#475569]">
                {checklist.map((c) => (
                  <li key={c} className="flex items-start gap-1.5">
                    <span className="text-[#B88200] font-bold" aria-hidden="true">✓</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-3 border-t border-[#CBD5E1]/60 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <Link
              href={requestHref}
              className="relative overflow-hidden bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] font-bold text-[14px] px-6 py-3 rounded-[2px] transition-all shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F4C400]"
            >
              <span className="animate-btn-shimmer" />
              <span>Start My Request</span>
              <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
            </Link>

            <button
              type="button"
              onClick={handleCopy}
              className="bg-white hover:bg-slate-50 text-[#0B2545] border border-[#CBD5E1] font-semibold text-[14px] px-5 py-3 rounded-[2px] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              <span>{copyStatus === "copied" ? "Summary copied!" : "Copy summary"}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setShowEmailInput((prev) => !prev);
                setEmailStatus("idle");
                setEmailMessage("");
              }}
              className="bg-white hover:bg-slate-50 text-[#0B2545] border border-[#CBD5E1] font-semibold text-[14px] px-5 py-3 rounded-[2px] transition-colors inline-flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              <span>Email me this summary</span>
            </button>
          </div>

          {showEmailInput && (
            <form onSubmit={handleSendEmail} className="pt-2 border-t border-[#CBD5E1]/60 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-lg">
                <input
                  type="email"
                  required
                  placeholder="dispatcher@operator.com"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="flex-1 text-[14px] px-3.5 py-2.5 border border-[#CBD5E1] rounded-[2px] bg-white text-[#16202B]"
                />
                <button
                  type="submit"
                  disabled={emailStatus === "sending"}
                  className="bg-[#0B2545] hover:bg-[#133661] disabled:opacity-50 text-white text-[14px] font-bold px-5 py-2.5 rounded-[2px] transition-colors shrink-0 cursor-pointer"
                >
                  {emailStatus === "sending" ? "Sending..." : "Send summary"}
                </button>
              </div>

              {emailMessage && (
                <p className={`text-[13px] ${emailStatus === "success" ? "text-emerald-700 font-semibold" : "text-rose-700 font-medium"}`}>
                  {emailMessage}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Complementary Services Single Line */}
        <div className="pt-3 border-t border-[#CBD5E1]/60 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#5C6B7A]">
          <span className="font-semibold text-[#0B2545]">We can also arrange:</span>
          <Link href="/services/ground-handling" className="text-[#0B2545] font-semibold hover:underline">Ground Handling</Link>
          <span>·</span>
          <Link href="/services/aviation-fuel" className="text-[#0B2545] font-semibold hover:underline">Fuel</Link>
          <span>·</span>
          <Link href="/services/crew-logistics" className="text-[#0B2545] font-semibold hover:underline">Crew Hotels</Link>
          <span>·</span>
          <Link href="/services/flight-permissions" className="text-[#0B2545] font-semibold hover:underline">Permits</Link>
        </div>
      </div>
    </div>
  );
}

