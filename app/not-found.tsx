import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Page Not Found (404)",
  description:
    "The requested flight operations page could not be found. Access KCL flight permission, ground handling, or 24/7 dispatch support.",
  path: "/404",
});

export default function NotFound() {
  return (
    <section className="py-20 bg-[#F6F8FB] border-b border-[#CBD5E1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="kcl-card bg-white border border-[#CBD5E1] p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] mb-2">
            HTTP 404 — WAYPOINT NOT FOUND
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2545] mb-4">
            This route or document is not in our flight directory
          </h1>
          <p className="text-[#16202B] mb-8">
            If you need an immediate Pakistan overflight or landing permit, our
            24/7 operations desk is ready to assist. Choose one of the primary
            operational sections below:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Link
              href="/request-permit"
              className="kcl-btn-primary p-4 flex items-center justify-between rounded-[2px]"
            >
              <span className="font-bold">Request a Flight Permit</span>
              <span className="font-mono">→</span>
            </Link>
            <Link
              href="/services/flight-permission"
              className="kcl-btn-outline-navy p-4 flex items-center justify-between rounded-[2px]"
            >
              <span className="font-semibold">Flight Permission Hub</span>
              <span className="font-mono">→</span>
            </Link>
            <Link
              href="/services/ground-handling"
              className="kcl-btn-outline-navy p-4 flex items-center justify-between rounded-[2px]"
            >
              <span className="font-semibold">Ground Handling Services</span>
              <span className="font-mono">→</span>
            </Link>
            <Link
              href="/permit-directory/pakistan"
              className="kcl-btn-outline-navy p-4 flex items-center justify-between rounded-[2px]"
            >
              <span className="font-semibold">Pakistan Permit Guide</span>
              <span className="font-mono">→</span>
            </Link>
          </div>

          <Link
            href="/"
            className="kcl-link text-sm font-semibold text-[#0B2545]"
          >
            Return to KCL Operations Home
          </Link>
        </div>
      </div>
    </section>
  );
}

