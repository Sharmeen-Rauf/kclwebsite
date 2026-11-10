import React from "react";
import Image from "next/image";
import { REAL_CLIENTS } from "@/content/clients";

export function GroundHandlingLogoSlider() {
  // Loop list for smooth continuous scrolling
  const approvedClients = REAL_CLIENTS;
  const loopGroup = [...approvedClients, ...approvedClients, ...approvedClients];

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545]">
          Trusted by Airlines Including
        </h2>
        <p className="text-sm sm:text-base text-[#5C6B7A]">
          Commercial carriers and international operators supported across our station and partner network.
        </p>
      </div>

      <div className="relative w-full overflow-hidden py-4 border-y border-[#CBD5E1]/60 bg-white">
        {/* Soft edge fade masks */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"
        />

        {/* Marquee Track */}
        <div className="flex w-max items-center gap-12 sm:gap-16 kcl-marquee-track hover:[animation-play-state:paused]">
          {loopGroup.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
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
      </div>
    </div>
  );
}

