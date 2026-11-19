import React from "react";
import Image from "next/image";
import { REAL_CLIENTS } from "@/content/clients";

interface ClientStripProps {
  compact?: boolean;
  hideHeading?: boolean;
}

export function ClientStrip({ compact = false, hideHeading = false }: ClientStripProps) {
  const approvedClients = REAL_CLIENTS;

  return (
    <section
      aria-label="Trusted by Airlines"
      className={`bg-white border-y border-[#CBD5E1] ${compact ? "py-6" : "py-10 sm:py-12"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {!hideHeading && (
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
              Trusted by Airlines Including
            </h2>
            <p className="text-sm sm:text-base text-[#5C6B7A]">
              Commercial carriers and international operators supported across our station and partner network.
            </p>
          </div>
        )}

        <div className="relative w-full overflow-hidden py-4 border-y border-[#CBD5E1]/60 bg-white">
          {/* Soft edge fade masks */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
          />

          {/* Marquee Track: Continuous Smooth Linear Marquee Loop */}
          <div className="logo-marquee-track flex items-center">
            {/* First Half */}
            <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0">
              {approvedClients.map((client, idx) => (
                <div
                  key={`client-a-${client.icao}-${idx}`}
                  className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={140}
                    height={48}
                    className="h-9 sm:h-11 w-auto object-contain max-w-[130px]"
                  />
                </div>
              ))}
            </div>

            {/* Second Half (Duplicate for seamless infinite linear animation - aria-hidden with empty alt) */}
            <div className="flex items-center gap-12 sm:gap-16 pr-12 sm:pr-16 shrink-0" aria-hidden="true">
              {approvedClients.map((client, idx) => (
                <div
                  key={`client-b-${client.icao}-${idx}`}
                  className="flex items-center justify-center shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={client.logo}
                    alt=""
                    width={140}
                    height={48}
                    className="h-9 sm:h-11 w-auto object-contain max-w-[130px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
