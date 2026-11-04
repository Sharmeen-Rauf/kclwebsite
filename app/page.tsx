import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { QuickPermitRequestCard } from "@/components/sections/QuickPermitRequestCard";
import { PermitChecker } from "@/components/sections/PermitChecker";
import { RequestTrackerPreview } from "@/components/sections/RequestTrackerPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  PRIMARY_SERVICES_DATA,
} from "@/content/services";
import { REAL_CLIENTS } from "@/content/clients";
import { HOME_FAQS } from "@/content/faqs";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title:
    "International Flight Permissions & Overflight Permits | AFPA Authorized Agent | KCL",
  description:
    "Overflight and landing permits for schedule and non-schedule flights worldwide, with handling, catering, fuel and crew hotels arranged by Kashmir Corporation (Pvt.) Ltd. in Pakistan.",
  path: "/",
  omitTitleSuffix: true,
});

const BENTO_SERVICES = [
  {
    number: "01",
    title: "Flight Permission Facilitation",
    description:
      "Overflight and landing permits for schedule and non-schedule flights. KCL coordinates applications; civil aviation authorities retain approval authority.",
    href: "/services/overflight-permits",
    image: "/img/services/01-permits.webp",
    alt: "Flight deck waypoint navigation and international flight permission coordination",
    gridSpan: "lg:col-span-2 lg:row-span-2 md:col-span-2 min-h-[380px] lg:min-h-full",
    sizes: "(min-width: 1024px) 50vw, (min-width: 768px) 100vw, 100vw",
    isLarge: true,
  },
  {
    number: "02",
    title: "Ground Handling Coordination",
    description:
      "Ramp, baggage, servicing and crew assistance, coordinated at the airport.",
    href: "/services/ground-handling",
    image: "/img/services/02-ground.webp",
    alt: "Airport ramp ground handling and aircraft turnaround operations",
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[260px]",
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    isLarge: false,
  },
  {
    number: "03",
    title: "Inflight Catering Coordination",
    description:
      "Crew and passenger meals arranged around your aircraft and schedule.",
    href: "/services/inflight-catering",
    image: "/img/services/03-catering.webp",
    alt: "Aviation inflight catering and aircraft galley meal arrangements",
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[260px]",
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    isLarge: false,
  },
  {
    number: "04",
    title: "Aviation Fuel Supply",
    description:
      "Fuel arrangements coordinated with approved suppliers for your arrival and departure.",
    href: "/services/aviation-fuel",
    image: "/img/services/04-fuel.webp",
    alt: "Aviation fuel supply and tarmac hydrant dispensing coordination",
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[260px]",
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    isLarge: false,
  },
  {
    number: "05",
    title: "Crew Logistics & Layover",
    description: "Hotels and transport for crews on layover.",
    href: "/services/crew-logistics",
    image: "/img/services/05-crew.webp",
    alt: "Flight crew layover logistics, hotel accommodation and ground transport",
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[260px]",
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    isLarge: false,
  },
  {
    number: "06",
    title: "24/7 Operations Support",
    description:
      "An operations desk for route changes and short-notice requests.",
    href: "/services/operations-support",
    image: "/img/services/06-ops.webp",
    alt: "24/7 flight operations control center and dispatch tracking desk",
    gridSpan: "lg:col-span-2 md:col-span-2 min-h-[260px]",
    sizes: "(min-width: 1024px) 50vw, (min-width: 768px) 100vw, 100vw",
    isLarge: true,
  },
  {
    number: "07",
    title: "Flight Planning & Dispatch",
    description: "Planning and dispatch coordination aligned with your permits.",
    href: "/services/flight-planning-dispatch",
    image: "/img/services/07-dispatch.webp",
    alt: "Flight dispatch briefing room with aeronautical route charts",
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[260px]",
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    isLarge: false,
  },
  {
    number: "08",
    title: "Airport Slot Coordination",
    description:
      "Slot requests and timing coordinated alongside landing permits.",
    href: "/services/airport-slot-coordination",
    image: "/img/services/08-slots.webp",
    alt: "Airport air traffic control tower overlooking illuminated runways at dusk",
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[260px]",
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    isLarge: false,
  },
];

export default function HomePage() {
  const marqueeLoopGroup = [
    ...REAL_CLIENTS,
    ...REAL_CLIENTS,
    ...REAL_CLIENTS,
  ];

  return (
    <>
      <JsonLd data={buildFaqJsonLd(HOME_FAQS)} />

      {/* 1. Split Hero with Quick Permit Request Panel (min 640px / max 820px, 48px top padding) */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[640px] lg:max-h-[820px] pt-12 pb-12 flex items-center">
        {/* Background Aircraft / Ramp Photo with Left-to-Right Navy Gradient (85% to 35%) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero-flight-ops.jpg"
            alt="Commercial aircraft and business jet on an international airport ramp with ground support equipment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/85 via-[#0B2545]/60 to-[#0B2545]/35" />
          {/* Very faint route line-art background (no chart box, flight levels, or airway codes) */}
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
            <circle cx="515" cy="340" r="4" fill="#FFFFFF" />
            <circle cx="775" cy="275" r="4" fill="#FFFFFF" />
            <circle cx="885" cy="145" r="4" fill="#FFFFFF" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Vertically Centered Hero Headline, Subtext & Two Outline Buttons */}
            <div className="lg:col-span-7 space-y-4 my-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-white leading-[1.16] tracking-tight max-w-xl">
                International Flight Permissions, Filed and Followed Up by an
                AFPA Authorized Agent
              </h1>

              <p className="text-sm sm:text-[15px] text-slate-200 leading-relaxed max-w-xl">
                Overflight and landing permits for schedule and non-schedule
                flights, with handling, catering, fuel and crew hotels arranged
                by the same desk.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="#permit-checker"
                  className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-5 py-2.5 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  Check Requirements
                </Link>
                <a
                  href="/files/kcl-permit-request-checklist.pdf"
                  download
                  className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-5 py-2.5 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  Download Checklist
                </a>
              </div>
            </div>

            {/* Right: Translucent Frosted Quick Permit Request Card with 3px --accent Top Border */}
            <div className="lg:col-span-5">
              <QuickPermitRequestCard />
            </div>
          </div>
        </div>
      </section>

      {/* Separate Credentials Row Above Logo Marquee */}
      <section
        aria-label="Operational Credentials"
        className="bg-[#F6F8FB] border-b border-[#CBD5E1] py-3"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-xs font-bold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3 py-1.5 rounded-[2px]">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              AFPA Authorized
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3 py-1.5 rounded-[2px]">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              24/7 Ops Desk
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3 py-1.5 rounded-[2px]">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Schedule &amp; Non-Schedule
            </span>
          </div>
        </div>
      </section>

      {/* "Trusted by operators" Infinite Slow Logo Marquee Section */}
      <section
        aria-label="Trusted by operators"
        className="bg-white border-b border-[#CBD5E1] py-5 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="shrink-0 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#B88200]">
                Trusted by operators
              </span>
              <span
                className="hidden md:inline-block h-4 w-px bg-[#CBD5E1]"
                aria-hidden="true"
              />
            </div>

            <div className="relative flex-1 overflow-hidden">
              <div className="logo-marquee-track items-center">
                {/* First identical half */}
                <div className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14">
                  {marqueeLoopGroup.map((client, idx) => (
                    <Link
                      key={`marquee-a-${client.icao}-${idx}`}
                      href="/clients"
                      title={`${client.name} (${client.icao})`}
                      className="shrink-0 inline-flex items-center justify-center px-3 py-1.5 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 focus-visible:grayscale-0 focus-visible:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={client.logo}
                        alt={client.alt}
                        width={140}
                        height={40}
                        className="h-8 sm:h-9 w-auto object-contain"
                      />
                    </Link>
                  ))}
                </div>

                {/* Second identical half for seamless -50% loop */}
                <div
                  aria-hidden="true"
                  className="flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14"
                >
                  {marqueeLoopGroup.map((client, idx) => (
                    <Link
                      key={`marquee-b-${client.icao}-${idx}`}
                      href="/clients"
                      tabIndex={-1}
                      title={`${client.name} (${client.icao})`}
                      className="shrink-0 inline-flex items-center justify-center px-3 py-1.5 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    >
                      <Image
                        src={client.logo}
                        alt=""
                        width={140}
                        height={40}
                        className="h-8 sm:h-9 w-auto object-contain"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Operational Services (Primary Reference: kclpk.org/Services.html) */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
                CORE OPERATIONAL SERVICES · KCL FLIGHT SUPPORT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                The Support Behind a Well-Planned Flight
              </h2>
              <p className="text-[#16202B] text-base leading-relaxed">
                Every itinerary brings together permissions, airport
                arrangements, flight planning, slot coordination, aircraft
                requirements and crew needs. Rather than treating these as
                isolated tasks, KCL coordinates core operational services so
                dispatchers and flight operations teams can plan with clarity.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/schedule-filing"
                className="kcl-btn-outline-navy px-4 py-2.5 min-h-[44px] text-sm font-semibold inline-flex items-center rounded-[2px]"
              >
                Scheduled Filing →
              </Link>
              <Link
                href="/non-schedule-filing"
                className="kcl-btn-outline-navy px-4 py-2.5 min-h-[44px] text-sm font-semibold inline-flex items-center rounded-[2px]"
              >
                Non-Scheduled &amp; Charter Filing →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
            {BENTO_SERVICES.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className={`group relative overflow-hidden rounded-[6px] border border-white/20 flex flex-col justify-between p-6 sm:p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-white motion-reduce:transition-none ${service.gridSpan}`}
              >
                {/* Full-bleed background photo */}
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes={service.sizes}
                  className="object-cover object-center group-hover:scale-[1.04] group-focus-visible:scale-[1.04] motion-safe:transition-transform motion-safe:duration-500 ease-out motion-reduce:transform-none"
                />

                {/* Navy gradient overlay (about 85% at bottom, 35% at top, darkens slightly on hover/focus) */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/60 to-[#0B2545]/35 group-hover:from-[#0B2545]/95 group-hover:via-[#0B2545]/75 group-hover:to-[#0B2545]/45 group-focus-visible:from-[#0B2545]/95 group-focus-visible:via-[#0B2545]/75 group-focus-visible:to-[#0B2545]/45 transition-colors duration-300"
                />

                {/* Top-left: Mono number badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-[2px] inline-block tracking-wider">
                    {service.number}
                  </span>
                </div>

                {/* Bottom: Service title + one-line description + sliding 'Learn more →' */}
                <div className="relative z-10 space-y-2 mt-auto pt-8">
                  <h3
                    className={`${
                      service.isLarge
                        ? "text-2xl sm:text-[24px]"
                        : "text-xl sm:text-[22px]"
                    } font-semibold text-white leading-tight`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-slate-200 font-normal leading-relaxed">
                    {service.description}
                  </p>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-focus-visible:opacity-100 sm:group-focus-visible:translate-y-0 motion-safe:transition-all motion-safe:duration-300 motion-reduce:transform-none">
                      Learn more <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
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
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
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
              <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
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
                className="kcl-btn-outline-navy px-4 py-2.5 min-h-[44px] text-sm font-semibold inline-flex items-center rounded-[2px]"
              >
                Pakistan Flight Permissions →
              </Link>
              <Link
                href="/services"
                className="kcl-btn-outline-navy px-4 py-2.5 min-h-[44px] text-sm font-semibold inline-flex items-center rounded-[2px]"
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

      {/* 5. Where We Support — Worldwide Operational Coverage */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
                GLOBAL REACH · LOCAL SPECIALIZATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Where We Support
              </h2>
              <p className="text-[#16202B] text-base leading-relaxed">
                Operating across key international aviation corridors, KCL
                coordinates overflight and landing permits, ground handling,
                fuel supply, catering, and crew logistics worldwide—led by
                established in-depth specialization across Pakistan airspace
                (OPKR &amp; OPLR FIRs).
              </p>
            </div>
            <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-3.5 rounded-[2px] max-w-sm">
              <span className="text-xs font-mono font-bold text-[#B88200] block mb-1">
                OPERATIONAL NOTE
              </span>
              <p className="text-xs text-[#5C6B7A] leading-snug">
                Specific countries and partners are confirmed per itinerary.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                region: "Africa",
                detail:
                  "Trans-continental routes, technical stops & commercial clearances",
              },
              {
                region: "Middle East",
                detail:
                  "Gulf corridors, turnaround coordination & regional overflights",
              },
              {
                region: "Europe",
                detail:
                  "East–West international traffic, slot liaison & seasonal filings",
              },
              {
                region: "Asia",
                detail:
                  "South, East & Central Asia airspace & airport coordination",
              },
              {
                region: "North & South America",
                detail:
                  "Long-haul flight planning, transatlantic & transpacific routing",
              },
              {
                region: "The Caribbean",
                detail:
                  "Island transit, private charter & seasonal destination support",
              },
            ].map((item) => (
              <div
                key={item.region}
                className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-4 flex flex-col justify-between space-y-2.5"
              >
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-[#B88200] tracking-wider block">
                    REGION
                  </span>
                  <h3 className="text-base font-bold text-[#0B2545] mt-1">
                    {item.region}
                  </h3>
                </div>
                <p className="text-xs text-[#5C6B7A] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#0B2545] text-white p-6 rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs text-[#F4C400] font-bold block">
                SPECIALIST ANCHOR · KARACHI (OPKR) &amp; LAHORE (OPLR) FIRs
              </span>
              <p className="text-sm text-slate-100 max-w-2xl">
                Operating into or through Pakistan? Our local desk handles
                scheduled filings, non-scheduled clearances, and airport
                turnarounds directly with civil aviation authorities.
              </p>
            </div>
            <Link
              href="/pakistan/flight-permissions"
              className="kcl-btn-outline-white shrink-0 min-h-[44px] px-5 py-2.5 text-xs font-mono font-bold inline-flex items-center justify-center rounded-[2px] whitespace-nowrap"
            >
              Explore Pakistan Hub →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. How Coordination Works & Heritage / Pakistan Specialization */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              OPERATIONAL COORDINATION PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              How Coordination Works
            </h2>
            <RequestTrackerPreview />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="kcl-card lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
                  PAKISTAN SPECIALIZATION &amp; INTERNATIONAL TRIP SUPPORT
                </span>
                <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
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
                  className="kcl-link text-[#0B2545]"
                >
                  Pakistan Flight Permissions →
                </Link>
                <Link
                  href="/services/overflight-permit-pakistan"
                  className="kcl-link text-[#0B2545]"
                >
                  Pakistan Overflight Guide →
                </Link>
                <Link
                  href="/services/landing-permit-pakistan"
                  className="kcl-link text-[#0B2545]"
                >
                  Pakistan Landing Guide →
                </Link>
              </div>
            </div>

            <div className="kcl-card lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
                  CORPORATE HERITAGE · KASHMIRWALA GROUP (1947)
                </span>
                <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
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
                  className="kcl-link text-[#0B2545]"
                >
                  About KCL &amp; Heritage →
                </Link>
                <Link
                  href="/aviation-resources"
                  className="kcl-link text-[#0B2545]"
                >
                  Aviation Resources →
                </Link>
                <Link
                  href="/insights"
                  className="kcl-link text-[#0B2545]"
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
              <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
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
                  className="kcl-card p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] transition-colors"
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
                  className="kcl-card p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] transition-colors"
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
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
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
