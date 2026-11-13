import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { FollowOneFlight } from "@/components/sections/FollowOneFlight";
import { LiveAviationClocks } from "@/components/sections/LiveAviationClocks";
import { HeroVideoBackground } from "@/components/ui/HeroVideoBackground";
import {
  JsonLd,
  buildBreadcrumbJsonLd,
  buildOrganizationJsonLd,
  buildFaqJsonLd,
} from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "International Aviation Support Services | KCL",
  description:
    "Flight permits, ground handling, fuel, catering, crew hotels, flight planning and slot coordination for international flights. One team, 24/7.",
  path: "/services",
  omitTitleSuffix: true,
});

const ALL_EIGHT_SERVICES = [
  {
    title: "Flight Planning and Dispatch",
    description:
      "Route optimisation, flight plans, ICAO filing, weather and NOTAM review, and ETOPS/EDTO planning support.",
    href: "/services/flight-planning-dispatch",
    photo: "/img/services/07-dispatch.webp",
    alt: "Flight dispatch officer preparing computerized route flight plan and weather briefing",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
  {
    title: "Airport Slot Coordination",
    description: "Slot requests and timing coordinated alongside your permits.",
    href: "/services/airport-slot-coordination",
    photo: "/img/services/08-slots.webp",
    alt: "Airport control tower managing runway slots and departure timing",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Flight Permissions",
    description:
      "Overflight and landing permits, PPR, block permits and short-notice clearance. Final approval rests with the aviation authorities.",
    href: "/services/flight-permissions",
    photo: "/img/services/01-permits.webp",
    alt: "Official flight permission document clearance stamp and overflight authorization",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Ground Handling",
    description:
      "Aircraft, passenger, baggage and cargo handling, and turnaround management through trusted partners.",
    href: "/services/ground-handling",
    photo: "/img/services/02-ground.webp",
    alt: "Airport apron ground handling staff and baggage equipment servicing an aircraft",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
      </svg>
    ),
  },
  {
    title: "Aviation Fuel",
    description: "Jet A-1, TS-1 and Avgas 100LL arranged with trusted suppliers.",
    href: "/services/aviation-fuel",
    photo: "/img/services/04-fuel.webp",
    alt: "Aviation fuel truck refueling aircraft wing on airport tarmac",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 22h12" />
        <path d="M4 9h10" />
        <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
        <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
      </svg>
    ),
  },
  {
    title: "Inflight Catering",
    description: "Passenger and crew meals, including special dietary plans.",
    href: "/services/inflight-catering",
    photo: "/img/services/03-catering.webp",
    alt: "Premium inflight meal trays and galley service prepared for flight",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    title: "Crew Accommodation and Transport",
    description: "Airport-proximity hotels and airport-hotel-airport transfers.",
    href: "/services/crew-logistics",
    photo: "/img/services/05-crew.webp",
    alt: "Flight crew layover hotel accommodation and private airport van transfer",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    ),
  },
  {
    title: "24/7 Operations Support",
    description: "Round-the-clock help for urgent, ad-hoc, diplomatic and diverted flights.",
    href: "/services/operations-support",
    photo: "/img/services/06-ops.webp",
    alt: "24/7 aviation operations desk controllers monitoring flight tracking screens",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const SERVICES_ITEM_LIST_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "KCL Aviation Support Services",
  description: "Comprehensive flight support services coordinated worldwide.",
  itemListElement: ALL_EIGHT_SERVICES.map((srv, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: srv.title,
    description: srv.description,
    url: `${SITE_CONFIG.url}${srv.href}`,
  })),
};

const SERVICES_FAQS = [
  {
    question: "What services does KCL offer?",
    answer:
      "KCL arranges flight planning and dispatch, airport slot coordination, international flight permissions, aircraft ground handling, aviation fuel supply, inflight catering coordination, crew accommodation and transport, and 24/7 operations support worldwide.",
  },
  {
    question: "Can I request several services in one request?",
    answer:
      "Yes. You can combine flight permits, ground handling, fueling, catering, and crew logistics into a single operational request coordinated by our 24/7 desk.",
  },
  {
    question: "Do you handle scheduled and non-scheduled flights?",
    answer:
      "Yes. We support scheduled airline operations, seasonal timetable filings, ad-hoc commercial charters, executive VIP flights, cargo missions, ferry sectors, and technical refueling stops.",
  },
  {
    question: "Which regions do you support?",
    answer:
      "Africa, Middle East, Europe, Asia, the Americas and the Caribbean; tell us your route and we confirm what we can arrange.",
  },
  {
    question: "Is the operations desk open 24/7?",
    answer:
      "Yes. Our operations desk is continuously staffed 24 hours a day, 365 days a year to manage active itineraries, flight revisions, and short-notice requests.",
  },
];

export default function ServicesOverviewPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <JsonLd
        data={[
          buildOrganizationJsonLd(),
          buildBreadcrumbJsonLd([{ name: "Services", path: "/services" }]),
          SERVICES_ITEM_LIST_JSON_LD,
          buildFaqJsonLd(SERVICES_FAQS),
        ]}
      />

      {/* =========================================================================
          HERO (Homepage Height & Grand Aviation Aesthetic) — PRESERVED UNTOUCHED
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] py-14 sm:py-16 lg:py-20 flex items-center justify-center">
        {/* Full-bleed background video with instant poster and calibrated gradient */}
        <div className="absolute inset-0 z-0">
          <HeroVideoBackground
            src="/Business_jet_parked_at_dawn_8537098a.mp4"
            poster="/img/hero-flight-ops.jpg"
            alt="Commercial airliner and private jet on airport apron with ground handling services"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/75 to-[#14406E]/45"
          />

          {/* Ambient Radar Sweep Visual */}
          <div aria-hidden="true" className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full border border-sky-400/10 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute inset-0 rounded-full border border-sky-400/15" />
            <div className="absolute inset-16 sm:inset-24 rounded-full border border-sky-400/15" />
            <div className="absolute inset-32 sm:inset-44 rounded-full border border-sky-400/15" />
            <div className="absolute inset-0 radar-sweep-beam bg-gradient-to-tr from-sky-400/15 via-transparent to-transparent rounded-full" />
          </div>

          {/* Subtle airway route line-art */}
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
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide text-slate-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Comprehensive Flight Support Network</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white leading-[1.16] tracking-tight mx-auto">
              International Aviation Support Services
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-semibold text-slate-100 max-w-2xl mx-auto">
              Connected Support for Complex Flight Operations.
            </p>

            <p className="text-xs sm:text-sm lg:text-[15.5px] text-slate-200 leading-relaxed max-w-2xl mx-auto">
              A flight rarely depends on one service alone. Flight permission facilitation, ground handling, catering services, fuel supply, crew accommodation arrangements, and 24/7 operational support must fit the same itinerary. KCL brings these requirements into a coordinated conversation so operators can plan with greater clarity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href="/request-flight-support"
                className="relative overflow-hidden bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] font-bold text-sm min-h-[44px] px-7 py-3 inline-flex items-center justify-center rounded-[2px] transition-all shadow-md hover:shadow-lg gap-2 group"
              >
                <span className="animate-btn-shimmer" />
                <span>Request Flight Support</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
              </Link>
              <a
                href="#follow-one-flight"
                className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] hover:bg-white/15 transition-all"
              >
                Explore Core Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1 — "FOLLOW ONE FLIGHT" (MAIN INTERACTIVE FEATURE)
          ========================================================================= */}
      <FollowOneFlight />

      {/* =========================================================================
          SECTION 2 — "ALL SERVICES AT A GLANCE" (COMPACT GRID OF 8 IMAGE TILES)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
              All Services at a Glance
            </h2>
            <p className="text-base text-[#16202B] leading-relaxed">
              Explore our comprehensive range of international flight support capabilities coordinated by one team.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-2 sm:pb-0 scrollbar-none">
            {ALL_EIGHT_SERVICES.map((srv) => (
              <div
                key={srv.href}
                className="snap-start shrink-0 w-[82vw] sm:w-auto bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[6px] overflow-hidden flex flex-col justify-between hover:-translate-y-1 shadow-2xs hover:shadow-md transition-all duration-200 group"
              >
                {/* Photo with Navy Duotone Overlay */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={srv.photo}
                    alt={srv.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                    className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/45 to-transparent"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-[4px] bg-[#0B2545]/90 text-white flex items-center justify-center shadow-xs">
                    {srv.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-snug line-clamp-2">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#CBD5E1]/60">
                    <Link
                      href={srv.href}
                      className="text-xs font-bold text-[#0B2545] hover:underline underline-offset-2 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Learn more</span>
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
          SECTION 3 — SCHEDULED VS NON-SCHEDULED FILING & SLIM COUNTRY GUIDES STRIP
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Card 1: Scheduled Flight Filing */}
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545] rounded-[6px] p-6 space-y-3 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
              <h3 className="text-xl font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                Scheduled Flight Filing
              </h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Seasonal and recurring airline permission applications, schedule information and fleet amendments.
              </p>
              <div className="pt-2">
                <Link
                  href="/schedule-filing"
                  className="inline-flex items-center gap-1.5 text-base font-bold text-[#0B2545] hover:underline underline-offset-2"
                >
                  <span>File scheduled flights</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Non-Scheduled and Charter Filing */}
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545] rounded-[6px] p-6 space-y-3 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 group">
              <h3 className="text-xl font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                Non-Scheduled and Charter Filing
              </h3>
              <p className="text-base text-[#475569] leading-relaxed">
                Ad-hoc charters, cargo, business aviation, ferry flights and technical stops.
              </p>
              <div className="pt-2">
                <Link
                  href="/non-schedule-filing"
                  className="inline-flex items-center gap-1.5 text-base font-bold text-[#0B2545] hover:underline underline-offset-2"
                >
                  <span>File non-scheduled &amp; charter flights</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Slim Strip: Country Guides */}
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] py-3.5 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-2xs">
            <span className="text-base text-[#16202B]">
              Country guides: Pakistan guide available, more countries on request.
            </span>
            <Link
              href="/permit-directory"
              className="text-base font-bold text-[#0B2545] hover:underline underline-offset-2 shrink-0 inline-flex items-center gap-1"
            >
              <span>Explore permit directory</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — TRUST BAND (4 PLAIN FACTS & CLIENT LOGO SLIDER)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-4 text-center space-y-1 shadow-2xs">
              <div className="flex items-center justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xl sm:text-2xl font-bold text-[#0B2545]">24/7</span>
              </div>
              <p className="text-sm font-semibold text-[#475569]">operations desk</p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-4 text-center space-y-1 shadow-2xs">
              <span className="text-xl sm:text-2xl font-bold text-[#0B2545]">8</span>
              <p className="text-sm font-semibold text-[#475569]">services</p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-4 text-center space-y-1 shadow-2xs">
              <span className="text-xl sm:text-2xl font-bold text-[#0B2545]">6</span>
              <p className="text-sm font-semibold text-[#475569]">regions</p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-4 flex flex-col items-center justify-center space-y-1 shadow-2xs">
              <span className="text-xs font-bold text-[#5C6B7A]">Live station clocks</span>
              <LiveAviationClocks />
            </div>
          </div>

          <div className="pt-4 border-t border-[#CBD5E1]/60">
            <div className="text-center mb-3">
              <span className="text-xs font-bold text-[#5C6B7A] tracking-wider uppercase">
                Trusted by Airlines Including
              </span>
            </div>
            <ClientStrip compact />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — FREQUENTLY ASKED QUESTIONS (2-COLUMN ACCORDION DESKTOP)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-2xl mb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] mb-2 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#475569]">
              Clear information about our international aviation coordination and operational support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {SERVICES_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-4 sm:p-5 transition-all duration-200"
              >
                <summary className="flex items-center justify-between font-bold text-base text-[#0B2545] cursor-pointer list-none select-none">
                  <span className="pr-3 group-hover:text-[#133661] transition-colors">{faq.question}</span>
                  <span className="w-5 h-5 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[10px] text-[#0B2545] group-open:rotate-180 group-open:bg-[#0B2545] group-open:text-white transition-all duration-200 shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="mt-3 text-base text-[#16202B] leading-relaxed border-t border-[#CBD5E1]/60 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FINAL CTA BAND (ONE ONLY)
          ========================================================================= */}
      <section id="final-cta" className="py-12 lg:py-16 bg-[#0B2545] text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight max-w-2xl mx-auto">
            Planning a Flight? Send Us Your Itinerary.
          </h2>
          <p className="text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Share your schedule, aircraft type, route, and requested service package with our 24/7 flight coordination team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/request-flight-support"
              className="bg-white hover:bg-slate-100 text-[#0B2545] min-h-[46px] px-8 py-3 font-bold text-base inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2"
            >
              <span>Request Flight Support</span>
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="tel:+923268088706"
              className="kcl-btn-outline-white min-h-[46px] px-7 py-3 font-semibold text-base inline-flex items-center justify-center rounded-[2px] hover:bg-white/10 transition-colors"
            >
              Call the Ops Desk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
