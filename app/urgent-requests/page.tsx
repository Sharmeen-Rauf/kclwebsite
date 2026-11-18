import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { CONTACT_DATA } from "@/content/contact";

export const metadata = buildMetadata({
  title: "Urgent and Out-of-Hours Requests | KCL",
  description:
    "How to reach KCL's 24/7 urgent escalation line and what flight details to send first.",
  path: "/urgent-requests",
  omitTitleSuffix: true,
});

export default function UrgentRequestsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Urgent Requests", path: "/urgent-requests" }]} />

      <InnerHero
        kicker="Escalation Channel"
        title="Urgent and Out-of-Hours Requests"
        subtitle="Direct Escalation Line and Operations Email."
        description="Use our 24/7 urgent escalation line and ops@kclpk.org when an itinerary changes or requires urgent coordination."
        imageSrc="/img/services/06-ops.webp"
        imageAlt="Flight coordination desk"
      />

      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0B2545] text-white rounded-[6px] p-6 sm:p-8 space-y-4">
              <span className="text-sm font-bold text-[#F4C400] block">
                {CONTACT_DATA.escalationLabel}
              </span>
              <h2 className="text-2xl font-bold text-white">Direct Escalation Contact</h2>
              <p className="text-base text-slate-200">
                <strong>Phone:</strong>{" "}
                <a href={`tel:${CONTACT_DATA.primaryPhone.replace(/\s+/g, "")}`} className="underline">
                  {CONTACT_DATA.primaryPhone}
                </a>
              </p>
              <p className="text-base text-slate-200">
                <strong>Email:</strong>{" "}
                <a href={`mailto:${CONTACT_DATA.opsEmail}`} className="underline">
                  {CONTACT_DATA.opsEmail}
                </a>
              </p>
            </div>

            <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-3">
              <h2 className="text-2xl font-bold text-[#0B2545]">What to send first</h2>
              <ul className="space-y-2 text-base text-[#16202B]">
                <li>• Operator legal name and callsign</li>
                <li>• Aircraft type, registration, and MTOW</li>
                <li>• Complete route or airport ICAO</li>
                <li>• Planned flight date and UTC schedule</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-[#0B2545]">What happens next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  step: "01",
                  title: "Operations Controller reviews",
                  text: "Our Operations Controller replies first to confirm your route tier and document requirements.",
                },
                {
                  step: "02",
                  title: "Filing or authority follow-up",
                  text: "Pakistan requests are filed directly; 7 direct-access countries are coordinated with the authority.",
                },
                {
                  step: "03",
                  title: "Status updates",
                  text: "We communicate authority feedback and coordinate station handling or fuel if requested.",
                },
              ].map((item) => (
                <div key={item.step} className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-5 space-y-2">
                  <span className="inline-block text-xs font-bold bg-[#0B2545] text-[#F4C400] px-2.5 py-0.5 rounded-[2px]">
                    Step {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2545]">{item.title}</h3>
                  <p className="text-base text-[#475569]">{item.text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/request-flight-support"
              className="inline-flex bg-[#F4C400] hover:bg-[#DFB200] text-[#0B2545] font-bold text-base px-6 py-3 rounded-[4px] transition-colors"
            >
              Submit Urgent Inquiry →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
