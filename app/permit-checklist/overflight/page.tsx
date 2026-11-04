import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Overflight Permit Application Checklist & Requirements | KCL",
  description:
    "Comprehensive preparation checklist for international overflight permits, ATS route information, aircraft documents, and authority lead times.",
  path: "/permit-checklist/overflight",
});

const OVERFLIGHT_FAQS = [
  {
    question: "What is the standard lead time for an international overflight permit?",
    answer:
      "Lead times depend on the specific Civil Aviation Authority (CAA) jurisdiction. Routine overflights through established air corridors typically require 3 to 7 working days, while urgent or short-notice diplomatic and ad-hoc filings may be coordinated on shorter windows depending on the country.",
  },
  {
    question: "What happens if our entry waypoint or estimated time (ETO) changes in flight?",
    answer:
      "Most overflight permissions include an operational validity window (often ±24 to ±48 hours depending on authority regulations). If an in-flight re-route or significant delay exceeds the permitted window, revised clearance or schedule revision must be submitted immediately to the relevant flight information region (FIR) control.",
  },
  {
    question: "Are civil aviation overflight fees included in the permit application?",
    answer:
      "Civil aviation navigation and overflight charges (Eurocontrol, local CAA route navigation fees) are billed per aircraft MTOW and distance flown. KCL assists in verifying fee status and navigating clearance dependencies for seamless entry.",
  },
];

export default function OverflightChecklistPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(OVERFLIGHT_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Permit Checklists", path: "/permit-checklist/overflight" },
          { name: "Overflight Permits", path: "/permit-checklist/overflight" },
        ]}
      />

      {/* Header Banner */}
      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#F4C400] font-bold block">
              OPERATIONAL COMPLIANCE · ATS AIRSPACE TRANSIT
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              International Overflight Permit Preparation Checklist
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Every international overflight request requires verified operator
              credentials, airframe navigation specifications, and precise ATS
              entry and exit waypoints. Prepare the following items before
              submitting your permit application to minimize clearance delays.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Group 1: Aircraft & Registration Data */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 01
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Aircraft &amp; Registration Particulars
                </h2>
                <ul className="space-y-3 text-sm text-[#16202B]">
                  <li className="flex items-start gap-3">
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
                    <span>
                      Aircraft tail registration and ICAO aircraft type designator
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      State of aircraft registry and civil Certificate of Airworthiness (C of A)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      Maximum Takeoff Weight (MTOW in kg or lbs) and noise certification level
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      Onboard navigation capability (RNP, RNAV, RVSM, and CPDLC status)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 2: Operator & Mission Details */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 02
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Operator &amp; Flight Identification
                </h2>
                <ul className="space-y-3 text-sm text-[#16202B]">
                  <li className="flex items-start gap-3">
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
                    <span>
                      Full registered operator / airline name and operational headquarters address
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      Flight callsign, commercial flight number, or ICAO 3-letter telephony code
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      Flight classification (scheduled commercial service, ad-hoc charter, ferry, or ambulance)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      24/7 Flight Operations Control (OCC) phone, SITA address, and operational email
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 3: Routing & Waypoints */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 03
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Airway Routing &amp; FIR Boundaries
                </h2>
                <ul className="space-y-3 text-sm text-[#16202B]">
                  <li className="flex items-start gap-3">
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
                    <span>
                      Origin and destination ICAO airport codes (plus alternate airports)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      Exact FIR entry point, waypoint name, and estimated time over (ETO in UTC)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      Airway designator (ATS route) through the national airspace
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      FIR exit point and estimated exit time over in UTC
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 4: Required Certificates */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 04
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Mandatory Statutory Documentation
                </h2>
                <ul className="space-y-3 text-sm text-[#16202B]">
                  <li className="flex items-start gap-3">
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
                    <span>
                      Air Operator Certificate (AOC) and associated Operations Specifications (OpSpecs)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      Worldwide Third-Party Aviation Hull &amp; War Liability Insurance Certificate
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      Certificate of Registration (C of R) and Radio Station License
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                    <span>
                      ICAO Annex 16 Aircraft Noise Certificate
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links Back to Matching Service & Cross-Checklists */}
          <div className="bg-white border border-[#CBD5E1] p-6 rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                CONNECTED FLIGHT GUIDANCE
              </span>
              <p className="text-sm font-semibold text-[#0B2545]">
                Need complete operational coordination for this route?
              </p>
              <p className="text-xs text-[#5C6B7A] mt-0.5">
                Review the dedicated guide or prepare your application directly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services/overflight-permits"
                className="kcl-btn-outline-navy min-h-[42px] px-4 py-2 text-xs font-semibold inline-flex items-center rounded-[2px]"
              >
                Overflight Permit Guide →
              </Link>
              <Link
                href="/request-permit?permitType=overflight"
                className="kcl-btn-primary min-h-[42px] px-5 py-2 text-xs font-bold inline-flex items-center rounded-[2px]"
              >
                Start Overflight Request →
              </Link>
            </div>
          </div>

          {/* Sibling Checklists Navigation */}
          <div className="border-t border-[#CBD5E1] pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#0B2545]">
            <span className="text-[#5C6B7A]">Explore Other Checklists:</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/permit-checklist/landing" className="hover:underline">
                Landing Permit Checklist →
              </Link>
              <Link href="/permit-checklist/charter-non-scheduled" className="hover:underline">
                Charter Flight Checklist →
              </Link>
              <Link href="/permit-checklist/cargo" className="hover:underline">
                Cargo Flight Checklist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#B88200] font-bold block mb-1">
              REGULATORY FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Frequently Asked Questions: Overflight Permits
            </h2>
          </div>

          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-[#F6F8FB]">
            {OVERFLIGHT_FAQS.map((faq) => (
              <div key={faq.question} className="p-6">
                <h3 className="text-base font-bold text-[#0B2545] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#16202B] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Coordinate Your Next International Overflight"
        subheading="Share your ATS route, aircraft details, and planned schedule with KCL's 24/7 flight support desk."
        primaryLabel="Request Overflight Permit"
        primaryHref="/request-permit?permitType=overflight"
        secondaryLabel="View Overflight Services"
        secondaryHref="/services/overflight-permits"
      />
    </>
  );
}

