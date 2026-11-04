import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Flight Permission Services in Pakistan | KCL",
  description:
    "KCL assists airlines and aircraft operators with Pakistan overflight and landing permit requests, scheduled flights and charter operations.",
  path: "/pakistan/flight-permissions",
});

const PAKISTAN_PERMIT_FAQS = [
  {
    question: "Can KCL assist an international charter flight to Pakistan?",
    answer:
      "KCL describes non-scheduled flight permission facilitation as a core service; details should be reviewed for the particular flight.",
  },
  {
    question: "Are fixed permit times published?",
    answer:
      "No universal processing time is stated because requirements vary by authority and operation.",
  },
  {
    question: "Who grants final overflight or landing permission in Pakistan?",
    answer:
      "KCL facilitates and coordinates applications; the relevant aviation authorities retain all approval authority. Current requirements should be checked for each operation.",
  },
];

export default function PakistanFlightPermissionsPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(PAKISTAN_PERMIT_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          {
            name: "Pakistan Flight Permissions",
            path: "/pakistan/flight-permissions",
          },
        ]}
      />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 border-b-2 border-b-[var(--accent)] px-3 py-1 inline-block">
              PAKISTAN SPECIALIZATION · {SITE_CONFIG.authorityBadge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Flight Permission Services in Pakistan
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-100">
              Flight Permission Services in Pakistan, Explained Clearly.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Planning an operation involving Pakistan? Kashmir Corporation
              assists eligible aviation operators with flight permission
              coordination, including applicable overflight, landing and
              scheduled or non-scheduled requests. KCL&apos;s Pakistan focus
              combines local aviation context with practical communication for
              international operators.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/request-flight-support?country=Pakistan"
                className="kcl-btn-primary min-h-[48px] px-6 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Discuss Pakistan Flight Permissions
              </Link>
              <Link
                href="/permit-directory/pakistan"
                className="kcl-btn-outline-white min-h-[48px] px-5 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Pakistan FIR &amp; Airport Reference
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Core Pakistan Inquiry Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-[#0B2545] bg-[#F6F8FB] border border-[#CBD5E1] px-2.5 py-0.5 inline-block">
                  01 · PAKISTAN OVERFLIGHT INQUIRIES
                </span>
                <h2 className="no-accent-bar text-xl sm:text-2xl font-bold text-[#0B2545]">
                  Pakistan Overflight Inquiries
                </h2>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  Operators planning to cross Pakistan&apos;s airspace can
                  discuss relevant route and documentation requirements.
                  Permission requirements depend on the actual flight and
                  current authority procedures.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/services/overflight-permit-pakistan"
                  className="kcl-link text-sm font-bold text-[#0B2545]"
                >
                  Explore Pakistan Overflight Permit Guide →
                </Link>
              </div>
            </div>

            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-[#0B2545] bg-[#F6F8FB] border border-[#CBD5E1] px-2.5 py-0.5 inline-block">
                  02 · PAKISTAN LANDING INQUIRIES
                </span>
                <h2 className="no-accent-bar text-xl sm:text-2xl font-bold text-[#0B2545]">
                  Pakistan Landing Inquiries
                </h2>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  For intended arrivals, the itinerary, aircraft, operator,
                  purpose of flight and relevant airport information help
                  establish the scope of the request.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <Link
                  href="/services/landing-permit-pakistan"
                  className="kcl-link text-sm font-bold text-[#0B2545]"
                >
                  Explore Pakistan Landing Permit Guide →
                </Link>
              </div>
            </div>

            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-[#0B2545] bg-[#F6F8FB] border border-[#CBD5E1] px-2.5 py-0.5 inline-block">
                  03 · OPERATING CONTEXTS
                </span>
                <h2 className="no-accent-bar text-xl sm:text-2xl font-bold text-[#0B2545]">
                  Scheduled and Non-Scheduled Operations
                </h2>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  Regular commercial schedules and one-off charter movements may
                  involve distinct procedural paths and supporting information.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-sm font-bold text-[#0B2545]">
                <Link
                  href="/services/scheduled-flights"
                  className="kcl-link"
                >
                  Scheduled Flights →
                </Link>
                <Link
                  href="/services/non-scheduled-flights"
                  className="kcl-link"
                >
                  Charter &amp; Non-Scheduled →
                </Link>
              </div>
            </div>

            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold text-[#0B2545] bg-[#F6F8FB] border border-[#CBD5E1] px-2.5 py-0.5 inline-block">
                  04 · CONNECTED SUPPORT
                </span>
                <h2 className="no-accent-bar text-xl sm:text-2xl font-bold text-[#0B2545]">
                  Related Operational Requirements
                </h2>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  Ground handling, airport services and crew arrangements can be
                  discussed alongside permission requests where applicable.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-sm font-bold text-[#0B2545]">
                <Link
                  href="/services/ground-handling"
                  className="kcl-link"
                >
                  Ground Handling →
                </Link>
                <Link
                  href="/services/aviation-fuel"
                  className="kcl-link"
                >
                  Aviation Fuel →
                </Link>
                <Link
                  href="/services/crew-logistics"
                  className="kcl-link"
                >
                  Crew Logistics →
                </Link>
              </div>
            </div>
          </div>

          {/* What KCL needs from you & Authorization Disclaimer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="kcl-card lg:col-span-7 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                INQUIRY PREPARATION
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                What KCL Needs from You
              </h2>
              <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                Send aircraft registration/type, operator name, planned
                itinerary, UTC schedule, purpose of operation, contact details
                and relevant supporting information.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#16202B] pt-2">
                <li className="bg-[#F6F8FB] border border-[#CBD5E1] p-3">
                  <strong className="text-[#0B2545] block font-mono text-xs">
                    [01] OPERATOR &amp; AIRCRAFT
                  </strong>
                  <span>
                    Operator name, aircraft registration, aircraft type, and
                    callsign if applicable.
                  </span>
                </li>
                <li className="bg-[#F6F8FB] border border-[#CBD5E1] p-3">
                  <strong className="text-[#0B2545] block font-mono text-xs">
                    [02] PLANNED ITINERARY
                  </strong>
                  <span>
                    Origin, destination, route / FIR context (OPKR / OPLR), and
                    intended airports.
                  </span>
                </li>
                <li className="bg-[#F6F8FB] border border-[#CBD5E1] p-3">
                  <strong className="text-[#0B2545] block font-mono text-xs">
                    [03] UTC SCHEDULE &amp; PURPOSE
                  </strong>
                  <span>
                    Planned UTC dates and times, flight classification, and
                    purpose of movement.
                  </span>
                </li>
                <li className="bg-[#F6F8FB] border border-[#CBD5E1] p-3">
                  <strong className="text-[#0B2545] block font-mono text-xs">
                    [04] CONTACT &amp; SERVICES
                  </strong>
                  <span>
                    Operational contact details and any connected ground, fuel,
                    or crew requirements.
                  </span>
                </li>
              </ul>
            </div>

            <div className="kcl-card lg:col-span-5 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase text-white bg-[#0B2545] border-b-2 border-[var(--accent)] px-2.5 py-1 inline-block font-semibold">
                  AUTHORIZATION DISCLAIMER
                </span>
                <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                  Regulatory Authority &amp; Current Requirements
                </h2>
                <p className="text-sm text-[#16202B] leading-relaxed">
                  KCL facilitates and coordinates applications; the relevant
                  aviation authorities retain all approval authority. Current
                  requirements should be checked for each operation.
                </p>
                <p className="text-xs text-[#5C6B7A] leading-relaxed">
                  Looking for international overflight or landing permission
                  coordination beyond Pakistan? See our dedicated{" "}
                  <Link
                    href="/services/overflight-permits"
                    className="text-[#0B2545] font-semibold"
                  >
                    International Overflight Permits
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/services/landing-permits"
                    className="text-[#0B2545] font-semibold"
                  >
                    International Landing Permits
                  </Link>{" "}
                  pages.
                </p>
              </div>

              <div className="pt-4 border-t border-[#CBD5E1]">
                <Link
                  href="/request-flight-support?country=Pakistan"
                  className="kcl-btn-primary w-full min-h-[44px] px-4 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  Discuss Pakistan Flight Permissions →
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                Pakistan Flight Permission Inquiries Q&amp;A
              </h2>
            </div>

            <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1]">
              {PAKISTAN_PERMIT_FAQS.map((faq) => (
                <div key={faq.question} className="p-5 bg-[#F6F8FB]">
                  <h3 className="text-base font-bold text-[#0B2545] mb-1.5">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#16202B] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Planning to Fly Through or Into Pakistan?"
        subheading="Send aircraft registration/type, operator name, planned itinerary, UTC schedule, and purpose of operation to begin a Pakistan permission inquiry."
        primaryLabel="Discuss Pakistan Flight Permissions"
        primaryHref="/request-flight-support?country=Pakistan"
      />
    </>
  );
}

