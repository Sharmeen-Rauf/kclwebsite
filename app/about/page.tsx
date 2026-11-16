import React from "react";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd, buildBreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { CONTACT_DATA } from "@/content/contact";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  LegacyTimelineSlider,
  type LegacyMilestone,
} from "@/components/sections/about/LegacyTimelineSlider";
import {
  LeadershipSlider,
  type LeaderProfile,
} from "@/components/sections/about/LeadershipSlider";
import { AboutFactsBand } from "@/components/sections/about/AboutFactsBand";
import { HowWeWorkBand } from "@/components/sections/about/HowWeWorkBand";
import {
  CredentialsTaxiway,
  type CredentialBoard,
} from "@/components/sections/about/CredentialsTaxiway";

export const metadata = buildMetadata({
  title: "About KCL | International Flight Support & Permits",
  description:
    "KCL International Flight Support is part of the Kashmirwala Group, serving aviation since 1947. Permits, handling, fuel, catering and crew services worldwide.",
  path: "/about",
  omitTitleSuffix: true,
});

function publicFileIfExists(relativePath: string): string | null {
  const fullPath = path.join(process.cwd(), "public", relativePath);
  return fs.existsSync(fullPath) ? `/${relativePath.replace(/\\/g, "/")}` : null;
}

const RAW_MILESTONES = [
  {
    slug: "1947",
    era: "1947",
    text: "The Kashmirwala Group is founded by Haji Fazal Ahmed Kashmirwala and becomes a pioneer in Pakistan's aviation and travel industry.",
  },
  {
    slug: "early-years",
    era: "Early years",
    text: "Kashmir Corporation is appointed the first General Sales Agent and ground handling agent for the national airline (PIA) at three domestic stations: Hyderabad, Sukkur and Nawab Shah.",
  },
  {
    slug: "1960",
    era: "1960",
    text: "Aftab Ahmed Kashmirwala becomes Chairman, trained by his father, and leads the company's work with foreign airlines.",
  },
  {
    slug: "2013",
    era: "2013",
    text: "Shakil Aftab Kashmirwala becomes Chairman.",
  },
  {
    slug: "today",
    era: "Today",
    text: "KCL International Flight Support supports airlines, private operators, cargo carriers and charter operators worldwide through Kashmir Corporation (Pvt.) Ltd. and PakTurk Enterprises (Pvt.) Ltd.",
  },
];

const RAW_LEADERS = [
  {
    slug: "haji-fazal-ahmed-kashmirwala",
    initials: "FA",
    name: "Haji Fazal Ahmed Kashmirwala",
    role: "Founder",
    details: null,
  },
  {
    slug: "aftab-ahmed-kashmirwala",
    initials: "AA",
    name: "Aftab Ahmed Kashmirwala",
    role: "Chairman 1960 to 2013",
    details: "Trained by his father, led the company's work with foreign airlines.",
  },
  {
    slug: "shakil-aftab-kashmirwala",
    initials: "SA",
    name: "Shakil Aftab Kashmirwala",
    role: "Chairman 2013 to present",
    details: null,
  },
  {
    slug: "omer-shakil-kashmirwala",
    initials: "OS",
    name: "Omer Shakil Kashmirwala",
    role: "Chief Executive Officer",
    details:
      "Head of Cargo; background in airline sales, marketing, reservations and ticketing; studying Aviation Business Administration at Embry-Riddle Aeronautical University.",
  },
  {
    slug: "owais-shakil-kashmirwala",
    initials: "OW",
    name: "Owais Shakil Kashmirwala",
    role: "Director",
    details:
      "Holds a Commercial Pilot Licence, pursuing Certified Flight Instructor qualification.",
  },
];

const EIGHT_SERVICES = [
  {
    name: "Flight Permissions",
    href: "/services/overflight-permits",
    summary: "Overflight, landing, PPR and short-notice permits worldwide.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "Ground Handling",
    href: "/services/ground-handling",
    summary: "Aircraft, passenger, baggage, cargo and turnaround support.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
      </svg>
    ),
  },
  {
    name: "Aviation Fuel",
    href: "/services/aviation-fuel",
    summary: "Jet A-1, TS-1 and Avgas 100LL uplift coordination.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 22h12" />
        <path d="M4 9h10" />
        <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      </svg>
    ),
  },
  {
    name: "Flight Planning and Dispatch",
    href: "/services/flight-planning-dispatch",
    summary: "Route optimisation, ICAO filing, weather, NOTAM and ETOPS.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
  {
    name: "Airport Slot Coordination",
    href: "/services/airport-slot-coordination",
    summary: "Slot requests and timing aligned with your permits.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    name: "Crew Accommodation and Transport (HOTAC)",
    href: "/services/crew-logistics",
    summary: "Airport-proximity hotels and crew transfers.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
  },
  {
    name: "Inflight Catering",
    href: "/services/inflight-catering",
    summary: "Passenger and crew meals, including special dietary plans.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      </svg>
    ),
  },
  {
    name: "24/7 Operations Support",
    href: "/services/operations-support",
    summary: "Round-the-clock help for urgent, ad-hoc and diverted flights.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" />
      </svg>
    ),
  },
];

const RAW_CREDENTIALS = [
  {
    slug: "afpa",
    abbr: "AFPA",
    title: "AFPA License Holder",
    authority: "Pakistan Civil Aviation Authority",
  },
  {
    slug: "dts",
    abbr: "DTS",
    title: "DTS License Holder",
    authority: "Department of Tourist Services",
  },
  {
    slug: "fagsa",
    abbr: "FAGSA",
    title: "FAGSA",
    authority: "Federation of Airline General Sales Agents",
  },
  {
    slug: "taap",
    abbr: "TAAP",
    title: "TAAP",
    authority: "Travel Agents Association of Pakistan",
  },
  {
    slug: "kcci",
    abbr: "KCCI",
    title: "Karachi Chamber of Commerce and Industry",
    authority: "Member",
  },
  {
    slug: "aca",
    abbr: "ACA",
    title: "Air Cargo Association",
    authority: "Member",
  },
];

export default function AboutPage() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://kclwebsite.vercel.app";

  const milestones: LegacyMilestone[] = RAW_MILESTONES.map((m) => ({
    ...m,
    imageSrc: publicFileIfExists(`img/about/timeline-${m.slug}.webp`),
  }));

  const leaders: LeaderProfile[] = RAW_LEADERS.map((l) => ({
    ...l,
    photoSrc: publicFileIfExists(`img/team/${l.slug}.webp`),
  }));

  const credentials: CredentialBoard[] = RAW_CREDENTIALS.map((c) => ({
    ...c,
    logoSrc: publicFileIfExists(`img/credentials/${c.slug}.svg`),
  }));

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KCL International Flight Support",
    legalName: "Kashmir Corporation (Pvt.) Ltd.",
    url: siteUrl,
    parentOrganization: {
      "@type": "Organization",
      name: "Kashmirwala Group",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_DATA.address,
      addressLocality: "Karachi",
      addressCountry: "PK",
    },
    telephone: CONTACT_DATA.phones,
    email: [
      CONTACT_DATA.opsEmail,
      CONTACT_DATA.infoEmail,
      CONTACT_DATA.supportEmail,
    ],
    sameAs: [
      CONTACT_DATA.social.facebook,
      CONTACT_DATA.social.instagram,
      CONTACT_DATA.social.linkedin,
    ],
    memberOf: RAW_CREDENTIALS.map((c) => ({
      "@type": "Organization",
      name: `${c.title} (${c.authority})`,
    })),
  };

  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "About KCL", path: "/about" },
  ]);

  return (
    <>
      <JsonLd data={[organizationLd, breadcrumbLd]} />
      <Breadcrumbs items={[{ name: "About KCL", path: "/about" }]} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[520px] lg:min-h-[560px] py-12 lg:py-14 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero-flight-ops.jpg"
            alt="Commercial aircraft and business jet on an international airport ramp"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hero-zoom-photo"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/92 via-[#0B2545]/75 to-[#14406E]/45"
          />

          {/* Large outlined numeral 1947 behind the headline (stroke only, white 8% opacity) */}
          <svg
            viewBox="0 0 900 260"
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-[540px] sm:w-[760px] h-auto pointer-events-none select-none"
          >
            <text
              x="10"
              y="210"
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.08"
              strokeWidth="2.5"
              fontSize="220"
              fontWeight="800"
              className="about-draw-1947"
            >
              1947
            </text>
          </svg>

          {/* Thin route arc with small plane crossing once */}
          <svg
            viewBox="0 0 720 260"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-35"
          >
            <path
              d="M 40 220 Q 320 70 680 110"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeDasharray="5 5"
            />
          </svg>
          <div
            aria-hidden="true"
            className="about-hero-plane absolute top-0 left-0 text-white pointer-events-none"
          >
            <svg className="w-4 h-4 rotate-90" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 12L15 14L12 22L9 14L2 12L9 9L12 2Z" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.16] tracking-tight">
                About KCL International Flight Support
              </h1>
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl">
                KCL International Flight Support provides permits, ground handling, fuel, catering and crew services for airlines, private operators, cargo carriers and charter operators worldwide, with a team on call 24/7. We are part of the Kashmirwala Group, which has served aviation since 1947.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/request-flight-support"
                  className="bg-white hover:bg-slate-100 text-[#0B2545] font-bold text-base min-h-[44px] px-6 py-2.5 inline-flex items-center justify-center rounded-[4px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
                >
                  Request Flight Support
                </Link>
                <a
                  href="#leadership"
                  className="border border-white/60 hover:bg-white/15 text-white font-semibold text-base min-h-[44px] px-6 py-2.5 inline-flex items-center justify-center rounded-[4px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
                >
                  Meet the Leadership
                </a>
              </div>
            </div>

            {/* Frosted Snapshot Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-[6px] p-5 sm:p-6 shadow-lg space-y-3">
                <div className="text-lg font-bold text-white border-b border-white/20 pb-2.5">
                  Company Snapshot
                </div>
                <dl className="space-y-2.5 text-base">
                  <div className="flex justify-between gap-3 border-b border-white/10 pb-2">
                    <dt className="text-slate-200">Group</dt>
                    <dd className="font-semibold text-white text-right">
                      Part of the Kashmirwala Group
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-white/10 pb-2">
                    <dt className="text-slate-200">Aviation heritage</dt>
                    <dd className="font-semibold text-white text-right">
                      Serving aviation since 1947
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-white/10 pb-2">
                    <dt className="text-slate-200">Head office</dt>
                    <dd className="font-semibold text-white text-right">
                      Karachi
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-slate-200">Availability</dt>
                    <dd className="font-semibold text-white text-right">
                      24/7 operations desk
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Legacy Timeline Slider */}
      <LegacyTimelineSlider milestones={milestones} />

      {/* 3. Leadership Slider */}
      <LeadershipSlider leaders={leaders} />

      {/* 4. Facts Band */}
      <AboutFactsBand />

      {/* 5. What We Do (Compact 8-tile Icon Strip) */}
      <section className="relative py-12 sm:py-16 bg-white border-b border-[#CBD5E1] overflow-hidden">
        {/* Subtle aeronautical-chart grid background (4-5% opacity) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0B2545 1px, transparent 1px), linear-gradient(to bottom, #0B2545 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              What we do
            </h2>
            <p className="text-base text-[#475569] mt-1">
              We coordinate the eight core requirements of international flight operations through dedicated 24/7 flight support desks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EIGHT_SERVICES.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545] rounded-[6px] p-4 flex flex-col justify-between gap-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-[4px] bg-white border border-[#CBD5E1] text-[#0B2545] flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] group-hover:underline underline-offset-2">
                    {service.name}
                  </h3>
                  <p className="text-base text-[#475569] leading-snug">
                    {service.summary}
                  </p>
                </div>
                <span className="text-base font-semibold text-[#0B2545]">
                  View service →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How We Work */}
      <HowWeWorkBand />

      {/* 7. Credentials as Airport Taxiway Signs */}
      <CredentialsTaxiway credentials={credentials} />

      {/* 8. Contact */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Contact
            </h2>
            <p className="text-base text-[#475569] mt-1">
              Reach our 24/7 international flight operations desk directly.
            </p>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Address & Phones */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-1">
                    Head Office Address
                  </h3>
                  <p className="text-base text-[#1E293B] leading-relaxed">
                    {CONTACT_DATA.address}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-1">
                    Telephone (24/7)
                  </h3>
                  <div className="space-y-1">
                    {CONTACT_DATA.phones.map((phone) => (
                      <div key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s+/g, "")}`}
                          className="text-base font-semibold text-[#0B2545] hover:underline underline-offset-4"
                        >
                          {phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Emails */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#0B2545]">
                  Email Addresses
                </h3>
                <div className="space-y-2 text-base text-[#1E293B]">
                  <div>
                    <span className="text-[#475569]">Operations Desk: </span>
                    <a
                      href={`mailto:${CONTACT_DATA.opsEmail}`}
                      className="font-semibold text-[#0B2545] hover:underline"
                    >
                      {CONTACT_DATA.opsEmail}
                    </a>
                  </div>
                  <div>
                    <span className="text-[#475569]">General Inquiries: </span>
                    <a
                      href={`mailto:${CONTACT_DATA.infoEmail}`}
                      className="font-semibold text-[#0B2545] hover:underline"
                    >
                      {CONTACT_DATA.infoEmail}
                    </a>
                  </div>
                  <div>
                    <span className="text-[#475569]">Customer Support: </span>
                    <a
                      href={`mailto:${CONTACT_DATA.supportEmail}`}
                      className="font-semibold text-[#0B2545] hover:underline"
                    >
                      {CONTACT_DATA.supportEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CBD5E1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/request-flight-support"
                className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-6 py-3 rounded-[4px] transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              >
                <span>Request Flight Support</span>
                <span aria-hidden="true">→</span>
              </Link>

              <div className="flex flex-wrap items-center gap-5 text-base">
                <Link
                  href="/services"
                  className="text-[#0B2545] font-semibold hover:underline underline-offset-4"
                >
                  Services
                </Link>
                <span aria-hidden="true" className="text-[#CBD5E1]">
                  |
                </span>
                <Link
                  href="/permit-directory"
                  className="text-[#0B2545] font-semibold hover:underline underline-offset-4"
                >
                  Permit Directory
                </Link>
                <span aria-hidden="true" className="text-[#CBD5E1]">
                  |
                </span>
                <Link
                  href="/contact"
                  className="text-[#0B2545] font-semibold hover:underline underline-offset-4"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Trusted By (Logo Slider) */}
      <section className="py-8 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ClientStrip compact hideHeading />
        </div>
      </section>

      {/* 10. One Final CTA Band */}
      <CtaBanner
        heading="Ready to Coordinate Your Next Flight?"
        subheading="Share your flight schedule, aircraft details, and route with our 24/7 operations desk."
        primaryLabel="Request Flight Support"
        primaryHref="/request-flight-support"
      />
    </>
  );
}
