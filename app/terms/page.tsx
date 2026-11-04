import React from "react";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service governing the use of the Kashmir Corporation Pvt Ltd (KCL) website, dispatch tools and online permit request forms.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of Service", path: "/terms" }]} />

      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-10 space-y-6">
            <header className="border-b border-[#CBD5E1] pb-4">
              <span className="font-mono text-xs text-[#5C6B7A] uppercase block">
                OPERATIONAL &amp; WEBSITE TERMS
              </span>
              <h1 className="text-3xl font-bold text-[#0B2545] mt-1">
                Terms of Service
              </h1>
            </header>

            <p className="text-sm sm:text-base text-[#16202B]">
              These Terms of Service govern your use of the website and dispatch
              reference tools provided by {SITE_CONFIG.name} (&ldquo;KCL&rdquo;).
            </p>

            <h2 className="text-xl font-bold text-[#0B2545]">
              1. Permit Request Submissions
            </h2>
            <p className="text-sm sm:text-base text-[#16202B]">
              Submitting an online permit request initiates an operational
              review by KCL. A flight permit is only valid for operational use
              once KCL transmits the official authority permit confirmation
              number in writing to the operator.
            </p>

            <h2 className="text-xl font-bold text-[#0B2545]">
              2. Accuracy of Operator Documentation
            </h2>
            <p className="text-sm sm:text-base text-[#16202B]">
              The aircraft operator is responsible for ensuring that all
              submitted callsigns, aircraft registrations, MTOW figures, route
              waypoints, and airworthiness/insurance certificates are current
              and accurate.
            </p>

            <h2 className="text-xl font-bold text-[#0B2545]">
              3. Reference Tools &amp; Permit Directory
            </h2>
            <p className="text-sm sm:text-base text-[#16202B]">
              The Permit Checker, country guides, and aviation tools on this
              site are provided for dispatch planning convenience. Operators
              must always verify active NOTAMs, AIP supplements, and specific
              authority lead times with our 24/7 operations desk.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

