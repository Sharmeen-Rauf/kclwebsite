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

export type WorldRegion =
  | "Africa"
  | "Middle East"
  | "Europe"
  | "Asia"
  | "Americas"
  | "Caribbean"
  | "Oceania";

export interface IsoCountry {
  name: string;
  iso: string;
  region: WorldRegion;
}

export const ISO_COUNTRIES: IsoCountry[] = [
  // Middle East
  { name: "United Arab Emirates", iso: "AE", region: "Middle East" },
  { name: "Saudi Arabia", iso: "SA", region: "Middle East" },
  { name: "Qatar", iso: "QA", region: "Middle East" },
  { name: "Bahrain", iso: "BH", region: "Middle East" },
  { name: "Kuwait", iso: "KW", region: "Middle East" },
  { name: "Oman", iso: "OM", region: "Middle East" },
  { name: "Jordan", iso: "JO", region: "Middle East" },
  { name: "Iraq", iso: "IQ", region: "Middle East" },
  { name: "Lebanon", iso: "LB", region: "Middle East" },
  { name: "Iran", iso: "IR", region: "Middle East" },
  { name: "Yemen", iso: "YE", region: "Middle East" },
  { name: "Israel", iso: "IL", region: "Middle East" },

  // Asia
  { name: "Pakistan", iso: "PK", region: "Asia" },
  { name: "India", iso: "IN", region: "Asia" },
  { name: "Bangladesh", iso: "BD", region: "Asia" },
  { name: "Sri Lanka", iso: "LK", region: "Asia" },
  { name: "Maldives", iso: "MV", region: "Asia" },
  { name: "Nepal", iso: "NP", region: "Asia" },
  { name: "China", iso: "CN", region: "Asia" },
  { name: "Japan", iso: "JP", region: "Asia" },
  { name: "South Korea", iso: "KR", region: "Asia" },
  { name: "Singapore", iso: "SG", region: "Asia" },
  { name: "Malaysia", iso: "MY", region: "Asia" },
  { name: "Thailand", iso: "TH", region: "Asia" },
  { name: "Indonesia", iso: "ID", region: "Asia" },
  { name: "Philippines", iso: "PH", region: "Asia" },
  { name: "Vietnam", iso: "VN", region: "Asia" },
  { name: "Kazakhstan", iso: "KZ", region: "Asia" },
  { name: "Uzbekistan", iso: "UZ", region: "Asia" },
  { name: "Turkmenistan", iso: "TM", region: "Asia" },
  { name: "Tajikistan", iso: "TJ", region: "Asia" },
  { name: "Kyrgyzstan", iso: "KG", region: "Asia" },
  { name: "Afghanistan", iso: "AF", region: "Asia" },
  { name: "Azerbaijan", iso: "AZ", region: "Asia" },
  { name: "Georgia", iso: "GE", region: "Asia" },
  { name: "Armenia", iso: "AM", region: "Asia" },

  // Europe
  { name: "United Kingdom", iso: "GB", region: "Europe" },
  { name: "France", iso: "FR", region: "Europe" },
  { name: "Germany", iso: "DE", region: "Europe" },
  { name: "Italy", iso: "IT", region: "Europe" },
  { name: "Spain", iso: "ES", region: "Europe" },
  { name: "Netherlands", iso: "NL", region: "Europe" },
  { name: "Belgium", iso: "BE", region: "Europe" },
  { name: "Switzerland", iso: "CH", region: "Europe" },
  { name: "Austria", iso: "AT", region: "Europe" },
  { name: "Turkey", iso: "TR", region: "Europe" },
  { name: "Greece", iso: "GR", region: "Europe" },
  { name: "Cyprus", iso: "CY", region: "Europe" },
  { name: "Malta", iso: "MT", region: "Europe" },
  { name: "Portugal", iso: "PT", region: "Europe" },
  { name: "Ireland", iso: "IE", region: "Europe" },
  { name: "Poland", iso: "PL", region: "Europe" },
  { name: "Czech Republic", iso: "CZ", region: "Europe" },
  { name: "Hungary", iso: "HU", region: "Europe" },
  { name: "Romania", iso: "RO", region: "Europe" },
  { name: "Bulgaria", iso: "BG", region: "Europe" },
  { name: "Croatia", iso: "HR", region: "Europe" },
  { name: "Sweden", iso: "SE", region: "Europe" },
  { name: "Norway", iso: "NO", region: "Europe" },
  { name: "Denmark", iso: "DK", region: "Europe" },
  { name: "Finland", iso: "FI", region: "Europe" },

  // Africa
  { name: "Egypt", iso: "EG", region: "Africa" },
  { name: "South Africa", iso: "ZA", region: "Africa" },
  { name: "Kenya", iso: "KE", region: "Africa" },
  { name: "Nigeria", iso: "NG", region: "Africa" },
  { name: "Ethiopia", iso: "ET", region: "Africa" },
  { name: "Morocco", iso: "MA", region: "Africa" },
  { name: "Algeria", iso: "DZ", region: "Africa" },
  { name: "Tunisia", iso: "TN", region: "Africa" },
  { name: "Libya", iso: "LY", region: "Africa" },
  { name: "Sudan", iso: "SD", region: "Africa" },
  { name: "Ghana", iso: "GH", region: "Africa" },
  { name: "Tanzania", iso: "TZ", region: "Africa" },
  { name: "Uganda", iso: "UG", region: "Africa" },
  { name: "Senegal", iso: "SN", region: "Africa" },
  { name: "Angola", iso: "AO", region: "Africa" },
  { name: "Djibouti", iso: "DJ", region: "Africa" },
  { name: "Mauritius", iso: "MU", region: "Africa" },
  { name: "Seychelles", iso: "SC", region: "Africa" },

  // Americas
  { name: "United States", iso: "US", region: "Americas" },
  { name: "Canada", iso: "CA", region: "Americas" },
  { name: "Mexico", iso: "MX", region: "Americas" },
  { name: "Brazil", iso: "BR", region: "Americas" },
  { name: "Argentina", iso: "AR", region: "Americas" },
  { name: "Colombia", iso: "CO", region: "Americas" },
  { name: "Chile", iso: "CL", region: "Americas" },
  { name: "Peru", iso: "PE", region: "Americas" },
  { name: "Panama", iso: "PA", region: "Americas" },
  { name: "Costa Rica", iso: "CR", region: "Americas" },

  // Caribbean
  { name: "Bahamas", iso: "BS", region: "Caribbean" },
  { name: "Dominican Republic", iso: "DO", region: "Caribbean" },
  { name: "Jamaica", iso: "JM", region: "Caribbean" },
  { name: "Barbados", iso: "BB", region: "Caribbean" },
  { name: "Trinidad and Tobago", iso: "TT", region: "Caribbean" },
  { name: "Antigua and Barbuda", iso: "AG", region: "Caribbean" },
  { name: "Cayman Islands", iso: "KY", region: "Caribbean" },
  { name: "Saint Lucia", iso: "LC", region: "Caribbean" },
  { name: "Aruba", iso: "AW", region: "Caribbean" },
  { name: "Curacao", iso: "CW", region: "Caribbean" },

  // Oceania
  { name: "Australia", iso: "AU", region: "Oceania" },
  { name: "New Zealand", iso: "NZ", region: "Oceania" },
  { name: "Fiji", iso: "FJ", region: "Oceania" },
  { name: "Papua New Guinea", iso: "PG", region: "Oceania" },
];
