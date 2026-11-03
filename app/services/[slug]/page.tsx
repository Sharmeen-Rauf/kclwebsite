import React from "react";
import Link from "next/link";
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

      {/* Hero Header */}
      <section className="kcl-hero-bg text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 bg-black/35 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-[2px]">
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                <span className="bg-white/10 backdrop-blur-sm border border-[#F2C200] text-[#F2C200] px-2.5 py-1 font-semibold">
                  {service.code}
                </span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/25 text-slate-100 px-2.5 py-1">
                  {service.category.toUpperCase()}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                {service.h1}
              </h1>

              <p className="text-lg sm:text-xl font-semibold text-[#F2C200]">
                {service.heroHeadline}
              </p>

              <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
                {service.introParagraph}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href={requestHref}
                  className="min-h-[48px] px-6 py-3 bg-[#F2C200] hover:bg-[#E8A200] text-[#0B2545] font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  {service.heroCtaLabel}
                </Link>
                <Link
                  href="/pakistan/flight-permissions"
                  className="min-h-[48px] px-5 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  Pakistan Flight Permissions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black/45 backdrop-blur-md border border-white/20 p-5 space-y-4 font-mono text-xs rounded-[2px]">
              <div className="border-b border-white/20 pb-2 text-[#F2C200] font-semibold">
                SERVICE COORDINATION BRIEF
              </div>
              <div>
                <span className="text-slate-300 block">PLANNING TIMELINE</span>
                <span className="text-white font-semibold">
                  {service.typicalLeadTimePlaceholder}
                </span>
              </div>
              <div>
                <span className="text-slate-300 block">SERVICE CATEGORY</span>
                <span className="text-white font-semibold">
                  {service.category}
                </span>
              </div>
              <div>
                <span className="text-slate-300 block">DELIVERY MODEL</span>
                <span className="text-white font-semibold">
                  Operational Coordination &amp; Stakeholder Liaison
                </span>
              </div>
              <div>
                <span className="text-slate-300 block">APPROVAL AUTHORITY</span>
                <span className="text-slate-200 font-sans text-xs">
                  Relevant Civil Aviation Authorities &amp; Airport Stakeholders
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Specification */}
      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* 1. What the Service Is & Who Needs It */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                SECTION 01 · SERVICE SCOPE
              </span>
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

            <div className="lg:col-span-6 bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
                SECTION 02 · OPERATOR PROFILE
              </span>
              <h2 className="text-2xl font-bold text-[#0B2545]">
                Who This Supports
              </h2>
              <ul className="space-y-2.5 text-sm sm:text-base text-[#16202B]">
                {service.whoItIsFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#E8A200] bg-[#0B2545] px-1.5 py-0.5 mt-1">
                      OPS
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Why the Requirement Matters Operationally */}
          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
              SECTION 03 · OPERATIONAL CONSIDERATIONS
            </span>
            <h2 className="text-2xl font-bold text-[#0B2545] mb-4">
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
          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
              SECTION 04 · COORDINATION SCOPE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] mb-6">
              {service.sectionH2WithKeyword}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.whatWeHandle.map((item, idx) => (
                <div
                  key={item.title}
                  className="bg-[#F6F8FB] border border-[#CBD5E1] p-5"
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
            <div className="lg:col-span-5 bg-white border border-[#CBD5E1] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
                  SECTION 05 · WHAT TO PREPARE
                </span>
                <h2 className="text-2xl font-bold text-[#0B2545] mb-4">
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
                  className="w-full min-h-[44px] px-4 py-2.5 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
                >
                  {service.heroCtaLabel} →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-[#CBD5E1] p-6 sm:p-8">
              <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
                SECTION 06 · COORDINATION WORKFLOW
              </span>
              <h2 className="text-2xl font-bold text-[#0B2545] mb-6">
                {service.howItWorksHeading}
              </h2>
              <ol className="space-y-5">
                {service.howItWorks.map((step) => (
                  <li
                    key={step.step}
                    className="border border-[#CBD5E1] bg-[#F6F8FB] p-5 flex gap-4"
                  >
                    <span className="font-mono text-sm font-bold bg-[#0B2545] text-[#E8A200] px-3 py-1.5 h-fit">
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
          <div className="bg-white border-l-4 border-[#0B2545] border border-[#CBD5E1] p-6 sm:p-8">
            <span className="font-mono text-xs uppercase text-[#5C6B7A] block mb-1">
              SECTION 07 · SERVICE BOUNDARIES &amp; GOVERNANCE
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-4">
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
          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="text-lg font-bold text-[#0B2545] mb-4">
              Connected Aviation Services, Pakistan Specialization &amp; Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              {relatedServices.slice(0, 2).map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] flex flex-col justify-between"
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
                className="p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] flex flex-col justify-between"
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
                className="p-4 bg-[#F6F8FB] border border-[#CBD5E1] hover:border-[#0B2545] flex flex-col justify-between"
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
          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-6">
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
