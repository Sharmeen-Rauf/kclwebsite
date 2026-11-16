import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { SeasonFleetCheck } from "@/components/sections/tools/SeasonFleetCheck";
import { RequestMessageComposer } from "@/components/sections/tools/RequestMessageComposer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";
import {
  JsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
} from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Scheduled & Non-Scheduled Flight Permissions in Pakistan | KCL",
  description:
    "Coordinate IATA seasonal scheduled flight permissions and 24/7 non-scheduled charter, cargo, technical fuel stop, and ferry permits in Pakistan (OPKR & OPLR FIRs).",
  path: "/non-schedule-filing",
  omitTitleSuffix: true,
});

const SCHEDULE_FAQS = [
  {
    question: "Which operations fall under scheduled flight permissions in Pakistan?",
    answer:
      "Scheduled flight permissions apply to commercial passenger and all-cargo airlines operating published timetables across the IATA Northern Summer and Northern Winter seasons, whether transiting OPKR/OPLR airspace or landing at Pakistani international airports.",
  },
  {
    question: "How early should airlines prepare seasonal schedule applications?",
    answer:
      "Airlines should assemble and transmit seasonal timetables and fleet documentation in advance of the effective season start date to allow time for regulatory review.",
  },
  {
    question: "How does KCL assist with mid-season fleet additions or timetable changes?",
    answer:
      "When your airline adds newly delivered or leased aircraft registrations, upgrades equipment gauge, or adjusts UTC departure times, our 24/7 operations desk prepares and files the corresponding amendment request with the aviation authority.",
  },
  {
    question: "Who grants final approval for scheduled overflight and landing timetables?",
    answer:
      "Final approval of seasonal timetables, traffic rights, and airport slot allocations rests with the Pakistan Civil Aviation Authority (PCAA) and relevant airport authorities. KCL coordinates the submission, tracks progress, and communicates authority feedback.",
  },
];

const NONSCHEDULE_FAQS = [
  {
    question: "Which flights require non-scheduled flight permission in Pakistan?",
    answer:
      "Ad-hoc passenger charters, on-demand cargo freighters, executive/business aviation flights, aircraft ferry and delivery movements, medical evacuation (medevac) flights, and technical refueling stops require non-scheduled permission coordination.",
  },
  {
    question: "How does KCL assist with short-notice charter or technical stop requests?",
    answer:
      "Our operations desk operates 24/7 across UTC and PKT shifts. We review your route and aircraft documentation immediately upon receipt, submit the application through official authority channels, and coordinate station handling and fuel where required.",
  },
  {
    question: "What is the typical lead window for non-scheduled permits in Pakistan?",
    answer:
      "Final processing and approval times are governed by the Pakistan Civil Aviation Authority (PCAA). Our 24/7 operations desk coordinates submissions promptly upon receipt of complete flight details.",
  },
  {
    question: "Can KCL coordinate ground handling, fuel, and crew hotels for a single charter flight?",
    answer:
      "Yes. Charter and technical-stop operators can request landing permit coordination, aircraft ground handling, aviation fuel coordination, in-flight catering, and crew logistics through one consolidated dispatch request.",
  },
];

const NONSCHEDULE_CARDS = [
  {
    kicker: "AIRSPACE TRANSIT",
    title: "Ad-Hoc Overflight Clearances",
    description:
      "Route and FIR boundary point checks across OPKR and OPLR, paired with 24/7 ETD revision filing when departure windows shift.",
    imageSrc: "/img/services/02-overflight.webp",
  },
  {
    kicker: "TECHNICAL STOP",
    title: "Technical Refueling Stops",
    description:
      "Coordinated landing permit applications, ramp handling, GPU, and Jet A-1 fuel release verification at OPKC, OPLA, and OPIS.",
    imageSrc: "/img/services/04-fuel.webp",
  },
  {
    kicker: "CHARTER & FREIGHT",
    title: "Passenger & Cargo Charters",
    description:
      "Traffic landing permit coordination, manifest and cargo documentation guidance, and main-deck GSE liaison.",
    imageSrc: "/img/services/03-ground.webp",
  },
  {
    kicker: "SPECIAL MISSIONS",
    title: "Ferry, Delivery & Medevac Flights",
    description:
      "Dedicated dispatch coordination for positioning sectors, aircraft handovers, and time-critical air ambulance missions.",
    imageSrc: "/img/services/06-ops.webp",
  },
];

export default function NonScheduleFilingPage() {
  const combinedFaqs = [...SCHEDULE_FAQS, ...NONSCHEDULE_FAQS];

  return (
    <>
      <JsonLd
        data={[
          buildServiceJsonLd({
            name: "Scheduled & Non-Scheduled Flight Permissions in Pakistan",
            description:
              "IATA Summer and Winter seasonal scheduled flight permission coordination and 24/7 non-scheduled charter, cargo, technical stop, and ferry permit support in Pakistan.",
            path: "/non-schedule-filing",
            serviceType: "Scheduled & Non-Scheduled Flight Permission Coordination",
          }),
          buildFaqJsonLd([
            ...combinedFaqs,
            ...(SERVICE_TOOL_FAQS["schedule-filing"] || []),
            ...(SERVICE_TOOL_FAQS["non-schedule-filing"] || []),
          ]),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Schedule & Non-Schedule Filing", path: "/non-schedule-filing" },
        ]}
      />

      <InnerHero
        title="Scheduled & Non-Scheduled Flight Permissions in Pakistan"
        subtitle="Seasonal Airline Timetables and 24/7 Ad-Hoc Charter Coordination."
        description="Whether operating published IATA Summer and Winter airline schedules or time-critical ad-hoc charters, cargo freighters, ferry flights, and technical refueling stops, KCL coordinates regulatory submissions across the Karachi (OPKR) and Lahore (OPLR) Flight Information Regions."
        imageSrc="/img/services/06-ops.webp"
        imageAlt="24/7 flight operations desk coordinating scheduled and non-scheduled aircraft movements"
        buttons={[
          {
            label: "Request Flight Permission",
            href: "/request-permit",
            variant: "primary",
          },
          {
            label: "Jump to Seasonal Filing",
            href: "#scheduled",
            variant: "outline",
          },
        ]}
      />

      {/* =========================================================================
          SECTION 1 — PATHWAY COMPARISON MATRIX (Schedule vs Non-Schedule)
          ========================================================================= */}
      <section className="py-12 sm:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#B88200] block">
              Filing Pathways
            </span>
            <h2 className="no-accent-bar text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
              Choose the Filing Pathway That Fits Your Operation
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Both scheduled airline timetables and ad-hoc non-scheduled movements are coordinated through our 24/7 Karachi operations desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Scheduled Card */}
            <div className="group relative overflow-hidden rounded-[6px] bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545]/60 p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] opacity-85"
              />
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B88200] block">
                  IATA Summer &amp; Winter Seasons
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                  Scheduled Airline Permissions
                </h3>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  For commercial passenger and all-cargo airlines operating published timetables across OPKR/OPLR airspace or Pakistani international airports, including mid-season tail additions and gauge changes.
                </p>
                <ul className="space-y-1.5 text-sm text-[#475569] pt-1">
                  <li>• Pre-season timetable &amp; fleet package audit</li>
                  <li>• Mid-season aircraft registration &amp; wet-lease amendments</li>
                  <li>• 24/7 OCC liaison for extra sections &amp; reroutes</li>
                </ul>
              </div>
              <div className="pt-6 flex flex-wrap gap-3">
                <a
                  href="#scheduled"
                  className="bg-[#0B2545] hover:bg-[#133661] text-white text-sm font-bold px-5 py-2.5 rounded-[3px] transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Scheduled Filing</span>
                  <span aria-hidden="true">↓</span>
                </a>
                <Link
                  href="/request-permit?flightType=schedule"
                  className="border border-[#CBD5E1] hover:border-[#0B2545] text-[#0B2545] text-sm font-semibold px-4 py-2.5 rounded-[3px] transition-colors bg-white"
                >
                  Submit Seasonal Request
                </Link>
              </div>
            </div>

            {/* Non-Scheduled Card (Photo-Backed Navy) */}
            <div className="group relative overflow-hidden rounded-[6px] bg-[#0B2545] border border-[#1E3A5F] hover:border-[#F4C400]/70 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-white">
              <Image
                src="/img/services/06-ops.webp"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-[#081B33]/95 via-[#0B2545]/88 to-[#133661]/80"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F4C400] via-white/70 to-[#F4C400] z-10"
              />
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4C400] block">
                  24/7 Ad-Hoc &amp; Short-Notice Support
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Non-Scheduled &amp; Charter Permissions
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                  For passenger charters, on-demand freighters, private/executive jets, ferry deliveries, medevac missions, and technical refueling stops operating on dynamic timelines.
                </p>
                <ul className="space-y-1.5 text-sm text-slate-200/90 pt-1">
                  <li>• Rapid OPKR/OPLR route &amp; document review</li>
                  <li>• Combined permit, handling, fuel &amp; crew coordination</li>
                  <li>• 24/7 ETD revision &amp; tail-swap updates</li>
                </ul>
              </div>
              <div className="relative z-10 pt-6 flex flex-wrap gap-3">
                <a
                  href="#non-scheduled"
                  className="bg-[#F4C400] hover:bg-white text-[#0B2545] text-sm font-bold px-5 py-2.5 rounded-[3px] transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Non-Schedule Filing</span>
                  <span aria-hidden="true">↓</span>
                </a>
                <Link
                  href="/request-permit?flightType=non-schedule"
                  className="border border-white/30 hover:border-white text-white text-sm font-semibold px-4 py-2.5 rounded-[3px] transition-colors bg-white/10"
                >
                  Request Charter Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — SCHEDULED AIRLINE FILING
          ========================================================================= */}
      <section id="scheduled" className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#B88200] block">
              Operational Continuity for Airlines
            </span>
            <h2 className="no-accent-bar text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
              Keeping Seasonal Timetables and Active Fleet Lists Aligned
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-4 shadow-xs">
              <p className="text-[#16202B] text-base leading-relaxed">
                For network planning and dispatch teams, a seasonal permission
                is not a one-time filing. Throughout the operating season,
                airlines rotate tail numbers, induct newly leased aircraft,
                adjust block times, and respond to airspace notices.
              </p>
              <p className="text-[#16202B] text-base leading-relaxed">
                If a newly assigned aircraft registration is not listed on the
                approved seasonal file—or if an insurance or airworthiness
                certificate expires mid-season—day-of-operation dispatch can face
                avoidable administrative holds.
              </p>

              <ul className="space-y-3 text-sm text-[#16202B] pt-2">
                <li className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[4px] p-3.5">
                  <span className="text-xs font-bold bg-[#F4C400] text-[#0B2545] px-2 py-0.5 rounded-[2px] mt-0.5 shrink-0">
                    01
                  </span>
                  <span>
                    <strong className="text-[#0B2545]">Pre-Season Package Audit:</strong>{" "}
                    Reviewing timetable frequencies, ATS route strings, and fleet
                    certificates before authority submission.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[4px] p-3.5">
                  <span className="text-xs font-bold bg-[#0B2545] text-white px-2 py-0.5 rounded-[2px] mt-0.5 shrink-0">
                    02
                  </span>
                  <span>
                    <strong className="text-[#0B2545]">Mid-Season Fleet &amp; Gauge Amendments:</strong>{" "}
                    Coordinating registration additions, wet-lease updates, and
                    aircraft type changes as your fleet schedule evolves.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-[4px] p-3.5">
                  <span className="text-xs font-bold bg-[#0B2545] text-white px-2 py-0.5 rounded-[2px] mt-0.5 shrink-0">
                    03
                  </span>
                  <span>
                    <strong className="text-[#0B2545]">24/7 Day-of-Operations Liaison:</strong>{" "}
                    Assisting OCC dispatchers with delayed departures, weather
                    reroutes, and extra-section filings.
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545]"
              />
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B88200] block">
                  Airline Preparation Checklist
                </span>
                <h3 className="text-xl font-bold text-[#0B2545]">
                  What Operators Should Prepare for Schedule Filing
                </h3>
                <ul className="space-y-2.5 text-sm text-[#16202B]">
                  <li>• Seasonal timetable (flight designators, days of operation, effective dates, and UTC timings)</li>
                  <li>• Proposed ATS route strings and OPKR / OPLR entry and exit waypoints</li>
                  <li>• Air Operator Certificate (AOC) and Operations Specifications</li>
                  <li>• Operating fleet register with Certificates of Registration, Airworthiness, and Noise</li>
                  <li>• Worldwide Third-Party Liability Insurance Certificate</li>
                  <li>• AFPA authorization letter appointing KCL (needs verification)</li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CBD5E1] space-y-2">
                <p className="text-xs text-[#0B2545] font-semibold">
                  Recommended Lead Window: In advance of IATA seasonal schedule effective date
                </p>
                <p className="text-xs text-[#5C6B7A]">
                  Regulatory note: Seasonal schedule approvals, traffic rights,
                  and airport slots are granted by the Pakistan Civil Aviation
                  Authority (PCAA) and airport operators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SeasonFleetCheck />

      {/* =========================================================================
          SECTION 3 — NON-SCHEDULED & CHARTER FILING
          ========================================================================= */}
      <section id="non-scheduled" className="py-12 sm:py-16 bg-white border-t border-b border-[#CBD5E1] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#B88200] block">
              Ad-Hoc &amp; On-Demand Flight Coordination
            </span>
            <h2 className="no-accent-bar text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
              Why Non-Scheduled Operations Need Active Local Follow-Up
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Unlike seasonal airline schedules filed weeks ahead, non-scheduled movements frequently involve shifting departure slots, payload updates, tail swaps, or short-notice routing adjustments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {NONSCHEDULE_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-[6px] bg-[#0B2545] border border-[#1E3A5F] hover:border-[#F4C400]/70 p-5 sm:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <Image
                    src={card.imageSrc}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-500"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#081B33]/95 via-[#0B2545]/85 to-[#0B2545]/75"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F4C400] via-white/60 to-[#F4C400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  />
                  <div className="relative z-10 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C400] block">
                      {card.kicker}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#F4C400] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 flex flex-col justify-between shadow-xs relative overflow-hidden">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545]"
              />
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B88200] block">
                  Operator Preparation Checklist
                </span>
                <h3 className="text-xl font-bold text-[#0B2545]">
                  Details to Prepare for a Non-Schedule Request
                </h3>
                <ul className="space-y-2.5 text-sm text-[#16202B]">
                  <li>• Operator legal name, ICAO designator / callsign, and billing address</li>
                  <li>• Aircraft type designator, registration mark, and MTOW</li>
                  <li>• Mission purpose (commercial charter, tech stop, cargo, ferry, medevac)</li>
                  <li>• Complete itinerary with UTC dates/times and OPKR/OPLR waypoints</li>
                  <li>• Crew/passenger count or cargo nature declaration (plus DGR details if applicable)</li>
                  <li>• Current AOC, Airworthiness, Registration, Noise, and Insurance certificates</li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CBD5E1] space-y-2">
                <p className="text-xs text-[#0B2545] font-semibold">
                  Coordinated 24/7 with Civil Aviation Authorities
                </p>
                <p className="text-xs text-[#5C6B7A]">
                  Regulatory note: Approval decisions and processing times rest
                  with the Pakistan Civil Aviation Authority (PCAA) and relevant
                  ministries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RequestMessageComposer />

      {/* =========================================================================
          SECTION 4 — RELATED LINKS & COMBINED FAQS
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-t border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link
              href="/services/overflight-permits"
              className="p-4 bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] font-semibold text-[#0B2545] shadow-xs transition-colors"
            >
              Pakistan Overflight Permits (OPKR/OPLR) →
            </Link>
            <Link
              href="/services/landing-permits"
              className="p-4 bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] font-semibold text-[#0B2545] shadow-xs transition-colors"
            >
              Landing Permit Coordination →
            </Link>
            <Link
              href="/news/schedule-vs-non-schedule-filing-explained"
              className="p-4 bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] font-semibold text-[#0B2545] shadow-xs transition-colors"
            >
              Briefing: Schedule vs Non-Schedule Filing →
            </Link>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B88200] block mb-1">
                Common Questions
              </span>
              <h2 className="no-accent-bar text-2xl sm:text-3xl font-bold text-[#0B2545]">
                Frequently Asked Questions: Scheduled &amp; Non-Scheduled Filing
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {combinedFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white border border-[#CBD5E1] hover:border-[#0B2545]/60 rounded-[4px] p-4 sm:p-5 transition-all duration-200"
                >
                  <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-[#0B2545] cursor-pointer list-none select-none">
                    <span className="pr-3 group-hover:text-[#133661] transition-colors">
                      {faq.question}
                    </span>
                    <span className="w-5 h-5 rounded-full bg-[#F8FAFC] border border-[#CBD5E1] flex items-center justify-center text-[10px] text-[#0B2545] group-open:rotate-180 group-open:bg-[#0B2545] group-open:text-white transition-all duration-200 shrink-0">
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
        </div>
      </section>

      <ClientStrip compact />

      <CtaBanner
        eyebrow="Scheduled & Charter Coordination"
        heading="Preparing a Seasonal Timetable or an Upcoming Charter in Pakistan?"
        subheading="Send your seasonal schedule, ad-hoc itinerary, aircraft registration, and required ground services to KCL's 24/7 operations desk."
        primaryLabel="Request Flight Support"
        primaryHref="/request-permit"
      />
    </>
  );
}
