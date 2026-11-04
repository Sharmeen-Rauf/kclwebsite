import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Landing Permit Application Checklist & Arrival Requirements | KCL",
  description:
    "Essential operational checklist for international landing permits, airport slots, ground handling liaison, and MTOW documentation.",
  path: "/permit-checklist/landing",
});

const LANDING_FAQS = [
  {
    question: "Is an airport slot confirmation required before submitting a landing permit?",
    answer:
      "At Level 3 (coordinated) international airports, slot clearance or an airport slot reservation number is mandatory prior to or concurrent with civil aviation landing permit submission. For non-coordinated aerodromes, prior permission required (PPR) or ground handler confirmation is typically sufficient.",
  },
  {
    question: "What documentation is required for landing permits with technical fuel stops?",
    answer:
      "Technical fuel stops typically require aircraft MTOW, insurance certificate, crew and passenger count (confirming no disembarkation or commercial cargo transfer), and an official handling agent confirmation at the destination airport.",
  },
  {
    question: "Who holds final approval authority for international landing permissions?",
    answer:
      "The designated Civil Aviation Authority (CAA) of the sovereign territory holds exclusive statutory approval authority. Flight support providers like KCL facilitate application filing, document verification, and station logistics; approval timing remains with the regulatory body.",
  },
];

export default function LandingChecklistPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(LANDING_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Permit Checklists", path: "/permit-checklist/landing" },
          { name: "Landing Permits", path: "/permit-checklist/landing" },
        ]}
      />

      {/* Header Banner */}
      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#F4C400] font-bold block">
              OPERATIONAL COMPLIANCE · AERODROME ARRIVAL
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              International Aircraft Landing Permit Preparation Checklist
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Securing an international landing permit requires coordinated
              approvals across civil aviation authorities, airport slot
              coordinators, and certified airside handling agents. Review the
              mandatory specifications and documentation required for timely
              processing.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Group 1: Aircraft & Technical Specifications */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 01
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Aircraft &amp; Aerodrome Specifications
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
                      Aircraft tail registration, ICAO type designator, and serial number (MSN)
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
                      Certified Maximum Takeoff Weight (MTOW) &amp; Maximum Ramp Weight
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
                      Intended destination ICAO airport code and designated commercial alternate
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
                      Estimated Time of Arrival (ETA) and Estimated Time of Departure (ETD) in UTC
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 2: Ground Handling & Airport Slot Liaison */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 02
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Station Handling &amp; Airport Slots
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
                      Prior Permission Required (PPR) confirmation or airport slot reservation ID
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
                      Appointed ground handler confirmation letter or ramp service work order
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
                      Ramp parking duration, overnight hangarage or apron pushback requirements
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
                      Aviation fuel release (JET A-1 specifications and uplift volume estimate)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 3: Flight Purpose & Payload Manifests */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 03
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Flight Purpose &amp; Manifest Information
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
                      Purpose of landing: commercial passenger, technical stop, cargo, or ferry
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
                      Certified crew manifest (names, nationalities, passport numbers, and licenses)
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
                      Passenger manifest or cargo airway bill (manifested pieces and gross weight)
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
                      Receiving party / charterer corporate details at the destination station
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 4: Legal & Regulatory Certificates */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 04
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Mandatory Operator Certificates
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
                      Air Operator Certificate (AOC) with current Operations Specifications
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
                      Certificate of Airworthiness (C of A) and Airworthiness Review Certificate
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
                      Worldwide Third-Party Aviation Insurance Certificate (Hull &amp; War)
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
                      ICAO Annex 16 Noise Certificate conforming to local aerodrome curfews
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
                CONNECTED ARRIVAL SUPPORT
              </span>
              <p className="text-sm font-semibold text-[#0B2545]">
                Require comprehensive handling, fuel, or crew layover arrangements?
              </p>
              <p className="text-xs text-[#5C6B7A] mt-0.5">
                KCL aligns your landing clearance with ramp and station services.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services/landing-permits"
                className="kcl-btn-outline-navy min-h-[42px] px-4 py-2 text-xs font-semibold inline-flex items-center rounded-[2px]"
              >
                Landing Permit Guide →
              </Link>
              <Link
                href="/request-permit?permitType=landing"
                className="kcl-btn-primary min-h-[42px] px-5 py-2 text-xs font-bold inline-flex items-center rounded-[2px]"
              >
                Start Landing Request →
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
              Frequently Asked Questions: Landing Permits
            </h2>
          </div>

          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-[#F6F8FB]">
            {LANDING_FAQS.map((faq) => (
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
        heading="Coordinate Your Next International Landing"
        subheading="Submit your destination airport, schedule, and handling requirements to discuss coordinated station support."
        primaryLabel="Request Landing Permit"
        primaryHref="/request-permit?permitType=landing"
        secondaryLabel="View Landing Services"
        secondaryHref="/services/landing-permits"
      />
    </>
  );
}

