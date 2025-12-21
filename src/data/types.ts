export interface Runway {
  id: string;
  length: number; // in feet
  width: number; // in feet
  surface: string;
}

export interface Frequency {
  type: string; // e.g., TOWER, GROUND, UNICOM
  mhz: string;
}

export interface Airport {
  icao: string;
  name: string;
  city: string;
  state: string;
  elevation: number; // in feet
  latitude: number;
  longitude: number;
  runways: Runway[];
  frequencies: Frequency[];
  imageUrl?: string;
  diagramUrl?: string;
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
    placeAnswerSources?: string[]; // Assuming it's an array of strings
  }
}