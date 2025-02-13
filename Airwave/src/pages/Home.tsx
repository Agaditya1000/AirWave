import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TrendingCities from '../components/TrendingCities';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-hero-pattern bg-cover bg-center h-[600px] flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl font-bold text-text-light mb-6">
            Real-Time Air Quality Index (AQI) Monitoring
          </h1>
          <p className="text-xl text-text-light mb-8">
            Track pollution levels worldwide in a single click
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for a city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-bora shadow-lg"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-bora text-white p-2 rounded-full hover:bg-bora-light transition-colors">
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Trending Cities Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-8">Trending Cities</h2>
          <TrendingCities />
        </div>
      </div>
    </div>
  );
};

export default Home;