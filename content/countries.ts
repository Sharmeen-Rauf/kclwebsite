export interface CountryGuideSummary {
  name: string;
  slug: string;
  href: string;
  status: "available" | "on_request";
  firCodes: string[];
  description: string;
}

export const COUNTRY_GUIDES: CountryGuideSummary[] = [
  {
    name: "Pakistan",
    slug: "pakistan",
    href: "/permit-directory/pakistan",
    status: "available",
    firCodes: ["OPKR", "OPLR"],
    description:
      "Comprehensive overflight and landing permit procedures for Karachi (OPKR) and Lahore (OPLR) FIRs.",
  },
];

