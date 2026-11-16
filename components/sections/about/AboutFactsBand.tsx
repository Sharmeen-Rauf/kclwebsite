"use client";

import React, { useEffect, useRef, useState } from "react";

export function AboutFactsBand() {
  const bandRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [yearVal, setYearVal] = useState(1947);
  const [hoursVal, setHoursVal] = useState(24);
  const [servicesVal, setServicesVal] = useState(8);
  const [regionsVal, setRegionsVal] = useState(6);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches || hasAnimated) return;

    const el = bandRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        setHasAnimated(true);
        observer.disconnect();

        const duration = 900;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setYearVal(Math.round(1900 + 47 * eased));
          setHoursVal(Math.max(1, Math.round(24 * eased)));
          setServicesVal(Math.max(1, Math.round(8 * eased)));
          setRegionsVal(Math.max(1, Math.round(6 * eased)));
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={bandRef}
      aria-label="KCL key facts"
      className="relative overflow-hidden bg-[#0B2545] text-white py-12 sm:py-14 border-b border-slate-800"
    >
      {/* One very slow drifting plane along a route arc in the Facts band only */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-25"
      >
        <svg
          viewBox="0 0 920 120"
          fill="none"
          className="w-full h-full preserve-3d"
        >
          <path
            d="M -40 90 Q 450 20 960 75"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeDasharray="6 6"
          />
        </svg>
        <div className="about-facts-plane absolute top-0 left-0 text-white">
          <svg
            className="w-5 h-5 rotate-90"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2L15 9L22 12L15 14L12 22L9 14L2 12L9 9L12 2Z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {yearVal}
            </div>
            <div className="text-base text-slate-200">Group founded</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {hoursVal}/7
            </div>
            <div className="text-base text-slate-200">Operations desk</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {servicesVal}
            </div>
            <div className="text-base text-slate-200">Core services</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {regionsVal}
            </div>
            <div className="text-base text-slate-200">Regions supported</div>
          </div>
        </div>
      </div>
    </section>
  );
}

