import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/utils";

interface CtaBannerProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  heading = "One Itinerary. A Clearer Operational Plan.",
  subheading = "Share your route and operational requirements to discuss the appropriate support across flight permissions, airport services, planning, and crew logistics.",
  primaryLabel = "Request Flight Support",
  primaryHref = "/request-flight-support",
  secondaryLabel = "Explore Services",
  secondaryHref = "/services",
}: CtaBannerProps) {
  return (
    <section className="bg-[#0B2545] text-white border-t border-slate-700 py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E8A200] bg-[#133661] border border-slate-600 px-3 py-1">
              <span>KCL INTERNATIONAL FLIGHT SUPPORT</span>
              <span>·</span>
              <span>{SITE_CONFIG.authorityBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {heading}
            </h2>
            <p className="text-slate-200 text-base leading-relaxed">
              {subheading}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-slate-300">
              <span>Operations Tel: {SITE_CONFIG.opsPhonePlaceholder}</span>
              <span>Operations Email: {SITE_CONFIG.opsEmailPlaceholder}</span>
              <span>Address: {SITE_CONFIG.addressPlaceholder}</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href={primaryHref}
              className="min-h-[48px] px-6 py-3.5 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm text-center inline-flex items-center justify-center rounded-[2px] transition-colors"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="min-h-[48px] px-6 py-3.5 bg-[#133661] hover:bg-slate-700 text-white border border-slate-500 font-semibold text-sm text-center inline-flex items-center justify-center rounded-[2px] transition-colors"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
