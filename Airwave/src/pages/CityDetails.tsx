import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { getAQIImpact } from '../utils/aqi';
import type { PollutantData } from '../types';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mockPollutants: PollutantData[] = [
  { name: 'PM2.5', value: 35, unit: 'µg/m³', description: 'Fine particulate matter' },
  { name: 'PM10', value: 65, unit: 'µg/m³', description: 'Coarse particulate matter' },
  { name: 'O3', value: 45, unit: 'ppb', description: 'Ozone' },
  { name: 'NO2', value: 25, unit: 'ppb', description: 'Nitrogen dioxide' },
  { name: 'CO', value: 0.8, unit: 'ppm', description: 'Carbon monoxide' },
  { name: 'SO2', value: 15, unit: 'ppb', description: 'Sulfur dioxide' },
];

const mockHistoricalData = {
  labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
  datasets: [
    {
      label: 'AQI',
      data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 150) + 50),
      borderColor: '#9B4F96',
      tension: 0.4,
    },
  ],
};

const CityDetails = () => {
  const { cityId } = useParams();
  const [activeTab, setActiveTab] = useState<'24h' | '7d'>('24h');
  
  // Mock data for demonstration
  const cityData = {
    name: 'New York',
    country: 'USA',
    aqi: 75,
    lastUpdated: new Date().toISOString(),
    coordinates: [40.7128, -74.0060], // New York coordinates
  };

  const { impact, color } = getAQIImpact(cityData.aqi);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-text-dark mb-2">{cityData.name}</h1>
        <p className="text-gray-600">
          Last updated: {new Date(cityData.lastUpdated).toLocaleString()}
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* AQI Value Box */}
        <div className={`${color} rounded-lg p-8 text-white text-center`}>
          <div className="text-6xl font-bold mb-4">{cityData.aqi}</div>
          <div className="text-2xl">{impact}</div>
        </div>

        {/* Map */}
        <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={cityData.coordinates as [number, number]}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={cityData.coordinates as [number, number]}>
              <Popup>
                {cityData.name}
                <br />
                AQI: {cityData.aqi}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Pollutants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
        {mockPollutants.map((pollutant) => (
          <div key={pollutant.name} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-text-dark mb-2">{pollutant.name}</h3>
            <div className="text-3xl font-bold text-bora mb-2">
              {pollutant.value} <span className="text-sm text-gray-600">{pollutant.unit}</span>
            </div>
            <p className="text-gray-600 text-sm">{pollutant.description}</p>
          </div>
        ))}
      </div>

      {/* Historical Data */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-text-dark">Historical Data</h2>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === '24h' ? 'bg-bora text-white' : 'bg-gray-100 text-text-dark'
              }`}
              onClick={() => setActiveTab('24h')}
            >
              24 Hours
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                activeTab === '7d' ? 'bg-bora text-white' : 'bg-gray-100 text-text-dark'
              }`}
              onClick={() => setActiveTab('7d')}
            >
              7 Days
            </button>
          </div>
        </div>
        <div className="h-[400px]">
          <Line
            data={mockHistoricalData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top' as const,
                },
                title: {
                  display: true,
                  text: 'AQI Trend',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CityDetails;