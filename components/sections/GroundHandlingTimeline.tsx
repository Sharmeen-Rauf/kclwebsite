"use client";

import React, { useEffect, useRef, useState } from "react";

interface TimelineStep {
  number: number;
  lane: "You" | "KCL";
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: 1,
    lane: "You",
    title: "You send the aircraft, airport and schedule",
    description:
      "Registration, aircraft type, airport ICAO code, arrival and departure times in UTC, and the services you need.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    title: "We contact the handling partners",
    description:
      "We check parking, ground equipment and staff availability with trusted handling partners at the airport.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
  {
    number: 3,
    lane: "KCL",
    title: "We share the confirmed arrangements",
    description:
      "You receive the handling contacts and confirmed details for your dispatch briefing and crew.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    number: 4,
    lane: "KCL",
    title: "We pass on schedule changes",
    description:
      "If your flight arrives early or late, our 24/7 desk tells the station so they can adjust.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: 5,
    lane: "You",
    title: "You stay informed until departure",
    description: "We monitor the turnaround and keep you updated.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2.5 19h19" />
        <path d="M4.5 15.5L8 14l4 4 8-10-3-1-7 4-3.5-1.5L4.5 15.5z" />
      </svg>
    ),
  },
];

export function GroundHandlingTimeline() {
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
    <div ref={containerRef} className="space-y-8 w-full">
      {/* Intro Heading */}
      <div className="max-w-3xl space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
          How Your Ground Handling Is Arranged
        </h2>
        <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
          Our operations desk coordinates your station requirements with verified handling partners, keeping communication structured and direct.
        </p>
      </div>

      {/* =========================================================================
          DESKTOP: TWO-LANE HORIZONTAL TIMELINE (Hidden on mobile/tablet < 1024px)
          ========================================================================= */}
      <div className="hidden lg:block w-full space-y-4">
        {/* UPPER LANE: "You" (Steps 1 & 5) */}
        <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[8px] p-5">
          <div className="flex items-center gap-4">
            {/* Lane Label */}
            <div className="w-24 shrink-0 flex items-center gap-2">
              <span className="inline-flex items-center justify-center bg-white border border-[#CBD5E1] text-[#0B2545] font-semibold text-[14px] px-3.5 py-1.5 rounded-[3px] shadow-2xs">
                You
              </span>
            </div>

            {/* 5 Column Grid for Step 1 in col 1, Step 5 in col 5 */}
            <div className="grid grid-cols-5 gap-6 flex-1">
              {/* Step 1: Active in col 1 */}
              <div
                style={{
                  transitionDelay: hasScrolledIntoView ? "0ms" : "0ms",
                }}
                className={`bg-white border border-[#CBD5E1] rounded-[6px] p-5 shadow-xs transition-all duration-300 motion-reduce:transition-none ${
                  hasScrolledIntoView
                    ? "opacity-100 translate-y-0"
                    : "opacity-90 translate-y-1"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0">
                    {TIMELINE_STEPS[0].icon}
                  </span>
                  <span className="text-[13px] font-bold text-[#0B2545]">
                    Step 1
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0B2545] leading-snug">
                  {TIMELINE_STEPS[0].title}
                </h3>
                <p className="text-[15px] text-[#16202B] leading-relaxed mt-2">
                  {TIMELINE_STEPS[0].description}
                </p>
              </div>

              {/* Col 2: Spacer */}
              <div aria-hidden="true" className="flex items-center justify-center">
                <span className="h-0.5 w-full bg-[#E2E8F0] border-t border-dashed border-[#CBD5E1]" />
              </div>

              {/* Col 3: Spacer */}
              <div aria-hidden="true" className="flex items-center justify-center">
                <span className="h-0.5 w-full bg-[#E2E8F0] border-t border-dashed border-[#CBD5E1]" />
              </div>

              {/* Col 4: Spacer */}
              <div aria-hidden="true" className="flex items-center justify-center">
                <span className="h-0.5 w-full bg-[#E2E8F0] border-t border-dashed border-[#CBD5E1]" />
              </div>

              {/* Step 5: Active in col 5 */}
              <div
                style={{
                  transitionDelay: hasScrolledIntoView ? "800ms" : "0ms",
                }}
                className={`bg-white border border-[#CBD5E1] rounded-[6px] p-5 shadow-xs transition-all duration-300 motion-reduce:transition-none ${
                  hasScrolledIntoView
                    ? "opacity-100 translate-y-0"
                    : "opacity-90 translate-y-1"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0">
                    {TIMELINE_STEPS[4].icon}
                  </span>
                  <span className="text-[13px] font-bold text-[#0B2545]">
                    Step 5
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0B2545] leading-snug">
                  {TIMELINE_STEPS[4].title}
                </h3>
                <p className="text-[15px] text-[#16202B] leading-relaxed mt-2">
                  {TIMELINE_STEPS[4].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* THIN NAVY AXIS LINE WITH 5 CIRCULAR NODES */}
        <div className="px-5">
          <div className="flex items-center gap-4">
            {/* Axis offset to match lane label column */}
            <div className="w-24 shrink-0 text-right pr-2">
              <span className="text-[13px] font-semibold text-[#64748B]">
                Timeline
              </span>
            </div>

            {/* Connecting thin navy line across 5 columns */}
            <div className="grid grid-cols-5 gap-6 flex-1 relative py-3">
              <div
                aria-hidden="true"
                className="absolute top-1/2 left-8 right-8 h-[2px] bg-[#0B2545] -translate-y-1/2 -z-0"
              />

              {TIMELINE_STEPS.map((step, idx) => (
                <div key={step.number} className="flex justify-center relative z-10">
                  <div
                    style={{
                      transitionDelay: hasScrolledIntoView ? `${idx * 200}ms` : "0ms",
                    }}
                    className={`w-9 h-9 rounded-full border-2 border-white bg-[#0B2545] text-white flex items-center justify-center font-bold text-[14px] shadow-sm transition-all duration-300 motion-reduce:transition-none ${
                      hasScrolledIntoView ? "scale-100 opacity-100" : "scale-90 opacity-90"
                    }`}
                  >
                    {step.number}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LOWER LANE: "KCL" (Steps 2, 3 & 4) */}
        <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[8px] p-5">
          <div className="flex items-center gap-4">
            {/* Lane Label */}
            <div className="w-24 shrink-0 flex items-center gap-2">
              <span className="inline-flex items-center justify-center bg-[#0B2545] text-white font-semibold text-[14px] px-3.5 py-1.5 rounded-[3px] shadow-2xs">
                KCL
              </span>
            </div>

            {/* 5 Column Grid for Steps 2, 3, 4 */}
            <div className="grid grid-cols-5 gap-6 flex-1">
              {/* Col 1: Spacer */}
              <div aria-hidden="true" className="flex items-center justify-center">
                <span className="h-0.5 w-full bg-[#E2E8F0] border-t border-dashed border-[#CBD5E1]" />
              </div>

              {/* Step 2: Col 2 */}
              <div
                style={{
                  transitionDelay: hasScrolledIntoView ? "200ms" : "0ms",
                }}
                className={`bg-white border border-[#CBD5E1] rounded-[6px] p-5 shadow-xs transition-all duration-300 motion-reduce:transition-none ${
                  hasScrolledIntoView
                    ? "opacity-100 translate-y-0"
                    : "opacity-90 translate-y-1"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0">
                    {TIMELINE_STEPS[1].icon}
                  </span>
                  <span className="text-[13px] font-bold text-[#0B2545]">
                    Step 2
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0B2545] leading-snug">
                  {TIMELINE_STEPS[1].title}
                </h3>
                <p className="text-[15px] text-[#16202B] leading-relaxed mt-2">
                  {TIMELINE_STEPS[1].description}
                </p>
              </div>

              {/* Step 3: Col 3 */}
              <div
                style={{
                  transitionDelay: hasScrolledIntoView ? "400ms" : "0ms",
                }}
                className={`bg-white border border-[#CBD5E1] rounded-[6px] p-5 shadow-xs transition-all duration-300 motion-reduce:transition-none ${
                  hasScrolledIntoView
                    ? "opacity-100 translate-y-0"
                    : "opacity-90 translate-y-1"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0">
                    {TIMELINE_STEPS[2].icon}
                  </span>
                  <span className="text-[13px] font-bold text-[#0B2545]">
                    Step 3
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0B2545] leading-snug">
                  {TIMELINE_STEPS[2].title}
                </h3>
                <p className="text-[15px] text-[#16202B] leading-relaxed mt-2">
                  {TIMELINE_STEPS[2].description}
                </p>
              </div>

              {/* Step 4: Col 4 */}
              <div
                style={{
                  transitionDelay: hasScrolledIntoView ? "600ms" : "0ms",
                }}
                className={`bg-white border border-[#CBD5E1] rounded-[6px] p-5 shadow-xs transition-all duration-300 motion-reduce:transition-none ${
                  hasScrolledIntoView
                    ? "opacity-100 translate-y-0"
                    : "opacity-90 translate-y-1"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#0B2545] text-white flex items-center justify-center shrink-0">
                    {TIMELINE_STEPS[3].icon}
                  </span>
                  <span className="text-[13px] font-bold text-[#0B2545]">
                    Step 4
                  </span>
                </div>
                <h3 className="text-[18px] font-bold text-[#0B2545] leading-snug">
                  {TIMELINE_STEPS[3].title}
                </h3>
                <p className="text-[15px] text-[#16202B] leading-relaxed mt-2">
                  {TIMELINE_STEPS[3].description}
                </p>
              </div>

              {/* Col 5: Spacer */}
              <div aria-hidden="true" className="flex items-center justify-center">
                <span className="h-0.5 w-full bg-[#E2E8F0] border-t border-dashed border-[#CBD5E1]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET: VERTICAL TIMELINE (< 1024px)
          ========================================================================= */}
      <div className="block lg:hidden space-y-4">
        <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-[#0B2545]">
          {TIMELINE_STEPS.map((step, idx) => (
            <div
              key={step.number}
              style={{
                transitionDelay: hasScrolledIntoView ? `${idx * 200}ms` : "0ms",
              }}
              className={`relative bg-white border border-[#CBD5E1] rounded-[6px] p-5 shadow-xs transition-all duration-300 motion-reduce:transition-none ${
                hasScrolledIntoView ? "opacity-100 translate-y-0" : "opacity-90 translate-y-1"
              }`}
            >
              {/* Timeline Node on the vertical line */}
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

                {/* Lane Tag (14px): Light grey for "You", Navy for "KCL" */}
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
                  <p className="text-[15px] text-[#16202B] leading-relaxed mt-2">
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
      <div className="bg-[#F0F4F8] border border-[#CBD5E1] border-l-4 border-l-[#0B2545] p-5 rounded-[4px]">
        <p className="text-[15px] text-[#16202B] leading-relaxed">
          Handling is carried out by licensed handling companies at each airport. Availability depends on airport procedures and provider notice.
        </p>
      </div>
    </div>
  );
}

