"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { KCL_FACTS } from "@/content/facts";

export function FuelQuoteForm() {
  const router = useRouter();
  const [aircraftType, setAircraftType] = useState("");
  const [airportIcao, setAirportIcao] = useState("");
  const [dateUtc, setDateUtc] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState<"USG" | "Litres" | "kg" | "lb">("USG");
  const [paymentMethod, setPaymentMethod] = useState<
    "Prepayment" | "Fuel release" | "Credit (subject to approval)"
  >("Prepayment");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const notes = `Fuel Quote Request — Product: Jet A-1 | Uplift: ${
      quantity || "TBD"
    } ${unit} | Payment preference: ${paymentMethod}`;
    const params = new URLSearchParams({
      service: "aviation-fuel",
      routeTo: airportIcao.toUpperCase(),
      dateUtc,
      notes,
    });
    if (aircraftType) {
      params.set("aircraft", aircraftType);
    }
    router.push(`/request-flight-support?${params.toString()}`);
  };

  return (
    <section
      aria-labelledby="fuel-quote-heading"
      className="py-10 lg:py-12 bg-[#F8FAFC] border-t border-b border-[#CBD5E1]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-2 border-b border-[#CBD5E1] pb-4">
            <span className="text-sm font-bold text-[#B88200] block">
              Jet A-1 Fuel Quote
            </span>
            <h2
              id="fuel-quote-heading"
              className="text-2xl font-bold text-[#0B2545]"
            >
              Request an Aviation Fuel Quote
            </h2>
            <p className="text-base text-[#475569]">
              {KCL_FACTS.fuel.summary}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="fq-aircraft" className="block text-sm font-semibold text-[#0B2545]">
                Aircraft type *
              </label>
              <input
                id="fq-aircraft"
                type="text"
                required
                value={aircraftType}
                onChange={(e) => setAircraftType(e.target.value)}
                placeholder="e.g. B777-300ER, G650"
                className="w-full border border-[#CBD5E1] rounded-[4px] px-3.5 py-2.5 text-base text-[#0B2545] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0B2545]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="fq-icao" className="block text-sm font-semibold text-[#0B2545]">
                Airport ICAO *
              </label>
              <input
                id="fq-icao"
                type="text"
                required
                maxLength={4}
                value={airportIcao}
                onChange={(e) => setAirportIcao(e.target.value.toUpperCase())}
                placeholder="e.g. OPKC"
                className="w-full border border-[#CBD5E1] rounded-[4px] px-3.5 py-2.5 text-base text-[#0B2545] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0B2545]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="fq-date" className="block text-sm font-semibold text-[#0B2545]">
                Planned date (UTC) *
              </label>
              <input
                id="fq-date"
                type="date"
                required
                value={dateUtc}
                onChange={(e) => setDateUtc(e.target.value)}
                className="w-full border border-[#CBD5E1] rounded-[4px] px-3.5 py-2.5 text-base text-[#0B2545] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0B2545]"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="fq-qty" className="block text-sm font-semibold text-[#0B2545]">
                Uplift quantity *
              </label>
              <div className="flex gap-2">
                <input
                  id="fq-qty"
                  type="number"
                  min={1}
                  required
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="e.g. 5000"
                  className="w-full border border-[#CBD5E1] rounded-[4px] px-3.5 py-2.5 text-base text-[#0B2545] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0B2545]"
                />
                <select
                  aria-label="Uplift unit"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as typeof unit)}
                  className="border border-[#CBD5E1] rounded-[4px] px-3 py-2.5 text-base text-[#0B2545] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0B2545]"
                >
                  <option value="USG">USG</option>
                  <option value="Litres">Litres</option>
                  <option value="kg">kg</option>
                  <option value="lb">lb</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="fq-payment" className="block text-sm font-semibold text-[#0B2545]">
                Payment method
              </label>
              <select
                id="fq-payment"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value as typeof paymentMethod)}
                className="w-full border border-[#CBD5E1] rounded-[4px] px-3.5 py-2.5 text-base text-[#0B2545] bg-[#F8FAFC] focus:bg-white focus:outline-none focus:border-[#0B2545]"
              >
                <option value="Prepayment">Prepayment (confirmed per airport)</option>
                <option value="Fuel release">Fuel release</option>
                <option value="Credit (subject to approval)">Credit (subject to approval)</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-[#F4C400] hover:bg-[#DFB200] text-[#0B2545] font-bold text-base min-h-[46px] px-6 py-2.5 rounded-[4px] transition-colors cursor-pointer"
              >
                Request Fuel Quote →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
