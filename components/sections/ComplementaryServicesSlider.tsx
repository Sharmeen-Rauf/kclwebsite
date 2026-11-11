"use client";

import React, { useRef } from "react";
import Link from "next/link";

export interface ComplementaryServicesSliderProps {
  currentServiceSlug?: string;
  className?: string;
}

interface ServiceCard {
  slug: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const ALL_COMPLEMENTARY_SERVICES: ServiceCard[] = [
  {
    slug: "ground-handling",
    badge: "Ramp & Turnaround",
    title: "Ground Handling",
    description: "Aircraft turnaround, baggage, ramp servicing and passenger handling at worldwide stations.",
    href: "/services/ground-handling",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
      </svg>
    ),
  },
  {
    slug: "aviation-fuel",
    badge: "Jet A-1 Supply",
    title: "Aviation Fuel",
    description: "Direct Jet A-1 refueling coordination, competitive pricing and credit facilities internationally.",
    href: "/services/aviation-fuel",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 22h12" />
        <path d="M4 9h10" />
        <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
        <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
      </svg>
    ),
  },
  {
    slug: "crew-logistics",
    badge: "Crew Layover",
    title: "Crew Accommodation",
    description: "Airline-grade layover hotels, flexible crew rates and dedicated airside transportation.",
    href: "/services/crew-logistics",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    ),
  },
  {
    slug: "flight-permissions",
    badge: "Permit Clearance",
    title: "Flight Permissions",
    description: "Worldwide overflight and landing permits facilitated with civil aviation authorities 24/7.",
    href: "/services/flight-permissions",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    slug: "inflight-catering",
    badge: "Galley Uplift",
    title: "Inflight Catering",
    description: "Tailored passenger and flight crew meal delivery arranged with certified airport flight kitchens.",
    href: "/services/inflight-catering",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
  },
  {
    slug: "airport-slot-coordination",
    badge: "Schedule Liaison",
    title: "Airport Slot Coordination",
    description: "Slot inquiry filing, SCR message processing and direct liaison with airport slot coordinators.",
    href: "/services/airport-slot-coordination",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export function ComplementaryServicesSlider({
  currentServiceSlug,
  className = "",
}: ComplementaryServicesSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  // Filter out the active service page if supplied
  const services = ALL_COMPLEMENTARY_SERVICES.filter(
    (s) => !currentServiceSlug || s.slug !== currentServiceSlug
  );

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 260;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`mt-5 pt-4 border-t border-[#CBD5E1]/80 space-y-3 ${className}`}>
      {/* Header with Title and Scroll Controls */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F4C400] shrink-0 animate-pulse" />
          <span className="text-xs sm:text-sm font-bold text-[#0B2545] tracking-tight">
            We can also arrange on your flight stop:
          </span>
        </div>

        {/* Desktop slider navigation arrows */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-7 h-7 rounded-[4px] border border-[#CBD5E1] bg-white hover:bg-slate-50 text-[#0B2545] hover:border-[#0B2545] flex items-center justify-center text-xs transition-colors cursor-pointer shadow-2xs"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-7 h-7 rounded-[4px] border border-[#CBD5E1] bg-white hover:bg-slate-50 text-[#0B2545] hover:border-[#0B2545] flex items-center justify-center text-xs transition-colors cursor-pointer shadow-2xs"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider Container / Cards Track */}
      <div
        ref={sliderRef}
        className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none py-1 px-0.5"
      >
        {services.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className="group relative flex-none w-[220px] sm:w-[240px] md:w-[250px] bg-white border border-[#CBD5E1] hover:border-[#F4C400] rounded-[6px] p-3.5 flex flex-col justify-between shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 snap-start overflow-hidden"
          >
            {/* Top Animated Shimmer Border Accent with Gold Glow */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B2545] via-[#F4C400] to-[#0B2545] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />

            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="w-8 h-8 rounded-[4px] bg-[#0B2545]/5 text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-[#F4C400] transition-colors flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <span className="text-[10px] font-bold text-[#5C6B7A] uppercase tracking-wider bg-slate-100 px-1.5 py-0.5 rounded-[2px] truncate">
                  {item.badge}
                </span>
              </div>

              <h4 className="text-sm font-bold text-[#0B2545] group-hover:text-[#133661] transition-colors">
                {item.title}
              </h4>

              <p className="text-xs text-[#5C6B7A] line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B2545] group-hover:text-[#B88200] transition-colors">
              <span>Explore service</span>
              <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
