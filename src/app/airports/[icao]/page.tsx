import React from 'react';
import { getYoutubeId } from '@/lib/utils';

import Weather from '@/components/Weather';
import Runways from '@/components/Runways';
import Frequencies from '@/components/Frequencies';
import LocalTime from '@/components/LocalTime';
import HomeButton from '@/components/HomeButton';
import AirportHeader from '@/components/AirportHeader';
import ScrollToTop from '@/components/ScrollToTop';
import InfoSection from '@/components/InfoSection';
import DisplayDay from '@/components/DisplayDay';
import AdditionalVideos from '@/components/PreviousVideos';
import YoutubeVideo from '@/components/YoutubeVideo';
import { createSupabaseBrowserClient } from '@/lib/supabaseClient';

export default async function AirportDetails({
  params,
}: {
  params: Promise<{ icao: string }>;
}) {
  const supabase = createSupabaseBrowserClient();

  // Fetch airport from Supabase by ICAO
  const { data: airport, error } = await supabase
    .from('airports')
    .select('*') // you can also select specific columns
    .eq('icao', (await params).icao.toUpperCase())
    .single();

  if (error || !airport) {
    console.error('Error fetching airport:', error);
    return <h1>Airport Not Found</h1>;
  }

  const airportId = airport.id;

  // 2️⃣ Fetch runways
  const { data: runways } = await supabase
    .from('runways')
    .select('*')
    .eq('airport_id', airportId);

  // 3️⃣ Fetch frequencies
  const { data: frequencies } = await supabase
    .from('frequencies')
    .select('*')
    .eq('airport_id', airportId);

  // 4️⃣ Fetch YouTube links
  const { data: youtube } = await supabase
    .from('youtube_links')
    .select('*')
    .eq('airport_id', airportId);

  // Attach related data to airport object so components receive the same shape as before
  const airportWithRelations = {
    ...airport,
    runways: runways || [],
    frequencies: frequencies || [],
    youtube: youtube || [],
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300'>
      <ScrollToTop />
      <HomeButton />
      <AirportHeader airport={airportWithRelations} />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Left Column */}
        <div className='lg:col-span-2 space-y-8'>
          {airportWithRelations.youtube.length > 0 && (
            <YoutubeVideo
              videoId={getYoutubeId(airportWithRelations.youtube[0].url)}
            />
          )}
          <InfoSection title='Summary' airport={airportWithRelations} />
          <InfoSection
            title='Transient Parking'
            airport={airportWithRelations}
          />
          <InfoSection title='Restrooms' airport={airportWithRelations} />
          <InfoSection title='Transportation' airport={airportWithRelations} />
          <InfoSection title='Food' airport={airportWithRelations} />
          <InfoSection title='FBO' airport={airportWithRelations} />
          <InfoSection
            title='Terminal Building'
            airport={airportWithRelations}
          />
          <InfoSection title='Campground' airport={airportWithRelations} />
          <InfoSection title='Museum' airport={airportWithRelations} />
          <InfoSection title='Additional Info' airport={airportWithRelations} />
        </div>

        {/* Right Column */}
        <div className='space-y-8'>
          <DisplayDay airport={airportWithRelations} />
          <Weather airport={airportWithRelations} />
          <Frequencies airport={airportWithRelations} />
          <Runways airport={airportWithRelations} />
          <AdditionalVideos airport={airportWithRelations} />
          <LocalTime />
        </div>
      </div>
    </div>
  );
}
