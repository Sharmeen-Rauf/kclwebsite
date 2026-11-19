"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { submitContactMessageAction, type ActionState } from "@/lib/actions";

const INITIAL_STATE: ActionState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactMessageAction,
    INITIAL_STATE
  );

  if (state.status === "preview" && state.contactPreview) {
    const formattedBody = `Name: ${state.contactPreview.name}\nCompany / Operator: ${state.contactPreview.company}\nEmail: ${state.contactPreview.email}\nSubject: ${state.contactPreview.subject}\n\nInquiry Details:\n${state.contactPreview.message}`;

    return (
      <div
        role="status"
        aria-live="polite"
        className="relative overflow-hidden bg-white border border-[#CBD5E1] border-t-4 border-t-[#F4C400] rounded-[8px] p-6 sm:p-8 space-y-5 shadow-xs"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#CBD5E1] pb-4">
          <span className="text-xs font-bold bg-[#0B2545] text-[#F4C400] px-3 py-1 rounded-[3px] inline-block">
            Inquiry Summary Ready
          </span>
          <span className="text-sm text-[#5C6B7A]">
            Review &amp; Send
          </span>
        </div>

        <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
          Review Your Message &amp; Send via Email
        </h2>
        <p className="text-base text-[#16202B] leading-relaxed">
          {state.message}
        </p>

        <div className="bg-[#F6F8FB] border border-[#CBD5E1] rounded-[4px] p-4 space-y-2">
          <div className="text-sm text-[#0B2545] font-bold">
            Prepared Message Summary
          </div>
          <pre className="text-sm text-[#16202B] whitespace-pre-wrap leading-relaxed font-sans">
            {formattedBody}
          </pre>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:info@kclpk.org?subject=${encodeURIComponent(
              state.contactPreview.subject
            )}&body=${encodeURIComponent(formattedBody)}`}
            className="bg-[#F4C400] hover:bg-[#e0b400] text-[#0B2545] px-5 py-3 font-bold text-base rounded-[4px] transition-colors"
          >
            Send via Email →
          </a>
          <Link
            href="/request-flight-support"
            className="kcl-btn-outline-navy px-4 py-3 font-semibold text-sm rounded-[4px]"
          >
            Request Flight Support
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      className="relative overflow-hidden bg-white border border-[#CBD5E1] border-t-4 border-t-[#0B2545] rounded-[8px] p-6 sm:p-8 space-y-5 shadow-xs"
    >
      <div className="border-b border-[#CBD5E1] pb-4">
        <span className="text-sm font-bold text-[#B88200] block mb-1">
          Direct Message · KCL International Flight Support
        </span>
        <h2 className="no-accent-bar text-2xl font-bold text-[#0B2545]">
          Send an Operational or Commercial Inquiry
        </h2>
        <p className="text-base text-[#475569] mt-1">
          Share your contact details, route or operational inquiry, and our team will prepare your next steps.
        </p>
      </div>

      {state.status === "error" && state.message && (
        <div
          role="alert"
          className="bg-red-50 border-l-4 border-red-700 p-4 text-sm text-red-900 font-medium"
        >
          {state.message}
        </div>
      )}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contactHoneypot">Leave blank</label>
        <input
          id="contactHoneypot"
          name="websiteHoneypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-[#0B2545] font-bold mb-1.5"
          >
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Full name"
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F8FAFC] focus:bg-white border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none rounded-[4px] text-base text-[#16202B] transition-colors"
          />
          {state.fieldErrors?.name && (
            <p className="mt-1 text-sm text-red-700">
              {state.fieldErrors.name[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm text-[#0B2545] font-bold mb-1.5"
          >
            Operator / Organization *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Airline, operator, or company"
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F8FAFC] focus:bg-white border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none rounded-[4px] text-base text-[#16202B] transition-colors"
          />
          {state.fieldErrors?.company && (
            <p className="mt-1 text-sm text-red-700">
              {state.fieldErrors.company[0]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm text-[#0B2545] font-bold mb-1.5"
          >
            Business Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="ops@operator.com"
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F8FAFC] focus:bg-white border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none rounded-[4px] text-base text-[#16202B] transition-colors"
          />
          {state.fieldErrors?.email && (
            <p className="mt-1 text-sm text-red-700">
              {state.fieldErrors.email[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm text-[#0B2545] font-bold mb-1.5"
          >
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+CountryCode ..."
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F8FAFC] focus:bg-white border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none rounded-[4px] text-base text-[#16202B] transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm text-[#0B2545] font-bold mb-1.5"
        >
          Subject *
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="e.g., International Trip Support / Flight Permission Coordination"
          className="w-full min-h-[44px] px-3.5 py-2 bg-[#F8FAFC] focus:bg-white border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none rounded-[4px] text-base text-[#16202B] transition-colors"
        />
        {state.fieldErrors?.subject && (
          <p className="mt-1 text-sm text-red-700">
            {state.fieldErrors.subject[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm text-[#0B2545] font-bold mb-1.5"
        >
          Itinerary &amp; Requested Services *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Include route, aircraft registration/type, intended UTC dates/times, flight purpose, and requested services."
          className="w-full px-3.5 py-2.5 bg-[#F8FAFC] focus:bg-white border border-[#CBD5E1] focus:border-[#0B2545] focus:outline-none rounded-[4px] text-base text-[#16202B] transition-colors"
        />
        {state.fieldErrors?.message && (
          <p className="mt-1 text-sm text-red-700">
            {state.fieldErrors.message[0]}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#CBD5E1]">
        <p className="text-sm text-[#5C6B7A]">
          See our{" "}
          <Link href="/privacy-policy" className="underline text-[#0B2545] font-medium">
            Privacy Policy
          </Link>{" "}
          for inquiry handling notes.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="bg-[#0B2545] hover:bg-[#133661] text-white min-h-[48px] px-7 py-3 font-bold text-base inline-flex items-center justify-center rounded-[4px] cursor-pointer transition-colors"
        >
          {isPending ? "Preparing Inquiry..." : "Review & Send Inquiry →"}
        </button>
      </div>
    </form>
  );
}
