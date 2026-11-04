import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { AirportLookupClient } from "@/components/sections/AirportLookupClient";

export const metadata = buildMetadata({
  title: "Worldwide Airport Code Lookup (ICAO & IATA) | KCL Tools",
  description:
    "Search international 4-letter ICAO and 3-letter IATA airport codes, city names, and commercial aerodromes worldwide using bundled OurAirports open data.",
  path: "/tools/airport-code-lookup",
});

const AIRPORT_LOOKUP_FAQS = [
  {
    question: "What is the difference between an ICAO and IATA airport code?",
    answer:
      "ICAO codes are 4-letter regional identifiers designated by the International Civil Aviation Organization, organized geographically by continent and country (e.g., OPKC for Karachi, OMDB for Dubai, EGLL for London Heathrow). IATA codes are 3-letter commercial identifiers used primarily by airlines, booking engines, and baggage handling (e.g., KHI, DXB, LHR).",
  },
  {
    question: "Which code is required for flight plan filings and international flight permits?",
    answer:
      "All official aeronautical flight plans (FPL), Air Traffic Control (ATC) communications, NOTAMs, overflight permit applications, and landing clearances strictly mandate 4-letter ICAO aerodrome designators.",
  },
  {
    question: "Where does this airport dataset come from?",
    answer:
      "This search utility is powered by the public domain OurAirports open aviation database, maintained with continuous global aerodrome updates for flight planning and dispatch reference.",
  },
];

export default function AirportCodeLookupPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(AIRPORT_LOOKUP_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Aviation Tools", path: "/tools" },
          {
            name: "Airport Code Lookup",
            path: "/tools/airport-code-lookup",
          },
        ]}
      />

      {/* Header Banner */}
      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block">
              DISPATCH UTILITY · GLOBAL AERODROME DIRECTORY
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Worldwide Airport Code Lookup (ICAO &amp; IATA)
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Search over 300 international commercial airports, secondary
              aerodromes, and technical stops worldwide by 4-letter ICAO
              indicator, 3-letter IATA code, or destination city.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Interactive Search Tool */}
          <AirportLookupClient />

          {/* Operational Explanation Card */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 rounded-[2px] space-y-4">
            <h2 className="text-xl font-bold text-[#0B2545]">
              ICAO vs. IATA Codes in Flight Operations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#16202B] leading-relaxed">
              <div className="space-y-2">
                <h3 className="font-bold text-[#0B2545]">
                  ICAO 4-Letter Designators (Technical / Operational)
                </h3>
                <p>
                  Assigned according to a geographic hierarchical scheme. For
                  instance, the prefix <code className="font-mono bg-[#F6F8FB] px-1 py-0.5 border border-[#CBD5E1] text-[#0B2545]">OP</code>{" "}
                  designates Pakistan (<code className="font-mono">OPKC</code> Karachi, <code className="font-mono">OPLA</code> Lahore), while{" "}
                  <code className="font-mono bg-[#F6F8FB] px-1 py-0.5 border border-[#CBD5E1] text-[#0B2545]">OM</code> designates the UAE (<code className="font-mono">OMDB</code> Dubai).
                  These codes are essential for air traffic control flight plans,
                  FIR boundary handoffs, and civil aviation permit clearances.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-[#0B2545]">
                  IATA 3-Letter Codes (Commercial / Passenger)
                </h3>
                <p>
                  Primarily intended for airline passenger ticketing, baggage tag
                  routing, and global distribution systems (GDS). While familiar
                  to travelers (e.g. <code className="font-mono bg-[#F6F8FB] px-1 py-0.5 border border-[#CBD5E1] text-[#0B2545]">KHI</code>,{" "}
                  <code className="font-mono bg-[#F6F8FB] px-1 py-0.5 border border-[#CBD5E1] text-[#0B2545]">DXB</code>,{" "}
                  <code className="font-mono bg-[#F6F8FB] px-1 py-0.5 border border-[#CBD5E1] text-[#0B2545]">LHR</code>), air traffic control and
                  overflight permit authorities exclusively require 4-letter ICAO
                  identifiers.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links to Other Tools */}
          <div className="border-t border-[#CBD5E1] pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-[#0B2545]">
            <span className="text-[#5C6B7A]">Explore Other Dispatch Tools:</span>
            <div className="flex flex-wrap gap-4">
              <Link href="/tools/utc-time-converter" className="hover:underline">
                UTC / PKT Time Converter →
              </Link>
              <Link href="/tools/icao-phonetic-alphabet" className="hover:underline">
                ICAO Phonetic Alphabet →
              </Link>
              <Link href="/tools/aircraft-registration-prefixes" className="hover:underline">
                Aircraft Registration Prefixes →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Frequently Asked Questions: Airport Codes &amp; Aerodromes
            </h2>
          </div>

          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-[#F6F8FB]">
            {AIRPORT_LOOKUP_FAQS.map((faq) => (
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
        heading="Coordinate Your Flight With Correct Aerodrome Identifiers"
        subheading="Submit your route with verified ICAO codes to coordinate overflight permits, landing clearances, and ground support."
        primaryLabel="Start Permit Request"
        primaryHref="/request-permit"
        secondaryLabel="Explore All Tools"
        secondaryHref="/tools"
      />
    </>
  );
}

