import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { AviationGlossaryClient } from "@/components/sections/AviationGlossaryClient";
import { AVIATION_GLOSSARY_TERMS } from "@/content/glossary";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Aviation Glossary and Checklists | KCL",
  description:
    "Plain-English aviation glossary and downloadable Flight Inquiry Checklist for airline dispatchers, charter coordinators, and flight crews.",
  path: "/aviation-resources",
});

export default function AviationResourcesPage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://kclwebsite.vercel.app";

  const definedTermSetLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "KCL Aviation Glossary",
    url: `${baseUrl}/aviation-resources`,
    hasDefinedTerm: AVIATION_GLOSSARY_TERMS.map((item) => ({
      "@type": "DefinedTerm",
      name: item.term,
      description: item.definition,
    })),
  };

  return (
    <>
      <JsonLd data={definedTermSetLd} />

      <Breadcrumbs
        items={[
          { name: "Glossary and Checklists", path: "/aviation-resources" },
        ]}
      />

      <InnerHero
        title="Aviation Glossary and Checklists"
        subtitle="Plain-English terms and a checklist you can send to your team."
        description="Look up standard airspace, permit, and dispatch abbreviations, or copy and download our Flight Inquiry Checklist before submitting your route."
        imageSrc="/img/services/01-permits.webp"
        imageAlt="Flight operations documentation and international aviation checklist reference"
        buttons={[
          {
            label: "Download Checklist PDF",
            href: "/files/kcl-permit-request-checklist.pdf",
            variant: "primary",
          },
          {
            label: "Request Flight Support",
            href: "/request-flight-support",
            variant: "outline",
          },
        ]}
        snapshotRows={[
          {
            label: "Glossary",
            value: `${AVIATION_GLOSSARY_TERMS.length} aviation terms`,
          },
          { label: "Checklist", value: "On-page, copy, email & PDF" },
          { label: "Operations desk", value: "24/7" },
        ]}
      />

      <section className="py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <AviationGlossaryClient />

          {/* Clean Operational Quick Links */}
          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 flex flex-wrap items-center justify-between gap-4 text-base">
            <span className="font-semibold text-[#0B2545]">
              Explore related filing guides:
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/schedule-filing"
                className="font-semibold text-[#0B2545] hover:underline underline-offset-2"
              >
                Scheduled Flight Filing →
              </Link>
              <Link
                href="/non-schedule-filing"
                className="font-semibold text-[#0B2545] hover:underline underline-offset-2"
              >
                Charter &amp; Non-Schedule Filing →
              </Link>
              <Link
                href="/permit-directory/pakistan"
                className="font-semibold text-[#0B2545] hover:underline underline-offset-2"
              >
                Pakistan Permit Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ClientStrip compact hideHeading />
        </div>
      </section>

      <CtaBanner
        heading="Ready to Coordinate Your Next Flight?"
        subheading="Send your route, UTC timings, and aircraft details to our 24/7 operations desk."
        primaryLabel="Request Flight Support"
        primaryHref="/request-flight-support"
      />
    </>
  );
}
