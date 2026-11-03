export interface PhoneticEntry {
  letter: string;
  codeWord: string;
  pronunciation: string;
  morse: string;
}

export const ICAO_PHONETIC_ALPHABET: PhoneticEntry[] = [
  { letter: "A", codeWord: "Alfa", pronunciation: "AL-FAH", morse: "· −" },
  { letter: "B", codeWord: "Bravo", pronunciation: "BRAH-VOH", morse: "− · · ·" },
  { letter: "C", codeWord: "Charlie", pronunciation: "CHAR-LEE", morse: "− · − ·" },
  { letter: "D", codeWord: "Delta", pronunciation: "DELL-TAH", morse: "− · ·" },
  { letter: "E", codeWord: "Echo", pronunciation: "ECK-OH", morse: "·" },
  { letter: "F", codeWord: "Foxtrot", pronunciation: "FOKS-TROT", morse: "· · − ·" },
  { letter: "G", codeWord: "Golf", pronunciation: "GOLF", morse: "− − ·" },
  { letter: "H", codeWord: "Hotel", pronunciation: "HOH-TEL", morse: "· · · ·" },
  { letter: "I", codeWord: "India", pronunciation: "IN-DEE-AH", morse: "· ·" },
  { letter: "J", codeWord: "Juliett", pronunciation: "JEW-LEE-ETT", morse: "· − − −" },
  { letter: "K", codeWord: "Kilo", pronunciation: "KEY-LOH", morse: "− · −" },
  { letter: "L", codeWord: "Lima", pronunciation: "LEE-MAH", morse: "· − · ·" },
  { letter: "M", codeWord: "Mike", pronunciation: "MIKE", morse: "− −" },
  { letter: "N", codeWord: "November", pronunciation: "NO-VEM-BER", morse: "− ·" },
  { letter: "O", codeWord: "Oscar", pronunciation: "OSS-CAH", morse: "− − −" },
  { letter: "P", codeWord: "Papa", pronunciation: "PAH-PAH", morse: "· − − ·" },
  { letter: "Q", codeWord: "Quebec", pronunciation: "KEH-BECK", morse: "− − · −" },
  { letter: "R", codeWord: "Romeo", pronunciation: "ROW-ME-OH", morse: "· − ·" },
  { letter: "S", codeWord: "Sierra", pronunciation: "SEE-AIR-RAH", morse: "· · ·" },
  { letter: "T", codeWord: "Tango", pronunciation: "TANG-GO", morse: "−" },
  { letter: "U", codeWord: "Uniform", pronunciation: "YOU-NEE-FORM", morse: "· · −" },
  { letter: "V", codeWord: "Victor", pronunciation: "VIK-TAH", morse: "· · · −" },
  { letter: "W", codeWord: "Whiskey", pronunciation: "WISS-KEY", morse: "· − −" },
  { letter: "X", codeWord: "X-ray", pronunciation: "ECKS-RAY", morse: "− · · −" },
  { letter: "Y", codeWord: "Yankee", pronunciation: "YANG-KEY", morse: "− · − −" },
  { letter: "Z", codeWord: "Zulu", pronunciation: "ZOO-LOO", morse: "− − · ·" },
];

export const ICAO_NUMERALS: Array<{ digit: string; word: string; pronunciation: string }> = [
  { digit: "0", word: "Zero", pronunciation: "ZEE-RO" },
  { digit: "1", word: "One", pronunciation: "WUN" },
  { digit: "2", word: "Two", pronunciation: "TOO" },
  { digit: "3", word: "Three", pronunciation: "TREE" },
  { digit: "4", word: "Four", pronunciation: "FOW-ER" },
  { digit: "5", word: "Five", pronunciation: "FIFE" },
  { digit: "6", word: "Six", pronunciation: "SIX" },
  { digit: "7", word: "Seven", pronunciation: "SEV-EN" },
  { digit: "8", word: "Eight", pronunciation: "AIT" },
  { digit: "9", word: "Nine", pronunciation: "NIN-ER" },
];

export interface RegistrationPrefixEntry {
  prefix: string;
  country: string;
  region: string;
  icaoRegionPrefix: string;
  exampleFormat: string;
}

export const AIRCRAFT_REGISTRATION_PREFIXES: RegistrationPrefixEntry[] = [
  {
    prefix: "AP",
    country: "Pakistan",
    region: "South Asia",
    icaoRegionPrefix: "OP (OPKR / OPLR)",
    exampleFormat: "AP-BGZ",
  },
  {
    prefix: "VH",
    country: "Australia",
    region: "Oceania",
    icaoRegionPrefix: "Y",
    exampleFormat: "VH-OQA",
  },
  {
    prefix: "V8",
    country: "Brunei Darussalam",
    region: "Southeast Asia",
    icaoRegionPrefix: "WB",
    exampleFormat: "V8-RBA",
  },
  {
    prefix: "3B",
    country: "Mauritius",
    region: "Indian Ocean / Africa",
    icaoRegionPrefix: "FI",
    exampleFormat: "3B-NBU",
  },
  {
    prefix: "XU",
    country: "Cambodia",
    region: "Southeast Asia",
    icaoRegionPrefix: "VD",
    exampleFormat: "XU-KRA",
  },
  {
    prefix: "A6",
    country: "United Arab Emirates",
    region: "Middle East",
    icaoRegionPrefix: "OM",
    exampleFormat: "A6-EUA",
  },
  {
    prefix: "A7",
    country: "Qatar",
    region: "Middle East",
    icaoRegionPrefix: "OT",
    exampleFormat: "A7-BAA",
  },
  {
    prefix: "HZ",
    country: "Saudi Arabia",
    region: "Middle East",
    icaoRegionPrefix: "OE",
    exampleFormat: "HZ-AK11",
  },
  {
    prefix: "A4O",
    country: "Oman",
    region: "Middle East",
    icaoRegionPrefix: "OO",
    exampleFormat: "A4O-SA",
  },
  {
    prefix: "9K",
    country: "Kuwait",
    region: "Middle East",
    icaoRegionPrefix: "OK",
    exampleFormat: "9K-AOA",
  },
  {
    prefix: "A9C",
    country: "Bahrain",
    region: "Middle East",
    icaoRegionPrefix: "OB",
    exampleFormat: "A9C-FA",
  },
  {
    prefix: "TC",
    country: "Türkiye",
    region: "Europe / Middle East",
    icaoRegionPrefix: "LT",
    exampleFormat: "TC-JJA",
  },
  {
    prefix: "B",
    country: "China",
    region: "East Asia",
    icaoRegionPrefix: "Z",
    exampleFormat: "B-2088",
  },
  {
    prefix: "HS",
    country: "Thailand",
    region: "Southeast Asia",
    icaoRegionPrefix: "VT",
    exampleFormat: "HS-TKA",
  },
  {
    prefix: "9M",
    country: "Malaysia",
    region: "Southeast Asia",
    icaoRegionPrefix: "WM / WB",
    exampleFormat: "9M-MNA",
  },
  {
    prefix: "9V",
    country: "Singapore",
    region: "Southeast Asia",
    icaoRegionPrefix: "WS",
    exampleFormat: "9V-SKA",
  },
  {
    prefix: "VN",
    country: "Vietnam",
    region: "Southeast Asia",
    icaoRegionPrefix: "VV",
    exampleFormat: "VN-A861",
  },
  {
    prefix: "PK",
    country: "Indonesia",
    region: "Southeast Asia",
    icaoRegionPrefix: "WA / WI",
    exampleFormat: "PK-GIA",
  },
  {
    prefix: "4R",
    country: "Sri Lanka",
    region: "South Asia",
    icaoRegionPrefix: "VC",
    exampleFormat: "4R-ALA",
  },
  {
    prefix: "S2",
    country: "Bangladesh",
    region: "South Asia",
    icaoRegionPrefix: "VG",
    exampleFormat: "S2-AJS",
  },
  {
    prefix: "UK",
    country: "Uzbekistan",
    region: "Central Asia",
    icaoRegionPrefix: "UT",
    exampleFormat: "UK-78701",
  },
  {
    prefix: "UP",
    country: "Kazakhstan",
    region: "Central Asia",
    icaoRegionPrefix: "UA",
    exampleFormat: "UP-B6701",
  },
  {
    prefix: "4K",
    country: "Azerbaijan",
    region: "Caucasus / Central Asia",
    icaoRegionPrefix: "UB",
    exampleFormat: "4K-AZ01",
  },
  {
    prefix: "G",
    country: "United Kingdom",
    region: "Europe",
    icaoRegionPrefix: "EG",
    exampleFormat: "G-ZBJA",
  },
  {
    prefix: "D",
    country: "Germany",
    region: "Europe",
    icaoRegionPrefix: "ED",
    exampleFormat: "D-AIMA",
  },
  {
    prefix: "F",
    country: "France",
    region: "Europe",
    icaoRegionPrefix: "LF",
    exampleFormat: "F-GZNA",
  },
  {
    prefix: "LX",
    country: "Luxembourg",
    region: "Europe",
    icaoRegionPrefix: "EL",
    exampleFormat: "LX-VCV",
  },
  {
    prefix: "9H",
    country: "Malta",
    region: "Europe",
    icaoRegionPrefix: "LM",
    exampleFormat: "9H-VJA",
  },
  {
    prefix: "OE",
    country: "Austria",
    region: "Europe",
    icaoRegionPrefix: "LO",
    exampleFormat: "OE-LPC",
  },
  {
    prefix: "HB",
    country: "Switzerland",
    region: "Europe",
    icaoRegionPrefix: "LS",
    exampleFormat: "HB-JNA",
  },
  {
    prefix: "N",
    country: "United States",
    region: "North America",
    icaoRegionPrefix: "K",
    exampleFormat: "N787BA",
  },
  {
    prefix: "C",
    country: "Canada",
    region: "North America",
    icaoRegionPrefix: "C",
    exampleFormat: "C-FGDZ",
  },
];

