import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  KCL_SIX_CORE_SERVICES,
  PAKISTAN_SPECIALIST_SERVICES,
} from "@/content/services";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FlightPathDivider } from "@/components/ui/FlightPathDivider";

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

      {/* =========================================================================
          HERO (Homepage Height & Grand Aviation Aesthetic)
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] py-14 sm:py-16 lg:py-20 flex items-center justify-center">
        {/* Full-bleed background photo with calibrated gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero-flight-ops.jpg"
            alt="Commercial airliner and private jet on airport apron with ground handling services"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hero-zoom-photo"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/75 to-[#14406E]/45"
          />

          {/* Ambient Radar Sweep Visual */}
          <div aria-hidden="true" className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full border border-sky-400/10 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute inset-0 rounded-full border border-sky-400/15" />
            <div className="absolute inset-16 sm:inset-24 rounded-full border border-sky-400/15" />
            <div className="absolute inset-32 sm:inset-44 rounded-full border border-sky-400/15" />
            <div className="absolute inset-0 radar-sweep-beam bg-gradient-to-tr from-sky-400/15 via-transparent to-transparent rounded-full" />
          </div>

          {/* Subtle airway route line-art */}
          <svg
            viewBox="0 0 1440 640"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
          >
            <path
              d="M-60 490 C 280 420, 620 260, 1020 220 C 1220 200, 1360 150, 1500 110"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="airway-route-line"
            />
            <path
              d="M-40 240 C 340 290, 740 350, 1140 280 C 1300 250, 1410 210, 1520 180"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            <circle cx="515" cy="340" r="4" fill="#FFFFFF" />
            <circle cx="775" cy="275" r="4" fill="#FFFFFF" />
            <circle cx="885" cy="145" r="4" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Comprehensive Flight Support Network</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white leading-[1.16] tracking-tight mx-auto">
              International Aviation Support Services
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-semibold text-slate-100 max-w-2xl mx-auto">
              Connected Support for Complex Flight Operations.
            </p>

            <p className="text-xs sm:text-sm lg:text-[15.5px] text-slate-200 leading-relaxed max-w-2xl mx-auto">
              A flight rarely depends on one service alone. Flight permission facilitation, ground handling, catering services, fuel supply, crew accommodation arrangements, and 24/7 operational support must fit the same itinerary. KCL brings these requirements into a coordinated conversation so operators can plan with greater clarity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href="/request-flight-support"
                className="relative overflow-hidden bg-[#0B2545] hover:bg-[#133661] text-white border border-white/30 min-h-[44px] px-7 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2 group"
              >
                <span className="animate-btn-shimmer" />
                <span>Request Flight Support</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
              </Link>
              <a
                href="#services-directory"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] backdrop-blur-xs transition-colors"
              >
                Explore Core Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Strip Below Hero */}
      <section
        aria-label="Operational Credentials"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3 sm:py-3.5"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-[13px] font-bold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs hover:border-[#0B2545]/40 transition-colors">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              24/7 operations desk
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs hover:border-[#0B2545]/40 transition-colors">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs hover:border-[#0B2545]/40 transition-colors">
              <span className="h-2 w-2 rounded-full bg-[#133661]" />
              Short-notice requests
            </span>
          </div>
        </div>
      </section>

      {/* Six Core Services Grid */}
      <section id="services-directory" className="scroll-mt-16 py-12 lg:py-14 bg-white border-b border-[#CBD5E1] relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#5C6B7A] font-bold block">
              Operational Services · Primary Service Directory
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
                className="group relative bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-6 flex flex-col justify-between space-y-4 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
              >
                {/* Top subtle shimmer border on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B2545] via-sky-500 to-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#0B2545] bg-white border border-[#CBD5E1] px-2.5 py-0.5 inline-block rounded-[2px]">
                    {pillar.code}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                    <Link
                      href={pillar.primaryHref}
                      className="hover:underline underline-offset-4"
                    >
                      {pillar.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {pillar.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#CBD5E1]/60 space-y-2">
                  <Link
                    href={pillar.primaryHref}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B2545] group-hover:text-[#133661]"
                  >
                    <span>{pillar.primaryLabel}</span>
                    <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
                  </Link>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#5C6B7A]">
                    {pillar.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="hover:text-[#0B2545] transition-colors"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
            <div className="group lg:col-span-4 bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-2.5 shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="text-xs font-bold text-[#5C6B7A] uppercase tracking-wider block">
                Scheduled Operations
              </span>
              <h3 className="text-base font-bold text-[#0B2545]">
                Scheduled Flight Filing
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Seasonal and recurring airline flight permission applications,
                schedule information, and fleet amendments.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-[#0B2545]">
                <Link
                  href="/services/scheduled-flights"
                  className="hover:underline underline-offset-2 inline-flex items-center gap-1"
                >
                  <span>Scheduled Flights</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/schedule-filing"
                  className="hover:underline underline-offset-2 inline-flex items-center gap-1"
                >
                  <span>Pakistan Schedule Filing</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="group lg:col-span-4 bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-2.5 shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="text-xs font-bold text-[#5C6B7A] uppercase tracking-wider block">
                Non-Scheduled &amp; Charter
              </span>
              <h3 className="text-base font-bold text-[#0B2545]">
                Non-Scheduled &amp; Charter Filing
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Ad-hoc passenger and cargo charters, business aviation, ferry
                flights, and technical refueling stops.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-bold text-[#0B2545]">
                <Link
                  href="/services/non-scheduled-flights"
                  className="hover:underline underline-offset-2 inline-flex items-center gap-1"
                >
                  <span>Charter &amp; Non-Scheduled</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/non-schedule-filing"
                  className="hover:underline underline-offset-2 inline-flex items-center gap-1"
                >
                  <span>Pakistan Non-Schedule Filing</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white border border-[#CBD5E1] rounded-[4px] p-5 space-y-2 shadow-2xs">
              <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">
                Operational Scope Note
              </span>
              <p className="text-xs text-[#475569] leading-relaxed">
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

      <FlightPathDivider />

      {/* Regional Specialization Section */}
      <section className="py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Dedicated Pakistan Specialization Section */}
          <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-6 sm:p-8 space-y-6 shadow-2xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#CBD5E1]/60 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-white bg-[#0B2545] px-2.5 py-1 font-semibold inline-block rounded-[2px] mb-2">
                  Regional Specialization · Pakistan (OPKR &amp; OPLR FIRs)
                </span>
                <h2 className="text-2xl font-bold text-[#0B2545]">
                  Pakistan Flight Permission Specialization Pages
                </h2>
              </div>
              <Link
                href="/pakistan/flight-permissions"
                className="bg-[#0B2545] hover:bg-[#133661] text-white min-h-[40px] px-5 py-2 font-bold text-xs sm:text-sm inline-flex items-center justify-center rounded-[2px] transition-colors gap-1.5"
              >
                <span>Pakistan Flight Permissions Hub</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PAKISTAN_SPECIALIST_SERVICES.map((pkService) => (
                <div
                  key={pkService.slug}
                  className="group bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-2.5 shadow-2xs hover:shadow-xs transition-all duration-200"
                >
                  <span className="text-xs font-bold text-[#5C6B7A] block">
                    {pkService.code}
                  </span>
                  <h3 className="text-base font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                    <Link
                      href={`/services/${pkService.slug}`}
                    >
                      {pkService.shortTitle}
                    </Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    {pkService.introParagraph}
                  </p>
                  <Link
                    href={`/services/${pkService.slug}`}
                    className="inline-flex items-center gap-1 pt-1 text-xs sm:text-sm font-bold text-[#0B2545] hover:underline underline-offset-2"
                  >
                    <span>Read Pakistan Guide</span>
                    <span aria-hidden="true">→</span>
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
