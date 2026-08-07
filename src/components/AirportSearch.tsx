'use client';

import { useEffect, useState } from 'react';
import { createSupabaseReadonlyClient } from '@/lib/supabaseReadOnly';

type AirportVideo = {
  name: string;
  icao: string;
  city: string;
  youtube_video_id: string;
  state: string;
};
const supabase = createSupabaseReadonlyClient();

export default function AirportSearch() {
  const [query, setQuery] = useState('');
  const [airports, setAirports] = useState<AirportVideo[]>([]);

  useEffect(() => {
    async function loadAirports() {
      const { data, error } = await supabase
        .from('airports')
        .select('name, city, state, icao, youtube_video_id')
        .eq('active', true)
        .order('icao');

      if (error) {
        console.error('Unable to load airports:', error);
        return;
      }

      setAirports(data ?? []);
    }

    void loadAirports();
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const results = normalizedQuery
    ? airports.filter(({ name, icao, city, state }) =>
        [name, icao, city, state].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        ),
      )
    : [];

  return (
    <section id='find-adventure' className='px-6 py-24'>
      <div className='mx-auto max-w-6xl'>
        <div className='mx-auto max-w-3xl text-center'>
          <p className='text-sm font-bold uppercase tracking-widest text-blue-600'>
            Explore Our Adventures
          </p>

          <h2 className='mt-3 text-4xl font-bold md:text-5xl'>
            Find Your Next Destination
          </h2>

          <p className='mt-5 text-lg leading-relaxed text-slate-700'>
            Search by airport name, airport code, city or state abbreviation to
            find one of our aviation adventures.
          </p>
        </div>

        <div className='mx-auto mt-10 max-w-3xl'>
          <div className='relative'>
            <label htmlFor='airport-search' className='sr-only'>
              Search by airport name, airport code, city or state abbreviation
            </label>

            <svg
              aria-hidden='true'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400'
            >
              <circle cx='11' cy='11' r='8' />
              <path d='m21 21-4.35-4.35' />
            </svg>

            <input
              id='airport-search'
              type='search'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Search KLAX, John Wayne Airport, Sedona or CA'
              autoComplete='off'
              className='w-full rounded-xl border border-slate-200 bg-white py-5 pl-14 pr-5 text-base text-slate-950 shadow-lg outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10'
            />
          </div>

          {normalizedQuery && (
            <div
              className='mt-4 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg'
              aria-live='polite'
            >
              {results.length > 0 ? (
                <ul className='divide-y divide-slate-200'>
                  {results.map((airport) => (
                    <li key={`${airport.icao}-${airport.youtube_video_id}`}>
                      <a
                        href={`https://youtu.be/${airport.youtube_video_id}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group flex items-center justify-between gap-6 px-6 py-5 transition hover:bg-slate-50'
                      >
                        <div className='min-w-0'>
                          <p className='mt-1 text-sm text-slate-600'>
                            {airport.name}
                            <span className='mx-2 text-slate-300'>•</span>
                            {airport.icao}
                            <span className='mx-2 text-slate-300'>•</span>
                            {airport.city}, {airport.state}
                          </p>
                        </div>

                        <span
                          aria-hidden='true'
                          className='shrink-0 text-xl text-blue-600 transition-transform group-hover:translate-x-1'
                        >
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className='px-6 py-8 text-center'>
                  <p className='font-semibold text-slate-950'>
                    No adventures found
                  </p>

                  <p className='mt-2 text-sm text-slate-600'>
                    Try searching by airport name, ICAO code, city or state
                    abbreviation.
                  </p>
                </div>
              )}
            </div>
          )}

          {!normalizedQuery && (
            <div className='mt-5 flex flex-wrap justify-center gap-2 text-sm'>
              <span className='text-slate-500'>Popular searches:</span>

              {['KAVX', 'Santa Ynez', 'Harris Ranch'].map((suggestion) => (
                <button
                  key={suggestion}
                  type='button'
                  onClick={() => setQuery(suggestion)}
                  className='font-semibold text-blue-600 transition hover:text-blue-700 hover:underline'
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
