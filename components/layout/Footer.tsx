import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#0B2545] text-slate-200 border-t-2 border-[#E8A200]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/80">
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#133661] border border-[#E8A200]/70 px-3 py-1 text-xs font-mono text-[#E8A200]">
              {SITE_CONFIG.authorityBadge}
            </div>
            <p className="text-lg font-bold text-white tracking-tight">
              {SITE_CONFIG.name}
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              International flight support and aviation services built on KCL&apos;s
              six core operational pillars: Flight Permission Facilitation,
              Ground Handling, Catering Services, Fuel Supply, Accommodation
              Arrangements, and 24/7 Support. Associated with Kashmirwala Group
              (heritage dating to 1947).
            </p>
            <div className="pt-2 space-y-1 font-mono text-xs text-slate-300">
              <p>Operations Tel: {SITE_CONFIG.opsPhonePlaceholder}</p>
              <p>Operations Email: {SITE_CONFIG.opsEmailPlaceholder}</p>
              <p>Address: {SITE_CONFIG.addressPlaceholder}</p>
              <p className="text-[11px] text-slate-400 font-sans pt-1">
                Public contact details and AFPA registration references are held
                as placeholders pending management reconciliation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#E8A200] font-semibold">
              Six Core Services
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pakistan/flight-permissions"
                  className="hover:text-[#E8A200] transition-colors font-semibold text-white"
                >
                  01 · Flight Permission Facilitation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ground-handling"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  02 · Ground Handling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/inflight-catering"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  03 · Catering Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aviation-fuel"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  04 · Fuel Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services/crew-logistics"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  05 · Accommodation Arrangements
                </Link>
              </li>
              <li>
                <Link
                  href="/services/operations-support"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  06 · 24/7 Operational Support
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-700/80">
                <Link
                  href="/services/international-flight-support"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  International Trip Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/overflight-permits"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Overflight Permits
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landing-permits"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Landing Permits
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#E8A200] font-semibold">
              Scheduled, Non-Scheduled &amp; Resources
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/schedule-filing"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Schedule Flight Filing (Pakistan)
                </Link>
              </li>
              <li>
                <Link
                  href="/non-schedule-filing"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Non-Schedule &amp; Charter Filing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/overflight-permit-pakistan"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Pakistan Overflight Permit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landing-permit-pakistan"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Pakistan Landing Permit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/permit-directory/pakistan"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Pakistan Airspace &amp; FIR Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/aviation-resources"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Aviation Resources &amp; Checklists
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Aviation Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Reference Utilities (ICAO / UTC)
                </Link>
              </li>
              <li>
                <a
                  href="/files/kcl-permit-request-checklist.pdf"
                  download
                  className="text-[#E8A200] hover:underline font-medium"
                >
                  Download Flight Inquiry Checklist (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#E8A200] font-semibold">
              Company &amp; Inquiries
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  About KCL
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Operator Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-support"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  24/7 Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#E8A200] transition-colors"
                >
                  Contact KCL
                </Link>
              </li>
              <li>
                <Link
                  href="/request-flight-support"
                  className="hover:text-[#E8A200] font-semibold text-white transition-colors"
                >
                  Request Flight Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
              reserved. KCL coordinates operational flight support requests;
              aviation authorities and service providers retain approval and
              delivery decisions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-white transition-colors font-mono"
            >
              sitemap.xml
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
