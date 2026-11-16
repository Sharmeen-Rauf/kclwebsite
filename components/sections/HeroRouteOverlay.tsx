"use client";

import React from "react";
import { motion } from "motion/react";

const CORPORATE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroRouteOverlay() {
  return (
    <svg
      viewBox="0 0 1440 640"
      fill="none"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
    >
      {/* Primary International Corridor Arc */}
      <motion.path
        d="M-60 490 C 280 420, 620 260, 1020 220 C 1220 200, 1360 150, 1500 110"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeDasharray="6 6"
        initial={{ pathLength: 0, opacity: 0.4 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: CORPORATE_EASE }}
      />

      {/* Secondary Transcontinental Route */}
      <motion.path
        d="M-40 240 C 340 290, 740 350, 1140 280 C 1300 250, 1410 210, 1520 180"
        stroke="#F4C400"
        strokeOpacity="0.65"
        strokeWidth="1.2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.25, ease: CORPORATE_EASE }}
      />

      {/* North-South Regional Connector */}
      <motion.path
        d="M420 620 C 560 450, 720 310, 910 120"
        stroke="#FFFFFF"
        strokeWidth="1.1"
        strokeDasharray="4 5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.85 }}
        transition={{ duration: 1.4, delay: 0.45, ease: CORPORATE_EASE }}
      />

      {/* Waypoint Nodes (Reveal Once) */}
      {[
        { cx: 515, cy: 340, delay: 0.7 },
        { cx: 775, cy: 275, delay: 0.9 },
        { cx: 885, cy: 145, delay: 1.1 },
      ].map((pt) => (
        <motion.g
          key={`${pt.cx}-${pt.cy}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: pt.delay, ease: CORPORATE_EASE }}
        >
          <circle cx={pt.cx} cy={pt.cy} r="7" stroke="#F4C400" strokeOpacity="0.45" strokeWidth="1" />
          <circle cx={pt.cx} cy={pt.cy} r="3.5" fill="#FFFFFF" />
        </motion.g>
      ))}
    </svg>
  );
}

