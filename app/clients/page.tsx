import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { REAL_CLIENTS } from "@/content/clients";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Airline & Aviation Clients Served",
  description:
    "International airlines supported by Kashmir Corporation Pvt Ltd (KCL) in Pakistan, including Qantas, Royal Brunei Airlines, Air Mauritius and Cambodia Airways.",
  path: "/clients",
});

export default function ClientsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Clients", path: "/clients" }]} />

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#E8A200] bg-[#133661] border border-slate-600 px-3 py-1 inline-block">
              VERIFIED AIRLINE PORTFOLIO
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              International Airlines &amp; Operators Served by KCL
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-[#E8A200]">
              Trusted by Flag Carriers and Commercial Operators Across Key Corridors.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Commercial airlines and international flight operations teams work
              with Kashmir Corporation Pvt Ltd (KCL) as their AFPA Authorized
              Flight Permission Agent and operational coordinator in Pakistan.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {REAL_CLIENTS.map((client) => (
              <article
                key={client.icao}
                className="bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-[#CBD5E1]">
                    <div>
                      <h2 className="text-xl font-bold text-[#0B2545]">
                        {client.name}
                      </h2>
                      <p className="font-mono text-xs text-[#5C6B7A]">
                        State of Registry: {client.country}
                      </p>
                    </div>
                    <span className="font-mono text-xs font-bold bg-[#0B2545] text-[#E8A200] px-2.5 py-1">
                      ICAO: {client.icao} · IATA: {client.iata}
                    </span>
                  </div>

                  <div className="my-4 bg-[#F6F8FB] border border-[#CBD5E1] p-4 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.alt}
                      width={240}
                      height={64}
                      className="h-16 w-auto object-contain"
                    />
                  </div>

                  <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                    {client.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CBD5E1] flex items-center justify-between text-xs font-mono text-[#5C6B7A]">
                  <span>VERIFIED OPERATOR CLIENT</span>
                  <Link
                    href="/request-permit"
                    className="font-sans font-bold text-[#0B2545] underline underline-offset-4"
                  >
                    Coordinate Flight Support →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
              WHY AIRLINE OCC &amp; PROCUREMENT TEAMS WORK WITH KCL
            </span>
            <h2 className="text-2xl font-bold text-[#0B2545]">
              Operational Continuity Across Seasonal Filings and Ad-Hoc Revisions
            </h2>
            <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
              International carriers transiting the Karachi (OPKR) and Lahore
              (OPLR) Flight Information Regions or operating into Pakistani
              aerodromes require an agent that understands airline dispatch
              discipline: accurate documentation reviews, clear distinction
              between coordination and regulatory authority, and 24/7
              responsiveness when schedules change.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold pt-2">
              <Link
                href="/services/flight-permission"
                className="text-[#0B2545] underline underline-offset-4"
              >
                Flight Permission Assistance →
              </Link>
              <Link
                href="/schedule-filing"
                className="text-[#0B2545] underline underline-offset-4"
              >
                Scheduled Flight Permissions →
              </Link>
              <Link
                href="/non-schedule-filing"
                className="text-[#0B2545] underline underline-offset-4"
              >
                Charter &amp; Non-Schedule Support →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Appointing a Flight Permission & Support Partner in Pakistan?"
        subheading="Contact our operations and commercial desk to discuss seasonal schedule representation, ad-hoc charter support, or station ground coordination."
        primaryLabel="Discuss Airline Representation"
        primaryHref="/contact"
      />
    </>
  );
}
