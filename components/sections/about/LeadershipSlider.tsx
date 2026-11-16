"use client";

import React from "react";
import Image from "next/image";

export interface LeaderProfile {
  slug: string;
  initials: string;
  name: string;
  role: string;
  details: string | null;
  photoSrc: string | null;
}

interface LeadershipSliderProps {
  leaders: LeaderProfile[];
}

function LeaderNodeCard({
  leader,
  generationLabel,
  featured = false,
}: {
  leader: LeaderProfile;
  generationLabel: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[8px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:transform-none ${
        featured
          ? "bg-[#0B2545] border-[#F4C400]/70 text-white shadow-md"
          : "bg-white border-[#CBD5E1] hover:border-[#0B2545] text-[#0B2545] shadow-sm"
      }`}
    >
      {/* Top Gold Accent Bar */}
      <div
        aria-hidden="true"
        className="h-1 w-full bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545]"
      />

      {/* Subtle Aviation Plane Watermark SVG */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className={`absolute -right-4 -bottom-4 w-28 h-28 pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none ${
          featured ? "text-white/5" : "text-[#0B2545]/[0.04]"
        }`}
      >
        <path
          d="M95 25L55 48L22 38L14 46L42 62L30 82L16 80L10 86L28 92L34 110L40 104L38 90L58 78L74 106L82 98L72 65L95 25Z"
          fill="currentColor"
        />
      </svg>

      <div className="relative z-10 p-5 sm:p-6 flex items-start gap-4">
        {/* Crest / Photo */}
        {leader.photoSrc ? (
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#F4C400] shrink-0 shadow-sm">
            <Image
              src={leader.photoSrc}
              alt={`${leader.name}, ${leader.role}`}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        ) : (
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shrink-0 border-2 shadow-sm transition-transform duration-300 group-hover:scale-105 ${
              featured
                ? "bg-[#F4C400] border-white/30 text-[#0B2545]"
                : "bg-[#0B2545] border-[#F4C400] text-[#F4C400]"
            }`}
          >
            {leader.initials}
          </div>
        )}

        <div className="min-w-0 space-y-1.5 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={`text-sm font-bold tracking-wide ${
                featured ? "text-[#F4C400]" : "text-[#B88200]"
              }`}
            >
              {generationLabel}
            </span>
            <span
              className={`inline-flex items-center gap-1.5 text-sm font-semibold px-2.5 py-0.5 rounded-full border ${
                featured
                  ? "bg-white/10 border-white/20 text-slate-100"
                  : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545]"
              }`}
            >
              {leader.role}
            </span>
          </div>

          <h3
            className={`text-xl font-bold leading-snug ${
              featured ? "text-white" : "text-[#0B2545]"
            }`}
          >
            {leader.name}
          </h3>

          {leader.details && (
            <p
              className={`text-base leading-relaxed pt-1 ${
                featured ? "text-slate-200" : "text-[#475569]"
              }`}
            >
              {leader.details}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function VerticalFlightConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-col items-center justify-center py-1"
    >
      <div className="w-0.5 h-6 bg-gradient-to-b from-[#0B2545] to-[#F4C400]" />
      <div className="w-7 h-7 rounded-full bg-white border border-[#F4C400] text-[#0B2545] flex items-center justify-center shadow-2xs my-0.5">
        <svg className="w-3.5 h-3.5 rotate-180" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15 9L22 12L15 14L12 22L9 14L2 12L9 9L12 2Z" />
        </svg>
      </div>
      <div className="w-0.5 h-6 bg-gradient-to-b from-[#F4C400] to-[#0B2545]" />
    </div>
  );
}

export function LeadershipSlider({ leaders }: LeadershipSliderProps) {
  const [founder, second, third, ceo, director] = leaders;

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="scroll-mt-16 py-12 sm:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1] overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-sm font-bold tracking-wide text-[#B88200] inline-flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
            <span>Executive Lineage &amp; Governance</span>
          </span>
          <h2
            id="leadership-heading"
            className="text-2xl sm:text-3xl font-bold text-[#0B2545]"
          >
            Generations of Aviation Leadership
          </h2>
          <p className="text-base text-[#475569] leading-relaxed">
            Continuous family leadership guiding aviation operations, airline agency representations, and international flight support across eight decades.
          </p>
        </div>

        {/* Modern Hierarchical Tree */}
        <div className="flex flex-col items-center">
          {/* Tier 1: Founder */}
          {founder && (
            <div className="w-full max-w-xl">
              <LeaderNodeCard
                leader={founder}
                generationLabel="First Generation · 1947"
                featured
              />
            </div>
          )}

          <VerticalFlightConnector />

          {/* Tier 2: Chairman 1960-2013 */}
          {second && (
            <div className="w-full max-w-xl">
              <LeaderNodeCard
                leader={second}
                generationLabel="Second Generation · 1960–2013"
              />
            </div>
          )}

          <VerticalFlightConnector />

          {/* Tier 3: Chairman 2013-Present */}
          {third && (
            <div className="w-full max-w-xl">
              <LeaderNodeCard
                leader={third}
                generationLabel="Third Generation · 2013–Present"
                featured
              />
            </div>
          )}

          {/* Branching Connector to Two Executive Pillars */}
          <div aria-hidden="true" className="w-full max-w-2xl hidden md:flex flex-col items-center">
            <div className="w-0.5 h-6 bg-[#0B2545]" />
            <div className="w-1/2 h-0.5 bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545]" />
            <div className="w-1/2 flex justify-between">
              <div className="w-0.5 h-6 bg-[#0B2545]" />
              <div className="w-0.5 h-6 bg-[#0B2545]" />
            </div>
          </div>

          <div className="md:hidden">
            <VerticalFlightConnector />
          </div>

          {/* Tier 4: CEO & Director Side-by-Side */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 pt-1 md:pt-0">
            {ceo && (
              <LeaderNodeCard
                leader={ceo}
                generationLabel="Executive Leadership"
              />
            )}
            {director && (
              <LeaderNodeCard
                leader={director}
                generationLabel="Operations & Flight Leadership"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
