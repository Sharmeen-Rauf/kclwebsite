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
    logo: "/img/imgi_11_qantas airline (1).png",
    alt: "Qantas Airways (ICAO: QFA) official logo",
    summary:
      "Overflight permission facilitation and operational flight support across Pakistan Flight Information Regions.",
  },
  {
    name: "Royal Brunei Airlines",
    icao: "RBA",
    iata: "BI",
    country: "Brunei Darussalam",
    logo: "/img/imgi_12_brunei airline.jpg",
    alt: "Royal Brunei Airlines (ICAO: RBA) official logo",
    summary:
      "Scheduled and non-scheduled flight permission facilitation and airway clearance coordination.",
  },
  {
    name: "Air Mauritius",
    icao: "MAU",
    iata: "MK",
    country: "Mauritius",
    logo: "/img/imgi_13_air mauritius.png",
    alt: "Air Mauritius (ICAO: MAU) official logo",
    summary:
      "Authorized flight permission filing and operational liaison with Pakistan aviation authorities.",
  },
  {
    name: "Cambodia Airways",
    icao: "KME",
    iata: "KR",
    country: "Cambodia",
    logo: "/img/imgi_14_cambodia.png",
    alt: "Cambodia Airways (ICAO: KME) official logo",
    summary:
      "Flight permission facilitation, ground handling coordination and 24/7 operational support.",
  },
  {
    name: "Virgin Australia",
    icao: "VOZ",
    iata: "VA",
    country: "Australia",
    logo: "/img/Virgin-Logo-1.png",
    alt: "Virgin Australia (ICAO: VOZ) official logo",
    summary:
      "International flight permission facilitation and airspace coordination across Pakistan Flight Information Regions.",
  },
  {
    name: "Batik Air",
    icao: "BTK",
    iata: "ID",
    country: "Indonesia",
    logo: "/img/batik-air.png",
    alt: "Batik Air (ICAO: BTK) official logo",
    summary:
      "Scheduled and non-scheduled flight permission facilitation, ground handling coordination and 24/7 operational support.",
  },
];
