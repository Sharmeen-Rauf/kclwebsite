import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { QuickPermitRequestCard } from "@/components/sections/QuickPermitRequestCard";
import { PermitChecker } from "@/components/sections/PermitChecker";
import { RequestTrackerPreview } from "@/components/sections/RequestTrackerPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  KCL_SIX_CORE_SERVICES,
  PRIMARY_SERVICES_DATA,
} from "@/content/services";
import { REAL_CLIENTS } from "@/content/clients";
import { HOME_FAQS } from "@/content/faqs";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title:
    "Pakistan Flight Permissions & Aviation Support | AFPA Authorized Agent — KCL",
  description:
    "Overflight and landing permits for schedule and non-schedule flights, with ground handling, catering, fuel and crew hotels arranged by Kashmir Corporation (Pvt.) Ltd.",
  path: "/",
  omitTitleSuffix: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(HOME_FAQS)} />

      {/* 1. Split Hero with Quick Permit Request Panel */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-22">
        {/* Background Aircraft / Ramp Photo with Navy Overlay & Faint Route Line-Art */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero-flight-ops.jpg"
            alt="Commercial aircraft and business jet on an international airport ramp with ground support equipment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07192F]/92 via-[#0B2545]/82 to-[#0B2545]/70" />
          {/* Very faint route line-art background (no chart box, flight levels, or airway codes) */}
          <svg
            viewBox="0 0 1440 640"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
          >
            <path
              d="M-60 490 C 280 420, 620 260, 1020 220 C 1220 200, 1360 150, 1500 110"
              stroke="#F2C200"
              strokeWidth="1.5"
              strokeDasharray="6 6"
            />
            <path
              d="M-40 240 C 340 290, 740 350, 1140 280 C 1300 250, 1410 210, 1520 180"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            <path
              d="M420 620 C 560 450, 720 310, 910 120"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeDasharray="4 5"
            />
            <circle cx="515" cy="340" r="4" fill="#F2C200" />
            <circle cx="775" cy="275" r="4" fill="#FFFFFF" />
            <circle cx="885" cy="145" r="4" fill="#F2C200" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Single H1, One-Sentence Subhead & Two Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white leading-[1.15] tracking-tight">
                Pakistan Flight Permissions, Filed and Followed Up by an AFPA
                Authorized Agent
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed max-w-2xl">
                Overflight and landing permits for schedule and non-schedule
                flights, with handling, catering, fuel and crew hotels arranged
                by the same desk.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
                <Link
                  href="/request-permit"
                  className="min-h-[48px] px-6 py-3.5 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm tracking-tight inline-flex items-center justify-center rounded-[2px] transition-colors shadow-md"
                >
                  Request a Permit
                </Link>
                <Link
                  href="#permit-checker"
                  className="min-h-[48px] px-6 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/60 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors"
                >
                  Check Requirements
                </Link>
              </div>
            </div>

            {/* Right: Quick Permit Request Card */}
            <div className="lg:col-span-5">
              <QuickPermitRequestCard />
            </div>
          </div>
        </div>
      </section>

      {/* Single-Row Trust Strip Directly Below Hero */}
      <section
        aria-label="Operational Credentials and Airline References"
        className="bg-white border-b border-[#CBD5E1] py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
            {/* Three Verified Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-bold text-[#0B2545]">
              <span className="inline-flex items-center gap-2 bg-[#F6F8FB] border border-[#CBD5E1] px-3 py-1.5 rounded-[2px]">
                <span className="h-2 w-2 rounded-full bg-[#E8A200]" />
                AFPA Authorized
              </span>
              <span className="inline-flex items-center gap-2 bg-[#F6F8FB] border border-[#CBD5E1] px-3 py-1.5 rounded-[2px]">
                <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
                24/7 Ops Desk
              </span>
              <span className="inline-flex items-center gap-2 bg-[#F6F8FB] border border-[#CBD5E1] px-3 py-1.5 rounded-[2px]">
                <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
                Schedule &amp; Non-Schedule
              </span>
            </div>

            {/* Four Confirmed Client Logos */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {REAL_CLIENTS.map((client) => (
                <Link
                  key={client.icao}
                  href="/clients"
                  title={`${client.name} (${client.icao})`}
                  className="bg-[#F6F8FB] hover:bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-[2px] inline-flex items-center transition-colors"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={110}
                    height={32}
                    className="h-7 w-auto object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. KCL's Six Core Services (Primary Reference: kclpk.org/Services.html) */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
                SIX CORE OPERATIONAL SERVICES · KCL FLIGHT SUPPORT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                The Support Behind a Well-Planned Flight
              </h2>
              <p className="text-[#16202B] text-base leading-relaxed">
                Every itinerary brings together permissions, airport
                arrangements, aircraft requirements and crew needs. Rather than
                treating these as isolated tasks, KCL coordinates six core
                operational services so dispatchers and flight operations teams
                can plan with clarity.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/schedule-filing"
                className="px-4 py-2.5 min-h-[44px] bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] text-sm font-semibold text-[#0B2545] inline-flex items-center"
              >
                Scheduled Filing →
              </Link>
              <Link
                href="/non-schedule-filing"
                className="px-4 py-2.5 min-h-[44px] bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] text-sm font-semibold text-[#0B2545] inline-flex items-center"
              >
                Non-Scheduled &amp; Charter Filing →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KCL_SIX_CORE_SERVICES.map((pillar) => (
              <div
                key={pillar.code}
                className="bg-[#F6F8FB] border border-[#CBD5E1] p-6 flex flex-col justify-between"
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
                <div className="pt-4 mt-4 border-t border-slate-200 space-y-2">
                  <Link
                    href={pillar.primaryHref}
                    className="block text-xs font-bold text-[#0B2545] underline underline-offset-4"
                  >
                    {pillar.primaryLabel} →
                  </Link>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#5C6B7A]">
                    {pillar.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="hover:text-[#0B2545] underline underline-offset-2"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Flight Support Navigator */}
      <section
        id="permit-checker"
        className="scroll-mt-24 py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
              FLIGHT SUPPORT NAVIGATOR · PREPARATION GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Prepare the Operational Details Before You Inquire
            </h2>
            <p className="text-[#16202B] text-base leading-relaxed">
              Select your operation type (scheduled or non-scheduled) and
              primary service need to review the information your dispatch or
              operations team should prepare. This tool guides inquiry
              preparation and does not calculate regulatory approval or
              guarantee processing times.
            </p>
          </div>

          <PermitChecker />
        </div>
      </section>

      {/* 4. Complete Service Specification Ledger */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
                DETAILED SERVICE GUIDES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Permissions, Ground Support &amp; Operational Coordination
              </h2>
              <p className="text-[#16202B] text-base">
                Explore dedicated operational guides for overflight and landing
                permissions, scheduled and non-scheduled flights, ground
                handling, catering, fuel, and crew accommodation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/pakistan/flight-permissions"
                className="px-4 py-2.5 min-h-[44px] bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] text-sm font-semibold text-[#0B2545] inline-flex items-center"
              >
                Pakistan Flight Permissions →
              </Link>
              <Link
                href="/services"
                className="px-4 py-2.5 min-h-[44px] bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] text-sm font-semibold text-[#0B2545] inline-flex items-center"
              >
                View All Services →
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto border border-[#CBD5E1]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0B2545] text-white font-mono text-xs uppercase">
                  <th className="py-3.5 px-4 border-r border-slate-700">
                    Code
                  </th>
                  <th className="py-3.5 px-4 border-r border-slate-700">
                    Service Area
                  </th>
                  <th className="py-3.5 px-4 border-r border-slate-700">
                    Coordination Scope
                  </th>
                  <th className="py-3.5 px-4 border-r border-slate-700">
                    Planning Notice
                  </th>
                  <th className="py-3.5 px-4">Guide</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#CBD5E1] text-sm">
                {PRIMARY_SERVICES_DATA.map((service) => (
                  <tr
                    key={service.slug}
                    className="hover:bg-[#F6F8FB] transition-colors"
                  >
                    <td className="py-4 px-4 font-mono text-xs font-semibold text-[#5C6B7A] border-r border-[#CBD5E1] whitespace-nowrap">
                      {service.code}
                    </td>
                    <td className="py-4 px-4 font-bold text-[#0B2545] border-r border-[#CBD5E1]">
                      <Link
                        href={`/services/${service.slug}`}
                        className="hover:underline underline-offset-4"
                      >
                        {service.shortTitle}
                      </Link>
                    </td>
                    <td className="py-4 px-4 text-[#16202B] border-r border-[#CBD5E1]">
                      {service.whatItIs[0]}
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-[#5C6B7A] border-r border-[#CBD5E1]">
                      {service.typicalLeadTimePlaceholder}
                    </td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <Link
                        href={`/services/${service.slug}`}
                        className="font-semibold text-[#0B2545] hover:text-[#133661] underline underline-offset-4"
                      >
                        Explore →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. How Coordination Works & Heritage / Pakistan Specialization */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
              OPERATIONAL COORDINATION PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              How Coordination Works
            </h2>
            <RequestTrackerPreview />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
                  PAKISTAN SPECIALIZATION &amp; INTERNATIONAL TRIP SUPPORT
                </span>
                <h2 className="text-2xl font-bold text-[#0B2545]">
                  From Pakistan to International Trip Support
                </h2>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  KCL&apos;s established Pakistan flight permission
                  specialization (scheduled and non-scheduled overflight and
                  landing clearances across OPKR and OPLR FIRs) is complemented
                  by international trip coordination. Specific regions,
                  countries and delivery partnerships are confirmed per
                  itinerary.
                </p>
                <p className="text-sm text-[#5C6B7A] leading-relaxed">
                  Operators planning overflights or landings involving Pakistan
                  can explore our dedicated Pakistan flight permissions pages
                  for local operational context, or combine multiple services in
                  a single flight support inquiry.
                </p>
              </div>
              <div className="pt-4 border-t border-[#CBD5E1] flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  href="/pakistan/flight-permissions"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  Pakistan Flight Permissions →
                </Link>
                <Link
                  href="/services/overflight-permit-pakistan"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  Pakistan Overflight Guide →
                </Link>
                <Link
                  href="/services/landing-permit-pakistan"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  Pakistan Landing Guide →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
                  CORPORATE HERITAGE · KASHMIRWALA GROUP (1947)
                </span>
                <h2 className="text-2xl font-bold text-[#0B2545]">
                  Rooted in Heritage, Built for Today
                </h2>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  KCL is associated with Kashmirwala Group, whose history dates
                  to 1947. That corporate heritage informs a contemporary
                  commitment to professional aviation coordination. The
                  Group&apos;s foundation date is distinct from KCL&apos;s
                  corporate incorporation date.
                </p>
                <p className="text-sm text-[#5C6B7A] leading-relaxed">
                  Explore practical guides on permission requests, scheduled vs.
                  non-scheduled operations, and information to prepare before
                  contacting a flight support provider.
                </p>
              </div>
              <div className="pt-4 border-t border-[#CBD5E1] flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  href="/about"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  About KCL &amp; Heritage →
                </Link>
                <Link
                  href="/aviation-resources"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  Aviation Resources →
                </Link>
                <Link
                  href="/insights"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  Aviation Insights →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Visual Split Section */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
                AVIATION INSIGHTS FOR OPERATORS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Practical Guides &amp; Resources for Flight Operations Teams
              </h2>
              <p className="text-[#16202B] text-base leading-relaxed">
                Explore practical guides on permission requests, basic
                operational terminology and information to prepare before
                contacting a flight support provider. Each guide includes its
                review date and references authoritative aviation sources.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <Link
                  href="/aviation-resources"
                  className="p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] transition-colors"
                >
                  <span className="font-bold text-[#0B2545] block">
                    Aviation Resource Library →
                  </span>
                  <span className="text-xs text-[#5C6B7A]">
                    Checklists, Pakistan permit guides, and dispatch terminology
                  </span>
                </Link>
                <Link
                  href="/insights"
                  className="p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] transition-colors"
                >
                  <span className="font-bold text-[#0B2545] block">
                    Aviation Insights &amp; Articles →
                  </span>
                  <span className="text-xs text-[#5C6B7A]">
                    Overflight vs landing permissions, airport slots, and
                    turnaround planning
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-[#CBD5E1] bg-[#0B2545] p-2">
                <Image
                  src="/img/ops-ramp-handling.svg"
                  alt="Aircraft ground handling and flight support coordination schematic"
                  width={800}
                  height={500}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              International Flight Support &amp; Permit Coordination Q&amp;A
            </h2>
          </div>

          <div className="divide-y divide-[#CBD5E1] border border-[#CBD5E1] bg-white">
            {HOME_FAQS.map((faq) => (
              <div key={faq.question} className="p-6">
                <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Conversion Section */}
      <CtaBanner
        heading="One Itinerary. A Clearer Operational Plan."
        subheading="Share your route and operational requirements to discuss the appropriate support."
        primaryLabel="Request Flight Support"
        primaryHref="/request-flight-support"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
