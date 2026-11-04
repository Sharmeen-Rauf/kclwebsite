import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Cargo Flight Permission & Ground Clearance Checklist | KCL",
  description:
    "Operational preparation checklist for cargo flights, dangerous goods declarations (DGD), airway bills, and airport apron clearances.",
  path: "/permit-checklist/cargo",
});

const CARGO_FAQS = [
  {
    question: "What documentation is required for flights carrying dangerous goods (DGR)?",
    answer:
      "All dangerous goods consignments require an IATA Dangerous Goods Declaration (DGD), valid UN packaging certification, technical material safety data sheets (MSDS), and explicit sovereign carriage exemption permits from both overflight and landing state civil aviation directorates.",
  },
  {
    question: "Does a cargo landing permit guarantee ramp cargo offloading equipment?",
    answer:
      "No. Airside cargo main-deck loaders (K-loaders), fork-lifts, and pallet dollies must be contracted directly through authorized ground handling agents. KCL confirms handling capabilities and ramp equipment availability prior to landing permit execution.",
  },
  {
    question: "How are technical crew vs cargo attendants treated for permit manifests?",
    answer:
      "Cockpit crew and licensed loadmasters/engineers are declared on the Crew General Declaration. Non-operating cargo escorts or animal handlers must be declared on a separate Supernumerary / Cargo Attendant manifest conforming to local immigration regulations.",
  },
];

export default function CargoChecklistPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(CARGO_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Permit Checklists", path: "/permit-checklist/cargo" },
          { name: "Cargo Flights", path: "/permit-checklist/cargo" },
        ]}
      />

      {/* Header Banner */}
      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#F4C400] font-bold block">
              ALL-CARGO CLEARANCES · AIR FREIGHT &amp; DANGEROUS GOODS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Cargo Flight Permission &amp; Handling Clearance Checklist
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Operating scheduled or ad-hoc cargo flights demands synchronization
              across civil aviation authorities, customs directorates, airport
              cargo terminals, and specialized main-deck ramp handling teams.
              Review the essential operational checklist below.
            </p>
          </div>
        </div>
      </section>

      {/* Checklist Grid */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Group 1: Aircraft & Ramp Capacity Specifications */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 01
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Aircraft &amp; Ramp Loading Capability
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
                      Aircraft tail registration, ICAO type (e.g. B744F, B77F, A330F), and serial number
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
                      Certified Maximum Takeoff Weight (MTOW) &amp; Maximum Zero Fuel Weight (MZFW)
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
                      Cargo main-deck and lower-lobe door dimensions and threshold heights
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
                      Ramp turnaround ground time requirement and pushback tug capacity
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 2: Consignment & Air Waybill Manifest */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 02
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Consignment &amp; Waybill Particulars
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
                      Air Waybill (AWB) or Master Air Waybill (MAWB) numbers and full cargo manifest
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
                      Consignment commodity description, piece count, volumetric cube, and gross weight
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
                      Shipper legal entity and verified receiving consignee contact at destination
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
                      Customs declaration, commercial invoice, and destination import/transit clearance code
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 3: Dangerous Goods & Special Cargo Clearances */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 03
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Dangerous Goods &amp; Special Handling
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
                      IATA Dangerous Goods Declaration (DGD) with UN numbers, classes, and packing groups
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
                      Sovereign diplomatic clearance or dangerous goods carriage exemption approval
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
                      Temperature-controlled / pharma cargo specifications (dry ice declarations &amp; thresholds)
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
                      Live animals (AVI) or oversize heavy freight tie-down loadmaster certifications
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Group 4: Operator Compliance & Station Clearances */}
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-5 rounded-[2px]">
              <div>
                <span className="text-xs uppercase font-bold text-[#B88200] block mb-1">
                  CATEGORY 04
                </span>
                <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                  Operator Certifications &amp; Handling Orders
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
                      Air Operator Certificate (AOC) authorized for international cargo operations
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
                      Cargo ramp handling contract and main-deck loader (K-loader) equipment order
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
                      Worldwide Third-Party Aviation Insurance with cargo legal liability riders
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
                      Airport cargo slot coordination confirmation and fueling arrangement order
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
                CONNECTED CARGO COORDINATION
              </span>
              <p className="text-sm font-semibold text-[#0B2545]">
                Planning scheduled cargo sectors or an ad-hoc charter freighter?
              </p>
              <p className="text-xs text-[#5C6B7A] mt-0.5">
                KCL coordinates permissions, handling equipment, and fuel on a unified desk.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/services/international-flight-support"
                className="kcl-btn-outline-navy min-h-[42px] px-4 py-2 text-xs font-semibold inline-flex items-center rounded-[2px]"
              >
                Flight Support Directory →
              </Link>
              <Link
                href="/request-permit?operationType=cargo"
                className="kcl-btn-primary min-h-[42px] px-5 py-2 text-xs font-bold inline-flex items-center rounded-[2px]"
              >
                Start Cargo Inquiry →
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
              <Link href="/permit-checklist/charter-non-scheduled" className="hover:underline">
                Charter Flight Checklist →
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
              Frequently Asked Questions: All-Cargo Flight Operations
            </h2>
          </div>

          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-[#F6F8FB]">
            {CARGO_FAQS.map((faq) => (
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
        heading="Coordinate Your Cargo Flight With Precision"
        subheading="Submit your cargo routing, aircraft type, and consignment specifications to discuss synchronized permissions and ramp handling."
        primaryLabel="Request Cargo Clearance"
        primaryHref="/request-permit?operationType=cargo"
        secondaryLabel="Explore All Services"
        secondaryHref="/services"
      />
    </>
  );
}

