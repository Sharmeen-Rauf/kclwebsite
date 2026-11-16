import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AviationUnitConverterClient } from "@/components/sections/tools/AviationUnitConverterClient";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Aviation Unit Converter (Fuel, Distance, Speed, Altitude) | KCL Tools",
  description:
    "Convert aviation fuel quantities (litres, US gallons, kg, pounds), distance (NM, km, miles), speed (knots, km/h, mph), and altitude (feet, metres).",
  path: "/tools/aviation-unit-converter",
});

const UNIT_FAQS = [
  {
    question: "How do I convert aviation fuel litres to kilograms?",
    answer:
      "Multiply litres by the fuel density (typically around 0.80 kg per litre for Jet A-1). Always use the supplier's measured density for the actual uplift.",
  },
  {
    question: "How many kilometres are in one nautical mile?",
    answer:
      "One international nautical mile equals exactly 1.852 kilometres.",
  },
  {
    question: "How are feet converted to metres for altitude?",
    answer:
      "Multiply feet by 0.3048 to get metres, or divide metres by 0.3048 to get feet.",
  },
];

export default function AviationUnitConverterPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(UNIT_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Aviation Tools", path: "/tools" },
          {
            name: "Unit Converter",
            path: "/tools/aviation-unit-converter",
          },
        ]}
      />

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Aviation Unit Converter
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Convert aviation fuel volumes and weights, route distances, ground speeds, and altitudes in one browser-only utility.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <AviationUnitConverterClient />

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
            Frequently Asked Questions: Aviation Units
          </h2>
          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-[#F8FAFC]">
            {UNIT_FAQS.map((faq) => (
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

