import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { getAQIImpact } from '../utils/aqi';
import type { City } from '../types';

const mockCities: City[] = [
  { id: '1', name: 'New York', country: 'USA', aqi: 45, lastUpdated: '2024-03-10T12:00:00Z' },
  { id: '2', name: 'Beijing', country: 'China', aqi: 150, lastUpdated: '2024-03-10T12:00:00Z' },
  { id: '3', name: 'Delhi', country: 'India', aqi: 180, lastUpdated: '2024-03-10T12:00:00Z' },
  { id: '4', name: 'London', country: 'UK', aqi: 60, lastUpdated: '2024-03-10T12:00:00Z' },
  { id: '5', name: 'Tokyo', country: 'Japan', aqi: 75, lastUpdated: '2024-03-10T12:00:00Z' },
];

const cityCoordinates: Record<string, [number, number]> = {
  'New York': [40.7128, -74.0060],
  'Beijing': [39.9042, 116.4074],
  'Delhi': [28.6139, 77.2090],
  'London': [51.5074, -0.1278],
  'Tokyo': [35.6762, 139.6503],
};

const Compare = () => {
  const [city1, setCity1] = useState<City | null>(null);
  const [city2, setCity2] = useState<City | null>(null);

  const getComparisonText = () => {
    if (!city1 || !city2) return '';

    const diff = Math.abs(city1.aqi - city2.aqi);
    const worse = city1.aqi > city2.aqi ? city1.name : city2.name;
    const better = city1.aqi > city2.aqi ? city2.name : city1.name;

    return `${worse} has a higher pollution level than ${better} by ${diff} AQI points. ${
      diff > 50 ? 'The difference is significant.' : 'The difference is moderate.'
    }`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-text-dark mb-8">Compare Cities</h1>

      {/* City Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* City 1 Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select First City
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-bora focus:border-bora"
            value={city1?.id || ''}
            onChange={(e) => setCity1(mockCities.find(c => c.id === e.target.value) || null)}
          >
            <option value="">Select a city</option>
            {mockCities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}, {city.country}
              </option>
            ))}
          </select>
        </div>

        {/* City 2 Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Second City
          </label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-bora focus:border-bora"
            value={city2?.id || ''}
            onChange={(e) => setCity2(mockCities.find(c => c.id === e.target.value) || null)}
          >
            <option value="">Select a city</option>
            {mockCities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}, {city.country}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comparison Display */}
      {city1 && city2 && (
        <>
          {/* AQI Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[city1, city2].map((city) => {
              const { impact, color } = getAQIImpact(city.aqi);
              return (
                <div key={city.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-text-dark mb-2">
                      {city.name}, {city.country}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      Last updated: {new Date(city.lastUpdated).toLocaleString()}
                    </p>
                    <div className={`${color} text-white p-4 rounded-md text-center`}>
                      <div className="text-4xl font-bold mb-2">{city.aqi}</div>
                      <div className="text-lg">{impact}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map View */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-text-dark mb-4">Location Comparison</h2>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapContainer
                center={[0, 0]}
                zoom={2}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {[city1, city2].map((city) => (
                  <Marker
                    key={city.id}
                    position={cityCoordinates[city.name]}
                  >
                    <Popup>
                      {city.name}
                      <br />
                      AQI: {city.aqi}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* Comparison Text */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-lg text-text-dark">{getComparisonText()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Compare;