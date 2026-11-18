import React from "react";
import Link from "next/link";

interface CtaBannerProps {
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  eyebrow = "Flight Itinerary Coordination",
  heading = "Planning a Flight? Let's Get the Details Moving.",
  subheading = "Share your route, aircraft specifications, UTC schedule, and ground requirements. Our Operations Controller will review authority pathways and confirm what we can arrange.",
  primaryLabel = "Request Flight Support",
  primaryHref = "/request-flight-support",
}: CtaBannerProps) {
  return (
    <section
      aria-label="Flight Support Call to Action"
      className="relative overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0F3560] to-[#14406E] border-t border-b border-[#1E4B7A] py-9 sm:py-11 text-white"
    >
      {/* Subtle Airplane Silhouette Watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -bottom-14 sm:-bottom-10 opacity-[0.06] text-white"
      >
        <svg
          className="w-80 h-80 sm:w-96 sm:h-96"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
        {/* Left: Airplane Icon, Yellow Mini Heading, Title & Description */}
        <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0 shadow-md mt-1"
            aria-hidden="true"
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 transform -rotate-45"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs sm:text-[13px] uppercase tracking-wider font-bold text-[#F4C400] block">
              {eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="text-[15px] sm:text-base text-slate-200/90 leading-relaxed font-medium">
              {subheading}
            </p>
          </div>
        </div>

        {/* Right: White Primary CTA + 24/7 Ops Desk Indicator */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-2.5 shrink-0 self-stretch sm:self-auto">
          <Link
            href={primaryHref}
            className="w-full sm:w-auto bg-white hover:bg-[#F4C400] text-[#0B2545] px-7 py-3.5 rounded-[3px] font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C400] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
          >
            <span>{primaryLabel}</span>
            <span className="font-bold transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </Link>
          <span className="text-xs font-semibold text-slate-300 inline-flex items-center gap-1.5 self-center lg:self-end">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden="true"
            />
            24/7 urgent escalation line
          </span>
        </div>
      </div>
    </section>
  );
}
