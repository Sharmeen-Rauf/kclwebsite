"use client";

import React, { useRef, useState } from "react";
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
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);

  const selectIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(milestones.length - 1, index));
    setActiveIndex(clamped);
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[clamped] as HTMLElement | undefined;
    if (card) {
      container.scrollTo({
        left: card.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      selectIndex(activeIndex + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      selectIndex(activeIndex - 1);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - container.offsetLeft;
    scrollStartLeft.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const stopDragging = () => setIsDragging(false);

  const progressPct =
    milestones.length > 1
      ? (activeIndex / (milestones.length - 1)) * 100
      : 100;

  return (
    <section
      aria-labelledby="legacy-timeline-heading"
      className="py-12 sm:py-16 bg-white border-b border-[#CBD5E1]"
      onKeyDown={handleKeyDown}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
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

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => selectIndex(activeIndex - 1)}
              disabled={activeIndex === 0}
              aria-label="Previous milestone"
              className="w-10 h-10 rounded-[4px] border border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#0B2545] disabled:opacity-40 text-[#0B2545] font-bold text-lg flex items-center justify-center cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => selectIndex(activeIndex + 1)}
              disabled={activeIndex === milestones.length - 1}
              aria-label="Next milestone"
              className="w-10 h-10 rounded-[4px] border border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#0B2545] disabled:opacity-40 text-[#0B2545] font-bold text-lg flex items-center justify-center cursor-pointer disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              →
            </button>
          </div>
        </div>

        {/* Timeline Track with Nodes & Progress Fill */}
        <div className="relative pt-2 pb-1">
          <div className="relative h-1 bg-[#E2E8F0] rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-[#0B2545] rounded-full transition-all duration-300 motion-reduce:transition-none"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <div className="relative -mt-3 flex items-center justify-between">
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
                    className={`w-5 h-5 rounded-full border-2 transition-transform motion-reduce:transition-none ${
                      isActive
                        ? "bg-[#0B2545] border-[#0B2545] scale-115 ring-4 ring-[#0B2545]/15"
                        : isPassed
                        ? "bg-[#0B2545] border-[#0B2545]"
                        : "bg-white border-[#94A3B8] group-hover:border-[#0B2545]"
                    }`}
                  />
                  <span
                    className={`text-base font-semibold ${
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

        {/* Horizontal Scroll-Snap Cards */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-none select-none cursor-grab active:cursor-grabbing"
        >
          {milestones.map((m, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={m.slug}
                onClick={() => selectIndex(idx)}
                className={`snap-start shrink-0 w-[82vw] sm:w-[340px] lg:w-[360px] rounded-[6px] border p-5 sm:p-6 flex flex-col justify-between gap-4 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none ${
                  isActive
                    ? "bg-[#F8FAFC] border-[#0B2545] shadow-sm scale-[1.01]"
                    : "bg-white border-[#CBD5E1] opacity-85 hover:opacity-100"
                }`}
              >
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

