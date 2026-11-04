import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { COUNTRY_PERMIT_GUIDES } from "@/content/permits";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PermitChecker } from "@/components/sections/PermitChecker";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Flight Permit Directory & Airspace Guide",
  description:
    "Review overflight and landing permit requirements, FIR codes, airports and documentation guidelines for Pakistan (OPKR & OPLR) with KCL.",
  path: "/permit-directory",
});

export default function PermitDirectoryIndexPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Permit Directory", path: "/permit-directory" }]}
      />

      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kcl-card max-w-3xl space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
            <span className="font-mono text-xs uppercase tracking-wider text-white bg-white/10 backdrop-blur-sm border border-white/25 border-b-2 border-b-[var(--accent)] px-3 py-1 inline-block">
              DISPATCH REFERENCE · AIRSPACE &amp; AERODROME GUIDES
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Flight Permit Directory &amp; Pre-Filing Requirements Checker
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-slate-100">
              Prepare Complete Documentation Before Submitting Your Application.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Every jurisdiction applies distinct documentation rules for
              scheduled and non-scheduled overflight and landing permissions.
              Use the interactive checker and country profiles below to review
              typical operator requirements, FIR codes, and primary aerodromes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <PermitChecker />

          <div className="space-y-6">
            <div>
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
                JURISDICTION PROFILES
              </span>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                Country Airspace &amp; Landing Permit Guides
              </h2>
              <p className="text-sm sm:text-base text-[#16202B] mt-1">
                Detailed dispatch profiles maintained by Kashmir Corporation Pvt
                Ltd (KCL). All lead times and validity windows are subject to
                civil aviation authority review.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {COUNTRY_PERMIT_GUIDES.map((country) => (
                <article
                  key={country.slug}
                  className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-[#CBD5E1]">
                    <div>
                      <span className="font-mono text-xs text-[#5C6B7A] uppercase block">
                        ISO: {country.isoCode} · AUTHORITY:{" "}
                        {country.caaAuthorityName}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0B2545]">
                        <Link
                          href={`/permit-directory/${country.slug}`}
                        >
                          {country.countryName} Overflight &amp; Landing Permit
                          Guide
                        </Link>
                      </h3>
                    </div>
                    <span className="font-mono text-xs bg-[#0B2545] text-white border-b-2 border-[var(--accent)] px-3 py-1 font-semibold">
                      FIR: {country.firCodes.join(" · ")}
                    </span>
                  </div>

                  <p className="text-[#16202B] text-base mb-6 leading-relaxed">
                    {country.summary}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                    {country.primaryAirports.map((apt) => (
                      <div
                        key={apt.icao}
                        className="bg-[#F6F8FB] border border-[#CBD5E1] p-3 font-mono text-xs"
                      >
                        <span className="font-bold text-[#0B2545] block">
                          {apt.icao} / {apt.iata}
                        </span>
                        <span className="text-[#5C6B7A] font-sans">
                          {apt.city}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#CBD5E1]">
                    <Link
                      href={`/permit-directory/${country.slug}`}
                      className="kcl-btn-outline-navy min-h-[44px] px-5 py-2.5 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
                    >
                      Open {country.countryName} Permit Guide →
                    </Link>
                    <Link
                      href={`/request-permit?country=${encodeURIComponent(
                        country.countryName
                      )}`}
                      className="kcl-btn-primary min-h-[44px] px-5 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
                    >
                      Coordinate {country.countryName} Permit
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Need Clarification on a Specific Route or Permit Category?"
        subheading="Send your proposed route string, aircraft type, and UTC schedule to our 24/7 operations desk for a tailored pre-filing check."
        primaryLabel="Consult KCL Operations Desk"
        primaryHref="/request-permit"
      />
    </>
  );
}
