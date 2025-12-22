import {AIRPORTS} from "@/data/airports";

export function getAllAirports() {
  return AIRPORTS;
}

export function getAirportByICAO(icao: string) {
  return AIRPORTS.find(airport => airport.icao === icao)
}

export function getFilteredAirports(search: string) {
  if (!search) return AIRPORTS

  const s = search.toLowerCase()

  return AIRPORTS.filter((airport) => {
    return (
      airport.name.toLowerCase().includes(s) ||
      airport.city.toLowerCase().includes(s) ||
      airport.icao.toLowerCase().includes(s)
    )
  })
}
