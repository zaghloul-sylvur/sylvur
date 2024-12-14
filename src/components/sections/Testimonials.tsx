import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Tech Solutions Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: "The AI chatbot has transformed our customer service. We've seen a 50% reduction in response time and improved satisfaction rates.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Growth Marketing Co.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    text: "Their lead reactivation service helped us recover countless dormant leads. The ROI has been exceptional.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Digital First Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    text: "The voice agents sound incredibly natural. Our clients can't tell they're talking to AI, and that's exactly what we wanted.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Client Feedback</h2>
        
        <div className="relative">
          <div className="flex items-center justify-between">
            <button 
              onClick={prev}
              className="absolute left-0 z-10 p-2 text-white bg-purple-600 rounded-full hover:bg-purple-700"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="mx-auto max-w-3xl px-12">
              <div className="bg-gray-700 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-400">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">{testimonials[currentIndex].text}</p>
              </div>
            </div>
            
            <button 
              onClick={next}
              className="absolute right-0 z-10 p-2 text-white bg-purple-600 rounded-full hover:bg-purple-700"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;