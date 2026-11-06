"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FlightRequirementTab {
  id: string;
  number: string;
  name: string;
  queryParam: string;
  summary: string;
  profileSpecificDocuments: string[];
  operationalNotice?: string;
}

const COMMON_FLIGHT_DETAILS = [
  "Aircraft registration",
  "Aircraft type & Maximum Takeoff Weight (MTOW)",
  "Registered operator information",
  "Flight callsign & telephony designator",
  "Route, departure, destination, and alternate airport information",
  "Flight date and complete schedule in UTC",
  "Purpose of flight (commercial passenger, cargo, tech stop, ferry, private, medevac)",
];

const ADDITIONAL_DOCUMENTS_WHERE_APPLICABLE = [
  "Air Operator Certificate (AOC) with associated operations specifications",
  "Certificate of Registration (C of R)",
  "Certificate of Airworthiness (C of A)",
  "Worldwide Third-Party Liability Insurance Certificate",
  "Aircraft Radio Station Licence & Noise Compliance Certificate",
  "Relevant passenger manifest or cargo documentation (Air Waybill)",
  "Other documents required by the destination or overflight authority",
];

const TABS: FlightRequirementTab[] = [
  {
    id: "passenger",
    number: "01",
    name: "Passenger",
    queryParam: "passenger_charter",
    summary:
      "Documentation requirements for commercial airline flights and passenger charter operations crossing sovereign airspace or landing at foreign aerodromes.",
    profileSpecificDocuments: [
      "Passenger manifest including full names, nationalities, and passport numbers",
      "Local receiving contact and appointed ground handling agent at destination airport",
      "Charter contract confirmation or passenger declaration where mandated by authority",
    ],
  },
  {
    id: "cargo",
    number: "02",
    name: "Cargo",
    queryParam: "cargo_charter",
    summary:
      "Aviation clearance documentation for scheduled freighters, ad-hoc cargo flights, and specialized freight operations.",
    profileSpecificDocuments: [
      "Detailed cargo manifest (Air Waybill / AWB) detailing commodity types, pieces, and gross weights",
      "Consignee and consignor details, including official business registration certificates",
      "Dangerous Goods Declaration (DGD) and packaging compliance records where applicable",
    ],
  },
  {
    id: "technical-stop",
    number: "03",
    name: "Technical stop",
    queryParam: "tech_stop",
    summary:
      "Procedures for non-traffic tech stops involving refueling, crew turnaround, or maintenance without passenger or cargo commercial uplift.",
    profileSpecificDocuments: [
      "Statement confirming non-traffic technical purpose of the stop",
      "Passenger or cargo details only if passengers or freight remain on board during transit",
      "Appointed local ground handler and into-plane fueling coordination details",
    ],
  },
  {
    id: "air-ambulance",
    number: "04",
    name: "Air ambulance",
    queryParam: "medevac",
    summary:
      "Expedited clearance requirements for urgent aeromedical evacuation and repatriation flights.",
    profileSpecificDocuments: [
      "Attending medical coordinator contact and confirmation of patient readiness",
      "Official medical clearance letter confirming urgent air transport requirement",
      "Receiving hospital acceptance letter and coordinated ambulance tarmac access",
    ],
    operationalNotice:
      "Confidentiality & Privacy Notice: Do not submit sensitive patient medical records or private health data through public web forms. Medevac medical records are coordinated through verified, secure direct operations channels.",
  },
  {
    id: "private-vip",
    number: "05",
    name: "Private / VIP",
    queryParam: "business_aviation",
    summary:
      "Permit preparation requirements for corporate jets, executive aircraft, owner flights, and private VIP missions.",
    profileSpecificDocuments: [
      "Lead passenger details and full passenger manifest",
      "Receiving protocol, designated FBO, or local VIP handling liaison",
      "Non-commercial flight declaration where required by sovereign authorities",
    ],
  },
];

export function PermitRequirementSelector() {
  const [activeTabId, setActiveTabId] = useState("passenger");
  const [copied, setCopied] = useState(false);

  const activeTab = TABS.find((t) => t.id === activeTabId) || TABS[0];

  const handleCopyChecklist = () => {
    const textToCopy = `KCL FLIGHT PERMIT DOCUMENTATION CHECKLIST — ${activeTab.name.toUpperCase()}

1. COMMON FLIGHT DETAILS:
${COMMON_FLIGHT_DETAILS.map((item) => `- ${item}`).join("\n")}

2. ADDITIONAL DOCUMENTS WHERE APPLICABLE:
${ADDITIONAL_DOCUMENTS_WHERE_APPLICABLE.map((item) => `- ${item}`).join("\n")}

3. MISSION-SPECIFIC MANIFESTS (${activeTab.name}):
${activeTab.profileSpecificDocuments.map((item) => `- ${item}`).join("\n")}

Note: Requirements differ by country and are subject to sovereign civil aviation authority review. KCL will assist in identifying the exact requirements for your route.
Inquire: https://kclwebsite.vercel.app/request-flight-support`;

    navigator.clipboard?.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation Buttons */}
      <div
        role="tablist"
        aria-label="Flight Type Requirements"
        className="flex flex-wrap gap-2.5 border-b border-[#CBD5E1] pb-3"
      >
        {TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTabId(tab.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-[3px] font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-[#0B2545] text-white shadow-xs border-b-2 border-b-[#F4C400]"
                  : "bg-white text-[#0B2545] border border-[#CBD5E1] hover:bg-[#F6F8FB] hover:border-[#0B2545]"
              }`}
            >
              <span
                className={`font-mono text-[11px] ${
                  isActive ? "text-[#F4C400]" : "text-[#5C6B7A]"
                }`}
              >
                {tab.number}
              </span>
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels: All panels exist in HTML for Search Engine Crawlers */}
      <div className="relative">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <div
              key={tab.id}
              role="tabpanel"
              id={`panel-${tab.id}`}
              aria-labelledby={`tab-${tab.id}`}
              className={`${
                isActive ? "block opacity-100 translate-y-0" : "hidden"
              } transition-all duration-200 ease-out motion-reduce:transition-none`}
            >
              <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#CBD5E1]">
                  <div>
                    <span className="font-mono text-xs uppercase text-[#B88200] font-bold block mb-1">
                      FLIGHT PROFILE CHECKLIST · {tab.name.toUpperCase()}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                      Documentation for {tab.name} Flights
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#5C6B7A] bg-[#F6F8FB] px-2.5 py-1 rounded-[2px] border border-[#CBD5E1] shrink-0">
                    PRE-FILING CHECKLIST
                  </span>
                </div>

                <p className="text-xs sm:text-[14px] text-[#5C6B7A] leading-relaxed max-w-3xl">
                  {tab.summary} Documentation is confirmed based on your specific routing, civil aviation authority policies, and operational profile.
                </p>

                {/* 3-Column Structured Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-1">
                  {/* Column 1: Common Flight Details */}
                  <div className="space-y-3 bg-[#F6F8FB] border border-[#CBD5E1] p-4 sm:p-5 rounded-[4px] flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#0B2545] font-mono uppercase tracking-wider flex items-center gap-2 mb-2 pb-2 border-b border-[#CBD5E1]/60">
                        <span className="w-2 h-2 rounded-full bg-[#0B2545]" />
                        Common Flight Details
                      </h4>
                      <p className="text-xs text-[#5C6B7A] mb-3">
                        Operational information required for all flight plans:
                      </p>
                      <ul className="space-y-2">
                        {COMMON_FLIGHT_DETAILS.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#16202B] leading-snug">
                            <span className="text-[#0B2545] font-bold shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Additional Documents Where Applicable */}
                  <div className="space-y-3 bg-[#F6F8FB] border border-[#CBD5E1] p-4 sm:p-5 rounded-[4px] flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#0B2545] font-mono uppercase tracking-wider flex items-center gap-2 mb-2 pb-2 border-b border-[#CBD5E1]/60">
                        <span className="w-2 h-2 rounded-full bg-[#B88200]" />
                        Documents Where Applicable
                      </h4>
                      <p className="text-xs text-[#5C6B7A] mb-3">
                        Certificates requested depending on jurisdiction and operation:
                      </p>
                      <ul className="space-y-2">
                        {ADDITIONAL_DOCUMENTS_WHERE_APPLICABLE.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#16202B] leading-snug">
                            <span className="text-[#B88200] font-bold shrink-0 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Flight-Specific Manifests */}
                  <div className="space-y-3 bg-[#F6F8FB] border border-[#CBD5E1] p-4 sm:p-5 rounded-[4px] flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-[#0B2545] font-mono uppercase tracking-wider flex items-center gap-2 mb-2 pb-2 border-b border-[#CBD5E1]/60">
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                        Mission Manifests ({tab.name})
                      </h4>
                      <p className="text-xs text-[#5C6B7A] mb-3">
                        Specific declarations for this flight category:
                      </p>
                      <ul className="space-y-2">
                        {tab.profileSpecificDocuments.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#16202B] font-medium leading-snug">
                            <span className="text-emerald-600 font-bold shrink-0 mt-0.5">+</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {tab.operationalNotice && (
                      <div className="bg-amber-50/70 border border-amber-200/80 p-3 rounded-[3px] mt-3">
                        <p className="text-[11px] text-amber-900 leading-relaxed">
                          <strong className="block font-semibold mb-0.5">Privacy Notice:</strong>
                          {tab.operationalNotice}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Transparency Disclaimer */}
                <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-3 rounded-[2px]">
                  <p className="text-xs text-[#5C6B7A] leading-relaxed">
                    <strong className="text-[#0B2545]">Regulatory Guidance: </strong>
                    Documents listed are typical requirements and are not universally mandatory across all sovereign airspaces. Requirements are confirmed on a route-by-route basis with the applicable civil aviation authorities.
                  </p>
                </div>

                {/* Bottom Action Buttons: Copy Checklist + Start Permit Request */}
                <div className="pt-4 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <Link
                      href={`/request-flight-support?type=${tab.queryParam}`}
                      className="bg-[#0B2545] hover:bg-[#133661] text-white min-h-[42px] px-6 py-2.5 font-bold text-xs sm:text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2"
                    >
                      <span>Start Permit Request</span>
                      <span aria-hidden="true">→</span>
                    </Link>

                    <button
                      type="button"
                      onClick={handleCopyChecklist}
                      className="kcl-btn-outline-navy min-h-[42px] px-5 py-2.5 font-semibold text-xs sm:text-sm inline-flex items-center justify-center rounded-[2px] gap-2 cursor-pointer transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                      <span>{copied ? "Checklist Copied to Clipboard!" : "Copy Checklist"}</span>
                    </button>
                  </div>

                  <Link
                    href="/permit-checklist/overflight"
                    className="text-xs font-mono font-bold text-[#0B2545] hover:text-[#B88200] hover:underline inline-flex items-center gap-1 self-start sm:self-center"
                  >
                    <span>View detailed checklist guides</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
