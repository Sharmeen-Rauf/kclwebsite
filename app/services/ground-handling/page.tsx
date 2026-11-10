import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  JsonLd,
  buildOrganizationJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/seo/JsonLd";
import {
  GROUND_HANDLING_SERVICES,
  GROUND_HANDLING_FAQS,
  GROUND_HANDLING_FLIGHTS_SUPPORTED,
  GROUND_HANDLING_RELATED_SERVICES,
} from "@/content/ground-handling";
import { TurnaroundPlanner } from "@/components/sections/TurnaroundPlanner";
import { GroundHandlingFaqAccordion } from "@/components/sections/GroundHandlingFaqAccordion";
import { GroundHandlingLogoSlider } from "@/components/sections/GroundHandlingLogoSlider";
import { GroundHandlingTimeline } from "@/components/sections/GroundHandlingTimeline";

export const metadata = buildMetadata({
  title: "Worldwide Ground Handling Coordination | KCL",
  description:
    "Aircraft, passenger, baggage and cargo handling, fuelling coordination and turnaround management at airports worldwide. One team, 24/7.",
  path: "/services/ground-handling",
  omitTitleSuffix: true,
});

export default function GroundHandlingPage() {
  const organizationLd = buildOrganizationJsonLd();
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Ground Handling", path: "/services/ground-handling" },
  ]);
  const faqLd = buildFaqJsonLd(GROUND_HANDLING_FAQS);
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Worldwide Ground Handling Coordination",
    serviceType: "Aviation Ground Handling Coordination",
    description:
      "Aircraft, passenger, baggage and cargo handling, fuelling coordination and turnaround management at airports worldwide. One team, 24/7.",
    provider: {
      "@type": "Organization",
      name: "Kashmir Corporation (Pvt.) Ltd. - KCL",
      url: "https://kclwebsite.vercel.app",
    },
    areaServed: "Worldwide",
  };

  return (
    <>
      <JsonLd data={[organizationLd, breadcrumbLd, faqLd, serviceLd]} />
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: "Ground Handling", path: "/services/ground-handling" },
        ]}
      />

      {/* =========================================================================
          SECTION 1 — HERO (InnerHero with Grand Homepage Height & Snapshot Card)
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] py-16 sm:py-20 lg:py-24 flex items-center justify-center">
        {/* Full-width apron photo with left-to-right navy gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/services/02-ground.webp"
            alt="Aircraft ramp ground handling, apron marshalling and turnaround operations at international airport"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hero-zoom-photo"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/65 to-[#14406E]/40"
          />
          {/* Ambient Radar Sweep Visual */}
          <div aria-hidden="true" className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full border border-sky-400/10 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute inset-0 rounded-full border border-sky-400/15" />
            <div className="absolute inset-16 sm:inset-24 rounded-full border border-sky-400/15" />
            <div className="absolute inset-32 sm:inset-44 rounded-full border border-sky-400/15" />
            <div className="absolute inset-0 radar-sweep-beam bg-gradient-to-tr from-sky-400/15 via-transparent to-transparent rounded-full" />
          </div>
        </div>

        {/* Hero Content (Centered, Clean Layout) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
            {/* Live Operational Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium shadow-sm hover:bg-white/15 transition-all">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Live Operations Desk · Worldwide Handling Stations</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white leading-[1.16] tracking-tight mx-auto">
              Worldwide Ground Handling Coordination
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-semibold text-slate-100 max-w-2xl mx-auto">
              We arrange aircraft, passenger, baggage and cargo handling through trusted partners at the airport, and keep you updated from arrival to departure.
            </p>

            <p className="text-xs sm:text-sm lg:text-[15.5px] text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Whether you operate a commercial passenger turnaround, an urgent cargo flight or a technical fuel stop, KCL coordinates every ramp service with verified airport providers under one operations desk.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href="/request-flight-support?service=ground-handling"
                className="relative overflow-hidden bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] min-h-[44px] px-7 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2 group"
              >
                <span className="animate-btn-shimmer" />
                <span>Request Ground Handling</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
              </Link>
              <a
                href="#turnaround-planner"
                className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] hover:bg-white/15 transition-all"
              >
                Plan My Turnaround
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Chips Strip Below Hero */}
      <section
        aria-label="Operational Capabilities"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3 sm:py-3.5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-[13px] font-bold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3.5 py-1.5 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3.5 py-1.5 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Short-notice requests
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-emerald-300 hover:border-emerald-500 hover:-translate-y-0.5 px-3.5 py-1.5 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200 bg-emerald-50/40">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              24/7 operations desk support
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE COORDINATE (Six Graphic Cards with Duotone Overlay)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              What We Coordinate
            </h2>
            <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
              We coordinate the core apron and passenger handling elements of international flight operations through qualified handling partners at airports worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {GROUND_HANDLING_SERVICES.map((service) => (
              <div
                key={service.id}
                className="group relative bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] overflow-hidden flex flex-col justify-between hover:border-[#0B2545] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none"
              >
                {/* Top Animated Border Accent */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B2545] via-sky-500 to-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                />

                {/* Image on top with navy duotone overlay */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-700 ease-out motion-reduce:transform-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-[#0B2545]/40 to-black/15 group-hover:from-[#0B2545]/90 transition-colors duration-300"
                  />
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="text-lg font-bold text-white leading-tight drop-shadow-xs group-hover:translate-x-0.5 transition-transform duration-200">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body: One line description + One link */}
                <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                  <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="pt-3 border-t border-[#CBD5E1]/60">
                    <Link
                      href={service.href}
                      className="text-sm font-bold text-[#0B2545] group-hover:text-[#133661] hover:underline underline-offset-4 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Coordinate {service.name.toLowerCase()}</span>
                      <span aria-hidden="true" className="group-hover:translate-x-1.5 motion-safe:transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — UNIQUE FEATURE: TURNAROUND PLANNER (Interactive)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TurnaroundPlanner />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — HOW IT WORKS (Two-Lane Timeline)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GroundHandlingTimeline />
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — FLIGHTS WE SUPPORT (Responsive Grid)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Flights We Support
            </h2>
            <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
              Whatever you fly, we arrange the ground side.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GROUND_HANDLING_FLIGHTS_SUPPORTED.map((flight) => (
              <div
                key={flight.title}
                className="group bg-white border border-[#CBD5E1] rounded-[6px] p-6 flex flex-col justify-between space-y-4 shadow-xs hover:border-[#0B2545] hover:shadow-md hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#0B2545] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#133661] group-hover:rotate-6 motion-safe:transition-all motion-safe:duration-300">
                      {flight.flightType === "airline" && (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      )}
                      {flight.flightType === "charter" && (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                        </svg>
                      )}
                      {flight.flightType === "cargo" && (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                          <line x1="12" y1="22.08" x2="12" y2="12" />
                        </svg>
                      )}
                      {flight.flightType === "ops" && (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      )}
                      {flight.flightType === "urgent" && (
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 14 14" />
                        </svg>
                      )}
                    </span>
                    <h3 className="text-[20px] font-bold text-[#0B2545] leading-snug">
                      {flight.title}
                    </h3>
                  </div>

                  <p className="text-[16px] text-[#16202B] leading-relaxed">
                    {flight.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/request-flight-support?service=ground-handling&flightType=${flight.flightType}`}
                    className="text-[15px] font-bold text-[#0B2545] hover:text-[#133661] underline-offset-4 hover:underline inline-flex items-center gap-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 rounded-[2px]"
                  >
                    <span>Request handling</span>
                    <span aria-hidden="true" className="group-hover:translate-x-1.5 motion-safe:transition-transform duration-200">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — EVERYTHING ON ONE REQUEST (One Request, the Whole Stop)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              One Request, the Whole Stop
            </h2>
            <p className="text-base sm:text-lg text-[#16202B] leading-relaxed font-semibold">
              Combine handling with permits, fuel and crew hotels on one request to keep your station communication in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-fr">
            {GROUND_HANDLING_RELATED_SERVICES.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-[6px] border border-white/20 min-h-[240px] sm:min-h-[260px] flex flex-col justify-between p-5 sm:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 focus-visible:-translate-y-1 transition-all duration-300 ease-out focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] motion-reduce:transition-none motion-reduce:transform-none"
              >
                {/* Full-bleed background photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-safe:transition-transform motion-safe:duration-500 ease-out motion-reduce:transform-none"
                />

                {/* Calibrated navy gradient overlay for clear picture visibility and high text contrast */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/50 to-black/25 group-hover:from-[#0B2545]/95 group-hover:via-[#0B2545]/60 transition-colors duration-300"
                />

                {/* Top: Category Tag Pill */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-white/95 bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 py-1 rounded-[2px]">
                    {item.tag}
                  </span>
                </div>

                {/* Bottom: Service Title + Description + Explore service link */}
                <div className="relative z-10 space-y-2 mt-auto pt-4">
                  <h3 className="text-[19px] sm:text-[20px] font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[14.5px] text-slate-200 leading-relaxed font-normal">
                    {item.description}
                  </p>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-[14px] font-bold text-white group-hover:translate-x-1 motion-safe:transition-transform motion-safe:duration-200">
                      <span>Explore service</span>
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — WHY KCL (Four Factual Points — Premium Aviation Feature Cards)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2545]/5 border border-[#0B2545]/15 text-[#0B2545] text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#0B2545]"></span>
              <span>Aviation coordination standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] tracking-tight">
              Why KCL
            </h2>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              We bring proven aviation operations discipline to airport ground handling coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: 24/7 Operations Desk */}
            <div
              tabIndex={0}
              className="group relative bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(11,37,69,0.04)] hover:shadow-[0_14px_30px_rgba(11,37,69,0.1)] hover:-translate-y-1.5 focus-visible:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 transition-all duration-300 ease-out flex flex-col justify-between motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live 24/7 Desk
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <h3 className="text-[20px] font-bold text-[#0B2545] leading-snug">
                    24/7 operations desk
                  </h3>
                  <p className="text-[16px] text-[#475569] leading-relaxed">
                    Round-the-clock coordination team monitoring flight progress, schedule revisions and station communications across all time zones.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <div className="w-8 h-1 bg-[#0B2545]/20 group-hover:bg-[#0B2545] group-hover:w-16 rounded-full motion-safe:transition-all motion-safe:duration-300"></div>
              </div>
            </div>

            {/* Card 2: Global Network */}
            <div
              tabIndex={0}
              className="group relative bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(11,37,69,0.04)] hover:shadow-[0_14px_30px_rgba(11,37,69,0.1)] hover:-translate-y-1.5 focus-visible:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 transition-all duration-300 ease-out flex flex-col justify-between motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E2E8F0] text-[#0B2545]">
                    Worldwide stations
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <h3 className="text-[20px] font-bold text-[#0B2545] leading-snug">
                    Global network of ground handling partners
                  </h3>
                  <p className="text-[16px] text-[#475569] leading-relaxed">
                    Established working relationships with licensed airport handlers and ramp service providers internationally.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <div className="w-8 h-1 bg-[#0B2545]/20 group-hover:bg-[#0B2545] group-hover:w-16 rounded-full motion-safe:transition-all motion-safe:duration-300"></div>
              </div>
            </div>

            {/* Card 3: One Point of Contact */}
            <div
              tabIndex={0}
              className="group relative bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(11,37,69,0.04)] hover:shadow-[0_14px_30px_rgba(11,37,69,0.1)] hover:-translate-y-1.5 focus-visible:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 transition-all duration-300 ease-out flex flex-col justify-between motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#E2E8F0] text-[#0B2545]">
                    Single channel
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <h3 className="text-[20px] font-bold text-[#0B2545] leading-snug">
                    One point of contact for permits and airport services
                  </h3>
                  <p className="text-[16px] text-[#475569] leading-relaxed">
                    Single operations channel synchronizing landing permits, parking slots, fueling and handling without scattered supplier communication.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <div className="w-8 h-1 bg-[#0B2545]/20 group-hover:bg-[#0B2545] group-hover:w-16 rounded-full motion-safe:transition-all motion-safe:duration-300"></div>
              </div>
            </div>

            {/* Card 4: Heritage Since 1947 */}
            <div
              tabIndex={0}
              className="group relative bg-[#0B2545] text-white border border-[#0B2545] rounded-xl p-6 sm:p-7 shadow-[0_4px_14px_rgba(11,37,69,0.18)] hover:shadow-[0_16px_36px_rgba(11,37,69,0.3)] hover:-translate-y-1.5 focus-visible:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 transition-all duration-300 ease-out flex flex-col justify-between motion-reduce:transform-none motion-reduce:transition-none"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 text-white border border-white/20 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/25 backdrop-blur-xs">
                    Heritage since 1947
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <h3 className="text-[20px] font-bold text-white leading-snug">
                    Part of the Kashmirwala Group, serving aviation since 1947
                  </h3>
                  <p className="text-[16px] text-slate-200/90 leading-relaxed">
                    Decades of leadership in commercial air transport and airline representation, providing reliable operational stability.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <div className="w-8 h-1 bg-white/40 group-hover:bg-white group-hover:w-16 rounded-full motion-safe:transition-all motion-safe:duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — TRUSTED BY AIRLINES INCLUDING (Approved Logos Slider)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GroundHandlingLogoSlider />
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — FAQ (Accordion with FAQPage Schema)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
              Clear answers to common questions about ground handling coordination, requirements and operational procedures.
            </p>
          </div>

          <GroundHandlingFaqAccordion />
        </div>
      </section>

      
    </>
  );
}

