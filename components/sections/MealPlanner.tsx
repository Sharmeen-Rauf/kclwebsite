"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ComplementaryServicesSlider } from "@/components/sections/ComplementaryServicesSlider";
import { submitPermitRequestAction } from "@/lib/actions";

type FlightTypeKey = "airline" | "charter-vip" | "cargo-ferry";

interface FlightTypeOption {
  id: FlightTypeKey;
  label: string;
  defaultDietary: string[];
}

const FLIGHT_TYPES: FlightTypeOption[] = [
  {
    id: "airline",
    label: "Commercial airline",
    defaultDietary: ["standard", "vegetarian", "beverages", "crew-meals"],
  },
  {
    id: "charter-vip",
    label: "Charter or VIP",
    defaultDietary: ["standard", "beverages", "allergy-notes", "crew-meals"],
  },
  {
    id: "cargo-ferry",
    label: "Cargo or ferry crew",
    defaultDietary: ["crew-meals", "beverages"],
  },
];

interface MealNeedOption {
  id: string;
  label: string;
}

const MEAL_NEEDS: MealNeedOption[] = [
  { id: "standard", label: "Standard meals" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-free" },
  { id: "halal", label: "Halal" },
  { id: "allergy-notes", label: "Allergy notes" },
  { id: "beverages", label: "Beverages" },
  { id: "crew-meals", label: "Crew meals" },
];

export function MealPlanner() {
  const [selectedFlightType, setSelectedFlightType] = useState<FlightTypeKey>("airline");
  const [passengers, setPassengers] = useState<number>(12);
  const [crew, setCrew] = useState<number>(4);
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    "standard",
    "vegetarian",
    "beverages",
    "crew-meals",
  ]);

  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [emailMessage, setEmailMessage] = useState("");

  const totalMeals = Math.max(0, passengers) + Math.max(0, crew);
  const currentFlightTypeObj =
    FLIGHT_TYPES.find((t) => t.id === selectedFlightType) || FLIGHT_TYPES[0];

  const handleFlightTypeSelect = (id: FlightTypeKey) => {
    setSelectedFlightType(id);
    const target = FLIGHT_TYPES.find((t) => t.id === id);
    if (target) {
      if (id === "cargo-ferry") {
        setPassengers(0);
        if (crew === 0) setCrew(3);
      } else if (id === "charter-vip" && passengers === 0) {
        setPassengers(8);
      } else if (id === "airline" && passengers === 0) {
        setPassengers(120);
      }
      setSelectedNeeds(target.defaultDietary);
    }
  };

  const toggleMealNeed = (id: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedNeedLabels = selectedNeeds
    .map((id) => MEAL_NEEDS.find((m) => m.id === id)?.label)
    .filter(Boolean) as string[];

  const summaryText = `Inflight Catering Request Summary:
Flight Type: ${currentFlightTypeObj.label}
Passenger Count: ${passengers}
Crew Count: ${crew}
Total Meal Count: ${totalMeals}
Selected Meal Needs: ${selectedNeedLabels.join(", ") || "Standard requirements"}

What to send to KCL Ops:
- Flight date, airport (ICAO code) and UTC departure time
- Aircraft registration and type
- Passenger and crew meal counts
- Menu preferences and dietary or allergy needs
- Operations contact details`;

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2500);
    } catch {
      setCopyStatus("idle");
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailAddress || !emailAddress.includes("@")) {
      setEmailStatus("error");
      setEmailMessage("Please enter a valid email address.");
      return;
    }

    setEmailStatus("sending");
    setEmailMessage("");

    try {
      const formData = new FormData();
      formData.append("operatorName", `Inflight Catering Summary (${currentFlightTypeObj.label})`);
      formData.append("contactName", "Operations Dispatcher");
      formData.append("email", emailAddress);
      formData.append("phoneOrWhatsapp", "+0000000000");
      formData.append(
        "flightType",
        selectedFlightType === "airline" ? "schedule" : "non-schedule"
      );
      formData.append("permitType", "landing");
      formData.append("routeFrom", "ORIGIN");
      formData.append("routeTo", "DESTINATION");
      formData.append("dateTimeUtc", "TBD UTC");
      formData.append("aircraftTypeAndReg", currentFlightTypeObj.label);
      formData.append("servicesNeeded", "inflight-catering");
      formData.append("notes", summaryText);
      formData.append("websiteHoneypot", "");

      const res = await submitPermitRequestAction({ status: "idle" }, formData);
      if (res.status === "error") {
        setEmailStatus("error");
        setEmailMessage(res.message || "Unable to send summary. Please verify your email.");
      } else {
        setEmailStatus("success");
        setEmailMessage(`Catering summary sent to ${emailAddress}. Our 24/7 ops desk has logged your request.`);
      }
    } catch {
      setEmailStatus("error");
      setEmailMessage("An error occurred while sending the summary. Please contact ops directly.");
    }
  };

  const requestHref = `/request-flight-support?service=inflight-catering&flightType=${selectedFlightType}&passengers=${passengers}&crew=${crew}&meals=${encodeURIComponent(
    selectedNeeds.join(",")
  )}`;

  return (
    <div id="meal-planner" className="scroll-mt-20 space-y-8">
      {/* Hidden SSR indexable text for SEO */}
      <div className="sr-only" data-ssr-meal-planner="true">
        <h3>Inflight Meal Planner and Headcount Calculator</h3>
        <p>
          Configure catering for commercial airlines, charter or VIP flights, and cargo or ferry crews.
          Calculate total meal headcount for passengers and crew, select dietary preferences including standard,
          vegetarian, vegan, gluten-free, halal, beverages and allergy specifications.
        </p>
      </div>

      {/* Intro Header */}
      <div className="max-w-3xl space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2545] tracking-tight">
          Plan Your Meals
        </h2>
        <p className="text-base sm:text-lg text-[#16202B] leading-relaxed">
          Tell us who is flying and what they need. We will build your order summary and show what to send us.
        </p>
      </div>

      <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[8px] p-5 sm:p-8 space-y-8 shadow-xs">
        {/* Step 1: Flight Type Tabs */}
        <div className="space-y-3">
          <h3 className="text-[14px] font-semibold text-[#0B2545]">
            Step 1: Select your flight type
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {FLIGHT_TYPES.map((type) => {
              const isSelected = selectedFlightType === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleFlightTypeSelect(type.id)}
                  className={`p-4 rounded-[4px] text-left transition-all duration-200 border cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] focus-visible:ring-offset-2 motion-reduce:transition-none ${
                    isSelected
                      ? "bg-[#0B2545] text-white border-[#0B2545] shadow-xs"
                      : "bg-white text-[#16202B] border-[#CBD5E1] hover:border-[#0B2545]"
                  }`}
                >
                  <span className="block text-[15px] font-bold">{type.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Headcount Inputs */}
        <div className="space-y-3">
          <h3 className="text-[14px] font-semibold text-[#0B2545]">
            Step 2: Enter passenger and crew headcount
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Passengers */}
            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="passengers-input" className="block text-[14px] font-medium text-[#0B2545]">
                Passengers
              </label>
              <input
                id="passengers-input"
                type="number"
                min="0"
                max="600"
                value={passengers}
                onChange={(e) => setPassengers(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full text-lg font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus:outline-hidden focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
              />
              <span className="block text-[13px] text-[#5C6B7A]">Cabin meal count</span>
            </div>

            {/* Crew */}
            <div className="bg-white border border-[#CBD5E1] p-4 rounded-[6px] space-y-1.5">
              <label htmlFor="crew-input" className="block text-[14px] font-medium text-[#0B2545]">
                Flight &amp; Cabin Crew
              </label>
              <input
                id="crew-input"
                type="number"
                min="0"
                max="50"
                value={crew}
                onChange={(e) => setCrew(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full text-lg font-bold text-[#0B2545] border border-[#CBD5E1] rounded-[4px] px-3 py-2 focus:outline-hidden focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
              />
              <span className="block text-[13px] text-[#5C6B7A]">Cockpit and flight crew</span>
            </div>

            {/* Automatic Total */}
            <div className="bg-[#0B2545] text-white border border-[#0B2545] p-4 rounded-[6px] flex flex-col justify-between shadow-xs">
              <span className="block text-[13px] text-slate-200 font-medium">
                Total Meals Calculated
              </span>
              <div className="text-3xl font-bold tracking-tight py-1">
                {totalMeals} <span className="text-sm font-normal text-slate-300">meals</span>
              </div>
              <span className="block text-[12px] text-slate-300">
                Simple arithmetic sum
              </span>
            </div>
          </div>
        </div>

        {/* Step 3: Meal Needs (Selectable Chips) */}
        <div className="space-y-3">
          <h3 className="text-[14px] font-semibold text-[#0B2545]">
            Step 3: Select dietary and service requirements
          </h3>

          <div className="flex flex-wrap gap-2.5">
            {MEAL_NEEDS.map((need) => {
              const isChecked = selectedNeeds.includes(need.id);
              return (
                <button
                  key={need.id}
                  type="button"
                  onClick={() => toggleMealNeed(need.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full border text-[14px] font-medium transition-all duration-200 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] ${
                    isChecked
                      ? "bg-[#0B2545] text-white border-[#0B2545] shadow-xs"
                      : "bg-white text-[#16202B] border-[#CBD5E1] hover:border-[#0B2545]"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isChecked ? "bg-[#F4C400]" : "bg-[#CBD5E1]"
                    }`}
                  />
                  <span>{need.label}</span>
                </button>
              );
            })}
          </div>

          <p className="text-[13.5px] text-[#5C6B7A] pt-1">
            Availability depends on the airport and the catering provider.
          </p>
        </div>

        {/* Output: Clean Order Summary Card */}
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#CBD5E1]">
            <div>
              <span className="text-[13px] font-semibold text-[#5C6B7A] uppercase tracking-wider block">
                Order summary
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#0B2545]">
                {currentFlightTypeObj.label} ({totalMeals} Total Meals)
              </h3>
            </div>
            <div className="text-[13px] text-[#5C6B7A]">
              <span>No prices or timings are calculated automatically.</span>
            </div>
          </div>

          {/* Configuration Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[15px] text-[#16202B]">
            <div className="bg-[#F8FAFC] p-4 rounded-[4px] border border-[#CBD5E1]/60 space-y-2">
              <span className="font-bold text-[#0B2545] block">Headcount &amp; Flight</span>
              <ul className="space-y-1 text-sm text-[#475569]">
                <li><strong>Flight profile:</strong> {currentFlightTypeObj.label}</li>
                <li><strong>Passenger meals:</strong> {passengers}</li>
                <li><strong>Crew meals:</strong> {crew}</li>
                <li><strong>Total galley uplift:</strong> {totalMeals} meals</li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-4 rounded-[4px] border border-[#CBD5E1]/60 space-y-2">
              <span className="font-bold text-[#0B2545] block">Selected Requirements</span>
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {selectedNeedLabels.length > 0 ? (
                  selectedNeedLabels.map((lbl) => (
                    <span
                      key={lbl}
                      className="bg-white border border-[#CBD5E1] text-[#0B2545] text-xs font-semibold px-2.5 py-1 rounded-[2px]"
                    >
                      {lbl}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-[#5C6B7A]">Standard catering specifications</span>
                )}
              </div>
            </div>
          </div>

          {/* Checklist of What to Send */}
          <div className="pt-2 space-y-3">
            <h4 className="text-[15px] font-bold text-[#0B2545]">
              What to send for your catering request:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#16202B]">
              <div className="flex items-start gap-2 bg-[#F8FAFC] p-2.5 rounded-[4px] border border-[#CBD5E1]/60">
                <span className="text-[#B88200] font-bold" aria-hidden="true">✓</span>
                <span>Flight date, airport (ICAO) and UTC departure time</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFC] p-2.5 rounded-[4px] border border-[#CBD5E1]/60">
                <span className="text-[#B88200] font-bold" aria-hidden="true">✓</span>
                <span>Aircraft registration and type</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFC] p-2.5 rounded-[4px] border border-[#CBD5E1]/60">
                <span className="text-[#B88200] font-bold" aria-hidden="true">✓</span>
                <span>Passenger and crew meal counts</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFC] p-2.5 rounded-[4px] border border-[#CBD5E1]/60">
                <span className="text-[#B88200] font-bold" aria-hidden="true">✓</span>
                <span>Menu preferences and dietary or allergy needs</span>
              </div>
              <div className="flex items-start gap-2 bg-[#F8FAFC] p-2.5 rounded-[4px] border border-[#CBD5E1]/60 sm:col-span-2">
                <span className="text-[#B88200] font-bold" aria-hidden="true">✓</span>
                <span>Operations contact details</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-[#CBD5E1]/60 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <Link
              href={requestHref}
              className="relative overflow-hidden bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] font-bold text-[14px] px-6 py-3 rounded-[2px] transition-all shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#F4C400] focus-visible:ring-offset-2"
            >
              <span className="animate-btn-shimmer" />
              <span>Start My Request</span>
              <span aria-hidden="true" className="group-hover:translate-x-1 motion-safe:transition-transform">→</span>
            </Link>

            <button
              type="button"
              onClick={handleCopySummary}
              className="bg-white hover:bg-slate-50 text-[#0B2545] border border-[#CBD5E1] font-semibold text-[14px] px-5 py-3 rounded-[2px] transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#0B2545]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>{copyStatus === "copied" ? "Summary copied!" : "Copy summary"}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setShowEmailInput((prev) => !prev);
                setEmailStatus("idle");
                setEmailMessage("");
              }}
              className="bg-white hover:bg-slate-50 text-[#0B2545] border border-[#CBD5E1] font-semibold text-[14px] px-5 py-3 rounded-[2px] transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#0B2545] cursor-pointer"
            >
              <svg className="w-4 h-4 text-[#0B2545]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Email me this summary</span>
            </button>
          </div>

          {/* Email Drawer */}
          {showEmailInput && (
            <form onSubmit={handleSendEmail} className="pt-2 border-t border-[#CBD5E1]/60 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 max-w-lg">
                <input
                  type="email"
                  required
                  placeholder="dispatcher@airline.com"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="flex-1 text-[14px] px-3.5 py-2.5 border border-[#CBD5E1] rounded-[2px] bg-white text-[#16202B] focus:outline-hidden focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545]"
                />
                <button
                  type="submit"
                  disabled={emailStatus === "sending"}
                  className="bg-[#0B2545] hover:bg-[#133661] disabled:opacity-50 text-white text-[14px] font-bold px-5 py-2.5 rounded-[2px] transition-colors shrink-0 cursor-pointer"
                >
                  {emailStatus === "sending" ? "Sending..." : "Send summary"}
                </button>
              </div>

              {emailMessage && (
                <p
                  className={`text-[13px] ${
                    emailStatus === "success" ? "text-emerald-700 font-semibold" : "text-rose-700 font-medium"
                  }`}
                >
                  {emailMessage}
                </p>
              )}

              <p className="text-[12px] text-[#5C6B7A]">
                Your email is used only to deliver this catering summary to your team.
              </p>
            </form>
          )}

          {/* Unique Complementary Services Cards Slider */}
          <ComplementaryServicesSlider currentServiceSlug="inflight-catering" />
        </div>
      </div>
    </div>
  );
}
