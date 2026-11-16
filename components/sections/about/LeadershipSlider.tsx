"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

export interface LeaderProfile {
  slug: string;
  initials: string;
  name: string;
  role: string;
  details: string | null;
  photoSrc: string | null;
}

interface LeadershipSliderProps {
  leaders: LeaderProfile[];
}

export function LeadershipSlider({ leaders }: LeadershipSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPct, setScrollPct] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setScrollPct(0);
      return;
    }
    setScrollPct((el.scrollLeft / max) * 100);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pct = parseFloat(e.target.value);
    setScrollPct(pct);
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    el.scrollLeft = (pct / 100) * max;
  };

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="scroll-mt-16 py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="max-w-3xl">
          <h2
            id="leadership-heading"
            className="text-2xl sm:text-3xl font-bold text-[#0B2545]"
          >
            Generations of Aviation Leadership
          </h2>
          <p className="text-base text-[#475569] mt-2 leading-relaxed">
            Continuous family leadership guiding aviation operations, airline agency representations, and international flight support across eight decades.
          </p>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 scrollbar-none"
        >
          {leaders.map((leader) => (
            <article
              key={leader.slug}
              tabIndex={0}
              className="group snap-start shrink-0 w-[78vw] sm:w-[270px] lg:w-[250px] bg-white border border-[#CBD5E1] rounded-[6px] overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2"
            >
              {/* 4:5 Portrait Frame */}
              <div className="relative aspect-[4/5] w-full bg-[#F1F5F9] overflow-hidden flex items-center justify-center">
                {leader.photoSrc ? (
                  <>
                    <Image
                      src={leader.photoSrc}
                      alt={`${leader.name}, ${leader.role}`}
                      fill
                      sizes="270px"
                      className="object-cover object-center group-hover:scale-[1.04] motion-safe:transition-transform motion-safe:duration-500"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-[#0B2545]/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 motion-reduce:transition-none"
                    />
                  </>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-2xl font-bold shadow-sm">
                    {leader.initials}
                  </div>
                )}

                {/* Slide-up Bio Panel on Hover / Focus */}
                {leader.details && (
                  <div className="absolute inset-x-0 bottom-0 bg-[#0B2545]/95 text-white p-4 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300 motion-reduce:transition-none motion-reduce:static motion-reduce:translate-y-0">
                    <p className="text-base leading-snug text-slate-100">
                      {leader.details}
                    </p>
                  </div>
                )}
              </div>

              <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0B2545] leading-snug">
                    {leader.name}
                  </h3>
                  <p className="text-base text-[#475569] mt-0.5">
                    {leader.role}
                  </p>
                </div>
                {leader.details && (
                  <p className="sr-only">{leader.details}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Thin Navy Line with Draggable Handle */}
        <div className="flex items-center gap-4 pt-1">
          <label htmlFor="leadership-scroll-range" className="sr-only">
            Scroll leadership profiles
          </label>
          <input
            id="leadership-scroll-range"
            type="range"
            min={0}
            max={100}
            value={Math.round(scrollPct)}
            onChange={handleRangeChange}
            className="w-full h-1.5 bg-[#CBD5E1] rounded-full appearance-none cursor-pointer accent-[#0B2545] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          />
        </div>
      </div>
    </section>
  );
}

