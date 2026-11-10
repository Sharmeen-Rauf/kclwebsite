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
import { CONTACT_DATA } from "@/content/contact";
import {
  GROUND_HANDLING_SERVICES,
  GROUND_HANDLING_FAQS,
  GROUND_HANDLING_FLIGHTS_SUPPORTED,
  GROUND_HANDLING_RELATED_SERVICES,
} from "@/content/ground-handling";
import { TurnaroundPlanner } from "@/components/sections/TurnaroundPlanner";
import { GroundHandlingFaqAccordion } from "@/components/sections/GroundHandlingFaqAccordion";
import { GroundHandlingLogoSlider } from "@/components/sections/GroundHandlingLogoSlider";

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
          {/* Faint airway route line-art */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              How Your Ground Handling Is Arranged
            </h2>
            <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
              Our operations desk coordinates your station requirements with certified handling partners, keeping communication structured and direct.
            </p>
          </div>

          {/* Two-lane timeline */}
          <div className="space-y-4 max-w-4xl">
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  1
                </span>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                    You send the aircraft, airport and schedule
                  </h3>
                  <p className="text-sm sm:text-base text-[#16202B]">
                    Provide aircraft registration, aircraft type, destination ICAO code, estimated arrival and departure times in UTC, and the services you need.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-[#0B2545] bg-white border border-[#CBD5E1] px-3 py-1 rounded-[2px] shrink-0 self-start sm:self-center">
                YOU
              </span>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  2
                </span>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                    We contact the handling partners and confirm availability
                  </h3>
                  <p className="text-sm sm:text-base text-[#16202B]">
                    Our operations team engages licensed handling agents at the destination airport to verify parking, ground support equipment, and staff coverage.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-white bg-[#0B2545] px-3 py-1 rounded-[2px] shrink-0 self-start sm:self-center">
                KCL
              </span>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  3
                </span>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                    We share the confirmed arrangements with your team
                  </h3>
                  <p className="text-sm sm:text-base text-[#16202B]">
                    You receive confirmed handling agent contacts, apron coordination details, and confirmation numbers for dispatch briefings and crew files.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-white bg-[#0B2545] px-3 py-1 rounded-[2px] shrink-0 self-start sm:self-center">
                KCL
              </span>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  4
                </span>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                    We relay schedule changes to the station as they happen
                  </h3>
                  <p className="text-sm sm:text-base text-[#16202B]">
                    If your flight incurs enroute delays or early arrivals, our 24/7 desk coordinates directly with the local ramp team to adjust equipment and turnaround timings.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-white bg-[#0B2545] px-3 py-1 rounded-[2px] shrink-0 self-start sm:self-center">
                KCL
              </span>
            </div>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-sm shrink-0">
                  5
                </span>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2545]">
                    You receive updates until departure
                  </h3>
                  <p className="text-sm sm:text-base text-[#16202B]">
                    Our operations desk tracks turnaround milestones from chocks-on through fueling and boarding to safe chocks-off departure.
                  </p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-[#0B2545] bg-white border border-[#CBD5E1] px-3 py-1 rounded-[2px] shrink-0 self-start sm:self-center">
                YOU
              </span>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] p-4 rounded-[4px] max-w-4xl">
            <p className="text-xs sm:text-sm text-[#5C6B7A] leading-relaxed">
              <strong>Notice:</strong> Handling is carried out by licensed handling companies at each airport. Availability depends on airport procedures and provider notice.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — WHO WE HELP (Flights We Support)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Flights We Support
            </h2>
            <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
              We arrange ground handling coordination tailored to the mission profile of each aircraft category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GROUND_HANDLING_FLIGHTS_SUPPORTED.map((flight) => (
              <div
                key={flight.title}
                className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-3 shadow-xs hover:border-[#0B2545] transition-colors"
              >
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                    {flight.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#5C6B7A]">
                    {flight.subtitle}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  {flight.description}
                </p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GROUND_HANDLING_RELATED_SERVICES.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-5 space-y-2 hover:border-[#0B2545] hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6B7A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0B2545] group-hover:underline underline-offset-4 inline-flex items-center gap-1 pt-2">
                  <span>Explore service</span>
                  <span aria-hidden="true">→</span>
                </span>
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
            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-2 shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                01
              </span>
              <h3 className="text-lg font-bold text-[#0B2545]">
                24/7 operations desk
              </h3>
              <p className="text-sm text-[#5C6B7A] leading-relaxed">
                Round-the-clock coordination team monitoring flight progress, schedule revisions and station communications across all time zones.
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-2 shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                02
              </span>
              <h3 className="text-lg font-bold text-[#0B2545]">
                Global network of ground handling partners
              </h3>
              <p className="text-sm text-[#5C6B7A] leading-relaxed">
                Established working relationships with certified airport handlers and ramp service providers internationally.
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-2 shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                03
              </span>
              <h3 className="text-lg font-bold text-[#0B2545]">
                One point of contact for permits and airport services
              </h3>
              <p className="text-sm text-[#5C6B7A] leading-relaxed">
                Single operations channel synchronizing landing permits, parking slots, fueling and handling without scattered supplier communication.
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-2 shadow-xs">
              <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-xs mb-3">
                04
              </span>
              <h3 className="text-lg font-bold text-[#0B2545]">
                Part of the Kashmirwala Group, serving aviation since 1947
              </h3>
              <p className="text-sm text-[#5C6B7A] leading-relaxed">
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

      {/* =========================================================================
          SECTION 10 — FINAL CTA BAND (One Only)
          ========================================================================= */}
      <section className="py-14 sm:py-18 bg-[#0B2545] text-white relative overflow-hidden">
        {/* Subtle background route art */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -bottom-14 sm:-bottom-10 opacity-[0.05] text-white"
        >
          <svg className="w-80 h-80 sm:w-96 sm:h-96" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Make the Ground Arrangements Part of the Plan.
            </h2>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Send us your aircraft type, airport and UTC schedule.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/request-flight-support?service=ground-handling"
              className="bg-white hover:bg-slate-100 text-[#0B2545] font-bold text-sm sm:text-base min-h-[48px] px-8 py-3.5 rounded-[2px] transition-colors text-center inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Request Ground Handling</span>
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href={`tel:${CONTACT_DATA.primaryPhone.replace(/\s+/g, "")}`}
              className="kcl-btn-outline-white min-h-[48px] px-7 py-3.5 font-semibold text-sm sm:text-base inline-flex items-center justify-center gap-2"
            >
              <span>Call the Ops Desk</span>
            </a>
          </div>

          {/* Contact Details from /content/contact.ts */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-300">
            <div>
              <span className="text-slate-400 block text-[11px] font-mono uppercase">Operations Desk:</span>
              <a
                href={`mailto:${CONTACT_DATA.opsEmail}`}
                className="text-white font-mono font-semibold hover:underline"
              >
                {CONTACT_DATA.opsEmail}
              </a>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px] font-mono uppercase">Primary Phone (24/7):</span>
              <a
                href={`tel:${CONTACT_DATA.primaryPhone.replace(/\s+/g, "")}`}
                className="text-white font-mono font-semibold hover:underline"
              >
                {CONTACT_DATA.primaryPhone}
              </a>
            </div>

            <div>
              <span className="text-slate-400 block text-[11px] font-mono uppercase">Secondary Phone:</span>
              <a
                href={`tel:${CONTACT_DATA.secondaryPhone.replace(/\s+/g, "")}`}
                className="text-white font-mono font-semibold hover:underline"
              >
                {CONTACT_DATA.secondaryPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

