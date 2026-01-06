import { Airport } from './types';

export const AIRPORTS: Airport[] = [
  {
    icao: 'KUDD',
    name: 'Bermuda Dunes Airport',
    city: 'Bermuda Dunes',
    state: 'CA',
    elevation: 73,
    latitude: 33.7484,
    longitude: -116.2748,
    runways: [{ id: '10/28', length: 5002, width: 70, surface: 'Asphalt' }],
    frequencies: [
      { type: 'CTAF/UNICOM', mhz: '122.8' },
      { type: 'APP/DEP', mhz: '135.275' },
    ],
    approaches: [
      {
        runway: '10',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 10',
      },
      {
        runway: '28',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 28',
      },
      {
        runway: 'CIRCLING',
        type: 'VOR',
        name: 'VOR-C',
      },
    ],
    youtube: [
      {
        title:
          'Bermuda Dunes Airport (KUDD) | THIS is Why Bermuda Dunes Really is A Desert Oasis',
        url: 'https://youtu.be/mCoTYR4JPhk',
        date: '12/19/2025',
      },
    ],
    description: {
      summary:
        'Join us as we fly out Piper Arrow into swanky Bermuda Dunes Airport (KUDD) in the Coachella Valley. We check out Crown Aero’s super cool décor, make a slight departure from our diet at a local upscale deli and find pink flamingos at a desert oasis. \n' +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      transientParking:
        'You won’t find any transient parking at KUDD. Crown Aero is the FBO on site and they are fantastic.',
      fuel: 'Full service fuel is provided by Crown Aero, soon to be Dunes Air. Please note there is no self-serve fuel at this airport.',
      restrooms: 'Restrooms are located within the FBO.',
      transportation:
        'Crew cars are available with a 2 hour limit. A rental car for longer stays can be arranged with the FBO. Rideshare may not be reliable in the area.',
      food:
        'You’ll find plenty of food options within 5 miles of the airport. Crown Aero suggested TKB Bakery &' +
        ' Deli and it was delicious. The menu varied from smash burgers to hot and cold sandwiches. You’ll also find a bakery case and café offering coffee and tea drinks and milkshakes. It does tend to get busy during lunchtime and many people order ahead of time for pickup. Parking is plentiful and the outdoor seating is great during the spring and late fall.',
      fbo:
        'The FBO is located south of the approach end of RWY 28. The ramp is largely reserved for the bigger jets. Smaller GA will be placed east of the Crown Aero building and hangar. Tie down spots all have chains but its best to bring your own tie downs. The FBO is midcentury modern themed and tastefully done. You’ll find outdoor patio seating overlooking the ramp, a main lobby with seating, and two separate lounges for passengers and crew. Water, coffee and light snacks are available. \n' +
        '\n' +
        'Breakdown of fees for our Piper Arrow III for DECEMBER 2025 (3 Hour Stay) \n' +
        '$0 Handling Fee (fee Waived with 20 gal minimum fuel purchase)\n' +
        '$10 Facility Fee\n' +
        '$139.80 Avgas (20 gallons @ $6.99/gal) \n' +
        '$149.80 TOTAL',
      additionalInfo:
        'Whether you’re stopping for a quick refuel or staying for a festival, Bermuda Dunes Airport is a great stop. It feels like a small airport but has full airport amenities thanks to Crown Aero. \n' +
        '\n' +
        'NOTE: Crown Aero is set to change to Dunes Air in the coming months. It is our understanding that the services will remain the same and only the name will change. If you’re looking to get specific services at Bermuda Dunes Airport please call before arriving to confirm availability. \n' +
        '\n' +
        'For a cool article on the J.W. Marriott Desert Springs Resort check out this article by SF Gate: \n' +
        'https://www.sfgate.com/travel/article/jw-marriott-mega-lake-with-flamingos-calif-desert-19372124.php',
    },
  },
  {
    icao: 'KHII',
    name: 'Lake Havasu City Airport',
    city: 'Lake Havasu City',
    state: 'AZ',
    elevation: 783,
    latitude: 34.5711,
    longitude: -114.3583,
    runways: [{ id: '14/32', length: 8000, width: 100, surface: 'Asphalt' }],
    frequencies: [
      { type: 'ATIS', mhz: '120.575' },
      { type: 'TOWER', mhz: '118.3' },
      { type: 'GROUND', mhz: '121.7' },
      { type: 'CLEARANCE', mhz: '125.8' },
    ],
    approaches: [
      {
        runway: '14',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 14',
      },
      {
        runway: '32',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 32',
      },
      {
        runway: 'CIRCLING',
        type: 'VOR',
        name: 'VOR-A',
      },
    ],
    youtube: [
      {
        title:
          'Lake Havasu City Airport (KHII) | The Small Desert Town with An 8000ft Runway',
        url: 'https://youtu.be/gsDbuPiSaV8',
        date: '12/5/2025',
      },
    ],
    description: {
      summary:
        "Fly with us into Lake Havasu City Airport Municipal (KHII) in our Piper Arrow. We'll take you through the brand new Velocity FBO facilities, reveal a hidden gem for transient parking that every pilot needs to know about, and grab lunch at the legendary Hangar 24 brewery restaurant right on the airport grounds. And don’t miss the stunning tail cam departure footage over the Lake Havasu desert landscape that you simply cannot miss.\n" +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      transientParking:
        'Transient parking is located in north of the Terminal. Spots are clearly marked. All spots have tie down' +
        ' chains. Fees can be paid at the neon “Transient Parking” sign or can be paid online via the QR code.' +
        ' Covered parking and hangar parking for small GA planes are available with reservations online. Overnight fees for uncovered spots are $14/night.',
      fbo: 'Velocity FBO is newish to the airport. Velocity has taken over Desert Air (adjacent to Hangar 24) and Havasu Air Center (northern most FBO). We visited Velocity North but did not use their services and we were wowed. There was a nice private Pilots Lounge with flight planning area, quiet rooms and a theater. The FBO has an assortment of coffee, drinks and snacks. Velocity North appears to service the larges GA planes and jets at Havasu. Service is friendly and FBO has a warm and elegant vibe. We will be back!',
      fuel: 'Self-serve fuel is located off of Taxiway B3, follow it west until you see the arrows directing you around the fuel pump. Fuel is reasonably priced here and easy to get in and out. Full service fuel is also available through Velocity FBO, call the phone number on the posted signs for fuel service.',
      restrooms:
        'Restrooms are within Hangar 24, Velocity FBO North and South. Public restrooms are marked with giant red signs. From transient parking head north past Hangar24 and the FBO, cross the walking bridge and the restrooms will be on the other side.',
      transportation:
        'Velocity FBO does have crew cars with a limit on a first come basis. For longer stays please contact Velocity FBO to set up a car rental. Avis is located on field at the Terminal Building. Enterprise rentals can be arranged through Velocity. Rideshare service is unreliable here.',
      food: 'Hangar 24 is the restaurant on field. There is limited uncovered outdoor seating with a limited view of the ramp and runway. Indoor seating is plentiful but the restaurant does fill up fast. Order at the bar, take a seat and wait for your food to arrive. Food ranges from burgers and salads to wraps and bowls. This is a brewery and if you’re staying overnight, check out their current offerings.',
      terminalBuilding:
        'The Terminal Building contains the Airport Admin Offices, Avis Rentals and a Military Lounge. Typically closed on the weekends and holidays.',
      additionalInfo:
        'Lake Havasu State Park is about 15 minutes south of the airport. Lake Havasu is a massive reservoir on the Colorado River, created by the Parker Dam. It stretches 45 miles long and holds enough water to cover the entire state of Pennsylvania one foot deep.\n' +
        '\n' +
        "Lake Havasu City is home to the actual London Bridge, which was purchased from the City of London in 1968 for $2.4 million and reconstructed brick-by-brick in the Arizona desert. It's now one of Arizona's top tourist attractions.\n" +
        '\n' +
        'The busiest times to visit are spring break and summer although there are events held year round that draw in big crowds. Notably the Balloon Festival in January, the Rockabilly Reunion in February, World Off-Road Championship Series in April, July 4th Celebration, and the Boat Parade of Lights in December. There’s always something to do and see here.',
    },
  },
  {
    icao: 'KSNA',
    name: 'John Wayne Airport',
    city: 'Santa Ana',
    state: 'CA',
    elevation: 56,
    latitude: 33.6757,
    longitude: -117.8682,
    youtube: [
      {
        title:
          'John Wayne Airport (KSNA) | Two Go-Arounds - All to See the Museum Returning to MCAS El Toro',
        url: 'https://youtu.be/Sni9XeuCZLs',
        date: '11/28/2025',
      },
      {
        title: 'John Wayne Airport (KSNA) | The ULTIMATE Pilots Guide',
        url: 'https://youtu.be/K5M_ikMIOe0',
        date: '4/4/2025',
      },
    ],
    runways: [
      { id: '02L/20R', length: 5701, width: 150, surface: 'Concrete' },
      { id: '02R/20L', length: 2886, width: 75, surface: 'Asphalt' },
    ],
    frequencies: [
      { type: 'ATIS', mhz: '126.0' },
      { type: 'TOWER', mhz: '120.8' },
      { type: 'GROUND', mhz: '121.9' },
      { type: 'CLEARANCE', mhz: '118.0' },
    ],
    approaches: [
      {
        runway: '20R',
        type: 'ILS OR LOC',
        name: 'ILS or LOC RWY 20R',
      },
      {
        runway: '20R',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 20R',
      },
      {
        runway: '20L',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 20L',
      },
      {
        runway: '02L',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 02L',
      },
      {
        runway: '02R',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 02R',
      },
      {
        runway: '20R',
        type: 'VOR',
        name: 'VOR RWY 20R',
      },
    ],
    description: {
      summary:
        "Join us for an exciting flight into one of Southern California's busiest airports! We're flying our Piper Arrow into John Wayne Airport (KSNA) during reverse operations—landing on Runway 02R with twice the challenge after executing not one, but TWO go-arounds due to heavy traffic. After finally touching down, we make our way over to the Flying Leatherneck Aviation Museum for an exclusive behind-the-scenes tour of their incredible restoration hangar, where history comes back to life. You won't want to miss this!\n" +
        '\n' +
        'TOYS FOR TOTS EVENT: https://allevents.in/irvine/toys-for-tots-toy-drive/200029192240844\n' +
        '\n' +
        'For more information on the Flying Leatherneck Aviation Museum check out their website: https://www.flyingleathernecks.org/\n' +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      fuel: 'Fuel is available at ACI Jets North, ACI Jets South and Clay Lacy Aviation. Prices are competitive with other airports in the area.',
      restrooms:
        'Restrooms are located in the FBOs and main commercial terminal.',
      transientParking:
        'You won’t find any transient parking at John Wayne Airport. You have a choice of three FBOs: ACI Jets North, ACI Jets South and Clay Lacy Aviation.',
      transportation:
        'ACI Jets (North and South) and Clay Lacy Aviation provide crew cars with limits. Crew cars are typically on a first come basis, call ahead to verify availability. Rental car reservations can be coordinated through your FBO of choice. Rideshare is another good option for getting around Jonh Wayne Airport.',
      fbo: 'There are three FBOs at John Wayne Airport: ACI Jets North, ACI Jets South and Clay Lacy Aviation. As of 2025 Clay Lacy is currently undergoing an expansion but is still open for business. We will provide a review of Clay Lacy Aviation once the renovation is complete.  On this trip to John Wayne we visited ACI Jets North. ACI Jets North customer service was friendly and helpful. There are two crew cars available with a 2 hour limit. Hang out in the Pilots Lounge upstairs for a quieter, more private experience. The pilots Lounge has a dedicated bathroom with shower. You’ll find ice cream treats in the freezer. ACI Jets does not charge fees for stays under 3 hours. We overstayed our visit and were charged a $95 ramp fee. So be sure to stick the 3 hour limit!',
      food: 'You won’t find any food options on field. There are food options in the terminal accessible through the OC Air Pass. If you take the crew car there are plenty of food options within a 5 minute drive of the airport.',
    },
  },
  {
    icao: 'KMER',
    name: 'Castle Airport',
    city: 'Atwater',
    state: 'CA',
    elevation: 191,
    latitude: 37.3805,
    longitude: -120.5682,
    youtube: [
      {
        title:
          'Castle Airport (KMER) | This Legendary Air Museum Has a Problem (But We Loved It Anyway)',
        url: 'https://youtu.be/-DaEwBII3Yo',
        date: '11/21/2025',
      },
    ],
    runways: [{ id: '13/31', length: 11702, width: 150, surface: 'Concrete' }],
    frequencies: [
      { type: 'CTAF/UNICOM', mhz: '122.7' },
      { type: 'ATIS', mhz: '120.05' },
      { type: 'APP/DEP', mhz: '120.45' },
    ],
    approaches: [
      {
        runway: '13',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 13',
      },
      {
        runway: '31',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 31',
      },
      {
        runway: 'CIRCLING',
        type: 'VOR',
        name: 'VOR-A',
      },
    ],
    description: {
      summary:
        "Join us as we fly out Piper Arrow into Castle Airport (KMER) in Atwater, California to visit the Castle Air Museum – one of the largest military aviation collections in the United States. Located at the former Castle Air Force Base, this museum houses rare aircraft you won't find anywhere else, including the Avro Vulcan, B-36 Peacemaker, SR-71 Blackbird, and EC-121.\n" +
        '\n' +
        'Despite its low reviews, we discovered why Castle Air Museum is worth the visit for any aviation enthusiast. Join us as we explore inside the VC-9, peek into the bomb bay of the massive Convair B-36 Peacemaker (one of the largest bombers ever built), and walk among dozens of historic aircraft.\n' +
        'We also checked out the brand new KT Aero FBO and got shuttled over to the museum – making Castle Airport an easy and pilot-friendly destination.\n' +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit \n' +
        '\n' +
        'PRO TIP: KT Aero provides shuttle service to/from the Castle Air Museum. It’s a 15 minute walk (about a mile) from the airport to the museum.',
      transientParking:
        'Transient parking is located at the base of tower and serviced by KT Aero. There are plenty of spots with chains but as always bring your own tie downs.',
      fuel: 'Full service fuel is provided by KT Aero. They are extremely friendly and fast. Fuel is reasonably priced.',
      restrooms: 'Restrooms are located within the FBO, KT Aero.',
      transportation:
        'There are no crew cars available. KT Aero will provide a shuttle to the Castle Air Museum and local brewery and food trucks, Blaker Brewing (The Tarmac). Rideshare is your best option for going off field.',
      food: 'The closest food options are near Blaker Brewing – The Tarmac. There are food trucks located in the parking lot serving up a variety of food. The museum has a café with a small food menu within their main building. Great for a quick snack or a caffeine boost. Indoor and outdoor seating is available – just be aware that the feral cats in the area will surround you if you have any food or drink and it may become difficult to sit and eat.',
      fbo: 'The FBO is located at the base of tower and used to be the Officers Briefing Room. Inside you’ll find a seating area with a television, restrooms and a bank of old pay phones. KT Aero provides water and snacks and most importantly a free shuttle over to the Castle Air Museum. Service is fantastic and friendly.',
      additionalInfo:
        'Castle Air Museum has over 70 planes from all eras and all branches of military. There are even planes from other countries, like the Avro Vulcan and MiG-21. Allow about an hour for the VC-9 tour from start to finish. VC-9 tours are only available on weekends. \n' +
        '\n' +
        'Open Cockpit Day occurs twice a year with over 40 cockpits open for an unforgettable experience. Be sure to check out the restoration hangar located at the airport for a peek at the latest projects. Check the museum website for the next scheduled Open Cockpit Day:  https://castleairmuseum.org/ \n' +
        '\n' +
        'For more information on the Transportation Research Center at Castle Airport check out their website: https://www.trcpg.com/about-us/trc-california/',
    },
  },
  {
    icao: 'KCRQ',
    name: 'McClellan-Palomar Airport',
    city: 'Carlsbad',
    state: 'CA',
    elevation: 331,
    latitude: 33.1283,
    longitude: -117.2795,
    youtube: [
      {
        title:
          "McClellan-Palomar Airport (KCRQ) | You've Probably Never Heard of THIS Museum",
        url: 'https://youtu.be/FCxnhzrHbN0',
        date: '11/14/2025',
      },
    ],
    runways: [{ id: '06/24', length: 4897, width: 150, surface: 'Asphalt' }],
    frequencies: [
      { type: 'ATIS', mhz: '118.15' },
      { type: 'TOWER', mhz: '118.6' },
      { type: 'GROUND', mhz: '121.7' },
      { type: 'CLEARANCE', mhz: '120.25' },
    ],
    approaches: [
      {
        runway: '24',
        type: 'ILS OR LOC',
        name: 'ILS or LOC RWY 24',
      },
      {
        runway: '24',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 24',
      },
      {
        runway: '06',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 06',
      },
      {
        runway: 'CIRCLING',
        type: 'VOR',
        name: 'VOR-A',
      },
    ],
    description: {
      summary:
        "Ever wondered what it's like to land at one of Southern California's busiest general aviation airports? We're taking our Piper Arrow into McClellan-Palomar Airport (KCRQ) for a surprise filled aviation adventure you won't want to miss.\n" +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      transientParking:
        'Transient parking is located at the base of tower. There are only 5 spots and is often full.' +
        ' Please be aware that transient parking spots are limited to planes with a wingspan of 38 feet or less. Be sure to have a backup option (Atlantic or Carlsbad Jet Center) if you plan to stay. All transient parking spots have chain tie downs. Overnight fee is $7/night.',
      fbo:
        "Atlantic Aviation and Carlsbad Jet Center are the two FBOs on field at KCRQ. This trip we visited Carlsbad Jet Center and were wowed by their customer service - friendly, personable and warm. They have a beautiful FBO with plenty of comfy seating and places to hang out. Coffee, soda and water are plentiful along with good snacks. There is a Conference Room and an open Pilot's Lounge area. We did not see a Flight Planning Room or Quiet Rooms. Crew cars with a time limit and full-service fuel are available here. \n" +
        '\n' +
        'Breakdown of fees for our Piper Arrow III for OCTOBER 2025 (6 Hour Stay) \n' +
        '$25 Security Fee\n' +
        '$25 TOTAL\n' +
        '\n' +
        'For an estimate of overnight fees and gallons needed to waive fees visit: https://carlsbadjetcenter.com/flight-support/',
      fuel:
        'Self-serve fuel is located on the north ramp. Full service fuel is provided by Atlantic Aviation and' +
        ' Carlsbad Jet Center.',
      restrooms:
        'Restrooms are located within the FBO. You’ll find a restrooms in the terminal and The Landings' +
        ' restaurant.',
      transportation:
        'Atlantic Aviation and Carlsbad Jet Center have crew cars available with a time limit on a' +
        ' first come basis. A rental car can be secured with either FBO for longer stays. Rideshare is an option here for your day trip.',
      food:
        'The Landings restaurant is located just south of tower. The restaurant has indoor and outdoor seating' +
        ' with a view out onto the ramp where passenger board/deplane JSX and American Airlines. You’ll find both locals and visiting pilots enjoying the view and the food. The meu consist of elevated items like Thai Calamari Salad while offering refined classics like patty melts and BLTs. Enjoy like music in the evenings and a mimosa brunch on Sundays. This is one of our favorites!',
      terminalBuilding:
        'The Terminal is used for commercial flights. You’ll find ticket counters, TSA checkpoints' +
        ' and boarding gates for Advanced Air, American Airlines and JSX. You’ll also find restrooms and drinking fountains here.',
      additionalInfo:
        'Spend the day at Legoland, the beach or outlet shopping. For a more unique experience visit the Miniature' +
        ' Engineering Craftsmanship Museum and spend the afternoon amazed by the work and dedication put into these' +
        ' small machines for FREE. Open Thursday – Saturday 9am-4pm https://craftsmanshipmuseum.com/ \n\n' +
        'Noise Abatement Procedures can be found here: https://www.sandiegocounty.gov/content/dam/sdc/dpw/AIRPORTS/palomar/documents/PilotGuide.pdf\n' +
        '\n' +
        "If you're looking for a great CFI and are located in the San Diego area reach out to Mikel Garcia: https://www.instagram.com/gucci_pilot?igsh=NTc4MTIwNjQ2YQ==",
    },
  },
  {
    icao: 'O22',
    name: 'Columbia Airport',
    city: 'Columbia',
    state: 'CA',
    elevation: 2121,
    latitude: 38.0304167,
    longitude: -120.4145556,
    youtube: [
      {
        title: "Columbia Airport (O22) | The Tour We DIDN'T Expect",
        url: 'https://youtu.be/EwZh8lmfyH8',
        date: '11/7/2025',
      },
    ],
    runways: [
      { id: '17/35', length: 4673, width: 75, surface: 'Asphalt' },
      { id: '11/29', length: 2607, width: 50, surface: 'Turf' },
    ],
    frequencies: [
      { type: 'CTAF/UNICOM', mhz: '122.975' },
      { type: 'AWOS‑3', mhz: '124.65' },
      { type: 'NORCAL APPROACH/DEPARTURE', mhz: '125.1' },
    ],
    approaches: [
      {
        runway: '35',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 35',
      },
    ],
    description: {
      summary:
        "Come fly with us as we pilot our Piper Arrow into the beautiful Columbia Airport (O22) in California's Gold Country! Experience a incredibly scenic approach and landing on Runway 17, surrounded by the stunning Sierra Nevada foothills. We explore the airport grounds and campground, get an exclusive look at the Cal Fire Air Attack Base and visit historic Columbia. \n" +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      campground:
        'Campgrounds are located west of RWY 17-35 and north of RWY 11-29. Use the gravel taxiway west of RWY 17-35 to access parking. Wagons are provided at the campground parking for easy transport of your gear. Each campsite has a firepit, picnic bench, table and grill. Hot showers and toilets are available. The event center, equipped with a full kitchen, refrigerators, stove, oven, utensils, tables and chairs can be rented to an additional fee (see website). Campground fee is $10/night per aircraft, first come basis. This fee includes your transient parking fee. All fees are paid online: https://www.tuolumnecounty.ca.gov/705/Columbia-Airport-Campground',
      transientParking:
        'Transient parking is located in front of the Terminal. Follow the green taxi line for dedicated transient parking. All transient spots have tie down chains. Transient parking is $5/night. Pay your fees by scanning the QR code located outside of the terminal.',
      fuel: 'Self-serve fuel is located east of RWY 17-35 and north of the transient parking. Full service fuel is available through Bald Eagle Aviation.',
      restrooms:
        'Restrooms are located within Bald Eagle Aviation FBO. You’ll find a restroom at the far east end of the first row of hangars south of Bald Eagle Aviation – these are open 24/7, very well kept with separate restrooms for men and women.',
      transportation:
        'Bald Eagle Aviation has crew cars with a 3 hour limit on a first come basis. The cars can be rented for longer stays, contact Bald Eagle Aviation. If going into Columbia, no car is needed. It’s a short 15min walk to town.',
      food: 'There isn’t a café currently on field BUT Mandy’s Café is a short 5 min walk east of the field. The menu has a great variety of breakfast and lunch options. Expect a wait on weekends. St. Charles Saloon is another great food spot serving pizza and sasparilla and only a 15 min walk from the airport – follow the Dondero Trail from the airport parking lot. ',
      terminalBuilding:
        'The Terminal Building contains Bald Eagle Aviation FBO. You’ll find restrooms, snacks, coffee, comfy' +
        ' seating and warm friendly staff. Take a peek at the history of the airport on the walls, grab some mercSh and chat with the staff. They’ll answer any questions you have.',
      additionalInfo:
        'Come for the day and take a short walk into Historic Columbia. If antiquing is more your thing, head into Old Town Sonora for endless shops and old town vibes. Visit Murphys, only 14 miles north, for wine tasting and more gold rush history in a charming setting. \n' +
        '\n' +
        'If you’re looking to spend more time in nature, you’ll find lots of local day hiking options in the area. Dragoon Gulch Trail provides amazing views and is located only 10 mins away. Natural Bridges Trailhead is only 7 miles to the west. Stanislaus National Forest is a 30 min drive away and Yosemite is an hour drive east.',
    },
  },
  {
    icao: 'KAPV',
    name: 'Apple Valley Airport',
    city: 'Apple Valley',
    state: 'CA',
    elevation: 3062,
    latitude: 34.5753,
    longitude: -117.1862,
    youtube: [
      {
        title:
          'Apple Valley Airport (KAPV) | We Found The BEST Seats At The Airshow',
        url: 'https://youtu.be/noLIvB21cOw',
        date: '10/31/2025',
      },
    ],
    runways: [
      { id: '18/36', length: 6498, width: 150, surface: 'Asphalt' },
      { id: '08/26', length: 4100, width: 60, surface: 'Asphalt' },
    ],
    frequencies: [
      { type: 'CTAF/UNICOM', mhz: '122.80' },
      { type: 'APPROACH/DEPARTURE', mhz: '124.55' },
    ],
    approaches: [
      {
        runway: '18',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 18',
      },
    ],
    description: {
      summary:
        "Fly with us in our Piper Arrow into Apple Valley Airport (KAPV) onto Runway 18. We're here for the annual Apple Valley Airshow. Join us as we navigate our way to the airshow, make new friends and enjoy a front row view with no crowds. As always we'll end the day with a serene view of the desert form our tail mounted camera.  \n" +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      transientParking:
        'Today we’ll be parking at Midfield Aviation – the only FBO at Apple Valley. Transient Parking for the Terminal is located north of the Terminal Building south of the taxi line. These spots are unmarked and do not have tie downs.',
      fuel:
        'Self-serve fuel is located east of RWY 18-36 near midfield. Avgas was $5.25/gal during our October 2025' +
        ' visit.',
      restrooms:
        'Restrooms are located within the Terminal Building and in the Midfield Aviation building. You can also find restrooms on the east facing end of the northern most row of hangars just north of the Terminal Building.',
      transportation:
        'There are no crew cars or car rentals available here. Rideshare can be tricky and expensive when available. \n' +
        'Plan accordingly before arrival.',
      food: 'There isn’t a café currently on field BUT a new restaurant is in the works and will be opening up soon. The closest food options off field are about 5 miles away and will require a vehicle or bicycle.',
      terminalBuilding:
        'The Terminal Building contains a Pilot’s Lounge for flight planning, a conference room, San Bernardino County offices, restrooms and a (soon to come) café.',
      additionalInfo:
        'There isn’t much to do off field here. Our previous visits were for the café and we’re looking forward to the new café opening. \n' +
        '\n' +
        'The airshow is a great reason to visit! The Apple Valley Airshow occurs every year in October and is filled with, food, fun, cars and planes. Check out the website for information on next year’s show: https://applevalleyairshow.com/',
    },
  },
  {
    icao: 'KRNM',
    name: 'Ramona Airport',
    city: 'Ramona',
    state: 'CA',
    elevation: 1395,
    latitude: 33.0392,
    longitude: -116.915,
    youtube: [
      {
        title: 'Ramona Airport (KRNM) | The SECRET Inside Ramona Airport',
        url: 'https://youtu.be/Z-MOf9DHV-M',
        date: '10/24/2025',
      },
    ],
    runways: [{ id: '09/27', length: 5006, width: 150, surface: 'Asphalt' }],
    frequencies: [
      { type: 'TOWER', mhz: '119.87' },
      { type: 'APPROACH', mhz: '132.20' },
      { type: 'DEPARTURE', mhz: '127.30' },
      { type: 'ATIS', mhz: '132.02' },
      { type: 'UNICOM', mhz: '122.95' },
      { type: 'GROUND', mhz: '121.65' },
    ],
    approaches: [
      { runway: '09', type: 'RNAV (GPS)', name: 'RNAV (GPS) RWY 09' },
      { runway: '27', type: 'RNAV (GPS)', name: 'RNAV (GPS) RWY 27' },
    ],
    description: {
      summary:
        'Few airports surprise us like Ramona (KRNM)! Nestled in the hills of San Diego County, this unassuming field has a wild past — from WWII bombing practice and drag racing to becoming Cal Fire’s oldest Air Attack Base and home to one of two rotorcraft museums in the U.S.\n' +
        '\n' +
        'Fly with us in our Piper Arrow as we land on Runway 27, explore the Classic Rotors Museum, and get a surprise tower tour.\n' +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      transientParking:
        'Transient parking is located at the base of tower. As of August 2025 Cal Fire also has their planes parked here while their ramp is being renovated. Stay clear of the Cal Fire planes and use the spots to the north of tower. Chain tie downs are available at most spots.',
      fuel: 'Self-serve fuel is located on the north side of the runway near approach end of runway 27. Avgas was $5.99/gal during our October 2025 visit. Full service fuel is also available through Pacific Executive Aviation.',
      restrooms:
        'There is a port-a-pottie located in transient parking. Pacific Executive Aviation also have restrooms available. You’ll also find restrooms located inside the museum (when open).',
      transportation:
        'There are no crew cars or car rentals available here. Rideshare can be tricky and expensive when available. There are no food options within walking distance. A car is required to get off field and find food.',
      food: 'There isn’t a café currently on field and you’ll need to secure a car or rideshare to find options away from the airport.',
      museum:
        'Ramona Airport has one of two dedicated rotorcraft museums in the United States; The Classics Rotor Museum. The museum is filled with rare and vintage rotorcraft and has an incredible team of dedicated volunteers who have flown and personally worked on the aircraft found at this museum. It’s an impressive collection that every aviation enthusiast must see. Admission is free and the museum is open Tuesdays & Friday 10am-4pm and Saturdays 10am-6pm.',
      additionalInfo:
        'Ramona Airport is home to a joint Cal Fire – U.S. Forest Service Air Tanker Base. Cal Fire currently has an' +
        ' OV-10 Bronco and (2) S2T Grumman Tankers here. The U.S. Forest Service has one UH-1 Huey at this location. All firefighting aircraft are in transient parking while the Cal Fire base gets a few upgrades. It’s a great way to see these amazing machines up close.',
      displayDay: '3rd Sunday of the Month',
    },
  },
  {
    icao: 'KSZP',
    name: 'Santa Paula Airport',
    city: 'Santa Paula',
    state: 'CA',
    elevation: 250,
    latitude: 34.347,
    longitude: -119.0616,
    youtube: [
      {
        title:
          'Santa Paula Airport (KSZP) | Step Back Into the Golden Era of California General Aviation',
        url: 'https://youtu.be/7V1-ORvL8Jk',
        date: '10/17/2025',
      },
    ],
    runways: [{ id: '04/22', length: 2665, width: 60, surface: 'Asphalt' }],
    frequencies: [{ type: 'CTAF/UNICOM', mhz: '122.90' }],
    approaches: [
      {
        runway: '—',
        type: 'NONE',
        name: 'No published instrument approaches',
      },
    ],
    description: {
      summary:
        'Fly with us in our Piper Arrow into charming Santa Paula Airport (KSZP) onto Runway 22. This airport is known for its aerobatics, cheap fuel and vintage vibes. We’re visiting on display day when hangars are open and plane rides for kids are free. We’ll tour the airport, visit the museum and grab some BBQ nearby. As always we’ll end the day with an incredible tail cam view over NAS Pt. Mugu. \n' +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit\n' +
        '\n' +
        'For Airport procedures & documentation visit: https://www.santapaulaairport.com/',
      transientParking:
        'Transient parking is located on the northeast side of runway. Look for CP Aviation and the restaurant and you’ll be in the right spot. Transient parking areas are clearly marked “Transient” with chain tie downs.',
      fuel: 'Self-serve fuel is located on the north side of the runway about midfield. Avgas was $4.90/gal during out October 2025 visit. KSZP is known for having the cheapest fuel in SoCal.',
      restrooms:
        'There are restrooms located near the Airport Manager office (around back). CP Aviation also have restrooms available. You’ll also find restrooms located inside the museum (when open).',
      transportation:
        'There are no crew cars or car rentals available here. Rideshare can be tricky and expensive when available. There are food options within walking distance. Historic Downtown Santa Paula is a doable walk from the airport.',
      food: 'There isn’t a café currently on field. A new restaurant will be opening on field by the end of the year. And unfortunately, there isn’t a lot of information available on the new restaurant. There are a few food options off field: Best BBQ for barbeque within walking distance, Foster Freeze for soft serve.',
      additionalInfo:
        'You’ll find lots of beautifully restored vintage planes here. First Sundays allow you to take a peek into these original 1930’s hangars, many of which are elaborately decorated. Ask questions, get close up and admire these sometimes rare time machines. \n' +
        '\n' +
        'Santa Paula is known for its aerobatics school. You’ll often find aerobatic planes landing, taking off and practicing in the area. Be sure to listen to carefully to radios calls as you’re coming in or taking off and do your part by making radio calls.  \n' +
        '\n' +
        'This was also the home of the Mason Wing Walking School prior to it’s shutdown in 2024. For more information on the shut down check out this article: https://www.seattletimes.com/business/faa-halts-sequim-wing-walking-flights-revokes-owners-pilot-license/',
      displayDay: '1st Sunday of the Month',
    },
  },
  {
    icao: 'KSBD',
    name: 'San Bernardino International Airport',
    city: 'San Bernardino',
    state: 'CA',
    elevation: 1159,
    latitude: 34.0954,
    longitude: -117.235,
    youtube: [
      {
        title:
          'San Bernardino International Airport (KSBD) | Formerly Norton AFB: What It Looks Like Today',
        url: 'https://youtu.be/s_3Djwap_L4',
        date: '10/10/2025',
      },
    ],
    runways: [{ id: '06/24', length: 10000, width: 200, surface: 'Concrete' }],
    frequencies: [
      { type: 'ATIS', mhz: '124.175' },
      { type: 'TOWER', mhz: '119.45' },
      { type: 'GROUND', mhz: '121.8' },
      { type: 'CTAF/UNICOM', mhz: '122.975' },
      { type: 'APPROACH/DEPARTURE', mhz: '127.0' },
      { type: 'APPROACH/DEPARTURE', mhz: '134.0' },
      { type: 'APPROACH/DEPARTURE', mhz: '135.4' },
    ],
    approaches: [
      {
        runway: '06',
        type: 'ILS OR LOC',
        name: 'ILS or LOC RWY 06',
      },
      {
        runway: '06',
        type: 'LOC',
        name: 'LOC Y RWY 06',
      },
      {
        runway: '06',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) Y RWY 06',
      },
      {
        runway: '06',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) Z RWY 06',
      },
      {
        runway: '06',
        type: 'RNAV (RNP)',
        name: 'RNAV (RNP) X RWY 06',
      },
      {
        runway: '24',
        type: 'RNAV (RNP)',
        name: 'RNAV (RNP) RWY 24',
      },
    ],
    description: {
      summary:
        'Fly with us in our Piper Arrow into historic San Bernardino Int’l Airport (KSBD) onto Runway 06. We’ll visit the Norton AFB Museum, do some planespotting at the USFS Air Tanker Base and grab delicious lunch. We’ll show you around the very luxurious Luxivair FBO and catch a beautiful sunset as we depart former Norton Air Force Base. \n' +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit\n' +
        '\n' +
        'Make sure to check out the flight procedures for KSBD before visiting!\n' +
        'https://flysbd.com/airport-services/voluntary-flight-procedures/',
      transientParking:
        'There is no transient parking available here, however, there is a great FBO, Luxivair on field.',
      fbo:
        'Luxivair is the only FBO at KSBD. They have plenty of ramp space and provide full-service and self-service fuel Avgas. Take time to explore the luxurious FBO complete with Pilot’s Lounge, Flight Planning Room and a Theater. A Conference Room is available but be sure to ask the front desk before entering. You’ll find an automated espresso machine, soda dispenser, cold bottle water, snacks and fresh baked cookies. Make your way up to the patio for an amazing view of the field. \n' +
        '\n' +
        'Breakdown of fees for our Piper Arrow III for SEPTEMBER 2025 (3 Hour Stay) \n' +
        '$80 Ramp Parking (3 hours free - $15 after three hours)\n' +
        '$0 TOTAL',
      fuel: 'Self-serve fuel is available on the northeast side of the airport, located off of Taxiway A between Taxiway E and Runway 24 runup. Full-service fuel is available through Luxivair. Full service fuel is $1 off every Thursday – the perfect reason to fly into KSBD!',
      restrooms:
        'Restrooms are located inside the FBO. Walking in from the ramp, make a left from the lobby down the first hall and you’ll see the restrooms on the right hand side.',
      transportation:
        'Luxivair has crew cars available on a first come basis with a time limit. A car rental will be required for longer stays and Luxivair can help coordinate a car rental for your visit if required. Be sure to have to car insurance information handy if you plan on using the crew cars.',
      food: 'There isn’t a café on field but there are plenty of delicious options close by. We loved Baja King Fish Tacos (even for non-seafood tacos). La Casa Restaurant is another highly rated option close by. Yaamav’a’ Resort and Casino is a 15 minute drive from the airport and another local’s favorite due to their seafood buffet.',
      additionalInfo:
        'Norton AFB Museum is a small but jam packed museum. Full of photos, artifacts, relics and memorabilia from the Norton AFB days but the highlight were the docents. These volunteers all served at Norton and have LOTS of interesting stories to tell. They aren’t shy about sharing their experiences and made for a fantastic time. We HIGHLY recommend this small museum. Hours are limited so arrive with time. Open Thursdays and Saturdays 10am-2pm. \n' +
        '\n' +
        'If you love casinos Yaamava’ is within 15 minutes of the airport. With over 7,400 slot machines and 150+ table games it’s no wonder this resort is popular. It also has a 17 story hotel with panoramic views of the mountains and an elevated pool with cabanas. It even has a 3,000 seat venue for events. \n' +
        '\n' +
        'And speaking of events, KSBD hosts musical events in the most unique way possible – using a 737 as a stage. Events are free but do require you to RSVP. Music ranges from event to event and the atmosphere is family friendly. Luxivair encourages pilots to fly in and enjoy the show. Check out the airport’s Event’s calendar for upcoming shows: https://flysbd.com/corporate/news-and-media/',
    },
  },
  {
    icao: 'KVNY',
    name: 'Van Nuys Airport',
    city: 'Van Nuys',
    state: 'CA',
    elevation: 802,
    latitude: 34.2098,
    longitude: -118.4899,
    youtube: [
      {
        title:
          'Van Nuys Airport (KVNY) | Runway Closure, Go-Around & Ground Confusion',
        url: 'https://youtu.be/rWvxaxKvGF8',
        date: '4/25/2025',
      },
    ],
    runways: [
      { id: '16R/34L', length: 8001, width: 150, surface: 'Asphalt' },
      { id: '16L/34R', length: 4011, width: 75, surface: 'Asphalt' },
    ],
    frequencies: [
      { type: 'TOWER', mhz: '119.3' },
      { type: 'GROUND', mhz: '121.7' },
    ],
    approaches: [
      {
        runway: '16R',
        type: 'ILS OR LOC',
        name: 'ILS RWY 16R',
      },
      {
        runway: '16R',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 16R',
      },
      {
        runway: '34L',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 34L',
      },
      {
        runway: '16L',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 16L',
      },
      {
        runway: '34R',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 34R',
      },
    ],
    description: {
      summary:
        'Fly with us in our Piper Arrow into insanely busy Van Nuys Airport (KVNY) onto Runway 16R. We’ll talk about 16L runway closure, the busiest sector in SoCal TRACON and why we don’t recommend flying into this airport – at least for now. \n' +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      transientParking:
        'There is NO transient parking here. Pick from four FBOs located at this airport, see below for more info. ',
      fbo:
        'There are four FBOs located at this airport; Clay Lacy, Castle & Cooke Aviation, Jet Aviation and Signature East/West. We tried to book our arrival with Signature East but was told they were at capacity and sent over to Signature East instead. The FBO has lots of comfy seating (hang out in the Pilot’s Lounge for a more private and quieter experience). Limited snacks, coffee and water are available. There are 2-3 crew car available for a 2 hour limit. Rental car reservations can be arranged through the FBO. The customer service was incredible and staff was friendly and kind – a big surprise to us small GA folks!   \n' +
        '\n' +
        'Breakdown of fees for our Piper Arrow III for April 2025 (3 Hour Stay) \n' +
        '$0 Handling Fee ($30 fee waived with fuel purchase) \n' +
        '$0 Infrastructure Fee ($8 fee waived with fuel purchase)\n' +
        '$80 Avgas (10 gallons @ $8/gal) \n' +
        '$80 TOTAL',
      fuel: 'Self-service fuel is available at The Park, take Taxiway A to A3,. Fuel pump is located near the original t-hangars. Full-service fuel is available through any of the FBOs listed above.',
      restrooms:
        'Restrooms are located in the FBOs. Please note there are no public restrooms at the observation area. We couldn’t verify if the newer hangars at the northwest end (The Park) had any public restrooms available.',
      transportation:
        'All FBOs on field have crew cars available for a limited time on a first come bases. Car rentals can be coordinated with the FBO of your choice. Rideshare is also a great option in this area.',
      food: 'There aren’t any restaurants on the field. Go northwest for a yummy lunch at Porto’s and pick up some baked goodies. Head southeast to Ventura Blvd in Sherman Oaks for a varied selection of restaurants.',
      additionalInfo:
        'Check the Van Nuys Airport Calendar for runway closure dates: https://www.iflyvny.com/pilot-information/pilot-info\n' +
        '\n' +
        "And don't forget to study the noise abatement procedures (Departure Techniques section) before going: https://www.iflyvny.com/pilot-information/noise-restrictions",
    },
  },
  {
    icao: 'KWJF',
    name: 'General William J. Fox Airfield',
    city: 'Lancaster',
    state: 'CA',
    elevation: 2351,
    latitude: 34.7411,
    longitude: -118.2186,
    youtube: [
      {
        title:
          "General William J Fox Airfield (KWJF) | Tanker Base, Texans & Foxy's Landing",
        url: 'https://youtu.be/7MhMPD1S6Xw',
        date: '10/3/2025',
      },
    ],
    runways: [{ id: '06/24', length: 7201, width: 150, surface: 'Asphalt' }],
    frequencies: [
      { type: 'ATIS', mhz: '126.30' },
      { type: 'TOWER', mhz: '118.525' },
      { type: 'GROUND', mhz: '121.7' },
      { type: 'CTAF/UNICOM', mhz: '122.95' },
      { type: 'APP/DEP (Joshua)', mhz: '126.1' },
    ],
    approaches: [
      {
        runway: '06',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 06',
      },
      {
        runway: '24',
        type: 'RNAV (GPS)',
        name: 'RNAV (GPS) RWY 24',
      },
      {
        runway: '—',
        type: 'VOR',
        name: 'VOR‑B',
      },
    ],
    description: {
      summary:
        'Fly with us in our Piper Arrow into sleepy Fox Field (KWJF) onto Runway 6. This airport serves the wonderful people of Aerospace Valley – an area known for its innovation and record setting history. We’ll take you along as we try the food at the airport café, Foxy’s Landing, wander the airport grounds and get surprise visit from a very famous SoCal flying group. Stay til the end to get a unique view of the airport from the tail cam as we fly over the mountains back home. \n' +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      transientParking:
        'Transient parking is located on the east end of the ramp directly in front of the terminal. There are plenty of tie down spots with chains. No posted transient parking fees.',
      fuel: 'Self-serve fuel is located about midfield. Avgas was $5.97/gal during out September 2025 visit.',
      restrooms:
        'There are restrooms located within the terminal building. If those are inaccessible after hours look for restrooms near the hangar rows directly west of Barnes Aviation. You’ll find restrooms every couple of hangar rows.',
      transportation:
        'There are no crew cars or car rentals available here. Rideshare can be tricky and expensive when available.',
      food: 'Foxy’s Landing is located on field in the terminal building. The food was good and the service is friendly. Snag a seat by the windows with a view out onto the ramp. Take some time to look at the photos scattered about – you’ll find some very cool pictures. AND don’t forget to look at the stickers on the door – those stickers definitely tell a story about the area.',
      additionalInfo:
        'You’ll find pilots and aviation enthusiasts alike here. The airport grounds are filled with all types of planes and pilots of all backgrounds – many whom have worked and some who still do, at Edwards AFB or Plant 42 Palmdale.',
    },
  },
  {
    icao: 'L18',
    name: 'Fallbrook Community Airpark',
    city: 'Fallbrook',
    state: 'CA',
    elevation: 711,
    latitude: 33.3547,
    longitude: -117.2503,
    youtube: [
      {
        title:
          'Fallbrook Community Airpark (L18) | Landing on the SHORTEST Paved Runway in California',
        url: 'https://youtu.be/IcuSscILSVg',
        date: '9/26/2025',
      },
    ],
    runways: [{ id: '18/36', length: 2160, width: 60, surface: 'Asphalt' }],
    frequencies: [
      { type: 'CTAF/UNICOM', mhz: '123.05' },
      { type: 'AWOS', mhz: '118.425' },
      { type: 'APP/DEP (SoCal)', mhz: '127.3' },
    ],
    approaches: [
      {
        runway: '18',
        type: 'GPS',
        name: 'GPS RWY 18',
      },
    ],
    description: {
      summary:
        'Fly with us in our Piper Arrow into quaint Fallbrook Community Airpark (L18) onto Runway 18. This is the shortest paved public use runway in all of California. We’ll talk about why this airpark is so popular and how to avoid taxiing your plane onto the public street. We get an unexpected tour of the airpark from a local and the firefighting chinook gets called out for a fire while we tour. We top off all the action with a serene tail cam departure out to the coast filled with endless radio chatter. \n' +
        '\n' +
        'Join us on Patreon for behind the scenes content: https://www.patreon.com/OutsideTheCockpit',
      transientParking:
        'Transient parking is located on the southeast end of the airpark. There are 5 transient parking spots available with chain tie downs. Check the outdoor billboard for envelopes and box to fee to pay fees. Overnight fees are $5/night',
      fuel: 'Self-serve fuel is located on the west side of the airpark about midfield. Avgas was $6.23/gal during our September 2025 visit.',
      restrooms:
        'There is a port-a-pottie located at the parking lot/planespotting area. Find the code for the gates on the outdoor billboards.',
      transportation:
        'There are no crew cars or car rentals available here. Rideshare can be tricky and expensive when available. If using rideshare be sure to select a pickup spot from the car parking lot.',
      food: 'There isn’t a café on field. The closest food options are Garden Center Café and Grill and Dominick’s Sandwiches located about 1 mile from the Airpark. A short walk will get you there in about a half hour. For more options head north – rideshare recommended – and find everything from BBQ to tacos and coffee shops. Beware, lots of places close around 2pm. Check times if you’re planning on flying in for food.',
      additionalInfo:
        'Planespotting is popular here. You’ll often find the parking lot full of cars and the picnic tables filled with families. Grab a snack or pack a lunch and hang out at the picnic tables for some great planespotting. \n' +
        '\n' +
        'Fallbrook is considered the Avocado capital of the world. There’s an Avocado Festival every April with fun things for the entire family. \n' +
        '\n' +
        'Fallbrook also has lots of small wineries. If you’re lucky enough to snag a rideshare make your way to one of the scenic wineries for lunch. \n' +
        '\n' +
        'For more on the history of Fallbrook Community Airpark check out this website: http://ffcap.org/history.htm',
    },
  },
];

// const AIRPORTSCHEMA = [
//   {
//     icao: 'KSNA',
//     name: 'John Wayne Airport',
//     city: 'Santa Ana',
//     state: 'CA',
//     elevation: 56,
//     latitude: 33.6757,
//     longitude: -117.8682,
//     runways: [
//       { id: '02L/20R', length: 5701, width: 150, surface: 'Concrete' },
//       { id: '02R/20L', length: 2886, width: 75, surface: 'Asphalt' },
//     ],
//     frequencies: [
//       { type: 'ATIS', mhz: '126.0' },
//       { type: 'TOWER', mhz: '120.8' },
//       { type: 'GROUND', mhz: '121.9' },
//       { type: 'CLEARANCE', mhz: '118.0' },
//     ],
//     approaches: [
//       {
//         runway: '20R',
//         type: 'ILS OR LOC',
//         name: 'ILS or LOC RWY 20R',
//       },
//       {
//         runway: '20R',
//         type: 'RNAV (GPS)',
//         name: 'RNAV (GPS) RWY 20R',
//       },
//       {
//         runway: '20L',
//         type: 'RNAV (GPS)',
//         name: 'RNAV (GPS) RWY 20L',
//       },
//       {
//         runway: '02L',
//         type: 'RNAV (GPS)',
//         name: 'RNAV (GPS) RWY 02L',
//       },
//       {
//         runway: '02R',
//         type: 'RNAV (GPS)',
//         name: 'RNAV (GPS) RWY 02R',
//       },
//       {
//         runway: '20R',
//         type: 'VOR',
//         name: 'VOR RWY 20R',
//       },
//     ],
//   },
// ];
