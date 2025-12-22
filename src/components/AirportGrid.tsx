import React from 'react';
import {Airport} from "@/data/types";
import {getAllAirports, getFilteredAirports} from "@/lib/data";
import Link from "next/link";
import AirportCard from "@/components/AirportCard";

const AirportGrid = async ({term}: { term: string }) => {
  const airports = await getAllAirports();
  const filteredAirports = await getFilteredAirports(term);
  return (
    (airports.length > 0) ? (
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {filteredAirports.map((airport: Airport) => (
          <AirportCard
            key={airport.icao}
            airport={airport}
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
    )
  );
};

export default AirportGrid;