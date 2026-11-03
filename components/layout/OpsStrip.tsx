import React from "react";
import Link from "next/link";
import { LiveClocks } from "./LiveClocks";

export function OpsStrip() {
  return (
    <div className="bg-[#061527] text-slate-200 border-b border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4">
        {/* Left: Phone, Email & Live Clocks (Single-Line Clean Layout) */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link
            href="/customer-support"
            className="inline-flex items-center gap-2 text-slate-200 hover:text-[#E8A200] transition-colors font-medium"
            title="24/7 Flight Operations & Customer Support Desk"
          >
            <svg
              className="w-3.5 h-3.5 text-[#E8A200] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-[11px] sm:text-xs font-medium tracking-wide">
              24/7 Operations Support Desk
            </span>
          </Link>

          <span className="text-slate-700 hidden sm:inline" aria-hidden="true">
            |
          </span>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 text-slate-200 hover:text-[#E8A200] transition-colors font-medium"
            title="Send Flight Permission or Ground Support Inquiry"
          >
            <svg
              className="w-3.5 h-3.5 text-[#E8A200] shrink-0"
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
            <span className="text-[11px] sm:text-xs font-medium tracking-wide">
              Flight Operations &amp; Permit Inquiries
            </span>
          </Link>

          <span className="text-slate-700 hidden xl:inline" aria-hidden="true">
            |
          </span>

          <LiveClocks />
        </div>

        {/* Right: Circular Amber Social Icons & Top CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1.5">
            {/* Official KCL LinkedIn */}
            <a
              href="https://www.linkedin.com/company/kcl-international-flight-support/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KCL International Flight Support on LinkedIn"
              title="KCL International Flight Support — LinkedIn"
              className="w-7 h-7 rounded-full bg-[#E8A200] hover:bg-[#ffba1a] text-[#061527] flex items-center justify-center transition-transform hover:scale-105"
            >
              <svg
                className="w-3.5 h-3.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Direct Email / Contact */}
            <Link
              href="/contact"
              aria-label="Contact KCL Operations by Email"
              title="Email / Contact KCL"
              className="w-7 h-7 rounded-full bg-[#E8A200] hover:bg-[#ffba1a] text-[#061527] flex items-center justify-center transition-transform hover:scale-105"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </Link>

            {/* 24/7 Operations Support */}
            <Link
              href="/customer-support"
              aria-label="24/7 Operations Support"
              title="24/7 Customer & Flight Support"
              className="w-7 h-7 rounded-full bg-[#E8A200] hover:bg-[#ffba1a] text-[#061527] flex items-center justify-center transition-transform hover:scale-105"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </Link>
          </div>

          <Link
            href="/request-flight-support"
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 bg-[#E8A200] hover:bg-[#ffba1a] text-[#061527] font-extrabold text-[11px] uppercase tracking-wider rounded-[3px] transition-colors whitespace-nowrap"
          >
            Request Flight Support
          </Link>
        </div>
      </div>
    </div>
  );
}
