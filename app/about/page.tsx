import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "About KCL | International Aviation Support Company",
  description:
    "Discover KCL International Flight Support, its Kashmirwala Group heritage and six core aviation services for airline and charter operations.",
  path: "/about",
});

const WORKING_PHILOSOPHY = [
  {
    step: "01",
    name: "Listen first",
    description:
      "Begin by understanding the operator's planned movement, schedule priorities, and operational constraints.",
  },
  {
    step: "02",
    name: "Understand the flight",
    description:
      "Review aircraft registration and type, route, airports, UTC timings, and the purpose of the operation.",
  },
  {
    step: "03",
    name: "Identify dependencies",
    description:
      "Recognize how flight permissions, ground handling, catering, fuel, and crew accommodation interact.",
  },
  {
    step: "04",
    name: "Communicate accurately",
    description:
      "Distinguish clearly between KCL's coordination role and the decisions that rest with aviation authorities or service providers.",
  },
  {
    step: "05",
    name: "Keep the next step clear",
    description:
      "Maintain practical, respectful communication that values the time and responsibilities of aviation professionals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "About KCL", path: "/about" }]} />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 px-3 py-1 inline-block">
              KCL INTERNATIONAL FLIGHT SUPPORT · {SITE_CONFIG.authorityBadge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              International Flight Support &amp; Aviation Services
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Kashmir Corporation (Pvt.) Ltd. is an international flight support and aviation services company. Backed by the Kashmirwala Group, serving aviation since 1947, KCL coordinates flight permissions, ground handling, catering services, aviation fuel, crew accommodation arrangements, and 24/7 operational support for commercial airlines, charter operators, cargo carriers, and business aviation teams worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Heritage & What KCL Supports */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="kcl-card lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                CORPORATE HERITAGE · KASHMIRWALA GROUP (1947)
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                Built on Experience. Focused on Every Flight Ahead.
              </h2>
              <p className="text-[#16202B] text-base leading-relaxed">
                Kashmirwala Group traces its origins to 1947. Through changing
                aviation markets and operating requirements, the value of clear
                communication, professional relationships and reliable
                information remains constant. KCL builds on that heritage while
                focusing on contemporary aviation support.
              </p>
            </div>

            <div className="kcl-card lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                SIX CORE SERVICES &amp; STAKEHOLDERS
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                What KCL Supports &amp; Who We Work With
              </h2>
              <p className="text-[#16202B] text-base leading-relaxed">
                KCL&apos;s six core services encompass{" "}
                <strong>Flight Permission Facilitation</strong> (scheduled and
                non-scheduled overflight and landing permits),{" "}
                <strong>Ground Handling</strong>,{" "}
                <strong>Catering Services</strong>,{" "}
                <strong>Fuel Supply</strong>,{" "}
                <strong>Accommodation Arrangements</strong> (crew hotels and
                transport), and <strong>24/7 Operational Support</strong>, along
                with connected flight planning and airport slot inquiries. Each
                service is subject to the applicable authority or provider
                arrangements.
              </p>
              <p className="text-[#16202B] text-base leading-relaxed">
                KCL&apos;s services are positioned strictly for B2B aircraft
                operations—scheduled airlines, charter operators, private and
                business aviation teams, cargo carriers, and flight dispatch
                departments. We do not offer passenger ticket sales, GDS
                distribution, travel agency services, or commercial GSA sales.
              </p>
            </div>
          </div>

          {/* Working Philosophy */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
              OUR WORKING PHILOSOPHY
            </span>
            <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545] mb-3">
              Listen First. Understand the Flight. Identify Dependencies. Communicate Accurately. Keep the Next Step Clear.
            </h2>
            <p className="text-sm sm:text-base text-[#16202B] mb-6">
              These principles shape a service experience that respects the time
              and responsibilities of aviation professionals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {WORKING_PHILOSOPHY.map((item) => (
                <div
                  key={item.step}
                  className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-4"
                >
                  <span className="font-mono text-xs text-[#5C6B7A] block mb-1">
                    PRINCIPLE {item.step}
                  </span>
                  <h3 className="text-base font-bold text-[#0B2545] mb-1.5">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#16202B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pakistan Expertise & International Perspective + Credentials Publishing Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="kcl-card lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                REGIONAL &amp; INTERNATIONAL POSITIONING
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                Pakistan Expertise and International Perspective
              </h2>
              <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                KCL has an established connection to Pakistan flight permission
                facilitation; its LinkedIn profile also describes global trip
                support. Exact operational coverage and any partner-delivery
                model should be approved by management before specific
                geographic claims are published.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  href="/pakistan/flight-permissions"
                  className="kcl-link text-[#0B2545]"
                >
                  Pakistan Flight Permissions →
                </Link>
                <Link
                  href="/services"
                  className="kcl-link text-[#0B2545]"
                >
                  Explore Six Core Services →
                </Link>
              </div>
            </div>

            <div className="kcl-card lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#CBD5E1] pb-4">
                <Image
                  src="/img/kclf final logo.png"
                  alt="KCL Flight Support — Kashmir Corporation (Pvt.) Ltd. Official Logo"
                  width={160}
                  height={65}
                  className="h-11 w-auto object-contain"
                />
                <span className="font-mono text-xs uppercase text-white bg-[#0B2545] px-2.5 py-1 inline-block font-semibold">
                  OFFICIAL COMPANY PROFILE
                </span>
              </div>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                Corporate Credentials &amp; Licences
              </h2>
              <p className="text-sm text-[#16202B] leading-relaxed">
                KCL operates under verified regulatory credentials and industry memberships, delivering professional flight support and aviation services worldwide.
              </p>
              <div className="overflow-x-auto border border-[#CBD5E1]">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <tbody className="divide-y divide-[#CBD5E1]">
                    <tr>
                      <th className="py-2.5 px-3 bg-[#F6F8FB] font-semibold text-[#0B2545] w-2/5 border-r border-[#CBD5E1]">
                        Legal Entity
                      </th>
                      <td className="py-2.5 px-3 font-mono text-[#16202B]">
                        {SITE_CONFIG.name}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2.5 px-3 bg-[#F6F8FB] font-semibold text-[#0B2545] border-r border-[#CBD5E1]">
                        Licences &amp; Memberships
                      </th>
                      <td className="py-2.5 px-3 text-[#16202B]">
                        AFPA (Pakistan Civil Aviation Authority) | DTS | FAGSA | TAAP | Karachi Chamber of Commerce and Industry | Air Cargo Association
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2.5 px-3 bg-[#F6F8FB] font-semibold text-[#0B2545] border-r border-[#CBD5E1]">
                        Head Office Address
                      </th>
                      <td className="py-2.5 px-3 text-[#16202B]">
                        {SITE_CONFIG.address}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2.5 px-3 bg-[#F6F8FB] font-semibold text-[#0B2545] border-r border-[#CBD5E1]">
                        24/7 Operations Desk
                      </th>
                      <td className="py-2.5 px-3 font-mono text-[#16202B]">
                        {SITE_CONFIG.opsEmail} | {SITE_CONFIG.opsPhone} / {SITE_CONFIG.secondaryPhone}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2.5 px-3 bg-[#F6F8FB] font-semibold text-[#0B2545] border-r border-[#CBD5E1]">
                        General &amp; Support Contact
                      </th>
                      <td className="py-2.5 px-3 font-mono text-[#16202B]">
                        {SITE_CONFIG.infoEmail} | {SITE_CONFIG.supportEmail}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientStrip compact />
      <CtaBanner
        heading="Aviation Support Starts with Understanding the Operation."
        subheading="Share your planned itinerary, aircraft details, and required services to discuss how KCL can support your operation."
        primaryLabel="Speak with KCL"
        primaryHref="/contact"
        secondaryLabel="Request Flight Support"
        secondaryHref="/request-flight-support"
      />
    </>
  );
}
