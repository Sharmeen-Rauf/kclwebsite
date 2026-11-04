import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Aviation Customer Support & Operations Contact | KCL",
  description:
    "Contact KCL for existing flight support inquiries, operational coordination questions and aviation service assistance.",
  path: "/customer-support",
});

export default function CustomerSupportPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Customer Support", path: "/customer-support" }]}
      />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 px-3 py-1 inline-block">
              ACTIVE INQUIRIES &amp; COORDINATION UPDATES
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Aviation Customer Support &amp; Operations Contact
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-100">
              Clear Answers for Active Aviation Inquiries.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Use this page to reach the appropriate KCL team regarding an
              existing request, requested service or operational question.
              Include only the information needed to identify the matter and
              avoid sharing sensitive documents through unsecured channels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 space-y-3">
              <span className="font-mono text-xs font-bold bg-[#0B2545] text-white px-2.5 py-1 inline-block">
                01 · EXISTING REQUESTS
              </span>
              <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                Existing Requests
              </h2>
              <p className="text-sm text-[#16202B] leading-relaxed">
                Provide an agreed KCL inquiry reference when available, operator
                details and a short summary of the question.
              </p>
            </div>

            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 space-y-3">
              <span className="font-mono text-xs font-bold bg-[#0B2545] text-white px-2.5 py-1 inline-block">
                02 · CHANGES TO ITINERARY
              </span>
              <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                Changes to Itinerary
              </h2>
              <p className="text-sm text-[#16202B] leading-relaxed">
                Notify the operations team of important schedule, aircraft,
                route or service changes. Revised arrangements may require
                further coordination.
              </p>
            </div>

            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 space-y-3">
              <span className="font-mono text-xs font-bold bg-[#0B2545] text-white px-2.5 py-1 inline-block">
                03 · SERVICE ISSUES
              </span>
              <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                Service Issues
              </h2>
              <p className="text-sm text-[#16202B] leading-relaxed">
                Describe the affected service, airport, scheduled time and
                relevant contact so the matter can be routed appropriately.
              </p>
            </div>
          </div>

          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
              SUPPORT CHANNEL &amp; VERIFICATION POLICY
            </span>
            <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
              Support Channel Information
            </h2>
            <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
              Verified operations contact details and realistic response
              expectations are published once confirmed by management. This page
              does not present a live support portal until a real backend is
              connected.
            </p>

            <div className="overflow-x-auto border border-[#CBD5E1]">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0B2545] text-white font-mono text-xs uppercase">
                    <th className="py-3 px-4 border-r border-slate-700">
                      Inquiry Type
                    </th>
                    <th className="py-3 px-4 border-r border-slate-700">
                      Details to Provide
                    </th>
                    <th className="py-3 px-4">Contact Placeholder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#CBD5E1]">
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-[#0B2545] border-r border-[#CBD5E1]">
                      Existing Flight Support or Permit Inquiry
                    </td>
                    <td className="py-3.5 px-4 text-[#16202B] border-r border-[#CBD5E1]">
                      Agreed KCL reference, operator name, aircraft registration,
                      and summary of the update or question
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-[#5C6B7A]">
                      {SITE_CONFIG.opsEmailPlaceholder} |{" "}
                      {SITE_CONFIG.opsPhonePlaceholder}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-[#0B2545] border-r border-[#CBD5E1]">
                      Schedule, Route, or Aircraft Amendments
                    </td>
                    <td className="py-3.5 px-4 text-[#16202B] border-r border-[#CBD5E1]">
                      Revised UTC timings, updated route or tail registration,
                      and affected airport services
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-[#5C6B7A]">
                      {SITE_CONFIG.opsEmailPlaceholder}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-bold text-[#0B2545] border-r border-[#CBD5E1]">
                      Commercial &amp; Account Questions
                    </td>
                    <td className="py-3.5 px-4 text-[#16202B] border-r border-[#CBD5E1]">
                      Company name, relevant itinerary reference, and account
                      inquiry details
                    </td>
                    <td className="py-3.5 px-4 font-mono text-xs text-[#5C6B7A]">
                      {SITE_CONFIG.commercialEmailPlaceholder}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="kcl-btn-primary min-h-[44px] px-5 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Contact Customer Support
              </Link>
              <Link
                href="/request-flight-support"
                className="kcl-btn-outline-navy min-h-[44px] px-5 py-2.5 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Start a New Flight Support Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Need to Clarify an Existing Request?"
        subheading="Include your agreed KCL inquiry reference, operator details, and a concise summary of your operational question."
        primaryLabel="Contact Customer Support"
        primaryHref="/contact"
      />
    </>
  );
}
