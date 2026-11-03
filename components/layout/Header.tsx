"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavDropdownItem {
  label: string;
  href: string;
  desc?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavDropdownItem[];
}

const PRIMARY_NAV: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Core Services",
    href: "/services",
    children: [
      {
        label: "01 · Flight Permission Facilitation",
        href: "/pakistan/flight-permissions",
        desc: "Overflight & landing permit coordination",
      },
      {
        label: "02 · Ground Handling",
        href: "/services/ground-handling",
        desc: "Ramp, turnaround, baggage & aircraft servicing",
      },
      {
        label: "03 · Catering Services",
        href: "/services/inflight-catering",
        desc: "Inflight meals for passengers & flight crew",
      },
      {
        label: "04 · Fuel Supply",
        href: "/services/aviation-fuel",
        desc: "Aviation fuel arrangements with approved suppliers",
      },
      {
        label: "05 · Accommodation Arrangements",
        href: "/services/crew-logistics",
        desc: "Crew layover hotels & airport transportation",
      },
      {
        label: "06 · 24/7 Operational Support",
        href: "/services/operations-support",
        desc: "Active itinerary updates & trip coordination",
      },
    ],
  },
  {
    label: "Flight Permits",
    href: "/pakistan/flight-permissions",
    children: [
      {
        label: "Pakistan Flight Permissions Hub",
        href: "/pakistan/flight-permissions",
        desc: "OPKR & OPLR airspace & airport clearances",
      },
      {
        label: "Overflight Permits",
        href: "/services/overflight-permits",
        desc: "International & Pakistan overflight requests",
      },
      {
        label: "Landing Permits",
        href: "/services/landing-permits",
        desc: "Traffic stops & technical refueling arrivals",
      },
      {
        label: "Scheduled Flight Filing",
        href: "/schedule-filing",
        desc: "Seasonal airline timetables & fleet revisions",
      },
      {
        label: "Non-Scheduled & Charter Filing",
        href: "/non-schedule-filing",
        desc: "Ad-hoc charters, cargo, private & ferry flights",
      },
    ],
  },
  {
    label: "Resources",
    href: "/aviation-resources",
    children: [
      {
        label: "Aviation Resources & Checklists",
        href: "/aviation-resources",
        desc: "Preparation guides & downloadable PDF checklist",
      },
      {
        label: "Aviation Insights & Articles",
        href: "/insights",
        desc: "Practical perspectives on flight operations",
      },
      {
        label: "Pakistan Airspace Guide (OPKR/OPLR)",
        href: "/permit-directory/pakistan",
        desc: "FIR waypoints, airports & documentation reference",
      },
      {
        label: "Dispatch Reference Utilities",
        href: "/tools",
        desc: "UTC/PKT converter, ICAO alphabet & reg prefixes",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white text-[#0B2545] border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 py-2 shrink-0 focus-visible:outline-offset-4"
            aria-label="Kashmir Corporation (Pvt.) Ltd. (KCL) Home"
          >
            <div className="h-11 w-12 bg-[#0B2545] border-2 border-[#E8A200] flex items-center justify-center font-mono font-bold text-base tracking-wider text-[#E8A200] rounded-[2px] shadow-2xs">
              KCL
            </div>
            <div className="whitespace-nowrap">
              <span className="block font-extrabold text-lg tracking-tight text-[#0B2545] leading-tight">
                KASHMIR CORPORATION
              </span>
              <span className="block font-mono text-[10px] tracking-widest uppercase text-[#5C6B7A] font-semibold mt-0.5">
                International Flight Support
              </span>
            </div>
          </Link>

          {/* Desktop Navigation — Clean Single Row with Dropdowns */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2"
          >
            {PRIMARY_NAV.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 min-h-[44px] inline-flex items-center text-[13px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors border-b-2 ${
                      isActive
                        ? "border-[#E8A200] text-[#0B2545]"
                        : "border-transparent text-[#16202B] hover:text-[#0B2545] hover:border-slate-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-3 py-2 min-h-[44px] inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors border-b-2 ${
                      isActive
                        ? "border-[#E8A200] text-[#0B2545]"
                        : "border-transparent text-[#16202B] hover:text-[#0B2545] hover:border-slate-300"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className="w-3.5 h-3.5 text-[#5C6B7A] group-hover:text-[#0B2545] transition-transform group-hover:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </Link>

                  {/* Hover Dropdown Menu */}
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-all duration-150 absolute left-0 top-full pt-1 w-80 z-50">
                    <div className="bg-white border border-slate-200 shadow-lg rounded-[2px] py-2 divide-y divide-slate-100">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2.5 hover:bg-[#F6F8FB] transition-colors"
                        >
                          <span className="block text-xs font-bold text-[#0B2545]">
                            {sub.label}
                          </span>
                          {sub.desc && (
                            <span className="block text-[11px] text-[#5C6B7A] mt-0.5">
                              {sub.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/request-flight-support"
              className="min-h-[42px] px-4 py-2 bg-[#0B2545] hover:bg-[#133661] text-white font-bold text-xs uppercase tracking-wider rounded-[3px] inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap border-b-2 border-[#E8A200]"
            >
              <span>Permit &amp; Support Form</span>
              <span className="text-[#E8A200] font-mono">→</span>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/request-flight-support"
              className="min-h-[40px] px-3 py-2 bg-[#E8A200] hover:bg-[#CC8E00] text-[#0B2545] font-bold text-xs rounded-[2px] inline-flex items-center justify-center whitespace-nowrap"
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
              className="min-h-[40px] min-w-[44px] px-2.5 py-2 text-white bg-[#0B2545] hover:bg-[#133661] rounded-[2px] inline-flex items-center justify-center"
            >
              <span className="font-mono text-xs font-semibold">
                {mobileOpen ? "CLOSE" : "MENU"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-primary-menu"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg"
        >
          {PRIMARY_NAV.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
            return (
              <div key={item.label} className="space-y-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-bold uppercase tracking-wide border-l-2 ${
                    isActive
                      ? "border-[#E8A200] bg-[#F6F8FB] text-[#0B2545]"
                      : "border-transparent text-[#16202B] hover:bg-[#F6F8FB]"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 pb-2">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="px-3 py-2 bg-[#F6F8FB] border border-slate-200 text-xs font-semibold text-[#0B2545] hover:border-[#0B2545]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}
