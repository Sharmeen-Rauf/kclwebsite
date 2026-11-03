"use client";

import React, { useState } from "react";
import Link from "next/link";

type OperationCategory =
  | "scheduled-airline"
  | "charter-non-scheduled"
  | "business-private"
  | "cargo";

type ServiceFocus =
  | "overflight-permits"
  | "landing-permits"
  | "pakistan-permissions"
  | "ground-fuel-catering"
  | "planning-slots-crew";

interface NavigatorGuidance {
  title: string;
  summary: string;
  preparationItems: string[];
  governanceNote: string;
  relatedServiceHref: string;
  relatedServiceLabel: string;
}

const GUIDANCE_MAP: Record<ServiceFocus, NavigatorGuidance> = {
  "overflight-permits": {
    title: "Overflight Permission Inquiry Preparation",
    summary:
      "An overflight may involve country-specific authorizations, route information, and operator documentation depending on the route, aircraft, and current rules.",
    preparationItems: [
      "Aircraft registration and type, plus callsign where applicable",
      "Operator name, state of registry, and operational contact details",
      "Complete planned itinerary and ATS route details",
      "Planned UTC dates and times",
      "Purpose of operation (additional documentation varies by authority)",
    ],
    governanceNote:
      "KCL assists in preparing information and coordinating requests through appropriate channels. Regulatory decisions and processing timelines remain with the competent civil aviation authorities.",
    relatedServiceHref: "/services/overflight-permits",
    relatedServiceLabel: "Overflight Permit Coordination Guide",
  },
  "landing-permits": {
    title: "Landing Permission & Arrival Coordination Preparation",
    summary:
      "A planned arrival brings together permission requirements, airport slot considerations, and ground-side arrangements across distinct processes.",
    preparationItems: [
      "Origin and destination airports (ICAO codes)",
      "Aircraft registration, type, and Maximum Takeoff Weight (MTOW)",
      "Operator details and purpose of flight (scheduled, charter, cargo, private, or technical stop)",
      "Estimated UTC arrival and departure times",
      "Passenger or cargo context and any required ground, fuel, or crew services",
    ],
    governanceNote:
      "Landing permissions, airport slots, and ground handling are separate processes administered by different stakeholders. All approvals remain with the relevant authorities.",
    relatedServiceHref: "/services/landing-permits",
    relatedServiceLabel: "Aircraft Landing Permit Assistance Guide",
  },
  "pakistan-permissions": {
    title: "Pakistan Flight Permissions (OPKR & OPLR Specialization)",
    summary:
      "For operations crossing Pakistan's airspace (OPKR / OPLR FIRs) or landing at Pakistani airports, KCL combines local aviation context with practical coordination for international operators.",
    preparationItems: [
      "Aircraft registration, type, and operator name",
      "Planned itinerary, OPKR/OPLR route details, or intended Pakistani airport (e.g., OPKC, OPLA, OPIS)",
      "Proposed UTC schedule and flight numbers/callsign",
      "Purpose of operation (scheduled service, non-scheduled charter, or technical stop)",
      "Operational contact details and relevant supporting aircraft/operator documentation",
    ],
    governanceNote:
      "KCL facilitates and coordinates applications; the relevant Pakistan aviation authorities retain all approval authority. No universal processing time is promised.",
    relatedServiceHref: "/pakistan/flight-permissions",
    relatedServiceLabel: "Pakistan Flight Permissions Hub",
  },
  "ground-fuel-catering": {
    title: "Ground Handling, Aviation Fuel & Inflight Catering Preparation",
    summary:
      "Airport-side services—handling, refueling, and catering—must work around the same aircraft movement and are subject to local airport procedures and provider availability.",
    preparationItems: [
      "Intended airport (ICAO code) and aircraft registration/type",
      "Expected UTC arrival and departure times",
      "Specific ground handling services needed for the turnaround",
      "Requested fuel specification and estimated uplift quantity where applicable",
      "Passenger and crew meal counts, menu categories, and dietary notes if catering is needed",
    ],
    governanceNote:
      "Physical handling, fuel supply/quality certification, and food preparation remain with authorized local providers and airport stakeholders.",
    relatedServiceHref: "/services/ground-handling",
    relatedServiceLabel: "Ground Handling Coordination Guide",
  },
  "planning-slots-crew": {
    title: "Flight Planning, Airport Slots & Crew Logistics Preparation",
    summary:
      "Trip planning support, airport slot inquiries, and crew hotel/transport arrangements can be discussed alongside the wider itinerary to reduce fragmented communication.",
    preparationItems: [
      "Planned itinerary, airports, and requested UTC movement times",
      "Aircraft type, registration, and operator details",
      "Requested scope of flight planning, dispatch communication, or slot inquiry support",
      "Crew headcount, arrival/departure schedule, room preferences, and local transport needs",
    ],
    governanceNote:
      "Slot allocation remains with the airport coordinator, and the aircraft operator retains full responsibility for the flight and required dispatch decisions.",
    relatedServiceHref: "/services/flight-planning-dispatch",
    relatedServiceLabel: "Flight Planning & Dispatch Support Guide",
  },
};

export function PermitChecker() {
  const [operationCategory, setOperationCategory] = useState<OperationCategory>(
    "charter-non-scheduled"
  );
  const [serviceFocus, setServiceFocus] =
    useState<ServiceFocus>("overflight-permits");

  const guidance = GUIDANCE_MAP[serviceFocus];

  const mappedFlightType =
    operationCategory === "scheduled-airline" ? "schedule" : "non-schedule";
  const mappedPermitType =
    serviceFocus === "overflight-permits"
      ? "overflight"
      : serviceFocus === "landing-permits" ||
        serviceFocus === "ground-fuel-catering"
      ? "landing"
      : "both";

  const inquiryHref = `/request-flight-support?flightType=${encodeURIComponent(
    mappedFlightType
  )}&permitType=${encodeURIComponent(
    mappedPermitType
  )}&operationCategory=${encodeURIComponent(
    operationCategory
  )}&service=${encodeURIComponent(serviceFocus)}`;

  return (
    <div className="bg-white border border-[#CBD5E1]">
      <div className="bg-[#0B2545] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-[#CBD5E1]">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#E8A200] block">
            PRE-INQUIRY PREPARATION GUIDE
          </span>
          <h2 className="text-xl font-bold text-white mt-0.5">
            Flight Support Navigator
          </h2>
        </div>
        <span className="font-mono text-xs bg-[#133661] border border-slate-600 px-2.5 py-1 text-slate-200">
          GUIDANCE ONLY · NOT AN AUTHORITY APPROVAL CALCULATOR
        </span>
      </div>

      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6 border-b lg:border-b-0 lg:border-r border-[#CBD5E1] pb-6 lg:pb-0 lg:pr-8">
          <fieldset>
            <legend className="block text-xs font-mono uppercase tracking-wider text-[#5C6B7A] font-semibold mb-2">
              1. Operation Type
            </legend>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  id: "scheduled-airline" as const,
                  label: "Scheduled Airline",
                  sub: "Recurring Timetable",
                },
                {
                  id: "charter-non-scheduled" as const,
                  label: "Charter / Non-Sched",
                  sub: "On-Demand Mission",
                },
                {
                  id: "business-private" as const,
                  label: "Business / Private",
                  sub: "Executive / Ferry",
                },
                {
                  id: "cargo" as const,
                  label: "Cargo Operation",
                  sub: "Scheduled or Ad-Hoc",
                },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setOperationCategory(opt.id)}
                  aria-pressed={operationCategory === opt.id}
                  className={`min-h-[44px] px-3 py-2.5 text-left border text-sm font-semibold transition-colors ${
                    operationCategory === opt.id
                      ? "bg-[#0B2545] text-white border-[#0B2545]"
                      : "bg-[#F6F8FB] text-[#16202B] border-[#CBD5E1] hover:border-[#0B2545]"
                  }`}
                >
                  <span className="block">{opt.label}</span>
                  <span
                    className={`block font-mono text-[11px] font-normal ${
                      operationCategory === opt.id
                        ? "text-[#E8A200]"
                        : "text-[#5C6B7A]"
                    }`}
                  >
                    {opt.sub}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="navigator-service-focus"
              className="block text-xs font-mono uppercase tracking-wider text-[#5C6B7A] font-semibold mb-2"
            >
              2. Primary Coordination Area
            </label>
            <select
              id="navigator-service-focus"
              value={serviceFocus}
              onChange={(e) =>
                setServiceFocus(e.target.value as ServiceFocus)
              }
              className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#F6F8FB] border border-[#CBD5E1] text-[#0B2545] font-semibold text-sm rounded-[2px]"
            >
              <option value="overflight-permits">
                Overflight Permit Coordination
              </option>
              <option value="landing-permits">
                Landing Permit Coordination
              </option>
              <option value="pakistan-permissions">
                Pakistan Flight Permissions (OPKR / OPLR)
              </option>
              <option value="ground-fuel-catering">
                Ground Handling, Aviation Fuel &amp; Catering
              </option>
              <option value="planning-slots-crew">
                Flight Planning, Airport Slots &amp; Crew Logistics
              </option>
            </select>
          </div>

          <div className="pt-2 space-y-2">
            <Link
              href={inquiryHref}
              className="w-full min-h-[48px] px-5 py-3 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm inline-flex items-center justify-between transition-colors rounded-[2px]"
            >
              <span>Prepare This Flight Support Inquiry</span>
              <span className="font-mono">→</span>
            </Link>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C6B7A] pt-1">
              <Link
                href={guidance.relatedServiceHref}
                className="text-[#0B2545] font-semibold underline underline-offset-2"
              >
                {guidance.relatedServiceLabel} →
              </Link>
              <a
                href="/files/kcl-permit-request-checklist.pdf"
                download
                className="text-[#0B2545] font-semibold underline underline-offset-2"
              >
                Inquiry Checklist (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Output Panel */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-[#CBD5E1]">
              <div>
                <span className="text-xs font-mono uppercase text-[#5C6B7A]">
                  PREPARATION GUIDANCE ·{" "}
                  {operationCategory.replace(/-/g, " ").toUpperCase()}
                </span>
                <h3 className="text-lg font-bold text-[#0B2545]">
                  {guidance.title}
                </h3>
              </div>
              <span className="font-mono text-[11px] bg-[#F6F8FB] border border-[#CBD5E1] text-[#0B2545] px-2.5 py-0.5 font-semibold">
                SUBJECT TO AUTHORITY / PROVIDER RULES
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#16202B] leading-relaxed mb-5">
              {guidance.summary}
            </p>

            <div className="mb-5">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#0B2545] font-bold mb-2.5">
                Details Helpful to Prepare for an Initial Inquiry:
              </h4>
              <ul className="space-y-2 text-sm text-[#16202B]">
                {guidance.preparationItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="font-mono text-xs font-bold text-[#E8A200] bg-[#0B2545] px-1.5 py-0.5 mt-0.5"
                      aria-hidden="true"
                    >
                      INFO
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#F6F8FB] border-l-4 border-[#0B2545] p-4 text-xs text-[#5C6B7A] space-y-1">
            <p className="font-semibold text-[#0B2545]">
              Operational &amp; Regulatory Boundary:
            </p>
            <p>{guidance.governanceNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
