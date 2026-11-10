"use client";

import React, { useState } from "react";
import Link from "next/link";

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
  nodeIndices: number[]; // which turnaround strip nodes this service activates
}

const SERVICE_OPTIONS: ServiceOption[] = [
  { id: "aircraft-handling", label: "Aircraft handling", nodeIndices: [0, 1] },
  { id: "passenger-handling", label: "Passenger handling", nodeIndices: [2, 6] },
  { id: "baggage-handling", label: "Baggage handling", nodeIndices: [3, 6] },
  { id: "cargo-handling", label: "Cargo handling", nodeIndices: [3, 6] },
  { id: "fuelling-coordination", label: "Fuelling coordination", nodeIndices: [5] },
  { id: "crew-transport-hotel", label: "Crew transport and hotel", nodeIndices: [] },
  { id: "catering", label: "Catering", nodeIndices: [4] },
];

const TURNAROUND_NODES = [
  { id: "arrival", label: "Arrival and marshalling", alwaysActive: true },
  { id: "chocks-gpu", label: "Chocks and GPU/ACU", serviceId: "aircraft-handling" },
  { id: "deplaning", label: "Deplaning", serviceId: "passenger-handling" },
  { id: "offload", label: "Baggage and cargo offload", serviceIds: ["baggage-handling", "cargo-handling"] },
  { id: "cleaning-catering", label: "Cleaning and catering", serviceId: "catering" },
  { id: "fuelling", label: "Fuelling", serviceId: "fuelling-coordination" },
  { id: "boarding-loading", label: "Boarding and loading", serviceIds: ["passenger-handling", "baggage-handling", "cargo-handling"] },
  { id: "departure", label: "Departure", alwaysActive: true },
];

export function TurnaroundPlanner() {
  const [selectedType, setSelectedType] = useState<AircraftTypeKey>("narrow-body");
  const [selectedServices, setSelectedServices] = useState<string[]>(
    AIRCRAFT_TYPES[0].defaultServices
  );

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

  const requestHref = `/request-flight-support?service=ground-handling&aircraftType=${encodeURIComponent(
    currentTypeObj.label
  )}&services=${encodeURIComponent(selectedServices.join(","))}`;

  return (
    <div id="turnaround-planner" className="scroll-mt-20 space-y-8">
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
        {/* Step 1: Aircraft Type Tabs */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#0B2545] text-white text-xs font-bold inline-flex items-center justify-center font-mono">
              1
            </span>
            <span className="text-sm font-bold text-[#0B2545] uppercase tracking-wider font-mono">
              Select Aircraft Type
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {AIRCRAFT_TYPES.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleTypeSelect(type.id)}
                  className={`p-3.5 rounded-[4px] text-left transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? "bg-[#0B2545] text-white border-[#0B2545] shadow-xs"
                      : "bg-white text-[#16202B] border-[#CBD5E1] hover:border-[#0B2545]"
                  }`}
                >
                  <span className="block text-sm font-bold">{type.label}</span>
                  <span
                    className={`block text-xs mt-1 truncate ${
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

        {/* Step 2: Services Checkboxes */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#0B2545] text-white text-xs font-bold inline-flex items-center justify-center font-mono">
              2
            </span>
            <span className="text-sm font-bold text-[#0B2545] uppercase tracking-wider font-mono">
              Select Required Ground Services
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5">
            {SERVICE_OPTIONS.map((srv) => {
              const isChecked = selectedServices.includes(srv.id);
              return (
                <label
                  key={srv.id}
                  className={`flex items-center gap-3 p-3 rounded-[4px] border cursor-pointer transition-colors duration-200 ${
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
                  <span className="text-sm font-semibold text-[#16202B] select-none">
                    {srv.label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Output Panel: Turnaround Strip (Inline SVG Silhouette & Node Sequence) */}
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#CBD5E1]">
            <div>
              <span className="text-xs font-mono font-bold text-[#0B2545] uppercase tracking-wider block">
                TURNAROUND SEQUENCE
              </span>
              <span className="text-base sm:text-lg font-bold text-[#0B2545]">
                {currentTypeObj.label} Operational Turnaround Flow
              </span>
            </div>
            <span className="text-xs text-[#5C6B7A] font-medium self-start sm:self-auto">
              Highlighted nodes indicate requested service points
            </span>
          </div>

          {/* Horizontal Turnaround Flow Strip with SVG Aircraft & Taxi Line */}
          <div className="overflow-x-auto pb-4 pt-2">
            <div className="min-w-[760px] relative">
              {/* Taxi Line Bar */}
              <div
                aria-hidden="true"
                className="absolute top-6 left-6 right-6 h-0.5 bg-[#CBD5E1] -z-0"
              />

              {/* Sequence Nodes */}
              <div className="grid grid-cols-8 gap-2 relative z-10">
                {TURNAROUND_NODES.map((node, idx) => {
                  const active = isNodeActive(node);
                  return (
                    <div key={node.id} className="flex flex-col items-center text-center space-y-2">
                      {/* Node Circle with Aircraft/Point Symbol */}
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ease-out ${
                          active
                            ? "bg-[#0B2545] border-[#0B2545] text-white shadow-sm"
                            : "bg-[#F8FAFC] border-[#CBD5E1] text-[#94A3B8]"
                        }`}
                      >
                        {idx === 0 || idx === 7 ? (
                          /* Airplane Icon for Arrival & Departure */
                          <svg
                            className={`w-5 h-5 ${idx === 7 ? "rotate-45" : "-rotate-45"}`}
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                          </svg>
                        ) : (
                          <span className="font-mono text-xs font-bold">{idx + 1}</span>
                        )}
                      </div>

                      {/* Node Label */}
                      <span
                        className={`text-xs leading-snug px-1 transition-colors duration-200 ${
                          active ? "font-bold text-[#0B2545]" : "text-[#5C6B7A] font-normal"
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

          {/* Checklist of What to Send (Built from selection) */}
          <div className="pt-4 border-t border-[#CBD5E1] space-y-4">
            <h3 className="text-sm font-bold text-[#0B2545] uppercase tracking-wider font-mono">
              What to Send for Your {currentTypeObj.label} Handling Request:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-[13px] text-[#16202B]">
              <div className="flex items-start gap-2 bg-[#F8FAFC] p-3 rounded-[3px] border border-[#CBD5E1]/60">
                <span className="text-[#0B2545] font-bold text-base leading-none">✓</span>
                <span>
                  <strong>Aircraft details:</strong> Registration number, aircraft type &amp; MTOW
                </span>
              </div>

              <div className="flex items-start gap-2 bg-[#F8FAFC] p-3 rounded-[3px] border border-[#CBD5E1]/60">
                <span className="text-[#0B2545] font-bold text-base leading-none">✓</span>
                <span>
                  <strong>Airport:</strong> Destination &amp; origin 4-letter ICAO codes
                </span>
              </div>

              <div className="flex items-start gap-2 bg-[#F8FAFC] p-3 rounded-[3px] border border-[#CBD5E1]/60">
                <span className="text-[#0B2545] font-bold text-base leading-none">✓</span>
                <span>
                  <strong>Schedule:</strong> Estimated arrival and departure times in UTC
                </span>
              </div>

              <div className="flex items-start gap-2 bg-[#F8FAFC] p-3 rounded-[3px] border border-[#CBD5E1]/60">
                <span className="text-[#0B2545] font-bold text-base leading-none">✓</span>
                <span>
                  <strong>Services needed:</strong> {selectedServices.length} selected handling service(s)
                </span>
              </div>

              <div className="flex items-start gap-2 bg-[#F8FAFC] p-3 rounded-[3px] border border-[#CBD5E1]/60">
                <span className="text-[#0B2545] font-bold text-base leading-none">✓</span>
                <span>
                  <strong>Payload information:</strong> Passenger, baggage count or cargo manifest
                </span>
              </div>

              <div className="flex items-start gap-2 bg-[#F8FAFC] p-3 rounded-[3px] border border-[#CBD5E1]/60">
                <span className="text-[#0B2545] font-bold text-base leading-none">✓</span>
                <span>
                  <strong>Operations contact:</strong> 24/7 dispatcher name, email &amp; direct telephone
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#5C6B7A]">
                No turnaround times or prices are estimated automatically. Final arrangements are verified with licensed airport handlers.
              </span>
              <Link
                href={requestHref}
                className="w-full sm:w-auto bg-[#0B2545] hover:bg-[#133661] text-white px-7 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2 shrink-0"
              >
                <span>Start My Request</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
