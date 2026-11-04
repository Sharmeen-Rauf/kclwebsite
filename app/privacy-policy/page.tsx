import React from "react";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Kashmir Corporation Pvt Ltd (KCL) regarding airline dispatch data, flight permit applications and operational communications.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
      />

      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-10 space-y-6">
            <header className="border-b border-[#CBD5E1] pb-4">
              <span className="font-mono text-xs text-[#5C6B7A] uppercase block">
                LEGAL &amp; DATA PROTECTION
              </span>
              <h1 className="text-3xl font-bold text-[#0B2545] mt-1">
                Privacy Policy
              </h1>
            </header>

            <p className="text-sm sm:text-base text-[#16202B]">
              {SITE_CONFIG.name} (&ldquo;KCL&rdquo;) respects the
              confidentiality of airline schedules, aircraft certificates, crew
              manifests, and dispatcher contact information submitted to our
              operations desk.
            </p>

            <h2 className="text-xl font-bold text-[#0B2545]">
              1. Information We Collect
            </h2>
            <p className="text-sm sm:text-base text-[#16202B]">
              When you submit a flight permit request or contact inquiry, we
              collect operator name, contact person details, work email, phone
              or WhatsApp number, aircraft registration and type, route strings,
              and operational notes necessary to process your request.
            </p>

            <h2 className="text-xl font-bold text-[#0B2545]">
              2. How We Use Operational Data
            </h2>
            <p className="text-sm sm:text-base text-[#16202B]">
              Submitted information is used solely to file overflight and
              landing permit applications with civil aviation authorities,
              coordinate airport ground handling, fuel supply, catering, and
              crew accommodation, and communicate status updates to your
              designated operations control center.
            </p>

            <h2 className="text-xl font-bold text-[#0B2545]">
              3. Data Sharing &amp; Regulatory Submissions
            </h2>
            <p className="text-sm sm:text-base text-[#16202B]">
              We share flight and aircraft particulars only with relevant civil
              aviation authorities, airport operators, and vetted airside
              service providers required to fulfill your requested services. We
              never sell or rent operator or dispatcher contact data.
            </p>

            <h2 className="text-xl font-bold text-[#0B2545]">
              4. Contact for Privacy Inquiries
            </h2>
            <p className="text-sm sm:text-base text-[#16202B]">
              For questions regarding operational data retention or privacy,
              contact {SITE_CONFIG.name} at{" "}
              <span className="font-mono">{SITE_CONFIG.opsEmailPlaceholder}</span>{" "}
              or at our registered office:{" "}
              <span className="font-mono">{SITE_CONFIG.addressPlaceholder}</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

