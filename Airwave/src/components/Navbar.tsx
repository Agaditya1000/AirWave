import React from 'react';
import { Link } from 'react-router-dom';
import { Wind } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Wind className="h-8 w-8 text-bora" />
              <span className="ml-2 text-xl font-semibold text-text-dark">AirWatch</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/compare" className="text-text-dark hover:text-bora">Compare</Link>
            <Link to="/about" className="text-text-dark hover:text-bora">About</Link>
            <Link to="/contact" className="text-text-dark hover:text-bora">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;