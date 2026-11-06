"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COUNTRY_GUIDES } from "@/content/countries";

interface RegionInfo {
  id: string;
  name: string;
  corridor: string;
  description: string;
  svgHighlightId?: string;
}

const REGIONS: RegionInfo[] = [
  {
    id: "africa",
    name: "Africa",
    corridor: "Trans-continental routes & commercial clearances",
    description:
      "Overflight clearances, tech stops, and landing coordination across North, East, West, and Southern African civil aviation authorities.",
    svgHighlightId: "map-africa",
  },
  {
    id: "middle-east",
    name: "Middle East",
    corridor: "Gulf corridors & regional overflights",
    description:
      "Navigating Gulf airway transits, short-notice overflight clearances, and full ground turnaround liaison across the GCC.",
    svgHighlightId: "map-middle-east",
  },
  {
    id: "europe",
    name: "Europe",
    corridor: "East-West international traffic & slot liaison",
    description:
      "Overflight permits, seasonal timetable filings, and airport slot coordination across European and Mediterranean airspaces.",
    svgHighlightId: "map-europe",
  },
  {
    id: "asia",
    name: "Asia",
    corridor: "South, East & Central Asia airspace",
    description:
      "Direct coordination across South Asia, Southeast Asia, and Central Asian FIRs for commercial airliners and charter operations.",
    svgHighlightId: "map-asia",
  },
  {
    id: "americas",
    name: "North and South America",
    corridor: "Transatlantic & transpacific routing",
    description:
      "Support for international long-haul legs, oceanic transition waypoints, and destination permits across the Americas.",
    svgHighlightId: "map-americas",
  },
  {
    id: "caribbean",
    name: "Caribbean",
    corridor: "Island transit & seasonal charters",
    description:
      "Clearances for private aviation, seasonal airline routes, and island-to-island charter permits across Caribbean jurisdictions.",
    svgHighlightId: "map-caribbean",
  },
];

export function GlobalCoverageMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      {/* Intro */}
      <div className="max-w-3xl space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
          Permit Support Across the Globe
        </h2>
        <p className="text-base sm:text-lg text-[#5C6B7A] leading-relaxed">
          Tell us your route and we will confirm what we can arrange.
        </p>
      </div>

      {/* Schematic World Map SVG (Inline, pure CSS hover interaction) */}
      <div className="bg-[#0B2545] border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/15">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Global Airspace Corridors
            </h3>
            <p className="text-sm text-slate-300 mt-0.5">
              Hover over a region card below to preview international flight support routes.
            </p>
          </div>
          {hoveredRegion && (
            <div className="bg-white/10 border border-white/25 px-3 py-1 rounded-[2px] text-xs font-semibold text-white">
              Active Focus: {REGIONS.find((r) => r.id === hoveredRegion)?.name}
            </div>
          )}
        </div>

        {/* Schematic SVG Map */}
        <div className="relative w-full aspect-[2.1/1] max-h-[380px] flex items-center justify-center">
          <svg
            viewBox="0 0 1000 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-contain pointer-events-none select-none"
            aria-label="Schematic World Map illustrating KCL global flight permit coverage"
          >
            {/* Latitude / Longitude Subtle Grid */}
            <g opacity="0.15" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 3">
              <line x1="0" y1="120" x2="1000" y2="120" />
              <line x1="0" y1="240" x2="1000" y2="240" />
              <line x1="0" y1="360" x2="1000" y2="360" />
              <line x1="200" y1="0" x2="200" y2="480" />
              <line x1="400" y1="0" x2="400" y2="480" />
              <line x1="600" y1="0" x2="600" y2="480" />
              <line x1="800" y1="0" x2="800" y2="480" />
            </g>

            {/* Region: North and South America */}
            <g
              id="map-americas"
              className={`transition-all duration-300 ${
                hoveredRegion === "americas"
                  ? "opacity-100 scale-[1.01]"
                  : hoveredRegion
                  ? "opacity-35"
                  : "opacity-75"
              }`}
            >
              {/* North America outline path */}
              <path
                d="M110 70 L210 60 L280 80 L290 140 L240 180 L220 230 L170 210 L130 150 Z"
                fill="#FFFFFF"
                fillOpacity={hoveredRegion === "americas" ? "0.35" : "0.15"}
                stroke="#FFFFFF"
                strokeWidth={hoveredRegion === "americas" ? "2.5" : "1.25"}
              />
              {/* South America outline path */}
              <path
                d="M230 250 L310 260 L340 330 L310 420 L270 440 L240 370 L220 300 Z"
                fill="#FFFFFF"
                fillOpacity={hoveredRegion === "americas" ? "0.35" : "0.15"}
                stroke="#FFFFFF"
                strokeWidth={hoveredRegion === "americas" ? "2.5" : "1.25"}
              />
              <text x="180" y="140" fill="#FFFFFF" fontSize="13" fontWeight="bold" opacity="0.85">Americas</text>
            </g>

            {/* Region: Caribbean */}
            <g
              id="map-caribbean"
              className={`transition-all duration-300 ${
                hoveredRegion === "caribbean"
                  ? "opacity-100 scale-[1.02]"
                  : hoveredRegion
                  ? "opacity-35"
                  : "opacity-75"
              }`}
            >
              <ellipse
                cx="275"
                cy="225"
                rx="25"
                ry="18"
                fill="#FFFFFF"
                fillOpacity={hoveredRegion === "caribbean" ? "0.55" : "0.25"}
                stroke="#FFFFFF"
                strokeWidth={hoveredRegion === "caribbean" ? "2.5" : "1.5"}
              />
              <circle cx="265" cy="222" r="3" fill="#FFFFFF" />
              <circle cx="282" cy="228" r="3" fill="#FFFFFF" />
              <text x="250" y="210" fill="#FFFFFF" fontSize="11" fontWeight="bold">Caribbean</text>
            </g>

            {/* Region: Europe */}
            <g
              id="map-europe"
              className={`transition-all duration-300 ${
                hoveredRegion === "europe"
                  ? "opacity-100 scale-[1.01]"
                  : hoveredRegion
                  ? "opacity-35"
                  : "opacity-75"
              }`}
            >
              <path
                d="M450 70 L550 60 L570 120 L510 160 L450 150 L430 110 Z"
                fill="#FFFFFF"
                fillOpacity={hoveredRegion === "europe" ? "0.4" : "0.18"}
                stroke="#FFFFFF"
                strokeWidth={hoveredRegion === "europe" ? "2.5" : "1.25"}
              />
              <text x="475" y="115" fill="#FFFFFF" fontSize="13" fontWeight="bold" opacity="0.85">Europe</text>
            </g>

            {/* Region: Middle East */}
            <g
              id="map-middle-east"
              className={`transition-all duration-300 ${
                hoveredRegion === "middle-east"
                  ? "opacity-100 scale-[1.02]"
                  : hoveredRegion
                  ? "opacity-35"
                  : "opacity-75"
              }`}
            >
              <path
                d="M550 160 L620 155 L650 205 L600 240 L550 215 Z"
                fill="#FFFFFF"
                fillOpacity={hoveredRegion === "middle-east" ? "0.45" : "0.22"}
                stroke="#FFFFFF"
                strokeWidth={hoveredRegion === "middle-east" ? "2.5" : "1.5"}
              />
              <text x="565" y="195" fill="#FFFFFF" fontSize="12" fontWeight="bold">Middle East</text>
            </g>

            {/* Region: Africa */}
            <g
              id="map-africa"
              className={`transition-all duration-300 ${
                hoveredRegion === "africa"
                  ? "opacity-100 scale-[1.01]"
                  : hoveredRegion
                  ? "opacity-35"
                  : "opacity-75"
              }`}
            >
              <path
                d="M450 180 L540 180 L580 250 L560 360 L500 410 L460 330 L430 240 Z"
                fill="#FFFFFF"
                fillOpacity={hoveredRegion === "africa" ? "0.35" : "0.16"}
                stroke="#FFFFFF"
                strokeWidth={hoveredRegion === "africa" ? "2.5" : "1.25"}
              />
              <text x="480" y="280" fill="#FFFFFF" fontSize="13" fontWeight="bold" opacity="0.85">Africa</text>
            </g>

            {/* Region: Asia */}
            <g
              id="map-asia"
              className={`transition-all duration-300 ${
                hoveredRegion === "asia"
                  ? "opacity-100 scale-[1.01]"
                  : hoveredRegion
                  ? "opacity-35"
                  : "opacity-75"
              }`}
            >
              <path
                d="M620 70 L870 70 L890 190 L810 280 L720 280 L670 230 L620 170 Z"
                fill="#FFFFFF"
                fillOpacity={hoveredRegion === "asia" ? "0.35" : "0.16"}
                stroke="#FFFFFF"
                strokeWidth={hoveredRegion === "asia" ? "2.5" : "1.25"}
              />
              <text x="730" y="150" fill="#FFFFFF" fontSize="14" fontWeight="bold" opacity="0.85">Asia</text>
            </g>

            {/* Major International Great-Circle Flight Routes */}
            <g opacity="0.4" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="4 4">
              <path d="M240 150 Q 420 50 510 110" />
              <path d="M510 110 Q 570 140 620 180" />
              <path d="M620 180 Q 720 220 810 240" />
              <path d="M570 210 Q 640 270 740 330" />
            </g>
          </svg>
        </div>
      </div>

      {/* 6 Region Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {REGIONS.map((region) => {
          const isHovered = hoveredRegion === region.id;
          return (
            <div
              key={region.id}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              className={`bg-white border rounded-[6px] p-6 transition-all duration-200 cursor-default ${
                isHovered
                  ? "border-[#0B2545] shadow-md bg-[#F6F8FB]/50"
                  : "border-[#CBD5E1] hover:border-[#0B2545]"
              }`}
            >
              <h3 className="text-xl font-bold text-[#0B2545]">
                {region.name}
              </h3>
              <p className="text-base font-semibold text-[#5C6B7A] mt-1">
                {region.corridor}
              </p>
              <p className="text-base text-[#16202B] mt-2.5 leading-relaxed">
                {region.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Country Guides Block */}
      <div className="bg-[#F6F8FB] border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-[#0B2545]">
              Country Guides
            </h3>
            <p className="text-base text-[#5C6B7A] mt-1">
              Detailed local overflight and landing guidance for specific jurisdictions:
            </p>
          </div>
          <span className="text-base font-semibold text-[#5C6B7A]">
            More countries on request
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {COUNTRY_GUIDES.map((country) => (
            <Link
              key={country.slug}
              href={country.href}
              className="bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[4px] p-4 transition-colors group flex items-start justify-between gap-3"
            >
              <div>
                <h4 className="text-lg font-bold text-[#0B2545] group-hover:underline underline-offset-4">
                  {country.name}
                </h4>
                <p className="text-base text-[#5C6B7A] mt-1">
                  {country.firCodes.join(", ")} FIRs
                </p>
              </div>
              <span className="text-base font-semibold text-[#0B2545] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          ))}

          {/* On-Request Notice Card */}
          <div className="bg-white/60 border border-dashed border-[#CBD5E1] rounded-[4px] p-4 flex items-center justify-between">
            <span className="text-base text-[#5C6B7A] font-medium">
              Worldwide clearances arranged upon itinerary review.
            </span>
            <Link
              href="/request-flight-support"
              className="text-base font-bold text-[#0B2545] hover:underline shrink-0 ml-3"
            >
              Submit Route →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
