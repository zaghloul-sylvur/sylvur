import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-64 bg-gray-800 p-6">
        <div className="flex flex-col space-y-4">
          <a href="#about" className="text-white hover:text-purple-400" onClick={onClose}>About Us</a>
          <a href="#services" className="text-white hover:text-purple-400" onClick={onClose}>Services</a>
          <a href="#testimonials" className="text-white hover:text-purple-400" onClick={onClose}>Testimonials</a>
          <a href="#contact" className="text-white hover:text-purple-400" onClick={onClose}>Contact</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;