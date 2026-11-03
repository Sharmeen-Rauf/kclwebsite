export interface AirlineClient {
  name: string;
  icao: string;
  iata: string;
  country: string;
  logo: string;
  alt: string;
  summary: string;
}

export const REAL_CLIENTS: AirlineClient[] = [
  {
    name: "Qantas",
    icao: "QFA",
    iata: "QF",
    country: "Australia",
    logo: "/img/client-qantas.svg",
    alt: "Qantas Airways (ICAO: QFA) client logo",
    summary:
      "Overflight permission coordination and operational flight support across Pakistan Flight Information Regions.",
  },
  {
    name: "Royal Brunei Airlines",
    icao: "RBA",
    iata: "BI",
    country: "Brunei Darussalam",
    logo: "/img/client-royal-brunei.svg",
    alt: "Royal Brunei Airlines (ICAO: RBA) client logo",
    summary:
      "Scheduled and non-scheduled flight permission representation and airway clearance support.",
  },
  {
    name: "Air Mauritius",
    icao: "MAU",
    iata: "MK",
    country: "Mauritius",
    logo: "/img/client-air-mauritius.svg",
    alt: "Air Mauritius (ICAO: MAU) client logo",
    summary:
      "Authorized flight permission filing and dispatch liaison with Pakistan aviation authorities.",
  },
  {
    name: "Cambodia Airways",
    icao: "KME",
    iata: "KR",
    country: "Cambodia",
    logo: "/img/client-cambodia-airways.svg",
    alt: "Cambodia Airways (ICAO: KME) client logo",
    summary:
      "Flight permission management, ground handling coordination and operational dispatch assistance.",
  },
];

