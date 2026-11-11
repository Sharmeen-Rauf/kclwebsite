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

  const requestHref = `/request-flight-support?permitType=${encodeURIComponent(
    service.presetPermitType || "both"
  )}&service=${encodeURIComponent(service.slug)}`;

  const visibleFaqs = service.faqs.slice(0, 6);
  const coreHandleItems = service.whatWeHandle.slice(0, 4);
  const operatorTargets = service.whoItIsFor.slice(0, 4);

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
          buildFaqJsonLd(visibleFaqs),
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
          SECTION 1 — HERO (Compact Height 520 to 560px on Desktop)
          ========================================================================= */}
      <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[520px] lg:min-h-[560px] py-12 lg:py-14 flex items-center justify-center">
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
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/92 via-[#0B2545]/75 to-[#14406E]/50"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
          <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.16] tracking-tight mx-auto mb-3">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg font-semibold text-slate-100 max-w-2xl mx-auto leading-relaxed">
              {service.heroHeadline}
            </p>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto">
              {service.introParagraph}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href={requestHref}
                className="bg-[#0B2545] hover:bg-[#133661] text-white border border-white/30 min-h-[44px] px-7 py-3 font-bold text-sm inline-flex items-center justify-center rounded-[2px] transition-colors shadow-sm gap-2 group"
              >
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
          </div>
        </div>
      </section>

      {/* Operational Chips Strip Below Hero */}
      <section
        aria-label="Operational Capabilities"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3 py-1 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] px-3 py-1 rounded-[2px] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Short-notice requests
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-emerald-300 px-3 py-1 rounded-[2px] shadow-2xs bg-emerald-50/40">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              24/7 operations desk support
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE COORDINATE (Cards in 1 Row Desktop, Carousel Mobile)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-4">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
              {service.sectionH2WithKeyword || "What We Coordinate"}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We coordinate the core operational elements of {service.shortTitle.toLowerCase()} with verified providers worldwide.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-2 sm:pb-0 scrollbar-none">
            {coreHandleItems.map((item, idx) => (
              <div
                key={item.title}
                className="snap-center shrink-0 w-[82vw] sm:w-auto group relative bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] overflow-hidden flex flex-col justify-between hover:border-[#0B2545] hover:shadow-xs transition-all duration-200"
              >
                <div className="relative h-32 sm:h-36 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={getCardImage(item.title, idx, service.slug)}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                    className="object-cover object-center group-hover:scale-105 motion-safe:transition-transform duration-300"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/50 to-transparent"
                  />
                  <div className="absolute bottom-2.5 left-3 right-3 z-10">
                    <h3 className="text-base font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                  <p className="text-xs sm:text-sm text-[#475569] leading-snug line-clamp-2">
                    {item.detail}
                  </p>

                  <div className="pt-2 border-t border-[#CBD5E1]/60">
                    <Link
                      href={requestHref}
                      className="text-xs font-bold text-[#0B2545] hover:underline underline-offset-2 inline-flex items-center gap-1"
                    >
                      <span>Request coordination</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — QUICK PLANNER (Interactive, Compact Output & Direct Strip)
          ========================================================================= */}
      <section id="quick-planner" className="scroll-mt-16 py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceQuickPlanner slug={service.slug} serviceTitle={service.shortTitle} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — COMBINED: HOW IT WORKS (LEFT) & WHO WE HELP (RIGHT)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Timeline */}
            <div className="lg:col-span-7 space-y-4">
              <div className="mb-4">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Operational Timeline</span>
                <h2 className="text-2xl font-bold text-[#0B2545]">{service.howItWorksHeading}</h2>
                <p className="text-sm text-[#475569] mt-1">
                  Structured liaison connecting flight operations with local authorities and service partners.
                </p>
              </div>

              <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#CBD5E1]">
                {service.howItWorks.map((step, idx) => {
                  const isYou = idx === 0 || idx === service.howItWorks.length - 1;
                  return (
                    <div key={step.step} className="relative space-y-1">
                      <div
                        className={`absolute -left-[27px] top-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          isYou
                            ? "bg-white border-2 border-[#0B2545] text-[#0B2545]"
                            : "bg-[#0B2545] text-white"
                        }`}
                      >
                        {idx + 1}
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-[2px] ${
                            isYou
                              ? "bg-[#F1F5F9] text-[#0B2545]"
                              : "bg-[#0B2545] text-white"
                          }`}
                        >
                          {isYou ? "You" : "KCL Desk"}
                        </span>
                        <h3 className="text-sm font-bold text-[#0B2545]">{step.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Who We Help (4 Compact Cards) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="mb-4">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Operator Coverage</span>
                <h2 className="text-2xl font-bold text-[#0B2545]">Who This Supports</h2>
                <p className="text-sm text-[#475569] mt-1">
                  Flight profiles supported across scheduled and ad-hoc networks.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {operatorTargets.map((item) => (
                  <div
                    key={item}
                    className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 flex flex-col justify-between space-y-2 hover:border-[#0B2545] transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0B2545]">
                        {item}
                      </h3>
                    </div>
                    <div className="pt-1">
                      <Link
                        href={requestHref}
                        className="text-xs font-bold text-[#0B2545] hover:underline underline-offset-2 inline-flex items-center gap-1"
                      >
                        <span>Request support</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — COMBINED: WHY KCL (4 POINTS) & TRUSTED CLIENT LOGO SLIDER
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="max-w-2xl mb-4">
              <h2 className="text-2xl font-bold text-[#0B2545] mb-2">Why KCL</h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                Aviation operations discipline and global partner coordination since 1947.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5 space-y-1.5 shadow-2xs">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Round-the-clock</span>
                <h3 className="text-base font-bold text-[#0B2545]">24/7 operations desk</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Active monitoring, schedule revision management, and live stakeholder coordination across time zones.
                </p>
              </div>

              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5 space-y-1.5 shadow-2xs">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Worldwide Reach</span>
                <h3 className="text-base font-bold text-[#0B2545]">Global partner network</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Established direct channels with certified handlers, fuel providers, and civil aviation authorities.
                </p>
              </div>

              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5 space-y-1.5 shadow-2xs">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Unified Channel</span>
                <h3 className="text-base font-bold text-[#0B2545]">One point of contact</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Synchronized permits, handling, fuel, and layovers without scattered communications.
                </p>
              </div>

              <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-5 space-y-1.5 shadow-2xs">
                <span className="text-xs font-bold text-[#0B2545] uppercase tracking-wider block">Since 1947</span>
                <h3 className="text-base font-bold text-[#0B2545]">Kashmirwala Group</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Decades of leadership in commercial air transport and airline representation, providing reliable operational stability.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#CBD5E1]/60">
            <div className="text-center mb-3">
              <span className="text-xs font-bold text-[#5C6B7A] uppercase tracking-wider">
                Trusted by Airlines Including
              </span>
            </div>
            <ClientStrip compact />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — FREQUENTLY ASKED QUESTIONS (2-Column Accordion Desktop)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-2xl mb-4">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
              Frequently Asked Questions: {service.shortTitle}
            </h2>
            <p className="text-sm text-[#475569]">
              Clear answers regarding service coordination, lead times, and operational procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {visibleFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-4 sm:p-5 transition-colors"
              >
                <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-[#0B2545] cursor-pointer list-none select-none">
                  <span className="pr-3">{faq.question}</span>
                  <span className="w-5 h-5 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[10px] text-[#0B2545] group-open:rotate-180 transition-transform duration-200 shrink-0">
                    ▼
                  </span>
                </summary>
                <div className="mt-2.5 text-xs sm:text-sm text-[#16202B] leading-relaxed border-t border-[#CBD5E1]/60 pt-2.5">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — FINAL CTA BAND (One Only)
          ========================================================================= */}
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
