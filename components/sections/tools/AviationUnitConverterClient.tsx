"use client";

import React, { useMemo, useState } from "react";

type FuelUnit = "litres" | "gallons" | "kilograms" | "pounds";
type DistanceUnit = "nm" | "km" | "mi";
type SpeedUnit = "kt" | "kmh" | "mph";
type AltitudeUnit = "ft" | "m";

const LITRES_PER_GALLON = 3.785411784;
const KG_PER_POUND = 0.45359237;
const KM_PER_NM = 1.852;
const KM_PER_MILE = 1.609344;
const METRES_PER_FOOT = 0.3048;

export function AviationUnitConverterClient() {
  // Fuel
  const [fuelQty, setFuelQty] = useState("5000");
  const [fuelUnit, setFuelUnit] = useState<FuelUnit>("litres");
  const [fuelDensity, setFuelDensity] = useState("0.80");

  // Distance
  const [distQty, setDistQty] = useState("500");
  const [distUnit, setDistUnit] = useState<DistanceUnit>("nm");

  // Speed
  const [speedQty, setSpeedQty] = useState("450");
  const [speedUnit, setSpeedUnit] = useState<SpeedUnit>("kt");

  // Altitude
  const [altQty, setAltQty] = useState("35000");
  const [altUnit, setAltUnit] = useState<AltitudeUnit>("ft");

  const fuelResult = useMemo(() => {
    const q = Math.max(0, parseFloat(fuelQty) || 0);
    const d = Math.max(0.1, parseFloat(fuelDensity) || 0.8);
    let litres = 0;
    if (fuelUnit === "litres") litres = q;
    else if (fuelUnit === "gallons") litres = q * LITRES_PER_GALLON;
    else if (fuelUnit === "kilograms") litres = q / d;
    else litres = (q * KG_PER_POUND) / d;

    const kg = litres * d;
    return {
      litres: Math.round(litres),
      gallons: Math.round(litres / LITRES_PER_GALLON),
      kilograms: Math.round(kg),
      pounds: Math.round(kg / KG_PER_POUND),
    };
  }, [fuelQty, fuelUnit, fuelDensity]);

  const distResult = useMemo(() => {
    const q = Math.max(0, parseFloat(distQty) || 0);
    let km = 0;
    if (distUnit === "nm") km = q * KM_PER_NM;
    else if (distUnit === "km") km = q;
    else km = q * KM_PER_MILE;

    return {
      nm: (km / KM_PER_NM).toFixed(1),
      km: km.toFixed(1),
      mi: (km / KM_PER_MILE).toFixed(1),
    };
  }, [distQty, distUnit]);

  const speedResult = useMemo(() => {
    const q = Math.max(0, parseFloat(speedQty) || 0);
    let kmh = 0;
    if (speedUnit === "kt") kmh = q * KM_PER_NM;
    else if (speedUnit === "kmh") kmh = q;
    else kmh = q * KM_PER_MILE;

    return {
      kt: (kmh / KM_PER_NM).toFixed(1),
      kmh: kmh.toFixed(1),
      mph: (kmh / KM_PER_MILE).toFixed(1),
    };
  }, [speedQty, speedUnit]);

  const altResult = useMemo(() => {
    const q = Math.max(0, parseFloat(altQty) || 0);
    const metres = altUnit === "ft" ? q * METRES_PER_FOOT : q;
    return {
      ft: Math.round(metres / METRES_PER_FOOT),
      m: Math.round(metres),
    };
  }, [altQty, altUnit]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Fuel Converter */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#0B2545]">Fuel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label htmlFor="unit-fuel-qty" className="block text-base font-medium text-[#0B2545] mb-1">
              Quantity
            </label>
            <input
              id="unit-fuel-qty"
              type="number"
              min={0}
              step="any"
              value={fuelQty}
              onChange={(e) => setFuelQty(e.target.value)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="unit-fuel-unit" className="block text-base font-medium text-[#0B2545] mb-1">
              Unit
            </label>
            <select
              id="unit-fuel-unit"
              value={fuelUnit}
              onChange={(e) => setFuelUnit(e.target.value as FuelUnit)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
            >
              <option value="litres">Litres</option>
              <option value="gallons">US gallons</option>
              <option value="kilograms">Kilograms</option>
              <option value="pounds">Pounds</option>
            </select>
          </div>
          <div>
            <label htmlFor="unit-fuel-density" className="block text-base font-medium text-[#0B2545] mb-1">
              Density (kg/L, typical)
            </label>
            <input
              id="unit-fuel-density"
              type="number"
              min={0.5}
              max={1.2}
              step="0.01"
              value={fuelDensity}
              onChange={(e) => setFuelDensity(e.target.value)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { label: "Jet A-1 0.80", val: "0.80" },
            { label: "TS-1 0.78", val: "0.78" },
            { label: "Avgas 0.72", val: "0.72" },
          ].map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => setFuelDensity(preset.val)}
              className="text-base px-3 py-1 rounded-[4px] border border-[#CBD5E1] bg-[#F8FAFC] text-[#0B2545] hover:border-[#0B2545] cursor-pointer"
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">Litres</div>
            <div className="text-lg font-bold text-[#0B2545]">{fuelResult.litres.toLocaleString()}</div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">US gallons</div>
            <div className="text-lg font-bold text-[#0B2545]">{fuelResult.gallons.toLocaleString()}</div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">Kilograms</div>
            <div className="text-lg font-bold text-[#0B2545]">{fuelResult.kilograms.toLocaleString()}</div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">Pounds</div>
            <div className="text-lg font-bold text-[#0B2545]">{fuelResult.pounds.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Distance Converter */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#0B2545]">Distance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="unit-dist-qty" className="block text-base font-medium text-[#0B2545] mb-1">
              Distance
            </label>
            <input
              id="unit-dist-qty"
              type="number"
              min={0}
              step="any"
              value={distQty}
              onChange={(e) => setDistQty(e.target.value)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="unit-dist-unit" className="block text-base font-medium text-[#0B2545] mb-1">
              Unit
            </label>
            <select
              id="unit-dist-unit"
              value={distUnit}
              onChange={(e) => setDistUnit(e.target.value as DistanceUnit)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
            >
              <option value="nm">Nautical miles (NM)</option>
              <option value="km">Kilometres (km)</option>
              <option value="mi">Statute miles (mi)</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">Nautical miles</div>
            <div className="text-lg font-bold text-[#0B2545]">{distResult.nm}</div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">Kilometres</div>
            <div className="text-lg font-bold text-[#0B2545]">{distResult.km}</div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">Miles</div>
            <div className="text-lg font-bold text-[#0B2545]">{distResult.mi}</div>
          </div>
        </div>
      </div>

      {/* Speed Converter */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#0B2545]">Speed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="unit-speed-qty" className="block text-base font-medium text-[#0B2545] mb-1">
              Speed
            </label>
            <input
              id="unit-speed-qty"
              type="number"
              min={0}
              step="any"
              value={speedQty}
              onChange={(e) => setSpeedQty(e.target.value)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="unit-speed-unit" className="block text-base font-medium text-[#0B2545] mb-1">
              Unit
            </label>
            <select
              id="unit-speed-unit"
              value={speedUnit}
              onChange={(e) => setSpeedUnit(e.target.value as SpeedUnit)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
            >
              <option value="kt">Knots (kt)</option>
              <option value="kmh">km/h</option>
              <option value="mph">mph</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">Knots</div>
            <div className="text-lg font-bold text-[#0B2545]">{speedResult.kt}</div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">km/h</div>
            <div className="text-lg font-bold text-[#0B2545]">{speedResult.kmh}</div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">mph</div>
            <div className="text-lg font-bold text-[#0B2545]">{speedResult.mph}</div>
          </div>
        </div>
      </div>

      {/* Altitude Converter */}
      <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-4">
        <h2 className="text-xl font-bold text-[#0B2545]">Altitude</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="unit-alt-qty" className="block text-base font-medium text-[#0B2545] mb-1">
              Altitude
            </label>
            <input
              id="unit-alt-qty"
              type="number"
              min={0}
              step="any"
              value={altQty}
              onChange={(e) => setAltQty(e.target.value)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="unit-alt-unit" className="block text-base font-medium text-[#0B2545] mb-1">
              Unit
            </label>
            <select
              id="unit-alt-unit"
              value={altUnit}
              onChange={(e) => setAltUnit(e.target.value as AltitudeUnit)}
              className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-2"
            >
              <option value="ft">Feet (ft)</option>
              <option value="m">Metres (m)</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">Feet</div>
            <div className="text-lg font-bold text-[#0B2545]">{altResult.ft.toLocaleString()}</div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5">
            <div className="text-base text-[#475569]">Metres</div>
            <div className="text-lg font-bold text-[#0B2545]">{altResult.m.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

