import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/utils";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PermitRequestForm } from "@/components/forms/PermitRequestForm";
import { JsonLd, buildFaqJsonLd } from "@/components/seo/JsonLd";

export const metadata = buildMetadata({
  title: "Request Flight Support & Permit Coordination | KCL",
  description:
    "Send KCL your aircraft details, route, operation type and requested aviation services to begin a flight support inquiry.",
  path: "/request-flight-support",
});

const REQUEST_SUPPORT_FAQS = [
  {
    question: "Can I request several services in one inquiry?",
    answer:
      "Yes. Select all relevant service areas and include your planned itinerary.",
  },
  {
    question: "Is an inquiry an approved flight permission?",
    answer:
      "No. It is a request for KCL to discuss coordination requirements.",
  },
];

interface RequestFlightSupportPageProps {
  searchParams: Promise<{
    flightType?: string;
    permitType?: string;
    country?: string;
    service?: string;
  }>;
}

export default async function RequestFlightSupportPage({
  searchParams,
}: RequestFlightSupportPageProps) {
  const params = await searchParams;

  const defaultFlightType =
    params.flightType === "schedule" ? "schedule" : "non-schedule";
  const defaultPermitType =
    params.permitType === "landing"
      ? "landing"
      : params.permitType === "both"
      ? "both"
      : "overflight";
  const defaultCountry = params.country || "";
  const defaultService = params.service || "";

  return (
    <>
      <JsonLd data={buildFaqJsonLd(REQUEST_SUPPORT_FAQS)} />

      <Breadcrumbs
        items={[
          { name: "Request Flight Support", path: "/request-flight-support" },
        ]}
      />

      <section className="kcl-hero-bg text-white py-10 sm:py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#F2C200] bg-white/10 backdrop-blur-sm border border-white/25 px-3 py-1 inline-block">
              FLIGHT SUPPORT INQUIRY · {SITE_CONFIG.authorityBadge}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Request Flight Support &amp; Permit Coordination
            </h1>
            <p className="text-lg font-semibold text-[#F2C200]">
              Tell Us About Your Operation. We&apos;ll Help Identify the Next Steps.
            </p>
            <p className="text-base text-slate-100 leading-relaxed">
              Whether your itinerary is confirmed or still being planned, start
              with the information available. KCL can use your inquiry to
              understand the requested permission and service coordination
              scope. This form is not a permit application submitted to an
              authority.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* 4-Step Guide from V2 Section 17 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white border border-[#CBD5E1] p-4 space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#0B2545]">
                STEP ONE — OPERATION TYPE
              </span>
              <p className="text-xs text-[#16202B] leading-relaxed">
                Choose scheduled airline, charter/non-scheduled,
                business/private aviation, cargo or other.
              </p>
            </div>
            <div className="bg-white border border-[#CBD5E1] p-4 space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#0B2545]">
                STEP TWO — SERVICES NEEDED
              </span>
              <p className="text-xs text-[#16202B] leading-relaxed">
                Select overflight permission, landing permission, ground
                handling, fuel, flight planning, slots, dispatch assistance,
                crew logistics, catering or multiple services.
              </p>
            </div>
            <div className="bg-white border border-[#CBD5E1] p-4 space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#0B2545]">
                STEP THREE — FLIGHT INFORMATION
              </span>
              <p className="text-xs text-[#16202B] leading-relaxed">
                Provide relevant airports, aircraft type and registration,
                route, planned date and UTC times, flight purpose and
                operational notes.
              </p>
            </div>
            <div className="bg-white border border-[#CBD5E1] p-4 space-y-1.5">
              <span className="font-mono text-xs font-bold text-[#0B2545]">
                STEP FOUR — CONTACT &amp; REVIEW
              </span>
              <p className="text-xs text-[#16202B] leading-relaxed">
                Enter company/operator, contact name, business email and
                optional phone; review details and privacy notice.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <PermitRequestForm
                defaultFlightType={defaultFlightType}
                defaultPermitType={defaultPermitType}
                defaultCountry={defaultCountry}
                defaultService={defaultService}
              />
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-[#CBD5E1] p-6 space-y-3">
                <span className="font-mono text-xs uppercase text-[#E8A200] bg-[#0B2545] px-2.5 py-1 inline-block font-semibold">
                  SUBMISSION BEHAVIOR
                </span>
                <h2 className="text-base font-bold text-[#0B2545]">
                  Inquiry Review Preview
                </h2>
                <p className="text-xs text-[#16202B] leading-relaxed">
                  Until a live backend or verified email handoff is configured,
                  this form generates a clearly labeled Inquiry Review Preview
                  so you can inspect your structured flight summary and send it
                  via KCL&apos;s confirmed contact channel. Private inquiry
                  details are never logged to the server console.
                </p>
                <div className="space-y-1.5 font-mono text-xs bg-[#F6F8FB] border border-[#CBD5E1] p-3.5 text-[#0B2545]">
                  <p>
                    <strong>Operations Email:</strong>{" "}
                    {SITE_CONFIG.opsEmailPlaceholder}
                  </p>
                  <p>
                    <strong>Operations Tel:</strong>{" "}
                    {SITE_CONFIG.opsPhonePlaceholder}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-[#CBD5E1] p-6 space-y-3">
                <h2 className="text-base font-bold text-[#0B2545]">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3 text-xs text-[#16202B]">
                  {REQUEST_SUPPORT_FAQS.map((faq) => (
                    <div
                      key={faq.question}
                      className="border-b border-slate-200 pb-2.5 last:border-b-0 last:pb-0"
                    >
                      <p className="font-bold text-[#0B2545] mb-1">
                        {faq.question}
                      </p>
                      <p className="leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#CBD5E1] p-6 space-y-3">
                <h2 className="text-base font-bold text-[#0B2545]">
                  Flight Inquiry Checklist (PDF)
                </h2>
                <p className="text-xs text-[#16202B]">
                  Download a summary of operator, aircraft, route, UTC schedule,
                  and service information typically helpful for an initial
                  discussion.
                </p>
                <a
                  href="/files/kcl-permit-request-checklist.pdf"
                  download
                  className="w-full min-h-[44px] px-4 py-2.5 bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-xs font-mono inline-flex items-center justify-center"
                >
                  Download Flight Inquiry Checklist ↓
                </a>
                <div className="pt-2 text-xs">
                  <Link
                    href="/aviation-resources"
                    className="font-semibold text-[#0B2545] underline underline-offset-4"
                  >
                    Browse Aviation Resources →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

