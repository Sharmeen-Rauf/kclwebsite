"use client";

import React, { useActionState } from "react";
import { submitNewsletterAction, type ActionState } from "@/lib/actions";

const INITIAL_STATE: ActionState = { status: "idle" };

export function NewsletterForm() {
  const [state, formAction, isPending] = useActionState(
    submitNewsletterAction,
    INITIAL_STATE
  );

  if (state.status === "preview") {
    return (
      <div
        role="status"
        className="bg-[#F6F8FB] border border-[#0B2545] p-4 text-xs font-mono text-[#0B2545] space-y-1.5"
      >
        <div className="font-bold">PREVIEW ONLY · NOT YET CONNECTED</div>
        <p className="font-sans text-xs text-[#16202B]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-2">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="newsletterHoneypot">Leave blank</label>
        <input
          id="newsletterHoneypot"
          name="websiteHoneypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label
        htmlFor="newsletter-email"
        className="block font-mono text-xs uppercase text-[#0B2545] font-bold"
      >
        Aviation Insights &amp; Resource Updates (Preview)
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="dispatch@airline.com"
          className="flex-1 min-h-[44px] px-3.5 py-2 bg-white border border-[#CBD5E1] text-sm text-[#16202B]"
        />
        <button
          type="submit"
          disabled={isPending}
          className="kcl-btn-primary min-h-[44px] px-5 py-2 font-semibold text-xs font-mono uppercase cursor-pointer rounded-[2px]"
        >
          {isPending ? "Checking..." : "Preview"}
        </button>
      </div>
      {state.fieldErrors?.email && (
        <p className="text-xs text-red-700">{state.fieldErrors.email[0]}</p>
      )}
      <p className="text-[11px] text-[#5C6B7A]">
        Subscription backend pending management configuration. No email addresses
        are stored or logged.
      </p>
    </form>
  );
}
