import {Airport} from './types'

export const AIRPORTS: Airport[] = [
  {
    icao: "KSNA",
    name: "John Wayne Airport",
    city: "Santa Ana",
    state: "CA",
    elevation: 56,
    latitude: 33.6757,
    longitude: -117.8682,
    runways: [
      {id: "02L/20R", length: 5701, width: 150, surface: "Concrete"},
      {id: "02R/20L", length: 2886, width: 75, surface: "Asphalt"}
    ],
    frequencies: [
      {type: "ATIS", mhz: "126.0"},
      {type: "TOWER", mhz: "120.8"},
      {type: "GROUND", mhz: "121.9"},
      {type: "CLEARANCE", mhz: "118.0"}
    ],
    approaches: [
      {
        runway: "20R",
        type: "ILS OR LOC",
        name: "ILS or LOC RWY 20R"
      },
      {
        runway: "20R",
        type: "RNAV (GPS)",
        name: "RNAV (GPS) RWY 20R"
      },
      {
        runway: "20L",
        type: "RNAV (GPS)",
        name: "RNAV (GPS) RWY 20L"
      },
      {
        runway: "02L",
        type: "RNAV (GPS)",
        name: "RNAV (GPS) RWY 02L"
      },
      {
        runway: "02R",
        type: "RNAV (GPS)",
        name: "RNAV (GPS) RWY 02R"
      },
      {
        runway: "20R",
        type: "VOR",
        name: "VOR RWY 20R"
      }
    ],
    description: {
      summary: "Join us for an exciting flight into one of Southern California's busiest airports! We're flying our Piper Arrow into John Wayne Airport (KSNA) during reverse operations—landing on Runway 02R with twice the challenge after executing not one, but TWO go-arounds due to heavy traffic. After finally touching down, we make our way over to the Flying Leatherneck Aviation Museum for an exclusive behind-the-scenes tour of their incredible restoration hangar, where history comes back to life. You won't want to miss this!\n" +
        "\n" +
        "TOYS FOR TOTS EVENT: https://allevents.in/irvine/toys-for-tots-toy-drive/200029192240844\n" +
        "\n" +
        "For more information on the Flying Leatherneck Aviation Museum check out their website: https://www.flyingleathernecks.org/\n" +
        "\n" +
        "Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit",
      transientParking: "You won’t find any transient parking at John Wayne Airport. You have a choice of three FBOs: ACI Jets North, ACI Jets South and Clay Lacy Aviation.",
      fbo: "There are three FBOs at John Wayne Airport: ACI Jets North, ACI Jets South and Clay Lacy Aviation. As of 2025 Clay Lacy is currently undergoing an expansion but is still open for business. We will provide a review of Clay Lacy Aviation once the renovation is complete.  On this trip to John Wayne we visited ACI Jets North. ACI Jets North customer service was friendly and helpful. There are two crew cars available with a 2 hour limit. Hang out in the Pilots Lounge upstairs for a quieter, more private experience. The pilots Lounge has a dedicated bathroom with shower. You’ll find ice cream treats in the freezer. ACI Jets does not charge fees for stays under 3 hours. We overstayed our visit and were charged a $95 ramp fee. So be sure to stick the 3 hour limit!",
      museum: "This is for a museum",
      terminalBuilding: "This is for a terminal building"
    }
  }
  ,
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