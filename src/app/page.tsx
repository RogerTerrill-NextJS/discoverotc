'use client'

import React, {useState, useMemo, useEffect} from 'react';
import {Airport} from '@/types';
import {MOCK_AIRPORTS} from './constants';
import {AirportCard} from '@/components/AirportCard';
import {AirportDetail} from '@/components/AirportDetail';
import {NewsletterSignup} from "@/components/Newsletter";

// Simple View State Management
type ViewState = 'LIST' | 'DETAIL';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('LIST');
  const [selectedAirport, setSelectedAirport] = useState<Airport | null>(null);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('ALL');

  // Derived data
  const uniqueStates = useMemo(() => {
    const states = new Set(MOCK_AIRPORTS.map(a => a.state));
    return Array.from(states).sort();
  }, []);

  const filteredAirports = useMemo(() => {
    return MOCK_AIRPORTS.filter(airport => {
      const matchesSearch =
        airport.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        airport.icao.toLowerCase().includes(searchQuery.toLowerCase()) ||
        airport.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesState = selectedState === 'ALL' || airport.state === selectedState;

      return matchesSearch && matchesState;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedState]);

  // Handle Hash Navigation (Simple Router)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // remove #
      if (hash) {
        const airport = MOCK_AIRPORTS.find(a => a.icao === hash);
        if (airport) {
          setSelectedAirport(airport);
          setCurrentView('DETAIL');
          return;
        }
      }
      setCurrentView('LIST');
      setSelectedAirport(null);
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleAirportClick = (airport: Airport) => {
    window.location.hash = airport.icao;
  };

  const handleBack = () => {
    // clear hash without reloading
    history.pushState("", document.title, window.location.pathname + window.location.search);
    // manually trigger state update since pushState doesn't fire hashchange
    setCurrentView('LIST');
    setSelectedAirport(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={handleBack}>
            <div className="bg-blue-600 text-white p-1.5 rounded-lg mr-3 shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">
              <span className="text-blue-600">Outside</span>the<span className="text-blue-600">Cockpit</span>
            </h1>
          </div>
          <div className="text-sm font-medium text-slate-500 hidden sm:block">
            Beyond The Runway
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentView === 'LIST' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Hero / Filter Section */}
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore Public Airports</h2>
              <p className="text-slate-500 mb-8">Access detailed diagrams, frequencies, and AI-powered summaries for
                airports across the nation.</p>

              {/* Search Bars */}
              <div
                className="flex flex-col sm:flex-row gap-4 shadow-sm bg-white p-2 rounded-2xl border border-slate-200">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search name, ICAO, or city..."
                    className="block w-full pl-10 pr-3 py-3 border-transparent text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="relative min-w-[140px]">
                  <select
                    className="block w-full pl-3 pr-10 py-3 text-base border-l border-slate-100 focus:outline-none focus:ring-0 sm:text-sm rounded-xl text-slate-700 bg-transparent"
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                  >
                    <option value="ALL">All States</option>
                    {uniqueStates.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredAirports.length > 0 ? (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {filteredAirports.map(airport => (
                  <AirportCard
                    key={airport.icao}
                    airport={airport}
                    onClick={handleAirportClick}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="inline-block p-4 rounded-full bg-slate-100 mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-slate-900">No airports found</h3>
                <p className="text-slate-500">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        )}

        {currentView === 'DETAIL' && selectedAirport && (
          <AirportDetail
            airport={selectedAirport}
            onBack={handleBack}
          />
        )}
      </main>

      {/* Newsletter Section */}
      <NewsletterSignup/>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AeroGuide. For flight simulation and demonstration purposes only.</p>
          <p className="mt-2">Not for real-world navigation.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
