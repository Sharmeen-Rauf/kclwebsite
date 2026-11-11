"use client";

import React, { useEffect, useRef, useState } from "react";

interface FlightPathDividerProps {
  className?: string;
  variant?: "curve-down" | "curve-up";
}

export function FlightPathDivider({
  className = "",
  variant = "curve-down",
}: FlightPathDividerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver to toggle class once when entering viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dPath =
    variant === "curve-down"
      ? "M 0 16 Q 320 32, 640 16 T 1280 16"
      : "M 0 24 Q 320 8, 640 24 T 1280 24";

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`w-full overflow-hidden py-1 pointer-events-none select-none relative ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          viewBox="0 0 1280 40"
          fill="none"
          className="w-full h-8 sm:h-9 text-[#CBD5E1]"
        >
          {/* Subtle airway dashed path */}
          <path
            d={dPath}
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="5 7"
            strokeOpacity="0.75"
          />

          {/* Waypoint nodes */}
          <circle cx="320" cy={variant === "curve-down" ? 24 : 16} r="2.5" fill="#F4C400" opacity="0.9" />
          <circle cx="960" cy={variant === "curve-down" ? 24 : 16} r="2.5" fill="#F4C400" opacity="0.75" />

          {/* Airplane traversing flight-path (pure CSS offset-path or translate) */}
          <g
            className={`flight-path-plane ${
              isInView ? "plane-traverse" : "opacity-0"
            }`}
            style={{
              offsetPath: `path("${dPath}")`,
            }}
          >
            <path
              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
              fill="#F4C400"
              className="w-3.5 h-3.5 drop-shadow-[0_1px_3px_rgba(244,196,0,0.5)] transform rotate-90 scale-[0.7]"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

