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
import { MealPlanner } from "@/components/sections/MealPlanner";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { FlightPathDivider } from "@/components/ui/FlightPathDivider";

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
          SECTION 1 — HERO (Animated Radar Visual & Calibrated Gradient)
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[520px] lg:min-h-[560px] py-12 lg:py-14 flex items-center justify-center">
        {/* Full-width catering photo with navy gradient */}
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

          {/* Ambient Radar Sweep Visual */}
          <div aria-hidden="true" className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full border border-sky-400/10 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute inset-0 rounded-full border border-sky-400/15" />
            <div className="absolute inset-16 sm:inset-24 rounded-full border border-sky-400/15" />
            <div className="absolute inset-32 sm:inset-44 rounded-full border border-sky-400/15" />
            <div className="absolute inset-0 radar-sweep-beam bg-gradient-to-tr from-sky-400/15 via-transparent to-transparent rounded-full" />
          </div>

          {/* Airway route line-art */}
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
                className="relative overflow-hidden bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] font-bold text-sm min-h-[44px] px-7 py-3 inline-flex items-center justify-center rounded-[2px] transition-all shadow-md hover:shadow-lg gap-2 group"
              >
                <span className="animate-btn-shimmer" />
                <span>Request Catering</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
              </Link>
              <a
                href="#meal-planner"
                className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] hover:bg-white/15 transition-all"
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
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3 py-1 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3 py-1 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#F4C400]" />
              Short-notice requests
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-emerald-300 hover:border-emerald-500 hover:-translate-y-0.5 px-3 py-1 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200 bg-emerald-50/40">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              24/7 operations desk support
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE ARRANGE (Eye-Catching Image Cards with Shimmer Borders)
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
                className="snap-center shrink-0 w-[82vw] sm:w-auto group relative bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] overflow-hidden flex flex-col justify-between hover:border-[#0B2545] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Top Animated Shimmer Border Accent with Gold Glow */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                />

                {/* Photo with Navy Duotone Overlay & Zoom Effect */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                    className="object-cover object-center group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-500 ease-out"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/50 to-transparent group-hover:from-[#0B2545]/95 transition-colors duration-300"
                  />
                  <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between">
                    <h3 className="text-base font-bold text-white leading-tight group-hover:translate-x-0.5 transition-transform duration-200">
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
                      className="text-xs font-bold text-[#0B2545] group-hover:text-[#133661] hover:underline underline-offset-2 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Request catering</span>
                      <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subtle Airway Path Divider */}
      <FlightPathDivider variant="curve-down" className="my-2 bg-[#F8FAFC]" />

      {/* =========================================================================
          SECTION 3 — MEAL PLANNER (Interactive, Compact Output & Direct Strip)
          ========================================================================= */}
      <section id="meal-planner" className="scroll-mt-16 py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <MealPlanner />
        </div>
      </section>

      {/* Subtle Airway Path Divider */}
      <FlightPathDivider variant="curve-up" className="my-2 bg-white" />

      {/* =========================================================================
          SECTION 4 — COMBINED: HOW IT WORKS (LEFT) & FLIGHTS WE SUPPORT (RIGHT)
          ========================================================================= */}
      <section className="relative overflow-hidden py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        {/* Aeronautical Navigation Dot Matrix & Atmospheric Ambient Glow */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage: "radial-gradient(#0B2545 1.25px, transparent 1.25px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-gradient-to-br from-sky-400/10 via-[#0B2545]/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-white border-2 border-[#0B2545] flex items-center justify-center text-[10px] font-bold text-[#0B2545] group-hover:scale-110 transition-transform">
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
                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
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
                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
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
                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
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
                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-white border-2 border-[#0B2545] flex items-center justify-center text-[10px] font-bold text-[#0B2545] group-hover:scale-110 transition-transform">
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
                    className="group bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 flex flex-col justify-between space-y-2 hover:border-[#0B2545] hover:shadow-xs transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-6 motion-safe:transition-all motion-safe:duration-200">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                        {flight.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#475569] leading-snug">
                      {flight.description}
                    </p>
                    <div className="pt-1">
                      <Link
                        href={`/request-flight-support?service=inflight-catering&flightType=${flight.flightTypeParam}`}
                        className="text-xs font-bold text-[#0B2545] hover:underline underline-offset-2 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
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
              <div className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-1.5 shadow-2xs hover:shadow-xs transition-all duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Round-the-clock</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-base font-bold text-[#0B2545]">24/7 operations desk</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Coordination team monitoring flight progress, schedule revisions and station communications across all time zones.
                </p>
                <div className="pt-2">
                  <div className="w-6 h-0.5 bg-[#0B2545]/20 group-hover:bg-[#F4C400] group-hover:w-12 rounded-full transition-all duration-300" />
                </div>
              </div>

              {/* Point 2 */}
              <div className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-1.5 shadow-2xs hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Worldwide Reach</span>
                <h3 className="text-base font-bold text-[#0B2545]">Global catering network</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Established working relationships with licensed flight kitchens and airport catering suppliers internationally.
                </p>
                <div className="pt-2">
                  <div className="w-6 h-0.5 bg-[#0B2545]/20 group-hover:bg-[#F4C400] group-hover:w-12 rounded-full transition-all duration-300" />
                </div>
              </div>

              {/* Point 3 */}
              <div className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-1.5 shadow-2xs hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Unified Channel</span>
                <h3 className="text-base font-bold text-[#0B2545]">One point of contact</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Single operations channel synchronizing flight permissions, ground handling, fueling and catering without scattered supplier communication.
                </p>
                <div className="pt-2">
                  <div className="w-6 h-0.5 bg-[#0B2545]/20 group-hover:bg-[#F4C400] group-hover:w-12 rounded-full transition-all duration-300" />
                </div>
              </div>

              {/* Point 4 */}
              <div className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-1.5 shadow-2xs hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Since 1947</span>
                <h3 className="text-base font-bold text-[#0B2545]">Kashmirwala Group</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Decades of leadership in commercial air transport and airline representation, providing reliable operational stability.
                </p>
                <div className="pt-2">
                  <div className="w-6 h-0.5 bg-[#0B2545]/20 group-hover:bg-[#F4C400] group-hover:w-12 rounded-full transition-all duration-300" />
                </div>
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
                className="group bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545]/60 rounded-[4px] p-4 sm:p-5 transition-all duration-200"
              >
                <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-[#0B2545] cursor-pointer list-none select-none">
                  <span className="pr-3 group-hover:text-[#133661] transition-colors">{faq.question}</span>
                  <span className="w-5 h-5 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[10px] text-[#0B2545] group-open:rotate-180 group-open:bg-[#0B2545] group-open:text-white transition-all duration-200 shrink-0">
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
    </>
  );
}
