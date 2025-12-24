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

export interface Approach {
  runway: string;
  type: string;
  name: string;
}

export type DescriptionType =
  'summary'
  | 'transientParking'
  | 'fuel'
  | 'restrooms'
  | 'transportation'
  | 'food'
  | 'fbo'
  | 'terminalBuilding'
  | 'campground'
  | 'museum';

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
  displayDay?: string;
  approaches?: Approach[];
  description?: {
    summary: string;
    transientParking?: string;
    museum?: string;
    fbo?: string;
    terminalBuilding?: string;
    campground?: string;
    food?: string;
    fuel?: string;
    transportation?: string;
    restrooms?: string;
  }
}

export interface AIState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface WeatherData {
  current: {
    temp: number;
    windSpeed: number;
    weatherCode: number;
    precipitation: number;
  };
  daily: {
    date: string;
    maxTemp: number;
    minTemp: number;
    weatherCode: number;
  }[];
}

export interface PlaceRecommendation {
  text: string;
  chunks: GroundingChunk[];
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
    placeAnswerSources?: any[];
  }
}