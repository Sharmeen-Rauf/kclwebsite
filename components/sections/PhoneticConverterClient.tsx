"use client";

import React, { useState } from "react";
import { ICAO_PHONETIC_ALPHABET, ICAO_NUMERALS } from "@/content/tools-data";

export function PhoneticConverterClient() {
  const [input, setInput] = useState("AP-BGZ OPKC");

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
          pronunciation: "DASH",
        };
      }
      if (char === " ") {
        return {
          key: `space-${idx}`,
          char: "␣",
          word: "[Break]",
          pronunciation: "PAUSE",
        };
      }
      return {
        key: `${char}-${idx}`,
        char,
        word: char,
        pronunciation: "",
      };
    });

  return (
    <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8">
      <div className="mb-6">
        <label
          htmlFor="callsign-input"
          className="block font-mono text-xs uppercase text-[#5C6B7A] font-semibold mb-2"
        >
          Interactive Callsign / Aircraft Registration Spell-Out Converter
        </label>
        <input
          id="callsign-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter registration, callsign, or waypoint (e.g., QFA1, AP-BGZ, OPKC)"
          maxLength={32}
          className="w-full max-w-xl min-h-[48px] px-4 py-2.5 bg-[#F6F8FB] border border-[#CBD5E1] font-mono text-base font-bold text-[#0B2545] uppercase rounded-[2px]"
        />
      </div>

      <div className="flex flex-wrap gap-2.5">
        {tokens.map((token) => (
          <div
            key={token.key}
            className="bg-[#F6F8FB] border border-[#CBD5E1] px-3.5 py-2.5 min-w-[82px]"
          >
            <span className="font-mono text-xs text-[#5C6B7A] block">
              {token.char}
            </span>
            <span className="font-bold text-sm text-[#0B2545] block">
              {token.word}
            </span>
            {token.pronunciation && (
              <span className="font-mono text-[10px] text-[#5C6B7A] block mt-0.5">
                {token.pronunciation}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

