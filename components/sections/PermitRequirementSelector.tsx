"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FlightRequirementTab {
  id: string;
  name: string;
  queryParam: string;
  summary: string;
  commonItems: string[];
  extraItems: string[];
}

const TABS: FlightRequirementTab[] = [
  {
    id: "passenger",
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
    <div className="space-y-8">
      {/* Tab Navigation Buttons */}
      <div
        role="tablist"
        aria-label="Flight Type Requirements"
        className="flex flex-wrap gap-2 border-b border-[#CBD5E1] pb-3"
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
              className={`px-5 py-3 rounded-[4px] font-semibold text-base transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#0B2545] text-white shadow-xs"
                  : "bg-white text-[#0B2545] border border-[#CBD5E1] hover:bg-[#F6F8FB]"
              }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Tab Panels: All panels exist in HTML for Google & SEO */}
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
              <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                    Documentation for {tab.name} Flights
                  </h3>
                  <p className="text-base text-[#5C6B7A] mt-1.5 leading-relaxed">
                    {tab.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                  {/* Common Items on Every Tab */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-[#0B2545] flex items-center gap-2">
                      <span>Standard Flight Documentation</span>
                    </h4>
                    <p className="text-base text-[#5C6B7A]">
                      Standard aeronautical items requested for international airspace entry and landing:
                    </p>
                    <ul className="space-y-3">
                      {tab.commonItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="w-5 h-5 rounded-full bg-[#0B2545]/10 text-[#0B2545] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5"
                          >
                            ✓
                          </span>
                          <span className="text-base text-[#16202B] leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Extra Items specific to this Flight Type */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-[#0B2545] flex items-center gap-2">
                      <span>Flight-Specific Requirements ({tab.name})</span>
                    </h4>
                    <p className="text-base text-[#5C6B7A]">
                      Additional manifests and clearances required for this specific flight profile:
                    </p>
                    <ul className="space-y-3">
                      {tab.extraItems.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5"
                          >
                            +
                          </span>
                          <span className="text-base text-[#16202B] font-medium leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Operational Note Box */}
                    <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-4 rounded-[4px] mt-6">
                      <p className="text-base text-[#5C6B7A] leading-relaxed">
                        <strong className="text-[#0B2545]">Note: </strong>
                        Requirements differ by country. Our desk confirms the current list for your route.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href={`/request-flight-support?type=${tab.queryParam}`}
                    className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-6 py-3 rounded-[2px] transition-colors text-center inline-flex items-center justify-center gap-2"
                  >
                    <span>Start My Request</span>
                    <span aria-hidden="true">→</span>
                  </Link>

                  <Link
                    href="/permit-checklist/overflight"
                    className="bg-white hover:bg-[#F6F8FB] text-[#0B2545] border border-[#0B2545] font-semibold text-base px-6 py-3 rounded-[2px] transition-colors text-center inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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

