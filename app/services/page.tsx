import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  PRIMARY_SERVICES_DATA,
  PAKISTAN_SPECIALIST_SERVICES,
} from "@/content/services";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "International Aviation Support Services | KCL",
  description:
    "Explore KCL flight permits, ground handling, aviation fuel, flight planning, airport slots, dispatch assistance and crew logistics.",
  path: "/services",
});

const SERVICE_CATEGORIES = [
  {
    code: "01",
    title: "Permissions",
    summary:
      "Overflight and landing permission assistance, including scheduled and non-scheduled operating contexts. KCL coordinates requests; relevant authorities grant approvals.",
    links: [
      { label: "Overflight Permits", href: "/services/overflight-permits" },
      { label: "Landing Permits", href: "/services/landing-permits" },
      { label: "Scheduled Flights", href: "/services/scheduled-flights" },
      {
        label: "Charter & Non-Scheduled",
        href: "/services/non-scheduled-flights",
      },
      {
        label: "Pakistan Flight Permissions",
        href: "/pakistan/flight-permissions",
      },
    ],
  },
  {
    code: "02",
    title: "Airport and Aircraft Services",
    summary:
      "Ground handling coordination, fuel arrangements and catering requests based on aircraft, airport, timing and provider availability.",
    links: [
      { label: "Ground Handling", href: "/services/ground-handling" },
      { label: "Aviation Fuel", href: "/services/aviation-fuel" },
      { label: "Inflight Catering", href: "/services/inflight-catering" },
    ],
  },
  {
    code: "03",
    title: "Planning and Dispatch",
    summary:
      "Flight planning assistance, operational updates and dispatch-related coordination where relevant to the itinerary.",
    links: [
      {
        label: "Flight Planning & Dispatch",
        href: "/services/flight-planning-dispatch",
      },
      {
        label: "International Flight Support",
        href: "/services/international-flight-support",
      },
      { label: "Operations Support", href: "/services/operations-support" },
    ],
  },
  {
    code: "04",
    title: "Slots and Airport Coordination",
    summary:
      "Support for airport slot-related inquiries and other applicable arrival or departure requirements, subject to airport procedures.",
    links: [
      {
        label: "Airport Slot Coordination",
        href: "/services/airport-slot-coordination",
      },
      { label: "Landing Permits", href: "/services/landing-permits" },
    ],
  },
  {
    code: "05",
    title: "Crew Logistics",
    summary:
      "Hotel and local transport coordination to support layovers, overnight stops and other mission requirements.",
    links: [
      {
        label: "Crew Accommodation & Transport",
        href: "/services/crew-logistics",
      },
    ],
  },
];

export default function ServicesOverviewPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#E8A200] bg-[#133661] border border-slate-600 px-3 py-1 inline-block">
              KCL INTERNATIONAL FLIGHT SUPPORT · SERVICE DIRECTORY
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              International Aviation Support Services
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-[#E8A200]">
              Connected Support for Complex Flight Operations.
            </p>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              A flight rarely depends on one service alone. Permissions,
              handling, fuel, airport arrangements and crew logistics must fit
              the same itinerary. KCL brings these requirements into a
              coordinated conversation so operators can plan with greater
              clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Grouped Service Categories */}
      <section className="py-14 sm:py-18 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((cat) => (
              <div
                key={cat.code}
                className="bg-[#F6F8FB] border border-[#CBD5E1] p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <span className="font-mono text-xs font-bold text-[#0B2545] bg-white border border-[#CBD5E1] px-2.5 py-0.5 inline-block">
                    CATEGORY {cat.code}
                  </span>
                  <h2 className="text-xl font-bold text-[#0B2545]">
                    {cat.title}
                  </h2>
                  <p className="text-sm text-[#16202B] leading-relaxed">
                    {cat.summary}
                  </p>
                </div>
                <ul className="pt-4 border-t border-slate-200 space-y-1.5 text-sm font-semibold">
                  {cat.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[#0B2545] hover:text-[#133661] underline underline-offset-4"
                      >
                        {link.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Practical starting point card */}
            <div className="bg-[#0B2545] text-white border border-[#0B2545] p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <span className="font-mono text-xs font-bold text-[#E8A200] bg-[#133661] border border-slate-600 px-2.5 py-0.5 inline-block">
                  HOW TO BEGIN
                </span>
                <h2 className="text-xl font-bold text-white">
                  A Practical Starting Point
                </h2>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Share the operator, aircraft, route, UTC timings and services
                  needed. Our team can identify the relevant coordination
                  discussion and outstanding information.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700">
                <Link
                  href="/request-flight-support"
                  className="w-full min-h-[44px] px-4 py-2.5 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  Start a Flight Support Inquiry →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete 12-Service Directory */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold block">
              COMPLETE SERVICE SPECIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Explore Individual Flight Support Pages
            </h2>
            <p className="text-sm sm:text-base text-[#16202B]">
              Each dedicated service page outlines what the service covers,
              which operational details to prepare, what KCL coordinates, and
              where authority or supplier decisions apply.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {PRIMARY_SERVICES_DATA.map((service) => (
              <article
                key={service.slug}
                className="bg-white border border-[#CBD5E1] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-4 space-y-2 border-b lg:border-b-0 lg:border-r border-[#CBD5E1] pb-4 lg:pb-0 lg:pr-6">
                  <span className="font-mono text-xs font-semibold text-[#5C6B7A] block">
                    {service.code}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:underline underline-offset-4"
                    >
                      {service.shortTitle}
                    </Link>
                  </h3>
                  <p className="text-xs font-semibold text-[#0B2545]">
                    {service.heroHeadline}
                  </p>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                    {service.introParagraph}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5C6B7A] font-mono pt-1">
                    {service.whatWeHandle.map((item) => (
                      <li key={item.title} className="flex items-center gap-1.5">
                        <span className="text-[#E8A200] font-bold">▪</span>
                        <span>{item.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3 flex flex-col gap-2.5 lg:items-end justify-center">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
                  >
                    Service Page →
                  </Link>
                  <Link
                    href={`/request-flight-support?service=${encodeURIComponent(
                      service.slug
                    )}`}
                    className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-[#F6F8FB] hover:border-[#0B2545] border border-[#CBD5E1] text-[#0B2545] font-semibold text-xs font-mono inline-flex items-center justify-center"
                  >
                    {service.heroCtaLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Dedicated Pakistan Specialization Section */}
          <div className="bg-white border-2 border-[#0B2545] p-6 sm:p-8 space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#CBD5E1] pb-4">
              <div>
                <span className="font-mono text-xs uppercase text-[#E8A200] bg-[#0B2545] px-2.5 py-1 font-semibold inline-block mb-2">
                  REGIONAL SPECIALIZATION · PAKISTAN (OPKR &amp; OPLR FIRs)
                </span>
                <h2 className="text-2xl font-bold text-[#0B2545]">
                  Pakistan Flight Permission Specialization Pages
                </h2>
              </div>
              <Link
                href="/pakistan/flight-permissions"
                className="min-h-[44px] px-5 py-2.5 bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Pakistan Flight Permissions Hub →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PAKISTAN_SPECIALIST_SERVICES.map((pkService) => (
                <div
                  key={pkService.slug}
                  className="bg-[#F6F8FB] border border-[#CBD5E1] p-5 space-y-2.5"
                >
                  <span className="font-mono text-xs text-[#5C6B7A] block">
                    {pkService.code}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2545]">
                    <Link
                      href={`/services/${pkService.slug}`}
                      className="hover:underline underline-offset-4"
                    >
                      {pkService.shortTitle}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#16202B] leading-relaxed">
                    {pkService.introParagraph}
                  </p>
                  <Link
                    href={`/services/${pkService.slug}`}
                    className="inline-block pt-1 text-sm font-bold text-[#0B2545] underline underline-offset-4"
                  >
                    Read Pakistan Guide →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Bring Your Requirements into One Conversation."
        subheading="Share the operator, aircraft, route, UTC timings and services needed. Our team can identify the relevant coordination discussion and outstanding information."
        primaryLabel="Start a Flight Support Inquiry"
        primaryHref="/request-flight-support"
      />
    </>
  );
}
