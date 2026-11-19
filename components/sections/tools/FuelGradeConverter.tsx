"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";

type FuelGradeId = "jet-a1" | "ts-1" | "avgas-100ll" | "not-sure";
type FuelUnit = "litres" | "gallons" | "kilograms" | "pounds";

interface GradeInfo {
  id: FuelGradeId;
  label: string;
  description: string;
  aircraftExamples: string;
  typicalDensity: number | null;
}

const FUEL_GRADES: GradeInfo[] = [
  {
    id: "jet-a1",
    label: "Jet A-1",
    description:
      "Kerosene-type turbine fuel, the standard jet fuel at most airports worldwide. Freezing point limit of minus 47°C.",
    aircraftExamples: "Turbine jets and turboprops",
    typicalDensity: 0.8,
  },
  {
    id: "ts-1",
    label: "TS-1",
    description:
      "Kerosene-type turbine fuel used mainly in Russia and neighbouring countries.",
    aircraftExamples: "Turbine jets and turboprops",
    typicalDensity: 0.78,
  },
  {
    id: "avgas-100ll",
    label: "Avgas 100LL",
    description: "Low-lead gasoline for piston-engine aircraft.",
    aircraftExamples: "Piston singles and twins",
    typicalDensity: 0.72,
  },
  {
    id: "not-sure",
    label: "Not sure",
    description:
      "Check your aircraft flight manual or ask your operations team. Send us the aircraft type and we will help you confirm the grade with the supplier.",
    aircraftExamples: "Any aircraft — share aircraft type for confirmation",
    typicalDensity: null,
  },
];

const DENSITY_PRESETS = [
  { label: "Jet A-1 (0.80)", value: 0.8 },
  { label: "TS-1 (0.78)", value: 0.78 },
  { label: "Avgas (0.72)", value: 0.72 },
];

const LITRES_PER_US_GALLON = 3.785411784;
const KG_PER_POUND = 0.45359237;

function GradeIcon({ id }: { id: FuelGradeId }) {
  if (id === "jet-a1") {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
      </svg>
    );
  }
  if (id === "ts-1") {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
      </svg>
    );
  }
  if (id === "avgas-100ll") {
    return (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 22h12" />
        <path d="M4 9h10" />
        <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
        <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function FuelGradeConverter() {
  const [selectedGrade, setSelectedGrade] = useState<FuelGradeId>("jet-a1");
  const [quantityInput, setQuantityInput] = useState<string>("5000");
  const [unit, setUnit] = useState<FuelUnit>("litres");
  const [densityInput, setDensityInput] = useState<string>("0.80");

  const parsedQty = Math.max(0, parseFloat(quantityInput) || 0);
  const parsedDensity = Math.max(0.1, parseFloat(densityInput) || 0.8);

  const conversions = useMemo(() => {
    let litres = 0;
    if (unit === "litres") {
      litres = parsedQty;
    } else if (unit === "gallons") {
      litres = parsedQty * LITRES_PER_US_GALLON;
    } else if (unit === "kilograms") {
      litres = parsedQty / parsedDensity;
    } else if (unit === "pounds") {
      litres = (parsedQty * KG_PER_POUND) / parsedDensity;
    }

    const gallons = litres / LITRES_PER_US_GALLON;
    const kilograms = litres * parsedDensity;
    const pounds = kilograms / KG_PER_POUND;

    return {
      litres: Math.round(litres),
      gallons: Math.round(gallons),
      kilograms: Math.round(kilograms),
      pounds: Math.round(pounds),
    };
  }, [parsedQty, unit, parsedDensity]);

  const handleGradeSelect = (grade: GradeInfo) => {
    setSelectedGrade(grade.id);
    if (grade.typicalDensity !== null) {
      setDensityInput(grade.typicalDensity.toFixed(2));
    }
  };

  const selectedGradeObj =
    FUEL_GRADES.find((g) => g.id === selectedGrade) || FUEL_GRADES[0];

  const requestHref = `/request-flight-support?service=aviation-fuel&grade=${encodeURIComponent(
    selectedGradeObj.label
  )}&quantity=${encodeURIComponent(quantityInput || "0")}&unit=${encodeURIComponent(
    unit
  )}&density=${encodeURIComponent(densityInput || "0.80")}`;

  const faqs = SERVICE_TOOL_FAQS["aviation-fuel"] || [];

  return (
    <section
      aria-labelledby="fuel-grade-converter-heading"
      className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 shadow-2xs space-y-6"
    >
      <div className="max-w-3xl">
        <h2
          id="fuel-grade-converter-heading"
          className="text-2xl font-bold text-[#0B2545] mb-2"
        >
          Know Your Fuel Before You Order
        </h2>
        <p className="text-base text-[#475569] leading-relaxed">
          A quick reference for the grades we coordinate, and a converter for uplift quantities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Grade Finder */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" role="tablist" aria-label="Fuel grades">
            {FUEL_GRADES.map((grade) => {
              const isActive = selectedGrade === grade.id;
              return (
                <button
                  key={grade.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`grade-panel-${grade.id}`}
                  id={`grade-tab-${grade.id}`}
                  onClick={() => handleGradeSelect(grade)}
                  className={`flex flex-col items-center justify-center gap-2 p-3.5 rounded-[4px] border text-center transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                    isActive
                      ? "bg-[#0B2545] border-[#0B2545] text-white"
                      : "bg-[#F8FAFC] border-[#CBD5E1] text-[#0B2545] hover:border-[#0B2545]"
                  }`}
                >
                  <GradeIcon id={grade.id} />
                  <span className="text-base font-semibold leading-tight">
                    {grade.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 sm:p-5">
            {FUEL_GRADES.map((grade) => {
              const isActive = selectedGrade === grade.id;
              return (
                <div
                  key={grade.id}
                  id={`grade-panel-${grade.id}`}
                  role="tabpanel"
                  aria-labelledby={`grade-tab-${grade.id}`}
                  hidden={!isActive}
                  className="space-y-2.5"
                >
                  <h3 className="text-lg font-bold text-[#0B2545]">
                    {grade.label}
                  </h3>
                  <p className="text-base text-[#1E293B] leading-relaxed">
                    {grade.description}
                  </p>
                  <p className="text-base text-[#475569] pt-2 border-t border-[#CBD5E1]/70">
                    <span className="font-semibold text-[#0B2545]">Typical aircraft: </span>
                    {grade.aircraftExamples}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Unit Converter */}
        <div className="lg:col-span-6 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 sm:p-5 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="fuel-conv-qty"
                className="block text-base font-medium text-[#0B2545] mb-1"
              >
                Quantity
              </label>
              <input
                id="fuel-conv-qty"
                type="number"
                min={0}
                step="any"
                value={quantityInput}
                onChange={(e) => setQuantityInput(e.target.value)}
                className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              />
            </div>

            <div>
              <label
                htmlFor="fuel-conv-unit"
                className="block text-base font-medium text-[#0B2545] mb-1"
              >
                Unit
              </label>
              <select
                id="fuel-conv-unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value as FuelUnit)}
                className="w-full text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              >
                <option value="litres">Litres</option>
                <option value="gallons">US gallons</option>
                <option value="kilograms">Kilograms</option>
                <option value="pounds">Pounds</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label
                htmlFor="fuel-conv-density"
                className="text-base font-medium text-[#0B2545]"
              >
                Density (kg per litre, typical, editable)
              </label>
              <input
                id="fuel-conv-density"
                type="number"
                min={0.5}
                max={1.2}
                step="0.01"
                value={densityInput}
                onChange={(e) => setDensityInput(e.target.value)}
                className="w-24 text-base text-[#0B2545] bg-white border border-[#CBD5E1] rounded-[4px] px-2.5 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {DENSITY_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => setDensityInput(preset.value.toFixed(2))}
                  className="text-base px-3 py-1 rounded-[4px] border border-[#CBD5E1] bg-white text-[#0B2545] hover:border-[#0B2545] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-2.5">
              <div className="text-base text-[#475569]">Litres</div>
              <div className="text-lg font-bold text-[#0B2545]">
                {conversions.litres.toLocaleString()}
              </div>
            </div>
            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-2.5">
              <div className="text-base text-[#475569]">US gallons</div>
              <div className="text-lg font-bold text-[#0B2545]">
                {conversions.gallons.toLocaleString()}
              </div>
            </div>
            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-2.5">
              <div className="text-base text-[#475569]">Kilograms</div>
              <div className="text-lg font-bold text-[#0B2545]">
                {conversions.kilograms.toLocaleString()}
              </div>
            </div>
            <div className="bg-white border border-[#CBD5E1] rounded-[4px] p-2.5">
              <div className="text-base text-[#475569]">Pounds</div>
              <div className="text-lg font-bold text-[#0B2545]">
                {conversions.pounds.toLocaleString()}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <p className="text-base text-[#475569]">
              Typical densities only. Use your supplier&apos;s density for the actual uplift.
            </p>
            <Link
              href={requestHref}
              className="bg-white hover:bg-slate-50 border border-[#0B2545] text-[#0B2545] font-semibold text-base px-4 py-2 rounded-[4px] shrink-0 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              Use this quantity in my request
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Questions + Final Action */}
      <div className="pt-4 border-t border-[#CBD5E1] flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {faqs.map((item) => (
            <div key={item.question} className="space-y-1">
              <h3 className="text-base font-bold text-[#0B2545]">{item.question}</h3>
              <p className="text-base text-[#475569] leading-snug">{item.answer}</p>
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
    </section>
  );
}

