import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "About KCL | International Aviation Support Company",
  description:
    "Discover KCL International Flight Support, its Kashmirwala Group heritage and aviation coordination services for airline and charter operations.",
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
      "Recognize how flight permissions, airport slots, ground handling, fuel, planning, and crew arrangements interact.",
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

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#E8A200] bg-[#133661] border border-slate-600 px-3 py-1 inline-block">
              KCL INTERNATIONAL FLIGHT SUPPORT · {SITE_CONFIG.authorityBadge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Rooted in Pakistan. Connected to International Aviation.
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Kashmir Corporation (Pvt.) Ltd. connects an established business
              heritage with a practical approach to modern aviation operations.
              KCL International Flight Support works with aviation stakeholders
              seeking coordinated assistance across permissions, flight planning
              and essential trip arrangements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Heritage & What KCL Supports */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                CORPORATE HERITAGE · KASHMIRWALA GROUP (1947)
              </span>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                A Heritage of Business Relationships
              </h2>
              <p className="text-[#16202B] text-base leading-relaxed">
                Kashmirwala Group traces its origins to 1947. Through changing
                aviation markets and operating requirements, the value of clear
                communication, professional relationships and reliable
                information remains constant. KCL builds on that heritage while
                focusing on contemporary aviation support.
              </p>
              <p className="text-xs sm:text-sm text-[#5C6B7A] bg-[#F6F8FB] border border-[#CBD5E1] p-4">
                <strong className="text-[#0B2545]">
                  Historical Accuracy Note:
                </strong>{" "}
                1947 represents the foundation heritage of Kashmirwala Group and
                is not represented as the incorporation date of Kashmir
                Corporation (Pvt.) Ltd.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                SERVICE AREAS &amp; STAKEHOLDERS
              </span>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                What KCL Supports &amp; Who We Work With
              </h2>
              <p className="text-[#16202B] text-base leading-relaxed">
                Our areas of work include flight permission coordination, ground
                handling arrangements, aviation fuel, flight planning
                assistance, airport slot coordination, operational dispatch
                support, crew hotel and transport, and in-flight catering
                coordination. Each service is subject to the applicable
                authority or provider arrangements.
              </p>
              <p className="text-[#16202B] text-base leading-relaxed">
                KCL&apos;s services are positioned for scheduled airlines,
                charter operators, private and business aviation teams, cargo
                carriers and operations departments coordinating complex
                itineraries.
              </p>
            </div>
          </div>

          {/* Working Philosophy */}
          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
              OUR WORKING PHILOSOPHY
            </span>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-3">
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
                  className="bg-[#F6F8FB] border border-[#CBD5E1] p-4"
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
            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                REGIONAL &amp; INTERNATIONAL POSITIONING
              </span>
              <h2 className="text-2xl font-bold text-[#0B2545]">
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
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  Pakistan Flight Permissions →
                </Link>
                <Link
                  href="/services/international-flight-support"
                  className="text-[#0B2545] underline underline-offset-4"
                >
                  International Flight Support →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#E8A200] bg-[#0B2545] px-2.5 py-1 inline-block font-semibold">
                PUBLISHING BLOCK · MANAGEMENT VERIFICATION
              </span>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                Credentials and Leadership
              </h2>
              <p className="text-sm text-[#16202B] leading-relaxed">
                This block is reserved for verified AFPA designation and license
                evidence, legal company name confirmation, reconciled current
                office address, approved leadership biographies, and authorized
                corporate imagery. Unapproved client logos are never added.
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
                        AFPA Designation
                      </th>
                      <td className="py-2.5 px-3 font-mono text-[#5C6B7A]">
                        {SITE_CONFIG.afpaLicensePlaceholder}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2.5 px-3 bg-[#F6F8FB] font-semibold text-[#0B2545] border-r border-[#CBD5E1]">
                        Verified Office Address
                      </th>
                      <td className="py-2.5 px-3 font-mono text-[#5C6B7A]">
                        {SITE_CONFIG.addressPlaceholder}
                      </td>
                    </tr>
                    <tr>
                      <th className="py-2.5 px-3 bg-[#F6F8FB] font-semibold text-[#0B2545] border-r border-[#CBD5E1]">
                        Operations Contact
                      </th>
                      <td className="py-2.5 px-3 font-mono text-[#5C6B7A]">
                        {SITE_CONFIG.opsEmailPlaceholder} |{" "}
                        {SITE_CONFIG.opsPhonePlaceholder}
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
