import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Aviation Resources, Permit Guides & Checklists | KCL",
  description:
    "Browse aviation coordination guides, flight permit information and practical preparation checklists for airline and charter operations.",
  path: "/aviation-resources",
});

const RESOURCE_MODULES = [
  {
    code: "RESOURCE 01",
    title: "Pakistan Flight Permission Guide",
    reviewedDate: "2026-11-03",
    reviewer: "KCL Editorial & Operations Review (Pending Final Sign-Off)",
    summary:
      "Explains the distinction between overflight and landing permission inquiries involving Pakistan's airspace and airports, and notes where authoritative current guidance applies.",
    sources: [
      "Pakistan Civil Aviation Authority (PCAA) Aeronautical Information Publication (AIP Pakistan)",
      "ICAO Annex 9 (Facilitation) & ICAO Doc 4444 (PANS-ATM)",
    ],
    href: "/pakistan/flight-permissions",
    ctaLabel: "Read Pakistan Permission Guide →",
  },
  {
    code: "RESOURCE 02",
    title: "Flight Support Request Checklist",
    reviewedDate: "2026-11-03",
    reviewer: "KCL Operations Coordination Team",
    summary:
      "A downloadable list of operator, aircraft, route, UTC schedule, service and contact information typically helpful for an initial flight support discussion.",
    sources: [
      "Standard international flight support intake fields (Operator, Aircraft Registration/Type, Route, UTC Timings, Services)",
    ],
    href: "/files/kcl-permit-request-checklist.pdf",
    ctaLabel: "Download Checklist PDF ↓",
    isDownload: true,
  },
  {
    code: "RESOURCE 03",
    title: "Scheduled Versus Non-Scheduled Operations",
    reviewedDate: "2026-11-03",
    reviewer: "KCL Editorial & Operations Review",
    summary:
      "A practical introduction to the difference between regular planned airline services and individual charter, private, or cargo movements.",
    sources: [
      "ICAO Convention on International Civil Aviation (Articles 5 & 6)",
    ],
    href: "/services/scheduled-flights",
    secondaryHref: "/services/non-scheduled-flights",
    ctaLabel: "Scheduled Operations Guide →",
    secondaryCtaLabel: "Charter & Non-Scheduled Guide →",
  },
  {
    code: "RESOURCE 04",
    title: "Flight Planning and Dispatch Terms",
    reviewedDate: "2026-11-03",
    reviewer: "KCL Editorial & Operations Review",
    summary:
      "A reference glossary explaining common operational terms (FIR, UTC, Airport Slot, Overflight Permit, Technical Stop) without suggesting KCL provides regulatory authority or certified dispatch functions.",
    sources: [
      "ICAO Phonetic & Radiotelephony Reference",
      "IATA Worldwide Airport Slot Guidelines (WASG) — General Terminology",
    ],
    href: "/tools",
    ctaLabel: "Open Operational Reference Tools →",
  },
];

const GLOSSARY_TERMS = [
  {
    term: "Overflight Permission",
    definition:
      "An authorization relevant to certain flights passing through a state's sovereign airspace without landing. Requirements depend on the route, aircraft, operation type, and applicable civil aviation authority rules.",
  },
  {
    term: "Landing Permission",
      definition:
      "An authorization required for eligible aircraft arrivals at an aerodrome, distinct from an airport slot or ground handling arrangement.",
  },
  {
    term: "Airport Slot",
    definition:
      "A scheduled time of arrival or departure allocated by an airport slot coordinator at a slot-coordinated airport. An airport slot does not replace a landing permit.",
  },
  {
    term: "FIR (Flight Information Region)",
    definition:
      "An airspace of defined dimensions within which flight information service and alerting service are provided (for example, Karachi FIR OPKR and Lahore FIR OPLR in Pakistan).",
  },
  {
    term: "Dispatch & Planning Coordination",
    definition:
      "Administrative and operational communication connecting route information, timing updates, and service providers. The aircraft operator retains operational control and responsibility for the flight.",
  },
];

export default function AviationResourcesPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Aviation Resources", path: "/aviation-resources" }]}
      />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 px-3 py-1 inline-block">
              OPERATOR RESOURCE LIBRARY · PERMIT GUIDES &amp; CHECKLISTS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Aviation Resources, Permit Guides &amp; Checklists
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-100">
              Better Flight Questions Begin with Better Information.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Preparing an international flight often means bringing different
              details together early. Our resource library is designed to help
              operations professionals understand terminology, prepare relevant
              information and recognize which questions need current
              authoritative answers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Publication Policy Notice */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-5 sm:p-6">
            <span className="font-mono text-xs font-bold text-[#0B2545] uppercase block mb-1">
              PUBLICATION POLICY &amp; REGULATORY NOTICE
            </span>
            <p className="text-sm text-[#16202B] leading-relaxed">
              Every procedural guide includes a reviewer note, review date,
              reference sources, and a clear reminder that aviation requirements
              change. These resources are for initial planning orientation only
              and do not replace official Aeronautical Information Publications
              (AIPs), NOTAMs, or civil aviation authority directives.
            </p>
          </div>

          {/* 4 Core Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESOURCE_MODULES.map((item) => (
              <article
                key={item.code}
                className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#5C6B7A]">
                    <span className="bg-[#F6F8FB] border border-[#CBD5E1] px-2.5 py-0.5 font-bold text-[#0B2545]">
                      {item.code}
                    </span>
                    <span>Last Reviewed: {item.reviewedDate}</span>
                  </div>

                  <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                    {item.title}
                  </h2>

                  <p className="text-sm text-[#16202B] leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-3 text-xs space-y-1">
                    <div className="font-mono text-[11px] uppercase text-[#5C6B7A] font-semibold">
                      Reviewer: {item.reviewer}
                    </div>
                    <div className="text-[#16202B]">
                      <strong>Reference Sources:</strong>{" "}
                      {item.sources.join(" · ")}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-sm font-bold">
                  {item.isDownload ? (
                    <a
                      href={item.href}
                      download
                      className="kcl-link text-[#0B2545]"
                    >
                      {item.ctaLabel}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="kcl-link text-[#0B2545]"
                    >
                      {item.ctaLabel}
                    </Link>
                  )}
                  {item.secondaryHref && item.secondaryCtaLabel && (
                    <Link
                      href={item.secondaryHref}
                      className="kcl-link text-[#0B2545]"
                    >
                      {item.secondaryCtaLabel}
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Flight Planning and Dispatch Terms Glossary */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#CBD5E1] pb-4">
              <div>
                <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                  OPERATIONAL TERMINOLOGY · REVIEWED 2026-11-03
                </span>
                <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                  Flight Planning and Dispatch Terms
                </h2>
              </div>
              <Link
                href="/insights"
                className="kcl-link text-sm font-bold text-[#0B2545]"
              >
                Read Aviation Insights Articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GLOSSARY_TERMS.map((entry) => (
                <div
                  key={entry.term}
                  className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-4 space-y-1.5"
                >
                  <h3 className="text-base font-bold text-[#0B2545]">
                    {entry.term}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#16202B] leading-relaxed">
                    {entry.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Prepare the Details That Make Coordination Easier."
        subheading="Download our Flight Inquiry Checklist or send your planned route and aircraft details to start a conversation with KCL."
        primaryLabel="Download the Flight Inquiry Checklist"
        primaryHref="/files/kcl-permit-request-checklist.pdf"
        secondaryLabel="Request Flight Support"
        secondaryHref="/request-flight-support"
      />
    </>
  );
}

