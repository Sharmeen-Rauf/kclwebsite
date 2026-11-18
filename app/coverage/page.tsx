import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { ThreeTierCoverageMap } from "@/components/sections/ThreeTierCoverageMap";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { KCL_FACTS } from "@/content/facts";
import { COUNTRY_PERMIT_GUIDES } from "@/content/permits";

export const metadata = buildMetadata({
  title: "Coverage and Access | Where We File and Coordinate | KCL",
  description: KCL_FACTS.coverage.statement,
  path: "/coverage",
  omitTitleSuffix: true,
});

const EIGHT_GUIDE_COUNTRIES = [
  { country: "Pakistan", tier: "Filed by KCL", slug: "pakistan" },
  { country: "Bahrain", tier: "Direct access", slug: null },
  { country: "Qatar", tier: "Direct access", slug: null },
  { country: "Kenya", tier: "Direct access", slug: null },
  { country: "Ghana", tier: "Direct access", slug: null },
  { country: "Mauritius", tier: "Direct access", slug: null },
  { country: "Togo", tier: "Direct access", slug: null },
  { country: "Central African Republic", tier: "Direct access", slug: null },
];

export default function CoveragePage() {
  const pkGuide = COUNTRY_PERMIT_GUIDES.find((g) => g.slug === "pakistan");

  return (
    <>
      <Breadcrumbs items={[{ name: "Coverage and Access", path: "/coverage" }]} />

      <InnerHero
        kicker="Regional Coverage"
        title="Where We File and Where We Coordinate"
        subtitle={KCL_FACTS.coverage.shortStatement}
        description={KCL_FACTS.coverage.statement}
        imageSrc="/img/services/01-permits.webp"
        imageAlt="International airway navigation display"
        buttons={[
          { label: "Request Flight Support", href: "/request-flight-support", variant: "primary" },
          { label: "Open Permit Directory", href: "/permit-directory", variant: "outline" },
        ]}
      />

      <section className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ThreeTierCoverageMap />

          {/* Plain-English Tier Meanings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-6 space-y-2">
              <span className="inline-block text-xs font-bold bg-[#F4C400] text-[#0B2545] px-2.5 py-0.5 rounded-[2px]">
                Filed by KCL
              </span>
              <h2 className="text-xl font-bold text-[#0B2545]">Pakistan Filing</h2>
              <p className="text-base text-[#16202B] leading-relaxed">
                We prepare, file and follow up directly with the Pakistan Civil Aviation Authority.
              </p>
            </div>
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-6 space-y-2">
              <span className="inline-block text-xs font-bold bg-[#133661] text-white px-2.5 py-0.5 rounded-[2px]">
                Direct access
              </span>
              <h2 className="text-xl font-bold text-[#0B2545]">7 Direct-Access Countries</h2>
              <p className="text-base text-[#16202B] leading-relaxed">
                We coordinate and follow up directly with the authority contact in Bahrain, Qatar, Kenya, Central African Republic, Togo, Ghana, and Mauritius.
              </p>
            </div>
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-6 space-y-2">
              <span className="inline-block text-xs font-bold bg-[#475569] text-white px-2.5 py-0.5 rounded-[2px]">
                Partner-supported
              </span>
              <h2 className="text-xl font-bold text-[#0B2545]">Asia, Middle East &amp; Africa</h2>
              <p className="text-base text-[#16202B] leading-relaxed">
                Across the rest of Asia, the Middle East, and Africa we work through regional partners.
              </p>
            </div>
          </div>

          {/* 8 Guide Countries Table */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#0B2545]">
              Approved Country Guides
            </h2>
            <div className="overflow-x-auto border border-[#CBD5E1] rounded-[6px]">
              <table className="w-full text-left border-collapse text-base">
                <thead className="bg-[#0B2545] text-white">
                  <tr>
                    <th className="py-3.5 px-4 font-bold">Country</th>
                    <th className="py-3.5 px-4 font-bold">Coverage Tier</th>
                    <th className="py-3.5 px-4 font-bold">Guide Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#CBD5E1] bg-white">
                  {EIGHT_GUIDE_COUNTRIES.map((row) => (
                    <tr key={row.country} className="hover:bg-[#F8FAFC]">
                      <td className="py-3.5 px-4 font-semibold text-[#0B2545]">
                        {row.country}
                      </td>
                      <td className="py-3.5 px-4 text-[#16202B]">{row.tier}</td>
                      <td className="py-3.5 px-4">
                        {row.slug ? (
                          <Link
                            href={`/permit-directory/${row.slug}`}
                            className="font-semibold text-[#0B2545] underline underline-offset-4"
                          >
                            Live guide{pkGuide?.lastVerified ? ` (Last verified: ${pkGuide.lastVerified})` : ""} →
                          </Link>
                        ) : (
                          <span className="text-[#5C6B7A]">Guide in preparation</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Service Boundary & Regulatory Line */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-6 space-y-2">
            <h2 className="text-xl font-bold text-[#0B2545]">Service Boundary</h2>
            <p className="text-base text-[#16202B] leading-relaxed">
              Pakistan receives full filing and follow-up; direct-access countries receive direct authority coordination and follow-up; all other routes receive advice and partner introduction only.
            </p>
            <p className="text-base font-semibold text-[#0B2545]">
              {KCL_FACTS.fees.regulatoryDisclaimer}
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
