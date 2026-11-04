import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-[#0B2545] text-slate-200 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-700/80">
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="inline-block bg-white px-4 py-2.5 rounded-[2px] border border-slate-300 shadow-2xs"
              aria-label="Kashmir Corporation (Pvt.) Ltd. Home"
            >
              <Image
                src="/img/imgi_2_Sign Logo1@3x.png"
                alt="KCL Flight Permission — Kashmir Corporation (Pvt.) Ltd. Official Logo"
                width={170}
                height={68}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              International flight support and aviation services built on
              KCL&apos;s six core operational pillars: Flight Permission
              Facilitation, Ground Handling, Catering Services, Fuel Supply,
              Accommodation Arrangements, and 24/7 Support. Associated with
              Kashmirwala Group (heritage dating to 1947).
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
            <h2 className="text-xs font-mono uppercase tracking-wider text-white font-semibold pb-1.5 border-b border-slate-700">
              Six Core Services
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/pakistan/flight-permissions"
                  className="kcl-link hover:text-white transition-colors font-semibold text-white"
                >
                  01 · Flight Permission Facilitation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ground-handling"
                  className="kcl-link hover:text-white transition-colors"
                >
                  02 · Ground Handling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/inflight-catering"
                  className="kcl-link hover:text-white transition-colors"
                >
                  03 · Catering Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aviation-fuel"
                  className="kcl-link hover:text-white transition-colors"
                >
                  04 · Fuel Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services/crew-logistics"
                  className="kcl-link hover:text-white transition-colors"
                >
                  05 · Accommodation Arrangements
                </Link>
              </li>
              <li>
                <Link
                  href="/services/operations-support"
                  className="kcl-link hover:text-white transition-colors"
                >
                  06 · 24/7 Operational Support
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-700/80">
                <Link
                  href="/services/international-flight-support"
                  className="kcl-link hover:text-white transition-colors"
                >
                  International Trip Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/overflight-permits"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Overflight Permits
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landing-permits"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Landing Permits
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-white font-semibold pb-1.5 border-b border-slate-700">
              Scheduled, Non-Scheduled &amp; Resources
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/schedule-filing"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Schedule Flight Filing (Pakistan)
                </Link>
              </li>
              <li>
                <Link
                  href="/non-schedule-filing"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Non-Schedule &amp; Charter Filing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/overflight-permit-pakistan"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Pakistan Overflight Permit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landing-permit-pakistan"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Pakistan Landing Permit Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/permit-directory/pakistan"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Pakistan Airspace &amp; FIR Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/aviation-resources"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Aviation Resources &amp; Checklists
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Aviation Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Reference Utilities (ICAO / UTC)
                </Link>
              </li>
              <li>
                <a
                  href="/files/kcl-permit-request-checklist.pdf"
                  download
                  className="kcl-link text-white font-medium"
                >
                  Download Flight Inquiry Checklist (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-white font-semibold pb-1.5 border-b border-slate-700">
              Company &amp; Inquiries
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="kcl-link hover:text-white transition-colors"
                >
                  About KCL
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="kcl-link hover:text-white transition-colors"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Operator Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-support"
                  className="kcl-link hover:text-white transition-colors"
                >
                  24/7 Customer Support
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="kcl-link hover:text-white transition-colors"
                >
                  Contact KCL
                </Link>
              </li>
              <li>
                <Link
                  href="/request-flight-support"
                  className="kcl-link hover:text-white font-semibold text-white transition-colors"
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
