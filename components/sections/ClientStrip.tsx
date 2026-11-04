import React from "react";
import Image from "next/image";
import Link from "next/link";
import { REAL_CLIENTS } from "@/content/clients";

interface ClientStripProps {
  compact?: boolean;
}

export function ClientStrip({ compact = false }: ClientStripProps) {
  return (
    <section
      aria-label="Published Airline References"
      className="bg-white border-y border-[#CBD5E1] py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-[#5C6B7A] font-semibold">
              PUBLISHED CORPORATE REFERENCES · SUBJECT TO MANAGEMENT REVIEW
            </p>
            <h2 className="text-lg sm:text-xl font-bold text-[#0B2545]">
              Airlines &amp; Operators Referenced on KCL&apos;s Existing Corporate Site
            </h2>
          </div>
          {!compact && (
            <Link
              href="/clients"
              className="text-sm font-semibold text-[#0B2545] hover:text-[#133661] underline underline-offset-4"
            >
              Review operator profile &amp; verification notes →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {REAL_CLIENTS.map((client) => (
            <div
              key={client.icao}
              className="kcl-card bg-[#F6F8FB] border border-[#CBD5E1] p-4 flex flex-col justify-between"
            >
              <div className="mb-3 bg-white border border-slate-200 p-3 flex items-center justify-center h-20">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={220}
                  height={64}
                  className="max-h-11 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-1 text-xs border-t border-slate-200 pt-2">
                <span className="font-bold text-[#0B2545] truncate">
                  {client.name}
                </span>
                <span className="font-mono text-[11px] text-[#5C6B7A] shrink-0">
                  {client.icao} / {client.iata}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
