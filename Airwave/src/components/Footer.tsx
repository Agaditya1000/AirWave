import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-text-dark text-text-light py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AirWatch</h3>
            <p className="text-sm text-gray-300">
              Real-time air quality monitoring for cities worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-bora-light">About</a></li>
              <li><a href="/contact" className="hover:text-bora-light">Contact</a></li>
              <li><a href="/api-docs" className="hover:text-bora-light">API Documentation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-bora-light"><Github className="h-6 w-6" /></a>
              <a href="#" className="hover:text-bora-light"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-bora-light"><Mail className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© 2024 AirWatch. All rights reserved.</p>
          <p className="mt-2">Data provided by WAQI API</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;