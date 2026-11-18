import { KCL_FACTS } from "@/content/facts";

export interface AirlineClient {
  name: string;
  icao: string;
  iata: string;
  country: string;
  logo: string;
  alt: string;
  summary: string;
  displayPermission: boolean;
}

export const REAL_CLIENTS: AirlineClient[] = KCL_FACTS.clients
  .filter((c): c is typeof c & { logo: string } => Boolean(c.logo))
  .map((c) => ({
    name: c.name,
    icao: c.icao,
    iata: c.iata,
    country: c.country,
    logo: c.logo,
    alt: `${c.name} (ICAO: ${c.icao}) official logo`,
    summary:
      "Flight permission facilitation and operational coordination across approved KCL coverage tiers.",
    displayPermission: c.displayPermission,
  }));

export const DISPLAYABLE_CLIENTS: AirlineClient[] = REAL_CLIENTS.filter(
  (c) => c.displayPermission
);
