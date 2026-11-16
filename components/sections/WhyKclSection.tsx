import React from "react";
import Image from "next/image";
import { ClientStrip } from "@/components/sections/ClientStrip";

export interface WhyKclCardItem {
  kicker: string;
  title: string;
  description: string;
  image?: string;
  pulse?: boolean;
}

interface WhyKclSectionProps {
  subheading: string;
  cards: WhyKclCardItem[];
}

const DEFAULT_WHY_IMAGES = [
  "/img/services/06-ops.webp",
  "/img/services/02-ground.webp",
  "/img/services/07-dispatch.webp",
  "/img/hero-flight-ops.jpg",
];

export function WhyKclSection({ subheading, cards }: WhyKclSectionProps) {
  return (
    <section className="py-12 lg:py-16 bg-[#F8FAFC] border-b border-[#CBD5E1]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-sm font-bold tracking-wide text-[#B88200] inline-flex items-center gap-1.5 mb-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
            <span>Why choose KCL</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] mb-2">
            Why KCL
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-2xl">
            {subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, idx) => {
            const bgImage =
              card.image ||
              DEFAULT_WHY_IMAGES[idx % DEFAULT_WHY_IMAGES.length];
            return (
              <div
                key={card.title}
                className="group relative overflow-hidden bg-[#0B2545] border border-slate-700/70 hover:border-[#F4C400] rounded-[8px] p-5 flex flex-col justify-between space-y-3 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-white motion-reduce:transition-none motion-reduce:transform-none"
              >
                {/* Aesthetic Background Photo */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <Image
                    src={bgImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 280px, 50vw"
                    className="object-cover object-center opacity-25 group-hover:opacity-35 group-hover:scale-105 motion-safe:transition-all motion-safe:duration-500"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/95 via-[#0B2545]/85 to-[#0B2545]/65"
                  />
                </div>

                {/* Top Gold Sweep Border */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-20 motion-reduce:transition-none"
                />

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-[#F4C400] tracking-wide">
                      {card.kicker}
                    </span>
                    {card.pulse && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="relative z-10 pt-2">
                  <div className="w-8 h-0.5 bg-white/30 group-hover:bg-[#F4C400] group-hover:w-14 rounded-full transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-6 border-t border-[#CBD5E1]/60">
          <ClientStrip compact hideHeading />
        </div>
      </div>
    </section>
  );
}

