import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RegistrationPrefixSearchClient } from "@/components/sections/RegistrationPrefixSearchClient";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Aircraft Registration Prefixes by Country",
  description:
    "Searchable directory of international aircraft registration prefixes (AP- Pakistan, VH- Australia, V8- Brunei, 3B- Mauritius, A6- UAE) and ICAO codes.",
  path: "/tools/aircraft-registration-prefixes",
});

const PREFIX_FAQS = [
  {
    question: "What is an aircraft nationality registration prefix?",
    answer:
      "Under ICAO Annex 7, every civil aircraft carries a nationality mark (prefix) assigned by its state of registry followed by a registration code, such as AP- for Pakistan or N for the United States.",
  },
  {
    question: "Why is the registration prefix needed on a permit request?",
    answer:
      "Civil aviation authorities verify the aircraft's state of registry against its Certificate of Registration, Certificate of Airworthiness, and Air Operator Certificate.",
  },
  {
    question: "Is the aircraft prefix the same as the ICAO airport code prefix?",
    answer:
      "Not always. For example, Pakistan aircraft use AP- while Pakistan airports use OP- (such as OPKC for Karachi), and United States aircraft use N while airports start with K.",
  },
];

export default function AircraftRegistrationPrefixesPage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(PREFIX_FAQS)} />

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
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              International Aircraft Registration Prefixes
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Quickly verify aircraft nationality prefixes and corresponding ICAO aerodrome location indicators when preparing overflight and landing permit applications. Pakistan-registered civil aircraft carry the AP- prefix.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <RegistrationPrefixSearchClient />

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
            Frequently Asked Questions: Aircraft Registration Prefixes
          </h2>
          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-[#F8FAFC]">
            {PREFIX_FAQS.map((faq) => (
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
