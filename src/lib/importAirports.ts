import { createClient } from '@supabase/supabase-js';

// tsx src/scripts/runImportAirports
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export type AirportObject = {
  icao: string;
  name: string;
  city: string;
  state: string;
  elevation?: number;
  latitude?: number;
  longitude?: number;
  imageUrl?: string;
  diagramUrl?: string;

  summary?: string;
  transientParking?: string;
  fuel?: string;
  restrooms?: string;
  transportation?: string;
  food?: string;
  fbo?: string;
  terminalBuilding?: string;
  campground?: string;
  museum?: string;
  additionalInfo?: string;
  displayDay?: string;

  runways?: { id: string; length: number; width: number; surface: string }[];
  frequencies?: { type: string; mhz: string }[];
  approaches?: { runway: string; type: string; name: string }[];
  youtube?: { title: string; url: string; date: string }[];
};

export async function importAirports(airports: AirportObject[]) {
  for (const airport of airports) {
    try {
      // 1️⃣ Insert core airport info
      const { data: airportData, error: airportError } = await supabase
        .from('airports')
        .upsert(
          {
            icao: airport.icao,
            name: airport.name,
            city: airport.city,
            state: airport.state,
            elevation: airport.elevation ?? null,
            latitude: airport.latitude ?? null,
            longitude: airport.longitude ?? null,
            image_url: airport.imageUrl ?? null,
            diagram_url: airport.diagramUrl ?? null,
            summary: airport.summary ?? null,
            transient_parking: airport.transientParking ?? null,
            fuel: airport.fuel ?? null,
            restrooms: airport.restrooms ?? null,
            transportation: airport.transportation ?? null,
            food: airport.food ?? null,
            fbo: airport.fbo ?? null,
            terminal_building: airport.terminalBuilding ?? null,
            campground: airport.campground ?? null,
            museum: airport.museum ?? null,
            additional_info: airport.additionalInfo ?? null,
            display_day: airport.displayDay ?? null,
          },
          { onConflict: 'icao' },
        )
        .select('id')
        .single();

      if (airportError) throw airportError;
      const airportId = airportData.id;

      // 2️⃣ Insert runways
      if (airport.runways?.length) {
        await supabase.from('runways').upsert(
          airport.runways.map((r) => ({
            airport_id: airportId,
            runway_id: r.id,
            length: r.length,
            width: r.width,
            surface: r.surface,
          })),
        );
      }

      // 3️⃣ Insert frequencies
      if (airport.frequencies?.length) {
        await supabase.from('frequencies').insert(
          airport.frequencies.map((f) => ({
            airport_id: airportId,
            type: f.type,
            mhz: f.mhz,
          })),
        );
      }

      // 4️⃣ Insert approaches
      if (airport.approaches?.length) {
        await supabase.from('approaches').insert(
          airport.approaches.map((a) => ({
            airport_id: airportId,
            runway: a.runway,
            type: a.type,
            name: a.name,
          })),
        );
      }

      if (airport.youtube?.length) {
        const { data, error } = await supabase.from('youtube_links').upsert(
          airport.youtube.map((y) => ({
            airport_id: airportId,
            title: y.title,
            url: y.url,
            date: y.date,
          })),
          {
            onConflict: 'url', // ✅ avoids duplicates
          },
        );

        if (error) {
          console.error('YouTube insert error:', error);
        } else {
          console.log('Inserted YouTube links:', data);
        }
      }

      console.log(`✅ Airport imported: ${airport.icao}`);
    } catch (err) {
      console.error(`❌ Failed to import ${airport.icao}:`, err);
    }
  }
}
