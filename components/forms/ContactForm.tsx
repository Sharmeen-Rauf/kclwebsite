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
        className="bg-white border-2 border-[#0B2545] p-6 sm:p-8 space-y-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#CBD5E1] pb-4">
          <span className="font-mono text-xs font-bold bg-[#0B2545] text-[#E8A200] px-2.5 py-1 inline-block">
            INQUIRY PREVIEW · READY TO SEND
          </span>
          <span className="font-mono text-xs text-[#5C6B7A]">
            PREVIEW ONLY · BACKEND DISPATCH NOT YET CONNECTED
          </span>
        </div>

        <h2 className="text-2xl font-bold text-[#0B2545]">
          Review Your Message &amp; Send via Confirmed Channel
        </h2>
        <p className="text-sm sm:text-base text-[#16202B] leading-relaxed">
          {state.message}
        </p>

        <div className="bg-[#F6F8FB] border border-[#CBD5E1] p-4 space-y-2">
          <div className="font-mono text-[11px] uppercase text-[#5C6B7A] font-bold">
            Prepared Message Summary (Not Logged to Server Console)
          </div>
          <pre className="font-mono text-xs text-[#16202B] whitespace-pre-wrap leading-relaxed">
            {formattedBody}
          </pre>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:{{OPERATIONS_EMAIL}}?subject=${encodeURIComponent(
              state.contactPreview.subject
            )}&body=${encodeURIComponent(formattedBody)}`}
            className="px-5 py-3 bg-[#E8A200] hover:bg-[#d19100] text-[#0B2545] font-bold text-sm rounded-[2px]"
          >
            Send via Confirmed Email Channel →
          </a>
          <Link
            href="/request-flight-support"
            className="px-4 py-3 border border-[#0B2545] text-[#0B2545] font-semibold text-xs font-mono uppercase hover:bg-[#F6F8FB]"
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
      className="bg-white border border-[#CBD5E1] p-6 sm:p-8 space-y-5"
    >
      <div className="border-b border-[#CBD5E1] pb-3">
        <span className="font-mono text-xs uppercase text-[#5C6B7A] block">
          INQUIRY PREPARATION · KCL INTERNATIONAL FLIGHT SUPPORT
        </span>
        <h2 className="text-xl font-bold text-[#0B2545]">
          Send an Operational or Commercial Inquiry
        </h2>
        <p className="text-xs text-[#5C6B7A] mt-1">
          Generates a structured inquiry summary for review before transmission
          through KCL&apos;s confirmed contact channel.
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
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Your Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B]"
          />
          {state.fieldErrors?.name && (
            <p className="mt-1 text-xs text-red-700">
              {state.fieldErrors.name[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Operator / Organization *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B]"
          />
          {state.fieldErrors?.company && (
            <p className="mt-1 text-xs text-red-700">
              {state.fieldErrors.company[0]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Business Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B]"
          />
          {state.fieldErrors?.email && (
            <p className="mt-1 text-xs text-red-700">
              {state.fieldErrors.email[0]}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
          >
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] font-mono text-sm text-[#16202B]"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
        >
          Subject *
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="e.g., International Trip Support / Flight Permission Coordination"
          className="w-full min-h-[44px] px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B]"
        />
        {state.fieldErrors?.subject && (
          <p className="mt-1 text-xs text-red-700">
            {state.fieldErrors.subject[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-mono uppercase text-[#0B2545] font-bold mb-1.5"
        >
          Itinerary &amp; Requested Services *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Include route, aircraft registration/type, intended UTC dates/times, flight purpose, and requested services."
          className="w-full px-3.5 py-2 bg-[#F6F8FB] border border-[#CBD5E1] text-sm text-[#16202B]"
        />
        {state.fieldErrors?.message && (
          <p className="mt-1 text-xs text-red-700">
            {state.fieldErrors.message[0]}
          </p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#CBD5E1]">
        <p className="text-xs text-[#5C6B7A]">
          See our{" "}
          <Link href="/privacy-policy" className="underline text-[#0B2545]">
            Privacy Policy
          </Link>{" "}
          for inquiry handling notes.
        </p>
        <button
          type="submit"
          disabled={isPending}
          className="min-h-[48px] px-6 py-3 bg-[#0B2545] hover:bg-[#133661] text-white font-bold text-sm inline-flex items-center justify-center rounded-[2px] cursor-pointer"
        >
          {isPending ? "Preparing Preview..." : "Review Inquiry →"}
        </button>
      </div>
    </form>
  );
}
