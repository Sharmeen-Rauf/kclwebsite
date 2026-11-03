import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/utils";
import { LiveClocks } from "./LiveClocks";

export function OpsStrip() {
  return (
    <div className="bg-[#07192F] text-slate-200 border-b border-slate-700/70 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="inline-flex items-center gap-2 font-semibold text-white">
            <span
              className="h-2 w-2 rounded-full bg-[#E8A200]"
              aria-hidden="true"
            />
            {SITE_CONFIG.authorityBadge}
          </span>
          <span className="hidden md:inline text-slate-400" aria-hidden="true">
            |
          </span>
          <span className="text-slate-300">
            Pakistan Flight Permission Specialization · International Trip Coordination
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
          <LiveClocks />
          <span className="hidden lg:inline text-slate-500" aria-hidden="true">
            |
          </span>
          <div className="flex items-center gap-3 font-mono text-xs">
            <span
              className="text-slate-300"
              title="Confirmed operations phone pending management verification"
            >
              Tel: {SITE_CONFIG.opsPhonePlaceholder}
            </span>
            <span
              className="hidden sm:inline text-slate-300"
              title="Confirmed operations email pending management verification"
            >
              {SITE_CONFIG.opsEmailPlaceholder}
            </span>
            <Link
              href="/contact"
              className="text-slate-200 hover:text-[#E8A200] font-sans font-medium underline decoration-slate-600 underline-offset-4"
            >
              Contact KCL
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
