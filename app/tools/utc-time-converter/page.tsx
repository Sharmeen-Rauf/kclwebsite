import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { UtcConverterClient } from "@/components/sections/UtcConverterClient";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "UTC to Pakistan Time (PKT) Aviation Converter",
  description:
    "Convert aviation flight schedule UTC / Zulu times to Pakistan Standard Time (PKT, UTC+5) for OPKC, OPLA and OPIS permit and slot filings.",
  path: "/tools/utc-time-converter",
});

export default function UtcTimeConverterPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Aviation Tools", path: "/tools" },
          {
            name: "UTC / PKT Time Converter",
            path: "/tools/utc-time-converter",
          },
        ]}
      />

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-[#133661] border border-slate-600 border-b-2 border-b-[var(--accent)] px-3 py-1 inline-block">
              DISPATCH UTILITY // ZULU TO PKT (UTC+5)
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              UTC / Pakistan Standard Time (PKT) Aviation Converter
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Pakistan operates year-round on Pakistan Standard Time (PKT),
              which is <span className="font-mono text-white font-semibold">UTC+05:00</span>{" "}
              with no daylight saving time shifts. All flight permit
              applications to KCL should state timings in UTC, while crew hotel
              check-ins and local ground transport reference PKT.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <UtcConverterClient />

          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="space-x-4 font-semibold">
              <Link
                href="/tools/icao-phonetic-alphabet"
                className="text-[#0B2545] underline underline-offset-4"
              >
                ← ICAO Phonetic Alphabet
              </Link>
              <Link
                href="/tools/aircraft-registration-prefixes"
                className="text-[#0B2545] underline underline-offset-4"
              >
                ← Aircraft Registration Prefixes
              </Link>
            </div>
            <Link
              href="/request-permit"
              className="font-bold text-[#0B2545] underline underline-offset-4"
            >
              Submit UTC Flight Schedule for Permit →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

