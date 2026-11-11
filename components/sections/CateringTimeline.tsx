"use client";

import React, { useEffect, useRef, useState } from "react";

interface CateringStep {
  number: number;
  lane: "You" | "KCL";
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CATERING_STEPS: CateringStep[] = [
  {
    number: 1,
    lane: "You",
    title: "You send the flight, airport and meal needs",
    description:
      "Aircraft registration, airport ICAO code, UTC departure schedule, passenger and crew counts, and dietary specifications.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: 2,
    lane: "KCL",
    title: "We check availability with the catering provider",
    description:
      "Our operations desk verifies galley uplift menus, kitchen lead times, and special dietary feasibility with licensed airport flight caterers.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
  {
    number: 3,
    lane: "KCL",
    title: "We align delivery with your ground handling schedule",
    description:
      "Catering high-loader truck positioning and galley staging are coordinated alongside ramp handling, fueling, and passenger boarding.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: 4,
    lane: "KCL",
    title: "We pass on changes to headcount or departure time",
    description:
      "If your schedule shifts or passenger numbers update, our 24/7 desk immediately notifies the station kitchen to adjust meal production.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    number: 5,
    lane: "You",
    title: "You stay informed until departure",
    description:
      "You receive confirmed delivery details, galley seals, and catering receipts for dispatch records and flight crew sign-off.",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

export function CateringTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasScrolledIntoView, setHasScrolledIntoView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIntoView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="space-y-6 w-full">
      {/* Intro Heading */}
      <div className="max-w-3xl space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
          How Your Catering Is Arranged
        </h2>
        <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
          From initial headcount submission to high-loader ramp delivery, our operations desk coordinates directly with licensed flight kitchens.
        </p>
      </div>

      {/* =========================================================================
          DESKTOP: COMPACT ONE-SCREEN 5-STEP COORDINATION PIPELINE (>= 1024px)
          ========================================================================= */}
      <div className="hidden lg:block w-full space-y-4">
        {/* Two-Lane Responsibility Rail at Top */}
        <div className="grid grid-cols-5 gap-3.5">
          {/* Col 1: "You" Lane Tag */}
          <div className="bg-[#F1F5F9] border border-[#CBD5E1] rounded-[4px] py-1.5 px-3 flex items-center justify-between">
            <span className="text-[14px] font-bold text-[#0B2545]">You</span>
            <span className="text-[12px] text-[#5C6B7A] font-medium">Flight &amp; Headcount</span>
          </div>

          {/* Cols 2, 3, 4: "KCL" Lane Tag Spanning Middle 3 Columns */}
          <div className="col-span-3 bg-[#0B2545] text-white border border-[#0B2545] rounded-[4px] py-1.5 px-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[14px] font-bold text-white">KCL Operations Desk</span>
            </div>
            <span className="text-[12px] text-slate-200 font-medium">Kitchen Coordination &amp; Ramp Delivery Timing</span>
          </div>

          {/* Col 5: "You" Lane Tag */}
          <div className="bg-[#F1F5F9] border border-[#CBD5E1] rounded-[4px] py-1.5 px-3 flex items-center justify-between">
            <span className="text-[14px] font-bold text-[#0B2545]">You</span>
            <span className="text-[12px] text-[#5C6B7A] font-medium">Crew Briefing &amp; Uplift</span>
          </div>
        </div>

        {/* Thin Navy Line Axis with 5 Nodes & Traveling Signal Dot */}
        <div className="relative py-1 px-4">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-8 right-8 h-[2px] bg-[#0B2545]/25 -translate-y-1/2 -z-0 overflow-visible pointer-events-none"
          >
            <div className="timeline-signal-dot" />
          </div>

          <div className="grid grid-cols-5 gap-3.5 relative z-10">
            {CATERING_STEPS.map((step, idx) => (
              <div key={step.number} className="flex justify-center">
                <div
                  style={{
                    transitionDelay: hasScrolledIntoView ? `${idx * 150}ms` : "0ms",
                  }}
                  className={`w-8 h-8 rounded-full border-2 ${
                    step.lane === "KCL"
                      ? "bg-[#0B2545] border-white text-white"
                      : "bg-white border-[#0B2545] text-[#0B2545]"
                  } flex items-center justify-center font-bold text-[13px] shadow-sm transition-all duration-300 motion-reduce:transition-none hover:scale-110 cursor-default ${
                    hasScrolledIntoView ? "scale-100 opacity-100" : "scale-90 opacity-90"
                  }`}
                >
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Compact Cards Side-by-Side */}
        <div className="grid grid-cols-5 gap-3.5 items-stretch">
          {CATERING_STEPS.map((step, idx) => (
            <div
              key={step.number}
              style={{
                transitionDelay: hasScrolledIntoView ? `${idx * 150}ms` : "0ms",
              }}
              className={`group rounded-[6px] p-4 flex flex-col justify-between space-y-2.5 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md ${
                step.lane === "KCL"
                  ? "bg-white/95 backdrop-blur-xs border-2 border-[#0B2545]/25 hover:border-[#0B2545] shadow-xs"
                  : "bg-white/80 backdrop-blur-xs border border-[#CBD5E1] hover:border-[#0B2545] shadow-2xs"
              } ${
                hasScrolledIntoView ? "opacity-100 translate-y-0" : "opacity-90 translate-y-1"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      step.lane === "KCL"
                        ? "bg-[#0B2545] text-white"
                        : "bg-white border border-[#CBD5E1] text-[#0B2545]"
                    }`}
                  >
                    {step.icon}
                  </span>
                  <span
                    className={`text-[12px] font-bold px-2 py-0.5 rounded-[2px] ${
                      step.lane === "KCL"
                        ? "bg-[#0B2545]/10 text-[#0B2545]"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    Step {step.number}
                  </span>
                </div>

                <h3 className="text-[17px] font-bold text-[#0B2545] leading-snug">
                  {step.title}
                </h3>

                <p className="text-[14.5px] text-[#16202B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET: VERTICAL TIMELINE (< 1024px)
          ========================================================================= */}
      <div className="block lg:hidden space-y-4">
        <div className="relative pl-6 sm:pl-8 space-y-5 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-[#0B2545]">
          {CATERING_STEPS.map((step, idx) => (
            <div
              key={step.number}
              style={{
                transitionDelay: hasScrolledIntoView ? `${idx * 150}ms` : "0ms",
              }}
              className={`relative bg-white border border-[#CBD5E1] rounded-[6px] p-4 sm:p-5 shadow-xs transition-all duration-300 motion-reduce:transition-none ${
                hasScrolledIntoView ? "opacity-100 translate-y-0" : "opacity-90 translate-y-1"
              }`}
            >
              {/* Timeline Node on vertical line */}
              <div
                aria-hidden="true"
                className="absolute -left-[31px] sm:-left-[39px] top-5 w-7 h-7 rounded-full bg-[#0B2545] text-white border-2 border-white flex items-center justify-center text-xs font-bold shadow-xs"
              >
                {step.number}
              </div>

              {/* Lane Badge + Title */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-[13px] font-bold text-[#0B2545]">
                  Step {step.number}
                </span>

                {step.lane === "You" ? (
                  <span className="bg-[#F1F5F9] text-[#0B2545] border border-[#CBD5E1] font-semibold text-[14px] px-2.5 py-0.5 rounded-[2px]">
                    You
                  </span>
                ) : (
                  <span className="bg-[#0B2545] text-white font-semibold text-[14px] px-2.5 py-0.5 rounded-[2px]">
                    KCL
                  </span>
                )}
              </div>

              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0 mt-0.5">
                  {step.icon}
                </span>
                <div>
                  <h3 className="text-[18px] font-bold text-[#0B2545] leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-[#16202B] leading-relaxed mt-1.5">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          NOTICE BOX (Clearly visible box, 15px text, light blue-grey, navy left border)
          ========================================================================= */}
      <div className="bg-[#F0F4F8] border border-[#CBD5E1] border-l-4 border-l-[#0B2545] px-5 py-3.5 rounded-[4px]">
        <p className="text-[15px] text-[#16202B] leading-relaxed">
          Food preparation, hygiene and delivery are carried out by the catering provider at the airport. Menu choices and amendment cut-off times depend on the provider and the notice you give.
        </p>
      </div>
    </div>
  );
}

