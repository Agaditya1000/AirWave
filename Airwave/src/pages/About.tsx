import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-text-dark mb-8">About AirWatch</h1>

      {/* What is AQI Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-text-dark mb-6">What is AQI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              The Air Quality Index (AQI) is a standardized indicator for reporting daily air quality. 
              It tells you how clean or polluted your air is, and what associated health effects might 
              be a concern for you.
            </p>
            <p className="text-gray-600">
              The AQI focuses on health effects you may experience within a few hours or days after 
              breathing polluted air. It is calculated based on the levels of major air pollutants 
              regulated by the Clean Air Act.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { range: '0-50', level: 'Good', color: 'bg-green-500' },
              { range: '51-100', level: 'Moderate', color: 'bg-yellow-500' },
              { range: '101-150', level: 'Unhealthy for Sensitive Groups', color: 'bg-orange-500' },
              { range: '151-200', level: 'Unhealthy', color: 'bg-red-500' },
              { range: '201-300', level: 'Very Unhealthy', color: 'bg-purple-500' },
              { range: '301+', level: 'Hazardous', color: 'bg-red-900' },
            ].map((item) => (
              <div key={item.range} className="flex items-center space-x-4">
                <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
                <span className="font-medium">{item.range}:</span>
                <span className="text-gray-600">{item.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it's Measured Section */}
      <section className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-text-dark mb-6">How is it Measured?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'PM2.5 & PM10',
              description: 'Particulate matter measured in micrometers, from sources like dust and smoke.',
            },
            {
              title: 'Ozone (O₃)',
              description: 'Ground-level ozone created by chemical reactions between oxides of nitrogen and volatile organic compounds.',
            },
            {
              title: 'Carbon Monoxide (CO)',
              description: 'A harmful gas released from burning fossil fuels, particularly in vehicles.',
            },
            {
              title: 'Sulfur Dioxide (SO₂)',
              description: 'A gas primarily produced from the burning of fossil fuels containing sulfur.',
            },
            {
              title: 'Nitrogen Dioxide (NO₂)',
              description: 'A reddish-brown gas primarily from motor vehicle exhaust and power plants.',
            },
            {
              title: 'Data Collection',
              description: 'Measurements are taken using specialized equipment at monitoring stations worldwide.',
            },
          ].map((item) => (
            <div key={item.title} className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold text-text-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Attribution */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-text-dark mb-6">Data Attribution</h2>
        <p className="text-gray-600 mb-4">
          AirWatch uses real-time air quality data from the World Air Quality Index (WAQI) project. 
          The data is collected from government agencies, verified monitoring stations, and other 
          reliable sources worldwide.
        </p>
        <p className="text-gray-600">
          For more information about the data sources and methodology, please visit the 
          <a href="https://aqicn.org/" className="text-bora hover:text-bora-light ml-1" target="_blank" rel="noopener noreferrer">
            World Air Quality Index project
          </a>.
        </p>
      </section>
    </div>
  );
};

export default About;