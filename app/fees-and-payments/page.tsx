import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { KCL_FACTS } from "@/content/facts";

export const metadata = buildMetadata({
  title: "How Permit Fees Work | Fees and Payments | KCL",
  description:
    "How authority charges (pass-through disbursements) and KCL service charges work for flight permits and fuel quotes.",
  path: "/fees-and-payments",
  omitTitleSuffix: true,
});

export default function FeesAndPaymentsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Fees and Payments", path: "/fees-and-payments" }]} />

      <InnerHero
        kicker="Commercial Transparency"
        title="How Permit Fees Work"
        subtitle="Clear Separation Between Authority Disbursements and Service Quotes."
        description="Every permit quote separates sovereign civil aviation authority charges from KCL coordination fees."
        imageSrc="/img/services/07-dispatch.webp"
        imageAlt="Flight dispatch planning desk"
        buttons={[
          { label: "Request a Quote", href: "/request-flight-support", variant: "primary" },
        ]}
      />

      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-3">
              <span className="text-sm font-bold text-[#B88200] block">Pass-Through Disbursement</span>
              <h2 className="text-2xl font-bold text-[#0B2545]">Authority charges</h2>
              <p className="text-base text-[#16202B] leading-relaxed">
                {KCL_FACTS.fees.authorityCharges.value}
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-3">
              <span className="text-sm font-bold text-[#B88200] block">Coordination Fee</span>
              <h2 className="text-2xl font-bold text-[#0B2545]">KCL service charge</h2>
              <p className="text-base text-[#16202B] leading-relaxed">
                {KCL_FACTS.fees.serviceCharge.value}
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-[#0B2545]">Fuel Note</h2>
            <p className="text-base text-[#16202B] leading-relaxed">
              {KCL_FACTS.fuel.summary}
            </p>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-[#0B2545]">What a quote includes</h2>
              <ul className="space-y-2 text-base text-[#16202B]">
                <li>• Planned route, origin/destination, and FIR waypoints</li>
                <li>• Aircraft type, registration, and MTOW</li>
                <li>• Planned flight dates and UTC schedule</li>
              </ul>
            </div>
            <Link
              href="/request-flight-support"
              className="bg-[#F4C400] hover:bg-[#DFB200] text-[#0B2545] font-bold text-base px-6 py-3 rounded-[4px] inline-flex items-center justify-center shrink-0 transition-colors"
            >
              Request a Quote →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
