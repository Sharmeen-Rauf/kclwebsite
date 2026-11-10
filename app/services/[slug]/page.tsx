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
          HERO (Homepage Height & Grand Aviation Aesthetic)
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] py-16 sm:py-20 lg:py-24 flex items-center justify-center">
        {/* Full-bleed background photo with calibrated gradient */}
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
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/85 via-[#0B2545]/60 to-[#14406E]/35"
          />
          {/* Subtle airway route line-art */}
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
            <span className="font-mono text-xs uppercase tracking-wider text-[#F4C400] font-bold block">
              {service.code} · {service.category.toUpperCase()}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white leading-[1.16] tracking-tight mx-auto">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-semibold text-slate-100 max-w-2xl mx-auto">
              {service.heroHeadline}
            </p>

            <p className="text-xs sm:text-sm lg:text-[15.5px] text-slate-200 leading-relaxed max-w-2xl mx-auto">
              {service.introParagraph}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
              <Link
                href={requestHref}
                className="bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] min-h-[44px] px-7 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2"
              >
                <span>{service.heroCtaLabel}</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#service-scope"
                className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
              >
                Explore Service Scope
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Strip Below Hero */}
      <section
        aria-label="Operational Credentials"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3 sm:py-3.5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-[13px] font-bold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              24/7 operations desk
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3.5 py-1.5 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#B88200]" />
              Short-notice requests
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Specification */}
      <section id="service-scope" className="scroll-mt-16 py-12 sm:py-16 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Service Coordination Brief KPI Strip */}
          <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-4 sm:p-5 shadow-xs grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#CBD5E1]/60 font-mono text-xs">
            <div className="sm:pr-4 space-y-1">
              <span className="text-[#B88200] font-bold uppercase tracking-wider block text-[11px]">
                PLANNING TIMELINE
              </span>
              <span className="text-[#0B2545] font-bold text-sm block">
                {service.typicalLeadTimePlaceholder}
              </span>
            </div>
            <div className="pt-3 sm:pt-0 sm:px-4 space-y-1">
              <span className="text-[#B88200] font-bold uppercase tracking-wider block text-[11px]">
                SERVICE CATEGORY
              </span>
              <span className="text-[#0B2545] font-bold text-sm block">
                {service.category}
              </span>
            </div>
            <div className="pt-3 sm:pt-0 sm:px-4 space-y-1">
              <span className="text-[#B88200] font-bold uppercase tracking-wider block text-[11px]">
                DELIVERY MODEL
              </span>
              <span className="text-[#0B2545] font-semibold text-xs font-sans block leading-snug">
                Operational Coordination &amp; Stakeholder Liaison
              </span>
            </div>
            <div className="pt-3 sm:pt-0 sm:pl-4 space-y-1">
              <span className="text-[#B88200] font-bold uppercase tracking-wider block text-[11px]">
                APPROVAL AUTHORITY
              </span>
              <span className="text-[#5C6B7A] font-sans text-xs block leading-snug">
                Relevant Civil Aviation Authorities &amp; Airport Stakeholders
              </span>
            </div>
          </div>
          {/* 1. What the Service Is & Who Needs It */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="kcl-card lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                SECTION 01 · SERVICE SCOPE
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
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

            <div className="kcl-card lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                SECTION 02 · OPERATOR PROFILE
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
                Who This Supports
              </h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#16202B]">
                {service.whoItIsFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs font-bold text-white bg-[#0B2545] px-1.5 py-0.5 mt-1">
                      OPS
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Why the Requirement Matters Operationally */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
              SECTION 03 · OPERATIONAL CONSIDERATIONS
            </span>
            <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545] mb-4">
              {service.whyItMattersHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.whyItMatters.map((point) => (
                <p
                  key={point}
                  className="text-[#16202B] text-base leading-relaxed bg-[#F6F8FB] border border-[#CBD5E1] p-5"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>

          {/* 3. What KCL Coordinates */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
              SECTION 04 · COORDINATION SCOPE
            </span>
            <h2 className="no-accent-bar text-2xl sm:text-3xl font-bold text-[#0B2545] mb-6">
              {service.sectionH2WithKeyword}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.whatWeHandle.map((item, idx) => (
                <div
                  key={item.title}
                  className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-5"
                >
                  <div className="font-mono text-xs text-[#5C6B7A] mb-1">
                    AREA 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#16202B] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Details to Prepare & 5. Coordination Process */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="kcl-card lg:col-span-5 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
                  SECTION 05 · WHAT TO PREPARE
                </span>
                <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545] mb-4">
                  Details That Help Define Your Inquiry
                </h2>
                <ul className="space-y-3 text-sm text-[#16202B]">
                  {service.whatYouSendUs.map((req, index) => (
                    <li key={req} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#0B2545]">
                        [0{index + 1}]
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#CBD5E1]">
                <p className="font-mono text-xs text-[#5C6B7A] mb-3">
                  Note: {service.typicalLeadTimePlaceholder}
                </p>
                <Link
                  href={requestHref}
                  className="kcl-btn-primary w-full min-h-[44px] px-4 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  {service.heroCtaLabel} →
                </Link>
              </div>
            </div>

            <div className="kcl-card lg:col-span-7 bg-white border border-[#CBD5E1] p-6 sm:p-8">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
                SECTION 06 · COORDINATION WORKFLOW
              </span>
              <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545] mb-6">
                {service.howItWorksHeading}
              </h2>
              <ol className="space-y-5">
                {service.howItWorks.map((step) => (
                  <li
                    key={step.step}
                    className="kcl-card border border-[#CBD5E1] bg-[#F6F8FB] p-5 flex gap-4"
                  >
                    <span className="font-mono text-sm font-bold bg-[#0B2545] text-white px-3 py-1.5 h-fit">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#0B2545]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#16202B] mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* 6. Authority & Provider Boundaries */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
              SECTION 07 · SERVICE BOUNDARIES &amp; GOVERNANCE
            </span>
            <h2 className="no-accent-bar text-xl sm:text-2xl font-bold text-[#0B2545] mb-4">
              {service.authorityDependenciesHeading}
            </h2>
            <ul className="space-y-2.5 text-sm sm:text-base text-[#16202B]">
              {service.authorityDependencies.map((dep) => (
                <li key={dep} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-bold text-[#0B2545] mt-1">
                    ▪
                  </span>
                  <span>{dep}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contextual Internal Links */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="no-accent-bar text-lg font-bold text-[#0B2545] mb-4">
              Connected Aviation Services, Pakistan Specialization &amp; Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              {relatedServices.slice(0, 2).map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="kcl-card p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] flex flex-col justify-between"
                >
                  <span className="font-mono text-[11px] text-[#5C6B7A]">
                    CONNECTED SERVICE
                  </span>
                  <span className="font-bold text-[#0B2545] mt-1">
                    {rel.shortTitle} →
                  </span>
                </Link>
              ))}
              <Link
                href="/pakistan/flight-permissions"
                className="kcl-card p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] flex flex-col justify-between"
              >
                <span className="font-mono text-[11px] text-[#5C6B7A]">
                  LOCAL SPECIALIZATION
                </span>
                <span className="font-bold text-[#0B2545] mt-1">
                  Pakistan Flight Permissions →
                </span>
              </Link>
              <Link
                href={service.relatedToolPath.href}
                className="kcl-card p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] flex flex-col justify-between"
              >
                <span className="font-mono text-[11px] text-[#5C6B7A]">
                  OPERATOR RESOURCE
                </span>
                <span className="font-bold text-[#0B2545] mt-1">
                  {service.relatedToolPath.label} →
                </span>
              </Link>
            </div>
          </div>

          {/* Service FAQs */}
          <div className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545] mb-6">
              Frequently Asked Questions: {service.shortTitle}
            </h2>
            <div className="divide-y divide-[#CBD5E1]">
              {service.faqs.map((faq) => (
                <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientStrip compact />
      <CtaBanner
        heading={service.finalCtaHeading}
        subheading={service.finalCtaSubheading}
        primaryLabel={service.finalCtaLabel}
        primaryHref={requestHref}
      />
    </>
  );
}
