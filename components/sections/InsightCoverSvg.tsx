import React from "react";
import type { InsightCoverKind } from "@/content/insights-summaries";

interface InsightCoverSvgProps {
  kind: InsightCoverKind;
  alt: string;
  className?: string;
}

export function InsightCoverSvg({
  kind,
  alt,
  className = "w-full h-48",
}: InsightCoverSvgProps) {
  return (
    <div className={`bg-[#0B2545] flex items-center justify-center overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 600 300"
        className="w-full h-full"
        role="img"
        aria-label={alt}
      >
        <rect width="600" height="300" fill="#0B2545" />
        {/* Subtle grid */}
        <path
          d="M0 75 H600 M0 150 H600 M0 225 H600 M150 0 V300 M300 0 V300 M450 0 V300"
          stroke="#FFFFFF"
          strokeOpacity="0.06"
          strokeWidth="1"
        />

        {kind === "route-arc" && (
          <g fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M80 220 C 200 70, 400 70, 520 220"
              strokeWidth="2.5"
              strokeDasharray="8 6"
              strokeOpacity="0.85"
            />
            <path
              d="M80 220 L 520 220"
              strokeWidth="1.2"
              strokeOpacity="0.3"
            />
            <circle cx="80" cy="220" r="7" fill="#FFFFFF" />
            <circle cx="300" cy="108" r="5" fill="#94A3B8" />
            <circle cx="520" cy="220" r="7" fill="#FFFFFF" />
          </g>
        )}

        {kind === "document" && (
          <g fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round">
            <rect x="220" y="55" width="160" height="190" rx="6" strokeWidth="2.2" strokeOpacity="0.9" />
            <line x1="250" y1="95" x2="350" y2="95" strokeWidth="2.5" />
            <line x1="250" y1="130" x2="350" y2="130" strokeWidth="2" strokeOpacity="0.65" />
            <line x1="250" y1="160" x2="330" y2="160" strokeWidth="2" strokeOpacity="0.65" />
            <line x1="250" y1="190" x2="310" y2="190" strokeWidth="2" strokeOpacity="0.65" />
            <polyline points="255 215 268 226 292 204" strokeWidth="2.5" />
          </g>
        )}

        {kind === "clock" && (
          <g fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="300" cy="150" r="76" strokeWidth="2.5" strokeOpacity="0.9" />
            <circle cx="300" cy="150" r="58" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="4 6" />
            <polyline points="300 98 300 150 338 172" strokeWidth="3" />
            <circle cx="300" cy="150" r="4" fill="#FFFFFF" />
          </g>
        )}

        {kind === "plane" && (
          <g fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M120 210 Q 260 150 420 110"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              strokeOpacity="0.45"
            />
            <path
              d="M360 115 L280 95 L260 110 L315 135 L275 160 L250 155 L240 165 L272 178 L285 210 L295 200 L290 175 L315 135 L395 128 C410 126 418 118 408 114 Z"
              strokeWidth="2.2"
              fill="#FFFFFF"
              fillOpacity="0.12"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

