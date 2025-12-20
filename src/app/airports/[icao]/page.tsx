import React from 'react';
import {getAirportByICAO} from "@/lib/data";

export default async function AirportDetails({params}: { params: Promise<{ icao: string }>; }) {
  const airport = getAirportByICAO((await params).icao);

  if (!airport) return <h1>Not Found</h1>

  return (
    <div>
      <h1>{airport.name}</h1>
      <p>{airport.city}, {airport.state}</p>
      <p>ICAO: {airport.icao}</p>
    </div>
  )
}