"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { WORLD_AIRPORTS, Airport } from "@/content/airports";
import { ISO_COUNTRIES, IsoCountry, WorldRegion } from "@/content/countries";
import {
  COMMON_FLIGHT_DETAILS,
  DOCUMENTS_WHERE_APPLICABLE,
  FLIGHT_TYPES_CONFIG,
} from "@/content/permit-checklists";

export type PermitStopType = "overflight" | "landing" | "tech_stop";

export interface RouteStop {
  id: string;
  countryName: string;
  iso: string;
  type: PermitStopType;
}

const REGIONS: Array<"All" | WorldRegion> = [
  "All",
  "Middle East",
  "Asia",
  "Europe",
  "Africa",
  "Americas",
  "Caribbean",
  "Oceania",
];

const STAMP_TILTS = [-3.5, 4, -2.5, 3.5, -4, 2, -1.5, 4.5];

export function RoutePermitPlanner() {
  // Step 1: Flight Type
  const [flightType, setFlightType] = useState<string>("passenger");

  // Step 2: Departure Airport Autocomplete
  const [departureQuery, setDepartureQuery] = useState<string>("");
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);
  const [isAirportDropdownOpen, setIsAirportDropdownOpen] = useState<boolean>(false);
  const airportWrapperRef = useRef<HTMLDivElement>(null);

  // Step 3: Route Stops
  const [routeStops, setRouteStops] = useState<RouteStop[]>([]);
  const [countryQuery, setCountryQuery] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<"All" | WorldRegion>("All");
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState<boolean>(false);
  const countryWrapperRef = useRef<HTMLDivElement>(null);

  // Readiness Checklist state: keys of checked items
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  // Copy & Email state
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");
  const [emailInput, setEmailInput] = useState<string>("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sent" | "error">("idle");
  const [showEmailField, setShowEmailField] = useState<boolean>(false);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (airportWrapperRef.current && !airportWrapperRef.current.contains(e.target as Node)) {
        setIsAirportDropdownOpen(false);
      }
      if (countryWrapperRef.current && !countryWrapperRef.current.contains(e.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter airports for autocomplete
  const filteredAirports = useMemo(() => {
    if (!departureQuery || departureQuery.trim().length < 2) return [];
    const q = departureQuery.toLowerCase().trim();
    return WORLD_AIRPORTS.filter(
      (a) =>
        a.icao.toLowerCase().includes(q) ||
        a.iata.toLowerCase().includes(q) ||
        a.city.toLowerCase().includes(q) ||
        a.country.toLowerCase().includes(q) ||
        a.name.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [departureQuery]);

  // Filter countries for route stop selection
  const filteredCountries = useMemo(() => {
    return ISO_COUNTRIES.filter((c) => {
      const matchesRegion = selectedRegion === "All" || c.region === selectedRegion;
      const q = countryQuery.toLowerCase().trim();
      const matchesQuery = !q || c.name.toLowerCase().includes(q) || c.iso.toLowerCase().includes(q);
      // Don't show countries already in the route stop list
      const alreadyInRoute = routeStops.some((stop) => stop.iso === c.iso);
      return matchesRegion && matchesQuery && !alreadyInRoute;
    }).slice(0, 12);
  }, [selectedRegion, countryQuery, routeStops]);

  // Active flight type config
  const activeFlightConfig = useMemo(() => {
    return (
      FLIGHT_TYPES_CONFIG.find((f) => f.id === flightType) || FLIGHT_TYPES_CONFIG[0]
    );
  }, [flightType]);

  // Total checklist items for readiness
  const totalDocItems = useMemo(() => {
    return [
      ...COMMON_FLIGHT_DETAILS.map((d) => `common-${d}`),
      ...DOCUMENTS_WHERE_APPLICABLE.map((d) => `applicable-${d}`),
      ...activeFlightConfig.extras.map((d) => `extra-${activeFlightConfig.id}-${d}`),
    ];
  }, [activeFlightConfig]);

  const readyCount = useMemo(() => {
    return totalDocItems.filter((key) => checkedDocs[key]).length;
  }, [totalDocItems, checkedDocs]);

  const totalCount = totalDocItems.length;
  const progressPercent = Math.round((readyCount / totalCount) * 100);

  // Unchecked items
  const stillToPrepareItems = useMemo(() => {
    const list: string[] = [];
    COMMON_FLIGHT_DETAILS.forEach((d) => {
      if (!checkedDocs[`common-${d}`]) list.push(d);
    });
    DOCUMENTS_WHERE_APPLICABLE.forEach((d) => {
      if (!checkedDocs[`applicable-${d}`]) list.push(d);
    });
    activeFlightConfig.extras.forEach((d) => {
      if (!checkedDocs[`extra-${activeFlightConfig.id}-${d}`]) list.push(d);
    });
    return list;
  }, [checkedDocs, activeFlightConfig]);

  // Stop type breakdown
  const overflightCount = routeStops.filter((s) => s.type === "overflight").length;
  const landingCount = routeStops.filter((s) => s.type === "landing").length;
  const techStopCount = routeStops.filter((s) => s.type === "tech_stop").length;

  // Add a stop
  const handleAddStop = (country: IsoCountry) => {
    const defaultType: PermitStopType = routeStops.length === 0 ? "overflight" : "overflight";
    const newStop: RouteStop = {
      id: `${country.iso}-${Date.now()}`,
      countryName: country.name,
      iso: country.iso,
      type: defaultType,
    };
    setRouteStops((prev) => [...prev, newStop]);
    setCountryQuery("");
    setIsCountryDropdownOpen(false);
  };

  // Modify stop type
  const handleUpdateStopType = (index: number, newType: PermitStopType) => {
    setRouteStops((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], type: newType };
      return next;
    });
  };

  // Move stop up / down
  const handleMoveStop = (index: number, direction: "up" | "down") => {
    setRouteStops((prev) => {
      const next = [...prev];
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= next.length) return prev;
      const temp = next[index];
      next[index] = next[targetIndex];
      next[targetIndex] = temp;
      return next;
    });
  };

  // Remove stop
  const handleRemoveStop = (index: number) => {
    setRouteStops((prev) => prev.filter((_, i) => i !== index));
  };

  // Toggle document checkbox
  const handleToggleDoc = (key: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Load Example Route
  const handleLoadExample = () => {
    setSelectedAirport({
      icao: "OPKC",
      iata: "KHI",
      name: "Jinnah International Airport",
      city: "Karachi",
      country: "Pakistan",
    });
    setDepartureQuery("OPKC");
    setFlightType("passenger");
    setRouteStops([
      { id: "om-1", countryName: "Oman", iso: "OM", type: "overflight" },
      { id: "sa-2", countryName: "Saudi Arabia", iso: "SA", type: "overflight" },
      { id: "eg-3", countryName: "Egypt", iso: "EG", type: "landing" },
    ]);
  };

  // Copy Plan
  const handleCopyPlan = () => {
    const lines = [
      `KCL Route Permit Plan`,
      `Flight Type: ${activeFlightConfig.label}`,
      `Departure: ${selectedAirport ? `${selectedAirport.icao} (${selectedAirport.city}, ${selectedAirport.country})` : "Not specified"}`,
      `Route Stops (${routeStops.length}):`,
      ...routeStops.map(
        (s, i) =>
          `  ${i + 1}. ${s.countryName} (${s.iso}) — ${
            s.type === "overflight"
              ? "Overflight"
              : s.type === "landing"
              ? "Landing (Destination)"
              : "Technical stop"
          }`
      ),
      `Readiness: ${readyCount} of ${totalCount} items prepared`,
      stillToPrepareItems.length > 0
        ? `Still to prepare:\n  - ${stillToPrepareItems.join("\n  - ")}`
        : `All initial checklist items marked ready.`,
    ];
    navigator.clipboard.writeText(lines.join("\n"));
    setCopyStatus("copied");
    setTimeout(() => setCopyStatus("idle"), 2500);
  };

  // Email plan handler
  const handleEmailPlan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) {
      setEmailStatus("error");
      return;
    }
    // Record simulated dispatch for user confirmation
    setEmailStatus("sent");
    setTimeout(() => {
      setShowEmailField(false);
      setEmailStatus("idle");
      setEmailInput("");
    }, 3000);
  };

  // URL query params for "Start My Request"
  const requestUrl = useMemo(() => {
    const params = new URLSearchParams();
    params.set("service", "flight-permissions");
    params.set("flightType", flightType);
    if (selectedAirport) {
      params.set("departure", selectedAirport.icao);
    }
    if (routeStops.length > 0) {
      const routeStr = routeStops.map((s) => `${s.iso}:${s.type}`).join(",");
      params.set("route", routeStr);
    }
    params.set("readiness", `${readyCount}_of_${totalCount}`);
    return `/request-flight-support?${params.toString()}`;
  }, [flightType, selectedAirport, routeStops, readyCount, totalCount]);

  // SVG circular progress calculation
  const circleRadius = 26;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (progressPercent / 100) * circleCircumference;

  return (
    <div className="space-y-8 w-full">
      {/* Intro Header & SEO Explanation */}
      <div className="max-w-3xl space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
          Build Your Route, See Your Permits
        </h2>
        <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
          Add the countries on your route and choose what each one needs. We will show your permit plan and the documents to prepare, then you can send it to us in one click.
        </p>
        <p className="text-sm text-[#475569] leading-relaxed pt-1">
          An overflight permit authorizes an aircraft to enter and transit sovereign airspace without landing. A landing permit grants permission to touch down at a specific aerodrome for passenger, cargo, or technical servicing purposes. Each civil aviation authority sets distinct filing rules and documentation requirements depending on your flight profile and aircraft registration.
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* =========================================================================
            LEFT COLUMN: ROUTE BUILDER
            ========================================================================= */}
        <div className="lg:col-span-6 space-y-6 bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 shadow-2xs">
          {/* Step 1: Flight Type */}
          <div className="space-y-2">
            <label htmlFor="flight-type-select" className="block text-sm font-bold text-[#0B2545]">
              Step 1 · Type of flight
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {FLIGHT_TYPES_CONFIG.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFlightType(f.id)}
                  className={`px-3 py-2 text-xs sm:text-sm font-semibold rounded-[4px] border transition-colors text-left truncate cursor-pointer ${
                    flightType === f.id
                      ? "bg-[#0B2545] text-white border-[#0B2545] shadow-xs"
                      : "bg-[#F8FAFC] text-[#16202B] border-[#CBD5E1] hover:border-[#0B2545]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            {activeFlightConfig.privacyNote && (
              <p className="text-xs text-[#5C6B7A] italic pt-0.5">
                {activeFlightConfig.privacyNote}
              </p>
            )}
          </div>

          {/* Step 2: Departure Airport Autocomplete */}
          <div ref={airportWrapperRef} className="space-y-2 relative">
            <label htmlFor="departure-airport-input" className="block text-sm font-bold text-[#0B2545]">
              Step 2 · Departure airport
            </label>
            <div className="relative">
              <input
                id="departure-airport-input"
                type="text"
                value={selectedAirport ? `${selectedAirport.icao} · ${selectedAirport.city} (${selectedAirport.name})` : departureQuery}
                onChange={(e) => {
                  setSelectedAirport(null);
                  setDepartureQuery(e.target.value);
                  setIsAirportDropdownOpen(true);
                }}
                onFocus={() => setIsAirportDropdownOpen(true)}
                placeholder="Search by ICAO, IATA, city or airport name (e.g. OPKC, DXB, London)..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2.5 text-sm text-[#0B2545] focus:bg-white focus:outline-hidden focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition-colors pr-8"
              />
              {selectedAirport && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedAirport(null);
                    setDepartureQuery("");
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#5C6B7A] hover:text-[#0B2545] font-bold cursor-pointer"
                  aria-label="Clear departure airport"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Airport Dropdown Suggestions */}
            {isAirportDropdownOpen && filteredAirports.length > 0 && (
              <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#CBD5E1] rounded-[4px] shadow-lg max-h-56 overflow-y-auto z-30 divide-y divide-[#CBD5E1]/60">
                {filteredAirports.map((a) => (
                  <li key={a.icao}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedAirport(a);
                        setDepartureQuery(a.icao);
                        setIsAirportDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-[#F8FAFC] flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <div>
                        <span className="font-bold text-[#0B2545] mr-2">[{a.icao}{a.iata ? ` / ${a.iata}` : ""}]</span>
                        <span className="text-[#16202B]">{a.city}, {a.country}</span>
                      </div>
                      <span className="text-xs text-[#5C6B7A] truncate max-w-[140px]">{a.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Horizontal SVG Route Strip with Country Stamps */}
          <div className="space-y-2 pt-1 border-t border-[#CBD5E1]/60">
            <span className="block text-xs font-bold text-[#5C6B7A] uppercase tracking-wider">
              Route Path &amp; Permit Stamps
            </span>

            <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-3 overflow-x-auto scrollbar-none">
              <div className="flex items-center min-w-[320px] gap-2 py-1">
                {/* Departure Dot */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-6 h-6 rounded-full bg-[#0B2545] text-white flex items-center justify-center text-[10px] font-bold shadow-2xs">
                    DEP
                  </div>
                  <span className="text-[11px] font-bold text-[#0B2545] mt-1 whitespace-nowrap">
                    {selectedAirport ? selectedAirport.icao : "DEP"}
                  </span>
                </div>

                {/* Connecting Line and Country Stamps */}
                {routeStops.length === 0 ? (
                  <div className="flex-1 flex items-center px-4">
                    <div className="w-full h-0.5 border-t border-dashed border-[#CBD5E1]" />
                    <span className="text-xs text-[#5C6B7A] whitespace-nowrap px-3 italic">
                      Add countries below to stamp your route
                    </span>
                    <div className="w-full h-0.5 border-t border-dashed border-[#CBD5E1]" />
                  </div>
                ) : (
                  routeStops.map((stop, idx) => {
                    const tilt = STAMP_TILTS[idx % STAMP_TILTS.length];
                    const isLast = idx === routeStops.length - 1;

                    return (
                      <React.Fragment key={stop.id}>
                        {/* Connecting Line */}
                        <div className="w-8 sm:w-10 h-0.5 bg-[#0B2545]/40 shrink-0 relative">
                          <span className="absolute -top-1.5 right-0 text-[10px] text-[#0B2545] leading-none">
                            ▶
                          </span>
                        </div>

                        {/* Country Stamp (Round navy outline with ISO code & tilt) */}
                        <div
                          style={{
                            transform: `rotate(${tilt}deg)`,
                          }}
                          className="shrink-0 flex flex-col items-center animate-stamp-press motion-reduce:transform-none motion-reduce:animate-none"
                        >
                          <div
                            className={`w-10 h-10 rounded-full border-2 border-[#0B2545] flex flex-col items-center justify-center text-center bg-white shadow-2xs p-0.5 ${
                              isLast && stop.type === "landing" ? "ring-2 ring-[#0B2545]/30 bg-slate-50" : ""
                            }`}
                          >
                            <span className="text-[10px] font-black text-[#0B2545] leading-none tracking-tight">
                              {stop.iso}
                            </span>
                            <span className="text-[8px] font-bold text-[#475569] leading-none mt-0.5">
                              {stop.type === "overflight" ? "OVR" : stop.type === "landing" ? "LND" : "TECH"}
                            </span>
                          </div>
                          <span className="text-[10px] font-bold text-[#0B2545] mt-1 truncate max-w-[65px] text-center">
                            {stop.countryName}
                          </span>
                        </div>
                      </React.Fragment>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Step 3: Add Countries on Your Route */}
          <div ref={countryWrapperRef} className="space-y-3 pt-2 border-t border-[#CBD5E1]/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <label htmlFor="country-search-input" className="block text-sm font-bold text-[#0B2545]">
                Step 3 · Add the countries on your route
              </label>
              <span className="text-xs text-[#5C6B7A]">Select in flight sequence</span>
            </div>

            {/* Region Filter Chips */}
            <div className="flex flex-wrap gap-1.5">
              {REGIONS.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  className={`text-xs px-2.5 py-1 rounded-[2px] font-semibold border transition-colors cursor-pointer ${
                    selectedRegion === region
                      ? "bg-[#0B2545] text-white border-[#0B2545]"
                      : "bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:border-[#0B2545]"
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>

            {/* Country Search & Dropdown */}
            <div className="relative">
              <input
                id="country-search-input"
                type="text"
                value={countryQuery}
                onChange={(e) => {
                  setCountryQuery(e.target.value);
                  setIsCountryDropdownOpen(true);
                }}
                onFocus={() => setIsCountryDropdownOpen(true)}
                placeholder="Search country to add (e.g. Oman, Saudi Arabia, Egypt)..."
                className="w-full bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2.5 text-sm text-[#0B2545] focus:bg-white focus:outline-hidden focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition-colors"
              />

              {isCountryDropdownOpen && filteredCountries.length > 0 && (
                <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#CBD5E1] rounded-[4px] shadow-lg max-h-56 overflow-y-auto z-30 divide-y divide-[#CBD5E1]/60">
                  {filteredCountries.map((c) => (
                    <li key={c.iso}>
                      <button
                        type="button"
                        onClick={() => handleAddStop(c)}
                        className="w-full text-left px-3 py-2 text-xs sm:text-sm hover:bg-[#F8FAFC] flex items-center justify-between transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#0B2545] w-6">[{c.iso}]</span>
                          <span className="text-[#16202B] font-semibold">{c.name}</span>
                        </div>
                        <span className="text-xs text-[#5C6B7A] bg-slate-100 px-1.5 py-0.5 rounded-[2px]">
                          + Add stop
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* List of Added Route Stops with Controls */}
          {routeStops.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <span className="block text-xs font-bold text-[#5C6B7A] uppercase tracking-wider">
                Configured Route Stops ({routeStops.length})
              </span>

              <div className="space-y-2">
                {routeStops.map((stop, index) => {
                  const isFirst = index === 0;
                  const isLast = index === routeStops.length - 1;

                  return (
                    <div
                      key={stop.id}
                      className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-2.5 sm:p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-white border border-[#CBD5E1] text-[#0B2545] text-xs font-bold flex items-center justify-center shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <span className="text-sm font-bold text-[#0B2545]">
                            {stop.countryName}
                          </span>
                          <span className="text-xs text-[#5C6B7A] ml-1.5 font-semibold">
                            ({stop.iso})
                          </span>
                          {isLast && stop.type === "landing" && (
                            <span className="text-[11px] bg-[#0B2545] text-white px-1.5 py-0.5 rounded-[2px] ml-2 font-bold">
                              Destination
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
                        {/* Segmented Control for Permit Type */}
                        <div className="inline-flex rounded-[3px] border border-[#CBD5E1] bg-white p-0.5 text-xs font-semibold">
                          <button
                            type="button"
                            onClick={() => handleUpdateStopType(index, "overflight")}
                            className={`px-2 py-1 rounded-[2px] transition-colors cursor-pointer ${
                              stop.type === "overflight"
                                ? "bg-[#0B2545] text-white"
                                : "text-[#475569] hover:text-[#0B2545]"
                            }`}
                          >
                            Overflight
                          </button>
                          <button
                            type="button"
                            onClick={() => handleUpdateStopType(index, "landing")}
                            className={`px-2 py-1 rounded-[2px] transition-colors cursor-pointer ${
                              stop.type === "landing"
                                ? "bg-[#0B2545] text-white"
                                : "text-[#475569] hover:text-[#0B2545]"
                            }`}
                          >
                            Landing
                          </button>
                          <button
                            type="button"
                            onClick={() => handleUpdateStopType(index, "tech_stop")}
                            className={`px-2 py-1 rounded-[2px] transition-colors cursor-pointer ${
                              stop.type === "tech_stop"
                                ? "bg-[#0B2545] text-white"
                                : "text-[#475569] hover:text-[#0B2545]"
                            }`}
                          >
                            Technical stop
                          </button>
                        </div>

                        {/* Move Up / Down Buttons */}
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            disabled={isFirst}
                            onClick={() => handleMoveStop(index, "up")}
                            className="w-6 h-6 rounded-[2px] border border-[#CBD5E1] bg-white flex items-center justify-center text-xs text-[#0B2545] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
                            aria-label={`Move ${stop.countryName} up`}
                          >
                            ↑
                          </button>
                          <button
                            type="button"
                            disabled={isLast}
                            onClick={() => handleMoveStop(index, "down")}
                            className="w-6 h-6 rounded-[2px] border border-[#CBD5E1] bg-white flex items-center justify-center text-xs text-[#0B2545] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 cursor-pointer"
                            aria-label={`Move ${stop.countryName} down`}
                          >
                            ↓
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveStop(index)}
                            className="w-6 h-6 rounded-[2px] border border-rose-200 bg-white text-rose-700 hover:bg-rose-50 flex items-center justify-center text-xs font-bold cursor-pointer"
                            aria-label={`Remove ${stop.countryName}`}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Empty State with Example Route */}
          {routeStops.length === 0 && (
            <div className="bg-[#F8FAFC] border border-[#CBD5E1] border-dashed rounded-[6px] p-4 text-center space-y-2">
              <p className="text-sm font-semibold text-[#0B2545]">
                Start with your departure airport and add country stops.
              </p>
              <p className="text-xs text-[#5C6B7A]">
                You can also load an example route to preview permit coordination and document checklists.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleLoadExample}
                  className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0B2545] px-3.5 py-1.5 rounded-[2px] text-xs font-bold transition-colors shadow-2xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Load Example: Karachi → Oman → Saudi Arabia → Egypt</span>
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            RIGHT COLUMN: YOUR PERMIT PLAN & READINESS CHECKLIST (Updates live)
            ========================================================================= */}
        <div
          aria-live="polite"
          className="lg:col-span-6 space-y-6 bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 shadow-2xs"
        >
          {/* Summary Line */}
          <div className="border-b border-[#CBD5E1]/70 pb-4 space-y-2">
            <span className="text-xs font-bold text-[#5C6B7A] uppercase tracking-wider block">
              Your Permit Plan Summary
            </span>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545]">
                {routeStops.length === 0
                  ? "No route stops added yet"
                  : `${routeStops.length} ${routeStops.length === 1 ? "country" : "countries"}: ${
                      overflightCount > 0 ? `${overflightCount} overflight` : ""
                    }${overflightCount > 0 && (landingCount > 0 || techStopCount > 0) ? ", " : ""}${
                      landingCount > 0 ? `${landingCount} landing` : ""
                    }${landingCount > 0 && techStopCount > 0 ? ", " : ""}${
                      techStopCount > 0 ? `${techStopCount} tech stop` : ""
                    }`}
              </h3>

              {/* Circular Readiness Meter */}
              <div className="flex items-center gap-2.5 bg-[#F8FAFC] border border-[#CBD5E1] px-3 py-1.5 rounded-[4px] shrink-0">
                <svg className="w-8 h-8 -rotate-90 transform shrink-0" viewBox="0 0 64 64">
                  <circle
                    cx="32"
                    cy="32"
                    r={circleRadius}
                    className="text-slate-200"
                    strokeWidth="5"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r={circleRadius}
                    className="text-[#0B2545] transition-all duration-300"
                    strokeWidth="5"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>
                <div className="leading-tight">
                  <span className="block text-xs font-bold text-[#0B2545]">
                    Ready: {readyCount} of {totalCount}
                  </span>
                  <span className="block text-[11px] text-[#5C6B7A]">
                    {progressPercent}% completed
                  </span>
                </div>
              </div>
            </div>

            {/* Configured Route Sequence Preview */}
            {routeStops.length > 0 && (
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pt-1">
                <strong>Route Sequence:</strong>{" "}
                {selectedAirport ? `${selectedAirport.icao} (${selectedAirport.city})` : "DEP"} →{" "}
                {routeStops
                  .map(
                    (s) =>
                      `${s.countryName} [${
                        s.type === "overflight"
                          ? "Overflight"
                          : s.type === "landing"
                          ? "Landing"
                          : "Tech stop"
                      }]`
                  )
                  .join(" → ")}
              </p>
            )}
          </div>

          {/* Documents to Prepare (Shown ONCE with Checkboxes) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-[#0B2545]">
                Documents to Prepare for This Route
              </h4>
              <span className="text-xs text-[#5C6B7A]">
                Check items you currently have
              </span>
            </div>

            {/* 1. Common Flight Details */}
            <div className="space-y-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-3.5">
              <span className="text-xs font-bold text-[#0B2545] block">
                Common flight details
              </span>
              <div className="space-y-1.5">
                {COMMON_FLIGHT_DETAILS.map((detail) => {
                  const key = `common-${detail}`;
                  const isChecked = !!checkedDocs[key];
                  return (
                    <label
                      key={key}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#16202B] cursor-pointer hover:text-[#0B2545] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleDoc(key)}
                        className="mt-0.5 rounded border-[#CBD5E1] text-[#0B2545] focus:ring-[#0B2545] cursor-pointer"
                      />
                      <span className={isChecked ? "line-through text-[#5C6B7A]" : ""}>
                        {detail}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 2. Documents Where Applicable */}
            <div className="space-y-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-3.5">
              <span className="text-xs font-bold text-[#0B2545] block">
                Documents where applicable
              </span>
              <div className="space-y-1.5">
                {DOCUMENTS_WHERE_APPLICABLE.map((doc) => {
                  const key = `applicable-${doc}`;
                  const isChecked = !!checkedDocs[key];
                  return (
                    <label
                      key={key}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#16202B] cursor-pointer hover:text-[#0B2545] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleDoc(key)}
                        className="mt-0.5 rounded border-[#CBD5E1] text-[#0B2545] focus:ring-[#0B2545] cursor-pointer"
                      />
                      <span className={isChecked ? "line-through text-[#5C6B7A]" : ""}>
                        {doc}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* 3. Extras for Chosen Flight Type */}
            <div className="space-y-2 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-3.5">
              <span className="text-xs font-bold text-[#0B2545] block">
                Profile extras for {activeFlightConfig.label}
              </span>
              <div className="space-y-1.5">
                {activeFlightConfig.extras.map((extra) => {
                  const key = `extra-${activeFlightConfig.id}-${extra}`;
                  const isChecked = !!checkedDocs[key];
                  return (
                    <label
                      key={key}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#16202B] cursor-pointer hover:text-[#0B2545] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleDoc(key)}
                        className="mt-0.5 rounded border-[#CBD5E1] text-[#0B2545] focus:ring-[#0B2545] cursor-pointer"
                      />
                      <span className={isChecked ? "line-through text-[#5C6B7A]" : ""}>
                        {extra}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Still to Prepare Summary */}
            {stillToPrepareItems.length > 0 && (
              <div className="text-xs text-[#5C6B7A] bg-slate-50 border border-[#CBD5E1]/60 rounded-[4px] p-3 space-y-1">
                <span className="font-bold text-[#0B2545] block">
                  Still to prepare ({stillToPrepareItems.length} items):
                </span>
                <p className="line-clamp-2">
                  {stillToPrepareItems.join(" · ")}
                </p>
              </div>
            )}
          </div>

          {/* Always Visible Authority Decides Note */}
          <div className="p-3 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] text-xs text-[#475569] leading-relaxed">
            Requirements and processing times differ by country. Our desk confirms them for your route. Approvals are decided by each country&apos;s civil aviation authority.
          </div>

          {/* Action Buttons */}
          <div className="pt-2 border-t border-[#CBD5E1]/60 space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={requestUrl}
                className="bg-[#0B2545] hover:bg-[#133661] text-white px-6 py-3 rounded-[2px] font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors shadow-xs text-center"
              >
                <span>Start My Request</span>
                <span aria-hidden="true">→</span>
              </Link>

              <button
                type="button"
                onClick={handleCopyPlan}
                className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0B2545] px-4 py-3 rounded-[2px] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>{copyStatus === "copied" ? "Plan copied!" : "Copy plan"}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowEmailField((prev) => !prev)}
                className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0B2545] px-4 py-3 rounded-[2px] font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Email me this plan</span>
              </button>
            </div>

            {/* Email plan input container */}
            {showEmailField && (
              <form onSubmit={handleEmailPlan} className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] p-3 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter operations email..."
                    required
                    className="flex-1 bg-white border border-[#CBD5E1] rounded-[2px] px-3 py-1.5 text-xs text-[#0B2545] focus:outline-hidden focus:border-[#0B2545]"
                  />
                  <button
                    type="submit"
                    className="bg-[#0B2545] text-white px-3.5 py-1.5 text-xs font-bold rounded-[2px] hover:bg-[#133661] cursor-pointer"
                  >
                    Send
                  </button>
                </div>
                {emailStatus === "sent" && (
                  <p className="text-xs text-emerald-700 font-semibold">
                    Route plan checklist sent to your email.
                  </p>
                )}
                {emailStatus === "error" && (
                  <p className="text-xs text-rose-700">
                    Please provide a valid email address.
                  </p>
                )}
                <p className="text-[11px] text-[#5C6B7A]">
                  Privacy note: Your email is used only to deliver this route summary to your team.
                </p>
              </form>
            )}

            {/* Checklist PDF / Guides Link */}
            <div className="pt-1 flex flex-wrap gap-4 text-xs text-[#5C6B7A]">
              <span>Need printable documentation guidelines?</span>
              <Link
                href="/permit-checklist/overflight"
                className="text-[#0B2545] font-bold hover:underline underline-offset-2"
              >
                Overflight Checklist →
              </Link>
              <Link
                href="/permit-checklist/landing"
                className="text-[#0B2545] font-bold hover:underline underline-offset-2"
              >
                Landing Checklist →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          ACCESSIBLE STATIC HTML PRE-RENDER FOR SEARCH ENGINES (SEO COMPLIANCE)
          ========================================================================= */}
      <div className="sr-only">
        <h3>Comprehensive International Permit Documentation Checklist</h3>
        <p>
          Common flight details required for all overflight and landing permits:
        </p>
        <ul>
          {COMMON_FLIGHT_DETAILS.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <p>Certificates and airworthiness documents required where applicable:</p>
        <ul>
          {DOCUMENTS_WHERE_APPLICABLE.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <p>Profile specific permit documentation requirements by flight category:</p>
        {FLIGHT_TYPES_CONFIG.map((f) => (
          <div key={f.id}>
            <h4>{f.label} Flight Requirements</h4>
            <ul>
              {f.extras.map((ex) => (
                <li key={ex}>{ex}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

