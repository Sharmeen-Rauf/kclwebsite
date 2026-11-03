import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { AirwaysHeroMap } from "@/components/sections/AirwaysHeroMap";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { PermitChecker } from "@/components/sections/PermitChecker";
import { RequestTrackerPreview } from "@/components/sections/RequestTrackerPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PRIMARY_SERVICES_DATA } from "@/content/services";
import { HOME_FAQS } from "@/content/faqs";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "International Flight Support & Aviation Services | KCL",
  description:
    "KCL coordinates flight permissions, ground handling, aviation fuel, flight planning and crew logistics for airline, charter and business aviation operations.",
  path: "/",
  omitTitleSuffix: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(HOME_FAQS)} />

      {/* 1. Signature Hero Section (01 / HOME) */}
      <section className="bg-[#0B2545] text-white border-b border-slate-700 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 bg-[#133661] border border-[#E8A200] px-3.5 py-1.5 font-mono text-xs text-[#E8A200] font-semibold">
                <span>KCL INTERNATIONAL FLIGHT SUPPORT</span>
                <span>·</span>
                <span>{SITE_CONFIG.authorityBadge}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.55rem] font-bold text-white leading-[1.15] tracking-tight">
                International Flight Support &amp; Aviation Services
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-[#E8A200]">
                International Flight Support. Coordinated with Confidence.
              </p>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Across international flight operations, the details matter.
                Kashmir Corporation (Pvt.) Ltd. supports airlines, charter
                operators, cargo carriers and business aviation teams with
                flight permission requests, airport coordination and essential
                trip support. From its base in Pakistan, KCL brings an
                operations-focused approach to planning, communication and
                service arrangements.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  href="/request-flight-support"
                  className="min-h-[48px] px-6 py-3.5 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm tracking-tight inline-flex items-center justify-center rounded-[2px] transition-colors"
                >
                  Request Flight Support
                </Link>
                <Link
                  href="/services"
                  className="min-h-[48px] px-5 py-3.5 bg-[#133661] hover:bg-slate-700 text-white border border-slate-500 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors"
                >
                  Explore Services
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-700/80 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-slate-300">
                <div>
                  <span className="text-[#E8A200] font-semibold block">
                    TRIP COORDINATION
                  </span>
                  <span>Permits, handling, fuel &amp; planning</span>
                </div>
                <div>
                  <span className="text-[#E8A200] font-semibold block">
                    PAKISTAN FOCUS
                  </span>
                  <Link
                    href="/pakistan/flight-permissions"
                    className="underline hover:text-white"
                  >
                    Pakistan flight permissions →
                  </Link>
                </div>
                <div>
                  <span className="text-[#E8A200] font-semibold block">
                    INQUIRY CHECKLIST
                  </span>
                  <a
                    href="/files/kcl-permit-request-checklist.pdf"
                    download
                    className="underline hover:text-white"
                  >
                    Download PDF Guide
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AirwaysHeroMap />
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Support Behind a Well-Planned Flight */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
              CONNECTED AVIATION COORDINATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              The Support Behind a Well-Planned Flight
            </h2>
            <p className="text-[#16202B] text-base leading-relaxed">
              Every itinerary brings together permissions, airport arrangements,
              aircraft requirements and crew needs. Rather than treating these as
              isolated tasks, our coordination approach helps operators identify
              what is needed, when information must be available and which
              parties need to be aligned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-6 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="font-mono text-xs font-bold text-[#0B2545] bg-white border border-[#CBD5E1] px-2 py-0.5 inline-block">
                  01 · PERMISSIONS
                </span>
                <h3 className="text-lg font-bold text-[#0B2545]">
                  Flight Permits and Regulatory Coordination
                </h3>
                <p className="text-sm text-[#16202B] leading-relaxed">
                  Planning an overflight or landing? KCL assists with
                  identifying applicable permission requirements, organizing
                  operator and aircraft details, and coordinating requests
                  through the appropriate channels. Decisions remain with the
                  relevant authorities.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 flex flex-wrap gap-3 text-xs font-semibold text-[#0B2545]">
                <Link
                  href="/services/overflight-permits"
                  className="underline underline-offset-4"
                >
                  Overflight Permits →
                </Link>
                <Link
                  href="/services/landing-permits"
                  className="underline underline-offset-4"
                >
                  Landing Permits →
                </Link>
              </div>
            </div>

            <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-6 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="font-mono text-xs font-bold text-[#0B2545] bg-white border border-[#CBD5E1] px-2 py-0.5 inline-block">
                  02 · AIRCRAFT &amp; AIRPORT
                </span>
                <h3 className="text-lg font-bold text-[#0B2545]">
                  Ground Services and Aircraft Support
                </h3>
                <p className="text-sm text-[#16202B] leading-relaxed">
                  Ground handling, aviation fuel and aircraft catering each
                  affect an itinerary differently. We help communicate
                  requirements and coordinate suitable arrangements with the
                  relevant providers, subject to service availability.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 flex flex-wrap gap-3 text-xs font-semibold text-[#0B2545]">
                <Link
                  href="/services/ground-handling"
                  className="underline underline-offset-4"
                >
                  Ground Handling →
                </Link>
                <Link
                  href="/services/aviation-fuel"
                  className="underline underline-offset-4"
                >
                  Aviation Fuel →
                </Link>
              </div>
            </div>

            <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-6 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="font-mono text-xs font-bold text-[#0B2545] bg-white border border-[#CBD5E1] px-2 py-0.5 inline-block">
                  03 · PLANNING &amp; SLOTS
                </span>
                <h3 className="text-lg font-bold text-[#0B2545]">
                  Trip Planning, Dispatch and Slots
                </h3>
                <p className="text-sm text-[#16202B] leading-relaxed">
                  Flight planning assistance, operational and dispatch
                  coordination, and airport slot-related inquiries can be
                  considered alongside the rest of a trip, helping reduce
                  fragmented communication.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 flex flex-wrap gap-3 text-xs font-semibold text-[#0B2545]">
                <Link
                  href="/services/flight-planning-dispatch"
                  className="underline underline-offset-4"
                >
                  Planning &amp; Dispatch →
                </Link>
                <Link
                  href="/services/airport-slot-coordination"
                  className="underline underline-offset-4"
                >
                  Airport Slots →
                </Link>
              </div>
            </div>

            <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-6 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="font-mono text-xs font-bold text-[#0B2545] bg-white border border-[#CBD5E1] px-2 py-0.5 inline-block">
                  04 · CREW &amp; CATERING
                </span>
                <h3 className="text-lg font-bold text-[#0B2545]">
                  Crew Logistics &amp; Inflight Catering
                </h3>
                <p className="text-sm text-[#16202B] leading-relaxed">
                  From crew hotel requirements to local transport arrangements
                  and inflight catering requests, KCL helps operators coordinate
                  practical support around their planned schedules and stopovers.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200 flex flex-wrap gap-3 text-xs font-semibold text-[#0B2545]">
                <Link
                  href="/services/crew-logistics"
                  className="underline underline-offset-4"
                >
                  Crew Logistics →
                </Link>
                <Link
                  href="/services/inflight-catering"
                  className="underline underline-offset-4"
                >
                  Inflight Catering →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Flight Support Navigator */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
              FLIGHT SUPPORT NAVIGATOR · PREPARATION GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Prepare the Operational Details Before You Inquire
            </h2>
            <p className="text-[#16202B] text-base leading-relaxed">
              Select your operation type and primary coordination need to review
              the information your dispatch or operations team should prepare.
              This tool guides inquiry preparation and does not calculate
              regulatory approval or guarantee processing times.
            </p>
          </div>

          <PermitChecker />
        </div>
      </section>

      {/* 4. Services Ledger Table */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
                SERVICE PORTFOLIO
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                International Flight Support &amp; Aviation Services
              </h2>
              <p className="text-[#16202B] text-base">
                Explore KCL&apos;s service areas across permissions, airport
                arrangements, flight planning, slot coordination, and crew
                support.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/pakistan/flight-permissions"
                className="px-4 py-2.5 min-h-[44px] bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] text-sm font-semibold text-[#0B2545] inline-flex items-center"
              >
                Pakistan Flight Permissions →
              </Link>
              <Link
                href="/services"
                className="px-4 py-2.5 min-h-[44px] bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] text-sm font-semibold text-[#0B2545] inline-flex items-center"
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

      {/* 5. How Coordination Works & Heritage / Pakistan Specialization */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
              OPERATIONAL COORDINATION PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              How Coordination Works
            </h2>
            <RequestTrackerPreview />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
                  PAKISTAN SPECIALIZATION &amp; GLOBAL TRIP SUPPORT
                </span>
                <h2 className="text-2xl font-bold text-[#0B2545]">
                  From Pakistan to International Trip Support
                </h2>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  KCL&apos;s established Pakistan aviation focus is complemented
                  by the international service positioning described on its
                  company LinkedIn profile. Specific regions, countries and
                  delivery partnerships must be verified before website
                  publication.
                </p>
                <p className="text-sm text-[#5C6B7A] leading-relaxed">
                  Operators planning overflights or landings involving Pakistan
                  can explore our dedicated Pakistan flight permissions hub for
                  local operational context, while international trip support
                  inquiries can combine multiple services in one discussion.
                </p>
              </div>
              <div className="pt-4 border-t border-[#CBD5E1] flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  href="/pakistan/flight-permissions"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  Pakistan Flight Permissions →
                </Link>
                <Link
                  href="/services/international-flight-support"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  International Trip Support →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
                  CORPORATE HERITAGE · KASHMIRWALA GROUP (1947)
                </span>
                <h2 className="text-2xl font-bold text-[#0B2545]">
                  Rooted in Heritage, Built for Today
                </h2>
                <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                  KCL is associated with Kashmirwala Group, whose history dates
                  to 1947. That corporate heritage informs a contemporary
                  commitment to professional aviation coordination. The
                  Group&apos;s foundation date must not be represented as
                  KCL&apos;s incorporation date.
                </p>
                <p className="text-sm text-[#5C6B7A] leading-relaxed">
                  Explore practical guides on permission requests, basic
                  operational terminology and information to prepare before
                  contacting a flight support provider. Each guide shows its
                  last review date and cites relevant authoritative sources.
                </p>
              </div>
              <div className="pt-4 border-t border-[#CBD5E1] flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  href="/about"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  About KCL &amp; Heritage →
                </Link>
                <Link
                  href="/aviation-resources"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  Aviation Resources →
                </Link>
                <Link
                  href="/insights"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  Aviation Insights →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Published Airline References & Visual Split Section */}
      <ClientStrip />

      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
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
                  className="p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] transition-colors"
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
                  className="p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] transition-colors"
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
                  priority
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
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
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
