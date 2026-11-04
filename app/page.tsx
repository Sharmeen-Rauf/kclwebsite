import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { QuickPermitRequestCard } from "@/components/sections/QuickPermitRequestCard";
import { PermitChecker } from "@/components/sections/PermitChecker";
import { RequestTrackerPreview } from "@/components/sections/RequestTrackerPreview";
import { REAL_CLIENTS } from "@/content/clients";
import { HOME_FAQS } from "@/content/faqs";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";
import { newsRepository } from "@/lib/data/news-repository";
import { FlightPathDivider } from "@/components/ui/FlightPathDivider";

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
    gridSpan: "lg:col-span-2 lg:row-span-2 md:col-span-2 min-h-[260px] sm:min-h-[290px] lg:min-h-full",
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
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[175px] sm:min-h-[185px]",
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
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[175px] sm:min-h-[185px]",
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
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[175px] sm:min-h-[185px]",
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
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[175px] sm:min-h-[185px]",
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
    gridSpan: "lg:col-span-2 md:col-span-2 min-h-[175px] sm:min-h-[185px]",
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
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[175px] sm:min-h-[185px]",
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
    gridSpan: "lg:col-span-1 md:col-span-1 min-h-[175px] sm:min-h-[185px]",
    sizes: "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw",
    isLarge: false,
  },
];

const QUICK_TOOLS = [
  {
    name: "UTC / PKT Time Converter",
    desc: "Convert flight schedule timestamps between Zulu / UTC and Pakistan Standard Time.",
    href: "/tools/utc-pkt-converter",
  },
  {
    name: "ICAO Phonetic Alphabet",
    desc: "Standard radiotelephony spelling alphabet, Morse codes, and callsign pronunciation.",
    href: "/tools/icao-phonetic-alphabet",
  },
  {
    name: "Aircraft Registration Prefixes",
    desc: "Searchable nationality marks and country codes for international civil aircraft.",
    href: "/tools/aircraft-registration-prefixes",
  },
  {
    name: "Airport Code Lookup",
    desc: "Search 4-letter ICAO and 3-letter IATA aerodrome codes worldwide using open data.",
    href: "/tools/airport-code-lookup",
  },
];

export default async function HomePage() {
  const allPosts = await newsRepository.getAllPosts();
  const featuredPosts = [
    allPosts.find((p) => p.slug === "overflight-permit-vs-landing-permit") || {
      slug: "overflight-permit-vs-landing-permit",
      title: "Overflight Permit vs Landing Permit: What’s the Difference?",
      category: "Regulatory Guides",
      date: "2026-11-04",
      readingTime: "4 min read",
      excerpt:
        "The operational differences between sovereign airspace transit permits and aerodrome landing authorizations, including lead times and filing requirements.",
    },
    allPosts.find((p) => p.slug === "schedule-vs-non-schedule-filing-explained") || {
      slug: "schedule-vs-non-schedule-filing-explained",
      title: "Scheduled vs Non-Scheduled Flight Permits Explained",
      category: "Dispatch Operations",
      date: "2026-10-22",
      readingTime: "5 min read",
      excerpt:
        "How airline network planners and charter dispatchers determine whether an overflight or landing request falls under scheduled or non-scheduled procedures.",
    },
    allPosts.find((p) => p.slug === "what-to-send-with-a-permit-request") || {
      slug: "what-to-send-with-a-permit-request",
      title: "What to Send With a Flight Permit Request: A Dispatcher’s Checklist",
      category: "Checklists",
      date: "2026-10-29",
      readingTime: "4 min read",
      excerpt:
        "A practical pre-submission checklist of route data, UTC timings, and aircraft certificates for dispatchers requesting overflight or landing permits.",
    },
  ];

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
            className="object-cover object-center hero-zoom-photo"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/70 to-[#14406E]/45" />
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
              className="airway-route-line"
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
      <section className="py-10 sm:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div className="max-w-3xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
                CORE OPERATIONAL SERVICES · KCL FLIGHT SUPPORT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                The Support Behind a Well-Planned Flight
              </h2>
              <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
                Every itinerary brings together permissions, airport
                arrangements, flight planning, slot coordination, aircraft
                requirements and crew needs. Rather than treating these as
                isolated tasks, KCL coordinates core operational services so
                dispatchers and flight operations teams can plan with clarity.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/schedule-filing"
                className="kcl-btn-outline-navy px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold inline-flex items-center rounded-[2px]"
              >
                Scheduled Filing →
              </Link>
              <Link
                href="/non-schedule-filing"
                className="kcl-btn-outline-navy px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold inline-flex items-center rounded-[2px]"
              >
                Non-Scheduled &amp; Charter Filing →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 auto-rows-fr">
            {BENTO_SERVICES.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className={`group relative overflow-hidden rounded-[6px] border border-white/20 flex flex-col justify-between p-4 sm:p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white hover:-translate-y-1 focus-visible:-translate-y-1 transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${service.gridSpan}`}
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
                  <span className="font-mono text-[11px] font-semibold text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-0.5 rounded-[2px] inline-block tracking-wider">
                    {service.number}
                  </span>
                </div>

                {/* Bottom: Service title + one-line description + sliding 'Learn more →' */}
                <div className="relative z-10 space-y-1.5 mt-auto pt-4">
                  <h3
                    className={`${
                      service.isLarge
                        ? "text-lg sm:text-xl lg:text-[22px]"
                        : "text-base sm:text-[17px]"
                    } font-semibold text-white leading-tight`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[13px] sm:text-[13.5px] text-slate-200/90 font-normal leading-snug line-clamp-2">
                    {service.description}
                  </p>
                  <div className="pt-0.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-1.5 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-focus-visible:opacity-100 sm:group-focus-visible:translate-y-0 motion-safe:transition-all motion-safe:duration-200 motion-reduce:transform-none">
                      Learn more <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FlightPathDivider variant="curve-down" />

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
              Get Your Flight Details Ready Before You Inquire
            </h2>
            <p className="text-[#16202B] text-base leading-relaxed">
              Choose your operation type and the service you need. We’ll show the
              details our operations desk typically asks for, so your request can
              be reviewed faster.
            </p>
            <p className="text-xs text-[#5C6B7A] pt-1">
              This guide helps you prepare. Approvals and timelines are decided by
              the relevant civil aviation authorities.
            </p>
          </div>

          <PermitChecker />
        </div>
      </section>

      <FlightPathDivider variant="curve-up" />

      {/* 4. Where We Support — Worldwide Operational Coverage */}
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
                image: "/img/regions/africa.webp",
                alt: "African trans-continental flight route at sunset",
              },
              {
                region: "Middle East",
                detail:
                  "Gulf corridors, turnaround coordination & regional overflights",
                image: "/img/regions/middle-east.webp",
                alt: "Middle East international transit hub apron at twilight",
              },
              {
                region: "Europe",
                detail:
                  "East–West international traffic, slot liaison & seasonal filings",
                image: "/img/regions/europe.webp",
                alt: "High altitude European airspace corridor at dusk",
              },
              {
                region: "Asia",
                detail:
                  "South, East & Central Asia airspace & airport coordination",
                image: "/img/regions/asia.webp",
                alt: "Asian aerodrome runway and aircraft parking lights at night",
              },
              {
                region: "North & South America",
                detail:
                  "Long-haul flight planning, transatlantic & transpacific routing",
                image: "/img/regions/americas.webp",
                alt: "Long-haul flight over sunset cloud layer",
              },
              {
                region: "The Caribbean",
                detail:
                  "Island transit, private charter & seasonal destination support",
                image: "/img/regions/caribbean.webp",
                alt: "Caribbean coastal aerodrome and turquoise water approach",
              },
            ].map((item, index) => (
              <div
                key={item.region}
                className="group relative overflow-hidden rounded-[4px] border border-white/20 p-5 flex flex-col justify-between min-h-[250px] shadow-sm hover:border-white/50 transition-all duration-300"
              >
                {/* Full-bleed background photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-500 ease-out"
                />

                {/* Navy gradient overlay so text is 100% crisp and readable */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B2545]/95 via-[#0B2545]/70 to-[#0B2545]/40 group-hover:from-[#0B2545]/95 group-hover:via-[#0B2545]/75 group-hover:to-[#0B2545]/50 transition-colors duration-300"
                />

                {/* Card Top: Region number */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase font-bold text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 px-2 py-0.5 rounded-[2px] tracking-wider">
                    {`0${index + 1}`}
                  </span>
                </div>

                {/* Card Bottom: Region name + description */}
                <div className="relative z-10 space-y-1.5 mt-auto pt-6">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {item.region}
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#0B2545] text-white p-6 rounded-[2px] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div>
                <span className="font-mono text-xs text-[#F4C400] font-bold block mb-1">
                  SPECIALIST ANCHOR · KARACHI (OPKR) &amp; LAHORE (OPLR) FIRs
                </span>
                <p className="text-sm text-slate-100 max-w-2xl leading-relaxed">
                  Operating into or through Pakistan? Our local desk handles
                  scheduled filings, non-scheduled clearances, and airport
                  turnarounds directly with civil aviation authorities.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-200 pt-1 border-t border-slate-700/60">
                <Link
                  href="/pakistan/flight-permissions"
                  className="hover:text-white hover:underline underline-offset-4"
                >
                  Pakistan Flight Permissions →
                </Link>
                <span className="text-slate-500">·</span>
                <Link
                  href="/services/overflight-permit-pakistan"
                  className="hover:text-white hover:underline underline-offset-4"
                >
                  Pakistan Overflight Guide →
                </Link>
                <span className="text-slate-500">·</span>
                <Link
                  href="/services/landing-permit-pakistan"
                  className="hover:text-white hover:underline underline-offset-4"
                >
                  Pakistan Landing Guide →
                </Link>
              </div>
            </div>
            <Link
              href="/pakistan/flight-permissions"
              className="kcl-btn-outline-white shrink-0 min-h-[44px] px-5 py-2.5 text-xs font-mono font-bold inline-flex items-center justify-center rounded-[2px] whitespace-nowrap self-start md:self-center"
            >
              Explore Pakistan Hub →
            </Link>
          </div>
        </div>
      </section>

      <FlightPathDivider variant="curve-down" />

      {/* 5. How Coordination Works */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              How Coordination Works
            </h2>
          </div>
          <RequestTrackerPreview />
        </div>
      </section>

      <FlightPathDivider variant="curve-up" />

      {/* 6. Aviation Resources */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              AVIATION RESOURCES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Practical Guides for Flight Operations Teams
            </h2>
            <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
              Short, plain-language guides on permits and trip planning, written for dispatchers and operations teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 2/3 width: 3 Article Cards */}
            <div className="lg:col-span-8 space-y-4">
              {featuredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545] p-6 rounded-[2px] transition-colors flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5 text-xs">
                      <span className="font-semibold text-[#B88200] uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-[#5C6B7A]">·</span>
                      <time dateTime={post.date} className="text-[#5C6B7A]">
                        {post.date}
                      </time>
                      <span className="text-[#5C6B7A]">·</span>
                      <span className="text-[#5C6B7A]">{post.readingTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B2545] leading-snug">
                      <Link
                        href={`/insights/${post.slug}`}
                        className="hover:underline underline-offset-4"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-[15px] text-[#5C6B7A] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/insights/${post.slug}`}
                      className="text-[15px] font-semibold text-[#0B2545] group-hover:text-[#B88200] hover:underline underline-offset-4 inline-flex items-center gap-1.5 transition-colors"
                    >
                      Read guide <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Right 1/3 width: Quick Tools Panel with subtle yellow top border */}
            <div className="lg:col-span-4">
              <div className="border border-[#CBD5E1] border-t-2 border-t-[#F4C400] bg-[#F6F8FB] p-6 rounded-[2px] space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-[#0B2545]">
                    Quick Tools
                  </h3>
                  <p className="text-[15px] text-[#5C6B7A] mt-1 leading-relaxed">
                    Free operational reference utilities for international dispatchers and flight crews.
                  </p>
                </div>

                <div className="space-y-3">
                  {QUICK_TOOLS.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545] p-4 rounded-[2px] transition-colors block space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-[#0B2545]">
                        <h4 className="text-[15px] font-bold group-hover:text-[#B88200] group-hover:underline underline-offset-2 transition-colors">
                          {tool.name}
                        </h4>
                        <span
                          aria-hidden="true"
                          className="text-[#0B2545] group-hover:text-[#B88200] transition-all group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                      <p className="text-[15px] text-[#5C6B7A] leading-snug">
                        {tool.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="pt-6 border-t border-[#CBD5E1] flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/insights"
              className="text-base font-bold text-[#0B2545] hover:text-[#B88200] hover:underline underline-offset-4 inline-flex items-center gap-1.5 transition-colors"
            >
              View all guides <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/tools"
              className="text-base font-bold text-[#0B2545] hover:text-[#B88200] hover:underline underline-offset-4 inline-flex items-center gap-1.5 transition-colors"
            >
              View all tools <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <FlightPathDivider variant="curve-down" />

      {/* 7. Frequently Asked Questions */}
      <section className="py-14 sm:py-20 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-bold block">
                FAQS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545]">
                Frequently Asked Questions
              </h2>
              <p className="text-[15px] sm:text-base text-[#5C6B7A]">
                Still have a question about flight support, permit lead times, or ground operations?
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-[#0B2545] hover:bg-[#133661] text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors self-start md:self-auto shadow-2xs"
            >
              <span>↗</span> Let&apos;s talk
            </Link>
          </div>

          <FaqAccordion items={HOME_FAQS} initialVisibleCount={6} />
        </div>
      </section>
    </>
  );
}
