import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import ContactForm from './components/sections/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;