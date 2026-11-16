import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { UtcConverterClient } from "@/components/sections/UtcConverterClient";
import { UtcTimeZonePlanner } from "@/components/sections/tools/UtcTimeZonePlanner";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "UTC and Time Zone Planner | KCL Tools",
  description:
    "Convert aviation flight schedule UTC / Zulu times to Pakistan Standard Time (PKT, UTC+5), compare station times, and find overlapping dispatch call windows.",
  path: "/tools/utc-time-converter",
});

const UTC_FAQS = [
  {
    question: "Why does aviation use UTC instead of local time?",
    answer:
      "Coordinated Universal Time (UTC or Zulu) provides one consistent reference across all countries, FIR boundaries, flight plans, NOTAMs, and overflight permits without daylight saving shifts.",
  },
  {
    question: "What is Pakistan Standard Time (PKT) relative to UTC?",
    answer:
      "Pakistan Standard Time (PKT) is UTC+05:00 year-round with no daylight saving time changes.",
  },
  {
    question: "How does the Call Window Finder work?",
    answer:
      "Select two locations and set each team's local working hours. The bar highlights the overlapping hours in UTC so both desks can coordinate live.",
  },
];

export default function UtcTimeConverterPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(UTC_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Aviation Tools", path: "/tools" },
          {
            name: "UTC and Time Zone Planner",
            path: "/tools/utc-time-converter",
          },
        ]}
      />

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              UTC and Time Zone Planner
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Pakistan operates year-round on Pakistan Standard Time (PKT, UTC+05:00) with no daylight saving shifts. Compare UTC, PKT, and station local times or find overlapping working hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <UtcTimeZonePlanner />
          <UtcConverterClient />

          <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-4 flex flex-wrap items-center justify-between gap-3 text-base">
            <span className="text-[#475569]">
              Reference only. Check official sources for operations.
            </span>
            <Link
              href="/request-flight-support"
              className="font-semibold text-[#0B2545] hover:underline underline-offset-2"
            >
              Need help with a flight? Request Flight Support →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-2xl font-bold text-[#0B2545]">
            Frequently Asked Questions: UTC &amp; Aviation Time Zones
          </h2>
          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-[#F8FAFC]">
            {UTC_FAQS.map((faq) => (
              <div key={faq.question} className="p-6">
                <h3 className="text-base font-bold text-[#0B2545] mb-2">
                  {faq.question}
                </h3>
                <p className="text-base text-[#16202B] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
