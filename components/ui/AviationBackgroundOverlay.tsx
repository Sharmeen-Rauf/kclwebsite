"use client";

import React from "react";

export function AviationBackgroundOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-[1] overflow-hidden"
    >
      {/* 1. Aeronautical Navigational Coordinate Grid */}
      <svg
        className="w-full h-full opacity-[0.045] text-[#0B2545]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="aero-grid-pattern"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            {/* Coordinate crosshair at grid intersections */}
            <path
              d="M 90 80 L 90 100 M 80 90 L 100 90"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* Small corner coordinate dots */}
            <circle cx="90" cy="90" r="1.5" fill="currentColor" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#aero-grid-pattern)" />
      </svg>

      {/* 2. Global Flight Paths, Airway Vectors & Airplane Silhouettes */}
      <svg
        viewBox="0 0 1600 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.065] text-[#0B2545]"
      >
        {/* Curving High-Altitude Transcontinental Airway Arc (Upper Corridor) */}
        <path
          d="M -120 740 C 320 620, 720 380, 1180 240 C 1380 180, 1580 130, 1850 80"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 10"
        />

        {/* Secondary Cross-Continental Airway (Lower Corridor) */}
        <path
          d="M 60 890 C 380 560, 820 480, 1260 410 C 1500 370, 1680 320, 1860 260"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="6 8"
        />

        {/* Tactical Approach Vector Arc */}
        <path
          d="M 240 -40 C 360 240, 580 460, 880 620 C 1140 760, 1420 860, 1720 920"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5 7"
        />

        {/* Waypoint Nodes (Diamond Markers with Coordinates) */}
        <g opacity="0.8">
          {/* Waypoint 1: OPKR FIR boundary */}
          <polygon points="320,614 326,620 320,626 314,620" stroke="currentColor" strokeWidth="1.2" fill="white" />
          <text x="332" y="624" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.05em">
            WP-OPKR · FL380
          </text>

          {/* Waypoint 2: Mid-Oceanic Gateway */}
          <polygon points="720,374 726,380 720,386 714,380" stroke="currentColor" strokeWidth="1.2" fill="white" />
          <text x="732" y="384" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.05em">
            ATS-WPT · 24°N 067°E
          </text>

          {/* Waypoint 3: Inbound Fix */}
          <polygon points="1260,404 1266,410 1260,416 1254,410" stroke="currentColor" strokeWidth="1.2" fill="white" />
          <text x="1272" y="414" fill="currentColor" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.05em">
            NAV-FIX · FL340
          </text>
        </g>

        {/* =========================================================================
            AIRPLANE SILHOUETTES TRAVERSING THE FLIGHT ROUTES
            ========================================================================= */}

        {/* Aircraft 1: Long-Haul Commercial Airliner (Climbing Upper Airway Corridor) */}
        <g transform="translate(1180, 240) rotate(-22) scale(1.75)">
          {/* Jet Engine Contrails */}
          <line x1="-140" y1="-3" x2="-8" y2="-3" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.7" />
          <line x1="-140" y1="3" x2="-8" y2="3" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.7" />

          {/* Airliner Silhouette */}
          <path
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            fill="currentColor"
            transform="rotate(90) translate(-11, -12)"
          />

          {/* Beacon Light (KCL Aviation Gold Touch) */}
          <circle cx="2" cy="0" r="1.8" fill="#F4C400" className="animate-pulse" />
        </g>

        {/* Aircraft 2: Executive Business Jet (Traversing Lower Route) */}
        <g transform="translate(380, 560) rotate(-35) scale(1.4)">
          {/* Twin Contrail Lines */}
          <line x1="-100" y1="-2" x2="-6" y2="-2" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />
          <line x1="-100" y1="2" x2="-6" y2="2" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" opacity="0.6" />

          {/* Swept-Wing Jet Silhouette */}
          <path
            d="M12 2L10.5 7.5L5 9.5L5 11L10.5 10.5L11 16L9 17.5L9 19L12 18.5L15 19L15 17.5L13 16L13.5 10.5L19 11L19 9.5L13.5 7.5L12 2Z"
            fill="currentColor"
            transform="rotate(90) translate(-12, -12)"
          />

          {/* Beacon Light (Gold Accent) */}
          <circle cx="1.5" cy="0" r="1.5" fill="#F4C400" className="animate-pulse" />
        </g>

        {/* Aircraft 3: Twin-Engine Cargo Transport (Top Approach Corridor) */}
        <g transform="translate(740, 140) rotate(-18) scale(1.25)">
          <line x1="-80" y1="0" x2="-6" y2="0" stroke="currentColor" strokeWidth="1" strokeDasharray="4 5" opacity="0.5" />
          <path
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            fill="currentColor"
            transform="rotate(90) translate(-11, -12)"
          />
          <circle cx="2" cy="0" r="1.4" fill="#F4C400" />
        </g>

        {/* 3. Corner Navigational Compass Rose Dial (Top Right) */}
        <g transform="translate(1500, 100)" opacity="0.7">
          <circle cx="0" cy="0" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="0" cy="0" r="32" stroke="currentColor" strokeWidth="0.75" />
          <line x1="0" y1="-45" x2="0" y2="45" stroke="currentColor" strokeWidth="1" />
          <line x1="-45" y1="0" x2="45" y2="0" stroke="currentColor" strokeWidth="1" />
          <text x="-4" y="-48" fill="currentColor" fontSize="9" fontFamily="sans-serif" fontWeight="bold">N</text>
          <text x="48" y="3" fill="currentColor" fontSize="8" fontFamily="sans-serif">090°</text>
          <text x="-4" y="56" fill="currentColor" fontSize="8" fontFamily="sans-serif">180°</text>
          <text x="-66" y="3" fill="currentColor" fontSize="8" fontFamily="sans-serif">270°</text>
          <circle cx="0" cy="0" r="2" fill="#F4C400" />
        </g>
      </svg>
    </div>
  );
}
