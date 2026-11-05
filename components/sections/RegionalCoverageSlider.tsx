"use client";

import React, { useState } from "react";
import Image from "next/image";

export interface RegionCard {
  id: string;
  number: string;
  region: string;
  corridors: string;
  detail: string;
  firs: string;
  image: string;
  alt: string;
}

const REGIONS: RegionCard[] = [
  {
    id: "africa",
    number: "01",
    region: "Africa",
    corridors: "Trans-Continental Corridors",
    detail:
      "Trans-continental routes, technical fuel stops & commercial clearances across North, East, and Southern Africa.",
    firs: "HKNA · FAOR · DAAA · DRRR",
    image: "/img/regions/africa.webp",
    alt: "African trans-continental flight route at sunset",
  },
  {
    id: "middle-east",
    number: "02",
    region: "Middle East",
    corridors: "Gulf & Levant Airspaces",
    detail:
      "Gulf transit corridors, turnaround ramp coordination & expedited sovereign overflight clearances.",
    firs: "OMAE · OBBB · OEJD · OKAC",
    image: "/img/regions/middle-east.webp",
    alt: "Middle East international transit hub apron at twilight",
  },
  {
    id: "europe",
    number: "03",
    region: "Europe",
    corridors: "East-West Transit Strings",
    detail:
      "East–West international airways, Eurocontrol slot liaison, and seasonal charter timetable filings.",
    firs: "EGTT · LFMM · EDGG · LIRR",
    image: "/img/regions/europe.webp",
    alt: "High altitude European airspace corridor at dusk",
  },
  {
    id: "asia",
    number: "04",
    region: "Asia",
    corridors: "South, Central & East Asia",
    detail:
      "Comprehensive South, East & Central Asia airspace clearances, airport slots, and apron supervisory liaisons.",
    firs: "OPKR · OPLR · VIDF · VOMF · VTBB",
    image: "/img/regions/asia.webp",
    alt: "Asian aerodrome runway and aircraft parking lights at night",
  },
  {
    id: "americas",
    number: "05",
    region: "North & South America",
    corridors: "Transatlantic & Transpacific",
    detail:
      "Long-haul oceanic track planning, transatlantic and transpacific routing, and tech-stop ground support.",
    firs: "KZNY · KZMA · CZQX · SBBS",
    image: "/img/regions/americas.webp",
    alt: "Long-haul flight over sunset cloud layer",
  },
  {
    id: "caribbean",
    number: "06",
    region: "The Caribbean",
    corridors: "Island Transit & Archipelagos",
    detail:
      "Island transit permits, private VIP charter facilitation, and seasonal high-demand resort aerodrome handling.",
    firs: "TTZP · MDCS · TJZS · MUFH",
    image: "/img/regions/caribbean.webp",
    alt: "Caribbean coastal aerodrome and turquoise water approach",
  },
];

// Duplicate for an infinite seamless linear track
const SLIDER_ITEMS = [...REGIONS, ...REGIONS];

export function RegionalCoverageSlider() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="space-y-4">
      {/* Slider Header Control & Live Status Indicator */}
      <div className="flex items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          <span className="font-mono uppercase tracking-wider text-[#5C6B7A] font-semibold text-[11px]">
            6 Global Corridors · Continuous Linear Coverage
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          className="font-mono text-[11px] font-bold text-[#0B2545] hover:text-[#B88200] bg-[#F6F8FB] hover:bg-slate-200 border border-[#CBD5E1] px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1.5 transition-colors cursor-pointer select-none"
          aria-label={isPaused ? "Resume auto-glide linear slider" : "Pause auto-glide linear slider"}
        >
          {isPaused ? (
            <>
              <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Resume Glide</span>
            </>
          ) : (
            <>
              <svg className="w-3 h-3 text-[#5C6B7A]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
              <span>Pause on Hover</span>
            </>
          )}
        </button>
      </div>

      {/* Linear Slider Viewport with Left/Right Edge Fades */}
      <div
        className="relative overflow-hidden group/slider -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Soft edge gradient fades for elegant visual boundary */}
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-r from-white to-transparent"
        />
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-l from-white to-transparent"
        />

        {/* Continuous Linear Slider Track */}
        <div
          className={`regional-slider-track gap-5 select-none ${
            isPaused ? "[animation-play-state:paused]" : ""
          }`}
          style={isPaused ? { animationPlayState: "paused" } : undefined}
        >
          {SLIDER_ITEMS.map((item, index) => {
            const uniqueKey = `${item.id}-${index}`;

            return (
              <div
                key={uniqueKey}
                tabIndex={0}
                className="group relative overflow-hidden rounded-[6px] border border-[#CBD5E1] p-5 flex flex-col justify-between w-[280px] sm:w-[320px] min-h-[310px] shadow-xs hover:border-[#0B2545] hover:shadow-lg transition-all duration-300 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              >
                {/* Full-bleed Background Photo */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="320px"
                  className="object-cover object-center group-hover:scale-106 motion-safe:transition-transform motion-safe:duration-700 ease-out"
                />

                {/* Dark Navy Atmospheric Gradient Overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0B2545] via-[#0B2545]/75 to-[#0B2545]/45 group-hover:from-[#0B2545]/95 group-hover:via-[#0B2545]/70 group-hover:to-[#0B2545]/35 transition-colors duration-300"
                />

                {/* Subtle Decorative Airway Arc */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 300 200"
                  fill="none"
                  className="absolute inset-0 z-[2] w-full h-full text-white/10 opacity-70 pointer-events-none"
                >
                  <path
                    d="M-20 180 C 80 120, 200 80, 320 20"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeDasharray="4 6"
                  />
                </svg>

                {/* Card Top: Region Sequence & Corridor Tag */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs uppercase font-bold text-white bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 py-1 rounded-[2px] tracking-wider">
                    {item.number}
                  </span>

                  <span className="font-mono text-[10px] uppercase font-bold text-[#F4C400] bg-[#0B2545]/80 backdrop-blur-sm border border-[#F4C400]/30 px-2 py-0.5 rounded-[2px] tracking-wider">
                    {item.corridors}
                  </span>
                </div>

                {/* Card Bottom: Region Name, FIRs, and Description */}
                <div className="relative z-10 space-y-2 mt-auto pt-6">
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight group-hover:text-white transition-colors">
                      {item.region}
                    </h3>
                    <span className="font-mono text-[11px] text-slate-300 block font-semibold mt-0.5">
                      FIRs: {item.firs}
                    </span>
                  </div>

                  <p className="text-xs text-slate-200/95 leading-relaxed font-normal">
                    {item.detail}
                  </p>

                  <div className="pt-2 flex items-center text-[11px] font-mono font-bold text-[#F4C400] group-hover:translate-x-1 transition-transform">
                    <span>Route Briefing</span>
                    <span className="ml-1">→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
