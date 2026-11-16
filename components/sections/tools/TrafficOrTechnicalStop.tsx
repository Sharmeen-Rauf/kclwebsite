"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";

type StopType = "traffic" | "technical";

export function TrafficOrTechnicalStop() {
  const [selectedStop, setSelectedStop] = useState<StopType>("traffic");
  const [airportIcao, setAirportIcao] = useState<string>("");

  const requestHref = `/request-flight-support?service=landing-permits&stopType=${encodeURIComponent(
    selectedStop === "traffic" ? "Traffic stop" : "Technical stop"
  )}${airportIcao.trim() ? `&airport=${encodeURIComponent(airportIcao.trim().toUpperCase())}` : ""}`;

  const faqs = SERVICE_TOOL_FAQS["landing-permits"] || [];

  return (
    <section
      aria-labelledby="traffic-technical-heading"
      className="py-10 lg:py-12 bg-[#F8FAFC] border-b border-[#CBD5E1]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 shadow-2xs space-y-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2
                id="traffic-technical-heading"
                className="text-2xl font-bold text-[#0B2545] mb-2"
              >
                Traffic Stop or Technical Stop? Know Which Applies
              </h2>
              <p className="text-base text-[#475569] leading-relaxed">
                The type of stop changes what you need to send. Pick what your flight will do on the ground.
              </p>
            </div>

            <div className="md:w-64 shrink-0">
              <label
                htmlFor="landing-stop-airport"
                className="block text-base font-medium text-[#0B2545] mb-1"
              >
                Destination airport (ICAO, optional)
              </label>
              <input
                id="landing-stop-airport"
                type="text"
                maxLength={4}
                placeholder="e.g. OPKC"
                value={airportIcao}
                onChange={(e) => setAirportIcao(e.target.value.toUpperCase())}
                className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              />
            </div>
          </div>

          {/* Two Large Selectable Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            role="radiogroup"
            aria-label="Select stop type"
          >
            <button
              type="button"
              role="radio"
              aria-checked={selectedStop === "traffic"}
              onClick={() => setSelectedStop("traffic")}
              className={`text-left p-5 rounded-[6px] border transition-colors cursor-pointer flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                selectedStop === "traffic"
                  ? "bg-[#0B2545] border-[#0B2545] text-white"
                  : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-[4px] flex items-center justify-center shrink-0 ${
                  selectedStop === "traffic"
                    ? "bg-white/15 text-white"
                    : "bg-white border border-[#CBD5E1] text-[#0B2545]"
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold">Traffic stop</div>
                <p
                  className={`text-base leading-snug ${
                    selectedStop === "traffic" ? "text-slate-100" : "text-[#475569]"
                  }`}
                >
                  Passengers or cargo get on or off the aircraft.
                </p>
              </div>
            </button>

            <button
              type="button"
              role="radio"
              aria-checked={selectedStop === "technical"}
              onClick={() => setSelectedStop("technical")}
              className={`text-left p-5 rounded-[6px] border transition-colors cursor-pointer flex items-start gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                selectedStop === "technical"
                  ? "bg-[#0B2545] border-[#0B2545] text-white"
                  : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-[4px] flex items-center justify-center shrink-0 ${
                  selectedStop === "technical"
                    ? "bg-white/15 text-white"
                    : "bg-white border border-[#CBD5E1] text-[#0B2545]"
                }`}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 22h12" />
                  <path d="M4 9h10" />
                  <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
                  <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
                </svg>
              </div>
              <div className="space-y-1">
                <div className="text-lg font-bold">Technical stop</div>
                <p
                  className={`text-base leading-snug ${
                    selectedStop === "technical" ? "text-slate-100" : "text-[#475569]"
                  }`}
                >
                  No passengers or cargo are boarded or offloaded; for example a fuel or crew stop.
                </p>
              </div>
            </button>
          </div>

          {/* Two-Column Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4" aria-live="polite">
            <div
              className={`rounded-[6px] border p-4 space-y-3 ${
                selectedStop === "traffic"
                  ? "bg-[#F8FAFC] border-2 border-[#0B2545]"
                  : "bg-white border-[#CBD5E1]"
              }`}
            >
              <h3 className="text-lg font-bold text-[#0B2545] border-b border-[#CBD5E1] pb-2">
                Traffic stop
              </h3>
              <div className="space-y-1">
                <div className="text-base font-semibold text-[#0B2545]">
                  What it means
                </div>
                <p className="text-base text-[#1E293B]">
                  Passengers or cargo are embarked or disembarked.
                </p>
              </div>
              <div className="space-y-1">
                <div className="text-base font-semibold text-[#0B2545]">
                  Information to prepare
                </div>
                <p className="text-base text-[#1E293B]">
                  Passenger or cargo details, manifest summary, receiving contact.
                </p>
              </div>
            </div>

            <div
              className={`rounded-[6px] border p-4 space-y-3 ${
                selectedStop === "technical"
                  ? "bg-[#F8FAFC] border-2 border-[#0B2545]"
                  : "bg-white border-[#CBD5E1]"
              }`}
            >
              <h3 className="text-lg font-bold text-[#0B2545] border-b border-[#CBD5E1] pb-2">
                Technical stop
              </h3>
              <div className="space-y-1">
                <div className="text-base font-semibold text-[#0B2545]">
                  What it means
                </div>
                <p className="text-base text-[#1E293B]">
                  The aircraft lands for operational reasons only.
                </p>
              </div>
              <div className="space-y-1">
                <div className="text-base font-semibold text-[#0B2545]">
                  Information to prepare
                </div>
                <p className="text-base text-[#1E293B]">
                  The reason for the stop and confirmation that nobody boards or leaves.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-base font-semibold text-[#0B2545]">
                Common to both
              </div>
              <p className="text-base text-[#1E293B] leading-snug">
                Aircraft registration and type, operator, UTC arrival and departure, destination airport (ICAO), aircraft documents.
              </p>
            </div>
            <div>
              <div className="text-base font-semibold text-[#0B2545]">
                Often arranged with it
              </div>
              <p className="text-base text-[#1E293B] leading-snug">
                Ground handling, fuel, catering, crew hotel and transport.
              </p>
            </div>
          </div>

          <p className="text-base text-[#475569]">
            Reference only. Rules differ by country and by type of operation. We confirm what applies to your flight.
          </p>

          {/* Quick Questions + Action Button */}
          <div className="pt-4 border-t border-[#CBD5E1] flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              {faqs.map((item) => (
                <div key={item.question} className="space-y-1">
                  <h3 className="text-base font-bold text-[#0B2545]">
                    {item.question}
                  </h3>
                  <p className="text-base text-[#475569] leading-snug">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="shrink-0">
              <Link
                href={requestHref}
                className="bg-[#0B2545] hover:bg-[#133661] text-white font-semibold text-base px-6 py-3 rounded-[4px] inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                <span>Start My Request</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

