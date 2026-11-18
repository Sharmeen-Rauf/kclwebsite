import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { COUNTRY_PERMIT_GUIDES } from "@/content/permits";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { PermitChecker } from "@/components/sections/PermitChecker";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";
import { KCL_FACTS } from "@/content/facts";

export const metadata = buildMetadata({
  title: "Flight Permit Directory & Airspace Guide | KCL",
  description:
    "Overflight and landing permit directory for Pakistan (Filed by KCL) and 7 direct-access countries: Bahrain, Qatar, Kenya, Ghana, Mauritius, Togo, and Central African Republic.",
  path: "/permit-directory",
  omitTitleSuffix: true,
});

interface DirectoryCountryTile {
  name: string;
  iso: string;
  tierLabel: string;
  tierBadgeClass: string;
  href: string | null;
}

const APPROVED_DIRECTORY_TILES: DirectoryCountryTile[] = [
  {
    name: "Pakistan",
    iso: "PK",
    tierLabel: "Filed by KCL",
    tierBadgeClass: "bg-[#F4C400] text-[#0B2545]",
    href: "/permit-directory/pakistan",
  },
  {
    name: "Bahrain",
    iso: "BH",
    tierLabel: "Direct access",
    tierBadgeClass: "bg-[#133661] text-white",
    href: null,
  },
  {
    name: "Qatar",
    iso: "QA",
    tierLabel: "Direct access",
    tierBadgeClass: "bg-[#133661] text-white",
    href: null,
  },
  {
    name: "Kenya",
    iso: "KE",
    tierLabel: "Direct access",
    tierBadgeClass: "bg-[#133661] text-white",
    href: null,
  },
  {
    name: "Ghana",
    iso: "GH",
    tierLabel: "Direct access",
    tierBadgeClass: "bg-[#133661] text-white",
    href: null,
  },
  {
    name: "Mauritius",
    iso: "MU",
    tierLabel: "Direct access",
    tierBadgeClass: "bg-[#133661] text-white",
    href: null,
  },
  {
    name: "Togo",
    iso: "TG",
    tierLabel: "Direct access",
    tierBadgeClass: "bg-[#133661] text-white",
    href: null,
  },
  {
    name: "Central African Republic",
    iso: "CF",
    tierLabel: "Direct access",
    tierBadgeClass: "bg-[#133661] text-white",
    href: null,
  },
];

export default function PermitDirectoryIndexPage() {
  const livePakistanGuide = COUNTRY_PERMIT_GUIDES[0];

  return (
    <>
      <JsonLd data={buildFaqJsonLd(SERVICE_TOOL_FAQS["permit-directory"])} />
      <Breadcrumbs
        items={[{ name: "Permit Directory", path: "/permit-directory" }]}
      />

      <InnerHero
        kicker="Airspace & aerodrome guides"
        title="Flight Permit Directory & Pre-Filing Requirements"
        subtitle="Pakistan Filing and Direct Authority Coordination in 7 Countries."
        description={KCL_FACTS.coverage.statement}
        imageSrc="/img/services/01-permits.webp"
        imageAlt="Cockpit flight deck waypoint navigation display for permit directory"
      />

      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Eight Approved Guides Grid */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-bold text-[#B88200] block mb-1">
                Approved Permit Guides
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Pakistan &amp; Direct-Access Country Guides
              </h2>
              <p className="text-base text-[#16202B] mt-1">
                All lead times and validity windows are subject to civil aviation authority review.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {APPROVED_DIRECTORY_TILES.map((tile) => (
                <article
                  key={tile.name}
                  className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 flex flex-col justify-between gap-4 shadow-2xs"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-bold text-[#5C6B7A]">
                        {tile.iso}
                      </span>
                      <span
                        className={`text-xs font-bold px-2.5 py-0.5 rounded-[3px] ${tile.tierBadgeClass}`}
                      >
                        {tile.tierLabel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0B2545]">
                      {tile.name}
                    </h3>
                  </div>

                  {tile.href ? (
                    <Link
                      href={tile.href}
                      className="bg-[#0B2545] hover:bg-[#133661] text-white text-sm font-bold px-4 py-2.5 rounded-[4px] inline-flex items-center justify-between transition-colors"
                    >
                      <span>Open Permit Guide</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <div className="bg-[#F8FAFC] border border-[#CBD5E1] text-[#5C6B7A] text-sm font-semibold px-4 py-2.5 rounded-[4px]">
                      Guide in preparation
                    </div>
                  )}
                </article>
              ))}
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-4 flex flex-wrap items-center justify-between gap-3 text-base">
              <p className="text-[#16202B] font-medium">
                Another country? Tell us your route.
              </p>
              <Link
                href="/request-flight-support"
                className="text-sm font-bold text-[#0B2545] hover:underline underline-offset-4"
              >
                Request Flight Support →
              </Link>
            </div>
          </div>

          {/* Live Pakistan Summary Card */}
          {livePakistanGuide && (
            <article className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#CBD5E1]">
                <div>
                  <span className="text-sm text-[#5C6B7A] block">
                    {livePakistanGuide.isoCode} · {livePakistanGuide.caaAuthorityName}
                  </span>
                  <h3 className="text-2xl font-bold text-[#0B2545]">
                    <Link href={`/permit-directory/${livePakistanGuide.slug}`}>
                      {livePakistanGuide.countryName} Overflight &amp; Landing Permit Guide
                    </Link>
                  </h3>
                </div>
                <span className="text-sm bg-[#F4C400] text-[#0B2545] px-3 py-1 font-bold rounded-[3px]">
                  Filed by KCL · {livePakistanGuide.firCodes.join(" · ")}
                </span>
              </div>

              <p className="text-[#16202B] text-base leading-relaxed">
                {livePakistanGuide.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/permit-directory/${livePakistanGuide.slug}`}
                  className="kcl-btn-outline-navy min-h-[44px] px-5 py-2.5 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  Open {livePakistanGuide.countryName} Permit Guide →
                </Link>
                <Link
                  href={`/request-permit?country=${encodeURIComponent(
                    livePakistanGuide.countryName
                  )}`}
                  className="kcl-btn-primary min-h-[44px] px-5 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  Coordinate {livePakistanGuide.countryName} Permit
                </Link>
              </div>
            </article>
          )}

          <PermitChecker />
        </div>
      </section>

      <CtaBanner
        heading="Need Clarification on a Specific Route or Permit Category?"
        subheading="Send your proposed route string, aircraft type, and UTC schedule for a pre-filing check."
        primaryLabel="Request Flight Support"
        primaryHref="/request-permit"
      />
    </>
  );
}
