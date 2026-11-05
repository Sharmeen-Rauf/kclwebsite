import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_DETAILS, isRealContactValue } from "@/content/contact";
import { FooterLiveClocks } from "@/components/layout/FooterLiveClocks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site Footer" className="bg-white text-[#16202B]">
      {/* (a) Executive Navy Gradient Pre-Footer Banner */}
      <section
        aria-label="Flight Itinerary Support"
        className="relative overflow-hidden bg-gradient-to-r from-[#0B2545] via-[#0F3560] to-[#14406E] border-t border-b border-[#1E4B7A] py-8 sm:py-10 text-white"
      >
        {/* Subtle Airplane Silhouette Background Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -bottom-14 sm:-bottom-10 opacity-[0.06] text-white"
        >
          <svg
            className="w-80 h-80 sm:w-96 sm:h-96"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-10">
          {/* Left: Airplane Icon, Eyebrow, Heading & Paragraph */}
          <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0 shadow-md mt-1"
              aria-hidden="true"
            >
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 transform -rotate-45"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>

            <div className="space-y-1.5">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#F4C400] block">
                FLIGHT ITINERARY COORDINATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Planning a Flight? Send Us Your Itinerary.
              </h2>
              <p className="text-[15px] sm:text-base text-slate-200/90 leading-relaxed font-medium">
                Share your route string, aircraft specifications, UTC schedule, and ground requirements. Our 24/7 operations desk will review authority clearance pathways and confirm your operational plan.
              </p>
            </div>
          </div>

          {/* Right: Action Button with 24/7 response badge */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-2.5 shrink-0 self-stretch sm:self-auto">
            <Link
              href="/request-flight-support"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-[#0B2545] px-7 py-3.5 rounded-[3px] font-bold text-sm sm:text-base inline-flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2545]"
            >
              <span>Request Flight Support</span>
              <span className="btn-arrow font-bold">
                →
              </span>
            </Link>
            <span className="text-xs font-semibold text-slate-300 inline-flex items-center gap-1.5 self-center lg:self-end">
              <span
                className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
                aria-hidden="true"
              />
              24/7 Active Operations Desk · Fast Turnaround
            </span>
          </div>
        </div>
      </section>

      {/* (b) Four-column white footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-[#CBD5E1]">
          {/* Column 1: Brand, Description, Contact, Clocks */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block"
              aria-label="Kashmir Corporation (Pvt.) Ltd. Home"
            >
              <Image
                src="/img/imgi_2_Sign Logo1@3x.png"
                alt="KCL Flight Permission — Kashmir Corporation (Pvt.) Ltd."
                width={170}
                height={68}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-[15px] text-[#5C6B7A] leading-relaxed">
              Flight permits and ground support for international operations,
              coordinated by Kashmir Corporation (Pvt.) Ltd.
            </p>

            {/* Contact Details (Placeholders hidden) */}
            <div className="space-y-1.5 pt-1 text-[15px] text-[#5C6B7A]">
              {isRealContactValue(CONTACT_DETAILS.phone) && (
                <p>
                  <span className="font-semibold text-[#0B2545]">Phone: </span>
                  <a
                    href={`tel:${CONTACT_DETAILS.phone}`}
                    className="hover:text-[#0B2545] hover:underline underline-offset-4"
                  >
                    {CONTACT_DETAILS.phone}
                  </a>
                </p>
              )}
              {isRealContactValue(CONTACT_DETAILS.email) && (
                <p>
                  <span className="font-semibold text-[#0B2545]">Email: </span>
                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="hover:text-[#0B2545] hover:underline underline-offset-4"
                  >
                    {CONTACT_DETAILS.email}
                  </a>
                </p>
              )}
              {isRealContactValue(CONTACT_DETAILS.address) && (
                <p>
                  <span className="font-semibold text-[#0B2545]">Address: </span>
                  {CONTACT_DETAILS.address}
                </p>
              )}
            </div>

            {/* LinkedIn & Email Icon Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={CONTACT_DETAILS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KCL International Flight Support on LinkedIn"
                title="KCL on LinkedIn"
                className="w-9 h-9 rounded-[4px] border border-[#CBD5E1] hover:border-[#0B2545] hover:bg-[#F6F8FB] text-[#0B2545] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href={`mailto:${CONTACT_DETAILS.email || "ops@kclpakistan.com"}`}
                aria-label="Send email to KCL Operations Desk"
                title="Email Operations Desk"
                className="w-9 h-9 rounded-[4px] border border-[#CBD5E1] hover:border-[#0B2545] hover:bg-[#F6F8FB] text-[#0B2545] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
            </div>

            {/* 24/7 Operations Desk Live Clocks & AFPA Badge */}
            <FooterLiveClocks />
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-[#0B2545]">
              Services
            </h2>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link
                  href="/services/overflight-permits"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Flight Permission
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ground-handling"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Ground Handling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/inflight-catering"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Inflight Catering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aviation-fuel"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Aviation Fuel
                </Link>
              </li>
              <li>
                <Link
                  href="/services/crew-logistics"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Crew Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-support"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  24/7 Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Permits and Filing */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-[#0B2545]">
              Permits and Filing
            </h2>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link
                  href="/pakistan/flight-permissions"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Pakistan Flight Permissions
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule-filing"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Schedule Filing
                </Link>
              </li>
              <li>
                <Link
                  href="/non-schedule-filing"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Non-Schedule and Charter
                </Link>
              </li>
              <li>
                <Link
                  href="/services/overflight-permit-pakistan"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Overflight Permit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landing-permit-pakistan"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Landing Permit Guide
                </Link>
              </li>
              <li>
                <a
                  href="/files/kcl-permit-request-checklist.pdf"
                  download
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors inline-flex items-center gap-1"
                >
                  Permit Checklist (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources and Company */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-[#0B2545]">
              Resources and Company
            </h2>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link
                  href="/aviation-resources"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Aviation Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Aviation Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Aviation Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  About KCL
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-support"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[14px] text-[#5C6B7A]">
          <div className="space-y-1">
            <p className="font-medium text-[#16202B]">
              © {currentYear} Kashmir Corporation (Pvt.) Ltd.
            </p>
            <p className="text-xs text-[#5C6B7A]">
              Approvals are decided by the relevant civil aviation authorities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
