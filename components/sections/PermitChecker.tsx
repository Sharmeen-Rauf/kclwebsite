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
  | "ground-handling"
  | "aviation-fuel"
  | "inflight-catering"
  | "crew-logistics"
  | "operations-support";

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
    title: "Overflight Permission Facilitation Preparation",
    summary:
      "An overflight may involve country-specific authorizations, route information, and operator documentation depending on the route, aircraft, and current rules.",
    preparationItems: [
      "Aircraft registration and type, plus callsign where applicable",
      "Operator name, state of registry, and operational contact details",
      "Complete planned itinerary and ATS route details",
      "Planned UTC dates and times",
      "Purpose of operation (scheduled service or non-scheduled movement)",
    ],
    governanceNote:
      "KCL assists in preparing information and coordinating requests through appropriate channels. Regulatory decisions and processing timelines remain with the competent civil aviation authorities.",
    relatedServiceHref: "/services/overflight-permits",
    relatedServiceLabel: "Overflight Permit Coordination Guide",
  },
  "landing-permits": {
    title: "Landing Permission & Arrival Coordination Preparation",
    summary:
      "A planned arrival brings together permission requirements, airport considerations, and ground-side arrangements across distinct processes.",
    preparationItems: [
      "Origin and destination airports (ICAO codes)",
      "Aircraft registration, type, and Maximum Takeoff Weight (MTOW)",
      "Operator details and purpose of flight (scheduled, charter, cargo, private, or technical stop)",
      "Estimated UTC arrival and departure times",
      "Passenger or cargo context and any required ground, fuel, catering, or crew services",
    ],
    governanceNote:
      "Landing permissions, airport slots, and ground handling are separate processes administered by different stakeholders. All approvals remain with the relevant authorities.",
    relatedServiceHref: "/services/landing-permits",
    relatedServiceLabel: "Aircraft Landing Permit Assistance Guide",
  },
  "pakistan-permissions": {
    title: "Pakistan Flight Permissions (OPKR & OPLR Specialization)",
    summary:
      "For scheduled or non-scheduled operations crossing Pakistan's airspace (OPKR / OPLR FIRs) or landing at Pakistani airports, KCL combines local aviation context with practical coordination.",
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
  "ground-handling": {
    title: "Ground Handling Coordination Preparation",
    summary:
      "On arrival and departure, ramp services, baggage handling, aircraft servicing, and crew assistance must work around the same aircraft movement.",
    preparationItems: [
      "Intended airport (ICAO code) and aircraft registration/type",
      "Expected UTC arrival and departure times",
      "Specific ground handling services needed for the turnaround",
      "Passenger, baggage, or cargo load context",
      "Operational contact information for schedule updates",
    ],
    governanceNote:
      "Ground handling arrangements depend on airport procedures, authorized service providers, and local equipment availability.",
    relatedServiceHref: "/services/ground-handling",
    relatedServiceLabel: "Ground Handling Coordination Guide",
  },
  "aviation-fuel": {
    title: "Aviation Fuel Supply Coordination Preparation",
    summary:
      "Aircraft fuel requirements depend on the airport, timing, aircraft, and operating plan, and should be coordinated alongside arrival and ground handling times.",
    preparationItems: [
      "Intended airport (ICAO code) and aircraft registration/type",
      "Intended UTC date and arrival/departure times",
      "Requested fuel specification and estimated uplift quantity where available",
      "Operator details and operational contact information",
    ],
    governanceNote:
      "Actual fuel specifications, supply availability, quality certification, and uplift procedures depend on approved aviation fuel suppliers and local airport conditions.",
    relatedServiceHref: "/services/aviation-fuel",
    relatedServiceLabel: "Aviation Fuel Arrangements Guide",
  },
  "inflight-catering": {
    title: "Inflight Catering Services Preparation",
    summary:
      "A catering request is most effective when it reflects the aircraft, cabin service expectations, headcount, dietary needs, and operating time.",
    preparationItems: [
      "Flight date, airport (ICAO code), and planned UTC departure time",
      "Aircraft registration and type",
      "Number of passenger and crew meals required",
      "Preferred menu categories and special dietary requests",
      "Operational contact information",
    ],
    governanceNote:
      "Actual food preparation, hygiene, handling, and airside delivery remain with the authorized catering provider at the airport.",
    relatedServiceHref: "/services/inflight-catering",
    relatedServiceLabel: "Inflight Catering Coordination Guide",
  },
  "crew-logistics": {
    title: "Crew Accommodation & Transport Arrangements Preparation",
    summary:
      "Crew hotel and airport-to-hotel transport arrangements support stopovers and layovers around your planned flight schedule.",
    preparationItems: [
      "Intended city/airport and arrival/departure UTC schedule",
      "Number of crew members and room breakdown",
      "Room preferences and any relevant operator policy requirements",
      "Requested airport-to-hotel or local ground transportation details",
    ],
    governanceNote:
      "Hotel availability, pricing, and transport arrangements vary by location, provider, and date.",
    relatedServiceHref: "/services/crew-logistics",
    relatedServiceLabel: "Crew Accommodation & Transport Guide",
  },
  "operations-support": {
    title: "24/7 Operational & Trip Support Preparation",
    summary:
      "When schedules, aircraft registrations, or routes change, timely communication helps align permissions and connected station services.",
    preparationItems: [
      "Operator details, aircraft registration/type, and callsign",
      "Complete planned itinerary and UTC schedule",
      "All requested core services (permits, handling, fuel, catering, crew hotel)",
      "Primary 24/7 dispatch/operations contact channels",
    ],
    governanceNote:
      "KCL coordinates communication across requested aviation services; regulatory authorities and local providers retain approval and delivery decisions.",
    relatedServiceHref: "/services/operations-support",
    relatedServiceLabel: "Operations & Trip Support Guide",
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
        serviceFocus === "ground-handling" ||
        serviceFocus === "aviation-fuel" ||
        serviceFocus === "inflight-catering" ||
        serviceFocus === "crew-logistics"
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
              1. Operation Type (Scheduled vs. Non-Scheduled)
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
              2. Core Service Area
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
                01a · Flight Permission: Overflight Permits
              </option>
              <option value="landing-permits">
                01b · Flight Permission: Landing Permits
              </option>
              <option value="pakistan-permissions">
                01c · Pakistan Flight Permissions (OPKR / OPLR)
              </option>
              <option value="ground-handling">
                02 · Ground Handling Coordination
              </option>
              <option value="inflight-catering">
                03 · Catering Services Coordination
              </option>
              <option value="aviation-fuel">
                04 · Aviation Fuel Supply Coordination
              </option>
              <option value="crew-logistics">
                05 · Crew Accommodation &amp; Transport Arrangements
              </option>
              <option value="operations-support">
                06 · 24/7 Operational &amp; Trip Support
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
