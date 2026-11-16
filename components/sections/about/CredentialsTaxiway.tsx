"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export interface CredentialBoard {
  slug: string;
  abbr: string;
  title: string;
  authority: string;
  logoSrc: string | null;
}

interface CredentialsTaxiwayProps {
  credentials: CredentialBoard[];
}

export function CredentialsTaxiway({ credentials }: CredentialsTaxiwayProps) {
  const [isTabHidden, setIsTabHidden] = useState(false);

  useEffect(() => {
    const onVisibilityChange = () => {
      setIsTabHidden(document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const renderBoard = (item: CredentialBoard, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${item.slug}`}
      tabIndex={keyPrefix === "primary" ? 0 : -1}
      className="group shrink-0 w-[290px] sm:w-[320px] bg-[#0B2545] border-2 border-white/80 rounded-[8px] px-5 py-4 flex items-center gap-4 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071930]"
    >
      <div className="w-14 h-14 rounded-[6px] bg-white/10 border border-white/25 flex items-center justify-center shrink-0 overflow-hidden">
        {item.logoSrc ? (
          <Image
            src={item.logoSrc}
            alt={`${item.title} logo`}
            width={44}
            height={44}
            className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        ) : (
          <span className="text-base font-bold text-white tracking-tight">
            {item.abbr}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <div className="text-base font-bold text-white leading-snug">
          {item.title}
        </div>
        <div className="text-base text-slate-300 leading-snug mt-0.5">
          {item.authority}
        </div>
      </div>
    </div>
  );

  return (
    <section
      aria-labelledby="credentials-taxiway-heading"
      className="relative overflow-hidden bg-[#071930] text-white py-12 sm:py-16 border-b border-slate-800"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="max-w-3xl">
          <h2
            id="credentials-taxiway-heading"
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Licences and Memberships
          </h2>
          <p className="text-base text-slate-200 mt-2">
            KCL operates under official regulatory credentials and recognized aviation trade memberships.
          </p>
        </div>

        {/* Taxiway Guidance Sign Track */}
        <div className="taxiway-signs-wrapper relative py-6 overflow-hidden">
          {/* Dashed Taxiway Centreline */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-white/25 pointer-events-none"
          />

          <div
            className={`taxiway-signs-track gap-5 relative z-10 ${
              isTabHidden ? "is-paused" : ""
            }`}
          >
            <div className="flex gap-5 pr-5">
              {credentials.map((item) => renderBoard(item, "primary"))}
            </div>
            <div className="flex gap-5 pr-5" aria-hidden="true">
              {credentials.map((item) => renderBoard(item, "dup"))}
            </div>
          </div>

          {/* Soft Sequence of Small White Approach Lights */}
          <div
            aria-hidden="true"
            className="mt-6 flex items-center justify-center gap-5 sm:gap-8"
          >
            {Array.from({ length: 12 }).map((_, idx) => (
              <span
                key={idx}
                style={{ animationDelay: `${idx * 200}ms` }}
                className="approach-light-dot w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.85)]"
              />
            ))}
          </div>
        </div>

        {/* Visually hidden real HTML table for SEO & screen readers */}
        <table className="sr-only">
          <caption>KCL Licences and Memberships</caption>
          <thead>
            <tr>
              <th scope="col">License / Organization</th>
              <th scope="col">Issuing Authority / Membership Body</th>
            </tr>
          </thead>
          <tbody>
            {credentials.map((item) => (
              <tr key={item.slug}>
                <td>{item.title}</td>
                <td>{item.authority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

