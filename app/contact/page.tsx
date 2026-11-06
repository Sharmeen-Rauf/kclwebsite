import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export const metadata = buildMetadata({
  title: "Contact KCL International Flight Support",
  description:
    "Contact KCL for flight permissions, ground handling, fuel, planning, airport slot and crew logistics inquiries.",
  path: "/contact",
  omitTitleSuffix: true,
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 px-3 py-1 inline-block">
              FLIGHT OPERATIONS &amp; COMMERCIAL INQUIRIES
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Contact KCL International Flight Support
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-100">
              Start with the Flight. We&apos;ll Discuss the Support.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Tell us what you are planning and which services you need. A clear
              itinerary and operational contact help us understand the scope of
              your inquiry and the appropriate next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Inquiry guidance blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 space-y-2.5">
              <span className="font-mono text-xs font-bold text-[#0B2545] bg-[#F6F8FB] border border-[#CBD5E1] px-2.5 py-0.5 inline-block">
                01 · OPERATIONS
              </span>
              <h2 className="no-accent-bar text-lg font-bold text-[#0B2545]">
                Flight Operations Inquiries
              </h2>
              <p className="text-sm text-[#16202B] leading-relaxed">
                For permits and time-sensitive flight coordination, use the
                verified operational contact information approved by KCL
                management.
              </p>
            </div>

            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 space-y-2.5">
              <span className="font-mono text-xs font-bold text-[#0B2545] bg-[#F6F8FB] border border-[#CBD5E1] px-2.5 py-0.5 inline-block">
                02 · PARTNERSHIPS
              </span>
              <h2 className="no-accent-bar text-lg font-bold text-[#0B2545]">
                Business Partnerships
              </h2>
              <p className="text-sm text-[#16202B] leading-relaxed">
                For aviation service partnerships, supplier coordination or
                commercial inquiries, share your company, operating regions and
                proposed scope.
              </p>
            </div>

            <div className="kcl-card bg-white border border-[#CBD5E1] p-6 space-y-2.5">
              <span className="font-mono text-xs font-bold text-[#0B2545] bg-[#F6F8FB] border border-[#CBD5E1] px-2.5 py-0.5 inline-block">
                03 · PREPARATION
              </span>
              <h2 className="no-accent-bar text-lg font-bold text-[#0B2545]">
                Details to Include
              </h2>
              <p className="text-sm text-[#16202B] leading-relaxed">
                Operator name, route, aircraft registration/type, intended UTC
                times, flight purpose and requested services help make the
                inquiry more actionable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 space-y-6">
              <div className="kcl-card bg-white border border-[#CBD5E1] p-6 space-y-4">
                <div className="border-b border-[#CBD5E1] pb-3">
                  <Image
                    src="/img/kclf final logo.png"
                    alt="KCL Flight Support — Kashmir Corporation (Pvt.) Ltd. Official Logo"
                    width={150}
                    height={61}
                    className="h-10 w-auto object-contain mb-3"
                  />
                  <span className="font-mono text-xs uppercase text-white bg-[#0B2545] px-2.5 py-1 inline-block font-semibold">
                    APPROVAL REQUIRED BEFORE LIVE PUBLICATION
                  </span>
                </div>
                <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                  Contact Information — Verification Note
                </h2>
                <p className="text-xs sm:text-sm text-[#5C6B7A] leading-relaxed">
                  The existing KCL website and LinkedIn show different
                  addresses. Legal address, operations email, phone, WhatsApp,
                  office hours and location must be confirmed by management
                  before replacing the placeholders below.
                </p>
                <dl className="space-y-3 text-sm pt-2">
                  <div className="border-b border-[#CBD5E1] pb-2">
                    <dt className="font-mono text-xs text-[#5C6B7A] uppercase">
                      Verified Address Placeholder
                    </dt>
                    <dd className="font-mono font-bold text-[#0B2545] mt-0.5">
                      {SITE_CONFIG.addressPlaceholder}
                    </dd>
                  </div>
                  <div className="border-b border-[#CBD5E1] pb-2">
                    <dt className="font-mono text-xs text-[#5C6B7A] uppercase">
                      Operations Email Placeholder
                    </dt>
                    <dd className="font-mono font-bold text-[#0B2545] mt-0.5">
                      {SITE_CONFIG.opsEmailPlaceholder}
                    </dd>
                  </div>
                  <div className="border-b border-[#CBD5E1] pb-2">
                    <dt className="font-mono text-xs text-[#5C6B7A] uppercase">
                      Telephone Placeholder
                    </dt>
                    <dd className="font-mono font-bold text-[#0B2545] mt-0.5">
                      {SITE_CONFIG.opsPhonePlaceholder}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-[#5C6B7A] uppercase">
                      Placeholder Summary String
                    </dt>
                    <dd className="font-mono text-xs text-[#5C6B7A] mt-0.5">
                      {SITE_CONFIG.addressPlaceholder} |{" "}
                      {SITE_CONFIG.opsEmailPlaceholder} |{" "}
                      {SITE_CONFIG.opsPhonePlaceholder}
                    </dd>
                  </div>
                </dl>

                <div className="pt-3 border-t border-[#CBD5E1]">
                  <Link
                    href="/request-flight-support"
                    className="kcl-btn-primary w-full min-h-[44px] px-4 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
                  >
                    Let&apos;s Discuss Your Next Operation →
                  </Link>
                </div>
              </div>

              <div className="kcl-card bg-white border border-[#CBD5E1] p-6">
                <NewsletterForm />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
