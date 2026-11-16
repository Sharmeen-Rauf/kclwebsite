"use client";

import React, { useEffect, useState } from "react";
import { ICAO_PHONETIC_ALPHABET, ICAO_NUMERALS } from "@/content/tools-data";

export function PhoneticConverterClient() {
  const [input, setInput] = useState("AP-BGZ OPKC");
  const [canSpeak, setCanSpeak] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setCanSpeak(true);
    }
  }, []);

  const tokens = input
    .toUpperCase()
    .split("")
    .map((char, idx) => {
      const letterMatch = ICAO_PHONETIC_ALPHABET.find((l) => l.letter === char);
      if (letterMatch) {
        return {
          key: `${char}-${idx}`,
          char,
          word: letterMatch.codeWord,
          pronunciation: letterMatch.pronunciation,
        };
      }
      const numMatch = ICAO_NUMERALS.find((n) => n.digit === char);
      if (numMatch) {
        return {
          key: `${char}-${idx}`,
          char,
          word: numMatch.word,
          pronunciation: numMatch.pronunciation,
        };
      }
      if (char === "-") {
        return {
          key: `dash-${idx}`,
          char: "-",
          word: "Dash",
          pronunciation: "Dash",
        };
      }
      if (char === " ") {
        return {
          key: `space-${idx}`,
          char: "Space",
          word: "Pause",
          pronunciation: "",
        };
      }
      return {
        key: `${char}-${idx}`,
        char,
        word: char,
        pronunciation: "",
      };
    });

  const spokenText = tokens
    .filter((t) => t.word !== "Pause")
    .map((t) => t.word)
    .join(" ");

  const handleSpeak = () => {
    if (!canSpeak || !spokenText) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(spokenText);
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = async () => {
    if (!spokenText) return;
    try {
      await navigator.clipboard.writeText(spokenText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bg-white border border-[#CBD5E1] rounded-[6px] p-6 sm:p-8 space-y-5">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex-1 max-w-xl">
          <label
            htmlFor="callsign-input"
            className="block text-base text-[#0B2545] font-semibold mb-2"
          >
            Enter aircraft registration, callsign, or ICAO code
          </label>
          <input
            id="callsign-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. AP-BGZ, OPKC"
            maxLength={32}
            className="w-full min-h-[48px] px-4 py-2.5 bg-[#F8FAFC] border border-[#CBD5E1] text-base font-bold text-[#0B2545] rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {canSpeak && (
            <button
              type="button"
              onClick={handleSpeak}
              disabled={!spokenText}
              className="bg-[#0B2545] hover:bg-[#133661] disabled:opacity-50 text-white font-semibold text-base px-5 py-2.5 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
            >
              Speak it
            </button>
          )}
          <button
            type="button"
            onClick={handleCopy}
            disabled={!spokenText}
            className="bg-white hover:bg-slate-50 disabled:opacity-50 border border-[#CBD5E1] text-[#0B2545] font-semibold text-base px-5 py-2.5 rounded-[4px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5" aria-live="polite">
        {tokens.map((token) => (
          <div
            key={token.key}
            className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-[4px] px-3.5 py-2.5 min-w-[88px]"
          >
            <span className="text-base text-[#475569] block">
              {token.char}
            </span>
            <span className="font-bold text-base text-[#0B2545] block">
              {token.word}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
