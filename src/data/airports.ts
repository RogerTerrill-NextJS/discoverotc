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
      fuel: "Fuel is available at ACI Jets North, ACI Jets South and Clay Lacy Aviation. Prices are competitive with other airports in the area.",
      restrooms: "Restrooms are located in the FBOs and main commercial terminal.",
      transientParking: "You won’t find any transient parking at John Wayne Airport. You have a choice of three FBOs: ACI Jets North, ACI Jets South and Clay Lacy Aviation.",
      transportation: "ACI Jets (North and South) and Clay Lacy Aviation provide crew cars with limits. Crew cars are typically on a first come basis, call ahead to verify availability. Rental car reservations can be coordinated through your FBO of choice. Rideshare is another good option for getting around Jonh Wayne Airport.",
      fbo: "There are three FBOs at John Wayne Airport: ACI Jets North, ACI Jets South and Clay Lacy Aviation. As of 2025 Clay Lacy is currently undergoing an expansion but is still open for business. We will provide a review of Clay Lacy Aviation once the renovation is complete.  On this trip to John Wayne we visited ACI Jets North. ACI Jets North customer service was friendly and helpful. There are two crew cars available with a 2 hour limit. Hang out in the Pilots Lounge upstairs for a quieter, more private experience. The pilots Lounge has a dedicated bathroom with shower. You’ll find ice cream treats in the freezer. ACI Jets does not charge fees for stays under 3 hours. We overstayed our visit and were charged a $95 ramp fee. So be sure to stick the 3 hour limit!",
      food: "You won’t find any food options on field. There are food options in the terminal accessible through the OC Air Pass. If you take the crew car there are plenty of food options within a 5 minute drive of the airport."
    }
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
    ],
    approaches: [
      {
        runway: "16R",
        type: "ILS OR LOC",
        name: "ILS RWY 16R"
      },
      {
        runway: "16R",
        type: "RNAV (GPS)",
        name: "RNAV (GPS) RWY 16R"
      },
      {
        runway: "34L",
        type: "RNAV (GPS)",
        name: "RNAV (GPS) RWY 34L"
      },
      {
        runway: "16L",
        type: "RNAV (GPS)",
        name: "RNAV (GPS) RWY 16L"
      },
      {
        runway: "34R",
        type: "RNAV (GPS)",
        name: "RNAV (GPS) RWY 34R"
      }
    ],
    description: {
      summary: "Fly with us in our Piper Arrow into insanely busy Van Nuys Airport (KVNY) onto Runway 16R. We’ll talk about 16L runway closure, the busiest sector in SoCal TRACON and why we don’t recommend flying into this airport – at least for now. \n" +
        "\n" +
        "Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit",
      transientParking: "There is NO transient parking here. Pick from four FBOs located at this airport, see below for more info. ",
      fbo: "There are four FBOs located at this airport; Clay Lacy, Castle & Cooke Aviation, Jet Aviation and Signature East/West. We tried to book our arrival with Signature East but was told they were at capacity and sent over to Signature East instead. The FBO has lots of comfy seating (hang out in the Pilot’s Lounge for a more private and quieter experience). Limited snacks, coffee and water are available. There are 2-3 crew car available for a 2 hour limit. Rental car reservations can be arranged through the FBO. The customer service was incredible and staff was friendly and kind – a big surprise to us small GA folks!   \n" +
        "\n" +
        "Breakdown of fees for our Piper Arrow III for April 2025 (3 Hour Stay) \n" +
        "$0 Handling Fee ($30 fee waived with fuel purchase) \n" +
        "$0 Infrastructure Fee ($8 fee waived with fuel purchase)\n" +
        "$80 Avgas (10 gallons @ $8/gal) \n" +
        "$80 TOTAL",
      fuel: "Self-service fuel is available at The Park, take Taxiway A to A3,. Fuel pump is located near the original t-hangars. Full-service fuel is available through any of the FBOs listed above.",
      restrooms: "Restrooms are located in the FBOs. Please note there are no public restrooms at the observation area. We couldn’t verify if the newer hangars at the northwest end (The Park) had any public restrooms available.",
      transportation: "All FBOs on field have crew cars available for a limited time on a first come bases. Car rentals can be coordinated with the FBO of your choice. Rideshare is also a great option in this area.",
      food: "There aren’t any restaurants on the field. Go northwest for a yummy lunch at Porto’s and pick up some baked goodies. Head southeast to Ventura Blvd in Sherman Oaks for a varied selection of restaurants.",
      additionalInfo: "Check the Van Nuys Airport Calendar for runway closure dates: https://www.iflyvny.com/pilot-information/pilot-info\n" +
        "\n" +
        "And don't forget to study the noise abatement procedures (Departure Techniques section) before going: https://www.iflyvny.com/pilot-information/noise-restrictions"
    }
  },
  {
    icao: "KRNM",
    name: "Ramona Airport",
    city: "Ramona",
    state: "CA",
    elevation: 1395,
    latitude: 33.0392,
    longitude: -116.9150,
    displayDay: "3rd Sunday of the Month",
    runways: [
      {id: "09/27", length: 5006, width: 150, surface: "Asphalt"}
    ],
    frequencies: [
      {type: "TOWER", mhz: "119.87"},
      {type: "APPROACH", mhz: "132.20"},
      {type: "DEPARTURE", mhz: "127.30"},
      {type: "ATIS", mhz: "132.02"},
      {type: "UNICOM", mhz: "122.95"},
      {type: "GROUND", mhz: "121.65"}
    ],
    approaches: [
      {runway: "09", type: "RNAV (GPS)", name: "RNAV (GPS) RWY 09"},
      {runway: "27", type: "RNAV (GPS)", name: "RNAV (GPS) RWY 27"}
    ],
    description: {
      summary: "Few airports surprise us like Ramona (KRNM)! Nestled in the hills of San Diego County, this unassuming field has a wild past — from WWII bombing practice and drag racing to becoming Cal Fire’s oldest Air Attack Base and home to one of two rotorcraft museums in the U.S.\n" +
        "\n" +
        "Fly with us in our Piper Arrow as we land on Runway 27, explore the Classic Rotors Museum, and get a surprise tower tour.\n" +
        "\n" +
        "Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit",
      transientParking: "Transient parking is located at the base of tower. As of August 2025 Cal Fire also has their planes parked here while their ramp is being renovated. Stay clear of the Cal Fire planes and use the spots to the north of tower. Chain tie downs are available at most spots.",
      fuel: "Self-serve fuel is located on the north side of the runway near approach end of runway 27. Avgas was $5.99/gal during our October 2025 visit. Full service fuel is also available through Pacific Executive Aviation.",
      restrooms: "There is a port-a-pottie located in transient parking. Pacific Executive Aviation also have restrooms available. You’ll also find restrooms located inside the museum (when open).",
      transportation: "There are no crew cars or car rentals available here. Rideshare can be tricky and expensive when available. There are no food options within walking distance. A car is required to get off field and find food.",
      food: "There isn’t a café currently on field and you’ll need to secure a car or rideshare to find options away from the airport.",
      museum: "Ramona Airport has one of two dedicated rotorcraft museums in the United States; The Classics Rotor Museum. The museum is filled with rare and vintage rotorcraft and has an incredible team of dedicated volunteers who have flown and personally worked on the aircraft found at this museum. It’s an impressive collection that every aviation enthusiast must see. Admission is free and the museum is open Tuesdays & Friday 10am-4pm and Saturdays 10am-6pm.",
      additionalInfo: "Ramona Airport is home to a joint Cal Fire – U.S. Forest Service Air Tanker Base. Cal Fire currently has an OV-10 Bronco and (2) S2T Grumman Tankers here. The U.S. Forest Service has one UH-1 Huey at this location. All firefighting aircraft are in transient parking while the Cal Fire base gets a few upgrades. It’s a great way to see these amazing machines up close."

    }
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

const AIRPORTSCHEMA = [
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
  }
];