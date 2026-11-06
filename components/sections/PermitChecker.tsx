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
      "This guide helps you prepare. Approvals and timelines are decided by the relevant civil aviation authorities.",
    relatedServiceHref: "/permit-checklist/overflight",
    relatedServiceLabel: "Overflight Permit Checklist",
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
      "This guide helps you prepare. Approvals and timelines are decided by the relevant civil aviation authorities.",
    relatedServiceHref: "/permit-checklist/landing",
    relatedServiceLabel: "Landing Permit Checklist",
  },
  "pakistan-permissions": {
    title: "Permit Directory & Country Guides Preparation",
    summary:
      "For scheduled or non-scheduled operations transiting sovereign FIRs or landing internationally, KCL helps operators prepare documentation aligned with destination authority rules.",
    preparationItems: [
      "Aircraft registration, type, MTOW, and operator name",
      "Planned route string, entry/exit waypoints, and destination airport",
      "Proposed UTC schedule and flight numbers/callsign",
      "Purpose of operation (scheduled service, non-scheduled charter, cargo, or technical stop)",
      "Operational contact details and relevant supporting aircraft/operator documentation",
    ],
    governanceNote:
      "This guide helps you prepare. Approvals and timelines are decided by the relevant civil aviation authorities.",
    relatedServiceHref: "/permit-directory",
    relatedServiceLabel: "Explore Permit Directory",
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
      "This guide helps you prepare. Approvals and timelines are decided by the relevant civil aviation authorities.",
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
      "This guide helps you prepare. Approvals and timelines are decided by the relevant civil aviation authorities.",
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
      "This guide helps you prepare. Approvals and timelines are decided by the relevant civil aviation authorities.",
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
      "This guide helps you prepare. Approvals and timelines are decided by the relevant civil aviation authorities.",
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
      "This guide helps you prepare. Approvals and timelines are decided by the relevant civil aviation authorities.",
    relatedServiceHref: "/services/operations-support",
    relatedServiceLabel: "Operations & Trip Support Guide",
  },
};

function trackNavigatorEvent(event: string, payload?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    const win = window as unknown as {
      dataLayer?: Array<Record<string, unknown>>;
    };
    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event, ...payload });
    }
    window.dispatchEvent(
      new CustomEvent("kcl:analytics", {
        detail: { event, ...payload },
      })
    );
  }
}

export function PermitChecker() {
  const [operationCategory, setOperationCategory] =
    useState<OperationCategory>("charter-non-scheduled");
  const [serviceFocus, setServiceFocus] =
    useState<ServiceFocus>("overflight-permits");
  const [copied, setCopied] = useState(false);

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

  const inquiryHref = `/request-permit?operationType=${encodeURIComponent(
    operationCategory
  )}&flightType=${encodeURIComponent(
    mappedFlightType
  )}&permitType=${encodeURIComponent(
    mappedPermitType
  )}&service=${encodeURIComponent(serviceFocus)}`;

  const checklistGuideHref =
    serviceFocus === "landing-permits"
      ? "/permit-checklist/landing"
      : operationCategory === "cargo"
      ? "/permit-checklist/cargo"
      : operationCategory === "charter-non-scheduled"
      ? "/permit-checklist/charter-non-scheduled"
      : "/permit-checklist/overflight";

  const checklistGuideLabel =
    serviceFocus === "landing-permits"
      ? "Landing Permit Checklist"
      : operationCategory === "cargo"
      ? "Cargo Flight Checklist"
      : operationCategory === "charter-non-scheduled"
      ? "Charter Flight Checklist"
      : "Overflight Permit Checklist";

  const handleCopyChecklist = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      const text = `${guidance.title}\n\nSummary:\n${guidance.summary}\n\nPreparation Details:\n${guidance.preparationItems
        .map((item, idx) => `${idx + 1}. ${item}`)
        .join("\n")}\n\nBoundary Note:\n${guidance.governanceNote}`;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
      trackNavigatorEvent("navigator_copy_checklist_clicked", {
        operationCategory,
        serviceFocus,
      });
    }
  };

  return (
    <div className="kcl-card bg-white border border-[#CBD5E1]">
      {/* Header bar without duplicate label, standard clean typography */}
      <div className="bg-[#0B2545] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-[#CBD5E1]">
        <div>
          <h3 className="text-xl font-bold text-white">
            Flight Support Navigator
          </h3>
        </div>
        <span className="text-xs bg-[#133661] border border-slate-600 px-2.5 py-1 text-slate-200 rounded-[2px] font-semibold">
          GUIDANCE ONLY · NOT AN AUTHORITY APPROVAL CALCULATOR
        </span>
      </div>

      <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Controls Column (Matched Height) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6 border-b lg:border-b-0 lg:border-r border-[#CBD5E1] pb-6 lg:pb-0 lg:pr-8">
          <div className="space-y-6">
            <fieldset>
              <legend className="block text-xs uppercase tracking-wider text-[#B88200] font-bold mb-2">
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
                    label: "Charter / Non-Scheduled",
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
                    onClick={() => {
                      setOperationCategory(opt.id);
                      trackNavigatorEvent("navigator_operation_selected", {
                        operation: opt.id,
                      });
                    }}
                    aria-pressed={operationCategory === opt.id}
                    className={`min-h-[44px] px-3 py-2.5 text-left border text-sm font-semibold transition-colors rounded-[2px] ${
                      operationCategory === opt.id
                        ? "bg-[#0B2545] text-white border-[#0B2545]"
                        : "bg-[#F6F8FB] text-[#16202B] border-[#CBD5E1] hover:border-[#0B2545]"
                    }`}
                  >
                    <span className="block leading-tight">{opt.label}</span>
                    <span
                      className={`block text-[11px] font-normal mt-0.5 ${
                        operationCategory === opt.id
                          ? "text-slate-300"
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
                className="block text-xs uppercase tracking-wider text-[#B88200] font-bold mb-2"
              >
                2. Core Service Area
              </label>
              <select
                id="navigator-service-focus"
                value={serviceFocus}
                onChange={(e) => {
                  const val = e.target.value as ServiceFocus;
                  setServiceFocus(val);
                  trackNavigatorEvent("navigator_service_selected", {
                    service: val,
                  });
                }}
                className="w-full min-h-[44px] px-3.5 py-2.5 bg-[#F6F8FB] border border-[#CBD5E1] text-[#0B2545] font-semibold text-sm rounded-[2px]"
              >
                <option value="overflight-permits">
                  Flight Permission: Overflight Permits
                </option>
                <option value="landing-permits">
                  Flight Permission: Landing Permits
                </option>
                <option value="pakistan-permissions">
                  Permit Directory &amp; Country Guides
                </option>
                <option value="ground-handling">
                  Ground Handling Coordination
                </option>
                <option value="inflight-catering">
                  Catering Services Coordination
                </option>
                <option value="aviation-fuel">
                  Aviation Fuel Supply Coordination
                </option>
                <option value="crew-logistics">
                  Crew Accommodation &amp; Transport Arrangements
                </option>
                <option value="operations-support">
                  24/7 Operational &amp; Trip Support
                </option>
              </select>
            </div>
          </div>

          <div className="pt-4 space-y-3">
            <Link
              href={inquiryHref}
              onClick={() => {
                trackNavigatorEvent("navigator_submit_clicked", {
                  operationCategory,
                  serviceFocus,
                  href: inquiryHref,
                });
              }}
              className="kcl-btn-primary w-full min-h-[48px] px-5 py-3 font-bold text-sm inline-flex items-center justify-between rounded-[2px]"
            >
              <span>Prepare This Flight Support Inquiry</span>
              <span>→</span>
            </Link>

            {/* Secondary actions: Copy checklist & Download PDF */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handleCopyChecklist}
                className="min-h-[38px] px-3 py-1.5 text-xs font-semibold border border-[#CBD5E1] bg-[#F6F8FB] hover:bg-slate-200 text-[#0B2545] rounded-[2px] inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#0B2545]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>{copied ? "Copied!" : "Copy checklist"}</span>
              </button>

              <a
                href="/files/kcl-permit-request-checklist.pdf"
                download
                onClick={() => {
                  trackNavigatorEvent("navigator_download_pdf_clicked", {
                    operationCategory,
                    serviceFocus,
                  });
                }}
                className="min-h-[38px] px-3 py-1.5 text-xs font-semibold border border-[#CBD5E1] bg-[#F6F8FB] hover:bg-slate-200 text-[#0B2545] rounded-[2px] inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#0B2545]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                <span>Inquiry Checklist (PDF)</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#5C6B7A] pt-1">
              <Link
                href={checklistGuideHref}
                className="text-[#0B2545] font-semibold hover:underline underline-offset-4"
              >
                {checklistGuideLabel} →
              </Link>
              <Link
                href="/permit-checklist/overflight"
                className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline"
              >
                All Checklist Pages
              </Link>
            </div>
          </div>
        </div>

        {/* Output Panel (Matched Height, No Empty Space) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#CBD5E1]">
              <div>
                <span className="text-xs uppercase text-[#B88200] font-bold">
                  PREPARATION GUIDANCE ·{" "}
                  {operationCategory.replace(/-/g, " ").toUpperCase()}
                </span>
                <h4 className="text-lg font-bold text-[#0B2545] mt-0.5">
                  {guidance.title}
                </h4>
              </div>
              <span className="text-[11px] bg-[#F6F8FB] border border-[#CBD5E1] text-[#0B2545] px-2.5 py-0.5 font-semibold rounded-[2px]">
                SUBJECT TO AUTHORITY / PROVIDER RULES
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
              {guidance.summary}
            </p>

            <div className="space-y-2.5">
              <h5 className="text-xs uppercase tracking-wider text-[#0B2545] font-bold">
                Details Helpful to Prepare for an Initial Inquiry:
              </h5>
              <ul className="space-y-2.5 text-sm text-[#16202B]">
                {guidance.preparationItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      className="w-4 h-4 text-[#0B2545] shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Operational & Regulatory Boundary Box */}
          <div className="bg-[#F6F8FB] border-l-4 border-[#0B2545] p-4 text-xs text-[#5C6B7A] space-y-1 mt-auto">
            <p className="font-semibold text-[#0B2545]">
              Operational &amp; Regulatory Boundary:
            </p>
            <p>
              This guide helps you prepare. Approvals and timelines are decided
              by the relevant civil aviation authorities.
            </p>
          </div>
        </div>
      </div>

      {/* Accessible, Server-Rendered Full Checklist for SEO & No-JS Crawlers */}
      <div className="sr-only">
        <h3>Complete Flight Support Pre-Inquiry Checklists</h3>
        {Object.entries(GUIDANCE_MAP).map(([key, item]) => (
          <div key={key}>
            <h4>{item.title}</h4>
            <p>{item.summary}</p>
            <ul>
              {item.preparationItems.map((pi) => (
                <li key={pi}>{pi}</li>
              ))}
            </ul>
            <p>{item.governanceNote}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
