import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ClientStrip } from "@/components/sections/ClientStrip";
import {
  JsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
} from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Charter Flight Support & Non-Schedule Permits",
  description:
    "24/7 charter flight support and non-scheduled flight permissions in Pakistan for ad-hoc charters, cargo, technical fuel stops and ferry flights.",
  path: "/non-schedule-filing",
});

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
      "Typical planning lead times are {{LEAD_TIME_PK_NONSCHED_OVERFLIGHT}} for overflights and {{LEAD_TIME_PK_NONSCHED_LANDING}} for landings (needs verification). Final processing and approval times are governed by the Pakistan Civil Aviation Authority (PCAA).",
  },
  {
    question: "Can KCL coordinate ground handling, fuel, and crew hotels for a single charter flight?",
    answer:
      "Yes. Charter and technical-stop operators can request landing permit coordination, aircraft ground handling, aviation fuel coordination, in-flight catering, and crew logistics through one consolidated dispatch request.",
  },
];

export default function NonScheduleFilingPage() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceJsonLd({
            name: "Charter Flight Support & Non-Scheduled Permission Coordination in Pakistan",
            description:
              "24/7 non-scheduled flight permission coordination and charter flight support in Pakistan for overflights, technical stops, and commercial charters.",
            path: "/non-schedule-filing",
            serviceType: "Non-Scheduled & Charter Flight Support",
          }),
          buildFaqJsonLd(NONSCHEDULE_FAQS),
        ]}
      />

      <Breadcrumbs
        items={[{ name: "Non-Schedule Filing", path: "/non-schedule-filing" }]}
      />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 px-3 py-1 inline-block">
              CHARTER, CARGO, FERRY &amp; TECHNICAL STOP OPERATIONS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Charter Flight Support &amp; Non-Scheduled Permissions in Pakistan
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-100">
              Responsive 24/7 Coordination When Mission Timelines Move Fast.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Ad-hoc passenger charters, cargo freighters, delivery flights, and
              technical refueling stops operate on dynamic schedules. As an AFPA
              Authorized Flight Permission Agent, Kashmir Corporation Pvt Ltd
              (KCL) provides charter flight support and non-scheduled permission
              coordination across Pakistan airspace and international airports.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/request-permit?flightType=non-schedule"
                className="kcl-btn-primary min-h-[48px] px-6 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Request Charter / Non-Schedule Support
              </Link>
              <Link
                href="/schedule-filing"
                className="kcl-btn-outline-white min-h-[48px] px-5 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                View Seasonal Schedule Filing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="kcl-card lg:col-span-7 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                AD-HOC &amp; ON-DEMAND FLIGHT COORDINATION
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                Why Non-Scheduled Operations Need Active Local Follow-Up
              </h2>
              <p className="text-[#16202B] text-base leading-relaxed">
                Unlike seasonal airline schedules filed weeks ahead,
                non-scheduled movements frequently involve shifting departure
                slots, payload updates, tail swaps, or short-notice routing
                adjustments. Each change requires accurate communication with
                regulatory authorities and airport station teams.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-4">
                  <h3 className="font-bold text-[#0B2545] mb-1">
                    Ad-Hoc Overflight Clearances
                  </h3>
                  <p className="text-xs text-[#16202B] leading-relaxed">
                    Route and FIR boundary point checks across OPKR and OPLR,
                    paired with 24/7 ETD revision filing when departure windows
                    shift.
                  </p>
                </div>
                <div className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-4">
                  <h3 className="font-bold text-[#0B2545] mb-1">
                    Technical Refueling Stops
                  </h3>
                  <p className="text-xs text-[#16202B] leading-relaxed">
                    Coordinated landing permit applications, ramp handling, GPU,
                    and Jet A-1 fuel release verification at OPKC, OPLA, and
                    OPIS.
                  </p>
                </div>
                <div className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-4">
                  <h3 className="font-bold text-[#0B2545] mb-1">
                    Passenger &amp; Cargo Charters
                  </h3>
                  <p className="text-xs text-[#16202B] leading-relaxed">
                    Traffic landing permit coordination, manifest and cargo
                    documentation guidance, and main-deckGSE liaison.
                  </p>
                </div>
                <div className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-4">
                  <h3 className="font-bold text-[#0B2545] mb-1">
                    Ferry, Delivery &amp; Medevac Flights
                  </h3>
                  <p className="text-xs text-[#16202B] leading-relaxed">
                    Dedicated dispatch coordination for positioning sectors,
                    aircraft handovers, and time-critical air ambulance missions.
                  </p>
                </div>
              </div>
            </div>

            <div className="kcl-card lg:col-span-5 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                  OPERATOR PREPARATION CHECKLIST
                </span>
                <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                  Details to Prepare for a Non-Schedule Request
                </h2>
                <ul className="space-y-2.5 text-sm text-[#16202B]">
                  <li>
                    • Operator legal name, ICAO designator / callsign, and
                    billing address
                  </li>
                  <li>
                    • Aircraft type designator, registration mark, and MTOW
                  </li>
                  <li>
                    • Mission purpose (commercial charter, tech stop, cargo,
                    ferry, medevac)
                  </li>
                  <li>
                    • Complete itinerary with UTC dates/times and OPKR/OPLR
                    waypoints
                  </li>
                  <li>
                    • Crew/passenger count or cargo nature declaration (plus DGR
                    details if applicable)
                  </li>
                  <li>
                    • Current AOC, Airworthiness, Registration, Noise, and
                    Insurance certificates
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CBD5E1] space-y-2">
                <p className="font-mono text-xs text-[#5C6B7A]">
                  Planning Lead Window:{" "}
                  {"{{LEAD_TIME_PK_NONSCHED_OVERFLIGHT}}"} /{" "}
                  {"{{LEAD_TIME_PK_NONSCHED_LANDING}}"} (needs verification)
                </p>
                <p className="text-xs text-[#5C6B7A]">
                  Regulatory note: Approval decisions and processing times rest
                  with the Pakistan Civil Aviation Authority (PCAA) and relevant
                  ministries.
                </p>
              </div>
            </div>
          </div>

          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545] mb-6">
              Frequently Asked Questions: Charter &amp; Non-Schedule Support
            </h2>
            <div className="divide-y divide-[#CBD5E1]">
              {NONSCHEDULE_FAQS.map((faq) => (
                <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-bold text-[#0B2545] mb-1.5">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientStrip compact />
      <CtaBanner
        heading="Operating an Upcoming Charter, Ferry or Tech Stop in Pakistan?"
        subheading="Transmit your itinerary, aircraft registration, and required ground services to KCL's 24/7 operations desk to initiate non-scheduled coordination."
        primaryLabel="Request Charter Flight Support"
        primaryHref="/request-permit?flightType=non-schedule"
      />
    </>
  );
}
