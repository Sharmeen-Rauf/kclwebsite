import React from "react";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ICAO_PHONETIC_ALPHABET, ICAO_NUMERALS } from "@/content/tools-data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PhoneticConverterClient } from "@/components/sections/PhoneticConverterClient";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata = buildMetadata({
  title: "ICAO Phonetic Alphabet & Telephony Chart",
  description:
    "Complete ICAO phonetic alphabet (Alfa to Zulu), aviation numerals pronunciation, Morse code reference and interactive callsign spell-out converter.",
  path: "/tools/icao-phonetic-alphabet",
});

export default function IcaoPhoneticAlphabetPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Aviation Tools", path: "/tools" },
          {
            name: "ICAO Phonetic Alphabet",
            path: "/tools/icao-phonetic-alphabet",
          },
        ]}
      />

      <section className="bg-[#0B2545] text-white py-12 sm:py-16 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#E8A200] bg-[#133661] border border-slate-600 px-3 py-1 inline-block">
              DISPATCH REFERENCE // ICAO ANNEX 10 VOLUME II
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              ICAO Phonetic Alphabet &amp; Radiotelephony Reference
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Standardized ICAO radiotelephony spelling alphabet and numeral
              pronunciation used by dispatchers, air traffic controllers, and
              flight crews when confirming aircraft registrations, callsigns,
              waypoints, and permit numbers over voice channels.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-[#F6F8FB] border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <PhoneticConverterClient />

          {/* A-Z Table */}
          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-4">
              ICAO Radiotelephony Alphabet (A–Z)
            </h2>
            <div className="overflow-x-auto border border-[#CBD5E1]">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-[#0B2545] text-white font-mono text-xs uppercase">
                    <th className="py-3 px-4 border-r border-slate-700">
                      Letter
                    </th>
                    <th className="py-3 px-4 border-r border-slate-700">
                      ICAO Code Word
                    </th>
                    <th className="py-3 px-4 border-r border-slate-700">
                      Syllable Emphasis (Pronunciation)
                    </th>
                    <th className="py-3 px-4">Morse Code</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#CBD5E1]">
                  {ICAO_PHONETIC_ALPHABET.map((item) => (
                    <tr key={item.letter} className="hover:bg-[#F6F8FB]">
                      <td className="py-3 px-4 font-mono font-bold text-[#0B2545] border-r border-[#CBD5E1]">
                        {item.letter}
                      </td>
                      <td className="py-3 px-4 font-bold text-[#16202B] border-r border-[#CBD5E1]">
                        {item.codeWord}
                      </td>
                      <td className="py-3 px-4 font-mono text-xs text-[#5C6B7A] border-r border-[#CBD5E1]">
                        {item.pronunciation}
                      </td>
                      <td className="py-3 px-4 font-mono text-sm text-[#0B2545]">
                        {item.morse}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Numerals Table */}
          <div className="bg-white border border-[#CBD5E1] p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[#0B2545] mb-4">
              ICAO Radiotelephony Numerals (0–9)
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {ICAO_NUMERALS.map((num) => (
                <div
                  key={num.digit}
                  className="bg-[#F6F8FB] border border-[#CBD5E1] p-4 font-mono"
                >
                  <span className="text-xl font-bold text-[#0B2545] block">
                    {num.digit}
                  </span>
                  <span className="text-sm font-sans font-semibold text-[#16202B] block">
                    {num.word}
                  </span>
                  <span className="text-xs text-[#5C6B7A] block mt-1">
                    {num.pronunciation}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#CBD5E1] p-6 flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="space-x-4 font-semibold">
              <Link
                href="/tools/aircraft-registration-prefixes"
                className="text-[#0B2545] underline underline-offset-4"
              >
                Next Tool: Aircraft Registration Prefixes →
              </Link>
              <Link
                href="/tools/utc-time-converter"
                className="text-[#0B2545] underline underline-offset-4"
              >
                UTC / PKT Time Converter →
              </Link>
            </div>
            <Link
              href="/services/flight-permission"
              className="font-bold text-[#0B2545] underline underline-offset-4"
            >
              Pakistan Flight Permission Services →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

