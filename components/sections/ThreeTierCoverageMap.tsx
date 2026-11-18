"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { KCL_FACTS, type CoverageTierKey } from "@/content/facts";

interface TierMeta {
  key: CoverageTierKey;
  label: string;
  badgeColor: string;
  swatchClass: string;
  summary: string;
  locations: string[];
}

const TIERS: TierMeta[] = [
  {
    key: "filed",
    label: KCL_FACTS.coverage.tiers.filed.label,
    badgeColor: "bg-[#F4C400] text-[#0B2545]",
    swatchClass: "bg-[#F4C400] border-[#0B2545]",
    summary: KCL_FACTS.coverage.tiers.filed.summary,
    locations: [...KCL_FACTS.coverage.tiers.filed.countries],
  },
  {
    key: "direct",
    label: KCL_FACTS.coverage.tiers.direct.label,
    badgeColor: "bg-[#133661] text-white",
    swatchClass: "bg-[#1D4ED8] border-[#0B2545]",
    summary: KCL_FACTS.coverage.tiers.direct.summary,
    locations: [...KCL_FACTS.coverage.tiers.direct.countries],
  },
  {
    key: "partner",
    label: KCL_FACTS.coverage.tiers.partner.label,
    badgeColor: "bg-[#475569] text-white",
    swatchClass: "bg-[#64748B] border-[#334155]",
    summary: KCL_FACTS.coverage.tiers.partner.summary,
    locations: ["Asia (other states)", "Middle East (other states)", "Africa (other states)"],
  },
  {
    key: "advice",
    label: KCL_FACTS.coverage.tiers.advice.label,
    badgeColor: "bg-[#E2E8F0] text-[#0B2545]",
    swatchClass: "bg-[#CBD5E1] border-[#64748B]",
    summary: KCL_FACTS.coverage.tiers.advice.summary,
    locations: ["Elsewhere? Tell us your route and we will advise and introduce a partner."],
  },
];

export function ThreeTierCoverageMap() {
  const [activeTier, setActiveTier] = useState<CoverageTierKey>("filed");
  const currentTier = TIERS.find((t) => t.key === activeTier) || TIERS[0];

  return (
    <div className="bg-[#0B2545] text-white rounded-[6px] border border-[#1E3A5F] overflow-hidden shadow-lg">
      {/* Top Bar */}
      <div className="px-5 py-3.5 bg-[#081B33] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-sm font-bold text-[#F4C400] block">
            Launch Coverage: Asia, Middle East and Africa
          </span>
          <p className="text-sm text-slate-200">
            {KCL_FACTS.coverage.shortStatement}
          </p>
        </div>
        <Link
          href="/coverage"
          className="text-sm font-semibold text-white hover:text-[#F4C400] underline underline-offset-4 transition-colors"
        >
          Full coverage details →
        </Link>
      </div>

      {/* Interactive Tier Selector */}
      <div className="px-5 py-3 bg-[#0D2B50] border-b border-white/10 flex flex-wrap gap-2">
        {TIERS.map((tier) => {
          const isActive = tier.key === activeTier;
          return (
            <button
              key={tier.key}
              type="button"
              onClick={() => setActiveTier(tier.key)}
              aria-pressed={isActive}
              className={`px-3.5 py-2 rounded-[4px] text-sm font-semibold inline-flex items-center gap-2 border transition-colors cursor-pointer ${
                isActive
                  ? "bg-white text-[#0B2545] border-white"
                  : "bg-[#081B33]/80 text-slate-200 border-white/15 hover:border-white/50"
              }`}
            >
              <span className={`w-3 h-3 rounded-full border ${tier.swatchClass}`} aria-hidden="true" />
              <span>{tier.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Split: Schematic Three-Colour Regional Map + Active Tier Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Map SVG (Africa, Middle East, Asia only) */}
        <div className="lg:col-span-7 p-4 sm:p-6 bg-[#07192F] border-b lg:border-b-0 lg:border-r border-white/10">
          <svg
            viewBox="0 0 760 400"
            className="w-full h-auto block rounded-[4px] bg-[#0B2545]/60 border border-white/10"
            role="img"
            aria-label="Three-tier coverage map covering Pakistan, 7 direct-access countries, and partner-supported regions across Asia, the Middle East, and Africa"
          >
            {/* Subtle graticule */}
            <g stroke="rgba(255,255,255,0.06)" strokeWidth="1">
              <line x1="0" y1="100" x2="760" y2="100" />
              <line x1="0" y1="200" x2="760" y2="200" />
              <line x1="0" y1="300" x2="760" y2="300" />
              <line x1="190" y1="0" x2="190" y2="400" />
              <line x1="380" y1="0" x2="380" y2="400" />
              <line x1="570" y1="0" x2="570" y2="400" />
            </g>

            {/* Africa (Partner-Supported Region) */}
            <g
              onClick={() => setActiveTier("partner")}
              className="cursor-pointer"
            >
              <path
                d="M110 110 L265 110 L305 185 L270 330 L195 365 L145 270 L95 190 Z"
                fill="#64748B"
                fillOpacity={activeTier === "partner" ? "0.65" : "0.35"}
                stroke={activeTier === "partner" ? "#F4C400" : "#94A3B8"}
                strokeWidth={activeTier === "partner" ? "2.5" : "1.2"}
              />
              <text x="150" y="210" fill="#FFFFFF" fontSize="14" fontWeight="700">
                Africa
              </text>
            </g>

            {/* Middle East (Partner-Supported Region) */}
            <g
              onClick={() => setActiveTier("partner")}
              className="cursor-pointer"
            >
              <path
                d="M290 95 L415 90 L445 155 L380 205 L305 170 Z"
                fill="#64748B"
                fillOpacity={activeTier === "partner" ? "0.65" : "0.38"}
                stroke={activeTier === "partner" ? "#F4C400" : "#94A3B8"}
                strokeWidth={activeTier === "partner" ? "2.5" : "1.2"}
              />
              <text x="325" y="138" fill="#FFFFFF" fontSize="13" fontWeight="700">
                Middle East
              </text>
            </g>

            {/* Rest of Asia (Partner-Supported Region) */}
            <g
              onClick={() => setActiveTier("partner")}
              className="cursor-pointer"
            >
              <path
                d="M440 55 L700 55 L715 190 L640 275 L525 250 L455 175 Z"
                fill="#64748B"
                fillOpacity={activeTier === "partner" ? "0.65" : "0.35"}
                stroke={activeTier === "partner" ? "#F4C400" : "#94A3B8"}
                strokeWidth={activeTier === "partner" ? "2.5" : "1.2"}
              />
              <text x="565" y="145" fill="#FFFFFF" fontSize="14" fontWeight="700">
                Asia
              </text>
            </g>

            {/* Pakistan (Filed by KCL — Gold) */}
            <g
              onClick={() => setActiveTier("filed")}
              className="cursor-pointer"
            >
              <path
                d="M450 130 L505 115 L525 160 L485 195 L445 175 Z"
                fill="#F4C400"
                fillOpacity={activeTier === "filed" ? "0.95" : "0.8"}
                stroke="#FFFFFF"
                strokeWidth={activeTier === "filed" ? "2.5" : "1.5"}
              />
              <text x="454" y="212" fill="#F4C400" fontSize="12" fontWeight="700">
                Pakistan (Filed by KCL)
              </text>
            </g>

            {/* 7 Direct-Access Countries (Blue Pins) */}
            {[
              { name: "Bahrain", cx: 382, cy: 138 },
              { name: "Qatar", cx: 396, cy: 148 },
              { name: "Togo", cx: 142, cy: 232 },
              { name: "Ghana", cx: 126, cy: 235 },
              { name: "CAR", cx: 196, cy: 236 },
              { name: "Kenya", cx: 256, cy: 256 },
              { name: "Mauritius", cx: 326, cy: 318 },
            ].map((pin) => (
              <g
                key={pin.name}
                onClick={() => setActiveTier("direct")}
                className="cursor-pointer"
              >
                <circle
                  cx={pin.cx}
                  cy={pin.cy}
                  r={activeTier === "direct" ? "8" : "6"}
                  fill="#1D4ED8"
                  stroke="#FFFFFF"
                  strokeWidth="1.8"
                />
                <text
                  x={pin.cx + 10}
                  y={pin.cy + 4}
                  fill="#E2E8F0"
                  fontSize="10.5"
                  fontWeight="600"
                >
                  {pin.name}
                </text>
              </g>
            ))}
          </svg>

          {/* 3-Colour Legend */}
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-200">
            <span className="inline-flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#F4C400] border border-white" aria-hidden="true" />
              <span>Filed by KCL (Pakistan)</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#1D4ED8] border border-white" aria-hidden="true" />
              <span>Direct access (7 countries)</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#64748B] border border-slate-300" aria-hidden="true" />
              <span>Partner-supported (Asia, Middle East, Africa)</span>
            </span>
          </div>
        </div>

        {/* Right Detail Panel */}
        <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between bg-[#0B2545]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTier.key}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <span
                className={`inline-block text-sm font-bold px-3 py-1 rounded-[3px] ${currentTier.badgeColor}`}
              >
                {currentTier.label}
              </span>

              <h3 className="text-xl font-bold text-white">
                {currentTier.summary}
              </h3>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-300">
                  Covered countries / scope:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentTier.locations.map((loc) => (
                    <span
                      key={loc}
                      className="text-sm bg-[#081B33] border border-white/15 text-slate-100 px-3 py-1 rounded-[4px]"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="pt-6 mt-6 border-t border-white/15 space-y-3">
            <p className="text-sm text-slate-200 leading-relaxed">
              {KCL_FACTS.coverage.elsewhereLine}
            </p>
            <Link
              href="/request-flight-support"
              className="w-full bg-[#F4C400] hover:bg-[#DFB200] text-[#0B2545] font-bold text-base py-2.5 px-4 rounded-[3px] inline-flex items-center justify-center gap-2 transition-colors"
            >
              <span>Request Flight Support</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
