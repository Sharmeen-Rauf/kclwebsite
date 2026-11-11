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
import { PermitRequirementSelector } from "@/components/sections/PermitRequirementSelector";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FlightPathDivider } from "@/components/ui/FlightPathDivider";
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
    href: "/request-flight-support?permitType=landing",
  },
  {
    title: "Executive Aviation",
    description: "Corporate flight departments, private charters, and governmental delegations needing confidential routing.",
    href: "/request-flight-support?permitType=both",
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
          { name: "Flight Permissions", path: "/services/flight-permissions" },
        ]}
      />

      {/* =========================================================================
          SECTION 1 — HERO (Compact Height 520 to 560px on Desktop, Animated Visuals)
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[520px] lg:min-h-[560px] py-12 lg:py-14 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/services/01-permits.webp"
            alt="International flight permits cockpit navigation display"
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

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.16] tracking-tight mx-auto mb-3">
              International Overflight &amp; Landing Permit Services
            </h1>

            <p className="text-base sm:text-lg font-semibold text-slate-100 max-w-2xl mx-auto leading-relaxed">
              Your Route. The Right Permissions. One Team to Coordinate.
            </p>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto">
              From routine airline operations to short-notice charter flights, KCL coordinates overflight, landing, and special permit requests with civil aviation authorities worldwide.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href="/request-flight-support"
                className="relative overflow-hidden bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] font-bold text-sm min-h-[44px] px-7 py-3 inline-flex items-center justify-center rounded-[2px] transition-all shadow-md hover:shadow-lg gap-2 group"
              >
                <span className="animate-btn-shimmer" />
                <span>Request a Flight Permit</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
              </Link>
              <a
                href="#permit-selector"
                className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] hover:bg-white/15 transition-all"
              >
                Check Document Requirements
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
          SECTION 2 — PERMIT CATEGORIES (Cards with Animated Borders & Duotone)
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
                {/* Top Animated Shimmer Border Accent with Gold Glow */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
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
        </div>
      </section>

      {/* Subtle Airway Path Divider */}
      <FlightPathDivider variant="curve-down" className="my-2 bg-[#F8FAFC]" />

      {/* =========================================================================
          SECTION 3 — INTERACTIVE SELECTOR (Compact Output & Complementary Strip)
          ========================================================================= */}
      <section id="permit-selector" className="scroll-mt-16 py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <PermitRequirementSelector />

          {/* Complementary Services Single Line */}
          <div className="pt-3 border-t border-[#CBD5E1]/60 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-[#5C6B7A]">
            <span className="font-semibold text-[#0B2545]">We can also arrange:</span>
            <Link href="/services/ground-handling" className="text-[#0B2545] font-semibold hover:underline">Ground Handling</Link>
            <span>·</span>
            <Link href="/services/aviation-fuel" className="text-[#0B2545] font-semibold hover:underline">Fuel</Link>
            <span>·</span>
            <Link href="/services/crew-logistics" className="text-[#0B2545] font-semibold hover:underline">Crew Hotels</Link>
            <span>·</span>
            <Link href="/services/airport-slot-coordination" className="text-[#0B2545] font-semibold hover:underline">Airport Slots</Link>
          </div>
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
            {/* Left Column: Timeline */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-4">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Operational Timeline</span>
                <h2 className="text-2xl font-bold text-[#0B2545]">How Your Permit Is Coordinated</h2>
                <p className="text-sm text-[#475569] mt-1">
                  Structured civil aviation liaison from dossier preparation to clearance validation.
                </p>
              </div>

              <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#CBD5E1]">
                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-white border-2 border-[#0B2545] flex items-center justify-center text-[10px] font-bold text-[#0B2545] group-hover:scale-110 transition-transform">
                    1
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#F1F5F9] text-[#0B2545]">You</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Send Flight &amp; Route Details</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Submit registration, aircraft type, route waypoints, UTC schedule, and operating purpose.
                  </p>
                </div>

                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
                    2
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#0B2545] text-white">KCL Desk</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Review Lead Times &amp; Compliance</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    We verify sovereign notice windows, bilateral air agreements, and required aircraft documentation.
                  </p>
                </div>

                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
                    3
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#0B2545] text-white">KCL Desk</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Submit Through Authority Channels</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Direct filing with Civil Aviation Authorities, air defense watch desks, and local aerodrome operators.
                  </p>
                </div>

                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
                    4
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#0B2545] text-white">KCL Desk</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Validate &amp; Transmit Clearance</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Clearance numbers and validity windows are verified and transmitted directly to your flight dispatch.
                  </p>
                </div>

                <div className="relative space-y-1 group">
                  <div className="absolute -left-[27px] top-1 w-5 h-5 rounded-full bg-white border-2 border-[#0B2545] flex items-center justify-center text-[10px] font-bold text-[#0B2545] group-hover:scale-110 transition-transform">
                    5
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-[2px] bg-[#F1F5F9] text-[#0B2545]">You</span>
                    <h3 className="text-sm font-bold text-[#0B2545]">Operate with Active Flight Watch</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                    Our 24/7 desk monitors flight progress and coordinates revisions if en-route delays occur.
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
                  Permit coordination tailored for every mission profile.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {FLIGHTS_WE_SUPPORT.map((flight) => (
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
                        href={flight.href}
                        className="text-xs font-bold text-[#0B2545] hover:underline underline-offset-2 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Request permit</span>
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
                Proven civil aviation authority relationships and international dispatch discipline since 1947.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-1.5 shadow-2xs hover:shadow-xs transition-all duration-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Round-the-clock</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <h3 className="text-base font-bold text-[#0B2545]">24/7 operations desk</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Continuous watch officers processing urgent clearances and re-routings across all time zones.
                </p>
                <div className="pt-2">
                  <div className="w-6 h-0.5 bg-[#0B2545]/20 group-hover:bg-[#F4C400] group-hover:w-12 rounded-full transition-all duration-300" />
                </div>
              </div>

              <div className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-1.5 shadow-2xs hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Direct Filing</span>
                <h3 className="text-base font-bold text-[#0B2545]">Direct CAA channels</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Established direct communication with Civil Aviation Authorities and air traffic control centers.
                </p>
                <div className="pt-2">
                  <div className="w-6 h-0.5 bg-[#0B2545]/20 group-hover:bg-[#F4C400] group-hover:w-12 rounded-full transition-all duration-300" />
                </div>
              </div>

              <div className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-5 space-y-1.5 shadow-2xs hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Unified Channel</span>
                <h3 className="text-base font-bold text-[#0B2545]">One point of contact</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Synchronized permits, handling, fuel, and layovers without fragmented communications.
                </p>
                <div className="pt-2">
                  <div className="w-6 h-0.5 bg-[#0B2545]/20 group-hover:bg-[#F4C400] group-hover:w-12 rounded-full transition-all duration-300" />
                </div>
              </div>

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
