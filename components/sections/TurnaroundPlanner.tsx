"use client";

import React, { useState } from "react";
import Link from "next/link";
import { submitPermitRequestAction } from "@/lib/actions";

type AircraftTypeKey = "narrow-body" | "wide-body" | "business-jet" | "freighter";

interface AircraftTypeOption {
  id: AircraftTypeKey;
  label: string;
  examples: string;
  defaultServices: string[];
}

const AIRCRAFT_TYPES: AircraftTypeOption[] = [
  {
    id: "narrow-body",
    label: "Narrow-body",
    examples: "A320, A321, B737, E195",
    defaultServices: ["aircraft-handling", "passenger-handling", "baggage-handling", "fuelling-coordination"],
  },
  {
    id: "wide-body",
    label: "Wide-body",
    examples: "B777, A350, B787, A330",
    defaultServices: ["aircraft-handling", "passenger-handling", "baggage-handling", "catering", "fuelling-coordination"],
  },
  {
    id: "business-jet",
    label: "Business jet",
    examples: "Gulfstream, Global, Falcon, Challenger",
    defaultServices: ["aircraft-handling", "passenger-handling", "fuelling-coordination", "crew-transport-hotel"],
  },
  {
    id: "freighter",
    label: "Freighter",
    examples: "B747-8F, B777F, A330F, IL-76",
    defaultServices: ["aircraft-handling", "cargo-handling", "fuelling-coordination"],
  },
];

interface ServiceOption {
  id: string;
  label: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: "aircraft-handling", label: "Aircraft handling" },
  { id: "passenger-handling", label: "Passenger handling" },
  { id: "baggage-handling", label: "Baggage handling" },
  { id: "cargo-handling", label: "Cargo handling" },
  { id: "fuelling-coordination", label: "Fuelling coordination" },
  { id: "crew-transport-hotel", label: "Crew transport and hotel" },
  { id: "catering", label: "Catering" },
];

interface TurnaroundNode {
  id: string;
  label: string;
  alwaysActive?: boolean;
  serviceId?: string;
  serviceIds?: string[];
  icon: (active: boolean) => React.ReactNode;
}

const TURNAROUND_NODES: TurnaroundNode[] = [
  {
    id: "arrival",
    label: "Arrival and marshalling",
    alwaysActive: true,
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  {
    id: "chocks-gpu",
    label: "Chocks and GPU/ACU",
    serviceId: "aircraft-handling",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: "deplaning",
    label: "Deplaning",
    serviceId: "passenger-handling",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "offload",
    label: "Baggage and cargo offload",
    serviceIds: ["baggage-handling", "cargo-handling"],
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "cleaning-catering",
    label: "Cleaning and catering",
    serviceId: "catering",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    id: "fuelling",
    label: "Fuelling",
    serviceId: "fuelling-coordination",
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 22h12" />
        <path d="M4 9h10" />
        <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
        <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
      </svg>
    ),
  },
  {
    id: "boarding-loading",
    label: "Boarding and loading",
    serviceIds: ["passenger-handling", "baggage-handling", "cargo-handling"],
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1" />
        <path d="M18 8l4 4-4 4" />
        <path d="M8 12h14" />
      </svg>
    ),
  },
  {
    id: "departure",
    label: "Departure",
    alwaysActive: true,
    icon: () => (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2.5 19h19" />
        <path d="M4.5 15.5L8 14l4 4 8-10-3-1-7 4-3.5-1.5L4.5 15.5z" />
      </svg>
    ),
  },
];

export function TurnaroundPlanner() {
  const [selectedType, setSelectedType] = useState<AircraftTypeKey>("narrow-body");
  const [selectedServices, setSelectedServices] = useState<string[]>(
    AIRCRAFT_TYPES[0].defaultServices
  );
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [emailMessage, setEmailMessage] = useState("");

  const handleTypeSelect = (typeId: AircraftTypeKey) => {
    setSelectedType(typeId);
    const target = AIRCRAFT_TYPES.find((t) => t.id === typeId);
    if (target) {
      setSelectedServices(target.defaultServices);
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const isNodeActive = (node: (typeof TURNAROUND_NODES)[number]) => {
    if (node.alwaysActive) return true;
    if (node.serviceId && selectedServices.includes(node.serviceId)) return true;
    if (node.serviceIds && node.serviceIds.some((s) => selectedServices.includes(s))) return true;
    return false;
  };

  const currentTypeObj = AIRCRAFT_TYPES.find((t) => t.id === selectedType) || AIRCRAFT_TYPES[0];

  // Dynamic checklist based on selected services and aircraft type
  const checklistItems: { label: string; text: string }[] = [
    {
      label: "Aircraft details",
      text: "Registration number, aircraft type and MTOW",
    },
    {
      label: "Airport",
      text: "Destination and origin 4-letter ICAO codes",
    },
    {
      label: "Schedule",
      text: "Estimated arrival and departure times in UTC",
    },
    {
      label: "Operations contact",
      text: "24/7 dispatcher name, email and direct telephone",
    },
  ];

  if (selectedServices.includes("cargo-handling")) {
    checklistItems.push({
      label: "Cargo",
      text: "Cargo manifest and consignee details",
    });
  }

  if (selectedServices.includes("crew-transport-hotel")) {
    checklistItems.push({
      label: "Crew transport and hotel",
      text: "Number of crew and arrival time",
    });
  }

  if (selectedServices.includes("fuelling-coordination")) {
    checklistItems.push({
      label: "Fuelling",
      text: "Fuel type and estimated uplift",
    });
  }

  if (selectedServices.includes("catering")) {
    checklistItems.push({
      label: "Catering",
      text: "Meal count and dietary needs",
    });
  }

  if (selectedServices.includes("passenger-handling")) {
    checklistItems.push({
      label: "Passenger handling",
      text: "Passenger count and any special assistance",
    });
  }

  if (selectedServices.includes("baggage-handling") && !selectedServices.includes("passenger-handling")) {
    checklistItems.push({
      label: "Baggage handling",
      text: "Baggage piece count and special handling instructions",
    });
  }

  if (selectedServices.includes("aircraft-handling")) {
    checklistItems.push({
      label: "Aircraft handling",
      text: "Ramp equipment needed (GPU, ASU, pushback)",
    });
  }

  // Pre-fill URL for /request-flight-support
  const requestHref = `/request-flight-support?service=ground-handling&aircraftType=${encodeURIComponent(
    currentTypeObj.label
  )}&services=${encodeURIComponent(selectedServices.join(","))}`;

  // Formatted plain text checklist for copying and emailing
  const formattedChecklistText = `What to send for your ${currentTypeObj.label.toLowerCase()} request:
${checklistItems.map((item) => `• ${item.label}: ${item.text}`).join("\n")}

Selected Services:
${selectedServices.map((id) => SERVICE_OPTIONS.find((s) => s.id === id)?.label || id).join(", ")}

Note: No turnaround times or prices are estimated automatically. Final arrangements are verified by KCL with licensed airport handlers.`;

  const handleCopyChecklist = async () => {
    try {
      await navigator.clipboard.writeText(formattedChecklistText);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 3000);
    } catch {
      // Fallback if clipboard API is restricted
      setCopyStatus("idle");
    }
  };

  const handleEmailChecklistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailAddress || !emailAddress.includes("@")) return;

    setEmailStatus("sending");
    setEmailMessage("");

    try {
      const formData = new FormData();
      formData.append("operatorName", `Ground Handling Turnaround Checklist (${currentTypeObj.label})`);
      formData.append("contactName", "Operations Dispatcher");
      formData.append("email", emailAddress);
      formData.append("phoneOrWhatsapp", "+0000000000");
      formData.append(
        "flightType",
        selectedType === "narrow-body" || selectedType === "wide-body" ? "schedule" : "non-schedule"
      );
      formData.append("permitType", "landing");
      formData.append("routeFrom", "ORIGIN");
      formData.append("routeTo", "DESTINATION");
      formData.append("dateTimeUtc", "TBD UTC");
      formData.append("aircraftTypeAndReg", currentTypeObj.label);
      selectedServices.forEach((s) => formData.append("servicesNeeded", s));
      formData.append("notes", formattedChecklistText);
      formData.append("websiteHoneypot", "");

      const res = await submitPermitRequestAction({ status: "idle" }, formData);
      if (res.status === "error") {
        setEmailStatus("error");
        setEmailMessage(res.message || "Unable to send checklist. Please verify email.");
      } else {
        setEmailStatus("success");
        setEmailMessage(`Checklist summary prepared for ${emailAddress}. Our operations desk has received your request.`);
      }
    } catch {
      setEmailStatus("error");
      setEmailMessage("An error occurred while routing the checklist inquiry. Please try again.");
    }
  };

  return (
    <div id="turnaround-planner" className="scroll-mt-20 space-y-8">
      {/* Hidden SSR indexable text for every tab so all text exists in HTML before JS */}
      <div className="sr-only" data-ssr-planner-content="true">
        {AIRCRAFT_TYPES.map((type) => (
          <div key={type.id}>
            <h3>What to send for your {type.label.toLowerCase()} request</h3>
            <p>Examples: {type.examples}</p>
            <p>
              Checklist: Aircraft registration and type | Airport (ICAO code) | Expected arrival and departure times in UTC | Services needed | Passenger, baggage or cargo details | Operations contact details.
            </p>
          </div>
        ))}
      </div>

      {/* Intro Header */}
      <div className="max-w-3xl space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
          Plan Your Turnaround
        </h2>
        <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
          Choose your aircraft type and the services you need. We will show what to send us, then start your request.
        </p>
      </div>

      <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[8px] p-5 sm:p-8 space-y-8 shadow-xs">
        {/* Step 1: Select your aircraft type */}
        <div className="space-y-3">
          <h3 className="text-[14px] font-semibold text-[#0B2545]">
            Select your aircraft type
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {AIRCRAFT_TYPES.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleTypeSelect(type.id)}
                  className={`p-3.5 rounded-[4px] text-left transition-all duration-200 border cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                    isSelected
                      ? "bg-[#0B2545] text-white border-[#0B2545] shadow-xs"
                      : "bg-white text-[#16202B] border-[#CBD5E1] hover:border-[#0B2545]"
                  }`}
                >
                  <span className="block text-[15px] font-semibold">{type.label}</span>
                  <span
                    className={`block text-[14px] mt-1 truncate ${
                      isSelected ? "text-slate-300" : "text-[#5C6B7A]"
                    }`}
                  >
                    {type.examples}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select required ground services */}
        <div className="space-y-3">
          <h3 className="text-[14px] font-semibold text-[#0B2545]">
            Select required ground services
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {SERVICE_OPTIONS.map((srv) => {
              const isChecked = selectedServices.includes(srv.id);
              return (
                <label
                  key={srv.id}
                  className={`flex items-center gap-3 p-3 rounded-[4px] border cursor-pointer transition-colors duration-200 focus-within:ring-2 focus-within:ring-[#0B2545] motion-reduce:transition-none ${
                    isChecked
                      ? "bg-white border-[#0B2545] shadow-2xs"
                      : "bg-white/60 border-[#CBD5E1] hover:border-slate-400"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleServiceToggle(srv.id)}
                    className="w-4 h-4 rounded text-[#0B2545] focus:ring-[#0B2545] accent-[#0B2545] cursor-pointer"
                  />
                  <span className="text-[14px] font-medium text-[#16202B] select-none">
                    {srv.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Output Panel: Turnaround sequence */}
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#CBD5E1]">
            <div>
              <h3 className="text-[14px] font-semibold text-[#0B2545]">
                Turnaround sequence
              </h3>
              <p className="text-base font-bold text-[#0B2545] mt-0.5">
                {currentTypeObj.label} turnaround flow
              </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#5C6B7A]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#0B2545]" aria-hidden="true" />
                <span className="font-semibold text-[#0B2545]">Navy = included in your request</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-500">
                <span className="w-3 h-3 rounded-full border border-[#CBD5E1] bg-[#F8FAFC]" aria-hidden="true" />
                <span>Grey = not requested</span>
              </span>
            </div>
          </div>

          {/* Horizontal Turnaround Flow Strip with dedicated icons */}
          <div className="overflow-x-auto pb-4 pt-2">
            <div className="min-w-[760px] relative">
              {/* Connecting Taxi Line */}
              <div
                aria-hidden="true"
                className="absolute top-6 left-6 right-6 h-0.5 bg-[#CBD5E1] -z-0"
              />

              {/* Sequence Nodes */}
              <div className="grid grid-cols-8 gap-2 relative z-10">
                {TURNAROUND_NODES.map((node) => {
                  const active = isNodeActive(node);
                  return (
                    <div key={node.id} className="flex flex-col items-center text-center space-y-2">
                      {/* Node Circle with specific icon */}
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ease-out motion-reduce:transition-none ${
                          active
                            ? "bg-[#0B2545] border-[#0B2545] text-white shadow-sm"
                            : "bg-[#F8FAFC] border-[#CBD5E1] text-[#94A3B8]"
                        }`}
                      >
                        {node.icon(active)}
                      </div>

                      {/* Node Caption: 13px, bold if requested, regular if unrequested */}
                      <span
                        className={`text-[13px] leading-snug px-1 transition-colors duration-200 motion-reduce:transition-none ${
                          active ? "font-bold text-[#0B2545]" : "text-[#64748B] font-normal"
                        }`}
                      >
                        {node.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Checklist of What to Send (Dynamically generated) */}
          <div className="pt-4 border-t border-[#CBD5E1] space-y-4">
            <h3 className="text-base font-bold text-[#0B2545]">
              What to send for your {currentTypeObj.label.toLowerCase()} request:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-[15px] text-[#16202B]">
              {checklistItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-2.5 bg-[#F8FAFC] p-3.5 rounded-[4px] border border-[#CBD5E1]/60"
                >
                  <span className="text-[#0B2545] font-bold text-lg leading-none shrink-0" aria-hidden="true">
                    ✓
                  </span>
                  <div className="leading-relaxed">
                    <strong className="text-[#0B2545]">{item.label}:</strong> {item.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer line */}
            <div className="pt-2">
              <p className="text-[14px] text-[#5C6B7A]">
                No turnaround times or prices are estimated automatically. Final arrangements are verified by KCL with licensed airport handlers.
              </p>
            </div>

            {/* Action Buttons: Primary + Copy checklist + Email me this checklist */}
            <div className="pt-3 border-t border-[#CBD5E1]/60 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <Link
                href={requestHref}
                className="bg-[#0B2545] hover:bg-[#133661] text-white font-bold text-[14px] px-6 py-3 rounded-[2px] transition-colors shadow-xs inline-flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                <span>Start My Request</span>
                <span aria-hidden="true">→</span>
              </Link>

              <button
                type="button"
                onClick={handleCopyChecklist}
                className="bg-white hover:bg-slate-50 text-[#0B2545] border border-[#CBD5E1] font-semibold text-[14px] px-5 py-3 rounded-[2px] transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 cursor-pointer motion-reduce:transition-none"
              >
                <svg className="w-4 h-4 text-[#0B2545]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>{copyStatus === "copied" ? "Checklist copied!" : "Copy checklist"}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowEmailInput((prev) => !prev);
                  setEmailStatus("idle");
                  setEmailMessage("");
                }}
                className="bg-white hover:bg-slate-50 text-[#0B2545] border border-[#CBD5E1] font-semibold text-[14px] px-5 py-3 rounded-[2px] transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 cursor-pointer motion-reduce:transition-none"
              >
                <svg className="w-4 h-4 text-[#0B2545]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Email me this checklist</span>
              </button>
            </div>

            {/* Email Form Panel (toggled) */}
            {showEmailInput && (
              <div className="mt-3 p-4 bg-[#F1F5F9] border border-[#CBD5E1] rounded-[4px] space-y-3">
                <form onSubmit={handleEmailChecklistSubmit} className="space-y-3">
                  <label htmlFor="turnaround-email-input" className="block text-[14px] font-semibold text-[#0B2545]">
                    Enter your email to receive this turnaround checklist:
                  </label>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <input
                      id="turnaround-email-input"
                      type="email"
                      required
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="dispatcher@airline.com"
                      className="flex-1 bg-white border border-[#CBD5E1] rounded-[2px] px-3.5 py-2.5 text-[14px] text-[#0B2545] placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#0B2545]"
                    />
                    <button
                      type="submit"
                      disabled={emailStatus === "sending"}
                      className="bg-[#0B2545] hover:bg-[#133661] disabled:opacity-50 text-white font-semibold text-[14px] px-5 py-2.5 rounded-[2px] transition-colors cursor-pointer"
                    >
                      {emailStatus === "sending" ? "Sending..." : "Send checklist"}
                    </button>
                  </div>
                  <p className="text-[14px] text-[#5C6B7A]">
                    We only use your email to send this turnaround checklist. No marketing or spam.
                  </p>
                </form>

                {emailStatus === "success" && (
                  <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-[14px] rounded-[2px]">
                    ✓ {emailMessage}
                  </div>
                )}
                {emailStatus === "error" && (
                  <div className="p-3 bg-red-50 border border-red-300 text-red-800 text-[14px] rounded-[2px]">
                    ⚠ {emailMessage}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
