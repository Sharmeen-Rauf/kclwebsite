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
} from "@/content/ground-handling";
import { TurnaroundPlanner } from "@/components/sections/TurnaroundPlanner";
import { FlightPathDivider } from "@/components/ui/FlightPathDivider";
import { HeroVideoBackground } from "@/components/ui/HeroVideoBackground";
import { ServiceHowAndSupportSection } from "@/components/sections/ServiceHowAndSupportSection";
import { WhyKclSection } from "@/components/sections/WhyKclSection";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Ground Handling Coordination | Pakistan, Middle East & Africa | KCL",
  description:
    "Aircraft, passenger, baggage and cargo handling, fuelling coordination and turnaround management across Pakistan, the Middle East, Asia, and Africa.",
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
  const faqLd = buildFaqJsonLd(GROUND_HANDLING_FAQS.slice(0, 6));
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ground Handling Coordination",
    serviceType: "Aviation Ground Handling Coordination",
    description:
      "Aircraft, passenger, baggage and cargo handling, fuelling coordination and turnaround management across Pakistan, the Middle East, Asia, and Africa.",
    provider: {
      "@type": "Organization",
      name: "Kashmir Corporation (Private) Limited",
      url: "https://kclwebsite.vercel.app",
    },
    areaServed: ["Asia", "Middle East", "Africa"],
  };

  const visibleFaqs = GROUND_HANDLING_FAQS.slice(0, 6);
  const coreServices = GROUND_HANDLING_SERVICES.slice(0, 5);
  const supportedFlights = GROUND_HANDLING_FLIGHTS_SUPPORTED.slice(0, 4);

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
          SECTION 1 — HERO (Compact Height 520 to 560px on Desktop, Animated Visuals)
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[520px] lg:min-h-[560px] py-12 lg:py-14 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <HeroVideoBackground
            src="/Airliner_turnaround_ground_opera_6bd387ba.mp4"
            poster="/img/services/02-ground.webp"
            alt="Aircraft ramp ground handling, apron marshalling and turnaround operations at international airport"
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

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.16] tracking-tight mx-auto mb-3">
              Ground Handling Coordination
            </h1>

            <p className="text-base sm:text-lg font-semibold text-slate-100 max-w-2xl mx-auto leading-relaxed">
              We arrange aircraft, passenger, baggage and cargo handling through trusted partners at the airport, and keep you updated from arrival to departure.
            </p>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto">
              Whether you operate a commercial passenger turnaround, an urgent cargo flight or a technical fuel stop, KCL coordinates every ramp service with verified airport providers under one operations desk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/request-flight-support?service=ground-handling"
                className="relative overflow-hidden bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] font-bold text-sm min-h-[44px] px-7 py-3 inline-flex items-center justify-center rounded-[2px] transition-all shadow-md hover:shadow-lg gap-2 group"
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
              24/7 urgent escalation line
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE COORDINATE (Cards with Animated Borders & Duotone)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-4">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
              What We Coordinate
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Core apron and passenger handling elements coordinated through qualified handling partners across Pakistan, the Middle East, Asia, and Africa.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 pb-2 sm:pb-0 scrollbar-none">
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

                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 82vw"
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

                <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                  <p className="text-xs sm:text-sm text-[#475569] leading-snug line-clamp-2">
                    {service.summary}
                  </p>

                  <div className="pt-2 border-t border-[#CBD5E1]/60">
                    <Link
                      href={service.href}
                      className="text-xs font-bold text-[#0B2545] group-hover:text-[#133661] hover:underline underline-offset-2 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Request handling</span>
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
          SECTION 3 — TURNAROUND PLANNER (Interactive, Compact Output & Direct Strip)
          ========================================================================= */}
      <section id="turnaround-planner" className="scroll-mt-16 py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <TurnaroundPlanner />
        </div>
      </section>

      {/* Subtle Airway Path Divider */}
      <FlightPathDivider variant="curve-up" className="my-2 bg-white" />

      <ServiceHowAndSupportSection
        timelineHeading="How Your Ground Handling Is Arranged"
        timelineSubheading="Structured operations liaison connecting dispatch teams with certified apron handlers."
        steps={[
          {
            badge: "You",
            isYou: true,
            title: "Send Aircraft & Schedule Details",
            detail:
              "Provide registration, aircraft type, station ICAO, arrival/departure schedule in UTC, and needed ramp services.",
          },
          {
            badge: "KCL Desk",
            title: "Check Station Handling & Equipment",
            detail:
              "We verify ramp stand allocation, GPU/ASU requirements, pushback tugs, and staff availability with licensed handlers.",
          },
          {
            badge: "KCL Desk",
            title: "Issue Handling Briefing & Confirmations",
            detail:
              "Receive handler VHF frequencies, station supervisor contacts, and ramp confirmation numbers for crew OFP.",
          },
          {
            badge: "KCL Desk",
            title: "Coordinate Schedule Variations",
            detail:
              "If en-route delays or slot adjustments occur, our 24/7 desk realigns local ground resources instantly.",
          },
          {
            badge: "You",
            isYou: true,
            title: "Stay Informed Through Departure",
            detail:
              "We track chocks-on to chocks-off, ensuring safe turnarounds and prompt documentation departure messages.",
          },
        ]}
        supportHeading="Flights We Support"
        supportSubheading="Whatever you fly, we arrange the ground side."
        supportCards={supportedFlights.map((flight) => ({
          title: flight.title,
          description: flight.description,
          href: `/request-flight-support?service=ground-handling&flightType=${flight.flightType}`,
          ctaLabel: "Request handling",
        }))}
      />

      <WhyKclSection
        subheading="We bring proven aviation operations discipline to airport ground handling coordination."
        cards={[
          {
            kicker: "Escalation",
            title: "24/7 urgent escalation line",
            description:
              "Operations Controller monitoring flight progress, schedule revisions and station communications.",
            pulse: true,
          },
          {
            kicker: "Regional network",
            title: "Asia, Middle East & Africa",
            description:
              "Working relationships with licensed airport handlers and ramp service providers across our launch regions.",
          },
          {
            kicker: "Unified channel",
            title: "One point of contact",
            description:
              "Single operations channel synchronizing landing permits, parking slots, fueling and handling without scattered supplier communication.",
          },
          {
            kicker: "Group founded 1947",
            title: "Kashmirwala Group",
            description:
              "Part of the Kashmirwala Group, founded in 1947, providing reliable operational continuity.",
          },
        ]}
      />

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
              Clear answers to common questions about ground handling coordination, requirements and operational procedures.
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

      {/* =========================================================================
          SECTION 7 — FINAL CTA BAND (One Only)
          ========================================================================= */}
      <CtaBanner
        eyebrow="Ground Handling Coordination"
        heading="Arrange Your Ground Handling Coordination"
        subheading="Send your flight date, station ICAO, aircraft type, and needed services to discuss handling arrangements."
        primaryLabel="Request Handling Support"
        primaryHref="/request-flight-support?service=ground-handling"
      />
    </>
  );
}
