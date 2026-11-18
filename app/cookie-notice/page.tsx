import React from "react";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata = {
  ...buildMetadata({
    title: "Cookie Notice (Draft)",
    description:
      "Draft Cookie Notice for Kashmir Corporation (Private) Limited.",
    path: "/cookie-notice",
  }),
  robots: { index: false, follow: false },
};

export default function CookieNoticePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Cookie Notice", path: "/cookie-notice" }]} />

      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-10 space-y-6">
            <header className="border-b border-[#CBD5E1] pb-4">
              <span className="text-sm text-[#5C6B7A] block">
                Draft — Pending Legal Approval
              </span>
              <h1 className="text-3xl font-bold text-[#0B2545] mt-1">
                Cookie Notice
              </h1>
              <p className="text-sm text-[#5C6B7A] mt-2">
                Approvals are issued by the relevant authorities; KCL coordinates the request.
              </p>
            </header>

            <p className="text-base text-[#16202B] leading-relaxed">
              This draft Cookie Notice explains how {SITE_CONFIG.name} ({SITE_CONFIG.brandName}) uses essential browser storage and analytics cookies once approved by Legal and Marketing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
