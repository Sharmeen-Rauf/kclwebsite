import React from "react";
import Link from "next/link";
import { CONTACT_DATA } from "@/content/contact";

export function OpsStrip() {
  return (
    <div className="bg-[#0B2545] text-slate-100 border-b border-[#1E3A5F] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-4">
        {/* Left: 24/7 Operations Desk, Phones & Email */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link
            href="/customer-support"
            className="kcl-link inline-flex items-center gap-1.5 text-slate-100 hover:text-white transition-colors font-medium shrink-0"
            title="24/7 Flight Operations Desk"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-semibold">
              24/7 Ops Desk:
            </span>
          </Link>

          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-200">
            <a
              href={`tel:${CONTACT_DATA.primaryPhone.replace(/\s+/g, "")}`}
              className="hover:text-white hover:underline underline-offset-2 transition-colors font-mono"
            >
              {CONTACT_DATA.primaryPhone}
            </a>
            <span className="text-slate-500">|</span>
            <a
              href={`tel:${CONTACT_DATA.secondaryPhone.replace(/\s+/g, "")}`}
              className="hidden md:inline hover:text-white hover:underline underline-offset-2 transition-colors font-mono"
            >
              {CONTACT_DATA.secondaryPhone}
            </a>
            <span className="text-slate-500 hidden md:inline">|</span>
            <a
              href={`mailto:${CONTACT_DATA.opsEmail}`}
              className="hover:text-white hover:underline underline-offset-2 transition-colors font-mono"
            >
              {CONTACT_DATA.opsEmail}
            </a>
          </div>
        </div>

        {/* Right: KCL Brand-Styled Social Links & Checklist PDF */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="flex items-center gap-1.5">
            {/* LinkedIn */}
            <a
              href={CONTACT_DATA.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KCL on LinkedIn"
              title="KCL on LinkedIn"
              className="w-7 h-7 rounded-[2px] bg-[#133661] border border-slate-600/80 text-slate-100 hover:border-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={CONTACT_DATA.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KCL on Facebook"
              title="KCL on Facebook"
              className="w-7 h-7 rounded-[2px] bg-[#133661] border border-slate-600/80 text-slate-100 hover:border-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={CONTACT_DATA.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KCL on Instagram"
              title="KCL on Instagram"
              className="w-7 h-7 rounded-[2px] bg-[#133661] border border-slate-600/80 text-slate-100 hover:border-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>

          <a
            href="/files/kcl-permit-request-checklist.pdf"
            download
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 bg-[#133661] hover:bg-[#1b4579] text-slate-100 border border-slate-600/80 font-mono text-[11px] rounded-[2px] transition-colors whitespace-nowrap"
          >
            <span className="text-white font-bold">PDF</span>
            <span>Permit Checklist</span>
          </a>
        </div>
      </div>
    </div>
  );
}
