import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We develop{' '}
            <span className="text-purple-500">amazing</span> AI solutions
            <br />
            for your business
            <Sparkles className="inline-block ml-2 h-8 w-8 text-purple-500" />
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Transform your business with cutting-edge AI and automation solutions.
            Experience the perfect blend of innovation and efficiency.
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#services" 
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="border border-purple-500 text-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;