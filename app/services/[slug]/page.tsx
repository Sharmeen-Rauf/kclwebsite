import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  getAllServiceSlugsForStaticGeneration,
  getServiceBySlug,
} from "@/content/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ServiceQuickPlanner } from "@/components/sections/ServiceQuickPlanner";
import { ServiceTwoLaneTimeline } from "@/components/sections/ServiceTwoLaneTimeline";
import { FlightPathDivider } from "@/components/ui/FlightPathDivider";
import {
  JsonLd,
  buildFaqJsonLd,
  buildServiceJsonLd,
} from "@/components/seo/JsonLd";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

function getServiceHeroImage(slug: string): string {
  if (slug.includes("permit") || slug.includes("permission")) return "/img/services/01-permits.webp";
  if (slug.includes("ground") || slug.includes("ramp") || slug.includes("cargo")) return "/img/services/02-ground.webp";
  if (slug.includes("cater")) return "/img/services/03-catering.webp";
  if (slug.includes("fuel")) return "/img/services/04-fuel.webp";
  if (slug.includes("crew") || slug.includes("hotel") || slug.includes("hotac") || slug.includes("transport")) return "/img/services/05-crew.webp";
  if (slug.includes("operations") || slug.includes("support")) return "/img/services/06-ops.webp";
  if (slug.includes("dispatch") || slug.includes("planning")) return "/img/services/07-dispatch.webp";
  if (slug.includes("slot") || slug.includes("ppr")) return "/img/services/08-slots.webp";
  return "/img/hero-flight-ops.jpg";
}

function getCardImage(title: string, index: number, slug = ""): string {
  const t = `${title} ${slug}`.toLowerCase();
  if (t.includes("permit") || t.includes("clearance") || t.includes("overflight") || t.includes("landing")) return "/img/services/01-permits.webp";
  if (t.includes("ground") || t.includes("ramp") || t.includes("turnaround") || t.includes("cargo") || t.includes("baggage")) return "/img/services/02-ground.webp";
  if (t.includes("cater") || t.includes("meal") || t.includes("galley")) return "/img/services/03-catering.webp";
  if (t.includes("fuel") || t.includes("refuel") || t.includes("uplift") || t.includes("tank")) return "/img/services/04-fuel.webp";
  if (t.includes("crew") || t.includes("hotel") || t.includes("transport") || t.includes("layover") || t.includes("accommodation")) return "/img/services/05-crew.webp";
  if (t.includes("slot") || t.includes("parking") || t.includes("stand") || t.includes("ppr")) return "/img/services/08-slots.webp";
  if (t.includes("dispatch") || t.includes("flight plan") || t.includes("ofp") || t.includes("navigation") || t.includes("weather") || t.includes("notam")) return "/img/services/07-dispatch.webp";
  if (t.includes("operation") || t.includes("desk") || t.includes("monitoring") || t.includes("watch")) return "/img/services/06-ops.webp";
  
  const pool = [
    "/img/services/01-permits.webp",
    "/img/services/02-ground.webp",
    "/img/services/04-fuel.webp",
    "/img/services/05-crew.webp",
    "/img/services/06-ops.webp",
    "/img/services/07-dispatch.webp",
    "/img/services/08-slots.webp",
  ];
  return pool[index % pool.length];
}

function getCardIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("fuel") || t.includes("refuel") || t.includes("uplift")) {
    return (
      <svg className="w-5 h-5 text-[#0B2545]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14v6m-7-6v6m-7-6v6M3 7h18M5 7V4a1 1 0 011-1h12a1 1 0 011 1v3m-2 0v14a1 1 0 01-1 1H8a1 1 0 01-1-1V7" />
      </svg>
    );
  }
  if (t.includes("crew") || t.includes("hotel") || t.includes("transport") || t.includes("layover")) {
    return (
      <svg className="w-5 h-5 text-[#0B2545]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }
  if (t.includes("slot") || t.includes("parking") || t.includes("time") || t.includes("schedule")) {
    return (
      <svg className="w-5 h-5 text-[#0B2545]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (t.includes("dispatch") || t.includes("route") || t.includes("plan") || t.includes("ofp")) {
    return (
      <svg className="w-5 h-5 text-[#0B2545]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    );
  }
  if (t.includes("permit") || t.includes("clearance") || t.includes("authority") || t.includes("document")) {
    return (
      <svg className="w-5 h-5 text-[#0B2545]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5 text-[#0B2545]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );
}

export async function generateStaticParams() {
  return getAllServiceSlugsForStaticGeneration().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "Requested aviation service specification was not found.",
      path: `/services/${slug}`,
    });
  }

  return buildMetadata({
    title: service.title,
    description: service.metaDescription,
    path: service.canonicalPath || `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = service.relatedServiceSlugs
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const requestHref = `/request-flight-support?permitType=${encodeURIComponent(
    service.presetPermitType || "both"
  )}&service=${encodeURIComponent(service.slug)}`;

  return (
    <>
      <JsonLd
        data={[
          buildServiceJsonLd({
            name: service.h1,
            description: service.metaDescription,
            path: service.canonicalPath || `/services/${service.slug}`,
            serviceType: service.shortTitle,
          }),
          buildFaqJsonLd(service.faqs),
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Services", path: "/services" },
          {
            name: service.shortTitle,
            path: service.canonicalPath || `/services/${service.slug}`,
          },
        ]}
      />

      {/* =========================================================================
          HERO (Navy, White, Grey Design System with Snapshot Card)
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[560px] sm:min-h-[600px] lg:min-h-[640px] py-16 sm:py-20 lg:py-24 flex items-center justify-center">
        {/* Full-bleed background photo with calibrated navy gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src={getServiceHeroImage(service.slug)}
            alt={`${service.h1} — international aviation flight operations`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center hero-zoom-photo"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/90 via-[#0B2545]/70 to-[#14406E]/45"
          />
          {/* Airway route line-art */}
          <svg
            viewBox="0 0 1440 640"
            fill="none"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
          >
            <path
              d="M-60 490 C 280 420, 620 260, 1020 220 C 1220 200, 1360 150, 1500 110"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              className="airway-route-line"
            />
            <path
              d="M-40 240 C 340 290, 740 350, 1140 280 C 1300 250, 1410 210, 1520 180"
              stroke="#FFFFFF"
              strokeWidth="1.2"
            />
            <circle cx="515" cy="340" r="4" fill="#FFFFFF" />
            <circle cx="775" cy="275" r="4" fill="#FFFFFF" />
            <circle cx="885" cy="145" r="4" fill="#FFFFFF" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
            {/* Live Operational Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>24/7 Operations Desk · Worldwide Flight Support</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white leading-[1.16] tracking-tight mx-auto">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-semibold text-slate-100 max-w-2xl mx-auto">
              {service.heroHeadline}
            </p>

            <p className="text-xs sm:text-sm lg:text-[15.5px] text-slate-200 leading-relaxed max-w-2xl mx-auto">
              {service.introParagraph}
            </p>

            {/* Action Buttons (Navy / White / Grey - No Yellow) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href={requestHref}
                className="relative overflow-hidden bg-[#0B2545] hover:bg-[#133661] text-white border border-white/30 min-h-[44px] px-7 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2 group"
              >
                <span className="animate-btn-shimmer" />
                <span>{service.heroCtaLabel}</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
              </Link>
              <a
                href="#quick-planner"
                className="kcl-btn-outline-white min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] hover:bg-white/15 transition-all"
              >
                Plan My {service.shortTitle}
              </a>
            </div>

            {/* At a glance: Snapshot Card (Facts only, no invented statistics) */}
            <div className="pt-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[4px] p-3.5 sm:p-4 text-xs sm:text-sm text-slate-200 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <span className="font-semibold text-white">24/7 operations desk</span>
                <span className="text-white/40">|</span>
                <span className="font-semibold text-white">Global partner network</span>
                <span className="text-white/40">|</span>
                <span className="font-semibold text-white">Direct stakeholder coordination</span>
                <span className="text-white/40">|</span>
                <span className="font-semibold text-white">Single operations channel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Chips Strip Below Hero */}
      <section
        aria-label="Operational Capabilities"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3 sm:py-3.5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-[13px] font-bold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3.5 py-1.5 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3.5 py-1.5 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Short-notice requests
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-emerald-300 hover:border-emerald-500 hover:-translate-y-0.5 px-3.5 py-1.5 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200 bg-emerald-50/40">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              24/7 operations desk support
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE COORDINATE (Image Cards with Duotone Overlay)
          ========================================================================= */}
      <section id="service-scope" className="scroll-mt-16 py-12 sm:py-16 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              {service.sectionH2WithKeyword || "What We Coordinate"}
            </h2>
            <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
              We coordinate the essential operational elements of your flight through qualified local providers and civil aviation stakeholders worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            {service.whatWeHandle.map((item, idx) => (
              <div
                key={item.title}
                className="group relative bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] overflow-hidden flex flex-col justify-between hover:border-[#0B2545] hover:shadow-md hover:-translate-y-1 transition-all duration-200 motion-reduce:transition-none motion-reduce:transform-none"
              >
                {/* Top image with navy duotone overlay */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={getCardImage(item.title, idx, service.slug)}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-500 ease-out motion-reduce:transform-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/45 to-black/20 group-hover:from-[#0B2545]/95 transition-colors duration-200"
                  />
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-[4px] bg-white/90 backdrop-blur-xs flex items-center justify-center shrink-0 shadow-xs">
                      {getCardIcon(item.title)}
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight drop-shadow-xs">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-4">
                  <p className="text-base text-[#16202B] leading-relaxed">
                    {item.detail}
                  </p>

                  <div className="pt-3 border-t border-[#CBD5E1]/60">
                    <Link
                      href={requestHref}
                      className="text-sm font-bold text-[#0B2545] group-hover:text-[#133661] hover:underline underline-offset-4 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Request {item.title.toLowerCase()}</span>
                      <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flight Path Divider */}
      <FlightPathDivider variant="curve-down" className="my-2 bg-[#F8FAFC]" />

      {/* =========================================================================
          SECTION 3 — QUICK INTERACTIVE PLANNER
          ========================================================================= */}
      <section id="quick-planner" className="scroll-mt-16 py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceQuickPlanner slug={service.slug} serviceTitle={service.shortTitle} />
        </div>
      </section>

      {/* Flight Path Divider */}
      <FlightPathDivider variant="curve-up" className="my-2 bg-white" />

      {/* =========================================================================
          SECTION 4 — TWO-LANE WORKFLOW TIMELINE
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTwoLaneTimeline
            heading={service.howItWorksHeading}
            steps={service.howItWorks}
            authorityDependencies={service.authorityDependencies}
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — SCOPE, OPERATOR PROFILES & PREPARATION
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Scope and Who It Supports */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-2xl font-bold text-[#0B2545]">
                {service.whatItIsHeading}
              </h2>
              {service.whatItIs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[#16202B] text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-4 shadow-xs">
              <h2 className="text-2xl font-bold text-[#0B2545]">
                Who This Supports
              </h2>
              <ul className="space-y-3 text-base text-[#16202B]">
                {service.whoItIsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#0B2545]/10 text-[#0B2545] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Operational Considerations */}
          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-2xl font-bold text-[#0B2545]">
              {service.whyItMattersHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.whyItMatters.map((point) => (
                <div
                  key={point}
                  className="text-[#16202B] text-base leading-relaxed bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-5"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Details to Prepare */}
          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-4 shadow-xs">
            <h2 className="text-2xl font-bold text-[#0B2545]">
              Details That Help Define Your Inquiry
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base text-[#16202B]">
              {service.whatYouSendUs.map((req, index) => (
                <li
                  key={req}
                  className="flex items-start gap-2.5 bg-[#F8FAFC] border border-[#CBD5E1]/60 rounded-[4px] p-3"
                >
                  <span className="font-semibold text-[#0B2545] shrink-0">
                    {index + 1}.
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#CBD5E1]/60">
              <p className="text-sm text-[#5C6B7A]">
                Early submission helps ensure alignment with local authority and provider timelines.
              </p>
              <Link
                href={requestHref}
                className="bg-[#0B2545] hover:bg-[#133661] text-white min-h-[44px] px-6 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shrink-0 gap-2"
              >
                <span>{service.heroCtaLabel}</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — CONNECTED SERVICES & FAQs
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#0B2545]">
              Connected Aviation Services &amp; Resources
            </h2>
            <p className="text-base text-[#5C6B7A] mt-1">
              Combine multiple trip requirements under one operational desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {relatedServices.slice(0, 2).map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group p-5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] hover:border-[#0B2545] hover:shadow-xs flex flex-col justify-between transition-all duration-200"
              >
                <span className="text-xs font-semibold text-[#5C6B7A] uppercase tracking-wide">
                  Connected Service
                </span>
                <span className="font-bold text-[#0B2545] group-hover:text-[#133661] text-base mt-2 flex items-center justify-between">
                  {rel.shortTitle}
                  <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform duration-200">→</span>
                </span>
              </Link>
            ))}
            <Link
              href="/pakistan/flight-permissions"
              className="group p-5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] hover:border-[#0B2545] hover:shadow-xs flex flex-col justify-between transition-all duration-200"
            >
              <span className="text-xs font-semibold text-[#5C6B7A] uppercase tracking-wide">
                Local Specialization
              </span>
              <span className="font-bold text-[#0B2545] group-hover:text-[#133661] text-base mt-2 flex items-center justify-between">
                Pakistan Flight Permissions
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform duration-200">→</span>
              </span>
            </Link>
            <Link
              href={service.relatedToolPath.href}
              className="group p-5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] hover:border-[#0B2545] hover:shadow-xs flex flex-col justify-between transition-all duration-200"
            >
              <span className="text-xs font-semibold text-[#5C6B7A] uppercase tracking-wide">
                Operator Resource
              </span>
              <span className="font-bold text-[#0B2545] group-hover:text-[#133661] text-base mt-2 flex items-center justify-between">
                {service.relatedToolPath.label}
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform duration-200">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Frequently Asked Questions: {service.shortTitle}
            </h2>
            <p className="text-base text-[#5C6B7A]">
              Clear answers regarding service coordination, lead times, and operational procedures.
            </p>
          </div>

          <div className="bg-white border border-[#CBD5E1] rounded-[6px] divide-y divide-[#CBD5E1] shadow-xs">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group p-5 sm:p-6 transition-colors">
                <summary className="flex items-center justify-between font-bold text-base sm:text-lg text-[#0B2545] cursor-pointer list-none select-none">
                  <span className="pr-4">{faq.question}</span>
                  <span className="w-6 h-6 rounded-full bg-[#F1F5F9] flex items-center justify-center text-xs text-[#0B2545] group-open:rotate-180 transition-transform duration-200 shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="mt-3.5 text-base text-[#16202B] leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ClientStrip compact />
      {!service.hideFinalCta && (
        <CtaBanner
          heading={service.finalCtaHeading}
          subheading={service.finalCtaSubheading}
          primaryLabel={service.finalCtaLabel}
          primaryHref={requestHref}
        />
      )}
    </>
  );
}
