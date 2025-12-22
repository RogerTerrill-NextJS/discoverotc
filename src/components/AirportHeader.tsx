import React from 'react';
import DiagramButton from "@/components/DiagramButton";
import {Airport} from "@/data/types";

const AirportHeader = ({airport}: { airport: Airport }) => {
  return (
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
                {airport.city}, {airport.state} &bull; {airport.elevation}&#39; MSL
              </p>
            </div>
            <DiagramButton airport={airport}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportHeader;