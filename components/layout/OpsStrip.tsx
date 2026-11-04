import React from "react";
import Link from "next/link";

export function OpsStrip() {
  return (
    <div className="bg-[#0B2545] text-slate-100 border-b border-[#1E3A5F] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
        {/* Left: Operations Support & Inquiry Links */}
        <div className="flex items-center gap-4 sm:gap-5 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link
            href="/customer-support"
            className="kcl-link inline-flex items-center gap-2 text-slate-100 hover:text-white transition-colors font-medium"
            title="24/7 Flight Operations & Customer Support Desk"
          >
            <svg
              className="w-3.5 h-3.5 text-[var(--accent)] shrink-0"
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
            <span className="text-[11px] sm:text-xs font-medium">
              24/7 Flight Operations Desk
            </span>
          </Link>

          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">
            |
          </span>

          <Link
            href="/contact"
            className="kcl-link hidden sm:inline-flex items-center gap-2 text-slate-100 hover:text-white transition-colors font-medium"
            title="Send Flight Permission or Ground Support Inquiry"
          >
            <svg
              className="w-3.5 h-3.5 text-[var(--accent)] shrink-0"
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
            <span className="text-[11px] sm:text-xs font-medium">
              Flight Permits &amp; Ground Support Inquiries
            </span>
          </Link>
        </div>

        {/* Right: KCL Brand-Styled Social / Action Icons & Quick Links */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-1.5">
            {/* Official KCL LinkedIn */}
            <a
              href="https://www.linkedin.com/company/kcl-international-flight-support/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KCL International Flight Support on LinkedIn"
              title="KCL International Flight Support — LinkedIn"
              className="w-7 h-7 rounded-[2px] bg-[#133661] border border-slate-600/80 text-slate-100 hover:border-[var(--accent)] hover:text-white flex items-center justify-center transition-colors"
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
              title="Contact KCL Operations"
              className="w-7 h-7 rounded-[2px] bg-[#133661] border border-slate-600/80 text-slate-100 hover:border-[var(--accent)] hover:text-white flex items-center justify-center transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
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
            </Link>

            {/* 24/7 Operations Support */}
            <Link
              href="/customer-support"
              aria-label="24/7 Operations Support"
              title="24/7 Customer & Flight Support"
              className="w-7 h-7 rounded-[2px] bg-[#133661] border border-slate-600/80 text-slate-100 hover:border-[var(--accent)] hover:text-white flex items-center justify-center transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
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
            </Link>
          </div>

          <a
            href="/files/kcl-permit-request-checklist.pdf"
            download
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-[#133661] hover:bg-[#1b4579] text-slate-100 border border-slate-600/80 border-b-2 border-b-[var(--accent)] font-mono text-[11px] rounded-[2px] transition-colors whitespace-nowrap"
          >
            <span className="text-white font-bold">PDF</span>
            <span>Permit Checklist</span>
          </a>
        </div>
      </div>
    </div>
  );
}
