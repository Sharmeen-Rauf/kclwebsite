"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface LegacyMilestone {
  slug: string;
  era: string;
  text: string;
  imageSrc: string | null;
}

interface LegacyTimelineSliderProps {
  milestones: LegacyMilestone[];
}

export function LegacyTimelineSlider({ milestones }: LegacyTimelineSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const selectIndex = (index: number) => {
    const wrapped = (index + milestones.length) % milestones.length;
    setActiveIndex(wrapped);
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[wrapped] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || isPaused || milestones.length <= 1) return;

    const timer = setInterval(() => {
      if (document.hidden) return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % milestones.length;
        const container = scrollRef.current;
        if (container) {
          const card = container.children[next] as HTMLElement | undefined;
          if (card) {
            container.scrollTo({
              left: card.offsetLeft - container.offsetLeft,
              behavior: "smooth",
            });
          }
        }
        return next;
      });
    }, 4200);

    return () => clearInterval(timer);
  }, [isPaused, milestones.length]);

  const progressPct =
    milestones.length > 1
      ? (activeIndex / (milestones.length - 1)) * 100
      : 100;

  return (
    <section
      aria-labelledby="legacy-timeline-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold tracking-wide text-[#B88200] inline-flex items-center gap-1.5 mb-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              <span>Aviation heritage</span>
            </span>
            <h2
              id="legacy-timeline-heading"
              className="text-2xl sm:text-3xl font-bold text-[#0B2545]"
            >
              A Legacy That Started in 1947
            </h2>
            <p className="text-base text-[#475569] mt-1" aria-live="polite">
              Milestone {activeIndex + 1} of {milestones.length}:{" "}
              <strong className="text-[#0B2545]">
                {milestones[activeIndex]?.era}
              </strong>
            </p>
          </div>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545]" />
        </div>

        {/* Animated Timeline Track with Gold Active Halo */}
        <div className="relative pt-2 pb-1">
          <div className="relative h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#0B2545] to-[#F4C400] rounded-full transition-all duration-700 ease-out motion-reduce:transition-none"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="relative -mt-3.5 flex items-center justify-between">
            {milestones.map((m, idx) => {
              const isActive = idx === activeIndex;
              const isPassed = idx <= activeIndex;
              return (
                <button
                  key={m.slug}
                  type="button"
                  onClick={() => selectIndex(idx)}
                  aria-label={`Select ${m.era}`}
                  aria-current={isActive ? "step" : undefined}
                  className="group flex flex-col items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-[4px] px-1"
                >
                  <span
                    className={`w-5 h-5 rounded-full border-2 transition-all duration-300 motion-reduce:transition-none ${
                      isActive
                        ? "bg-[#F4C400] border-[#0B2545] scale-125 ring-4 ring-[#F4C400]/35"
                        : isPassed
                        ? "bg-[#0B2545] border-[#0B2545]"
                        : "bg-white border-[#94A3B8] group-hover:border-[#0B2545]"
                    }`}
                  />
                  <span
                    className={`text-base font-semibold transition-colors ${
                      isActive ? "text-[#0B2545]" : "text-[#475569]"
                    }`}
                  >
                    {m.era}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Smooth Auto-Advancing & Touch-Swipeable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-none"
        >
          {milestones.map((m, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={m.slug}
                onClick={() => selectIndex(idx)}
                className={`snap-start shrink-0 w-[82vw] sm:w-[340px] lg:w-[360px] relative rounded-[6px] border p-5 sm:p-6 flex flex-col justify-between gap-4 cursor-pointer transition-all duration-500 motion-reduce:transition-none motion-reduce:transform-none overflow-hidden ${
                  isActive
                    ? "bg-[#F8FAFC] border-[#0B2545] shadow-md -translate-y-1"
                    : "bg-white border-[#CBD5E1] opacity-85 hover:opacity-100 hover:border-[#0B2545]"
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="space-y-3">
                  <div className="text-xl font-bold text-[#0B2545]">
                    {m.era}
                  </div>
                  {m.imageSrc && (
                    <div className="relative h-36 w-full rounded-[4px] overflow-hidden border border-[#CBD5E1]">
                      <Image
                        src={m.imageSrc}
                        alt={`${m.era} milestone in Kashmirwala Group aviation history`}
                        fill
                        sizes="360px"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <p className="text-base text-[#1E293B] leading-relaxed">
                    {m.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
