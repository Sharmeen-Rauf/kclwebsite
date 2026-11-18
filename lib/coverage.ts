import { ISO_COUNTRIES } from "@/content/countries";
import type { CoverageTierKey } from "@/content/facts";

export interface CoverageTierResult {
  key: CoverageTierKey;
  label: string;
  description: string;
  badgeClass: string;
}

const DIRECT_COUNTRIES = new Set([
  "bahrain",
  "qatar",
  "kenya",
  "central african republic",
  "togo",
  "ghana",
  "mauritius",
]);

const DIRECT_ISOS = new Set(["BH", "QA", "KE", "CF", "TG", "GH", "MU"]);

const PARTNER_REGIONS = new Set(["Asia", "Middle East", "Africa"]);

export function getCountryCoverageTier(
  countryNameOrIso: string
): CoverageTierResult {
  const normalized = countryNameOrIso.trim().toLowerCase();
  const upper = countryNameOrIso.trim().toUpperCase();

  if (normalized === "pakistan" || upper === "PK" || upper.startsWith("OP")) {
    return {
      key: "filed",
      label: "Filed by KCL",
      description: "KCL prepares, files and follows up directly with PCAA.",
      badgeClass: "bg-[#F4C400] text-[#0B2545]",
    };
  }

  if (DIRECT_COUNTRIES.has(normalized) || DIRECT_ISOS.has(upper)) {
    return {
      key: "direct",
      label: "Direct access",
      description: "KCL coordinates and follows up directly with the authority.",
      badgeClass: "bg-[#133661] text-white",
    };
  }

  const matched = ISO_COUNTRIES.find(
    (c) =>
      c.name.toLowerCase() === normalized ||
      c.iso.toUpperCase() === upper
  );

  if (matched && PARTNER_REGIONS.has(matched.region)) {
    return {
      key: "partner",
      label: "Partner-supported",
      description: "Coordinated through regional partners across Asia, the Middle East, and Africa.",
      badgeClass: "bg-[#475569] text-white",
    };
  }

  return {
    key: "advice",
    label: "Advice only",
    description: "Advice and partner introduction only.",
    badgeClass: "bg-[#E2E8F0] text-[#0B2545]",
  };
}
