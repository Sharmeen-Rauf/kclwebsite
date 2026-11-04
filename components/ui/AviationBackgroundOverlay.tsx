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

        {/* Faint Jet in Flight on Airway Vector */}
        <g transform="translate(940, 310) rotate(-16)">
          <path
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
            fill="currentColor"
            transform="scale(1.2)"
          />
        </g>
      </svg>
    </div>
  );
}
