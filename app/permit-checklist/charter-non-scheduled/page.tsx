import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Charter & Non-Scheduled Flight Clearance Checklist | KCL",
  description:
    "Operational checklist for charter and ad-hoc non-scheduled flight permissions, passenger manifests, receiving party details, and clearances.",
  path: "/permit-checklist/charter-non-scheduled",
});

const CHARTER_FAQS = [
  {
    question: "How quickly can a non-scheduled charter permit be approved?",
    answer:
      "Civil aviation authorities typically require between 48 to 96 hours for non-scheduled commercial charter clearances. When urgent humanitarian, medical evacuation, or executive ad-hoc missions arise, KCL liaises directly with authorized regulatory desks to expedite priority filings.",
  },
  {
    question: "What additional details are required for VIP and executive charter flights?",
    answer:
      "Executive and VIP charters frequently require confirmed sponsor/receiving party details, business purpose documentation, designated FBO handling agent appointments, and security clearances depending on the sovereign airspace traversed.",
  },
  {
    question: "Can passenger names be modified after a charter permit is granted?",
    answer:
      "Yes, minor passenger manifest updates are usually permitted up to 12 to 24 hours prior to departure, provided an amended General Declaration and updated passport details are promptly submitted to civil aviation and immigration authorities.",
  },
];

export default function CharterNonScheduledChecklistPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(CHARTER_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Permit Checklists", path: "/permit-checklist/charter-non-scheduled" },
          { name: "Charter & Non-Scheduled", path: "/permit-checklist/charter-non-scheduled" },
        ]}
      />

      {/* Header Banner */}
      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#F4C400] font-bold block">
              AD-HOC CLEARANCES · COMMERCIAL CHARTER &amp; EXECUTIVE
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Charter &amp; Non-Scheduled Flight Clearance Checklist
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Non-scheduled flights—including ad-hoc commercial passenger
              charters, business aviation, and ferry flights—require explicit
              authorizations from both the civil aviation ministry and local
              immigration authorities. Review the preparation checklist below.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Group 1: Charter Mission & Operator Data */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 01
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Charter Mission &amp; Operator Profile
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
                      Air Operator Certificate (AOC) and commercial charter operating specifications
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
                      Charter agreement / contract summary stating mission purpose and charterer name
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
                      Aircraft tail registration, ICAO type, MTOW, and passenger seating configuration
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
                      24/7 Operations Control Center (OCC) direct contact phone and email
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 2: Passenger & Crew Manifest Details */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 02
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Passenger &amp; Crew Manifest Compliance
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
                      Detailed passenger manifest (full legal names, dates of birth, nationalities, passport numbers, and expiry dates)
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
                      Complete crew list (captains, first officers, flight attendants, and engineers)
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
                      Receiving party / business sponsor contact details at destination airport
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
                      Security declaration confirming no dangerous goods or non-declared baggage
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 3: Schedule, Handling & Station Logistics */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 03
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Schedule, Slots &amp; Handling Liaison
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
                      UTC routing with exact origin, en-route technical stops, destination, and alternates
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
                      Confirmed ground handling agent / FBO coordination at the destination airport
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
                      Prior Permission Required (PPR) or coordinated airport slot confirmation ID
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
                      Crew layover hotel reservation and airside VIP transportation requirements
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 4: Legal & Insurance Documents */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 04
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Statutory Certificates &amp; Insurance
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
                      Valid Certificate of Registration (C of R) and Certificate of Airworthiness (C of A)
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
                      Aviation Third-Party Legal Liability Insurance naming territorial coverage
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
                      Aircraft Radio Station License &amp; Mode-S Transponder / TCAS II capability
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
                      ICAO Annex 16 Chapter 3 / 4 / 14 Aircraft Noise Compliance Certificate
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
                CONNECTED CHARTER SUPPORT
              </span>
              <p className="text-sm font-semibold text-[#0B2545]">
                Operating an ad-hoc charter or private aviation mission?
              </p>
              <p className="text-xs text-[#5C6B7A] mt-0.5">
                Review non-scheduled procedures or initiate your inquiry with KCL.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services/non-scheduled-flights"
                className="kcl-btn-outline-navy min-h-[42px] px-4 py-2 text-xs font-semibold inline-flex items-center rounded-[2px]"
              >
                Non-Scheduled Filing Guide →
              </Link>
              <Link
                href="/request-permit?flightType=non-schedule"
                className="kcl-btn-primary min-h-[42px] px-5 py-2 text-xs font-bold inline-flex items-center rounded-[2px]"
              >
                Start Charter Filing →
              </Link>
            </div>
          </div>

          {/* Sibling Checklists Navigation */}
          <div className="border-t border-[#CBD5E1] pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#0B2545]">
            <span className="text-[#5C6B7A]">Explore Other Checklists:</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/permit-checklist/overflight" className="hover:underline">
                Overflight Permit Checklist →
              </Link>
              <Link href="/permit-checklist/landing" className="hover:underline">
                Landing Permit Checklist →
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
              Frequently Asked Questions: Non-Scheduled &amp; Charter Clearances
            </h2>
          </div>

          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-[#F6F8FB]">
            {CHARTER_FAQS.map((faq) => (
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
        heading="Clear Your Non-Scheduled Flight With Confidence"
        subheading="Submit your charter itinerary, passenger count, and handling preferences for fast operational review."
        primaryLabel="Request Charter Clearance"
        primaryHref="/request-permit?flightType=non-schedule"
        secondaryLabel="View Charter Services"
        secondaryHref="/services/non-scheduled-flights"
      />
    </>
  );
}

