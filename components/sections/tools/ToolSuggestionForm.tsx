"use client";

import React, { useActionState, useState } from "react";
import { submitContactMessageAction, type ActionState } from "@/lib/actions";

const INITIAL_STATE: ActionState = { status: "idle" };

export function ToolSuggestionForm() {
  const [suggestion, setSuggestion] = useState("");
  const [email, setEmail] = useState("");
  const [state, formAction, isPending] = useActionState(
    submitContactMessageAction,
    INITIAL_STATE
  );

  return (
    <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-5 sm:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-bold text-[#0B2545]">
            Missing a tool you use every day? Tell us.
          </h2>
          <p className="text-base text-[#475569]">
            Suggest a reference table or calculator for flight dispatchers.
          </p>
        </div>

        {state.status === "preview" ? (
          <div
            role="status"
            aria-live="polite"
            className="text-base font-semibold text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-4 py-2.5"
          >
            Thank you. We read every suggestion.
          </div>
        ) : (
          <form
            action={formAction}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1 md:max-w-xl"
          >
            <input type="hidden" name="name" value="Tools Page Visitor" />
            <input type="hidden" name="company" value="Tool Suggestion" />
            <input type="hidden" name="subject" value="Aviation tool suggestion" />
            <input
              type="hidden"
              name="message"
              value={`Suggested tool: ${suggestion.trim() || "General tool suggestion"}`}
            />
            <input
              type="hidden"
              name="email"
              value={email.trim() || "tool-suggestion@kclpk.org"}
            />

            <label htmlFor="tool-suggest-text" className="sr-only">
              Tool suggestion
            </label>
            <input
              id="tool-suggest-text"
              type="text"
              required
              minLength={3}
              placeholder="Which tool would help you?"
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="flex-1 text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            />
            <label htmlFor="tool-suggest-email" className="sr-only">
              Email (optional)
            </label>
            <input
              id="tool-suggest-email"
              type="email"
              placeholder="Email (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sm:w-44 text-base text-[#0B2545] bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            />
            <button
              type="submit"
              disabled={isPending}
              className="bg-[#0B2545] hover:bg-[#133661] disabled:opacity-50 text-white font-semibold text-base px-5 py-2 rounded-[4px] cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              {isPending ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

