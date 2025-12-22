import React from 'react';
import {getAirportByICAO} from "@/lib/data";
import Link from "next/link";
import Weather from "@/components/Weather";
import Runways from "@/components/Runways";
import Frequencies from "@/components/Frequencies";
import Brief from "@/components/Brief";
import Places from "@/components/Places";
import LocalTime from "@/components/LocalTime";
import HomeButton from "@/components/HomeButton";

export default async function AirportDetails({params}: { params: Promise<{ icao: string }>; }) {
  const airport = getAirportByICAO((await params).icao);

  if (!airport) return <h1>Not Found</h1>

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      <HomeButton/>

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
              {/*<button*/}
              {/*  onClick={() => setIsDiagramOpen(true)}*/}
              {/*  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-blue-700 bg-white hover:bg-blue-50 transition-colors shadow-lg"*/}
              {/*>*/}
              {/*  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">*/}
              {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
              {/*          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>*/}
              {/*  </svg>*/}
              {/*  View Diagram*/}
              {/*</button>*/}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Info & Runways */}
        <div className="lg:col-span-2 space-y-8">
          <Brief/>
          <Places/>
        </div>

        {/* Right Column: Frequencies & Quick Data */}
        <div className="space-y-8">
          <Weather airport={airport}/>
          <Runways airport={airport}/>
          <Frequencies airport={airport}/>
          <LocalTime/>
        </div>
      </div>

      {/* Modal for Airport Diagram */}
      {/*<Modal*/}
      {/*  isOpen={isDiagramOpen}*/}
      {/*  onClose={() => setIsDiagramOpen(false)}*/}
      {/*  title={`Airport Diagram - ${airport.icao}`}*/}
      {/*>*/}
      {/*  <div className="flex flex-col items-center justify-center min-h-[400px]">*/}
      {/*    /!* Mocking a diagram by fetching a different grayscale technical looking image *!/*/}
      {/*    <img*/}
      {/*      src={`https://picsum.photos/seed/${airport.icao}diagram/800/800?grayscale`}*/}
      {/*      alt="Airport Diagram Mock"*/}
      {/*      className="max-w-full h-auto border border-slate-300 shadow-sm"*/}
      {/*    />*/}
      {/*    <p className="mt-4 text-sm text-slate-500 text-center">*/}
      {/*      * This is a simulated diagram for demonstration purposes.<br/>*/}
      {/*      In a production app, this would be a real FAA/Jeppesen SVG chart.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</Modal>*/}
    </div>
  );
}