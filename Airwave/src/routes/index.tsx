import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CityDetails from '../pages/CityDetails';
import Compare from '../pages/Compare';
import About from '../pages/About';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/city/:cityId" element={<CityDetails />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;