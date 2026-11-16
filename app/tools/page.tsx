import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerHero } from "@/components/sections/InnerHero";
import { ToolSuggestionForm } from "@/components/sections/tools/ToolSuggestionForm";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "Aviation Dispatch Tools (ICAO, Prefixes, UTC, Unit Converter)",
  description:
    "Free reference tools used by dispatchers, flight followers and operations teams: Airport Code Lookup, UTC Time Zone Planner, ICAO Phonetic Alphabet, Aircraft Registration Prefixes, Unit Converter, and Flight Time Estimator.",
  path: "/tools",
});

const TOOLS_LIST = [
  {
    title: "Airport Code Lookup",
    href: "/tools/airport-code-lookup",
    summary: "Search ICAO, IATA or city worldwide using bundled airport data.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "UTC and Time Zone Planner",
    href: "/tools/utc-time-converter",
    summary: "Compare UTC, PKT and station times with a Call Window Finder.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "ICAO Phonetic Alphabet",
    href: "/tools/icao-phonetic-alphabet",
    summary: "Spell any callsign or registration in NATO/ICAO phonetics.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
      </svg>
    ),
  },
  {
    title: "Aircraft Registration Prefixes",
    href: "/tools/aircraft-registration-prefixes",
    summary: "Search international aircraft nationality prefixes by code or country.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
      </svg>
    ),
  },
  {
    title: "Unit Converter",
    href: "/tools/aviation-unit-converter",
    summary: "Convert aviation fuel, distance, speed and altitude units.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    title: "Flight Time Estimator",
    href: "/tools/flight-time-estimator",
    summary: "Estimate flight duration and UTC arrival from distance and speed.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Aviation Tools", path: "/tools" }]} />

      <InnerHero
        kicker="Dispatch reference utilities"
        title="Aviation Dispatch & Flight Operations Tools"
        subtitle="Free reference tools used by dispatchers, flight followers and operations teams."
        description="Built for airline dispatchers, flight followers, and charter coordinators verifying airport codes, UTC schedules, aircraft nationality marks, and unit conversions."
        imageSrc="/img/services/07-dispatch.webp"
        imageAlt="Flight planning and dispatch briefing desk with aeronautical charts"
        buttons={[
          {
            label: "Request Flight Support",
            href: "/request-flight-support",
            variant: "primary",
          },
          {
            label: "Browse Glossary & Checklists",
            href: "/aviation-resources",
            variant: "outline",
          },
        ]}
        snapshotRows={[
          { label: "Available tools", value: "6 dispatch utilities" },
          { label: "Data storage", value: "Runs in browser only" },
          { label: "Operations desk", value: "24/7" },
        ]}
      />

      <section className="py-12 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TOOLS_LIST.map((tool) => (
              <article
                key={tool.href}
                className="bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[6px] p-6 flex flex-col justify-between gap-5 transition-colors motion-reduce:transition-none"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-[4px] bg-[#F8FAFC] border border-[#CBD5E1] text-[#0B2545] flex items-center justify-center">
                    {tool.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#0B2545]">
                    <Link
                      href={tool.href}
                      className="hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[2px]"
                    >
                      {tool.title}
                    </Link>
                  </h2>
                  <p className="text-base text-[#475569] leading-relaxed">
                    {tool.summary}
                  </p>
                </div>

                <Link
                  href={tool.href}
                  className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base min-h-[44px] px-4 py-2.5 inline-flex items-center justify-between rounded-[4px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  <span>Open tool</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <ToolSuggestionForm />
        </div>
      </section>

      <section className="py-8 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ClientStrip compact hideHeading />
        </div>
      </section>

      <CtaBanner
        heading="Ready to Coordinate Your Next Flight?"
        subheading="Move from flight planning to permit coordination—transmit your route, UTC timings, and aircraft registration to our 24/7 operations desk."
        primaryLabel="Request Flight Support"
        primaryHref="/request-flight-support"
      />
    </>
  );
}
