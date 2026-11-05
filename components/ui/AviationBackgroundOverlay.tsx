"use client";

import React from "react";

export function AviationBackgroundOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
    >
      {/* Delicate Aeronautical Waypoint Grid & Lat/Long Crosshairs */}
      <svg
        className="w-full h-full opacity-[0.04] text-[#0B2545]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="aero-grid-pattern"
            width="160"
            height="160"
            patternUnits="userSpaceOnUse"
          >
            {/* Crosshair at grid intersections */}
            <path
              d="M 80 72 L 80 88 M 72 80 L 88 80"
              stroke="currentColor"
              strokeWidth="1"
            />
            {/* Small corner dot */}
            <circle cx="80" cy="80" r="1.5" fill="currentColor" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#aero-grid-pattern)" />
      </svg>

      {/* Very faint high-altitude airway arc crossing the background with small airliner silhouette */}
      <svg
        viewBox="0 0 1600 900"
        fill="none"
        className="absolute -top-10 left-0 w-full h-full object-cover opacity-[0.035] text-[#0B2545]"
      >
        {/* Curving ATS Airway Arc */}
        <path
          d="M -100 650 C 350 550, 750 350, 1200 240 C 1400 190, 1550 140, 1750 90"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="8 10"
        />
        {/* Secondary Airway */}
        <path
          d="M 100 850 C 500 700, 900 600, 1300 480 C 1500 420, 1650 350, 1800 280"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="6 8"
        />

        {/* Waypoint circles with aeronautical callout tags */}
        <g transform="translate(680, 420)">
          <circle cx="0" cy="0" r="4" fill="currentColor" />
          <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <text x="18" y="4" fontSize="11" fontFamily="monospace" fill="currentColor" fontWeight="bold">
            ATS-WPT 28°N
          </text>
        </g>

        <g transform="translate(1180, 245)">
          <circle cx="0" cy="0" r="4" fill="currentColor" />
          <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
          <text x="18" y="4" fontSize="11" fontFamily="monospace" fill="currentColor" fontWeight="bold">
            FIR-BND FL380
          </text>
        </g>

        {/* Cruising Jet in Flight on Airway Vector with Heading Tag */}
        <g transform="translate(940, 310) rotate(-22)">
          {/* Subtle Contrail */}
          <line x1="0" y1="18" x2="0" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
          <path
            d="M 0 -24 L 2 -12 L 20 2 L 20 6 L 2 3 L 2 14 L 8 18 L 8 21 L 0 19 L -8 21 L -8 18 L -2 14 L -2 3 L -20 6 L -20 2 L -2 -12 Z"
            fill="currentColor"
          />
        </g>

        {/* Secondary Mid-Altitude Airway Jet (Lower South-West Corridor) */}
        <g transform="translate(420, 710) rotate(-42)">
          <line x1="0" y1="14" x2="0" y2="70" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
          <path
            d="M 0 -18 L 1.5 -9 L 15 1.5 L 15 4.5 L 1.5 2 L 1.5 10 L 6 13 L 6 15 L 0 14 L -6 15 L -6 13 L -1.5 10 L -1.5 2 L -15 4.5 L -15 1.5 L -1.5 -9 Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </div>
  );
}

