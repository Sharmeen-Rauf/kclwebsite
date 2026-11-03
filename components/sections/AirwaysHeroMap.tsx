import React from "react";

export function AirwaysHeroMap() {
  return (
    <div
      className="bg-[#07192F] border border-slate-700 p-4 sm:p-5 relative overflow-hidden"
      aria-label="En-route aeronautical chart of Pakistan Karachi (OPKR) and Lahore (OPLR) Flight Information Regions"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-700/80 font-mono text-[11px] text-slate-300">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-[#E8A200]" />
          <span className="font-semibold text-white">
            EN-ROUTE CHART // OPKR &amp; OPLR FIR
          </span>
        </div>
        <span className="text-slate-400">SCALE: SCHEMATIC // H24 WATCH</span>
      </div>

      <svg
        viewBox="0 0 620 430"
        className="w-full h-auto block bg-[#0B2545] border border-slate-700/90"
        role="img"
        aria-labelledby="airways-chart-title airways-chart-desc"
      >
        <title id="airways-chart-title">
          Pakistan Airspace Airways &amp; Primary ICAO Aerodromes Chart
        </title>
        <desc id="airways-chart-desc">
          Technical vector map displaying Karachi FIR (OPKR) and Lahore FIR
          (OPLR), international airway corridors G214, N644, L509, A466, and
          airports OPKC, OPLA, OPIS, OPPS, OPMT, and OPQT.
        </desc>

        {/* Coordinate Graticule Grid */}
        <g stroke="#16355D" strokeWidth="1">
          <line x1="0" y1="70" x2="620" y2="70" />
          <line x1="0" y1="150" x2="620" y2="150" />
          <line x1="0" y1="230" x2="620" y2="230" />
          <line x1="0" y1="310" x2="620" y2="310" />
          <line x1="0" y1="390" x2="620" y2="390" />
          <line x1="100" y1="0" x2="100" y2="430" />
          <line x1="220" y1="0" x2="220" y2="430" />
          <line x1="340" y1="0" x2="340" y2="430" />
          <line x1="460" y1="0" x2="460" y2="430" />
          <line x1="580" y1="0" x2="580" y2="430" />
        </g>

        {/* Coordinate Labels */}
        <g
          fill="#64748B"
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fontSize="9"
        >
          <text x="8" y="66">
            36°N
          </text>
          <text x="8" y="146">
            32°N
          </text>
          <text x="8" y="226">
            28°N
          </text>
          <text x="8" y="306">
            24°N
          </text>
          <text x="104" y="422">
            62°E
          </text>
          <text x="224" y="422">
            66°E
          </text>
          <text x="344" y="422">
            70°E
          </text>
          <text x="464" y="422">
            74°E
          </text>
        </g>

        {/* FIR Boundary Polygon (OPKR & OPLR Schematic) */}
        <polygon
          points="95,295 160,210 275,180 345,75 450,48 510,115 475,215 395,285 320,385 170,395"
          fill="#102E56"
          fillOpacity="0.65"
          stroke="#475569"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />

        {/* Internal FIR Dividing Line (OPLR North / OPKR South) */}
        <line
          x1="230"
          y1="196"
          x2="455"
          y2="232"
          stroke="#64748B"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />

        {/* FIR Identification Callouts */}
        <g fontFamily="ui-monospace, SFMono-Regular, monospace">
          <rect
            x="128"
            y="328"
            width="110"
            height="20"
            fill="#07192F"
            stroke="#334155"
          />
          <text x="135" y="341" fill="#CBD5E1" fontSize="10" fontWeight="bold">
            FIR: OPKR (SOUTH)
          </text>

          <rect
            x="265"
            y="42"
            width="110"
            height="20"
            fill="#07192F"
            stroke="#334155"
          />
          <text x="272" y="55" fill="#CBD5E1" fontSize="10" fontWeight="bold">
            FIR: OPLR (NORTH)
          </text>
        </g>

        {/* Self-Drawing High-Altitude ATS Airway Routes */}
        {/* Route 1: Gulf -> OPKC -> Delhi/SE Asia (G214 / N644) */}
        <path
          d="M 30 335 L 250 330 L 465 255 L 600 235"
          fill="none"
          stroke="#E8A200"
          strokeWidth="2.2"
          className="airway-route-line"
        />

        {/* Route 2: Europe/Central Asia -> OPIS -> OPLA -> SE Asia (L509 / A466) */}
        <path
          d="M 140 55 L 385 95 L 445 165 L 595 190"
          fill="none"
          stroke="#E8A200"
          strokeWidth="2.2"
          className="airway-route-line"
        />

        {/* Route 3: North-South Domestic & Transit Spine (OPKC -> OPMT -> OPIS) */}
        <path
          d="M 250 330 L 365 205 L 415 110"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="1.6"
          className="airway-route-line"
        />

        {/* Route 4: Western Corridor via OPQT -> OPLA */}
        <path
          d="M 45 225 L 235 215 L 445 165"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="1.5"
          strokeDasharray="5 3"
        />

        {/* Airway Route Designator Tags */}
        <g
          fontFamily="ui-monospace, SFMono-Regular, monospace"
          fontSize="9"
          fontWeight="600"
        >
          <rect
            x="122"
            y="318"
            width="34"
            height="14"
            fill="#07192F"
            stroke="#E8A200"
            strokeWidth="0.8"
          />
          <text x="127" y="328" fill="#E8A200">
            G214
          </text>

          <rect
            x="505"
            y="236"
            width="36"
            height="14"
            fill="#07192F"
            stroke="#E8A200"
            strokeWidth="0.8"
          />
          <text x="510" y="246" fill="#E8A200">
            N644
          </text>

          <rect
            x="235"
            y="62"
            width="34"
            height="14"
            fill="#07192F"
            stroke="#E8A200"
            strokeWidth="0.8"
          />
          <text x="240" y="72" fill="#E8A200">
            L509
          </text>

          <rect
            x="512"
            y="168"
            width="36"
            height="14"
            fill="#07192F"
            stroke="#E8A200"
            strokeWidth="0.8"
          />
          <text x="517" y="178" fill="#E8A200">
            A466
          </text>
        </g>

        {/* Primary ICAO Airport Waypoints */}
        {/* OPKC - Karachi */}
        <g transform="translate(250, 330)">
          <circle r="6" fill="#0B2545" stroke="#E8A200" strokeWidth="2" />
          <circle r="2.5" fill="#E8A200" />
          <rect
            x="10"
            y="-10"
            width="105"
            height="22"
            fill="#07192F"
            stroke="#E8A200"
            strokeWidth="1"
          />
          <text
            x="16"
            y="4"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="10"
            fontWeight="bold"
            fill="#FFFFFF"
          >
            OPKC · KARACHI
          </text>
        </g>

        {/* OPLA - Lahore */}
        <g transform="translate(445, 165)">
          <circle r="6" fill="#0B2545" stroke="#E8A200" strokeWidth="2" />
          <circle r="2.5" fill="#E8A200" />
          <rect
            x="10"
            y="-12"
            width="102"
            height="22"
            fill="#07192F"
            stroke="#E8A200"
            strokeWidth="1"
          />
          <text
            x="16"
            y="2"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="10"
            fontWeight="bold"
            fill="#FFFFFF"
          >
            OPLA · LAHORE
          </text>
        </g>

        {/* OPIS - Islamabad */}
        <g transform="translate(415, 110)">
          <circle r="6" fill="#0B2545" stroke="#E8A200" strokeWidth="2" />
          <circle r="2.5" fill="#E8A200" />
          <rect
            x="10"
            y="-14"
            width="116"
            height="22"
            fill="#07192F"
            stroke="#E8A200"
            strokeWidth="1"
          />
          <text
            x="16"
            y="0"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="10"
            fontWeight="bold"
            fill="#FFFFFF"
          >
            OPIS · ISLAMABAD
          </text>
        </g>

        {/* OPPS - Peshawar */}
        <g transform="translate(385, 95)">
          <circle r="4.5" fill="#0B2545" stroke="#93C5FD" strokeWidth="1.8" />
          <text
            x="-92"
            y="4"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="10"
            fill="#CBD5E1"
          >
            OPPS · PESHAWAR
          </text>
        </g>

        {/* OPMT - Multan */}
        <g transform="translate(365, 205)">
          <circle r="4.5" fill="#0B2545" stroke="#93C5FD" strokeWidth="1.8" />
          <text
            x="9"
            y="14"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="10"
            fill="#CBD5E1"
          >
            OPMT · MULTAN
          </text>
        </g>

        {/* OPQT - Quetta */}
        <g transform="translate(235, 215)">
          <circle r="4.5" fill="#0B2545" stroke="#93C5FD" strokeWidth="1.8" />
          <text
            x="-86"
            y="-8"
            fontFamily="ui-monospace, SFMono-Regular, monospace"
            fontSize="10"
            fill="#CBD5E1"
          >
            OPQT · QUETTA
          </text>
        </g>
      </svg>

      <div className="mt-3 pt-3 border-t border-slate-700/80 grid grid-cols-3 gap-2 font-mono text-[11px] text-slate-300">
        <div>
          <span className="text-slate-400 block">KARACHI FIR</span>
          <span className="text-white font-semibold">OPKR // FL150–UNL</span>
        </div>
        <div>
          <span className="text-slate-400 block">LAHORE FIR</span>
          <span className="text-white font-semibold">OPLR // FL150–UNL</span>
        </div>
        <div>
          <span className="text-slate-400 block">AGENT STATUS</span>
          <span className="text-[#E8A200] font-semibold">AFPA AUTHORIZED</span>
        </div>
      </div>
    </div>
  );
}

