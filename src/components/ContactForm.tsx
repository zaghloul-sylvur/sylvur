import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Ready to start your project? Contact us today and let's create something amazing together.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-400">
                <Mail className="h-6 w-6 mr-3" />
                <span>contact@devertex.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-6 w-6 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;