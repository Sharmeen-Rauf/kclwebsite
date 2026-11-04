export interface Airport {
  icao: string;
  iata: string;
  name: string;
  city: string;
  country: string;
}

/**
 * Curated open dataset of international and commercial airports worldwide.
 * Public domain / OurAirports data formatted for fast client-side autocomplete.
 */
export const WORLD_AIRPORTS: Airport[] = [
  // Pakistan (Primary Operational Specialization)
  { icao: "OPKC", iata: "KHI", name: "Jinnah International Airport", city: "Karachi", country: "Pakistan" },
  { icao: "OPLA", iata: "LHE", name: "Allama Iqbal International Airport", city: "Lahore", country: "Pakistan" },
  { icao: "OPIS", iata: "ISB", name: "Islamabad International Airport", city: "Islamabad", country: "Pakistan" },
  { icao: "OPPS", iata: "PEW", name: "Bacha Khan International Airport", city: "Peshawar", country: "Pakistan" },
  { icao: "OPQT", iata: "UET", name: "Quetta International Airport", city: "Quetta", country: "Pakistan" },
  { icao: "OPMT", iata: "MUX", name: "Multan International Airport", city: "Multan", country: "Pakistan" },
  { icao: "OPST", iata: "SKT", name: "Sialkot International Airport", city: "Sialkot", country: "Pakistan" },
  { icao: "OPFA", iata: "LYP", name: "Faisalabad International Airport", city: "Faisalabad", country: "Pakistan" },
  { icao: "OPSK", iata: "SKK", name: "Sukkur Airport", city: "Sukkur", country: "Pakistan" },
  { icao: "OPGD", iata: "GWD", name: "Gwadar International Airport", city: "Gwadar", country: "Pakistan" },
  { icao: "OPRK", iata: "RYK", name: "Shaikh Zayed International Airport", city: "Rahim Yar Khan", country: "Pakistan" },

  // Middle East & Gulf
  { icao: "OMDB", iata: "DXB", name: "Dubai International Airport", city: "Dubai", country: "United Arab Emirates" },
  { icao: "OMDW", iata: "DWC", name: "Al Maktoum International Airport", city: "Dubai", country: "United Arab Emirates" },
  { icao: "OMAA", iata: "AUH", name: "Zayed International Airport", city: "Abu Dhabi", country: "United Arab Emirates" },
  { icao: "OMSJ", iata: "SHJ", name: "Sharjah International Airport", city: "Sharjah", country: "United Arab Emirates" },
  { icao: "OTHH", iata: "DOH", name: "Hamad International Airport", city: "Doha", country: "Qatar" },
  { icao: "OERK", iata: "RUH", name: "King Khalid International Airport", city: "Riyadh", country: "Saudi Arabia" },
  { icao: "OEJN", iata: "JED", name: "King Abdulaziz International Airport", city: "Jeddah", country: "Saudi Arabia" },
  { icao: "OEDF", iata: "DMM", name: "King Fahd International Airport", city: "Dammam", country: "Saudi Arabia" },
  { icao: "OEMA", iata: "MED", name: "Prince Mohammad Bin Abdulaziz Airport", city: "Medina", country: "Saudi Arabia" },
  { icao: "OBBI", iata: "BAH", name: "Bahrain International Airport", city: "Manama", country: "Bahrain" },
  { icao: "OKBK", iata: "KWI", name: "Kuwait International Airport", city: "Kuwait City", country: "Kuwait" },
  { icao: "OOMS", iata: "MCT", name: "Muscat International Airport", city: "Muscat", country: "Oman" },
  { icao: "OOSA", iata: "SLL", name: "Salalah Airport", city: "Salalah", country: "Oman" },
  { icao: "OJAI", iata: "AMM", name: "Queen Alia International Airport", city: "Amman", country: "Jordan" },
  { icao: "OLBA", iata: "BEY", name: "Beirut–Rafic Hariri International Airport", city: "Beirut", country: "Lebanon" },
  { icao: "ORBI", iata: "BGW", name: "Baghdad International Airport", city: "Baghdad", country: "Iraq" },
  { icao: "ORER", iata: "EBL", name: "Erbil International Airport", city: "Erbil", country: "Iraq" },
  { icao: "OIIE", iata: "IKA", name: "Tehran Imam Khomeini International Airport", city: "Tehran", country: "Iran" },

  // United Kingdom & Europe
  { icao: "EGLL", iata: "LHR", name: "Heathrow Airport", city: "London", country: "United Kingdom" },
  { icao: "EGKK", iata: "LGW", name: "Gatwick Airport", city: "London", country: "United Kingdom" },
  { icao: "EGSS", iata: "STN", name: "Stansted Airport", city: "London", country: "United Kingdom" },
  { icao: "EGGW", iata: "LTN", name: "Luton Airport", city: "London", country: "United Kingdom" },
  { icao: "EGCC", iata: "MAN", name: "Manchester Airport", city: "Manchester", country: "United Kingdom" },
  { icao: "EGPH", iata: "EDI", name: "Edinburgh Airport", city: "Edinburgh", country: "United Kingdom" },
  { icao: "EGPF", iata: "GLA", name: "Glasgow Airport", city: "Glasgow", country: "United Kingdom" },
  { icao: "EGBB", iata: "BHX", name: "Birmingham Airport", city: "Birmingham", country: "United Kingdom" },
  { icao: "LFPG", iata: "CDG", name: "Charles de Gaulle Airport", city: "Paris", country: "France" },
  { icao: "LFPO", iata: "ORY", name: "Paris Orly Airport", city: "Paris", country: "France" },
  { icao: "LFMN", iata: "NCE", name: "Nice Côte d'Azur Airport", city: "Nice", country: "France" },
  { icao: "EDDF", iata: "FRA", name: "Frankfurt Airport", city: "Frankfurt", country: "Germany" },
  { icao: "EDDM", iata: "MUC", name: "Munich Airport", city: "Munich", country: "Germany" },
  { icao: "EDDB", iata: "BER", name: "Berlin Brandenburg Airport", city: "Berlin", country: "Germany" },
  { icao: "EDDL", iata: "DUS", name: "Düsseldorf Airport", city: "Düsseldorf", country: "Germany" },
  { icao: "EHAM", iata: "AMS", name: "Amsterdam Airport Schiphol", city: "Amsterdam", country: "Netherlands" },
  { icao: "EBBR", iata: "BRU", name: "Brussels Airport", city: "Brussels", country: "Belgium" },
  { icao: "LSZH", iata: "ZRH", name: "Zurich Airport", city: "Zurich", country: "Switzerland" },
  { icao: "LSGG", iata: "GVA", name: "Geneva Airport", city: "Geneva", country: "Switzerland" },
  { icao: "LOWW", iata: "VIE", name: "Vienna International Airport", city: "Vienna", country: "Austria" },
  { icao: "LEMD", iata: "MAD", name: "Adolfo Suárez Madrid–Barajas Airport", city: "Madrid", country: "Spain" },
  { icao: "LEBL", iata: "BCN", name: "Josep Tarradellas Barcelona–El Prat Airport", city: "Barcelona", country: "Spain" },
  { icao: "LEPA", iata: "PMI", name: "Palma de Mallorca Airport", city: "Palma", country: "Spain" },
  { icao: "LPPT", iata: "LIS", name: "Humberto Delgado Airport", city: "Lisbon", country: "Portugal" },
  { icao: "LIRF", iata: "FCO", name: "Leonardo da Vinci–Fiumicino Airport", city: "Rome", country: "Italy" },
  { icao: "LIMC", iata: "MXP", name: "Milan Malpensa Airport", city: "Milan", country: "Italy" },
  { icao: "LIME", iata: "BGY", name: "Orio al Serio International Airport", city: "Milan / Bergamo", country: "Italy" },
  { icao: "LGAV", iata: "ATH", name: "Athens International Airport", city: "Athens", country: "Greece" },
  { icao: "LTFM", iata: "IST", name: "Istanbul Airport", city: "Istanbul", country: "Turkey" },
  { icao: "LTFJ", iata: "SAW", name: "Sabiha Gökçen International Airport", city: "Istanbul", country: "Turkey" },
  { icao: "LTAC", iata: "ESB", name: "Ankara Esenboğa Airport", city: "Ankara", country: "Turkey" },
  { icao: "LTAI", iata: "AYT", name: "Antalya Airport", city: "Antalya", country: "Turkey" },
  { icao: "EPWA", iata: "WAW", name: "Warsaw Chopin Airport", city: "Warsaw", country: "Poland" },
  { icao: "LKPR", iata: "PRG", name: "Václav Havel Airport Prague", city: "Prague", country: "Czech Republic" },
  { icao: "LHBP", iata: "BUD", name: "Budapest Ferenc Liszt International Airport", city: "Budapest", country: "Hungary" },
  { icao: "LROP", iata: "OTP", name: "Henri Coandă International Airport", city: "Bucharest", country: "Romania" },
  { icao: "EIDW", iata: "DUB", name: "Dublin Airport", city: "Dublin", country: "Ireland" },
  { icao: "EKCH", iata: "CPH", name: "Copenhagen Airport", city: "Copenhagen", country: "Denmark" },
  { icao: "ENGM", iata: "OSL", name: "Oslo Airport Gardermoen", city: "Oslo", country: "Norway" },
  { icao: "ESSA", iata: "ARN", name: "Stockholm Arlanda Airport", city: "Stockholm", country: "Sweden" },
  { icao: "EFHK", iata: "HEL", name: "Helsinki-Vantaa Airport", city: "Helsinki", country: "Finland" },
  { icao: "ELLX", iata: "LUX", name: "Luxembourg Airport", city: "Luxembourg", country: "Luxembourg" },
  { icao: "LMML", iata: "MLA", name: "Malta International Airport", city: "Luqa", country: "Malta" },
  { icao: "LCLK", iata: "LCA", name: "Larnaca International Airport", city: "Larnaca", country: "Cyprus" },

  // Asia (South, Central, East, Southeast)
  { icao: "VIDP", iata: "DEL", name: "Indira Gandhi International Airport", city: "Delhi", country: "India" },
  { icao: "VABB", iata: "BOM", name: "Chhatrapati Shivaji Maharaj Airport", city: "Mumbai", country: "India" },
  { icao: "VOBL", iata: "BLR", name: "Kempegowda International Airport", city: "Bengaluru", country: "India" },
  { icao: "VOMM", iata: "MAA", name: "Chennai International Airport", city: "Chennai", country: "India" },
  { icao: "VOCI", iata: "COK", name: "Cochin International Airport", city: "Kochi", country: "India" },
  { icao: "VCBI", iata: "CMB", name: "Bandaranaike International Airport", city: "Colombo", country: "Sri Lanka" },
  { icao: "VGHS", iata: "DAC", name: "Hazrat Shahjalal International Airport", city: "Dhaka", country: "Bangladesh" },
  { icao: "VRMM", iata: "MLE", name: "Velana International Airport", city: "Malé", country: "Maldives" },
  { icao: "VNKT", iata: "KTM", name: "Tribhuvan International Airport", city: "Kathmandu", country: "Nepal" },
  { icao: "UTTT", iata: "TAS", name: "Tashkent International Airport", city: "Tashkent", country: "Uzbekistan" },
  { icao: "UAAA", iata: "ALA", name: "Almaty International Airport", city: "Almaty", country: "Kazakhstan" },
  { icao: "UACC", iata: "NQZ", name: "Nursultan Nazarbayev International Airport", city: "Astana", country: "Kazakhstan" },
  { icao: "UCFM", iata: "FRU", name: "Manas International Airport", city: "Bishkek", country: "Kyrgyzstan" },
  { icao: "UBBB", iata: "GYD", name: "Heydar Aliyev International Airport", city: "Baku", country: "Azerbaijan" },
  { icao: "UGTB", iata: "TBS", name: "Tbilisi International Airport", city: "Tbilisi", country: "Georgia" },
  { icao: "WSSS", iata: "SIN", name: "Singapore Changi Airport", city: "Singapore", country: "Singapore" },
  { icao: "WMKK", iata: "KUL", name: "Kuala Lumpur International Airport", city: "Kuala Lumpur", country: "Malaysia" },
  { icao: "VTBS", iata: "BKK", name: "Suvarnabhumi Airport", city: "Bangkok", country: "Thailand" },
  { icao: "VTBD", iata: "DMK", name: "Don Mueang International Airport", city: "Bangkok", country: "Thailand" },
  { icao: "VTSP", iata: "HKT", name: "Phuket International Airport", city: "Phuket", country: "Thailand" },
  { icao: "WIII", iata: "CGK", name: "Soekarno–Hatta International Airport", city: "Jakarta", country: "Indonesia" },
  { icao: "WADD", iata: "DPS", name: "Ngurah Rai International Airport", city: "Denpasar / Bali", country: "Indonesia" },
  { icao: "RPLL", iata: "MNL", name: "Ninoy Aquino International Airport", city: "Manila", country: "Philippines" },
  { icao: "VVTS", iata: "SGN", name: "Tan Son Nhat International Airport", city: "Ho Chi Minh City", country: "Vietnam" },
  { icao: "VVNB", iata: "HAN", name: "Noi Bai International Airport", city: "Hanoi", country: "Vietnam" },
  { icao: "VDPP", iata: "PNH", name: "Phnom Penh International Airport", city: "Phnom Penh", country: "Cambodia" },
  { icao: "VDSR", iata: "REP", name: "Siem Reap International Airport", city: "Siem Reap", country: "Cambodia" },
  { icao: "VYYY", iata: "RGN", name: "Yangon International Airport", city: "Yangon", country: "Myanmar" },
  { icao: "WBSB", iata: "BWN", name: "Brunei International Airport", city: "Bandar Seri Begawan", country: "Brunei" },
  { icao: "VHHH", iata: "HKG", name: "Hong Kong International Airport", city: "Hong Kong", country: "Hong Kong" },
  { icao: "VMMC", iata: "MFM", name: "Macau International Airport", city: "Macau", country: "Macau" },
  { icao: "RCTP", iata: "TPE", name: "Taiwan Taoyuan International Airport", city: "Taipei", country: "Taiwan" },
  { icao: "RJTT", iata: "HND", name: "Tokyo Haneda Airport", city: "Tokyo", country: "Japan" },
  { icao: "RJAA", iata: "NRT", name: "Narita International Airport", city: "Tokyo", country: "Japan" },
  { icao: "RJBB", iata: "KIX", name: "Kansai International Airport", city: "Osaka", country: "Japan" },
  { icao: "RKSI", iata: "ICN", name: "Incheon International Airport", city: "Seoul", country: "South Korea" },
  { icao: "RKSS", iata: "GMP", name: "Gimpo International Airport", city: "Seoul", country: "South Korea" },
  { icao: "ZBAA", iata: "PEK", name: "Beijing Capital International Airport", city: "Beijing", country: "China" },
  { icao: "ZBAD", iata: "PKX", name: "Beijing Daxing International Airport", city: "Beijing", country: "China" },
  { icao: "ZSPD", iata: "PVG", name: "Shanghai Pudong International Airport", city: "Shanghai", country: "China" },
  { icao: "ZSSS", iata: "SHA", name: "Shanghai Hongqiao International Airport", city: "Shanghai", country: "China" },
  { icao: "ZGGG", iata: "CAN", name: "Guangzhou Baiyun International Airport", city: "Guangzhou", country: "China" },
  { icao: "ZGSZ", iata: "SZX", name: "Shenzhen Bao'an International Airport", city: "Shenzhen", country: "China" },
  { icao: "ZUUU", iata: "CTU", name: "Chengdu Shuangliu International Airport", city: "Chengdu", country: "China" },

  // Africa
  { icao: "HECA", iata: "CAI", name: "Cairo International Airport", city: "Cairo", country: "Egypt" },
  { icao: "HESN", iata: "SSH", name: "Sharm El Sheikh International Airport", city: "Sharm El Sheikh", country: "Egypt" },
  { icao: "HEGN", iata: "HRG", name: "Hurghada International Airport", city: "Hurghada", country: "Egypt" },
  { icao: "FAOR", iata: "JNB", name: "O. R. Tambo International Airport", city: "Johannesburg", country: "South Africa" },
  { icao: "FACT", iata: "CPT", name: "Cape Town International Airport", city: "Cape Town", country: "South Africa" },
  { icao: "FALE", iata: "DUR", name: "King Shaka International Airport", city: "Durban", country: "South Africa" },
  { icao: "HKJK", iata: "NBO", name: "Jomo Kenyatta International Airport", city: "Nairobi", country: "Kenya" },
  { icao: "HAAB", iata: "ADD", name: "Addis Ababa Bole International Airport", city: "Addis Ababa", country: "Ethiopia" },
  { icao: "DNMM", iata: "LOS", name: "Murtala Muhammed International Airport", city: "Lagos", country: "Nigeria" },
  { icao: "DNAA", iata: "ABV", name: "Nnamdi Azikiwe International Airport", city: "Abuja", country: "Nigeria" },
  { icao: "DGAA", iata: "ACC", name: "Kotoka International Airport", city: "Accra", country: "Ghana" },
  { icao: "GMMN", iata: "CMN", name: "Mohammed V International Airport", city: "Casablanca", country: "Morocco" },
  { icao: "GMMX", iata: "RAK", name: "Marrakesh Menara Airport", city: "Marrakesh", country: "Morocco" },
  { icao: "DTTA", iata: "TUN", name: "Tunis–Carthage International Airport", city: "Tunis", country: "Tunisia" },
  { icao: "DAAG", iata: "ALG", name: "Houari Boumediene Airport", city: "Algiers", country: "Algeria" },
  { icao: "HUEN", iata: "EBB", name: "Entebbe International Airport", city: "Kampala / Entebbe", country: "Uganda" },
  { icao: "HTDA", iata: "DAR", name: "Julius Nyerere International Airport", city: "Dar es Salaam", country: "Tanzania" },
  { icao: "HTZA", iata: "ZNZ", name: "Abeid Amani Karume International Airport", city: "Zanzibar", country: "Tanzania" },
  { icao: "FIMP", iata: "MRU", name: "Sir Seewoosagur Ramgoolam Airport", city: "Plaine Magnien", country: "Mauritius" },
  { icao: "FSIA", iata: "SEZ", name: "Seychelles International Airport", city: "Victoria / Mahé", country: "Seychelles" },
  { icao: "GOBD", iata: "DSS", name: "Blaise Diagne International Airport", city: "Dakar", country: "Senegal" },

  // North America (USA, Canada, Mexico)
  { icao: "KJFK", iata: "JFK", name: "John F. Kennedy International Airport", city: "New York", country: "United States" },
  { icao: "KEWR", iata: "EWR", name: "Newark Liberty International Airport", city: "Newark / New York", country: "United States" },
  { icao: "KLGA", iata: "LGA", name: "LaGuardia Airport", city: "New York", country: "United States" },
  { icao: "KLAX", iata: "LAX", name: "Los Angeles International Airport", city: "Los Angeles", country: "United States" },
  { icao: "KORD", iata: "ORD", name: "O'Hare International Airport", city: "Chicago", country: "United States" },
  { icao: "KATL", iata: "ATL", name: "Hartsfield–Jackson Atlanta International Airport", city: "Atlanta", country: "United States" },
  { icao: "KMIA", iata: "MIA", name: "Miami International Airport", city: "Miami", country: "United States" },
  { icao: "KDFW", iata: "DFW", name: "Dallas/Fort Worth International Airport", city: "Dallas", country: "United States" },
  { icao: "KSFO", iata: "SFO", name: "San Francisco International Airport", city: "San Francisco", country: "United States" },
  { icao: "KIAH", iata: "IAH", name: "George Bush Intercontinental Airport", city: "Houston", country: "United States" },
  { icao: "KBOS", iata: "BOS", name: "Logan International Airport", city: "Boston", country: "United States" },
  { icao: "KIAD", iata: "IAD", name: "Washington Dulles International Airport", city: "Washington, D.C.", country: "United States" },
  { icao: "KSEA", iata: "SEA", name: "Seattle–Tacoma International Airport", city: "Seattle", country: "United States" },
  { icao: "KMCO", iata: "MCO", name: "Orlando International Airport", city: "Orlando", country: "United States" },
  { icao: "KLAS", iata: "LAS", name: "Harry Reid International Airport", city: "Las Vegas", country: "United States" },
  { icao: "KPHX", iata: "PHX", name: "Phoenix Sky Harbor International Airport", city: "Phoenix", country: "United States" },
  { icao: "CYYZ", iata: "YYZ", name: "Toronto Pearson International Airport", city: "Toronto", country: "Canada" },
  { icao: "CYVR", iata: "YVR", name: "Vancouver International Airport", city: "Vancouver", country: "Canada" },
  { icao: "CYUL", iata: "YUL", name: "Montréal–Trudeau International Airport", city: "Montreal", country: "Canada" },
  { icao: "CYYC", iata: "YYC", name: "Calgary International Airport", city: "Calgary", country: "Canada" },
  { icao: "MMMX", iata: "MEX", name: "Mexico City International Airport", city: "Mexico City", country: "Mexico" },
  { icao: "MMUN", iata: "CUN", name: "Cancún International Airport", city: "Cancún", country: "Mexico" },
  { icao: "MMGL", iata: "GDL", name: "Guadalajara International Airport", city: "Guadalajara", country: "Mexico" },
  { icao: "MMMY", iata: "MTY", name: "Monterrey International Airport", city: "Monterrey", country: "Mexico" },

  // Central America & The Caribbean
  { icao: "MPTO", iata: "PTY", name: "Tocumen International Airport", city: "Panama City", country: "Panama" },
  { icao: "MROC", iata: "SJO", name: "Juan Santamaría International Airport", city: "San José", country: "Costa Rica" },
  { icao: "MGGT", iata: "GUA", name: "La Aurora International Airport", city: "Guatemala City", country: "Guatemala" },
  { icao: "MSLP", iata: "SAL", name: "El Salvador International Airport", city: "San Salvador", country: "El Salvador" },
  { icao: "TJSJ", iata: "SJU", name: "Luis Muñoz Marín International Airport", city: "San Juan", country: "Puerto Rico" },
  { icao: "MKJP", iata: "KIN", name: "Norman Manley International Airport", city: "Kingston", country: "Jamaica" },
  { icao: "MKJS", iata: "MBJ", name: "Sangster International Airport", city: "Montego Bay", country: "Jamaica" },
  { icao: "MDSD", iata: "SDQ", name: "Las Américas International Airport", city: "Santo Domingo", country: "Dominican Republic" },
  { icao: "MDPC", iata: "PUJ", name: "Punta Cana International Airport", city: "Punta Cana", country: "Dominican Republic" },
  { icao: "MYNN", iata: "NAS", name: "Lynden Pindling International Airport", city: "Nassau", country: "Bahamas" },
  { icao: "TBPB", iata: "BGI", name: "Grantley Adams International Airport", city: "Bridgetown", country: "Barbados" },
  { icao: "TTPP", iata: "POS", name: "Piarco International Airport", city: "Port of Spain", country: "Trinidad and Tobago" },
  { icao: "TNCM", iata: "SXM", name: "Princess Juliana International Airport", city: "Philipsburg", country: "Sint Maarten" },
  { icao: "MUHA", iata: "HAV", name: "José Martí International Airport", city: "Havana", country: "Cuba" },
  { icao: "TAPA", iata: "ANU", name: "V. C. Bird International Airport", city: "St. John's", country: "Antigua and Barbuda" },
  { icao: "TGPY", iata: "GND", name: "Maurice Bishop International Airport", city: "St. George's", country: "Grenada" },
  { icao: "TLPL", iata: "UVF", name: "Hewanorra International Airport", city: "Vieux Fort", country: "Saint Lucia" },
  { icao: "TNCB", iata: "BON", name: "Flamingo International Airport", city: "Kralendijk", country: "Bonaire" },
  { icao: "TNCA", iata: "AUA", name: "Queen Beatrix International Airport", city: "Oranjestad", country: "Aruba" },
  { icao: "TNCC", iata: "CUR", name: "Curaçao International Airport", city: "Willemstad", country: "Curaçao" },

  // South America
  { icao: "SBGR", iata: "GRU", name: "São Paulo/Guarulhos International Airport", city: "São Paulo", country: "Brazil" },
  { icao: "SBGL", iata: "GIG", name: "Rio de Janeiro/Galeão International Airport", city: "Rio de Janeiro", country: "Brazil" },
  { icao: "SBBR", iata: "BSB", name: "Brasília International Airport", city: "Brasília", country: "Brazil" },
  { icao: "SAEZ", iata: "EZE", name: "Ministro Pistarini International Airport", city: "Buenos Aires", country: "Argentina" },
  { icao: "SABE", iata: "AEP", name: "Aeroparque Jorge Newbery", city: "Buenos Aires", country: "Argentina" },
  { icao: "SCEL", iata: "SCL", name: "Arturo Merino Benítez International Airport", city: "Santiago", country: "Chile" },
  { icao: "SKBO", iata: "BOG", name: "El Dorado International Airport", city: "Bogotá", country: "Colombia" },
  { icao: "SKRG", iata: "MDE", name: "José María Córdova International Airport", city: "Medellín", country: "Colombia" },
  { icao: "SPJC", iata: "LIM", name: "Jorge Chávez International Airport", city: "Lima", country: "Peru" },
  { icao: "SEQM", iata: "UIO", name: "Mariscal Sucre International Airport", city: "Quito", country: "Ecuador" },
  { icao: "SEGU", iata: "GYE", name: "José Joaquín de Olmedo International Airport", city: "Guayaquil", country: "Ecuador" },
  { icao: "SUMU", iata: "MVD", name: "Carrasco International Airport", city: "Montevideo", country: "Uruguay" },
  { icao: "SGAS", iata: "ASU", name: "Silvio Pettirossi International Airport", city: "Asunción", country: "Paraguay" },
  { icao: "SLVR", iata: "VVI", name: "Viru Viru International Airport", city: "Santa Cruz", country: "Bolivia" },
  { icao: "SVMI", iata: "CCS", name: "Simón Bolívar International Airport", city: "Caracas", country: "Venezuela" },

  // Oceania & Australasia
  { icao: "YSSY", iata: "SYD", name: "Sydney Kingsford Smith Airport", city: "Sydney", country: "Australia" },
  { icao: "YMML", iata: "MEL", name: "Melbourne Airport", city: "Melbourne", country: "Australia" },
  { icao: "YBBN", iata: "BNE", name: "Brisbane Airport", city: "Brisbane", country: "Australia" },
  { icao: "YPPH", iata: "PER", name: "Perth Airport", city: "Perth", country: "Australia" },
  { icao: "YPAD", iata: "ADL", name: "Adelaide Airport", city: "Adelaide", country: "Australia" },
  { icao: "NZAA", iata: "AKL", name: "Auckland Airport", city: "Auckland", country: "New Zealand" },
  { icao: "NZCH", iata: "CHC", name: "Christchurch Airport", city: "Christchurch", country: "New Zealand" },
  { icao: "NZWN", iata: "WLG", name: "Wellington Airport", city: "Wellington", country: "New Zealand" },
  { icao: "NFFN", iata: "NAN", name: "Nadi International Airport", city: "Nadi", country: "Fiji" },
  { icao: "AYPY", iata: "POM", name: "Jacksons International Airport", city: "Port Moresby", country: "Papua New Guinea" },
  { icao: "NWWW", iata: "NOU", name: "La Tontouta International Airport", city: "Nouméa", country: "New Caledonia" },
  { icao: "NTAA", iata: "PPT", name: "Fa'a'ā International Airport", city: "Papeete / Tahiti", country: "French Polynesia" },
];

/**
 * Client-side search helper matching ICAO, IATA, City, Name or Country.
 */
export function searchAirports(query: string, limit = 8): Airport[] {
  const clean = query.trim().toUpperCase();
  if (!clean) return [];

  const startsWithIcao: Airport[] = [];
  const startsWithIata: Airport[] = [];
  const startsWithCity: Airport[] = [];
  const otherMatches: Airport[] = [];

  for (const apt of WORLD_AIRPORTS) {
    const icaoUpper = apt.icao.toUpperCase();
    const iataUpper = apt.iata?.toUpperCase() || "";
    const cityUpper = apt.city.toUpperCase();
    const nameUpper = apt.name.toUpperCase();
    const countryUpper = apt.country.toUpperCase();

    if (icaoUpper === clean) {
      startsWithIcao.unshift(apt);
    } else if (icaoUpper.startsWith(clean)) {
      startsWithIcao.push(apt);
    } else if (iataUpper === clean) {
      startsWithIata.unshift(apt);
    } else if (iataUpper.startsWith(clean)) {
      startsWithIata.push(apt);
    } else if (cityUpper.startsWith(clean)) {
      startsWithCity.push(apt);
    } else if (
      cityUpper.includes(clean) ||
      nameUpper.includes(clean) ||
      countryUpper.includes(clean)
    ) {
      otherMatches.push(apt);
    }
  }

  const combined = [
    ...startsWithIcao,
    ...startsWithIata,
    ...startsWithCity,
    ...otherMatches,
  ];

  // Unique by ICAO
  const seen = new Set<string>();
  const results: Airport[] = [];
  for (const apt of combined) {
    if (!seen.has(apt.icao)) {
      seen.add(apt.icao);
      results.push(apt);
      if (results.length >= limit) break;
    }
  }

  return results;
}

