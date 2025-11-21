import React, {useEffect, useState} from 'react';
import {Airport, AIState, WeatherData, PlaceRecommendation} from '@/types';
import {generateAirportBriefing, getNearbyPlaces} from '@/services/geminiService';
import {fetchAirportWeather, getWeatherCondition} from '@/services/weatherService';
import {Modal} from './Modal';

interface AirportDetailProps {
  airport: Airport;
  onBack: () => void;
}

export const AirportDetail: React.FC<AirportDetailProps> = ({airport, onBack}) => {
  const [isDiagramOpen, setIsDiagramOpen] = useState(false);

  // AI Briefing State
  const [briefing, setBriefing] = useState<AIState<string>>({
    data: null,
    loading: false,
    error: null,
  });

  // Weather State
  const [weather, setWeather] = useState<AIState<WeatherData>>({
    data: null,
    loading: false,
    error: null,
  });

  // Nearby Places State
  const [places, setPlaces] = useState<AIState<PlaceRecommendation>>({
    data: null,
    loading: false,
    error: null,
  });

  // Initial Data Fetch
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      // 1. Briefing
      setBriefing(prev => ({...prev, loading: true}));
      try {
        const text = await generateAirportBriefing(airport);
        if (isMounted) setBriefing({data: text, loading: false, error: null});
      } catch (err) {
        if (isMounted) setBriefing({data: null, loading: false, error: "Failed to load briefing"});
      }

      // 2. Weather
      setWeather(prev => ({...prev, loading: true}));
      try {
        const weatherData = await fetchAirportWeather(airport.latitude, airport.longitude);
        if (isMounted) setWeather({data: weatherData, loading: false, error: null});
      } catch (err) {
        if (isMounted) setWeather({data: null, loading: false, error: "Failed to load weather"});
      }

      // 3. Nearby Places (Gemini with Maps Grounding)
      setPlaces(prev => ({...prev, loading: true}));
      try {
        const placesData = await getNearbyPlaces(airport);
        if (isMounted) setPlaces({data: placesData, loading: false, error: null});
      } catch (err) {
        if (isMounted) setPlaces({data: null, loading: false, error: "Failed to load nearby places"});
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [airport]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      {/* Breadcrumb / Back */}
      <button
        onClick={onBack}
        className="flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 mb-6 transition-colors"
      >
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
        </svg>
        Back to Directory
      </button>

      {/* Main Header Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
        <div className="h-48 sm:h-64 bg-slate-800 relative">
          <img
            src={`https://picsum.photos/seed/${airport.icao}/1200/400`}
            alt="Airport Aerial"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"/>
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white w-full">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">{airport.icao}</h1>
                <h2 className="text-xl sm:text-2xl font-medium text-slate-200">{airport.name}</h2>
                <p className="text-slate-400 mt-1 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  {airport.city}, {airport.state} &bull; {airport.elevation}' MSL
                </p>
              </div>
              <button
                onClick={() => setIsDiagramOpen(true)}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                View Diagram
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info & Runways */}
        <div className="lg:col-span-2 space-y-8">

          {/* AI Briefing Section */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">AI Pilot Briefing</h3>
            </div>

            {briefing.loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-5/6"></div>
              </div>
            ) : briefing.data ? (
              <div className="prose prose-slate text-slate-600 max-w-none leading-relaxed whitespace-pre-line">
                {briefing.data}
              </div>
            ) : (
              <p className="text-slate-400 italic">Briefing information unavailable.</p>
            )}
            <p className="mt-4 text-xs text-slate-400 uppercase tracking-wider">Generated by Gemini 2.5 Flash</p>
          </section>

          {/* Nearby Places (Maps Grounding) */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-red-100 text-red-600 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Nearby Attractions</h3>
            </div>

            {places.loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-slate-100 rounded w-full"></div>
                <div className="h-4 bg-slate-100 rounded w-2/3"></div>
              </div>
            ) : places.data ? (
              <div className="space-y-4">
                <div className="prose prose-slate text-slate-600 max-w-none leading-relaxed whitespace-pre-line">
                  {places.data.text}
                </div>

                {/* Grounding Chips */}
                {places.data.chunks.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Sources & Map
                      Links</h4>
                    <div className="flex flex-wrap gap-2">
                      {places.data.chunks.map((chunk, idx) => {
                        // Handle Web Links
                        if (chunk.web?.uri) {
                          return (
                            <a key={`web-${idx}`} href={chunk.web.uri} target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-200">
                              <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                              </svg>
                              {chunk.web.title}
                            </a>
                          );
                        }
                        // Handle Google Maps Links
                        if (chunk.maps?.uri) {
                          return (
                            <a key={`map-${idx}`} href={chunk.maps.uri} target="_blank" rel="noopener noreferrer"
                               className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 hover:bg-green-100 hover:text-green-800 transition-colors border border-green-200">
                              <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                              </svg>
                              {chunk.maps.title || 'View on Map'}
                            </a>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-slate-400 italic">No nearby place information available.</p>
            )}
          </section>
        </div>

        {/* Right Column: Frequencies & Quick Data */}
        <div className="space-y-8">

          {/* Weather Section */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-blue-500 text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Current Weather</h3>
                <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                </svg>
              </div>
            </div>
            <div className="p-6">
              {weather.loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-8 bg-slate-100 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                </div>
              ) : weather.data ? (
                <>
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-3">{getWeatherCondition(weather.data.current.weatherCode).icon}</span>
                    <div>
                      <div className="text-3xl font-bold text-slate-800">{weather.data.current.temp}°F</div>
                      <div
                        className="text-sm text-slate-500">{getWeatherCondition(weather.data.current.weatherCode).label}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <span className="block text-slate-400 text-xs uppercase">Wind</span>
                      <span className="font-semibold text-slate-700">{weather.data.current.windSpeed} mph</span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg">
                      <span className="block text-slate-400 text-xs uppercase">Precip</span>
                      <span className="font-semibold text-slate-700">{weather.data.current.precipitation}"</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Forecast</h4>
                    <div className="space-y-3">
                      {weather.data.daily.map((day, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <div className="flex items-center w-16 font-medium text-slate-600">
                            <span className="mr-2">{getWeatherCondition(day.weatherCode).icon}</span>
                            {day.date}
                          </div>
                          <div className="flex-1 h-1.5 bg-slate-100 mx-3 rounded-full overflow-hidden">
                            {/* Simple visual bar for temperature range visualization could go here, but plain text is cleaner for now */}
                          </div>
                          <div className="text-slate-700 font-mono">
                            <span className="font-semibold">{Math.round(day.maxTemp)}°</span>
                            <span className="text-slate-400 mx-1">/</span>
                            <span className="text-slate-500">{Math.round(day.minTemp)}°</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-slate-400 text-sm">Weather data currently unavailable.</p>
              )}
            </div>
          </section>

          {/* Runways */}
          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">Runway
              Information</h3>
            <div className="grid gap-4 sm:grid-cols-1">
              {airport.runways.map((rw) => (
                <div key={rw.id}
                     className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <div>
                    <span className="block text-2xl font-bold text-slate-700 font-mono">{rw.id}</span>
                    <span className="text-xs font-medium text-slate-400 uppercase">{rw.surface}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-lg font-semibold text-slate-800">{rw.length}'</span>
                    <span className="text-xs text-slate-500">x {rw.width}'</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 border-b border-slate-100 pb-2">Frequencies</h3>
            <ul className="space-y-3">
              {airport.frequencies.map((freq, idx) => (
                <li key={idx} className="flex items-center justify-between group">
                  <span
                    className="text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors">{freq.type}</span>
                  <span className="font-mono text-lg font-bold text-slate-800">{freq.mhz}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-blue-50 rounded-xl border border-blue-100 p-6">
            <h4 className="text-blue-800 font-semibold mb-2">Local Time</h4>
            <p className="text-3xl font-bold text-blue-900 font-mono">
              {new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
            </p>
            <p className="text-blue-600 text-sm mt-1">UTC {new Date().toISOString().slice(11, 16)}Z</p>
          </section>
        </div>
      </div>

      {/* Modal for Airport Diagram */}
      <Modal
        isOpen={isDiagramOpen}
        onClose={() => setIsDiagramOpen(false)}
        title={`Airport Diagram - ${airport.icao}`}
      >
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          {/* Mocking a diagram by fetching a different grayscale technical looking image */}
          <img
            src={`https://picsum.photos/seed/${airport.icao}diagram/800/800?grayscale`}
            alt="Airport Diagram Mock"
            className="max-w-full h-auto border border-slate-300 shadow-sm"
          />
          <p className="mt-4 text-sm text-slate-500 text-center">
            * This is a simulated diagram for demonstration purposes.<br/>
            In a production app, this would be a real FAA/Jeppesen SVG chart.
          </p>
        </div>
      </Modal>
    </div>
  );
};