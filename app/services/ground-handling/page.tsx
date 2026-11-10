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
          
        </div>

        {/* Hero Content (Centered, Clean Layout) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
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
                className="bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] min-h-[44px] px-7 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2"
              >
                <span>Request Ground Handling</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#turnaround-planner"
                className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
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
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Short-notice requests
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs">
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
                className="group bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] overflow-hidden flex flex-col justify-between hover:border-[#0B2545] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none"
              >
                {/* Image on top with navy duotone overlay */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-[1.04] motion-safe:transition-transform motion-safe:duration-500 ease-out motion-reduce:transform-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-[#0B2545]/40 to-black/15 group-hover:from-[#0B2545]/90 transition-colors duration-300"
                  />
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <h3 className="text-lg font-bold text-white leading-tight drop-shadow-xs">
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
                      <span aria-hidden="true">→</span>
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
                className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 flex flex-col justify-between space-y-4 shadow-xs hover:border-[#0B2545] hover:shadow-sm transition-all focus-within:ring-2 focus-within:ring-[#0B2545]"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0">
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
                    <span aria-hidden="true">→</span>
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
          SECTION 7 — WHY KCL (Four Factual Points)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Why KCL
            </h2>
            <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
              We bring proven aviation operations discipline to airport ground handling coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-2 shadow-xs border-t-4 border-t-[#0B2545]">
              
              <h3 className="text-lg font-bold text-[#0B2545]">
                24/7 operations desk
              </h3>
              <p className="text-base text-[#5C6B7A] leading-relaxed">
                Round-the-clock coordination team monitoring flight progress, schedule revisions and station communications across all time zones.
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-2 shadow-xs border-t-4 border-t-[#0B2545]">
              
              <h3 className="text-lg font-bold text-[#0B2545]">
                Global network of ground handling partners
              </h3>
              <p className="text-base text-[#5C6B7A] leading-relaxed">
                Established working relationships with licensed airport handlers and ramp service providers internationally.
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-2 shadow-xs border-t-4 border-t-[#0B2545]">
              
              <h3 className="text-lg font-bold text-[#0B2545]">
                One point of contact for permits and airport services
              </h3>
              <p className="text-base text-[#5C6B7A] leading-relaxed">
                Single operations channel synchronizing landing permits, parking slots, fueling and handling without scattered supplier communication.
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-2 shadow-xs border-t-4 border-t-[#0B2545]">
              
              <h3 className="text-lg font-bold text-[#0B2545]">
                Part of the Kashmirwala Group, serving aviation since 1947
              </h3>
              <p className="text-base text-[#5C6B7A] leading-relaxed">
                Decades of leadership in commercial air transport and airline representation, providing reliable operational stability.
              </p>
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

