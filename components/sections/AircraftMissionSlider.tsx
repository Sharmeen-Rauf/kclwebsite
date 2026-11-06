"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface MissionSlide {
  id: string;
  category: string;
  title: string;
  tagline: string;
  aircraftTypes: string[];
  description: string;
  leadTime: string;
  firs: string;
  keyServices: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  alt: string;
}

const MISSIONS: MissionSlide[] = [
  {
    id: "commercial-scheduled",
    category: "Scheduled Airline Operations",
    title: "Commercial Airlines & Seasonal Extra-Sections",
    tagline: "IATA Timetable Filings & Bilateral Air Service Agreements",
    aircraftTypes: ["B77W", "A359", "B789", "A333", "A321neo"],
    description:
      "Seasonal timetable coordination for international scheduled carriers crossing regional airways or landing at destination airports. Includes registration fleet additions, frequency revisions, and slot synchronization.",
    leadTime: "Seasonal / 30 Days Prior",
    firs: "Cross-Border Airway Corridors & Sovereign Airspaces",
    keyServices: [
      "Seasonal Overflight Timetables",
      "IATA Airport Slot Liaison",
      "Fleet Addition Endorsements",
    ],
    ctaLabel: "Inquire Schedule Filing",
    ctaHref: "/schedule-filing",
    image: "/img/services/01-permits.webp",
    alt: "Commercial widebody airliner flight deck and navigation display",
  },
  {
    id: "business-aviation",
    category: "Corporate & Private Charter",
    title: "Executive Business Jets & VIP Charter Flights",
    tagline: "Fast-Track Regulatory Clearances & FBO Ramp Handling",
    aircraftTypes: ["G650ER", "Global 7500", "Falcon 8X", "Challenger 650"],
    description:
      "Rapid turnaround coordination for high-net-worth passenger charters, diplomatic delegations, and corporate flight departments. We coordinate permits alongside VIP ground handling, private catering, and crew logistics.",
    leadTime: "24 – 72 Hours (Urgent Short-Notice on Request)",
    firs: "Global Airspaces & Central Asian Corridors",
    keyServices: [
      "Diplomatic & VIP Landing Authorizations",
      "Executive FBO Apron Coordination",
      "Direct Fuel Hydrant Uplift",
    ],
    ctaLabel: "Plan Private Charter",
    ctaHref: "/request-flight-support",
    image: "/img/services/05-crew.webp",
    alt: "Corporate business jet flight crew layover and terminal logistics",
  },
  {
    id: "cargo-freighter",
    category: "Cargo & Outsized Freight",
    title: "Heavy Cargo Freighters & Military Logistic Charters",
    tagline: "Dangerous Goods Declarations & Heavy Ramp Handling",
    aircraftTypes: ["B747-8F", "B777F", "IL-76TD", "AN-124"],
    description:
      "End-to-end flight permission and airport ramp support for scheduled and ad-hoc cargo movements, including Dangerous Goods (DGR), defense clearances, and high-loader technical handling.",
    leadTime: "3 – 5 Working Days",
    firs: "Intercontinental Transit FIRs & Trans-Pacific Strings",
    keyServices: [
      "Commercial Cargo Landing Permits",
      "Dangerous Goods Regulatory Clearances",
      "Heavy Loader Apron Servicing",
    ],
    ctaLabel: "Prepare Cargo Flight",
    ctaHref: "/permit-checklist/cargo",
    image: "/img/services/02-ground.webp",
    alt: "Heavy freight aircraft ramp servicing and high loader pallet loading",
  },
  {
    id: "air-ambulance-medevac",
    category: "Air Ambulance & Medevac",
    title: "Urgent Medical Evacuation & Humanitarian Flights",
    tagline: "24/7 Priority Clearances & Airside Ambulance Transfers",
    aircraftTypes: ["Learjet 60", "Challenger 604", "Citation XLS+", "B200"],
    description:
      "Unrestricted 24/7 priority operational desk for lifesaving medical evacuation flights. We coordinate urgent civil aviation approvals, humanitarian waypoint waivers, and direct ramp ambulance access.",
    leadTime: "Immediate / Shortest Authority Window",
    firs: "Immediate FIR Clearance Liaison",
    keyServices: [
      "Expedited Emergency Overflight & Landing",
      "Direct Airside Ambulance Access",
      "Oxygen & Medical Equipment Clearances",
    ],
    ctaLabel: "Contact 24/7 Ops Desk",
    ctaHref: "/customer-support",
    image: "/img/services/06-ops.webp",
    alt: "24/7 flight operations center radar and emergency dispatch consoles",
  },
  {
    id: "ferry-tech-stop",
    category: "Technical Movements & Ferry",
    title: "Aircraft Ferrying & Strategic Technical Fuel Stops",
    tagline: "Multi-FIR Transit Chains & Rapid Apron Turnarounds",
    aircraftTypes: ["Delivery Flights", "Aircraft Repositioning", "B2B Ferry"],
    description:
      "Multi-country flight permission chains for newly purchased, leased, or maintenance-bound aircraft. Seamlessly paired with competitive aviation fuel contracting and quick apron turnarounds.",
    leadTime: "48 – 72 Hours",
    firs: "Multi-Sector FIR Routing Strings",
    keyServices: [
      "Multi-State Overflight Clearance Packages",
      "Guaranteed Fuel Uplift Timing",
      "Crew Hotel & Ramp Shuttles",
    ],
    ctaLabel: "Plan Technical Stop",
    ctaHref: "/services/aviation-fuel",
    image: "/img/services/04-fuel.webp",
    alt: "Aviation fuel truck dispensing into aircraft wing tanks at twilight",
  },
];

export function AircraftMissionSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-play every 6.5 seconds (paused on hover or prefers-reduced-motion)
  useEffect(() => {
    if (isPaused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % MISSIONS.length);
    }, 6500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? MISSIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % MISSIONS.length);
  };

  const currentMission = MISSIONS[activeIndex];

  // Mobile swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
  };

  return (
    <section
      id="mission-profiles"
      aria-label="Operational Mission Profiles and Fleet Coverage"
      className="py-14 sm:py-20 bg-white border-b border-[#CBD5E1] relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Creative Aeronautical Airplane Blueprint & Radar Vector Background */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft Radial Ambient Glow */}
        <div className="absolute -top-24 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-[#13A0D8]/[0.06] via-[#0B2545]/[0.03] to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#B88200]/[0.04] to-transparent rounded-full blur-3xl" />

        {/* Primary Aeronautical Airliner Blueprint Vector (Angled across header & slider) */}
        <svg
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-16 -right-20 sm:-right-8 lg:right-6 w-[380px] sm:w-[520px] lg:w-[680px] h-auto text-[#0B2545] opacity-[0.08]"
        >
          {/* Radar Range Rings with Degree Ticks */}
          <circle cx="400" cy="400" r="360" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
          <circle cx="400" cy="400" r="260" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
          <circle cx="400" cy="400" r="160" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" opacity="0.75" />
          <circle cx="400" cy="400" r="60" stroke="currentColor" strokeWidth="1" opacity="0.45" />

          {/* Compass Radial Azimuth Lines */}
          <line x1="400" y1="30" x2="400" y2="770" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.45" />
          <line x1="30" y1="400" x2="770" y2="400" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" opacity="0.45" />
          <line x1="145" y1="145" x2="655" y2="655" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.3" />
          <line x1="145" y1="655" x2="655" y2="145" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.3" />

          {/* Airway Corridor Track with Flight Vector */}
          <path
            d="M 40 700 C 220 580, 480 340, 760 120"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeDasharray="8 8"
          />
          <path
            d="M 80 740 C 260 620, 520 380, 790 170"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.6"
          />

          {/* Group: Cruising Widebody Aircraft Blueprint (Rotated along flight path) */}
          <g transform="translate(400, 390) rotate(-38)">
            {/* Extended Flight Centerline Datum */}
            <line x1="0" y1="-260" x2="0" y2="300" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />

            {/* Wingtip Contrail Trailing Vectors */}
            <path d="M -235 50 C -250 160, -260 260, -270 360" stroke="currentColor" strokeWidth="1.25" strokeDasharray="5 7" opacity="0.7" />
            <path d="M 235 50 C 250 160, 260 260, 270 360" stroke="currentColor" strokeWidth="1.25" strokeDasharray="5 7" opacity="0.7" />

            {/* Engine Jet Wake Vectors */}
            <path d="M -90 -10 C -95 120, -100 240, -105 340" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />
            <path d="M 90 -10 C 95 120, 100 240, 105 340" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.5" />

            {/* Complete Top-Down Modern Widebody Aircraft Airframe */}
            <path
              d="
                M 0 -220
                C 5 -200, 12 -140, 14 -70
                L 230 42
                C 240 45, 242 55, 236 60
                L 220 60
                L 18 -10
                L 18 120
                L 85 165
                C 90 168, 90 175, 84 177
                L 14 158
                L 14 200
                C 14 208, 0 215, 0 215
                C 0 215, -14 208, -14 200
                L -14 158
                L -84 177
                C -90 175, -90 168, -85 165
                L -18 120
                L -18 -10
                L -220 60
                L -236 60
                C -242 55, -240 45, -230 42
                L -14 -70
                C -12 -140, -5 -200, 0 -220
                Z
              "
              fill="currentColor"
              fillOpacity="0.18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* Left Engine Nacelle & Pylon */}
            <rect x="-98" y="-35" width="16" height="52" rx="6" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
            <line x1="-90" y1="-35" x2="-90" y2="-55" stroke="currentColor" strokeWidth="1.5" />

            {/* Right Engine Nacelle & Pylon */}
            <rect x="82" y="-35" width="16" height="52" rx="6" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
            <line x1="90" y1="-35" x2="90" y2="-55" stroke="currentColor" strokeWidth="1.5" />

            {/* Cockpit Windshield */}
            <path
              d="M -7 -175 C -3 -180, 3 -180, 7 -175 L 6 -168 C 2 -172, -2 -172, -6 -168 Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            />

            {/* Wing Internal Structural Ribs */}
            <line x1="-16" y1="-30" x2="-160" y2="35" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="16" y1="-30" x2="160" y2="35" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

            {/* Flap Fairing Pods on Trailing Edges */}
            <rect x="-145" y="32" width="6" height="18" rx="2" fill="currentColor" opacity="0.8" />
            <rect x="-105" y="16" width="6" height="20" rx="2" fill="currentColor" opacity="0.8" />
            <rect x="-65" y="0" width="6" height="20" rx="2" fill="currentColor" opacity="0.8" />
            <rect x="139" y="32" width="6" height="18" rx="2" fill="currentColor" opacity="0.8" />
            <rect x="99" y="16" width="6" height="20" rx="2" fill="currentColor" opacity="0.8" />
            <rect x="59" y="0" width="6" height="20" rx="2" fill="currentColor" opacity="0.8" />

            {/* Nose Heading Vector in Brand Yellow */}
            <path d="M 0 -235 L -10 -255 L 0 -248 L 10 -255 Z" fill="#B88200" opacity="0.9" />
          </g>

          {/* Aeronautical Waypoint Crosshairs with Brand Yellow Accent */}
          <g transform="translate(620, 230)">
            <circle cx="0" cy="0" r="14" stroke="#B88200" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.9" />
            <circle cx="0" cy="0" r="4" fill="#B88200" opacity="0.9" />
            <line x1="-22" y1="0" x2="22" y2="0" stroke="#B88200" strokeWidth="1" opacity="0.8" />
            <line x1="0" y1="-22" x2="0" y2="22" stroke="#B88200" strokeWidth="1" opacity="0.8" />
            <text x="18" y="-6" fontSize="11" fontFamily="monospace" fill="currentColor" fontWeight="bold" letterSpacing="1">
              WAYPOINT: RIXAP
            </text>
            <text x="18" y="10" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.75">
              FL380 // 118° MAG
            </text>
          </g>

          <g transform="translate(190, 600)">
            <circle cx="0" cy="0" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.7" />
            <circle cx="0" cy="0" r="3" fill="currentColor" opacity="0.8" />
            <text x="14" y="4" fontSize="10" fontFamily="monospace" fill="currentColor" opacity="0.8">
              FIR BORDER [TRANSIT CORRIDOR]
            </text>
          </g>

          {/* Telemetry Cruise Flight Level Box */}
          <g transform="translate(480, 520)">
            <rect x="0" y="0" width="130" height="42" rx="3" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="0.75" />
            <text x="10" y="16" fontSize="9" fontFamily="monospace" fill="currentColor" opacity="0.85" fontWeight="bold">
              MACH 0.84 · CRUISE
            </text>
            <text x="10" y="32" fontSize="9" fontFamily="monospace" fill="#B88200" fontWeight="bold">
              ALT: 39,000 FT
            </text>
          </g>
        </svg>

        {/* Secondary Delicate Waypoint Trajectory (Bottom Left corner) */}
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-10 -left-10 w-[240px] sm:w-[320px] h-auto text-[#0B2545] opacity-[0.06]"
        >
          <path d="M 0 250 C 120 220, 220 140, 380 40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <g transform="translate(260, 115) rotate(-35)">
            <path
              d="M18 14v-2l-7-4.5V3c0-.8-.7-1.5-1.5-1.5S8 2.2 8 3v4.5L1 12v2l7-2.2V17l-1.8 1.3V20l3.3-.9 3.3.9v-1.7L11 17v-5.2l7 2.2z"
              fill="currentColor"
            />
          </g>
          <circle cx="160" cy="180" r="3" fill="currentColor" />
          <circle cx="160" cy="180" r="9" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
          <text x="175" y="184" fontSize="9" fontFamily="monospace" fill="currentColor">
            ATS ENTRY
          </text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {/* Header row with navigation arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B88200] font-bold block">
              FLEET CAPABILITIES · MISSION PROFILES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545] tracking-tight">
              Operational Mission Profiles We Facilitate
            </h2>
            <p className="text-[15px] sm:text-base text-[#5C6B7A] leading-relaxed">
              Explore specialized support tailored to widebody commercial fleets, private business aviation, heavy cargo charters, and urgent medical evacuations.
            </p>
          </div>

          {/* Slider Prev / Next Controls & Slide Counter */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <span className="font-mono text-xs font-semibold text-[#5C6B7A] mr-2">
              <span className="text-[#0B2545] font-bold text-sm">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(MISSIONS.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous mission profile"
              className="w-10 h-10 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F6F8FB] hover:border-[#0B2545] text-[#0B2545] flex items-center justify-center transition-all cursor-pointer shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next mission profile"
              className="w-10 h-10 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F6F8FB] hover:border-[#0B2545] text-[#0B2545] flex items-center justify-center transition-all cursor-pointer shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Showcase Slide Card */}
        <div className="bg-[#F6F8FB] border border-[#CBD5E1] rounded-[8px] overflow-hidden shadow-xs transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px]">
            {/* Left: Full-bleed Photo with Mission Overlay */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-[#0B2545]">
              <Image
                src={currentMission.image}
                alt={currentMission.alt}
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/90 via-[#0B2545]/50 to-transparent" />

              {/* In-photo Mission Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-white bg-[#0B2545]/85 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-[2px] inline-block">
                  {currentMission.category}
                </span>
              </div>

              {/* Bottom Aircraft Type Pills */}
              <div className="absolute bottom-4 left-4 right-4 z-10 space-y-1.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 block">
                  Typical Aircraft Handled
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentMission.aircraftTypes.map((type) => (
                    <span
                      key={type}
                      className="font-mono text-xs font-semibold bg-white/20 text-white backdrop-blur-sm border border-white/30 px-2.5 py-0.5 rounded-[2px]"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Detailed Operational Briefing & Deliverables */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden">
              {/* Subtle Airliner Silhouette Watermark in Card Corner */}
              <div
                aria-hidden="true"
                className="absolute -bottom-8 -right-8 w-52 h-52 text-[#0B2545] opacity-[0.035] pointer-events-none select-none z-0"
              >
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full -rotate-45">
                  <path d="M50 5 L55 35 L95 55 L95 62 L55 52 L55 80 L68 90 L68 95 L50 90 L32 95 L32 90 L45 80 L45 52 L5 62 L5 55 L45 35 Z" />
                </svg>
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5C6B7A] font-semibold">
                    {currentMission.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2545] leading-tight">
                    {currentMission.title}
                  </h3>
                </div>

                <p className="text-[15px] sm:text-base text-[#16202B] leading-relaxed">
                  {currentMission.description}
                </p>

                {/* Fast Facts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="bg-white border border-[#CBD5E1] p-3 rounded-[4px] space-y-1">
                    <span className="font-mono uppercase text-[#5C6B7A] font-semibold block">
                      Clearance Lead Time
                    </span>
                    <span className="font-bold text-[#0B2545] text-sm block">
                      {currentMission.leadTime}
                    </span>
                  </div>
                  <div className="bg-white border border-[#CBD5E1] p-3 rounded-[4px] space-y-1">
                    <span className="font-mono uppercase text-[#5C6B7A] font-semibold block">
                      Airspace Coverage
                    </span>
                    <span className="font-bold text-[#0B2545] text-sm block">
                      {currentMission.firs}
                    </span>
                  </div>
                </div>

                {/* Key Deliverables Checkmarks */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5C6B7A] font-semibold block">
                    Core Coordination Included
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentMission.keyServices.map((svc) => (
                      <div
                        key={svc}
                        className="flex items-center gap-2 text-xs font-medium text-[#0B2545] bg-white border border-[#CBD5E1] px-2.5 py-2 rounded-[2px]"
                      >
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="truncate">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA Row */}
              <div className="pt-4 border-t border-[#CBD5E1] flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={currentMission.ctaHref}
                  className="kcl-btn-primary min-h-[44px] px-6 py-2.5 font-bold text-sm inline-flex items-center gap-2 rounded-[2px] transition-colors"
                >
                  <span>{currentMission.ctaLabel}</span>
                  <span className="btn-arrow font-bold">→</span>
                </Link>

                <Link
                  href="/services"
                  className="text-sm font-semibold text-[#0B2545] hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  Explore All 15 Services →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Selector Indicators (Pill Dots) */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {MISSIONS.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}: ${m.title}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] ${
                activeIndex === idx
                  ? "w-8 bg-[#0B2545]"
                  : "w-2.5 bg-[#CBD5E1] hover:bg-[#5C6B7A]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

