"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COUNTRY_GUIDES } from "@/content/countries";

interface RegionInfo {
  id: string;
  number: string;
  name: string;
  shortName: string;
  corridor: string;
  description: string;
  image: string;
  alt: string;
  keyFirs: string;
  coverageHighlight: string;
  leadTimeGuidance: string;
}

const REGIONS: RegionInfo[] = [
  {
    id: "middle-east",
    number: "01",
    name: "Middle East",
    shortName: "Middle East",
    corridor: "Gulf Airway Corridors & Regional Overflights",
    description:
      "Navigating Gulf airway transits, short-notice overflight clearances, non-traffic technical stops, and full ground turnaround liaison across the GCC.",
    image: "/img/regions/middle-east.webp",
    alt: "Middle East international airspace and modern airport skyline",
    keyFirs: "OEJD (Jeddah), OBBB (Bahrain), OMAE (Emirates), OSTT (Damascus)",
    coverageHighlight: "Rapid overflight turnarounds & 24/7 GCC liaison",
    leadTimeGuidance: "24 – 72h operational planning window",
  },
  {
    id: "asia",
    number: "02",
    name: "Asia",
    shortName: "Asia",
    corridor: "South, East & Central Asia Airspace Corridors",
    description:
      "Direct coordination across South Asia, Southeast Asia, and Central Asian FIRs for commercial airliners, heavy cargo freighters, and ad-hoc charters.",
    image: "/img/regions/asia.webp",
    alt: "Commercial aviation overflight transit over South and East Asian airspaces",
    keyFirs: "OPKC (Karachi), OPLR (Lahore), VIDP (Delhi), WMFC (Kuala Lumpur)",
    coverageHighlight: "Sovereign airway clearances & cross-border filings",
    leadTimeGuidance: "3 – 5 working days standard lead time",
  },
  {
    id: "europe",
    number: "03",
    name: "Europe",
    shortName: "Europe",
    corridor: "East-West International Transit & Slot Liaison",
    description:
      "Overflight permits, seasonal block timetable filings, and airport slot coordination across European and Mediterranean airspaces.",
    image: "/img/regions/europe.webp",
    alt: "European commercial airway route network and airport terminal apron",
    keyFirs: "EGTT (London), LFPG (Paris), EDVV (Bremen), LIMM (Milan)",
    coverageHighlight: "Eurocontrol airway alignment & seasonal block filings",
    leadTimeGuidance: "24 – 48h overflight / seasonal schedule windows",
  },
  {
    id: "africa",
    number: "04",
    name: "Africa",
    shortName: "Africa",
    corridor: "Trans-Continental Corridors & Commercial Clearances",
    description:
      "Overflight clearances, tech stops, and landing coordination across North, East, West, and Southern African civil aviation authorities.",
    image: "/img/regions/africa.webp",
    alt: "African sovereign airspace and long-range intercontinental flight corridor",
    keyFirs: "DNKK (Kano), HKNA (Nairobi), FAOR (Johannesburg), HECCC (Cairo)",
    coverageHighlight: "Complex multi-FIR overflights & non-traffic tech stops",
    leadTimeGuidance: "48 – 72h depending on sovereign civil aviation authority",
  },
  {
    id: "americas",
    number: "05",
    name: "North & South America",
    shortName: "Americas",
    corridor: "Transatlantic & Transpacific Long-Haul Routing",
    description:
      "Support for international long-haul legs, oceanic transition waypoints, and destination landing permits across the Americas.",
    image: "/img/regions/americas.webp",
    alt: "Long-range aircraft flying across North and South American oceanic airspace",
    keyFirs: "KZNY (New York), KZLA (Los Angeles), SBBS (Brasilia), CZQX (Gander)",
    coverageHighlight: "Oceanic entry/exit fixes & non-scheduled clearances",
    leadTimeGuidance: "24 – 96h depending on foreign registry and purpose",
  },
  {
    id: "caribbean",
    number: "06",
    name: "Caribbean",
    shortName: "Caribbean",
    corridor: "Island Transit & Seasonal Charter Operations",
    description:
      "Clearances for private aviation, seasonal airline routes, and island-to-island charter permits across Caribbean jurisdictions.",
    image: "/img/regions/caribbean.webp",
    alt: "Private jet and island charter aircraft parked at tropical Caribbean ramp",
    keyFirs: "TNCF (Curaçao), TTZP (Piarco), MKJK (Kingston), MDCS (Santo Domingo)",
    coverageHighlight: "Executive charter permits & island turnaround liaison",
    leadTimeGuidance: "24 – 48h expedited coordination available",
  },
];

export function GlobalCoverageMap() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>("middle-east");
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  const activeRegion =
    REGIONS.find((r) => r.id === (hoveredRegionId || selectedRegionId)) ||
    REGIONS[0];

  return (
    <div className="bg-[#0B2545] border border-slate-700/70 rounded-[8px] overflow-hidden text-white shadow-md">
      {/* 1. Cockpit Telemetry / Radar Status Bar */}
      <div className="px-4 sm:px-6 py-2.5 bg-[#071B33] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-mono text-[11px] font-bold text-[#F4C400] uppercase tracking-wider">
            GLOBAL AIRSPACE RADAR
          </span>
          <span className="text-white/25 hidden sm:inline">|</span>
          <span className="text-slate-300 font-mono text-[11px] hidden sm:inline">
            FOCUSED CORRIDOR:{" "}
            <span className="text-white font-bold">{activeRegion.name.toUpperCase()}</span>
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="text-slate-400 hidden md:inline">NETWORK SCOPE:</span>
          <span className="bg-white/10 border border-white/15 px-2 py-0.5 rounded-[2px] text-[#F4C400] font-bold">
            6 CONTINENTAL REGIONS
          </span>
        </div>
      </div>

      {/* 2. Interactive Region Selector Tabs (Horizontal, Sleek, No Scrolling Needed) */}
      <div className="px-3 sm:px-5 py-2.5 bg-[#092240] border-b border-white/10 flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
        {REGIONS.map((region) => {
          const isSelected = selectedRegionId === region.id;
          return (
            <button
              key={region.id}
              type="button"
              onClick={() => setSelectedRegionId(region.id)}
              onMouseEnter={() => setHoveredRegionId(region.id)}
              onMouseLeave={() => setHoveredRegionId(null)}
              className={`px-3 py-1.5 rounded-[3px] font-mono text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer select-none ${
                isSelected
                  ? "bg-[#F4C400] text-[#0B2545] shadow-xs"
                  : "bg-white/5 hover:bg-white/12 text-slate-300 hover:text-white border border-white/10"
              }`}
            >
              <span className={`text-[10px] ${isSelected ? "text-[#0B2545]/80" : "text-[#F4C400]"}`}>
                {region.number}
              </span>
              <span>{region.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* 3. Main Console: Split 2-Column Console Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[400px]">
        {/* Left Column (5 Cols): Active Region Real Photo + Intelligence Details */}
        <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0B2545]/90 space-y-4">
          <div className="space-y-3">
            {/* Real Regional Photograph Header */}
            <div className="relative h-32 sm:h-36 w-full rounded-[4px] overflow-hidden border border-white/15 bg-slate-900 shadow-inner">
              <Image
                src={activeRegion.image}
                alt={activeRegion.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out scale-100 hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-[#0B2545]/40 to-transparent"
              />
              <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                <span className="font-mono text-[10px] font-bold text-white bg-black/60 border border-white/20 px-2 py-0.5 rounded-[2px] backdrop-blur-xs">
                  REGION {activeRegion.number}
                </span>
                <span className="font-mono text-[10px] font-bold text-[#F4C400] bg-[#0B2545]/80 border border-[#F4C400]/40 px-2 py-0.5 rounded-[2px] backdrop-blur-xs uppercase">
                  ACTIVE CORRIDOR
                </span>
              </div>
              <div className="absolute bottom-2 left-2.5 right-2.5 z-10">
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight drop-shadow-xs">
                  {activeRegion.name}
                </h3>
                <p className="text-[11px] text-[#F4C400] font-mono truncate">
                  {activeRegion.corridor}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed">
              {activeRegion.description}
            </p>

            {/* Structured Specifications Grid */}
            <div className="bg-[#071B33]/80 border border-white/10 rounded-[4px] p-2.5 sm:p-3 space-y-2 text-xs">
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-[10.5px] uppercase text-[#F4C400] shrink-0">
                  Key FIRs:
                </span>
                <span className="font-mono text-[11px] text-slate-200 text-right leading-tight">
                  {activeRegion.keyFirs}
                </span>
              </div>
              <div className="flex items-start justify-between gap-2 pt-1 border-t border-white/10">
                <span className="font-mono text-[10.5px] uppercase text-slate-400 shrink-0">
                  Planning:
                </span>
                <span className="text-[11px] text-slate-200 text-right">
                  {activeRegion.leadTimeGuidance}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Region Action */}
          <div className="pt-2">
            <Link
              href="/request-flight-support"
              className="w-full bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] font-bold text-xs sm:text-sm py-2 px-4 rounded-[2px] inline-flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              <span>Inquire {activeRegion.shortName} Clearances</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Right Column (7 Cols): Interactive Radar Schematic SVG Map */}
        <div className="lg:col-span-7 p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-br from-[#0B2545] via-[#091F3A] to-[#06172A] relative">
          {/* Schematic SVG Map */}
          <div className="relative w-full aspect-[2.1/1] max-h-[310px] flex items-center justify-center my-auto">
            <svg
              viewBox="0 0 1000 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full object-contain select-none"
              aria-label="Interactive World Airspace Map"
            >
              {/* Latitude / Longitude Subtle Grid */}
              <g opacity="0.1" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 3">
                <line x1="0" y1="120" x2="1000" y2="120" />
                <line x1="0" y1="240" x2="1000" y2="240" />
                <line x1="0" y1="360" x2="1000" y2="360" />
                <line x1="200" y1="0" x2="200" y2="480" />
                <line x1="400" y1="0" x2="400" y2="480" />
                <line x1="600" y1="0" x2="600" y2="480" />
                <line x1="800" y1="0" x2="800" y2="480" />
              </g>

              {/* Americas Polygon */}
              <g
                id="map-americas"
                onClick={() => setSelectedRegionId("americas")}
                onMouseEnter={() => setHoveredRegionId("americas")}
                onMouseLeave={() => setHoveredRegionId(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <path
                  d="M110 70 L210 60 L280 80 L290 140 L240 180 L220 230 L170 210 L130 150 Z"
                  fill="#FFFFFF"
                  fillOpacity={activeRegion.id === "americas" ? "0.35" : "0.12"}
                  stroke={activeRegion.id === "americas" ? "#F4C400" : "#FFFFFF"}
                  strokeWidth={activeRegion.id === "americas" ? "2.5" : "1"}
                />
                <path
                  d="M230 250 L310 260 L340 330 L310 420 L270 440 L240 370 L220 300 Z"
                  fill="#FFFFFF"
                  fillOpacity={activeRegion.id === "americas" ? "0.35" : "0.12"}
                  stroke={activeRegion.id === "americas" ? "#F4C400" : "#FFFFFF"}
                  strokeWidth={activeRegion.id === "americas" ? "2.5" : "1"}
                />
                <text
                  x="180"
                  y="140"
                  fill={activeRegion.id === "americas" ? "#F4C400" : "#FFFFFF"}
                  fontSize="12"
                  fontWeight="bold"
                >
                  Americas
                </text>
              </g>

              {/* Caribbean Polygon */}
              <g
                id="map-caribbean"
                onClick={() => setSelectedRegionId("caribbean")}
                onMouseEnter={() => setHoveredRegionId("caribbean")}
                onMouseLeave={() => setHoveredRegionId(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <ellipse
                  cx="275"
                  cy="225"
                  rx="26"
                  ry="18"
                  fill="#FFFFFF"
                  fillOpacity={activeRegion.id === "caribbean" ? "0.5" : "0.18"}
                  stroke={activeRegion.id === "caribbean" ? "#F4C400" : "#FFFFFF"}
                  strokeWidth={activeRegion.id === "caribbean" ? "2.5" : "1.2"}
                />
                <text
                  x="248"
                  y="210"
                  fill={activeRegion.id === "caribbean" ? "#F4C400" : "#FFFFFF"}
                  fontSize="10"
                  fontWeight="bold"
                >
                  Caribbean
                </text>
              </g>

              {/* Europe Polygon */}
              <g
                id="map-europe"
                onClick={() => setSelectedRegionId("europe")}
                onMouseEnter={() => setHoveredRegionId("europe")}
                onMouseLeave={() => setHoveredRegionId(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <path
                  d="M450 70 L550 60 L570 120 L510 160 L450 150 L430 110 Z"
                  fill="#FFFFFF"
                  fillOpacity={activeRegion.id === "europe" ? "0.4" : "0.14"}
                  stroke={activeRegion.id === "europe" ? "#F4C400" : "#FFFFFF"}
                  strokeWidth={activeRegion.id === "europe" ? "2.5" : "1"}
                />
                <text
                  x="475"
                  y="115"
                  fill={activeRegion.id === "europe" ? "#F4C400" : "#FFFFFF"}
                  fontSize="12"
                  fontWeight="bold"
                >
                  Europe
                </text>
              </g>

              {/* Middle East Polygon */}
              <g
                id="map-middle-east"
                onClick={() => setSelectedRegionId("middle-east")}
                onMouseEnter={() => setHoveredRegionId("middle-east")}
                onMouseLeave={() => setHoveredRegionId(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <path
                  d="M550 160 L620 155 L650 205 L600 240 L550 215 Z"
                  fill="#FFFFFF"
                  fillOpacity={activeRegion.id === "middle-east" ? "0.45" : "0.18"}
                  stroke={activeRegion.id === "middle-east" ? "#F4C400" : "#FFFFFF"}
                  strokeWidth={activeRegion.id === "middle-east" ? "2.5" : "1.2"}
                />
                <text
                  x="565"
                  y="195"
                  fill={activeRegion.id === "middle-east" ? "#F4C400" : "#FFFFFF"}
                  fontSize="11"
                  fontWeight="bold"
                >
                  Middle East
                </text>
              </g>

              {/* Africa Polygon */}
              <g
                id="map-africa"
                onClick={() => setSelectedRegionId("africa")}
                onMouseEnter={() => setHoveredRegionId("africa")}
                onMouseLeave={() => setHoveredRegionId(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <path
                  d="M450 180 L540 180 L580 250 L560 360 L500 410 L460 330 L430 240 Z"
                  fill="#FFFFFF"
                  fillOpacity={activeRegion.id === "africa" ? "0.35" : "0.12"}
                  stroke={activeRegion.id === "africa" ? "#F4C400" : "#FFFFFF"}
                  strokeWidth={activeRegion.id === "africa" ? "2.5" : "1"}
                />
                <text
                  x="480"
                  y="280"
                  fill={activeRegion.id === "africa" ? "#F4C400" : "#FFFFFF"}
                  fontSize="13"
                  fontWeight="bold"
                >
                  Africa
                </text>
              </g>

              {/* Asia Polygon */}
              <g
                id="map-asia"
                onClick={() => setSelectedRegionId("asia")}
                onMouseEnter={() => setHoveredRegionId("asia")}
                onMouseLeave={() => setHoveredRegionId(null)}
                className="cursor-pointer transition-all duration-300"
              >
                <path
                  d="M620 70 L870 70 L890 190 L810 280 L720 280 L670 230 L620 170 Z"
                  fill="#FFFFFF"
                  fillOpacity={activeRegion.id === "asia" ? "0.35" : "0.12"}
                  stroke={activeRegion.id === "asia" ? "#F4C400" : "#FFFFFF"}
                  strokeWidth={activeRegion.id === "asia" ? "2.5" : "1"}
                />
                <text
                  x="730"
                  y="150"
                  fill={activeRegion.id === "asia" ? "#F4C400" : "#FFFFFF"}
                  fontSize="13"
                  fontWeight="bold"
                >
                  Asia
                </text>
              </g>

              {/* Dynamic Flight Route Corridors */}
              <g opacity="0.35" stroke="#FFFFFF" strokeWidth="1.2" strokeDasharray="4 4">
                <path d="M240 150 Q 420 50 510 110" />
                <path d="M510 110 Q 570 140 620 180" />
                <path d="M620 180 Q 720 220 810 240" />
                <path d="M570 210 Q 640 270 740 330" />
              </g>

              {/* Waypoint Nodes */}
              <circle cx="510" cy="110" r="3.5" fill="#F4C400" />
              <circle cx="620" cy="180" r="3.5" fill="#F4C400" />
              <circle cx="570" cy="210" r="3" fill="#FFFFFF" />
              <circle cx="275" cy="225" r="3" fill="#FFFFFF" />
            </svg>
          </div>

          {/* Integrated Compact Country Guides / Jurisdiction Strip */}
          <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10.5px] font-bold text-[#F4C400] uppercase">
                COUNTRY GUIDES:
              </span>
              {COUNTRY_GUIDES.map((country) => (
                <Link
                  key={country.slug}
                  href={country.href}
                  className="bg-white/10 hover:bg-white/20 border border-white/15 px-2.5 py-1 rounded-[2px] font-semibold text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>{country.name} Guide</span>
                  <span className="text-[10px] font-mono text-[#F4C400]">
                    ({country.firCodes.join("/")})
                  </span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 font-mono text-[11px] text-slate-300">
              <Link
                href="/permit-directory"
                className="text-[#F4C400] hover:underline underline-offset-2 inline-flex items-center gap-1"
              >
                <span>Permit Directory</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
