import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FlightTimeEstimatorClient } from "@/components/sections/tools/FlightTimeEstimatorClient";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Flight Time Estimator | KCL Tools",
  description:
    "Estimate flight duration in hours and minutes from distance in nautical miles and average ground speed in knots, with optional UTC arrival time.",
  path: "/tools/flight-time-estimator",
});

const FLIGHT_TIME_FAQS = [
  {
    question: "How does the Flight Time Estimator calculate duration?",
    answer:
      "It divides distance in nautical miles by average ground speed in knots and converts the result into hours and minutes. It is a simple arithmetic estimate and not an operational flight plan.",
  },
  {
    question: "Why does actual flight time differ from this estimate?",
    answer:
      "Actual flight time depends on upper-level winds, airway routing, step climbs, SID/STAR procedures, and air traffic control clearances.",
  },
  {
    question: "What time zone should I use for departure time?",
    answer:
      "Enter departure time in Coordinated Universal Time (UTC) to see the estimated arrival timestamp in UTC.",
  },
];

export default function FlightTimeEstimatorPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(FLIGHT_TIME_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Aviation Tools", path: "/tools" },
          {
            name: "Flight Time Estimator",
            path: "/tools/flight-time-estimator",
          },
        ]}
      />

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Flight Time Estimator
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Quickly estimate en-route flight hours and minutes from nautical-mile distance and average ground speed, with an optional UTC arrival time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FlightTimeEstimatorClient />

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
            Frequently Asked Questions: Flight Time Estimation
          </h2>
          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-[#F8FAFC]">
            {FLIGHT_TIME_FAQS.map((faq) => (
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

