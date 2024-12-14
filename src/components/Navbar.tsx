import React from 'react';
import { Menu, Star } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold text-white">Devertex</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white">Services</a>
              <a href="#work" className="text-gray-300 hover:text-white">Our Work</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Let's Talk
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;