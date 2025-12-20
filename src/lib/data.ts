import {AIRPORTS} from "@/data/airports";


export function getAllAirports() {
  return AIRPORTS;
}

export function getAirportByICAO(icao: string) {
  return AIRPORTS.find(airport => airport.icao === icao)
}