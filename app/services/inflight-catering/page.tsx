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
  CATERING_FAQS,
  CONFIRMED_CATERING_SERVICES,
  CATERING_FLIGHTS_SUPPORTED,
} from "@/content/catering";
import { CONTACT_DATA } from "@/content/contact";
import { MealPlanner } from "@/components/sections/MealPlanner";
import { ClientStrip } from "@/components/sections/ClientStrip";

export const metadata = buildMetadata({
  title: "Inflight Catering Coordination Worldwide | KCL",
  description:
    "Inflight meals for passengers and crew, special dietary plans and bulk catering arranged at airports worldwide. One team, 24/7.",
  path: "/services/inflight-catering",
  omitTitleSuffix: true,
});

export default function InflightCateringPage() {
  const organizationLd = buildOrganizationJsonLd();
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Inflight Catering", path: "/services/inflight-catering" },
  ]);
  const faqLd = buildFaqJsonLd(CATERING_FAQS.slice(0, 6));
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Inflight Catering Coordination Worldwide",
    serviceType: "Aircraft Inflight Catering Coordination",
    description:
      "Inflight meals for passengers and crew, special dietary plans and bulk catering arranged at airports worldwide. One team, 24/7.",
    provider: {
      "@type": "Organization",
      name: "Kashmir Corporation (Pvt.) Ltd. - KCL",
      url: "https://kclwebsite.vercel.app",
    },
    areaServed: "Worldwide",
  };

  const visibleFaqs = CATERING_FAQS.slice(0, 6);
  const coreServices = CONFIRMED_CATERING_SERVICES;
  const supportedFlights = CATERING_FLIGHTS_SUPPORTED;

  return (
    <>
      <JsonLd data={[organizationLd, breadcrumbLd, faqLd, serviceLd]} />
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: "Inflight Catering", path: "/services/inflight-catering" },
        ]}
      />

      {/* =========================================================================
          SECTION 1 — HERO (Compact Height 520 to 560px on Desktop)
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[520px] lg:min-h-[560px] py-12 lg:py-14 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/services/03-catering.webp"
            alt="Aircraft inflight catering coordination and galley provisioning at international airport"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hero-zoom-photo"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/92 via-[#0B2545]/75 to-[#14406E]/50"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.16] tracking-tight mx-auto mb-3">
              Inflight Catering Coordination Worldwide
            </h1>

            <p className="text-base sm:text-lg font-semibold text-slate-100 max-w-2xl mx-auto leading-relaxed">
              Passenger and crew meals, planned around your aircraft and schedule, and delivered through trusted catering partners at the airport.
            </p>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Whether you fly scheduled commercial sectors, an executive charter or a long-range cargo positioning flight, KCL coordinates galley uplifts, dietary requirements and ramp delivery schedules under one 24/7 operations desk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/request-flight-support?service=inflight-catering"
                className="bg-[#0B2545] hover:bg-[#133661] text-white border border-white/30 min-h-[44px] px-7 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2 group"
              >
                <span>Request Catering</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
              </Link>
              <a
                href="#meal-planner"
                className="kcl-btn-outline-white min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] hover:bg-white/15 transition-all"
              >
                Plan My Meals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Chips Strip Below Hero */}
      <section
        aria-label="Operational Capabilities"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3 py-1 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3 py-1 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Short-notice requests
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-emerald-300 px-3 py-1 rounded-[2px] shadow-2xs bg-emerald-50/40">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              24/7 operations desk support
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE ARRANGE (Image Cards in 1 Row Desktop, Carousel Mobile)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-4">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
              What We Arrange
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Flight meal production, special dietary menus and airside galley delivery through verified flight catering kitchens worldwide.
            </p>
          </div>

          {/* Cards Row on Desktop, Horizontal Scroll-Snap Carousel on Mobile */}
          <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-2 sm:pb-0 scrollbar-none">
            {coreServices.map((service) => (
              <div
                key={service.id}
                className="snap-center shrink-0 w-[82vw] sm:w-auto group relative bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] overflow-hidden flex flex-col justify-between hover:border-[#0B2545] hover:shadow-xs transition-all duration-200"
              >
                {/* Photo with Navy Duotone Overlay */}
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                    className="object-cover object-center group-hover:scale-105 motion-safe:transition-transform duration-300"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/50 to-transparent"
                  />
                  <div className="absolute bottom-2.5 left-3 right-3 z-10">
                    <h3 className="text-base font-bold text-white leading-tight">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Card Body: Single Line of Text + Link */}
                <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                  <p className="text-xs sm:text-sm text-[#475569] leading-snug line-clamp-2">
                    {service.summary}
                  </p>

                  <div className="pt-2 border-t border-[#CBD5E1]/60">
                    <Link
                      href={service.href}
                      className="text-xs font-bold text-[#0B2545] hover:underline underline-offset-2 inline-flex items-center gap-1"
                    >
                      <span>Request catering</span>
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
          SECTION 3 — MEAL PLANNER (Interactive, Compact Output & Direct Strip)
          ========================================================================= */}
      <section id="meal-planner" className="scroll-mt-16 py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <MealPlanner />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — COMBINED: HOW IT WORKS (LEFT) & FLIGHTS WE SUPPORT (RIGHT)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Timeline (How Your Catering Is Arranged) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-4">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Operational Timeline</span>
                <h2 className="text-2xl font-bold text-[#0B2545]">How Your Catering Is Arranged</h2>
                <p className="text-sm text-[#475569] mt-1">
                  Structured liaison connecting flight operations with licensed station caterers.
                </p>
              </div>

              <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#CBD5E1]">
                {/* Step 1 */}
                <div className="relative space-y-1">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-white border-2 border-[#0B2545] flex items-center justify-center text-[10px] font-bold text-[#0B2545]">
                    1
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#F1F5F9] text-[#0B2545]">You</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Send Flight, Airport &amp; Meal Needs</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Provide registration, station ICAO, UTC schedule, passenger/crew headcount, and dietary preferences.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative space-y-1">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold">
                    2
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#0B2545] text-white">KCL Desk</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Check Provider Availability &amp; Menus</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    We verify kitchen lead times, ingredient feasibility, and packaging standards with licensed airport flight kitchens.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative space-y-1">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold">
                    3
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#0B2545] text-white">KCL Desk</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Align Galley Staging with Handling</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    High-loader positioning and galley truck ramp access are synchronised directly with aircraft turnaround schedules.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative space-y-1">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold">
                    4
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#0B2545] text-white">KCL Desk</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Pass On Schedule &amp; Headcount Changes</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    If passenger numbers adjust or slot revisions occur, our 24/7 desk coordinates cut-off extensions with the kitchen.
                  </p>
                </div>

                {/* Step 5 */}
                <div className="relative space-y-1">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-white border-2 border-[#0B2545] flex items-center justify-center text-[10px] font-bold text-[#0B2545]">
                    5
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#F1F5F9] text-[#0B2545]">You</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Stay Informed Through Departure</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    You receive galley delivery confirmation, seal numbers, and delivery receipts prior to cabin door closure.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Flights We Support (4 Compact Cards) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="mb-4">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Operator Coverage</span>
                <h2 className="text-2xl font-bold text-[#0B2545]">Flights We Support</h2>
                <p className="text-sm text-[#475569] mt-1">
                  Catering coordination scaled for every aircraft and sector.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {supportedFlights.map((flight) => (
                  <div
                    key={flight.title}
                    className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 flex flex-col justify-between space-y-2 hover:border-[#0B2545] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-[#0B2545]">
                        {flight.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#475569] leading-snug">
                      {flight.description}
                    </p>
                    <div className="pt-1">
                      <Link
                        href={`/request-flight-support?service=inflight-catering&flightType=${flight.flightTypeParam}`}
                        className="text-xs font-bold text-[#0B2545] hover:underline underline-offset-2 inline-flex items-center gap-1"
                      >
                        <span>Request catering</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — COMBINED: WHY KCL (4 POINTS) & TRUSTED CLIENT LOGO SLIDER
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="max-w-2xl mb-4">
              <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Why KCL</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                We bring proven aviation operations discipline to worldwide inflight catering coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Point 1 */}
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5 space-y-1.5 shadow-2xs">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Round-the-clock</span>
                <h3 className="text-base font-bold text-[#0B2545]">24/7 operations desk</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Coordination team monitoring flight progress, schedule revisions and station communications across all time zones.
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5 space-y-1.5 shadow-2xs">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Worldwide Reach</span>
                <h3 className="text-base font-bold text-[#0B2545]">Global catering network</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Established working relationships with licensed flight kitchens and airport catering suppliers internationally.
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5 space-y-1.5 shadow-2xs">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Unified Channel</span>
                <h3 className="text-base font-bold text-[#0B2545]">One point of contact</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Single operations channel synchronizing flight permissions, ground handling, fueling and catering without scattered supplier communication.
                </p>
              </div>

              {/* Point 4 */}
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5 space-y-1.5 shadow-2xs">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Since 1947</span>
                <h3 className="text-base font-bold text-[#0B2545]">Kashmirwala Group</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Decades of leadership in commercial air transport and airline representation, providing reliable operational stability.
                </p>
              </div>
            </div>
          </div>

          {/* Integrated Client Logo Slider */}
          <div className="pt-6 border-t border-[#CBD5E1]/60">
            <div className="text-center mb-3">
              <span className="text-xs font-bold text-[#5C6B7A] uppercase tracking-wider">
                Trusted by Airlines Including
              </span>
            </div>
            <ClientStrip compact />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FREQUENTLY ASKED QUESTIONS (2-Column Accordion Desktop)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-2xl mb-4">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#475569]">
              Clear answers regarding inflight meal preparation, dietary lead times, and airport galley coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {visibleFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 sm:p-5 transition-colors"
              >
                <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-[#0B2545] cursor-pointer list-none select-none">
                  <span className="pr-3">{faq.question}</span>
                  <span className="w-5 h-5 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[10px] text-[#0B2545] group-open:rotate-180 transition-transform duration-200 shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="mt-2.5 text-xs sm:text-sm text-[#16202B] leading-relaxed border-t border-[#CBD5E1]/60 pt-2.5">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — FINAL CTA BAND (One Only)
          ========================================================================= */}
      <section className="py-10 lg:py-12 bg-gradient-to-r from-[#0B2545] to-[#14406E] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Arrange Your Inflight Catering Coordination
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                Send your flight date, station ICAO, aircraft type, and meal requirements to coordinate seamless galley delivery.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-300">
                <span><strong>Desk:</strong> {CONTACT_DATA.opsEmail}</span>
                <span><strong>Phone (24/7):</strong> {CONTACT_DATA.primaryPhone}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <Link
                href="/request-flight-support?service=inflight-catering"
                className="bg-[#133661] hover:bg-[#1A467D] text-white min-h-[44px] px-6 py-2.5 font-bold text-sm text-center inline-flex items-center justify-center rounded-[2px] transition-colors border border-white/20 shadow-xs"
              >
                <span>Request Catering Support</span>
                <span aria-hidden="true" className="ml-1.5">→</span>
              </Link>
              <a
                href={`tel:${CONTACT_DATA.primaryPhone.replace(/\s+/g, "")}`}
                className="kcl-btn-outline-white min-h-[44px] px-6 py-2.5 font-semibold text-sm text-center inline-flex items-center justify-center rounded-[2px]"
              >
                Call the Ops Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
