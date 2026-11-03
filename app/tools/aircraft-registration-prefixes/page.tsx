import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RegistrationPrefixSearchClient } from "@/components/sections/RegistrationPrefixSearchClient";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Aircraft Registration Prefixes by Country",
  description:
    "Searchable directory of international aircraft registration prefixes (AP- Pakistan, VH- Australia, V8- Brunei, 3B- Mauritius, A6- UAE) and ICAO codes.",
  path: "/tools/aircraft-registration-prefixes",
});

export default function AircraftRegistrationPrefixesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Aviation Tools", path: "/tools" },
          {
            name: "Aircraft Registration Prefixes",
            path: "/tools/aircraft-registration-prefixes",
          },
        ]}
      />

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#E8A200] bg-[#133661] border border-slate-600 px-3 py-1 inline-block">
              DISPATCH REFERENCE // ICAO ANNEX 7 NATIONALITY MARKS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              International Aircraft Registration Prefixes
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Quickly verify aircraft nationality prefixes and corresponding
              ICAO aerodrome location indicators when preparing overflight and
              landing permit applications. Pakistan-registered civil aircraft
              carry the <span className="font-mono text-[#E8A200]">AP-</span>{" "}
              prefix.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <RegistrationPrefixSearchClient />

          <div className="bg-white border border-[#CBD5E1] p-6 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="space-x-4 font-semibold">
              <Link
                href="/tools/icao-phonetic-alphabet"
                className="text-[#0B2545] underline underline-offset-4"
              >
                ← ICAO Phonetic Alphabet
              </Link>
              <Link
                href="/tools/utc-time-converter"
                className="text-[#0B2545] underline underline-offset-4"
              >
                UTC / PKT Time Converter →
              </Link>
            </div>
            <Link
              href="/request-permit"
              className="font-bold text-[#0B2545] underline underline-offset-4"
            >
              Request a Pakistan Flight Permit →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

