"use client";

import React, { useEffect, useRef, useState } from "react";

interface StepItem {
  step: string;
  title: string;
  description: string;
}

interface ServiceTwoLaneTimelineProps {
  heading: string;
  steps: StepItem[];
  authorityDependencies?: string[];
}

export function ServiceTwoLaneTimeline({
  heading,
  steps,
  authorityDependencies = [],
}: ServiceTwoLaneTimelineProps) {
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

  const totalSteps = steps.length;

  return (
    <div ref={containerRef} className="space-y-6 w-full">
      <div className="max-w-3xl space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
          Our operations desk coordinates your station requirements with verified partners, keeping communication structured and direct.
        </p>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block w-full space-y-4">
        {/* Responsibility Rail */}
        <div className="grid grid-cols-5 gap-3.5">
          <div className="bg-[#F1F5F9] border border-[#CBD5E1] rounded-[4px] py-1.5 px-3 flex items-center justify-between">
            <span className="text-[14px] font-bold text-[#0B2545]">You</span>
            <span className="text-[12px] text-[#5C6B7A] font-medium">Initial Request</span>
          </div>

          <div className="col-span-3 bg-[#0B2545] text-white border border-[#0B2545] rounded-[4px] py-1.5 px-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[14px] font-bold text-white">KCL Operations Desk</span>
            </div>
            <span className="text-[12px] text-slate-200 font-medium">Stakeholder Coordination &amp; Status Updates</span>
          </div>

          <div className="bg-[#F1F5F9] border border-[#CBD5E1] rounded-[4px] py-1.5 px-3 flex items-center justify-between">
            <span className="text-[14px] font-bold text-[#0B2545]">You</span>
            <span className="text-[12px] text-[#5C6B7A] font-medium">Flight Briefing</span>
          </div>
        </div>

        {/* Axis Bar with Signal Dot */}
        <div className="relative py-1 px-4">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-8 right-8 h-[2px] bg-[#0B2545]/25 -translate-y-1/2 -z-0 overflow-visible pointer-events-none"
          >
            <div className="timeline-signal-dot" />
          </div>

          <div className="grid grid-cols-5 gap-3.5 relative z-10">
            {steps.map((step, idx) => {
              const isYou = idx === 0 || idx === totalSteps - 1;
              return (
                <div key={step.step} className="flex justify-center">
                  <div
                    style={{
                      transitionDelay: hasScrolledIntoView ? `${idx * 150}ms` : "0ms",
                    }}
                    className={`w-8 h-8 rounded-full border-2 ${
                      !isYou
                        ? "bg-[#0B2545] border-white text-white"
                        : "bg-white border-[#0B2545] text-[#0B2545]"
                    } flex items-center justify-center font-bold text-[13px] shadow-sm transition-all duration-300 motion-reduce:transition-none hover:scale-110 cursor-default ${
                      hasScrolledIntoView ? "scale-100 opacity-100" : "scale-90 opacity-90"
                    }`}
                  >
                    {idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 Step Cards */}
        <div className="grid grid-cols-5 gap-3.5 items-stretch">
          {steps.map((step, idx) => {
            const isYou = idx === 0 || idx === totalSteps - 1;
            return (
              <div
                key={step.step}
                style={{
                  transitionDelay: hasScrolledIntoView ? `${idx * 150}ms` : "0ms",
                }}
                className={`group rounded-[6px] p-4 flex flex-col justify-between space-y-2.5 transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-md ${
                  !isYou
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
                        !isYou
                          ? "bg-[#0B2545] text-white"
                          : "bg-white border border-[#CBD5E1] text-[#0B2545]"
                      }`}
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </span>
                    <span
                      className={`text-[12px] font-bold px-2 py-0.5 rounded-[2px] ${
                        !isYou
                          ? "bg-[#0B2545]/10 text-[#0B2545]"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-[17px] font-bold text-[#0B2545] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-[14px] text-[#16202B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden space-y-4">
        <div className="relative pl-6 sm:pl-8 space-y-5 before:absolute before:left-3 sm:before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-[#0B2545]">
          {steps.map((step, idx) => {
            const isYou = idx === 0 || idx === totalSteps - 1;
            return (
              <div
                key={step.step}
                className="relative bg-white border border-[#CBD5E1] rounded-[6px] p-4 sm:p-5 shadow-xs"
              >
                <div
                  aria-hidden="true"
                  className="absolute -left-[31px] sm:-left-[39px] top-5 w-7 h-7 rounded-full bg-[#0B2545] text-white border-2 border-white flex items-center justify-center text-xs font-bold"
                >
                  {idx + 1}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[13px] font-bold text-[#0B2545]">
                    Step {idx + 1}
                  </span>
                  <span
                    className={`font-semibold text-[13px] px-2.5 py-0.5 rounded-[2px] ${
                      isYou
                        ? "bg-[#F1F5F9] text-[#0B2545] border border-[#CBD5E1]"
                        : "bg-[#0B2545] text-white"
                    }`}
                  >
                    {isYou ? "You" : "KCL"}
                  </span>
                </div>

                <h3 className="text-[17px] font-bold text-[#0B2545] leading-snug">
                  {step.title}
                </h3>
                <p className="text-[14.5px] text-[#16202B] leading-relaxed mt-1.5">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Notice / Governance Box */}
      {authorityDependencies.length > 0 && (
        <div className="bg-[#F0F4F8] border border-[#CBD5E1] border-l-4 border-l-[#0B2545] px-5 py-3.5 rounded-[4px]">
          <p className="text-[14.5px] text-[#16202B] leading-relaxed">
            {authorityDependencies[0]}
          </p>
        </div>
      )}
    </div>
  );
}
