"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { SERVICE_TOOL_FAQS } from "@/content/service-tool-faqs";

const FLIGHT_TYPES = [
  "Charter",
  "Cargo",
  "Private or VIP",
  "Air ambulance",
  "Humanitarian",
  "Ferry or delivery",
  "Technical stop",
];

const SERVICES_LIST = [
  "Permits",
  "Handling",
  "Fuel",
  "Catering",
  "Crew hotel and transport",
  "Flight planning",
];

function orTbc(value: string): string {
  return value.trim() || "To be confirmed";
}

export function RequestMessageComposer() {
  const [operatorName, setOperatorName] = useState<string>("");
  const [contactInfo, setContactInfo] = useState<string>("");
  const [flightType, setFlightType] = useState<string>("Charter");
  const [aircraft, setAircraft] = useState<string>("");
  const [routeFrom, setRouteFrom] = useState<string>("");
  const [routeTo, setRouteTo] = useState<string>("");
  const [countriesBetween, setCountriesBetween] = useState<string>("");
  const [departureUtc, setDepartureUtc] = useState<string>("");
  const [paxOrCargo, setPaxOrCargo] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>(["Permits"]);
  const [copied, setCopied] = useState<boolean>(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const { subject, body } = useMemo(() => {
    const subj = `Flight request, ${orTbc(aircraft)}, ${orTbc(
      routeFrom
    )} to ${orTbc(routeTo)}, ${orTbc(departureUtc)} UTC`;

    const lines = [
      `Subject: ${subj}`,
      `Operator name: ${orTbc(operatorName)}`,
      `Contact name and phone: ${orTbc(contactInfo)}`,
      `Type of flight: ${flightType}`,
      `Aircraft registration and type: ${orTbc(aircraft)}`,
      `Route from: ${orTbc(routeFrom)}`,
      `Route to: ${orTbc(routeTo)}`,
      `Countries in between: ${orTbc(countriesBetween)}`,
      `Departure date and time (UTC): ${orTbc(departureUtc)}`,
      `Passengers or cargo: ${orTbc(paxOrCargo)}`,
      `Services needed: ${
        selectedServices.length > 0
          ? selectedServices.join(", ")
          : "To be confirmed"
      }`,
    ];

    return { subject: subj, body: lines.join("\n") };
  }, [
    operatorName,
    contactInfo,
    flightType,
    aircraft,
    routeFrom,
    routeTo,
    countriesBetween,
    departureUtc,
    paxOrCargo,
    selectedServices,
  ]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const mailtoHref = `mailto:ops@kclpk.org?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const requestHref = `/request-flight-support?flightType=${encodeURIComponent(
    flightType
  )}${operatorName.trim() ? `&operatorName=${encodeURIComponent(operatorName.trim())}` : ""}${
    contactInfo.trim() ? `&contact=${encodeURIComponent(contactInfo.trim())}` : ""
  }${aircraft.trim() ? `&aircraft=${encodeURIComponent(aircraft.trim())}` : ""}${
    routeFrom.trim() ? `&from=${encodeURIComponent(routeFrom.trim())}` : ""
  }${routeTo.trim() ? `&to=${encodeURIComponent(routeTo.trim())}` : ""}${
    departureUtc.trim() ? `&departureUtc=${encodeURIComponent(departureUtc.trim())}` : ""
  }${
    selectedServices.length > 0
      ? `&services=${encodeURIComponent(selectedServices.join(","))}`
      : ""
  }`;

  const faqs = SERVICE_TOOL_FAQS["non-schedule-filing"] || [];

  return (
    <section
      aria-labelledby="request-composer-heading"
      className="py-10 lg:py-12 bg-[#F8FAFC] border-b border-[#CBD5E1]"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-7 shadow-2xs space-y-5">
          <div className="max-w-3xl">
            <h2
              id="request-composer-heading"
              className="text-2xl font-bold text-[#0B2545] mb-2"
            >
              Write a Complete Request, Ready to Send
            </h2>
            <p className="text-base text-[#475569] leading-relaxed">
              Fill in what you know. We will format a clear request message you can copy to your dispatch system or send to our operations desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left: Form Fields */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="comp-operator"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Operator name
                </label>
                <input
                  id="comp-operator"
                  type="text"
                  value={operatorName}
                  onChange={(e) => setOperatorName(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                />
              </div>

              <div>
                <label
                  htmlFor="comp-contact"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Contact name and phone
                </label>
                <input
                  id="comp-contact"
                  type="text"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                />
              </div>

              <div>
                <label
                  htmlFor="comp-flight-type"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Type of flight
                </label>
                <select
                  id="comp-flight-type"
                  value={flightType}
                  onChange={(e) => setFlightType(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                >
                  {FLIGHT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="comp-aircraft"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Aircraft registration &amp; type
                </label>
                <input
                  id="comp-aircraft"
                  type="text"
                  value={aircraft}
                  onChange={(e) => setAircraft(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="comp-from"
                    className="block text-base font-medium text-[#0B2545] mb-1"
                  >
                    From
                  </label>
                  <input
                    id="comp-from"
                    type="text"
                    value={routeFrom}
                    onChange={(e) => setRouteFrom(e.target.value.toUpperCase())}
                    className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="comp-to"
                    className="block text-base font-medium text-[#0B2545] mb-1"
                  >
                    To
                  </label>
                  <input
                    id="comp-to"
                    type="text"
                    value={routeTo}
                    onChange={(e) => setRouteTo(e.target.value.toUpperCase())}
                    className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="comp-countries"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Countries in between
                </label>
                <input
                  id="comp-countries"
                  type="text"
                  value={countriesBetween}
                  onChange={(e) => setCountriesBetween(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                />
              </div>

              <div>
                <label
                  htmlFor="comp-dep-utc"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Departure date &amp; time (UTC)
                </label>
                <input
                  id="comp-dep-utc"
                  type="datetime-local"
                  value={departureUtc}
                  onChange={(e) => setDepartureUtc(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                />
              </div>

              <div>
                <label
                  htmlFor="comp-pax-cargo"
                  className="block text-base font-medium text-[#0B2545] mb-1"
                >
                  Passengers or cargo
                </label>
                <input
                  id="comp-pax-cargo"
                  type="text"
                  value={paxOrCargo}
                  onChange={(e) => setPaxOrCargo(e.target.value)}
                  className="w-full text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                />
              </div>

              <fieldset className="sm:col-span-2 pt-1">
                <legend className="text-base font-medium text-[#0B2545] mb-1.5">
                  Services needed
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {SERVICES_LIST.map((srv) => {
                    const checked = selectedServices.includes(srv);
                    return (
                      <label
                        key={srv}
                        className="inline-flex items-center gap-2 text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3 py-1 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleService(srv)}
                          className="w-4 h-4 accent-[#0B2545]"
                        />
                        <span>{srv}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </div>

            {/* Right: Message Preview */}
            <div className="lg:col-span-5 bg-[#F8FAFC] border border-[#CBD5E1] rounded-[6px] p-4 space-y-3">
              <div className="text-lg font-bold text-[#0B2545]">
                Formatted request preview
              </div>
              <div
                aria-live="polite"
                className="bg-white border border-[#CBD5E1] rounded-[4px] p-3.5 text-base text-[#1E293B] whitespace-pre-wrap leading-relaxed"
              >
                {body}
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0B2545] font-semibold text-base px-4 py-2 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                >
                  {copied ? "Message copied" : "Copy message"}
                </button>

                <a
                  href={mailtoHref}
                  className="bg-white hover:bg-slate-50 border border-[#0B2545] text-[#0B2545] font-semibold text-base px-4 py-2 rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
                >
                  Open in email
                </a>
              </div>

              <p className="text-base text-[#475569]">
                Reference only. Send what you have. We will tell you what else is needed.
              </p>
            </div>
          </div>

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

