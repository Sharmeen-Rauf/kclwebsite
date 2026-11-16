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
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  buttons?: HeroActionButton[];
  snapshotTitle?: string;
  snapshotRows: SnapshotRow[];
}

const HERO_CHIPS = [
  "Scheduled and non-scheduled flights",
  "Short-notice requests",
  "24/7 operations desk support",
];

export function InnerHero({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  buttons = [],
  snapshotTitle = "Operations Snapshot",
  snapshotRows,
}: InnerHeroProps) {
  return (
    <section className="relative overflow-hidden text-white border-b border-slate-800 min-h-[520px] lg:min-h-[560px] py-12 lg:py-14 flex items-center">
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
          className="absolute inset-0 bg-gradient-to-r from-[#0B2545]/92 via-[#0B2545]/75 to-[#14406E]/45"
        />

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

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: H1, Subhead, Buttons & Three Chips */}
          <div className="lg:col-span-7 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.16] tracking-tight max-w-2xl">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base sm:text-lg font-semibold text-slate-100 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}

            {description && (
              <p className="text-base text-slate-200 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}

            {buttons.length > 0 && (
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                {buttons.map((btn, index) => {
                  const isPrimary =
                    btn.variant === "primary" ||
                    (btn.variant === undefined && index === 0);
                  const classes = isPrimary
                    ? "bg-white hover:bg-slate-100 text-[#0B2545] font-bold text-base min-h-[44px] px-6 py-2.5 inline-flex items-center justify-center rounded-[4px] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
                    : "border border-white/60 hover:bg-white/15 text-white font-semibold text-base min-h-[44px] px-6 py-2.5 inline-flex items-center justify-center rounded-[4px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]";

                  if (btn.href.startsWith("#")) {
                    return (
                      <a key={btn.href + btn.label} href={btn.href} className={classes}>
                        {btn.label}
                      </a>
                    );
                  }
                  return (
                    <Link key={btn.href + btn.label} href={btn.href} className={classes}>
                      {btn.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {/* Three operational chips under the buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {HERO_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/25 text-white text-sm sm:text-base font-medium px-3 py-1 rounded-[4px]"
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-white/80 shrink-0"
                  />
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Frosted Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-[6px] p-5 sm:p-6 shadow-lg space-y-4">
              <div className="text-lg font-bold text-white border-b border-white/20 pb-3">
                {snapshotTitle}
              </div>

              <dl className="space-y-3">
                {snapshotRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 border-b border-white/10 pb-2.5 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-base text-slate-200 font-medium">
                      {row.label}
                    </dt>
                    <dd className="text-base text-white font-semibold sm:text-right">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

