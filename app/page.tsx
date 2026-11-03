import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { AirwaysHeroMap } from "@/components/sections/AirwaysHeroMap";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { PermitChecker } from "@/components/sections/PermitChecker";
import { RequestTrackerPreview } from "@/components/sections/RequestTrackerPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  KCL_SIX_CORE_SERVICES,
  PRIMARY_SERVICES_DATA,
} from "@/content/services";
import { HOME_FAQS } from "@/content/faqs";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "International Flight Support & Aviation Services | KCL",
  description:
    "KCL coordinates flight permission facilitation, ground handling, catering services, fuel supply, crew accommodation and 24/7 support for airline and charter operations.",
  path: "/",
  omitTitleSuffix: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(HOME_FAQS)} />

      {/* 1. Signature Hero Section with Aviation Background Image & Transparent Overlay */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 py-14 lg:py-20">
        {/* Background Aircraft & Airport Ramp Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero-flight-ops.jpg"
            alt="Commercial airliner and executive business jet on an international airport apron at dusk with ground support equipment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Translucent dark cinematic gradient overlay (No solid blue block) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px] shadow-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#F2C200]/80 px-3.5 py-1.5 font-mono text-xs text-[#F2C200] font-semibold">
                <span>KCL INTERNATIONAL FLIGHT SUPPORT</span>
                <span>·</span>
                <span>{SITE_CONFIG.authorityBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.55rem] font-bold text-white leading-[1.15] tracking-tight drop-shadow-xs">
                International Flight Support &amp; Aviation Services
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-[#F2C200]">
                International Flight Support. Coordinated with Confidence.
              </p>

              <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
                Across international flight operations, the details matter.
                Kashmir Corporation (Pvt.) Ltd. supports airlines, charter
                operators, cargo carriers and business aviation teams with
                flight permission facilitation, ground handling, catering
                services, fuel supply, crew accommodation arrangements and 24/7
                operational support.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/request-flight-support"
                  className="min-h-[48px] px-6 py-3.5 bg-[#F2C200] hover:bg-[#E8A200] text-[#0B2545] font-bold text-sm tracking-tight inline-flex items-center justify-center rounded-[2px] transition-colors shadow-md"
                >
                  Request Flight Support
                </Link>
                <Link
                  href="/services"
                  className="min-h-[48px] px-5 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors"
                >
                  Explore Six Core Services
                </Link>
              </div>

              <div className="pt-4 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-200">
                <div>
                  <span className="text-[#F2C200] font-semibold block">
                    SCHEDULE &amp; CHARTER
                  </span>
                  <span>Overflight &amp; landing permits</span>
                </div>
                <div>
                  <span className="text-[#F2C200] font-semibold block">
                    PAKISTAN FOCUS
                  </span>
                  <Link
                    href="/pakistan/flight-permissions"
                    className="underline hover:text-white"
                  >
                    Pakistan flight permissions →
                  </Link>
                </div>
                <div>
                  <span className="text-[#F2C200] font-semibold block">
                    INQUIRY CHECKLIST
                  </span>
                  <a
                    href="/files/kcl-permit-request-checklist.pdf"
                    download
                    className="underline hover:text-white"
                  >
                    Download PDF Guide
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AirwaysHeroMap />
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
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
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

      {/* 6. Published Airline References & Visual Split Section */}
      <ClientStrip />

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
                  priority
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
