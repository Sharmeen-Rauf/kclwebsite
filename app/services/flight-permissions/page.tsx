import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import {
  JsonLd,
  buildOrganizationJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from "@/components/seo/JsonLd";
import { RoutePermitPlanner } from "@/components/sections/RoutePermitPlanner";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FlightPathDivider } from "@/components/ui/FlightPathDivider";
import { ComplementaryServicesSlider } from "@/components/sections/ComplementaryServicesSlider";
import { ServiceHowAndSupportSection } from "@/components/sections/ServiceHowAndSupportSection";
import { WhyKclSection } from "@/components/sections/WhyKclSection";
import { INTERNATIONAL_PERMIT_FAQS } from "@/content/faqs";

export const metadata = buildMetadata({
  title: "Worldwide Overflight & Landing Permits | KCL",
  description:
    "KCL coordinates international overflight and landing permit requests for airlines, charter, cargo and private aircraft, with 24/7 operations support.",
  path: "/services/flight-permissions",
  omitTitleSuffix: true,
});

const PERMIT_TYPES = [
  {
    name: "Overflight Permits",
    image: "/img/services/01-permits.webp",
    alt: "Cockpit flight deck waypoint navigation display for overflight permit transit",
    summary: "Airspace entry, transit and exit clearances along designated ATS airways.",
    actionHref: "/services/overflight-permits",
  },
  {
    name: "Landing Permits",
    image: "/img/services/08-slots.webp",
    alt: "Airport runway approach lights and air traffic tower for landing clearance",
    summary: "Destination aerodrome approvals for commercial, technical or cargo stops.",
    actionHref: "/services/landing-permits",
  },
  {
    name: "Airport Slots & PPR",
    image: "/img/services/02-ground.webp",
    alt: "Airport ramp parking stand and aircraft ground turnaround coordination",
    summary: "Runway arrival slots and parking authorizations coordinated with airport operators.",
    actionHref: "/services/airport-slot-coordination",
  },
  {
    name: "Block & Seasonal Permits",
    image: "/img/services/07-dispatch.webp",
    alt: "Flight planning dispatch desk with route maps and seasonal timetable charts",
    summary: "Consolidated timetable filings for scheduled airline rotations and flight series.",
    actionHref: "/schedule-filing",
  },
  {
    name: "Short-Notice Clearances",
    image: "/img/services/06-ops.webp",
    alt: "24/7 flight operations center monitoring urgent clearance requests",
    summary: "Rapid coordination for urgent, diplomatic, medevac or schedule-revised flights.",
    actionHref: "/services/operations-support",
  },
];

const FLIGHTS_WE_SUPPORT = [
  {
    title: "Commercial Airlines",
    description: "Published airline schedules, seasonal timetable filings, and regular commercial airway transit.",
    href: "/schedule-filing",
  },
  {
    title: "Charter & Non-Scheduled",
    description: "Ad-hoc passenger charters, sports team shuttles, leisure tours, and VIP movements.",
    href: "/non-schedule-filing",
  },
  {
    title: "Cargo Operators",
    description: "Scheduled freighters, outsized project cargo, and logistics charters requiring landing clearances.",
    href: "/request-flight-support?service=flight-permissions&flightType=cargo",
  },
  {
    title: "Executive Aviation",
    description: "Corporate flight departments, private charters, and governmental delegations needing confidential routing.",
    href: "/request-flight-support?service=flight-permissions&flightType=private",
  },
];

export default function FlightPermissionsPage() {
  const organizationLd = buildOrganizationJsonLd();
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Flight Permissions", path: "/services/flight-permissions" },
  ]);
  const visibleFaqs = INTERNATIONAL_PERMIT_FAQS.slice(0, 6);
  const faqLd = buildFaqJsonLd(visibleFaqs);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Worldwide Overflight & Landing Permits",
    serviceType: "Aviation Flight Permission Coordination",
    description:
      "KCL coordinates international overflight and landing permit requests for airlines, charter, cargo and private aircraft, with 24/7 operations support.",
    provider: {
      "@type": "Organization",
      name: "Kashmir Corporation (Pvt.) Ltd. - KCL",
      url: process.env.NEXT_PUBLIC_SITE_URL || "https://kclwebsite.vercel.app",
    },
    areaServed: "Worldwide",
  };

  return (
    <>
      <JsonLd data={[organizationLd, breadcrumbLd, faqLd, serviceLd]} />
      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          { name: "Flight Permissions", path: "/services/flight-permissions" },
        ]}
      />

      {/* =========================================================================
          SECTION 1 — HERO (Shared InnerHero Styling)
          ========================================================================= */}
      <InnerHero
        title="International Overflight & Landing Permit Services"
        subtitle="Your Route. The Right Permissions. One Team to Coordinate."
        description="From routine airline operations to short-notice charter flights, KCL coordinates overflight, landing, and special permit requests with civil aviation authorities worldwide."
        imageSrc="/img/services/01-permits.webp"
        imageAlt="International flight permits cockpit navigation display"
        buttons={[
          {
            label: "Request a Flight Permit",
            href: "/request-flight-support",
            variant: "primary",
          },
          {
            label: "Plan Route Permits",
            href: "#route-permit-planner",
            variant: "outline",
          },
        ]}
        snapshotRows={[
          { label: "Permit types", value: "Overflight, landing, block, short-notice" },
          { label: "Flights", value: "Scheduled and non-scheduled" },
          { label: "Operations desk", value: "24/7" },
        ]}
      />

      {/* Operational Chips Strip Below Hero */}
      <section
        aria-label="Operational capabilities"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3 py-1 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3 py-1 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
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
          SECTION 2 — PERMIT CATEGORIES (Five Cards + Internal Links)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-4">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
              The Right Permission for Every Operation
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Overflight and landing approvals synchronized across sovereign FIRs and destination airports.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-4 pb-2 sm:pb-0 scrollbar-none">
            {PERMIT_TYPES.map((item) => (
              <div
                key={item.name}
                className="snap-center shrink-0 w-[82vw] sm:w-auto group relative bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] overflow-hidden flex flex-col justify-between hover:border-[#0B2545] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Top Animated Shimmer Border Accent */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B2545] via-[#38BDF8] to-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                />

                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.alt}
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
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                  <p className="text-xs sm:text-sm text-[#475569] leading-snug line-clamp-2">
                    {item.summary}
                  </p>

                  <div className="pt-2 border-t border-[#CBD5E1]/60">
                    <Link
                      href={item.actionHref}
                      className="text-xs font-bold text-[#0B2545] group-hover:text-[#133661] hover:underline underline-offset-2 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore permit</span>
                      <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Internal links to directory and regional guides */}
          <div className="mt-6 pt-4 border-t border-[#CBD5E1]/60 flex flex-wrap items-center justify-between gap-3 text-sm text-[#475569]">
            <span>
              Looking for specific sovereign entry guidelines and airway requirements?
            </span>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-[#0B2545]">
              <Link href="/permit-directory" className="hover:underline underline-offset-2 inline-flex items-center gap-1">
                Browse Global Permit Directory <span aria-hidden="true">→</span>
              </Link>
              <span className="text-[#94A3B8]" aria-hidden="true">·</span>
              <Link href="/pakistan/flight-permissions" className="hover:underline underline-offset-2 inline-flex items-center gap-1">
                Pakistan Flight Permissions Guide <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Airway Path Divider */}
      <FlightPathDivider variant="curve-down" className="my-2 bg-[#F8FAFC]" />

      {/* =========================================================================
          SECTION 3 — ROUTE PERMIT PLANNER & COMPLEMENTARY SERVICES
          ========================================================================= */}
      <section id="route-permit-planner" className="scroll-mt-16 py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <RoutePermitPlanner />

          {/* Unique Complementary Services Cards Slider */}
          <ComplementaryServicesSlider currentServiceSlug="flight-permissions" />
        </div>
      </section>

      {/* Subtle Airway Path Divider */}
      <FlightPathDivider variant="curve-up" className="my-2 bg-white" />

      <ServiceHowAndSupportSection
        timelineHeading="How Your Permit Is Coordinated"
        timelineSubheading="Structured civil aviation liaison from dossier preparation to clearance validation."
        steps={[
          {
            badge: "You",
            isYou: true,
            title: "Send Flight & Route Details",
            detail:
              "Submit registration, aircraft type, route waypoints, UTC schedule, and operating purpose.",
          },
          {
            badge: "KCL Desk",
            title: "Review Lead Times & Compliance",
            detail:
              "We verify sovereign notice windows, authority requirements, and required aircraft documentation.",
          },
          {
            badge: "KCL Desk",
            title: "Submit Through Authority Channels",
            detail:
              "Direct filing with Civil Aviation Authorities and local aerodrome operators.",
          },
          {
            badge: "KCL Desk",
            title: "Validate & Transmit Clearance",
            detail:
              "Clearance numbers and validity windows are verified and transmitted directly to your flight dispatch.",
          },
          {
            badge: "You",
            isYou: true,
            title: "Operate with Active Flight Watch",
            detail:
              "Our 24/7 desk monitors flight progress and coordinates revisions if en-route delays occur.",
          },
        ]}
        supportHeading="Flights We Support"
        supportSubheading="Permit coordination tailored for every mission profile."
        supportCards={FLIGHTS_WE_SUPPORT.map((flight) => ({
          title: flight.title,
          description: flight.description,
          href: flight.href,
          ctaLabel: "Request permit",
          image: "/img/services/01-permits.webp",
        }))}
      />

      <WhyKclSection
        subheading="Decades of international dispatch discipline and continuous flight support operations."
        cards={[
          {
            kicker: "Round the clock",
            title: "24/7 operations desk",
            description:
              "Continuous watch officers processing urgent clearances and re-routings across all time zones.",
            image: "/img/services/06-ops.webp",
            pulse: true,
          },
          {
            kicker: "Direct filing",
            title: "Direct CAA channels",
            description:
              "Established direct communication channels with Civil Aviation Authorities.",
            image: "/img/services/01-permits.webp",
          },
          {
            kicker: "Unified channel",
            title: "One point of contact",
            description:
              "Synchronized permits, handling, fuel, and layovers without fragmented communications.",
            image: "/img/services/07-dispatch.webp",
          },
          {
            kicker: "Since 1947",
            title: "Kashmirwala Group",
            description:
              "Decades of leadership in commercial air transport and airline representation, providing reliable operational stability.",
            image: "/img/hero-flight-ops.jpg",
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
              Frequently Asked Questions: Flight Permits
            </h2>
            <p className="text-sm text-[#475569]">
              Clear answers regarding overflight permits, landing clearances, lead times, and required documentation.
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
        heading="Coordinate Your Flight Permissions With Confidence"
        subheading="Send your flight schedule, aircraft details, and route waypoints to discuss permit lead times and submission."
        primaryLabel="Request a Flight Permit"
        primaryHref="/request-flight-support"
      />
    </>
  );
}