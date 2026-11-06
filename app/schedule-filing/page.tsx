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
  title: "Scheduled Flight Permissions in Pakistan",
  description:
    "Coordinate seasonal scheduled flight permissions in Pakistan (OPKR & OPLR FIRs) with KCL, an AFPA Authorized Flight Permission Agent.",
  path: "/schedule-filing",
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

export default function ScheduleFilingPage() {
  return (
    <>
      <JsonLd
        data={[
          buildServiceJsonLd({
            name: "Scheduled Flight Permissions & Timetable Filing in Pakistan",
            description:
              "IATA Summer and Winter seasonal scheduled flight permission coordination for overflight and landing in Pakistan.",
            path: "/schedule-filing",
            serviceType: "Scheduled Airline Permission Coordination",
          }),
          buildFaqJsonLd(SCHEDULE_FAQS),
        ]}
      />

      <Breadcrumbs
        items={[{ name: "Schedule Filing", path: "/schedule-filing" }]}
      />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 px-3 py-1 inline-block">
              IATA SEASONAL &amp; TIMETABLE OPERATIONS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Scheduled Flight Permissions &amp; Timetable Filing in Pakistan
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-100">
              Structured Seasonal Submissions and Ongoing Fleet Revision Control.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Commercial airlines operating regular passenger and cargo services
              across Pakistan need disciplined regulatory administration ahead
              of every IATA Summer and Winter season. As an AFPA Authorized
              Flight Permission Agent, Kashmir Corporation Pvt Ltd (KCL)
              coordinates scheduled and non-scheduled flight permissions across
              the Karachi (OPKR) and Lahore (OPLR) Flight Information Regions.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/request-permit?flightType=schedule"
                className="kcl-btn-primary min-h-[48px] px-6 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Discuss Seasonal Schedule Filing
              </Link>
              <Link
                href="/non-schedule-filing"
                className="kcl-btn-outline-white min-h-[48px] px-5 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Operating an Ad-Hoc Charter Instead?
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Why it matters + What KCL coordinates */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="kcl-card lg:col-span-7 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                OPERATIONAL CONTINUITY FOR AIRLINES
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                Keeping Seasonal Timetables and Active Fleet Lists Aligned
              </h2>
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
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold bg-[#0B2545] text-white px-2 py-0.5 mt-0.5">
                    01
                  </span>
                  <span>
                    <strong>Pre-Season Package Audit:</strong> Reviewing
                    timetable frequencies, ATS route strings, and fleet
                    certificates before authority submission.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold bg-[#0B2545] text-white px-2 py-0.5 mt-0.5">
                    02
                  </span>
                  <span>
                    <strong>Mid-Season Fleet &amp; Gauge Amendments:</strong>{" "}
                    Coordinating registration additions, wet-lease updates, and
                    aircraft type changes as your fleet schedule evolves.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold bg-[#0B2545] text-white px-2 py-0.5 mt-0.5">
                    03
                  </span>
                  <span>
                    <strong>24/7 Day-of-Operations Liaison:</strong> Assisting
                    OCC dispatchers with delayed departures, weather reroutes,
                    and extra-section filings.
                  </span>
                </li>
              </ul>
            </div>

            <div className="kcl-card lg:col-span-5 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                  AIRLINE PREPARATION CHECKLIST
                </span>
                <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
                  What Operators Should Prepare for Schedule Filing
                </h2>
                <ul className="space-y-2.5 text-sm text-[#16202B]">
                  <li>
                    • Seasonal timetable (flight designators, days of operation,
                    effective dates, and UTC timings)
                  </li>
                  <li>
                    • Proposed ATS route strings and OPKR / OPLR entry and exit
                    waypoints
                  </li>
                  <li>
                    • Air Operator Certificate (AOC) and Operations
                    Specifications
                  </li>
                  <li>
                    • Operating fleet register with Certificates of
                    Registration, Airworthiness, and Noise
                  </li>
                  <li>
                    • Worldwide Third-Party Liability Insurance Certificate
                  </li>
                  <li>
                    • AFPA authorization letter appointing KCL (needs
                    verification)
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CBD5E1] space-y-2">
                <p className="font-mono text-xs text-[#0B2545] font-semibold">
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

          {/* Related Internal Links */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <Link
              href="/services/overflight-permit-pakistan"
              className="kcl-card p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] font-semibold text-[#0B2545]"
            >
              Pakistan Overflight Permits (OPKR/OPLR) →
            </Link>
            <Link
              href="/services/landing-permit-pakistan"
              className="kcl-card p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] font-semibold text-[#0B2545]"
            >
              Landing Permit Coordination →
            </Link>
            <Link
              href="/news/schedule-vs-non-schedule-filing-explained"
              className="kcl-card p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] font-semibold text-[#0B2545]"
            >
              Briefing: Schedule vs Non-Schedule Filing →
            </Link>
          </div>

          {/* FAQs */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545] mb-6">
              Frequently Asked Questions: Scheduled Flight Permissions
            </h2>
            <div className="divide-y divide-[#CBD5E1]">
              {SCHEDULE_FAQS.map((faq) => (
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
        heading="Preparing Your Next IATA Seasonal Timetable for Pakistan?"
        subheading="Connect your network planning or dispatch desk with KCL to coordinate seasonal overflight and landing submissions and ongoing fleet updates."
        primaryLabel="Coordinate Scheduled Filing"
        primaryHref="/request-permit?flightType=schedule"
      />
    </>
  );
}
