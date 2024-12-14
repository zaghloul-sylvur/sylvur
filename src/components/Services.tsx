import React from 'react';
import { Code, Search, Zap, Users, TestTube, Clock } from 'lucide-react';

const services = [
  {
    icon: <Code className="h-8 w-8 text-purple-500" />,
    title: 'Expert Development',
    description: 'We transform designs into fully functional, responsive websites using modern technologies.'
  },
  {
    icon: <Search className="h-8 w-8 text-purple-500" />,
    title: 'SEO Excellence',
    description: 'Optimize your online presence with our advanced SEO strategies and best practices.'
  },
  {
    icon: <Zap className="h-8 w-8 text-purple-500" />,
    title: 'Interactive Magic',
    description: 'Create engaging user experiences with smooth animations and interactions.'
  },
  {
    icon: <Users className="h-8 w-8 text-purple-500" />,
    title: 'Dedicated Support',
    description: 'Get personalized attention from our experienced project managers.'
  },
  {
    icon: <TestTube className="h-8 w-8 text-purple-500" />,
    title: 'Quality Testing',
    description: 'Rigorous testing ensures your website performs flawlessly across all devices.'
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    title: 'Timely Delivery',
    description: 'We respect deadlines and deliver projects on time without compromising quality.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-2">Our Services</h2>
        <p className="text-gray-400 mb-12">Comprehensive solutions for your digital needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;