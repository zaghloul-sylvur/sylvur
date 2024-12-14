import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are a team of AI and automation experts dedicated to helping businesses 
            grow through innovative solutions and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Target className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
            <p className="text-gray-400">
              To empower businesses with AI-driven solutions that drive growth and efficiency.
            </p>
          </div>

          <div className="text-center p-6">
            <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Team</h3>
            <p className="text-gray-400">
              Expert professionals with deep experience in AI, automation, and business growth.
            </p>
          </div>

          <div className="text-center p-6">
            <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Values</h3>
            <p className="text-gray-400">
              Innovation, integrity, and commitment to delivering exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;