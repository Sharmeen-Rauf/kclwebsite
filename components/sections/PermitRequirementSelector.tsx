"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FlightRequirementTab {
  id: string;
  number: string;
  name: string;
  queryParam: string;
  summary: string;
  commonItems: string[];
  extraItems: string[];
}

const TABS: FlightRequirementTab[] = [
  {
    id: "passenger",
    number: "01",
    name: "Passenger",
    queryParam: "passenger_charter",
    summary:
      "Required documentation for commercial scheduled and charter passenger flights crossing international FIR boundaries or landing at foreign aerodromes.",
    commonItems: [
      "Full flight schedule with estimated times of departure and arrival in UTC",
      "Entry and exit waypoints with complete ATS airway routing",
      "Crew details, flight deck licenses, and passport copies",
      "Aircraft documents (Air Operator Certificate, Certificate of Airworthiness, Worldwide Insurance, Registration Certificate, Noise Certificate, Radio Station Licence)",
      "Registered operator contact details and 24/7 dispatch desk information",
    ],
    extraItems: [
      "Passenger manifest with full names, nationalities, and passport numbers",
      "Local receiving contact and ground handling agent details at destination",
    ],
  },
  {
    id: "cargo",
    number: "02",
    name: "Cargo",
    queryParam: "cargo_charter",
    summary:
      "Documentation requirements for international freight and cargo flights, including main deck freighters and specialized cargo operations.",
    commonItems: [
      "Full flight schedule with estimated times of departure and arrival in UTC",
      "Entry and exit waypoints with complete ATS airway routing",
      "Crew details, flight deck licenses, and passport copies",
      "Aircraft documents (Air Operator Certificate, Certificate of Airworthiness, Worldwide Insurance, Registration Certificate, Noise Certificate, Radio Station Licence)",
      "Registered operator contact details and 24/7 dispatch desk information",
    ],
    extraItems: [
      "Detailed cargo manifest (Air Waybill / AWB) specifying commodity types and weights",
      "Complete consignee and consignor details, including official business registration",
      "Dangerous goods declaration (DGD) if hazardous cargo is on board",
    ],
  },
  {
    id: "technical-stop",
    number: "03",
    name: "Technical stop",
    queryParam: "tech_stop",
    summary:
      "Requirements for non-traffic tech stops involving refueling, crew change, or technical maintenance where no commercial passengers or cargo embark or disembark.",
    commonItems: [
      "Full flight schedule with estimated times of departure and arrival in UTC",
      "Entry and exit waypoints with complete ATS airway routing",
      "Crew details, flight deck licenses, and passport copies",
      "Aircraft documents (Air Operator Certificate, Certificate of Airworthiness, Worldwide Insurance, Registration Certificate, Noise Certificate, Radio Station Licence)",
      "Registered operator contact details and 24/7 dispatch desk information",
    ],
    extraItems: [
      "Passenger or cargo details only if passengers or freight remain on board during the tech stop",
      "Statement confirming non-traffic technical purpose of the stop",
    ],
  },
  {
    id: "air-ambulance",
    number: "04",
    name: "Air ambulance",
    queryParam: "medevac",
    summary:
      "Accelerated documentation guidelines for emergency aeromedical evacuation and urgent patient repatriation flights.",
    commonItems: [
      "Full flight schedule with estimated times of departure and arrival in UTC",
      "Entry and exit waypoints with complete ATS airway routing",
      "Crew details, flight deck licenses, and passport copies",
      "Aircraft documents (Air Operator Certificate, Certificate of Airworthiness, Worldwide Insurance, Registration Certificate, Noise Certificate, Radio Station Licence)",
      "Registered operator contact details and 24/7 dispatch desk information",
    ],
    extraItems: [
      "Patient medical summary and attending physician clearance note",
      "Official medical letter confirming patient condition and urgent transport requirement",
      "Receiving hospital acceptance letter and ambulance ramp transfer coordination",
    ],
  },
  {
    id: "private-vip",
    number: "05",
    name: "Private / VIP",
    queryParam: "business_aviation",
    summary:
      "Permit preparation requirements for business aircraft, corporate flight departments, head of state, and private VIP missions.",
    commonItems: [
      "Full flight schedule with estimated times of departure and arrival in UTC",
      "Entry and exit waypoints with complete ATS airway routing",
      "Crew details, flight deck licenses, and passport copies",
      "Aircraft documents (Air Operator Certificate, Certificate of Airworthiness, Worldwide Insurance, Registration Certificate, Noise Certificate, Radio Station Licence)",
      "Registered operator contact details and 24/7 dispatch desk information",
    ],
    extraItems: [
      "Lead passenger details and full passenger manifest",
      "Receiving protocol, FBO preference, or local VIP handling liaison",
    ],
  },
];

export function PermitRequirementSelector() {
  const [activeTabId, setActiveTabId] = useState("passenger");

  return (
    <div className="space-y-6">
      {/* Tab Navigation Buttons - Styled Like Homepage Interactive Navigator */}
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

      {/* Tab Panels */}
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
                isActive
                  ? "block opacity-100 translate-y-0"
                  : "hidden"
              } transition-all duration-200 ease-out motion-reduce:transition-none`}
            >
              <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-[#CBD5E1]">
                  <div>
                    <span className="font-mono text-xs uppercase text-[#B88200] font-bold block mb-1">
                      FLIGHT PROFILE · {tab.name.toUpperCase()}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                      Documentation for {tab.name} Flights
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#5C6B7A] bg-[#F6F8FB] px-2.5 py-1 rounded-[2px] border border-[#CBD5E1] shrink-0">
                    STAGE PRE-FILING
                  </span>
                </div>

                <p className="text-xs sm:text-[14px] text-[#5C6B7A] leading-relaxed max-w-3xl">
                  {tab.summary}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-1">
                  {/* Common Items on Every Tab */}
                  <div className="space-y-3.5">
                    <h4 className="text-sm sm:text-base font-bold text-[#0B2545] flex items-center gap-2 font-mono uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#0B2545]" />
                      Standard Flight Documentation
                    </h4>
                    <p className="text-xs text-[#5C6B7A]">
                      Universal aeronautical records required across all civil aviation authorities:
                    </p>
                    <ul className="space-y-2.5 pt-1">
                      {tab.commonItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="w-4 h-4 rounded-full bg-[#0B2545]/10 text-[#0B2545] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5"
                          >
                            ✓
                          </span>
                          <span className="text-xs sm:text-[13.5px] text-[#16202B] leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Extra Items specific to this Flight Type */}
                  <div className="space-y-3.5">
                    <h4 className="text-sm sm:text-base font-bold text-[#0B2545] flex items-center gap-2 font-mono uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#B88200]" />
                      Mission-Specific Manifests ({tab.name})
                    </h4>
                    <p className="text-xs text-[#5C6B7A]">
                      Additional declarations demanded by destination border and airport authorities:
                    </p>
                    <ul className="space-y-2.5 pt-1">
                      {tab.extraItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="w-4 h-4 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5"
                          >
                            +
                          </span>
                          <span className="text-xs sm:text-[13.5px] text-[#16202B] font-semibold leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Operational Note Box */}
                    <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-3.5 rounded-[2px] mt-5">
                      <span className="text-[11px] font-mono font-bold text-[#B88200] block mb-0.5">
                        OPERATIONAL NOTE
                      </span>
                      <p className="text-xs text-[#5C6B7A] leading-snug">
                        Requirements differ by country. Our desk confirms the current list for your route.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <Link
                    href={`/request-flight-support?type=${tab.queryParam}`}
                    className="bg-[#0B2545] hover:bg-[#133661] text-white min-h-[42px] px-6 py-2.5 font-bold text-xs sm:text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2"
                  >
                    <span>Start My Request</span>
                    <span aria-hidden="true">→</span>
                  </Link>

                  <Link
                    href="/permit-checklist/overflight"
                    className="kcl-btn-outline-navy min-h-[42px] px-5 py-2.5 font-semibold text-xs sm:text-sm inline-flex items-center justify-center rounded-[2px] gap-2"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download the checklist (PDF)</span>
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
