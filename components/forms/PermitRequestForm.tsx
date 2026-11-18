"use client";

import React, { useActionState, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { submitPermitRequestAction, type ActionState } from "@/lib/actions";
import { SITE_CONFIG } from "@/lib/utils";
import { CONTACT_DATA } from "@/content/contact";
import { getCountryCoverageTier } from "@/lib/coverage";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackGaEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

const INITIAL_STATE: ActionState = { status: "idle" };

const SERVICE_OPTIONS = [
  { id: "overflight-permits", label: "Flight Permission: Overflight Permit" },
  { id: "landing-permits", label: "Flight Permission: Landing Permit" },
  { id: "pakistan-permissions", label: "Pakistan Flight Permissions (OPKR/OPLR)" },
  { id: "ground-handling", label: "Ground Handling" },
  { id: "inflight-catering", label: "Catering Services" },
  { id: "aviation-fuel", label: "Fuel Supply" },
  { id: "crew-logistics", label: "Accommodation Arrangements (Hotel & Transport)" },
  { id: "operations-support", label: "24/7 Operational Support" },
];

interface PermitRequestFormProps {
  defaultFlightType?: "schedule" | "non-schedule";
  defaultPermitType?: "overflight" | "landing" | "both";
  defaultCountry?: string;
  defaultService?: string;
  defaultRouteFrom?: string;
  defaultRouteTo?: string;
  defaultDateUtc?: string;
  defaultEmail?: string;
  defaultNotes?: string;
}

export function PermitRequestForm({
  defaultFlightType = "non-schedule",
  defaultPermitType = "overflight",
  defaultService = "",
  defaultRouteFrom = "",
  defaultRouteTo = "",
  defaultDateUtc = "",
  defaultEmail = "",
  defaultNotes = "",
}: PermitRequestFormProps) {
  const pathname = usePathname();
  const [state, formAction, isPending] = useActionState(
    submitPermitRequestAction,
    INITIAL_STATE
  );
  const [routeToInput, setRouteToInput] = useState(defaultRouteTo);
  const [hasStarted, setHasStarted] = useState(false);

  const coverageHint = routeToInput.trim()
    ? getCountryCoverageTier(routeToInput.trim())
    : null;

  const handleFormStart = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackGaEvent("form_start", { form_name: "flight_support_request", source_page: pathname });
    }
  };

  if (state.status === "preview" && state.previewSummary) {
    const s = state.previewSummary;
    const mailtoBody = [
      `Operator / Company: ${s.operatorName}`,
      `Contact Name: ${s.contactName}`,
      `Business Email: ${s.email}`,
      `Phone / WhatsApp: ${s.phoneOrWhatsapp || "N/A"}`,
      `Operation Type: ${s.flightType}`,
      `Primary Permission Scope: ${s.permitType}`,
      `Aircraft Type & Registration: ${s.aircraftTypeAndReg}`,
      `Route: ${s.routeFrom} -> ${s.routeTo}`,
      `Planned UTC Date/Time: ${s.dateTimeUtc}`,
      `Requested Services: ${s.servicesNeeded.join(", ") || "None specified"}`,
      `Operational Notes: ${s.notes || "None"}`,
    ].join("\n");

    return (
      <div
        role="region"
        aria-label="Flight Inquiry Review Preview"
        className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-10 space-y-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#CBD5E1] pb-4">
          <span className="font-mono text-xs font-bold bg-[#0B2545] text-white px-3 py-1">
            INQUIRY REVIEW PREVIEW (BACKEND NOT YET CONNECTED)
          </span>
          <span className="font-mono text-xs text-[#5C6B7A]">
            NO DATA LOGGED TO SERVER CONSOLE
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
            Review Your Flight Support Inquiry
          </h2>
          <p className="text-sm sm:text-base text-[#16202B]">{state.message}</p>
        </div>

        <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-5 font-mono text-xs text-[#16202B] whitespace-pre-wrap">
          {mailtoBody}
        </div>

        <div className="bg-[#F6F8FB] border-l-4 border-[#0B2545] p-4 text-xs text-[#5C6B7A] space-y-1">
          <p className="font-semibold text-[#0B2545]">
            Important Notice:
          </p>
          <p>
            This inquiry summary is not an approved flight permission or an
            application submitted directly to an aviation authority. Required
            information varies according to flight type and destination.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={`mailto:${SITE_CONFIG.opsEmail}?subject=${encodeURIComponent(
              `Flight Support Inquiry: ${s.operatorName} (${s.routeFrom}-${s.routeTo})`
            )}&body=${encodeURIComponent(mailtoBody)}`}
            className="kcl-btn-primary min-h-[44px] px-5 py-2.5 font-bold text-sm inline-flex items-center justify-center rounded-[2px]"
          >
            Send Via Confirmed Channel ({SITE_CONFIG.opsEmail})
          </a>
          <Link
            href="/request-flight-support"
            onClick={() => window.location.reload()}
            className="kcl-btn-outline-navy min-h-[44px] px-5 py-2.5 font-semibold text-sm inline-flex items-center justify-center rounded-[2px]"
          >
            Edit Inquiry Details
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      onFocus={handleFormStart}
      onSubmit={(e) => {
        const fd = new FormData(e.currentTarget);
        const qualified = Boolean(
          String(fd.get("operatorName") || "").trim() &&
            String(fd.get("aircraftTypeAndReg") || "").trim() &&
            (String(fd.get("routeFrom") || "").trim() ||
              String(fd.get("routeTo") || "").trim()) &&
            String(fd.get("dateTimeUtc") || "").trim()
        );
        trackGaEvent("form_submit", {
          form_name: "flight_support_request",
          qualified,
          source_page: pathname,
        });
      }}
      className="kcl-card bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-6"
    >
      <input type="hidden" name="sourcePage" value={pathname} />
      <div className="border-b border-[#CBD5E1] pb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
            FLIGHT SUPPORT &amp; PERMIT COORDINATION INQUIRY
          </span>
          <h2 className="no-accent-bar text-xl font-bold text-[#0B2545]">
            Tell Us About Your Operation
          </h2>
        </div>
        <span className="font-mono text-xs bg-[#F6F8FB] border border-[#CBD5E1] px-2.5 py-1 text-[#0B2545]">
          Preview Mode · Not an Authority Application
        </span>
      </div>

      {state.status === "error" && state.message && (
        <div
          role="alert"
          className="bg-red-50 border-l-4 border-red-700 p-4 text-sm text-red-900 font-medium"
        >
          {state.message}
        </div>
      )}

      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHoneypot">Leave this field blank</label>
        <input
          id="websiteHoneypot"
          name="websiteHoneypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Step 1: Operation Type & Primary Permission Scope */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="flightType"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Step 1 — Operation Type &amp; Permission Scope *
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <select
              id="flightType"
              name="flightType"
              defaultValue={defaultFlightType}
              aria-label="Operation Type"
              className="w-full min-h-[44px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm font-semibold text-[#0B2545] rounded-[2px]"
            >
              <option value="non-schedule">Charter / Non-Scheduled / Private</option>
              <option value="schedule">Scheduled Airline / Cargo</option>
            </select>

            <select
              id="permitType"
              name="permitType"
              defaultValue={defaultPermitType}
              aria-label="Permission Scope"
              className="w-full min-h-[44px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm font-semibold text-[#0B2545] rounded-[2px]"
            >
              <option value="overflight">Overflight Permission</option>
              <option value="landing">Landing Permission</option>
              <option value="both">Multiple / Trip Support</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="aircraftTypeAndReg"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Step 2 — Aircraft Type &amp; Registration *
          </label>
          <input
            id="aircraftTypeAndReg"
            name="aircraftTypeAndReg"
            type="text"
            required
            placeholder="e.g., B77W / A320 / GLF6 + Registration"
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] font-mono text-sm text-[#16202B] rounded-[2px]"
          />
          {state.fieldErrors?.aircraftTypeAndReg && (
            <p className="mt-1 text-xs text-red-700 font-medium">
              {state.fieldErrors.aircraftTypeAndReg[0]}
            </p>
          )}
        </div>
      </div>

      {/* Step 3: Services Needed */}
      <fieldset className="bg-[#F6F8FB] border border-[#CBD5E1] p-4">
        <legend className="text-xs font-mono uppercase text-[#0B2545] font-bold px-1">
          Step 3 — Core Services Needed (Select All Relevant Areas)
        </legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-2">
          {SERVICE_OPTIONS.map((svc) => (
            <label
              key={svc.id}
              className="flex items-center gap-2 text-xs sm:text-sm text-[#16202B] cursor-pointer min-h-[34px]"
            >
              <input
                type="checkbox"
                name="servicesNeeded"
                value={svc.id}
                defaultChecked={defaultService === svc.id}
                className="h-4 w-4 accent-[#0B2545]"
              />
              <span>{svc.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Step 4: Flight Information (Airports, Route & UTC Times) */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
        <div className="sm:col-span-6">
          <label
            htmlFor="routeFrom"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Step 4 — Relevant Airports / Route (Origin → Destination) *
          </label>
          <div className="grid grid-cols-2 gap-2.5">
            <input
              id="routeFrom"
              name="routeFrom"
              type="text"
              required
              defaultValue={defaultRouteFrom}
              placeholder="Origin ICAO/Airport"
              aria-label="Origin Airport ICAO or City"
              className="w-full min-h-[44px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] font-mono text-sm text-[#16202B] uppercase rounded-[2px]"
            />
            <input
              id="routeTo"
              name="routeTo"
              type="text"
              required
              value={routeToInput}
              onChange={(e) => setRouteToInput(e.target.value)}
              placeholder="Dest ICAO/Country"
              aria-label="Destination Airport ICAO or Country"
              className="w-full min-h-[44px] px-3 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B] uppercase rounded-[2px]"
            />
          </div>
          {coverageHint && (
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-[2px] ${coverageHint.badgeClass}`}>
                {coverageHint.label}
              </span>
              <span className="text-[#5C6B7A]">{coverageHint.description}</span>
            </div>
          )}
          {(state.fieldErrors?.routeFrom || state.fieldErrors?.routeTo) && (
            <p className="mt-1 text-xs text-red-700 font-medium">
              {state.fieldErrors?.routeFrom?.[0] ||
                state.fieldErrors?.routeTo?.[0]}
            </p>
          )}
        </div>

        <div className="sm:col-span-6">
          <label
            htmlFor="dateTimeUtc"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Step 5 — Planned Date &amp; UTC Times *
          </label>
          <input
            id="dateTimeUtc"
            name="dateTimeUtc"
            type="text"
            required
            defaultValue={defaultDateUtc}
            placeholder="e.g., 18 NOV 2026 · ETD 0430Z / ETA 0915Z"
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] font-mono text-sm text-[#16202B] rounded-[2px]"
          />
          {state.fieldErrors?.dateTimeUtc && (
            <p className="mt-1 text-xs text-red-700 font-medium">
              {state.fieldErrors.dateTimeUtc[0]}
            </p>
          )}
        </div>
      </div>

      {/* Step 6: Contact & Review */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="operatorName"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Step 6 — Company / Operator Name *
          </label>
          <input
            id="operatorName"
            name="operatorName"
            type="text"
            required
            placeholder="Airline or Aircraft Operator Name"
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B] rounded-[2px]"
          />
          {state.fieldErrors?.operatorName && (
            <p className="mt-1 text-xs text-red-700 font-medium">
              {state.fieldErrors.operatorName[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contactName"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Step 7 — Contact Name *
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            placeholder="Dispatcher or Operations Contact Name"
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B] rounded-[2px]"
          />
          {state.fieldErrors?.contactName && (
            <p className="mt-1 text-xs text-red-700 font-medium">
              {state.fieldErrors.contactName[0]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Step 8 — Business Email &amp; Phone *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue={defaultEmail}
            placeholder="ops@operator.com"
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B] rounded-[2px]"
          />
          {state.fieldErrors?.email && (
            <p className="mt-1 text-xs text-red-700 font-medium">
              {state.fieldErrors.email[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phoneOrWhatsapp"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Operational Phone / WhatsApp *
          </label>
          <input
            id="phoneOrWhatsapp"
            name="phoneOrWhatsapp"
            type="tel"
            required
            placeholder="+CountryCode ..."
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] font-mono text-sm text-[#16202B] rounded-[2px]"
          />
          {state.fieldErrors?.phoneOrWhatsapp && (
            <p className="mt-1 text-xs text-red-700 font-medium">
              {state.fieldErrors.phoneOrWhatsapp[0]}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-xs font-mono uppercase text-[#5C6B7A] font-semibold mb-1.5"
        >
          Flight Purpose, Route String &amp; Operational Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          defaultValue={defaultNotes}
          placeholder="Include flight purpose, callsign, route waypoints, or specific service questions. Avoid sharing sensitive personal documents through unsecured channels."
          className="w-full px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B] rounded-[2px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#CBD5E1]">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[#0B2545]">
            Our Operations Controller replies first.
          </p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <a
              href={`tel:${CONTACT_DATA.primaryPhone.replace(/\s+/g, "")}`}
              onClick={() => trackGaEvent("call_click", { phone: CONTACT_DATA.primaryPhone })}
              className="font-semibold text-[#0B2545] underline underline-offset-4"
            >
              Call {CONTACT_DATA.primaryPhone} ({CONTACT_DATA.escalationLabel})
            </a>
            <span className="text-[#94A3B8]">·</span>
            <a
              href={`mailto:${CONTACT_DATA.opsEmail}`}
              onClick={() => trackGaEvent("email_click", { email: CONTACT_DATA.opsEmail })}
              className="font-semibold text-[#0B2545] underline underline-offset-4"
            >
              Email {CONTACT_DATA.opsEmail}
            </a>
            {CONTACT_DATA.whatsapp && (
              <>
                <span className="text-[#94A3B8]">·</span>
                <a
                  href={`https://wa.me/${CONTACT_DATA.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0B2545] underline underline-offset-4"
                >
                  WhatsApp
                </a>
              </>
            )}
          </div>
          <p className="text-xs text-[#5C6B7A]">
            Approvals are issued by the relevant authorities; KCL coordinates the request.
          </p>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-[#F4C400] hover:bg-[#DFB200] text-[#0B2545] min-h-[48px] px-7 py-3 disabled:opacity-60 font-bold text-base inline-flex items-center justify-center rounded-[2px] cursor-pointer whitespace-nowrap transition-colors"
        >
          {isPending
            ? "Preparing Inquiry..."
            : "Submit Flight Support Request →"}
        </button>
      </div>
    </form>
  );
}
