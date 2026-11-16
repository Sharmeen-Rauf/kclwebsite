import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface HeroActionButton {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

export interface SnapshotRow {
  label: string;
  value: string;
}

interface InnerHeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttons?: HeroActionButton[];
  snapshotTitle?: string;
  snapshotRows?: SnapshotRow[];
}

export function InnerHero({
  kicker,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  buttons = [],
}: InnerHeroProps) {
  return (
    <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[520px] lg:min-h-[560px] py-12 lg:py-14 flex items-center justify-center">
      {/* Full-width aviation photo with left-to-right navy gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center hero-zoom-photo"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/92 via-[#0B2545]/75 to-[#14406E]/50"
        />

        {/* Ambient Radar Sweep Visual */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 sm:-top-32 sm:-right-32 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] rounded-full border border-sky-400/10 pointer-events-none overflow-hidden opacity-30"
        >
          <div className="absolute inset-0 rounded-full border border-sky-400/15" />
          <div className="absolute inset-16 sm:inset-24 rounded-full border border-sky-400/15" />
          <div className="absolute inset-32 sm:inset-44 rounded-full border border-sky-400/15" />
          <div className="absolute inset-0 radar-sweep-beam bg-gradient-to-tr from-sky-400/15 via-transparent to-transparent rounded-full" />
        </div>

        {/* Subtle airway route line-art */}
        <svg
          viewBox="0 0 1440 640"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
        >
          <path
            d="M-60 490 C 280 420, 620 260, 1020 220 C 1220 200, 1360 150, 1500 110"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            className="airway-route-line"
          />
          <path
            d="M-40 240 C 340 290, 740 350, 1140 280 C 1300 250, 1410 210, 1520 180"
            stroke="#FFFFFF"
            strokeWidth="1.2"
          />
          <circle cx="515" cy="340" r="4" fill="#FFFFFF" />
          <circle cx="775" cy="275" r="4" fill="#FFFFFF" />
          <circle cx="885" cy="145" r="4" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          {kicker && (
            <div className="inline-flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-[#F4C400]">
              <svg
                className="w-4 h-4 shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
              <span>{kicker}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.16] tracking-tight mx-auto">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg font-semibold text-slate-100 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              {buttons.map((btn, index) => {
                const isPrimary =
                  btn.variant === "primary" ||
                  (btn.variant === undefined && index === 0);

                if (isPrimary) {
                  const primaryClasses =
                    "relative overflow-hidden bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] font-bold text-sm sm:text-base min-h-[44px] px-7 py-3 inline-flex items-center justify-center rounded-[2px] transition-all shadow-md hover:shadow-lg gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C400]";
                  return btn.href.startsWith("#") ? (
                    <a
                      key={btn.href + btn.label}
                      href={btn.href}
                      className={primaryClasses}
                    >
                      <span className="animate-btn-shimmer" />
                      <span>{btn.label}</span>
                      <span
                        aria-hidden="true"
                        className="group-hover:translate-x-1 motion-safe:transition-transform"
                      >
                        →
                      </span>
                    </a>
                  ) : (
                    <Link
                      key={btn.href + btn.label}
                      href={btn.href}
                      className={primaryClasses}
                    >
                      <span className="animate-btn-shimmer" />
                      <span>{btn.label}</span>
                      <span
                        aria-hidden="true"
                        className="group-hover:translate-x-1 motion-safe:transition-transform"
                      >
                        →
                      </span>
                    </Link>
                  );
                }

                const outlineClasses =
                  "kcl-btn-outline-white border-t-2 border-t-[#F4C400] min-h-[44px] px-6 py-3 font-semibold text-sm sm:text-base inline-flex items-center justify-center rounded-[2px] hover:bg-white/15 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";
                return btn.href.startsWith("#") ? (
                  <a
                    key={btn.href + btn.label}
                    href={btn.href}
                    className={outlineClasses}
                  >
                    {btn.label}
                  </a>
                ) : (
                  <Link
                    key={btn.href + btn.label}
                    href={btn.href}
                    className={outlineClasses}
                  >
                    {btn.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
