"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  href: string;
  slug: string;
}

interface JourneyStage {
  id: string;
  label: string;
  stageTitle: string;
  image: string;
  alt: string;
  services: ServiceItem[];
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "plan",
    label: "Plan",
    stageTitle: "Flight Planning & Slot Coordination",
    image: "/img/services/journey/01-plan.webp",
    alt: "Flight dispatch officers reviewing route optimization and weather NOTAM charts",
    services: [
      {
        id: "dispatch",
        slug: "flight-planning-dispatch",
        name: "Flight Planning and Dispatch",
        description:
          "Route optimisation, flight plans, ICAO filing, weather and NOTAM review, and ETOPS/EDTO planning support.",
        href: "/services/flight-planning-dispatch",
      },
      {
        id: "slots",
        slug: "airport-slot-coordination",
        name: "Airport Slot Coordination",
        description: "Slot requests and timing coordinated alongside your permits.",
        href: "/services/airport-slot-coordination",
      },
    ],
  },
  {
    id: "permit",
    label: "Permit",
    stageTitle: "Civil Aviation Flight Permissions",
    image: "/img/services/journey/02-permit.webp",
    alt: "Civil aviation authority flight permit application and clearance documentation",
    services: [
      {
        id: "permits",
        slug: "flight-permissions",
        name: "Flight Permissions",
        description:
          "Overflight and landing permits, PPR, block permits and short-notice clearance. Final approval rests with the aviation authorities.",
        href: "/services/flight-permissions",
      },
    ],
  },
  {
    id: "arrive",
    label: "Arrive",
    stageTitle: "Ramp and Passenger Ground Handling",
    image: "/img/services/journey/03-arrive.webp",
    alt: "Airport apron ground handling team and equipment servicing an aircraft",
    services: [
      {
        id: "handling",
        slug: "ground-handling",
        name: "Ground Handling",
        description:
          "Aircraft, passenger, baggage and cargo handling, and turnaround management through trusted partners.",
        href: "/services/ground-handling",
      },
    ],
  },
  {
    id: "prepare",
    label: "Prepare",
    stageTitle: "Aviation Fuel and Inflight Catering",
    image: "/img/services/journey/04-prepare.webp",
    alt: "Aviation fuel hydrant servicing and inflight galley catering coordination",
    services: [
      {
        id: "fuel",
        slug: "aviation-fuel",
        name: "Aviation Fuel",
        description: "Jet A-1, TS-1 and Avgas 100LL arranged with trusted suppliers.",
        href: "/services/aviation-fuel",
      },
      {
        id: "catering",
        slug: "inflight-catering",
        name: "Inflight Catering",
        description: "Passenger and crew meals, including special dietary plans.",
        href: "/services/inflight-catering",
      },
    ],
  },
  {
    id: "rest",
    label: "Rest",
    stageTitle: "Flight Crew Accommodation & Transport",
    image: "/img/services/journey/05-rest.webp",
    alt: "Flight crew layover hotel accommodation and airport transportation",
    services: [
      {
        id: "crew",
        slug: "crew-logistics",
        name: "Crew Accommodation and Transport",
        description: "Airport-proximity hotels and airport-hotel-airport transfers.",
        href: "/services/crew-logistics",
      },
    ],
  },
  {
    id: "support",
    label: "Support",
    stageTitle: "Continuous Operations Support",
    image: "/img/services/journey/06-support.webp",
    alt: "24/7 aviation operations coordination desk monitoring international flights",
    services: [
      {
        id: "ops",
        slug: "operations-support",
        name: "24/7 Operations Support",
        description: "Round-the-clock help for urgent, ad-hoc, diplomatic and diverted flights.",
        href: "/services/operations-support",
      },
    ],
  },
];

export function FollowOneFlight() {
  const [activeStageId, setActiveStageId] = useState<string>("plan");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isLineDrawn, setIsLineDrawn] = useState(false);
  const [isFooterNear, setIsFooterNear] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsClient(true);

    const el = sectionRef.current;
    if (!el) return;

    // Trigger SVG route line draw once when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLineDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);

    // Watch CTA/Footer to ensure bottom bar unpins or stays clear
    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFooterNear(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const ctaEl = document.getElementById("final-cta");
    if (ctaEl) ctaObserver.observe(ctaEl);

    return () => {
      observer.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  const toggleService = (slug: string) => {
    setSelectedServices((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const clearServices = () => {
    setSelectedServices([]);
  };

  // Node positions along horizontal SVG curved line (1000px viewBox coordinate space)
  const nodePositions = [
    { x: 50, y: 26 },
    { x: 230, y: 16 },
    { x: 410, y: 32 },
    { x: 590, y: 18 },
    { x: 770, y: 30 },
    { x: 950, y: 20 },
  ];


  return (
    <section
      ref={sectionRef}
      id="follow-one-flight"
      className="py-10 lg:py-14 bg-white border-b border-[#CBD5E1] relative"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
            Every Stage of Your Flight, Handled by One Team
          </h2>
          <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
            Follow a flight from planning to departure and add the services you need to one request.
          </p>
        </div>

        {/* =========================================================================
            ROUTE LINE & STAGE NODES
            Desktop: Curved SVG Flight Path with 6 Round Nodes
            Mobile: Horizontally Scrollable Tab Row
            ========================================================================= */}
        <div className="relative pt-2 pb-4">
          {/* Mobile Horizontally Scrollable Tabs (< 768px) */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none gap-2 pb-2">
            {JOURNEY_STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setActiveStageId(stage.id)}
                  className={`snap-start shrink-0 px-4 py-2 rounded-[4px] text-sm font-bold border transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#0B2545] text-white border-[#0B2545] shadow-xs"
                      : "bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:border-[#0B2545]"
                  }`}
                >
                  {isActive && (
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3.5 h-3.5 rotate-45 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                  )}
                  <span>{stage.label}</span>
                </button>
              );
            })}
          </div>

          {/* Desktop Curved Route Line & Round Nodes (>= 768px) */}
          <div className="hidden md:block relative select-none">
            {/* SVG Flight Path Curved Line */}
            <svg
              viewBox="0 0 1000 50"
              fill="none"
              aria-hidden="true"
              className="w-full h-12 overflow-visible text-[#CBD5E1]"
            >
              <path
                d="M 50 26 Q 140 18, 230 16 T 410 32 T 590 18 T 770 30 T 950 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
                className={`transition-all duration-1000 ease-out ${
                  isLineDrawn ? "opacity-100" : "opacity-40"
                }`}
              />
            </svg>

            {/* 6 Round Stage Nodes Positioned on the Path */}
            <div className="absolute inset-0 flex justify-between items-center px-4">
              {JOURNEY_STAGES.map((stage, idx) => {
                const isActive = stage.id === activeStageId;
                const pos = nodePositions[idx];

                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStageId(stage.id)}
                    aria-label={`Select stage: ${stage.label}`}
                    style={{
                      left: `${(pos.x / 1000) * 100}%`,
                      top: `${pos.y}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                    className="absolute group flex flex-col items-center cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-full p-1"
                  >
                    {/* Round Node */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-200 border-2 ${
                        isActive
                          ? "bg-[#0B2545] border-[#0B2545] text-white shadow-md scale-110"
                          : "bg-white border-[#CBD5E1] text-[#475569] group-hover:border-[#0B2545] group-hover:text-[#0B2545]"
                      }`}
                    >
                      {isActive ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 rotate-45"
                          aria-hidden="true"
                        >
                          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        </svg>
                      ) : (
                        <span>{idx + 1}</span>
                      )}
                    </div>

                    {/* Node Text Label */}
                    <span
                      className={`mt-1.5 text-xs font-bold tracking-tight transition-colors ${
                        isActive ? "text-[#0B2545]" : "text-[#5C6B7A] group-hover:text-[#0B2545]"
                      }`}
                    >
                      {stage.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            SPLIT PANEL (All 6 panels rendered in DOM for SEO)
            Left: Navy Duotone Photo | Right: Stage Title & Service Cards
            ========================================================================= */}
        <div className="pt-2">
          {JOURNEY_STAGES.map((stage) => {
            const isActive = stage.id === activeStageId;
            // When JS is loaded, hide inactive panels; if JS is off, all remain visible
            const isHidden = isClient && !isActive;

            return (
              <div
                key={stage.id}
                hidden={isHidden}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch transition-all duration-200 ease-out ${
                  isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {/* Left: Navy Duotone Photo (4 cols) */}
                <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] rounded-[6px] overflow-hidden bg-slate-900 border border-[#CBD5E1] group shadow-2xs">
                  <Image
                    src={stage.image}
                    alt={stage.alt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/50 to-[#0B2545]/20"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 space-y-1">
                    <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                      Stage {JOURNEY_STAGES.indexOf(stage) + 1} of 6
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {stage.stageTitle}
                    </h3>
                  </div>
                </div>

                {/* Right: Stage Title and 1 or 2 Service Cards (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
                  <div className="space-y-1 pb-1">
                    <span className="text-xs font-bold text-[#5C6B7A] uppercase tracking-wider block">
                      Flight Stage Services
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                      {stage.stageTitle}
                    </h3>
                  </div>

                  <div className="space-y-3.5">
                    {stage.services.map((service) => {
                      const isSelected = selectedServices.includes(service.slug);

                      return (
                        <div
                          key={service.slug}
                          className={`bg-[#F8FAFC] border rounded-[6px] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 hover:-translate-y-1 shadow-2xs hover:shadow-md ${
                            isSelected
                              ? "border-[#0B2545] ring-1 ring-[#0B2545] bg-[#F1F5F9]"
                              : "border-[#CBD5E1] hover:border-[#0B2545]"
                          }`}
                        >
                          <div className="space-y-1.5 flex-1">
                            <h4 className="text-base font-bold text-[#0B2545]">
                              {service.name}
                            </h4>
                            <p className="text-sm text-[#475569] leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          <div className="flex items-center gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#CBD5E1]/60">
                            <Link
                              href={service.href}
                              className="text-xs font-bold text-[#0B2545] hover:underline underline-offset-2"
                            >
                              Learn more →
                            </Link>

                            <button
                              type="button"
                              onClick={() => toggleService(service.slug)}
                              className={`px-3.5 py-2 rounded-[3px] text-xs font-bold border transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                                isSelected
                                  ? "bg-[#0B2545] text-white border-[#0B2545]"
                                  : "bg-white text-[#0B2545] border-[#CBD5E1] hover:border-[#0B2545]"
                              }`}
                            >
                              {isSelected ? (
                                <>
                                  <span aria-hidden="true">✓</span>
                                  <span>Added</span>
                                </>
                              ) : (
                                <span>Add to my request</span>
                              )}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          FROSTED BOTTOM BAR (Appears when >= 1 service selected)
          ========================================================================= */}
      {selectedServices.length > 0 && !isFooterNear && (
        <div
          role="region"
          aria-label="Selected flight services summary"
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 supports-[backdrop-filter]:bg-white/88 backdrop-blur-[10px] border-t border-[#CBD5E1] shadow-xl py-3 px-4 sm:px-6 transition-all duration-300"
        >
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#0B2545]">
              <span className="font-bold whitespace-nowrap">
                {selectedServices.length} {selectedServices.length === 1 ? "service" : "services"} selected:
              </span>

              <div className="flex flex-wrap items-center gap-1.5">
                {selectedServices.map((slug) => {
                  const srv = JOURNEY_STAGES.flatMap((s) => s.services).find((s) => s.slug === slug);
                  return (
                    <span
                      key={slug}
                      className="inline-flex items-center gap-1 bg-[#0B2545] text-white text-xs font-semibold px-2 py-0.5 rounded-[2px]"
                    >
                      <span>{srv ? srv.name : slug}</span>
                      <button
                        type="button"
                        onClick={() => toggleService(slug)}
                        aria-label={`Remove ${srv?.name || slug}`}
                        className="hover:text-red-300 cursor-pointer text-[13px] leading-none"
                      >
                        ×
                      </button>
                    </span>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={clearServices}
                className="text-xs text-[#5C6B7A] hover:text-[#0B2545] underline ml-1 cursor-pointer"
              >
                Clear
              </button>
            </div>

            <div className="shrink-0 w-full sm:w-auto flex items-center justify-end">
              <Link
                href={`/request-flight-support?services=${selectedServices.join(",")}`}
                className="w-full sm:w-auto bg-[#0B2545] hover:bg-[#133661] text-white px-5 py-2.5 rounded-[2px] font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Start My Request</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
