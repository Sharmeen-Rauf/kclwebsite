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
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServiceQuickPlanner } from "@/components/sections/ServiceQuickPlanner";
import { ServiceHowAndSupportSection } from "@/components/sections/ServiceHowAndSupportSection";
import { WhyKclSection } from "@/components/sections/WhyKclSection";
import { FuelQuoteForm } from "@/components/sections/FuelQuoteForm";
import { FuelGradeConverter } from "@/components/sections/tools/FuelGradeConverter";
import { FlightPathDivider } from "@/components/ui/FlightPathDivider";
import { HeroVideoBackground } from "@/components/ui/HeroVideoBackground";
import { InnerHero } from "@/components/sections/InnerHero";
import { UtcDateWindowChecker } from "@/components/sections/tools/UtcDateWindowChecker";
import { TrafficOrTechnicalStop } from "@/components/sections/tools/TrafficOrTechnicalStop";
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

function getServiceHeroVideo(slug: string): string | null {
  if (slug.includes("fuel")) return "/Jet_refueling_at_night_airport_797c3335.mp4";
  if (slug.includes("operations") || slug.includes("support")) return "/Aircraft_ground_operations_macro_ddb440da.mp4";
  return null;
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
  const schemaFaqs = [
    ...visibleFaqs,
    ...(SERVICE_TOOL_FAQS[service.slug] || []),
  ];
  const coreHandleItems = service.whatWeHandle.slice(0, 4);
  const operatorTargets = service.whoItIsFor.slice(0, 4);
  const heroVideo = getServiceHeroVideo(service.slug);
  const heroPoster = getServiceHeroImage(service.slug);

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
          buildFaqJsonLd(schemaFaqs),
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
          SECTION 1 — HERO (Shared InnerHero for Overflight & Landing Permits)
          ========================================================================= */}
      {service.slug === "overflight-permits" ||
      service.slug === "landing-permits" ? (
        <InnerHero
          title={service.h1}
          subtitle={service.heroHeadline}
          description={service.introParagraph}
          imageSrc={heroPoster}
          imageAlt={`${service.h1} — international aviation flight operations`}
          buttons={[
            {
              label: service.heroCtaLabel,
              href: requestHref,
              variant: "primary",
            },
            {
              label: `Plan My ${service.shortTitle}`,
              href: "#quick-planner",
              variant: "outline",
            },
          ]}
          snapshotRows={
            service.slug === "overflight-permits"
              ? [
                  { label: "Permit type", value: "Overflight" },
                  { label: "Flights", value: "Scheduled and non-scheduled" },
                  { label: "Operations desk", value: "24/7" },
                ]
              : [
                  {
                    label: "Permit type",
                    value: "Landing, including technical stops",
                  },
                  { label: "Flights", value: "Scheduled and non-scheduled" },
                  { label: "Operations desk", value: "24/7" },
                ]
          }
        />
      ) : (
        <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[520px] lg:min-h-[560px] py-12 lg:py-14 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          {heroVideo ? (
            <HeroVideoBackground
              src={heroVideo}
              poster={heroPoster}
              alt={`${service.h1} — international aviation flight operations`}
            />
          ) : (
            <Image
              src={heroPoster}
              alt={`${service.h1} — international aviation flight operations`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center hero-zoom-photo"
            />
          )}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/92 via-[#0B2545]/75 to-[#14406E]/50"
          />

          {/* Ambient Radar Sweep Visual */}
          <div aria-hidden="true" className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full border border-sky-400/10 pointer-events-none overflow-hidden opacity-30">
            <div className="absolute inset-0 rounded-full border border-sky-400/15" />
            <div className="absolute inset-16 sm:inset-24 rounded-full border border-sky-400/15" />
            <div className="absolute inset-32 sm:inset-44 rounded-full border border-sky-400/15" />
            <div className="absolute inset-0 radar-sweep-beam bg-gradient-to-tr from-sky-400/15 via-transparent to-transparent rounded-full" />
          </div>

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
                className="relative overflow-hidden bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] font-bold text-sm min-h-[44px] px-7 py-3 inline-flex items-center justify-center rounded-[2px] transition-all shadow-md hover:shadow-lg gap-2 group"
              >
                <span className="animate-btn-shimmer" />
                <span>{service.heroCtaLabel}</span>
                <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
              </Link>
              <a
                href="#quick-planner"
                className="kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-6 py-3 font-semibold text-sm inline-flex items-center justify-center rounded-[2px] hover:bg-white/15 transition-all"
              >
                Plan My {service.shortTitle}
              </a>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Operational Chips Strip Below Hero */}
      <section
        aria-label="Operational Capabilities"
        className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-3"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-[#0B2545]">
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3 py-1 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#0B2545]" />
              Scheduled and non-scheduled flights
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-0.5 px-3 py-1 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200">
              <span className="h-2 w-2 rounded-full bg-[#F4C400]" />
              Short-notice requests
            </span>
            <span className="inline-flex items-center gap-2 bg-white border border-emerald-300 hover:border-emerald-500 hover:-translate-y-0.5 px-3 py-1 rounded-[2px] shadow-2xs hover:shadow-xs transition-all duration-200 bg-emerald-50/40">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              24/7 operations desk support
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHAT WE COORDINATE (Cards with Animated Borders & Duotone)
          ========================================================================= */}
      <section className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-4">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-2">
              {service.sectionH2WithKeyword || "What We Coordinate"}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              We coordinate the core operational elements of {service.shortTitle.toLowerCase()} across Pakistan, the Middle East, Asia, and Africa.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-2 sm:pb-0 scrollbar-none">
            {coreHandleItems.map((item, idx) => (
              <div
                key={item.title}
                className="snap-center shrink-0 w-[82vw] sm:w-auto group relative bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] overflow-hidden flex flex-col justify-between hover:border-[#0B2545] hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out motion-reduce:transform-none motion-reduce:transition-none"
              >
                {/* Top Animated Shimmer Border Accent with Gold Glow */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                />

                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={getCardImage(item.title, idx, service.slug)}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                    className="object-cover object-center group-hover:scale-105 motion-safe:transition-transform motion-safe:duration-500 ease-out"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/50 to-transparent group-hover:from-[#0B2545]/95 transition-colors duration-300"
                  />
                  <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between">
                    <h3 className="text-base font-bold text-white leading-tight group-hover:translate-x-0.5 transition-transform duration-200">
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
                      className="text-xs font-bold text-[#0B2545] group-hover:text-[#133661] hover:underline underline-offset-2 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Request coordination</span>
                      <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform duration-200">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subtle Airway Path Divider */}
      <FlightPathDivider variant="curve-down" className="my-2 bg-[#F8FAFC]" />

      {/* =========================================================================
          SECTION 3 — QUICK PLANNER (Interactive, Compact Output & Direct Strip)
          ========================================================================= */}
      <section id="quick-planner" className="scroll-mt-16 py-10 lg:py-14 bg-[#F8FAFC] border-b border-[#CBD5E1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceQuickPlanner slug={service.slug} serviceTitle={service.shortTitle} />
        </div>
      </section>

      {/* Subtle Airway Path Divider */}
      <FlightPathDivider variant="curve-up" className="my-2 bg-white" />

      <ServiceHowAndSupportSection
        timelineHeading={service.howItWorksHeading}
        timelineSubheading="Structured liaison connecting flight operations with local authorities and service partners."
        steps={service.howItWorks.map((step, idx) => ({
          badge: idx === 0 || idx === service.howItWorks.length - 1 ? "You" : "KCL Desk",
          isYou: idx === 0 || idx === service.howItWorks.length - 1,
          title: step.title,
          detail: step.description,
        }))}
        supportHeading="Who This Supports"
        supportSubheading="Flight profiles supported across scheduled and ad-hoc networks."
        supportCards={operatorTargets.map((item) => ({
          title: item,
          description: `Coordinated ${service.shortTitle.toLowerCase()} for ${item.toLowerCase()}.`,
          href: requestHref,
          ctaLabel: "Request support",
          image: heroPoster,
        }))}
      />

      <WhyKclSection
        subheading="Aviation operations discipline across Pakistan, the Middle East, Asia, and Africa."
        cards={[
          {
            kicker: "Escalation",
            title: "24/7 urgent escalation line",
            description:
              "Operations Controller monitoring schedule revision updates and station coordination.",
            image: "/img/services/06-ops.webp",
            pulse: true,
          },
          {
            kicker: "Regional network",
            title: "Asia, Middle East & Africa",
            description:
              "Direct authority coordination in 7 countries and partner-supported coverage across our launch regions.",
            image: heroPoster,
          },
          {
            kicker: "Unified channel",
            title: "One point of contact",
            description:
              "Synchronized permits, handling, fuel, and layovers without scattered communications.",
            image: "/img/services/07-dispatch.webp",
          },
          {
            kicker: "Group founded 1947",
            title: "Kashmirwala Group",
            description:
              "Part of the Kashmirwala Group, founded in 1947, providing reliable operational continuity.",
            image: "/img/hero-flight-ops.jpg",
          },
        ]}
      />

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
                className="group bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0B2545]/60 rounded-[4px] p-4 sm:p-5 transition-all duration-200"
              >
                <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-[#0B2545] cursor-pointer list-none select-none">
                  <span className="pr-3 group-hover:text-[#133661] transition-colors">{faq.question}</span>
                  <span className="w-5 h-5 rounded-full bg-white border border-[#CBD5E1] flex items-center justify-center text-[10px] text-[#0B2545] group-open:rotate-180 group-open:bg-[#0B2545] group-open:text-white transition-all duration-200 shrink-0">
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

      {service.slug === "overflight-permits" && <UtcDateWindowChecker />}
      {service.slug === "landing-permits" && <TrafficOrTechnicalStop />}
      {service.slug === "aviation-fuel" && (
        <>
          <FuelQuoteForm />
          <FuelGradeConverter />
        </>
      )}

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
