import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  KCL_SIX_CORE_SERVICES,
  PAKISTAN_SPECIALIST_SERVICES,
} from "@/content/services";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "International Aviation Support Services | KCL",
  description:
    "Explore KCL's six core aviation services: flight permission facilitation, ground handling, catering services, fuel supply, crew accommodation and 24/7 support.",
  path: "/services",
});

export default function ServicesOverviewPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 px-3 py-1 inline-block">
              KCL INTERNATIONAL FLIGHT SUPPORT · CORE SERVICE DIRECTORY
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              International Aviation Support Services
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-100">
              Connected Support for Complex Flight Operations.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A flight rarely depends on one service alone. Flight permission
              facilitation, ground handling, catering services, fuel supply,
              crew accommodation arrangements, and 24/7 operational support must
              fit the same itinerary. KCL brings these requirements into a
              coordinated conversation so operators can plan with greater
              clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Six Core Services Grid (Primary Reference: kclpk.org/Services.html) */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              OPERATIONAL SERVICES · PRIMARY SERVICE DIRECTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              KCL Aviation Support Services
            </h2>
            <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
              Based on KCL&apos;s established service portfolio, we assist
              commercial airlines, charter operators, cargo carriers, and
              private aviation teams across core operational services:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KCL_SIX_CORE_SERVICES.map((pillar) => (
              <div
                key={pillar.code}
                className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="font-mono text-xs font-bold text-[#0B2545] bg-white border border-[#CBD5E1] px-2.5 py-0.5 inline-block">
                    {pillar.code}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2545]">
                    <Link
                      href={pillar.primaryHref}
                      className="hover:underline underline-offset-4"
                    >
                      {pillar.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#16202B] leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <Link
                    href={pillar.primaryHref}
                    className="block text-sm font-bold text-[#0B2545] hover:text-[#133661]"
                  >
                    {pillar.primaryLabel} →
                  </Link>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#5C6B7A]">
                    {pillar.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="hover:text-[#0B2545]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scheduled vs Non-Scheduled Filing & Scope Boundary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="kcl-card lg:col-span-4 bg-[#F6F8FB] border border-[#CBD5E1] p-6 space-y-2.5">
              <span className="font-mono text-xs text-[#5C6B7A] uppercase block">
                SCHEDULED OPERATIONS
              </span>
              <h3 className="text-lg font-bold text-[#0B2545]">
                Scheduled Flight Filing
              </h3>
              <p className="text-sm text-[#16202B] leading-relaxed">
                Seasonal and recurring airline flight permission applications,
                schedule information, and fleet amendments.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-[#0B2545]">
                <Link
                  href="/services/scheduled-flights"
                  className="kcl-link"
                >
                  Scheduled Flights →
                </Link>
                <Link
                  href="/schedule-filing"
                  className="kcl-link"
                >
                  Pakistan Schedule Filing →
                </Link>
              </div>
            </div>

            <div className="kcl-card lg:col-span-4 bg-[#F6F8FB] border border-[#CBD5E1] p-6 space-y-2.5">
              <span className="font-mono text-xs text-[#5C6B7A] uppercase block">
                NON-SCHEDULED &amp; CHARTER
              </span>
              <h3 className="text-lg font-bold text-[#0B2545]">
                Non-Scheduled &amp; Charter Filing
              </h3>
              <p className="text-sm text-[#16202B] leading-relaxed">
                Ad-hoc passenger and cargo charters, business aviation, ferry
                flights, and technical refueling stops.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-[#0B2545]">
                <Link
                  href="/services/non-scheduled-flights"
                  className="kcl-link"
                >
                  Charter &amp; Non-Scheduled →
                </Link>
                <Link
                  href="/non-schedule-filing"
                  className="kcl-link"
                >
                  Pakistan Non-Schedule Filing →
                </Link>
              </div>
            </div>

            <div className="kcl-card lg:col-span-4 bg-white border border-[#CBD5E1] p-6 space-y-2">
              <span className="font-mono text-xs font-bold text-[#0B2545] uppercase block">
                OPERATIONAL SCOPE NOTE
              </span>
              <p className="text-xs text-[#16202B] leading-relaxed">
                KCL specializes exclusively in B2B aircraft operations and
                flight support—permissions, ground handling, catering, fuel,
                crew accommodation, and 24/7 operational coordination. KCL does
                not provide passenger ticket sales, GDS distribution, travel
                agency services, or commercial GSA representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Specialization Section */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Dedicated Pakistan Specialization Section */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#CBD5E1] pb-4">
              <div>
                <span className="font-mono text-xs uppercase text-white bg-[#0B2545] px-2.5 py-1 font-semibold inline-block mb-2">
                  REGIONAL SPECIALIZATION · PAKISTAN (OPKR &amp; OPLR FIRs)
                </span>
                <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                  Pakistan Flight Permission Specialization Pages
                </h2>
              </div>
              <Link
                href="/pakistan/flight-permissions"
                className="kcl-btn-primary min-h-[44px] px-5 py-2.5 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Pakistan Flight Permissions Hub →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PAKISTAN_SPECIALIST_SERVICES.map((pkService) => (
                <div
                  key={pkService.slug}
                  className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-5 space-y-2.5"
                >
                  <span className="font-mono text-xs text-[#5C6B7A] block">
                    {pkService.code}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2545]">
                    <Link
                      href={`/services/${pkService.slug}`}
                    >
                      {pkService.shortTitle}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#16202B] leading-relaxed">
                    {pkService.introParagraph}
                  </p>
                  <Link
                    href={`/services/${pkService.slug}`}
                    className="kcl-link inline-block pt-1 text-sm font-bold text-[#0B2545]"
                  >
                    Read Pakistan Guide →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Bring Your Requirements into One Conversation."
        subheading="Share the operator, aircraft, route, UTC timings and services needed. Our team can identify the relevant coordination discussion and outstanding information."
        primaryLabel="Start a Flight Support Inquiry"
        primaryHref="/request-flight-support"
      />
    </>
  );
}
