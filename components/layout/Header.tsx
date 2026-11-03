"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/utils";

const PRIMARY_NAV = [
  { label: "Services", href: "/services" },
  { label: "Pakistan Permits", href: "/pakistan/flight-permissions" },
  { label: "Resources", href: "/aviation-resources" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0B2545] text-white border-b border-slate-700/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-3 py-2 focus-visible:outline-offset-4"
              aria-label="Kashmir Corporation (Pvt.) Ltd. (KCL) Home"
            >
              <div className="h-10 w-12 bg-[#133661] border border-[#E8A200] flex items-center justify-center font-mono font-bold text-base tracking-wider text-[#E8A200]">
                KCL
              </div>
              <div>
                <span className="block font-bold text-base sm:text-lg tracking-tight text-white leading-tight">
                  Kashmir Corporation
                </span>
                <span className="block text-xs text-slate-300 font-normal leading-tight">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </Link>
          </div>

          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {PRIMARY_NAV.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2.5 min-h-[44px] inline-flex items-center text-sm font-medium transition-colors border-b-2 ${
                    isActive
                      ? "border-[#E8A200] text-white bg-[#133661]/60"
                      : "border-transparent text-slate-200 hover:text-white hover:bg-[#133661]/40"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/request-flight-support"
              className="min-h-[44px] px-5 py-2.5 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-sm tracking-tight rounded-[2px] inline-flex items-center justify-center transition-colors"
            >
              Request Flight Support
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/request-flight-support"
              className="min-h-[44px] px-3.5 py-2 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-xs rounded-[2px] inline-flex items-center justify-center"
            >
              Request Support
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-primary-menu"
              aria-label={
                mobileOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="min-h-[44px] min-w-[44px] p-2.5 text-slate-200 hover:text-white bg-[#133661] border border-slate-600 rounded-[2px] inline-flex items-center justify-center"
            >
              <span className="font-mono text-xs font-semibold">
                {mobileOpen ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-primary-menu"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-[#07192F] border-t border-slate-700 px-4 pt-3 pb-5 space-y-1"
        >
          {PRIMARY_NAV.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-3 min-h-[44px] text-base font-medium border-l-2 ${
                  isActive
                    ? "border-[#E8A200] bg-[#133661] text-white"
                    : "border-transparent text-slate-200 hover:bg-[#133661]/50"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-3 mt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-sm">
            <Link
              href="/services/scheduled-flights"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 min-h-[44px] bg-[#0B2545] text-slate-200 border border-slate-700"
            >
              Scheduled Flights
            </Link>
            <Link
              href="/services/non-scheduled-flights"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 min-h-[44px] bg-[#0B2545] text-slate-200 border border-slate-700"
            >
              Charter &amp; Non-Scheduled
            </Link>
            <Link
              href="/services/flight-planning-dispatch"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 min-h-[44px] bg-[#0B2545] text-slate-200 border border-slate-700"
            >
              Planning &amp; Dispatch
            </Link>
            <Link
              href="/customer-support"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 min-h-[44px] bg-[#0B2545] text-slate-200 border border-slate-700"
            >
              Customer Support
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
