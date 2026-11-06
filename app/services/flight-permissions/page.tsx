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
import { PermitRequirementSelector } from "@/components/sections/PermitRequirementSelector";
import { GlobalCoverageMap } from "@/components/sections/GlobalCoverageMap";
import { PermitFaqAccordion } from "@/components/sections/PermitFaqAccordion";
import { INTERNATIONAL_PERMIT_FAQS } from "@/content/faqs";

export const metadata = buildMetadata({
  title: "Overflight & Landing Permits Worldwide | KCL",
  description:
    "Overflight permits, landing permits, PPR, block permits and short-notice clearance for international flights. One team, 24/7 support.",
  path: "/services/flight-permissions",
  omitTitleSuffix: true,
});

const PERMITS_WE_HANDLE = [
  {
    title: "Overflight permits",
    description:
      "Permission for an aircraft to cross a country's airspace without landing.",
    detail:
      "Essential for commercial airliners, cargo transports, and private aircraft transiting foreign Flight Information Regions (FIRs). We coordinate diplomatic clearances, ATS route validation, and entry-exit waypoint approvals with sovereign civil aviation authorities worldwide.",
    href: "/services/overflight-permits",
    linkText: "Learn about overflight permits",
  },
  {
    title: "Landing permits",
    description:
      "Approval to land at an international destination, for scheduled or non-scheduled flights.",
    detail:
      "Required for passenger disembarkation, commercial cargo handling, technical refueling stops, or scheduled service turnarounds. We liaise directly with national civil aviation authorities and aerodrome coordinators to secure valid landing numbers within published lead times.",
    href: "/services/landing-permits",
    linkText: "Learn about landing permits",
  },
  {
    title: "PPR coordination",
    description:
      "Prior Permission Required approvals arranged with airport authorities before arrival.",
    detail:
      "Many international airports enforce strict PPR requirements due to ramp congestion, parking apron limitations, or peak traffic windows. We file your arrival time, confirm ramp availability, and synchronize your PPR with slot coordinators prior to departure.",
    href: "/services/airport-slot-coordination",
    linkText: "Explore slot & PPR coordination",
  },
  {
    title: "Block permits",
    description:
      "One authorisation covering several flights for regular or seasonal operations.",
    detail:
      "Ideal for airline series, recurring charter programs, seasonal flight series, and scheduled rotations. Rather than filing repetitive single-trip applications, we secure consolidated block permits that minimize administrative workload and protect long-term schedule stability.",
    href: "/schedule-filing",
    linkText: "Review schedule & block filing",
  },
  {
    title: "Short-notice clearance",
    description:
      "Fast coordination for urgent and last-minute flights.",
    detail:
      "When unexpected flight requirements, emergency turnarounds, technical aircraft diversions, or urgent customer commitments arise, our 24/7 operations desk mobilizes immediate liaison channels to secure short-notice clearances within authority working hours.",
    href: "/services/operations-support",
    linkText: "Contact our 24/7 operations desk",
  },
  {
    title: "Diplomatic, diverted and ad-hoc flights",
    description:
      "Support when plans change.",
    detail:
      "Managing diplomatic and state aircraft clearances through foreign ministries, unexpected weather diversions, emergency technical stops, and unscheduled medical diversions. We assist dispatchers in redirecting flight routing and re-filing clearances promptly.",
    href: "/non-schedule-filing",
    linkText: "View ad-hoc flight procedures",
  },
];

const TIMELINE_STEPS = [
  {
    step: "1",
    lane: "You",
    actor: "Flight Dispatcher / Operator",
    title: "You send the flight details",
    description:
      "Submit your route, estimated UTC schedule, aircraft registration, operator certificate, and required destination or transit services through our desk.",
  },
  {
    step: "2",
    lane: "KCL",
    actor: "KCL Operations Desk",
    title: "We check documents and routing",
    description:
      "Our team reviews the airworthiness papers, insurance validity, ATS airway points, lead times, and specific authority prerequisites for every FIR on your itinerary.",
  },
  {
    step: "3",
    lane: "KCL",
    actor: "KCL Authority Liaison",
    title: "We submit and follow up with the authorities",
    description:
      "We prepare official application dossiers, submit through verified civil aviation authority channels, track file numbers, and follow up actively day and night.",
  },
  {
    step: "4",
    lane: "You",
    actor: "Flight Operations Control",
    title: "You receive the permit and updates",
    description:
      "Official clearance confirmation numbers, validity windows, routing remarks, and complete ATC briefing documents are delivered directly to your OCC desk.",
  },
  {
    step: "5",
    lane: "KCL (Optional)",
    actor: "Integrated Ground Services",
    title: "Optional: we arrange handling, fuel and crew hotels",
    description:
      "Directly connect your permit with on-tarmac ground handling, fuel release orders, airport slot confirmations, and crew hotel layovers under one team.",
  },
];

const CONNECTED_SERVICES = [
  {
    name: "Ground handling",
    href: "/services/ground-handling",
    desc: "Complete ramp, passenger, baggage, and cargo handling arranged through trusted ground service agents worldwide.",
  },
  {
    name: "Aviation fuel",
    href: "/services/aviation-fuel",
    desc: "Jet A1, TS1, and Avgas supply coordination with timely fuel release vouchers and credit facilities at international airports.",
  },
  {
    name: "Flight planning and dispatch",
    href: "/services/flight-planning-dispatch",
    desc: "Optimized route planning, weather briefing packages, NOTAM analysis, ICAO flight plan filing, and ETOPS/EDTO calculation support.",
  },
  {
    name: "Airport slot coordination",
    href: "/services/airport-slot-coordination",
    desc: "Pre-arrival slot timing, airport capacity requests, and coordinator alignment synchronized directly with your flight permit approvals.",
  },
  {
    name: "Crew hotels and transport",
    href: "/services/crew-logistics",
    desc: "Layover hotel reservations near airports, dedicated ground transportation, and secure crew transfers for flight crews.",
  },
  {
    name: "Inflight catering",
    href: "/services/inflight-catering",
    desc: "High-standard airline and VIP galley catering, customized dietary meals, and hygienic delivery directly to the aircraft.",
  },
];

const FLIGHTS_WE_SUPPORT = [
  {
    title: "Scheduled airlines",
    desc: "Seasonal timetable filings, scheduled overflight permits, block clearances, and international route frequency changes.",
  },
  {
    title: "Charter operators",
    desc: "Commercial passenger charters, group tours, sports team shuttles, and non-scheduled leisure operations.",
  },
  {
    title: "Cargo carriers",
    desc: "Heavy freighters, dangerous goods transport, project cargo shipments, and international logistical air bridge flights.",
  },
  {
    title: "Private and business aviation",
    desc: "Corporate jets, executive aircraft, owner flights, and high-net-worth VIP movements requiring discreet, rapid handling.",
  },
  {
    title: "Air ambulance flights",
    desc: "Time-critical aeromedical evacuations, patient transfers, and humanitarian flights with expedited authority clearances.",
  },
  {
    title: "Diplomatic, diverted and ad-hoc flights",
    desc: "Government and state aircraft missions, technical ferry flights, unexpected weather diversions, and emergency reroutes.",
  },
];

const WHY_OPERATORS_WORK_WITH_KCL = [
  {
    title: "24/7 support with a quick response",
    detail:
      "Aviation never stops. Our operations desk is manned continuously 24 hours a day, 365 days a year, ensuring urgent inquiries and route adjustments receive immediate operational attention without delay.",
  },
  {
    title: "Direct coordination with civil aviation authorities and airport operators",
    detail:
      "We liaise through established, authorized regulatory channels, working directly with civil aviation authorities, air navigation service providers, and aerodrome managers across international jurisdictions.",
  },
  {
    title: "One team for permits and airport services",
    detail:
      "Eliminate communication silos between dispatchers, permit brokers, and tarmac handlers. A single point of contact at KCL coordinates your overflight clearances, landing numbers, fuel releases, and ground support.",
  },
  {
    title: "Part of the Kashmirwala Group, serving aviation since 1947",
    detail:
      "Backed by over seven decades of continuous aviation family leadership and airline representation, providing flight operators with trusted stability, institutional knowledge, and professional integrity.",
  },
];

export default function FlightPermissionsPage() {
  const organizationLd = buildOrganizationJsonLd();
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Flight Permissions", path: "/services/flight-permissions" },
  ]);
  const faqLd = buildFaqJsonLd(INTERNATIONAL_PERMIT_FAQS);
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "International Flight Permissions & Permits",
    serviceType: "Flight Permit Service",
    description:
      "Overflight permits, landing permits, PPR coordination, block permits and short-notice clearance for international flights worldwide.",
    provider: {
      "@type": "Organization",
      name: "Kashmir Corporation (Pvt.) Ltd. - KCL",
      url: "https://kclwebsite.vercel.app",
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flight Permit Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Overflight Permits",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Landing Permits",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PPR Coordination",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Short-Notice Flight Permissions",
          },
        },
      ],
    },
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

      {/* 1. Hero Section: Centered layout and font sizes matching Homepage hero */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[480px] lg:min-h-[520px] py-14 sm:py-20 flex items-center justify-center">
        {/* Full-bleed background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/services/01-permits.webp"
            alt="Cockpit flight deck instruments and waypoint map display during international overflight"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hero-zoom-photo"
          />
          {/* Balanced gradient overlay matching homepage */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/85 via-[#0B2545]/60 to-[#14406E]/35"
          />
          {/* Faint airway route line-art background */}
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

        {/* Content Container: Centered Heading, Para, and Buttons */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-white leading-[1.16] tracking-tight mx-auto">
              Overflight and Landing Permits for International Flights
            </h1>

            <p className="text-sm sm:text-[15px] lg:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
              We prepare your permit requests, follow them up with the aviation authorities and keep you updated, day or night. Short-notice flights welcome.
            </p>

            {/* Action Buttons Centered */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href="/request-flight-support"
                className="bg-[#0B2545] hover:bg-[#133661] text-white border-2 border-white min-h-[44px] px-6 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm"
              >
                <span>Request a Permit</span>
                <span aria-hidden="true" className="ml-1.5">→</span>
              </Link>
              <a
                href="#what-you-need"
                className="kcl-btn-outline-white min-h-[44px] px-6 py-2.5 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                See What You Need
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Separate Credentials Row Below Hero (Styled Exactly like Homepage) */}
      <section
        aria-label="Operational Credentials"
        className="bg-[#F6F8FB] border-b border-[#CBD5E1] py-3.5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-[13px] font-bold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              24/7 operations desk
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Short-notice requests
            </span>
          </div>
        </div>
      </section>

      {/* 2. Permits We Handle: Six simple cards (title and one line each, one link per card) */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              The Permits We Coordinate
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2 max-w-3xl leading-relaxed">
              International flight operations involve distinct clearance categories depending on airspace boundaries, arrival purposes, and flight schedules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERMITS_WE_HANDLE.map((item) => (
              <div
                key={item.title}
                className="bg-[#F6F8FB] border border-[#CBD5E1] rounded-[6px] p-6 flex flex-col justify-between space-y-4 hover:border-[#0B2545] transition-colors"
              >
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                    {item.title}
                  </h3>
                  <p className="text-base font-semibold text-[#16202B] leading-snug">
                    {item.description}
                  </p>
                  <p className="text-base text-[#5C6B7A] leading-relaxed pt-1">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#CBD5E1]/60">
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-[#0B2545] hover:text-[#133661] underline underline-offset-4 inline-flex items-center gap-1.5"
                  >
                    <span>{item.linkText}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What You Need to Send (interactive selector) */}
      <section
        id="what-you-need"
        className="scroll-mt-20 py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              What You Need to Send
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] leading-relaxed max-w-3xl">
              Choose your type of flight to see what we usually ask for. Having this ready helps us move faster.
            </p>
          </div>

          <PermitRequirementSelector />
        </div>
      </section>

      {/* 4. How It Works: Two-lane timeline ("You" / "KCL") */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              How Your Permit Request Is Handled
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2 max-w-3xl leading-relaxed">
              From your initial routing message to confirmed civil aviation clearances, every step follows a structured two-lane workflow.
            </p>
          </div>

          <div className="relative border-l-2 border-[#CBD5E1] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
            {TIMELINE_STEPS.map((s) => {
              const isYou = s.lane.includes("You");
              return (
                <div key={s.step} className="relative group">
                  {/* Step node icon */}
                  <div
                    aria-hidden="true"
                    className={`absolute -left-[41px] sm:-left-[49px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-xs ${
                      isYou
                        ? "bg-[#0B2545] text-white ring-4 ring-white"
                        : "bg-white text-[#0B2545] border-2 border-[#0B2545] ring-4 ring-white"
                    }`}
                  >
                    {s.step}
                  </div>

                  <div className="bg-[#F6F8FB] border border-[#CBD5E1] rounded-[6px] p-6 space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-base font-bold text-[#0B2545]">
                        Stage {s.step} · Lane: {s.lane}
                      </span>
                      <span className="text-base font-semibold text-[#5C6B7A]">
                        {s.actor}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                      {s.title}
                    </h3>
                    <p className="text-base text-[#16202B] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-5 rounded-[4px]">
            <p className="text-base font-medium text-[#5C6B7A] text-center">
              Approvals are decided by the civil aviation authority of each country.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Where We Support: Schematic World Map & Country Guides */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlobalCoverageMap />
        </div>
      </section>

      {/* 6. Everything Around the Permit: One Team, Every Service */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              One Team, Every Service
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2 max-w-3xl leading-relaxed">
              Permits represent only one part of an international flight. Coordinate your connected ground and flight support services under a single operations desk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONNECTED_SERVICES.map((service) => (
              <div
                key={service.name}
                className="bg-[#F6F8FB] border border-[#CBD5E1] rounded-[6px] p-6 flex flex-col justify-between space-y-4 hover:border-[#0B2545] transition-colors"
              >
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                    {service.name}
                  </h3>
                  <p className="text-base text-[#16202B] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href={service.href}
                    className="text-base font-semibold text-[#0B2545] hover:text-[#133661] underline underline-offset-4 inline-flex items-center gap-1.5"
                  >
                    <span>View service details</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Who We Help: Flights We Support */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Flights We Support
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2 max-w-3xl leading-relaxed">
              We coordinate flight permissions across diverse aircraft categories, operating rules, and mission profiles worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLIGHTS_WE_SUPPORT.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-2"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                  {item.title}
                </h3>
                <p className="text-base text-[#16202B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why KCL: Why Operators Work With KCL */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Why Operators Work With KCL
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2 max-w-3xl leading-relaxed">
              Built on decades of aviation operational experience, our desk provides clarity, dependable communication, and practical support for international flights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_OPERATORS_WORK_WITH_KCL.map((item) => (
              <div
                key={item.title}
                className="bg-[#F6F8FB] border border-[#CBD5E1] rounded-[6px] p-6 sm:p-7 space-y-2"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                  {item.title}
                </h3>
                <p className="text-base text-[#16202B] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ: Accordion + Text in HTML + FAQPage Schema */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#5C6B7A] mt-2 max-w-3xl leading-relaxed">
              Essential answers to frequent questions about overflight permits, landing approvals, lead times, and operational requirements.
            </p>
          </div>

          <PermitFaqAccordion />
        </div>
      </section>

      {/* 10. Final CTA Band (Navy): Planning an International Flight? */}
      <section className="py-16 sm:py-20 bg-[#0B2545] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Planning an International Flight?
            </h2>
            <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
              Send us your route and dates. We will confirm what you need and start on your permits.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/request-flight-support"
              className="bg-white hover:bg-slate-100 text-[#0B2545] font-semibold text-base px-7 py-3.5 rounded-[2px] transition-colors text-center inline-flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Request a Permit</span>
              <span aria-hidden="true">→</span>
            </Link>

            <a
              href={`tel:${CONTACT_DATA.primaryPhone.replace(/\s+/g, "")}`}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/40 font-semibold text-base px-6 py-3.5 rounded-[2px] transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call the Ops Desk</span>
            </a>
          </div>

          {/* Contact Details from /content/contact.ts */}
          <div className="pt-6 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-base text-slate-200">
            <div>
              <span className="block text-sm text-slate-300 font-semibold">
                Operations Email:
              </span>
              <a
                href={`mailto:${CONTACT_DATA.opsEmail}`}
                className="font-bold text-white hover:underline underline-offset-4 text-base"
              >
                {CONTACT_DATA.opsEmail}
              </a>
            </div>

            <div>
              <span className="block text-sm text-slate-300 font-semibold">
                Primary Phone (24/7):
              </span>
              <a
                href={`tel:${CONTACT_DATA.primaryPhone.replace(/\s+/g, "")}`}
                className="font-bold text-white hover:underline underline-offset-4 text-base"
              >
                {CONTACT_DATA.primaryPhone}
              </a>
            </div>

            <div>
              <span className="block text-sm text-slate-300 font-semibold">
                Secondary Phone:
              </span>
              <a
                href={`tel:${CONTACT_DATA.secondaryPhone.replace(/\s+/g, "")}`}
                className="font-bold text-white hover:underline underline-offset-4 text-base"
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
