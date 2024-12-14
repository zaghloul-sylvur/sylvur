import React from 'react';
import { ServiceCard } from '../ui/ServiceCard';
import { services } from '../../data/services';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">Our Services</h2>
        <p className="text-gray-400 mb-12 text-center">Innovative AI solutions for modern businesses</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;