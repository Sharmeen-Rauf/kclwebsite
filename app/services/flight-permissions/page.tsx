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
import { FlightPathDivider } from "@/components/ui/FlightPathDivider";
import { PermitRequirementSelector } from "@/components/sections/PermitRequirementSelector";
import { GlobalCoverageMap } from "@/components/sections/GlobalCoverageMap";
import { PermitFaqAccordion } from "@/components/sections/PermitFaqAccordion";
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
    number: "01",
    name: "Overflight Permits",
    summary:
      "Permission for an aircraft to enter, cross, and exit a sovereign nation's Flight Information Region (FIR) along designated ATS airways without making a physical landing.",
    typicalUseCase:
      "International long-haul commercial flights, cargo transit corridors, and intercontinental private jet ferry routes crossing multiple sovereign airspaces.",
    kclCoordinates:
      "Diplomatic clearance applications, ATS route validation, entry/exit fix synchronization, and active follow-up with sovereign civil aviation authorities.",
    actionLabel: "Learn about overflight permits",
    actionHref: "/services/overflight-permits",
  },
  {
    number: "02",
    name: "Landing Permits",
    summary:
      "Formal regulatory approval authorizing an international civil aircraft to land at a designated foreign aerodrome for scheduled, commercial, or private operations.",
    typicalUseCase:
      "Commercial passenger disembarkation, air cargo uplifting or discharge, technical refueling stops, crew rest layovers, and aircraft maintenance.",
    kclCoordinates:
      "Direct filing with destination civil aviation authorities, aerodrome operator coordination, landing number verification, and schedule slot synchronization.",
    actionLabel: "Learn about landing permits",
    actionHref: "/services/landing-permits",
  },
  {
    number: "03",
    name: "PPR Coordination",
    summary:
      "Prior Permission Required (PPR) authorization negotiated directly with airport operating authorities prior to aircraft departure.",
    typicalUseCase:
      "High-density international hubs, capacity-constrained airports, peak travel seasons, and aerodromes with limited overnight ramp or hangar parking.",
    kclCoordinates:
      "Submission of arrival/departure times, apron parking confirmation, ground handling verification, and local coordinator alignment before permit validation.",
    actionLabel: "Explore slot & PPR coordination",
    actionHref: "/services/airport-slot-coordination",
  },
  {
    number: "04",
    name: "Block Permits",
    summary:
      "A consolidated regulatory authorization covering a scheduled sequence or series of repeated flights across an extended operating season.",
    typicalUseCase:
      "Scheduled airline seasonal timetables, recurring corporate shuttle rotations, charter flight series, and weekly humanitarian relief operations.",
    kclCoordinates:
      "Seasonal timetable filings, fleet registration schedules, block permit renewal tracking, and bilateral air service agreement compliance checks.",
    actionLabel: "Review schedule & block filing",
    actionHref: "/schedule-filing",
  },
  {
    number: "05",
    name: "Short-Notice Clearances",
    summary:
      "Rapid authority coordination for urgent, last-minute, or schedule-revised flights required on short notice.",
    typicalUseCase:
      "Emergency spare part (AOG) delivery, urgent charter commitments, unexpected aircraft repositioning, and immediate schedule adjustments.",
    kclCoordinates:
      "24/7 expedited dossier preparation, direct operations desk contact with authority watch officers, and rapid transmission of validated clearance numbers.",
    actionLabel: "Contact our 24/7 operations desk",
    actionHref: "/services/operations-support",
  },
  {
    number: "06",
    name: "Special Flight Permissions",
    summary:
      "Clearances for non-standard operational profiles requiring diplomatic channels, ministry approvals, or non-standard civil authorizations.",
    typicalUseCase:
      "Diplomatic & state head delegations, air ambulance emergency medevac flights, technical ferry flights with expired C of A, and weather diversions.",
    kclCoordinates:
      "Embassy liaison, foreign ministry diplomatic note processing, medevac urgent clearance priority, and non-revenue ferry flight permissions.",
    actionLabel: "View special & ad-hoc procedures",
    actionHref: "/non-schedule-filing",
  },
];

const FLIGHTS_WE_SUPPORT_MATRIX = [
  {
    category: "Scheduled Airlines",
    typicalClearances: "Seasonal Block Overflight & Landing Authorizations",
    operatingFocus:
      "Published airline schedules, regional route additions, seasonal timetable changes, and regular commercial airway transit.",
    dispatchPriorities:
      "Bilateral agreement compliance, ICAO timetable filings, slot matching, and predictable long-term authority approvals.",
  },
  {
    category: "Charter & Non-Scheduled Flights",
    typicalClearances: "Single-Trip & Series Commercial Charter Approvals",
    operatingFocus:
      "Ad-hoc passenger charters, sports team shuttles, leisure tour operators, and group incentive movements.",
    dispatchPriorities:
      "Fast turnarounds, passenger manifest management, local handling confirmation, and short-notice revisions.",
  },
  {
    category: "Cargo Operators",
    typicalClearances: "Freighter Landing Permits & Dangerous Goods Authorizations",
    operatingFocus:
      "Scheduled main-deck cargo freighters, outsized project cargo, logistics charters, and humanitarian aid transport.",
    dispatchPriorities:
      "Air Waybill review, consignor/consignee validation, DGD hazardous cargo checks, and heavy ramp capability checks.",
  },
  {
    category: "Business & Private Aviation",
    typicalClearances: "Private & Corporate Overflight and Landing Clearances",
    operatingFocus:
      "Corporate flight departments, executive charter operators, owner-operated business jets, and VIP delegations.",
    dispatchPriorities:
      "High confidentiality, dedicated handling, FBO preferences, flexible departure windows, and swift crew authorizations.",
  },
  {
    category: "Technical Stops",
    typicalClearances: "Non-Traffic Technical Landing Clearances",
    operatingFocus:
      "Fuel stops on long transoceanic legs, crew change turnarounds, and technical aircraft maintenance stops.",
    dispatchPriorities:
      "Non-traffic declarations, rapid refueling coordination, quick turnaround slots, and minimum ground time.",
  },
  {
    category: "Air Ambulance & Medevac",
    typicalClearances: "Priority Emergency Aeromedical Clearances",
    operatingFocus:
      "Critical patient repatriations, organ donor transport, and life-support aeromedical evacuation missions.",
    dispatchPriorities:
      "24/7 emergency dispatch, expedited authority liaison, hospital landing approvals, and secure handling channels.",
  },
  {
    category: "Humanitarian & Special-Purpose",
    typicalClearances: "Relief Flight Exemptions & Ferry Permits",
    operatingFocus:
      "UN and NGO relief flights, natural disaster emergency cargo, technical ferry flights, and demonstration flights.",
    dispatchPriorities:
      "Fee exemption requests where eligible, special route approvals, and coordinated inter-agency approvals.",
  },
];

const COORDINATION_PROCESS_STEPS = [
  {
    step: "01",
    title: "Share Your Flight Details",
    operatorRole: "Operator Action",
    operatorTask:
      "Submit your planned route, aircraft registration and type, estimated UTC schedule, operator details, and required service scope through our desk.",
    kclRole: "KCL Action",
    kclTask:
      "Our 24/7 flight operations desk logs the mission, confirms receipt, and assigns a dedicated flight support coordinator.",
  },
  {
    step: "02",
    title: "Review the Requirements",
    operatorRole: "Operator Action",
    operatorTask:
      "Provide standard aircraft certificates (AOC, C of A, C of R, insurance) and applicable manifests requested for your specific route.",
    kclRole: "KCL Action",
    kclTask:
      "We check documentation completeness against the latest civil aviation authority requirements, verify ATS route waypoints, and confirm lead times.",
  },
  {
    step: "03",
    title: "Coordinate the Request",
    operatorRole: "Operator Action",
    operatorTask:
      "Remain on standby for any authority clarification requests or schedule revisions prompted by air traffic constraints.",
    kclRole: "KCL Action",
    kclTask:
      "We compile the formal application dossier, submit directly to the civil aviation authorities via official channels, and track the file actively.",
  },
  {
    step: "04",
    title: "Receive Updates and Next Steps",
    operatorRole: "Operator Action",
    operatorTask:
      "Receive confirmed clearance numbers and slot remarks directly into your operations control center (OCC) flight briefing pack.",
    kclRole: "KCL Action",
    kclTask:
      "We verify validity windows, communicate permit numbers, and optionally align your connected ground handling, fueling, and crew hotel layovers.",
  },
];

const RELATED_SERVICES = [
  {
    number: "01",
    name: "Ground Handling",
    href: "/services/ground-handling",
    desc: "Aircraft, passenger, baggage, and cargo ramp handling arranged through a trusted global network of handling agents.",
  },
  {
    number: "02",
    name: "Aviation Fuel",
    href: "/services/aviation-fuel",
    desc: "Fuel supply coordination for Jet A1, TS1, and Avgas, with timely delivery scheduling, fuel vouchers, and payment support.",
  },
  {
    number: "03",
    name: "Flight Planning & Dispatch",
    href: "/services/flight-planning-dispatch",
    desc: "Route optimization, ICAO flight plan filing, aeronautical weather analysis, NOTAM reviews, and ETOPS/EDTO planning.",
  },
  {
    number: "04",
    name: "Airport Slots & PPR",
    href: "/services/airport-slot-coordination",
    desc: "Airport slot reservation, capacity allocation requests, and local PPR approvals synchronized alongside permit clearances.",
  },
  {
    number: "05",
    name: "Crew Accommodation & Transport",
    href: "/services/crew-logistics",
    desc: "Airport-proximity crew hotel bookings, short-notice reservations, and secure airport-hotel-airport crew transfers.",
  },
  {
    number: "06",
    name: "Inflight Catering",
    href: "/services/inflight-catering",
    desc: "In-flight meal preparation and supply, special dietary requirements, and hygienic galley delivery for crew and passengers.",
  },
];

const WHY_KCL_POINTS = [
  {
    title: "International Coordination Network",
    detail:
      "Direct liaison with civil aviation authorities, air navigation service providers (ANSPs), and established local agents across Africa, the Middle East, Europe, Asia, the Americas, and the Caribbean.",
  },
  {
    title: "24/7 Operational Support",
    detail:
      "Continuous operations desk coverage across all international time zones to monitor active filings, handle urgent schedule revisions, and support diverted or ad-hoc flights without delay.",
  },
  {
    title: "Scheduled and Non-Scheduled Expertise",
    detail:
      "Comprehensive capabilities handling both long-term airline block filings and urgent ad-hoc charter, cargo, medevac, and private aviation permissions.",
  },
  {
    title: "Integrated Aviation Services",
    detail:
      "One team coordinating your overflight clearances, landing numbers, ground handling, fuel supply vouchers, airport slots, and crew layovers under a single operations desk.",
  },
  {
    title: "Kashmirwala Group Heritage Since 1947",
    detail:
      "Backed by more than seven decades of aviation family leadership, airline agency representation, and commercial air transport experience in the region.",
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
    name: "International Overflight & Landing Permit Services",
    serviceType: "Flight Permit Service",
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
          SECTION 1 — HERO
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[500px] lg:min-h-[540px] py-14 sm:py-20 flex items-center justify-center">
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

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F4C400] font-bold block mb-1">
              INTERNATIONAL FLIGHT PERMIT SERVICES
            </span>

            <h1 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-white leading-[1.16] tracking-tight mx-auto">
              International Overflight &amp; Landing Permit Services
            </h1>

            <p className="text-base sm:text-lg font-semibold text-slate-100 max-w-2xl mx-auto">
              Your Route. The Right Permissions. One Team to Coordinate.
            </p>

            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-200 leading-relaxed max-w-2xl mx-auto">
              From routine airline operations to short-notice charter flights, KCL helps coordinate overflight, landing and special permit requests across international destinations. Share your flight details, and our operations team will help identify the applicable requirements and next steps.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href="/request-flight-support"
                className="bg-[#0B2545] hover:bg-[#133661] text-white border-2 border-white min-h-[44px] px-6 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2"
              >
                <span>Request a Flight Permit</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#permit-types"
                className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-6 py-2.5 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Explore Permit Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Strip Below Hero */}
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

      {/* =========================================================================
          SECTION 2 — PERMIT TYPES
          ========================================================================= */}
      <section
        id="permit-types"
        className="scroll-mt-20 py-12 sm:py-16 bg-white border-b border-[#CBD5E1]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div className="max-w-3xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
                PERMIT CATEGORIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                The Right Permission for Every Operation.
              </h2>
              <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
                Different flight operations call for different permissions. KCL helps operators identify and coordinate the approvals relevant to their routes, schedules and operational requirements.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 shrink-0">
              <Link
                href="/request-flight-support"
                className="kcl-btn-outline-navy px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold inline-flex items-center rounded-[2px]"
              >
                Request Permit Support →
              </Link>
            </div>
          </div>

          {/* Numbered Editorial Service Index */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 auto-rows-fr">
            {PERMIT_TYPES.map((item) => (
              <div
                key={item.name}
                className="group bg-[#F6F8FB] border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#0B2545] hover:shadow-md -translate-y-0.5 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#B88200] bg-white border border-[#CBD5E1] px-2 py-0.5 rounded-[2px]">
                      PERMIT {item.number}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0B2545]/20" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#16202B] leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#CBD5E1]/50 text-xs">
                    <div>
                      <span className="font-mono font-bold text-[#0B2545] uppercase tracking-wider block mb-0.5">
                        Typical Use Case:
                      </span>
                      <p className="text-[#5C6B7A] leading-snug">{item.typicalUseCase}</p>
                    </div>

                    <div>
                      <span className="font-mono font-bold text-[#B88200] uppercase tracking-wider block mb-0.5">
                        What KCL Coordinates:
                      </span>
                      <p className="text-[#5C6B7A] leading-snug">{item.kclCoordinates}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#CBD5E1]/60">
                  <Link
                    href={item.actionHref}
                    className="text-xs sm:text-sm font-bold font-mono text-[#0B2545] group-hover:text-[#B88200] group-hover:underline underline-offset-4 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{item.actionLabel}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FlightPathDivider variant="curve-down" />

      {/* =========================================================================
          SECTION 3 — FLIGHTS WE SUPPORT (Compact Operations Matrix)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              OPERATIONAL SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Permit Support for the Way You Operate.
            </h2>
            <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
              From commercial airline networks to emergency medevac and private aircraft, our desk coordinates regulatory permissions tailored to each mission profile.
            </p>
          </div>

          {/* Structured Operations Matrix */}
          <div className="border border-[#CBD5E1] rounded-[6px] overflow-hidden bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0B2545] text-white">
                    <th className="py-3 px-4 font-mono font-bold uppercase tracking-wider w-1/4">
                      Operator Category
                    </th>
                    <th className="py-3 px-4 font-mono font-bold uppercase tracking-wider w-1/4">
                      Typical Clearances
                    </th>
                    <th className="py-3 px-4 font-mono font-bold uppercase tracking-wider w-1/4">
                      Operating Focus
                    </th>
                    <th className="py-3 px-4 font-mono font-bold uppercase tracking-wider w-1/4">
                      Dispatch Priorities
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#CBD5E1]">
                  {FLIGHTS_WE_SUPPORT_MATRIX.map((row) => (
                    <tr
                      key={row.category}
                      className="hover:bg-[#F6F8FB] transition-colors"
                    >
                      <td className="py-3 px-4 font-bold text-[#0B2545] align-top bg-[#F6F8FB]/40">
                        {row.category}
                      </td>
                      <td className="py-3 px-4 text-[#16202B] font-medium align-top">
                        {row.typicalClearances}
                      </td>
                      <td className="py-3 px-4 text-[#5C6B7A] align-top leading-relaxed">
                        {row.operatingFocus}
                      </td>
                      <td className="py-3 px-4 text-[#5C6B7A] align-top leading-relaxed">
                        {row.dispatchPriorities}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <FlightPathDivider variant="curve-up" />

      {/* =========================================================================
          SECTION 4 — DOCUMENT PREPARATION
          ========================================================================= */}
      <section
        id="what-you-need"
        className="scroll-mt-20 py-12 sm:py-16 bg-white border-b border-[#CBD5E1]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              DOCUMENT PREPARATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              What to Prepare Before Requesting a Permit.
            </h2>
            <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
              Documentation requirements vary by country, aircraft, operator and flight purpose. These are common details that may be requested. KCL will help identify the applicable requirements for each itinerary.
            </p>
          </div>

          <PermitRequirementSelector />
        </div>
      </section>

      <FlightPathDivider variant="curve-down" />

      {/* =========================================================================
          SECTION 5 — COORDINATION PROCESS
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              COORDINATION WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              A Clear Process, from Request to Regulatory Decision.
            </h2>
            <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
              From your initial itinerary submission to regulatory authority review, every step distinguishes between operator inputs and KCL coordination responsibilities.
            </p>
          </div>

          {/* 4-Step Process Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COORDINATION_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 flex flex-col justify-between hover:border-[#0B2545] hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center font-mono font-bold text-xs ring-4 ring-[#F6F8FB] shadow-xs">
                      {step.step}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-[#B88200] uppercase">
                      STAGE {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2545] leading-snug group-hover:text-[#133661] transition-colors">
                    {step.title}
                  </h3>

                  <div className="space-y-2.5 pt-2 border-t border-[#CBD5E1]/50 text-xs">
                    <div>
                      <span className="font-mono font-bold text-[#0B2545] uppercase tracking-wider block mb-0.5">
                        {step.operatorRole}:
                      </span>
                      <p className="text-[#5C6B7A] leading-relaxed">
                        {step.operatorTask}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono font-bold text-[#B88200] uppercase tracking-wider block mb-0.5">
                        {step.kclRole}:
                      </span>
                      <p className="text-[#5C6B7A] leading-relaxed">
                        {step.kclTask}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#CBD5E1] p-4 rounded-[4px]">
            <p className="text-xs sm:text-sm font-medium text-[#5C6B7A] text-center">
              The final result remains subject to relevant civil aviation authority decisions. KCL coordinates and tracks the filing through verified channels.
            </p>
          </div>
        </div>
      </section>

      <FlightPathDivider variant="curve-up" />

      {/* =========================================================================
          SECTION 6 — INTERNATIONAL COVERAGE
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              INTERNATIONAL REACH
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              International Reach. Country-Specific Requirements.
            </h2>
            <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
              Permit procedures differ across countries and flight categories. Through its international coordination network, KCL supports operators planning flights across Africa, the Middle East, Europe, Asia, the Americas and the Caribbean.
            </p>
          </div>

          <GlobalCoverageMap />
        </div>
      </section>

      <FlightPathDivider variant="curve-down" />

      {/* =========================================================================
          SECTION 7 — PERMIT TIMELINES (Transparent Planning Guidance Policy)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              TIMELINE TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Understanding Permit Planning Times.
            </h2>
            <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
              There is no single processing time for international flight permits. Requirements and approval timelines depend on the country, nature of the flight, completeness of documentation and relevant authority procedures.
            </p>
          </div>

          {/* Two-Column Transparent Planning Policy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B2545]" />
                <h3 className="text-base font-bold text-[#0B2545] font-mono uppercase tracking-wider">
                  Official Authority Time
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#16202B] font-semibold">
                A processing period explicitly published or confirmed by the relevant civil aviation authority.
              </p>
              <p className="text-xs sm:text-sm text-[#5C6B7A] leading-relaxed">
                Many authorities stipulate mandatory minimum lead times in their national Aeronautical Information Publications (AIP) or regulatory circulars—for example, 72 hours for commercial charter landing approvals or 24 hours for standard overflights. These represent statutory review windows enforced by sovereign regulators.
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 space-y-3 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B88200]" />
                <h3 className="text-base font-bold text-[#0B2545] font-mono uppercase tracking-wider">
                  Operational Planning Guidance
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#16202B] font-semibold">
                A suggested preparation window, clearly identified as guidance rather than a guaranteed processing time.
              </p>
              <p className="text-xs sm:text-sm text-[#5C6B7A] leading-relaxed">
                KCL provides dispatch teams with operational planning guidance based on recent authority responsiveness, weekend/holiday office hours, and route complexities. We do not invent processing times or guarantee approvals, as final determinations rest exclusively with the sovereign authorities.
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] p-4 rounded-[4px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5C6B7A]">
            <p>
              <strong className="text-[#0B2545]">Content Review Standard: </strong>
              Country permit rules and planning windows are verified against official State AIPs, CAA circulars, and verified local handler notices.
            </p>
            <Link
              href="/permit-directory"
              className="text-xs font-mono font-bold text-[#0B2545] hover:text-[#B88200] hover:underline shrink-0"
            >
              Browse Permit Directory →
            </Link>
          </div>
        </div>
      </section>

      <FlightPathDivider variant="curve-up" />

      {/* =========================================================================
          SECTION 8 — RELATED FLIGHT SUPPORT (Connected Service Network)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              INTEGRATED AVIATION SERVICES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Beyond Permits. Coordinated Flight Support.
            </h2>
            <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
              Permits are one part of a successful flight plan. KCL also helps coordinate essential support services across international operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {RELATED_SERVICES.map((service) => (
              <div
                key={service.name}
                className="bg-[#F6F8FB] border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 flex flex-col justify-between space-y-3.5 hover:border-[#0B2545] hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#B88200] bg-white border border-[#CBD5E1] px-2 py-0.5 rounded-[2px]">
                      SVC {service.number}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0B2545]/20" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#16202B] leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#CBD5E1]/60">
                  <Link
                    href={service.href}
                    className="text-xs sm:text-sm font-mono font-bold text-[#0B2545] group-hover:text-[#B88200] group-hover:underline underline-offset-4 inline-flex items-center gap-1.5 transition-colors"
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

      <FlightPathDivider variant="curve-down" />

      {/* =========================================================================
          SECTION 9 — WHY KCL
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              OPERATIONAL EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Operational Experience You Can Build On.
            </h2>
            <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
              KCL combines international flight support capabilities with the longstanding aviation heritage of the Kashmirwala Group. Our approach emphasizes clear communication, practical coordination and attention to the operational details behind each flight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_KCL_POINTS.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-2 hover:border-[#0B2545] hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold text-[#B88200]">
                      PILLAR 0{idx + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0B2545]/20" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B2545]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-[#5C6B7A] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FlightPathDivider variant="curve-up" />

      {/* =========================================================================
          SECTION 10 — FAQ
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              DISPATCH FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Flight Permit Questions, Answered.
            </h2>
            <p className="text-[#16202B] text-[15px] sm:text-base leading-relaxed">
              Essential answers to frequent questions about overflight permits, landing approvals, lead times, and operational requirements.
            </p>
          </div>

          <PermitFaqAccordion />
        </div>
      </section>
    </>
  );
}
