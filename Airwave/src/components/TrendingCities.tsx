import React from 'react';
import { Link } from 'react-router-dom';
import { getAQIImpact } from '../utils/aqi';

const mockCities = [
  { id: '1', name: 'New York', country: 'USA', aqi: 45, lastUpdated: '2024-03-10T12:00:00Z' },
  { id: '2', name: 'Beijing', country: 'China', aqi: 150, lastUpdated: '2024-03-10T12:00:00Z' },
  { id: '3', name: 'Delhi', country: 'India', aqi: 180, lastUpdated: '2024-03-10T12:00:00Z' },
  { id: '4', name: 'London', country: 'UK', aqi: 60, lastUpdated: '2024-03-10T12:00:00Z' },
  { id: '5', name: 'Tokyo', country: 'Japan', aqi: 75, lastUpdated: '2024-03-10T12:00:00Z' },
];

const TrendingCities = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockCities.map((city) => {
        const { impact, color } = getAQIImpact(city.aqi);
        
        return (
          <Link
            key={city.id}
            to={`/city/${city.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-text-dark">{city.name}</h3>
                <p className="text-gray-600">{city.country}</p>
              </div>
              <div className={`${color} text-white px-3 py-1 rounded-full text-sm`}>
                {city.aqi}
              </div>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{impact}</span>
              <span>Updated: {new Date(city.lastUpdated).toLocaleTimeString()}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default TrendingCities;