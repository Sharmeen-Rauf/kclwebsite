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
      "Overflight permission facilitation and operational flight support across Pakistan Flight Information Regions.",
  },
  {
    name: "Royal Brunei Airlines",
    icao: "RBA",
    iata: "BI",
    country: "Brunei Darussalam",
    logo: "/img/client-royal-brunei.svg",
    alt: "Royal Brunei Airlines (ICAO: RBA) client logo",
    summary:
      "Scheduled and non-scheduled flight permission facilitation and airway clearance coordination.",
  },
  {
    name: "Air Mauritius",
    icao: "MAU",
    iata: "MK",
    country: "Mauritius",
    logo: "/img/client-air-mauritius.svg",
    alt: "Air Mauritius (ICAO: MAU) client logo",
    summary:
      "Authorized flight permission filing and operational liaison with Pakistan aviation authorities.",
  },
  {
    name: "Cambodia Airways",
    icao: "KME",
    iata: "KR",
    country: "Cambodia",
    logo: "/img/client-cambodia-airways.svg",
    alt: "Cambodia Airways (ICAO: KME) client logo",
    summary:
      "Flight permission facilitation, ground handling coordination and 24/7 operational support.",
  },
];
