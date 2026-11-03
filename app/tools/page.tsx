import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Aviation Dispatch Tools (ICAO, Prefixes, UTC)",
  description:
    "Operational reference utilities for flight dispatchers: ICAO phonetic alphabet, aircraft registration prefixes and UTC to Pakistan (PKT) converter.",
  path: "/tools",
});

const TOOLS_LIST = [
  {
    code: "TOOL-01",
    title: "ICAO Phonetic Alphabet & Telephony Reference",
    href: "/tools/icao-phonetic-alphabet",
    summary:
      "Standard A–Z ICAO radiotelephony spelling alphabet, numerals 0–9 pronunciation, Morse code table, and interactive callsign/tail-number spell-out converter.",
  },
  {
    code: "TOOL-02",
    title: "Aircraft Registration Prefixes Directory",
    href: "/tools/aircraft-registration-prefixes",
    summary:
      "Searchable international aircraft nationality registration marks (AP- Pakistan, VH- Australia, V8- Brunei, 3B- Mauritius, XU- Cambodia, A6- UAE, and more) with ICAO aerodrome region prefixes.",
  },
  {
    code: "TOOL-03",
    title: "UTC / Pakistan Time (PKT) Converter",
    href: "/tools/utc-time-converter",
    summary:
      "Convert flight schedule ETD/ETA timestamps between Zulu/UTC and Pakistan Standard Time (PKT, UTC+5), plus key regional station offsets.",
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Aviation Tools", path: "/tools" }]} />

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#E8A200] bg-[#133661] border border-slate-600 px-3 py-1 inline-block">
              FLIGHT DISPATCH REFERENCE UTILITIES
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Aviation Dispatch &amp; Flight Operations Tools
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-[#E8A200]">
              Quick-Access Reference Tables for Flight Planning and Permit Preparation.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Built for airline dispatchers, flight followers, and charter
              coordinators verifying aircraft nationality marks, radiotelephony
              readbacks, and UTC/PKT schedule conversions before filing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOOLS_LIST.map((tool) => (
              <article
                key={tool.href}
                className="bg-white border border-[#CBD5E1] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#5C6B7A] font-semibold block mb-2">
                    {tool.code}
                  </span>
                  <h2 className="text-xl font-bold text-[#0B2545] mb-3">
                    <Link
                      href={tool.href}
                      className="hover:underline underline-offset-4"
                    >
                      {tool.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-[#16202B] leading-relaxed mb-6">
                    {tool.summary}
                  </p>
                </div>

                <Link
                  href={tool.href}
                  className="min-h-[44px] px-4 py-2.5 bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-sm inline-flex items-center justify-between rounded-[2px]"
                >
                  <span>Open Dispatch Tool</span>
                  <span className="font-mono text-[#E8A200]">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-[#0B2545]">
                Preparing a Pakistan Overflight or Landing Request?
              </h2>
              <p className="text-sm text-[#16202B]">
                Download our one-page PDF checklist of operator details, route
                waypoints, and aircraft certificates to include with your
                submission.
              </p>
            </div>
            <a
              href="/files/kcl-permit-request-checklist.pdf"
              download
              className="min-h-[44px] px-5 py-2.5 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm whitespace-nowrap inline-flex items-center justify-center rounded-[2px]"
            >
              Download Checklist (PDF)
            </a>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Coordinate Your Next Flight Through Pakistan?"
        subheading="Move from flight planning to permit coordination—transmit your route, UTC timings, and aircraft registration to our 24/7 operations desk."
        primaryLabel="Request Flight Support"
        primaryHref="/request-permit"
      />
    </>
  );
}
