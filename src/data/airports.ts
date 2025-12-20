import {Airport} from './types'

export const AIRPORTS: Airport[] = [
  {
    icao: "KOSH",
    name: "Wittman Regional Airport",
    city: "Oshkosh",
    state: "WI",
    elevation: 808,
    latitude: 43.9844,
    longitude: -88.5570,
    runways: [
      {id: "18/36", length: 8002, width: 150, surface: "Concrete"},
      {id: "09/27", length: 6179, width: 150, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "118.5"},
      {type: "GROUND", mhz: "121.9"},
      {type: "ATIS", mhz: "125.9"}
    ]
  },
  {
    icao: "KVNY",
    name: "Van Nuys Airport",
    city: "Van Nuys",
    state: "CA",
    elevation: 802,
    latitude: 34.2098,
    longitude: -118.4899,
    runways: [
      {id: "16R/34L", length: 8001, width: 150, surface: "Asphalt"},
      {id: "16L/34R", length: 4011, width: 75, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "119.3"},
      {type: "GROUND", mhz: "121.7"},
    ]
  },
  {
    icao: "KTEB",
    name: "Teterboro Airport",
    city: "Teterboro",
    state: "NJ",
    elevation: 8,
    latitude: 40.8501,
    longitude: -74.0608,
    runways: [
      {id: "06/24", length: 6013, width: 150, surface: "Asphalt"},
      {id: "01/19", length: 7000, width: 150, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "119.5"},
      {type: "GROUND", mhz: "121.4"},
    ]
  },
  {
    icao: "KAPA",
    name: "Centennial Airport",
    city: "Denver",
    state: "CO",
    elevation: 5885,
    latitude: 39.5701,
    longitude: -104.8493,
    runways: [
      {id: "17L/35R", length: 10000, width: 100, surface: "Asphalt"},
      {id: "17R/35L", length: 4800, width: 75, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "118.9"},
      {type: "ATIS", mhz: "120.3"},
    ]
  },
  {
    icao: "KPDK",
    name: "DeKalb-Peachtree Airport",
    city: "Atlanta",
    state: "GA",
    elevation: 1003,
    latitude: 33.8756,
    longitude: -84.3020,
    runways: [
      {id: "02R/20L", length: 6001, width: 100, surface: "Concrete"},
      {id: "16/34", length: 3967, width: 150, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "120.9"},
      {type: "GROUND", mhz: "121.6"},
    ]
  },
  {
    icao: "KSDL",
    name: "Scottsdale Airport",
    city: "Scottsdale",
    state: "AZ",
    elevation: 1510,
    latitude: 33.6229,
    longitude: -111.9105,
    runways: [
      {id: "03/21", length: 8249, width: 100, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "119.9"},
      {type: "GROUND", mhz: "121.6"},
    ]
  },
  {
    icao: "KISM",
    name: "Kissimmee Gateway Airport",
    city: "Orlando",
    state: "FL",
    elevation: 82,
    latitude: 28.2898,
    longitude: -81.4371,
    runways: [
      {id: "15/33", length: 6001, width: 100, surface: "Asphalt"},
      {id: "06/24", length: 5001, width: 100, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "124.45"},
      {type: "GROUND", mhz: "121.7"},
    ]
  },
  {
    icao: "KBFI",
    name: "Boeing Field / King County",
    city: "Seattle",
    state: "WA",
    elevation: 21,
    latitude: 47.5300,
    longitude: -122.3020,
    runways: [
      {id: "14R/32L", length: 10000, width: 200, surface: "Asphalt"},
      {id: "14L/32R", length: 3710, width: 100, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "120.6"},
      {type: "GROUND", mhz: "121.9"},
    ]
  },
  {
    icao: "KTMB",
    name: "Miami Executive Airport",
    city: "Miami",
    state: "FL",
    elevation: 10,
    latitude: 25.6478,
    longitude: -80.4328,
    runways: [
      {id: "09R/27L", length: 5999, width: 150, surface: "Asphalt"},
      {id: "13/31", length: 4001, width: 150, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "118.9"},
      {type: "GROUND", mhz: "121.7"},
    ]
  },
  {
    icao: "KHPN",
    name: "Westchester County Airport",
    city: "White Plains",
    state: "NY",
    elevation: 439,
    latitude: 41.0669,
    longitude: -73.7076,
    runways: [
      {id: "16/34", length: 6549, width: 150, surface: "Asphalt"},
      {id: "11/29", length: 4451, width: 150, surface: "Asphalt"},
    ],
    frequencies: [
      {type: "TOWER", mhz: "118.57"},
      {type: "GROUND", mhz: "121.82"},
    ]
  },
];