import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface TimelineStepItem {
  badge: string;
  isYou?: boolean;
  title: string;
  detail: string;
}

export interface SupportCardItem {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
  image?: string;
}

interface ServiceHowAndSupportSectionProps {
  timelineHeading: string;
  timelineSubheading: string;
  steps: TimelineStepItem[];
  supportHeading: string;
  supportSubheading: string;
  supportCards: SupportCardItem[];
}

const DEFAULT_SUPPORT_IMAGES = [
  "/img/services/01-permits.webp",
  "/img/services/02-ground.webp",
  "/img/services/07-dispatch.webp",
  "/img/services/06-ops.webp",
];

export function ServiceHowAndSupportSection({
  timelineHeading,
  timelineSubheading,
  steps,
  supportHeading,
  supportSubheading,
  supportCards,
}: ServiceHowAndSupportSectionProps) {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 bg-white border-b border-[#CBD5E1]">
      {/* Subtle Aeronautical Dot Matrix */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: "radial-gradient(#0B2545 1.1px, transparent 1.1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-gradient-to-br from-sky-400/10 via-[#0B2545]/5 to-transparent rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Elevated Timeline Cards */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-sm font-bold tracking-wide text-[#B88200] inline-flex items-center gap-1.5 mb-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                <span>Operational timeline</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                {timelineHeading}
              </h2>
              <p className="text-base text-[#475569] mt-1">
                {timelineSubheading}
              </p>
            </div>

            <div className="relative pl-8 space-y-3.5 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-[#0B2545] before:via-[#F4C400] before:to-[#0B2545]">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="group relative bg-[#F8FAFC] hover:bg-white border border-[#CBD5E1] hover:border-[#0B2545] rounded-[8px] p-4 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:transform-none"
                >
                  <div
                    className={`absolute -left-[33px] top-4 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none ${
                      step.isYou
                        ? "bg-white border-[#0B2545] text-[#0B2545]"
                        : "bg-[#0B2545] border-[#F4C400] text-[#F4C400]"
                    }`}
                  >
                    {idx + 1}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-[4px] ${
                        step.isYou
                          ? "bg-slate-200 text-[#0B2545]"
                          : "bg-[#0B2545] text-[#F4C400]"
                      }`}
                    >
                      {step.badge}
                    </span>
                    <h3 className="text-base font-bold text-[#0B2545]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Photo-Backed Deep Navy Support Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-sm font-bold tracking-wide text-[#B88200] inline-flex items-center gap-1.5 mb-1">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                <span>Operator coverage</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
                {supportHeading}
              </h2>
              <p className="text-base text-[#475569] mt-1">
                {supportSubheading}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {supportCards.map((card, idx) => {
                const bgImage =
                  card.image ||
                  DEFAULT_SUPPORT_IMAGES[idx % DEFAULT_SUPPORT_IMAGES.length];
                return (
                  <div
                    key={card.title}
                    className="group relative overflow-hidden rounded-[8px] border border-slate-700/70 hover:border-[#F4C400] bg-[#0B2545] text-white p-5 flex flex-col justify-between gap-2.5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none"
                  >
                    {/* Aesthetic Background Aviation Image */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <Image
                        src={bgImage}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 420px, 100vw"
                        className="object-cover object-center opacity-25 group-hover:opacity-35 group-hover:scale-105 motion-safe:transition-all motion-safe:duration-500"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/95 via-[#0B2545]/85 to-[#0B2545]/65"
                      />
                    </div>

                    {/* Top Gold Sweep Border */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-20 motion-reduce:transition-none"
                    />

                    <div className="relative z-10 space-y-1.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 border border-[#F4C400]/60 text-[#F4C400] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#F4C400] group-hover:text-[#0B2545] transition-all duration-300">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {card.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-200 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="relative z-10 pt-1">
                      <Link
                        href={card.href}
                        className="text-sm font-bold text-[#F4C400] hover:underline underline-offset-4 inline-flex items-center gap-1.5"
                      >
                        <span>{card.ctaLabel || "Request coordination"}</span>
                        <span
                          aria-hidden="true"
                          className="group-hover:translate-x-1 motion-safe:transition-transform"
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

