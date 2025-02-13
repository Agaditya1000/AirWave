export interface City {
  id: string;
  name: string;
  country: string;
  aqi: number;
  lastUpdated: string;
}

export interface PollutantData {
  name: string;
  value: number;
  unit: string;
  description: string;
}

export interface AQIData {
  aqi: number;
  city: string;
  impact: string;
  pollutants: PollutantData[];
  timestamp: string;
}