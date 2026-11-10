import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_DATA } from "@/content/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Slim Heritage Bar Above Footer */}
      <div className="bg-[#081B33] border-t border-[#16375E] py-2.5 px-4 text-center">
        <Link
          href="/about"
          className="text-xs sm:text-[13px] text-slate-300 hover:text-white font-medium hover:underline underline-offset-4 transition-colors inline-flex items-center gap-1.5"
        >
          <span>Backed by the Kashmirwala Group, serving aviation since 1947.</span>
          <span aria-hidden="true" className="text-[#F4C400]">→</span>
        </Link>
      </div>

      <footer aria-label="Site Footer" className="bg-white text-[#16202B] relative overflow-hidden">
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
                Planning a Flight? Let&apos;s Get the Details Moving.
              </h2>
              <p className="text-[15px] sm:text-base text-slate-200/90 leading-relaxed font-medium">
                Share your route, aircraft specifications, UTC schedule, and ground requirements. Our 24/7 operations desk will review authority pathways and confirm what we can arrange.
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-[#CBD5E1]">
          {/* Column 1: Brand, Description, Contact, Clocks */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block"
              aria-label="Kashmir Corporation (Pvt.) Ltd. Home"
            >
              <Image
                src="/img/kclf final logo.png"
                alt="KCL Flight Support — Kashmir Corporation (Pvt.) Ltd."
                width={170}
                height={69}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-[15px] text-[#5C6B7A] leading-relaxed">
              Flight permits and ground support for international operations,
              coordinated by Kashmir Corporation (Pvt.) Ltd.
            </p>

            {/* Contact Details */}
            <div className="space-y-2 pt-1 text-[14px] text-[#5C6B7A]">
              <div>
                <span className="font-semibold text-[#0B2545] block text-xs uppercase tracking-wider">Flight Operations Desk:</span>
                <a
                  href={`mailto:${CONTACT_DATA.opsEmail}`}
                  className="hover:text-[#0B2545] hover:underline underline-offset-4 font-mono text-xs text-[#0B2545] font-semibold"
                >
                  {CONTACT_DATA.opsEmail}
                </a>
              </div>
              <div className="flex flex-wrap gap-x-3 text-xs">
                <span>
                  <strong className="text-[#0B2545]">Info:</strong>{" "}
                  <a href={`mailto:${CONTACT_DATA.infoEmail}`} className="hover:text-[#0B2545] hover:underline font-mono">
                    {CONTACT_DATA.infoEmail}
                  </a>
                </span>
                <span>
                  <strong className="text-[#0B2545]">Support:</strong>{" "}
                  <a href={`mailto:${CONTACT_DATA.supportEmail}`} className="hover:text-[#0B2545] hover:underline font-mono">
                    {CONTACT_DATA.supportEmail}
                  </a>
                </span>
              </div>
              <div className="pt-0.5">
                <span className="font-semibold text-[#0B2545] block text-xs uppercase tracking-wider">Telephones:</span>
                <div className="flex flex-col gap-0.5 pt-0.5 font-mono text-xs text-[#0B2545]">
                  <a
                    href={`tel:${CONTACT_DATA.primaryPhone.replace(/\s+/g, "")}`}
                    className="hover:underline underline-offset-4"
                  >
                    {CONTACT_DATA.primaryPhone}
                  </a>
                  <a
                    href={`tel:${CONTACT_DATA.secondaryPhone.replace(/\s+/g, "")}`}
                    className="hover:underline underline-offset-4"
                  >
                    {CONTACT_DATA.secondaryPhone}
                  </a>
                </div>
              </div>
              <p className="pt-1 text-xs text-[#5C6B7A] leading-relaxed">
                <span className="font-semibold text-[#0B2545] block text-xs uppercase tracking-wider">Head Office:</span>
                {CONTACT_DATA.address}
              </p>
            </div>

            {/* Social Channels (LinkedIn, Facebook, Instagram) */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={CONTACT_DATA.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KCL on LinkedIn"
                title="KCL on LinkedIn"
                className="w-8 h-8 rounded-[4px] border border-[#CBD5E1] hover:border-[#0B2545] hover:bg-[#F6F8FB] text-[#0B2545] flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href={CONTACT_DATA.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KCL on Facebook"
                title="KCL on Facebook"
                className="w-8 h-8 rounded-[4px] border border-[#CBD5E1] hover:border-[#0B2545] hover:bg-[#F6F8FB] text-[#0B2545] flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>

              <a
                href={CONTACT_DATA.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="KCL on Instagram"
                title="KCL on Instagram"
                className="w-8 h-8 rounded-[4px] border border-[#CBD5E1] hover:border-[#0B2545] hover:bg-[#F6F8FB] text-[#0B2545] flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold text-[#0B2545]">
              Services
            </h2>
            <ul className="space-y-2.5 text-[15px]">
              <li>
                <Link
                  href="/services/flight-permissions"
                  className="text-[#5C6B7A] hover:text-[#0B2545] hover:underline underline-offset-4 transition-colors"
                >
                  Flight Permissions
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

        {/* Licensed and Memberships Row (Quiet, text-only, no big logos) */}
        <div className="py-4 border-b border-[#CBD5E1] text-xs text-[#5C6B7A] flex flex-wrap items-center justify-center md:justify-start gap-1.5">
          <span className="font-semibold text-[#0B2545]">Licensed and a member of:</span>
          <span>AFPA (Pakistan Civil Aviation Authority) | DTS | FAGSA | TAAP | Karachi Chamber of Commerce and Industry | Air Cargo Association</span>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[14px] text-[#5C6B7A]">
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

      {/* Light Aeronautical Airplane Watermark in Footer Bottom-Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-10 -right-10 sm:-bottom-6 sm:-right-6 md:bottom-2 md:right-4 w-[280px] sm:w-[380px] md:w-[460px] h-[280px] sm:h-[380px] md:h-[460px] opacity-[0.045] text-[#0B2545] z-0 overflow-hidden"
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Curving Trailing Flight Path Airway Arc */}
          <path
            d="M 20 480 C 140 420, 260 300, 380 140"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <path
            d="M 50 495 C 170 435, 290 315, 410 155"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity="0.6"
          />

          {/* Compass Heading & Radar Range Arc */}
          <circle
            cx="340"
            cy="190"
            r="140"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="3 5"
            opacity="0.5"
          />
          <circle
            cx="340"
            cy="190"
            r="80"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 6"
            opacity="0.7"
          />

          {/* Waypoint Crosshair Blip with subtle brand amber touch */}
          <g transform="translate(230, 310)">
            <circle cx="0" cy="0" r="10" stroke="#B88200" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.8" />
            <circle cx="0" cy="0" r="3" fill="#B88200" opacity="0.8" />
            <text x="14" y="4" fontSize="10" fontFamily="monospace" fill="currentColor" fontWeight="bold">
              WPT · 24°N
            </text>
          </g>

          {/* Modern Widebody Airliner Climbing Angled Along Airway */}
          <g transform="translate(360, 160) rotate(-35)">
            {/* Contrails trailing from wingtips */}
            <line x1="-120" y1="25" x2="-120" y2="200" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 6" opacity="0.6" />
            <line x1="120" y1="25" x2="120" y2="200" stroke="currentColor" strokeWidth="1.25" strokeDasharray="4 6" opacity="0.6" />

            {/* Jet Engine Wakes */}
            <line x1="-48" y1="-5" x2="-48" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />
            <line x1="48" y1="-5" x2="48" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" opacity="0.5" />

            {/* Fuselage & Wings Silhouette */}
            <path
              d="
                M 0 -115
                C 3 -105, 6 -70, 7 -35
                L 115 22
                C 120 24, 121 29, 118 32
                L 110 32
                L 9 -5
                L 9 60
                L 44 82
                C 47 84, 47 87, 44 88
                L 7 79
                L 7 100
                C 7 105, 0 108, 0 108
                C 0 108, -7 105, -7 100
                L -7 79
                L -44 88
                C -47 87, -47 84, -44 82
                L -9 60
                L -9 -5
                L -110 32
                L -118 32
                C -121 29, -120 24, -115 22
                L -7 -35
                C -6 -70, -3 -105, 0 -115
                Z
              "
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Engines */}
            <rect x="-52" y="-18" width="8" height="26" rx="3" fill="currentColor" opacity="0.8" />
            <rect x="44" y="-18" width="8" height="26" rx="3" fill="currentColor" opacity="0.8" />

            {/* Cockpit Window */}
            <path d="M -4 -90 C -2 -93, 2 -93, 4 -90 L 3 -86 C 1 -88, -1 -88, -3 -86 Z" fill="currentColor" />
          </g>
        </svg>
      </div>
    </footer>
    </>
  );
}
