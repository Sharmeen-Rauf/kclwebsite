"use client";

import React, { useEffect, useRef, useState } from "react";

const HOW_WE_WORK_POINTS = [
  {
    num: "1",
    title: "One point of contact",
    body: "You work with a dedicated coordinator who oversees all aspects of your flight, keeping permits, handling, fuel and crew services aligned.",
  },
  {
    num: "2",
    title: "24/7 coordination across time zones",
    body: "Our operations desk operates around the clock to assist with schedule revisions, unexpected turnarounds, technical stops and short-notice clearances.",
  },
  {
    num: "3",
    title: "Clear communication",
    body: "We share timely updates, confirmed permit numbers and transparent status reports directly with your dispatch and operations control center.",
  },
];

export function HowWeWorkBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineDrawn, setLineDrawn] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setLineDrawn(true);
      return;
    }

    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLineDrawn(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="how-we-work-heading"
      className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-sm font-bold tracking-wide text-[#B88200] inline-flex items-center gap-1.5 mb-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
            <span>Operational methodology</span>
          </span>
          <h2
            id="how-we-work-heading"
            className="text-2xl sm:text-3xl font-bold text-[#0B2545]"
          >
            How we work
          </h2>
          <p className="text-base text-[#475569] mt-2">
            Our operational approach is built around clarity, speed, and dependable flight coordination.
          </p>
        </div>

        <div className="relative">
          {/* Thin line connecting the three numbered statements on desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-12 right-12 h-[2px] bg-[#CBD5E1] overflow-hidden"
          >
            <div
              className={`h-full bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] transition-all duration-1000 ease-out motion-reduce:transition-none ${
                lineDrawn ? "w-full" : "w-0"
              }`}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {HOW_WE_WORK_POINTS.map((item) => (
              <div
                key={item.num}
                className="group relative overflow-hidden bg-white border border-[#CBD5E1] hover:border-[#0B2545] hover:-translate-y-1.5 hover:shadow-xl rounded-[8px] p-6 space-y-3 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none"
              >
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 motion-reduce:transition-none"
                />
                <div className="w-12 h-12 rounded-full bg-[#0B2545] border-2 border-[#F4C400] text-[#F4C400] text-xl font-bold flex items-center justify-center group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#F4C400]/25 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none">
                  {item.num}
                </div>
                <h3 className="text-xl font-bold text-[#0B2545]">
                  {item.title}
                </h3>
                <p className="text-base text-[#1E293B] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-4">
          <p className="text-base font-medium text-[#475569] text-center">
            Approvals are decided by the relevant civil aviation authorities.
          </p>
        </div>
      </div>
    </section>
  );
}

