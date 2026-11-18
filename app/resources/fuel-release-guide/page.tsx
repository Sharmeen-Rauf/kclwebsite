import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FuelGradeConverter } from "@/components/sections/tools/FuelGradeConverter";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = {
  ...buildMetadata({
    title: "Fuel Uplift Tools & Checklist | KCL",
    description:
      "Jet A-1 unit converter and pre-uplift dispatch checklist. Full fuel release guide pending Operations review.",
    path: "/resources/fuel-release-guide",
  }),
  robots: { index: false, follow: false },
};

export default function FuelReleaseGuidePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Resources", path: "/aviation-resources" },
          { name: "Fuel Uplift Tools", path: "/resources/fuel-release-guide" },
        ]}
      />

      <section className="py-10 bg-[#0B2545] text-white border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <h1 className="text-3xl font-bold text-white">
            Jet A-1 Uplift Checklist &amp; Unit Converter
          </h1>
          <p className="text-base text-slate-200 max-w-3xl">
            Jet A-1, into-plane, fuel release and prepayment are confirmed per airport. Credit is subject to approval. Lead time varies by airport. Request a quote.
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-[#0B2545]">Uplift Request Checklist</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-[#16202B]">
              <li>• Airport ICAO &amp; planned UTC arrival/departure</li>
              <li>• Aircraft type &amp; registration</li>
              <li>• Estimated Jet A-1 uplift quantity (USG / Litres / kg)</li>
              <li>• Payment preference (prepayment / fuel release / credit subject to approval)</li>
            </ul>
            <Link
              href="/services/aviation-fuel"
              className="inline-flex bg-[#F4C400] hover:bg-[#DFB200] text-[#0B2545] font-bold text-base px-5 py-2.5 rounded-[4px]"
            >
              Request a Fuel Quote →
            </Link>
          </div>
        </div>
      </section>

      <FuelGradeConverter />
      <CtaBanner />
    </>
  );
}
