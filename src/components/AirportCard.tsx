import React from 'react';
import {Airport} from "@/data/types";
import Link from "next/link";
import Image from 'next/image';

const AirportCard = ({airport}: { airport: Airport }) => {
  return (
    <Link
      href={`/airports/${airport.icao}`}
      scroll={true}
      className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col"
    >
      <div className="h-32 bg-slate-100 relative overflow-hidden">
        {/* Placeholder image using picsum with a deterministic seed based on ICAO */}
        <Image
          src={`/airport/${airport.icao}.jpg`}
          alt={`${airport.name} view`}
          width={1200}
          height={400}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
        <span className="absolute bottom-3 left-4 text-white font-bold text-2xl tracking-wide">
          {airport.icao}
        </span>
      </div>

      <div className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3
            className="font-semibold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">
            {airport.name}
          </h3>
        </div>
        <div className="flex items-center text-slate-500 text-sm mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          {airport.city}, {airport.state}
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Elevation</span>
          <span className="text-sm font-semibold text-slate-700">{airport.elevation} ft</span>
        </div>
      </div>
    </Link>
  );
};

export default AirportCard;