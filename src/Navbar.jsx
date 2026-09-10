import React, { useState } from 'react';
import logo from './assets/logo-text.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Dev Stack Logo" 
              className="w-10 h-10 object-contain rounded-xl shadow-md"
              onError={(e) => {
                e.target.style.display = 'none';
                if (e.target.nextSibling) {
                  e.target.nextSibling.style.display = 'flex';
                }
              }}
            />
            {/* Fallback Badge if image path fails */}
            <div className="hidden items-center gap-2">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold p-2 rounded-xl text-lg shadow-md">DS</span>
              <span className="text-xl font-bold tracking-tight text-gray-900">Dev Stack</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Dev Stack</span>
          </div>

          {/* Desktop Nav Links (Center Aligned) */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-gray-600 hover:text-black font-medium transition-colors">Home</a>
            <a href="#technologies" className="text-gray-600 hover:text-black font-medium transition-colors">Technologies</a>
            <a href="#projects" className="text-gray-600 hover:text-black font-medium transition-colors">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-black font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-black font-medium transition-colors">Contact</a>
          </div>

          {/* Action Buttons (Right Aligned) */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-black font-semibold text-sm transition-colors">Sign In</button>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium px-6 py-2.5 rounded-full text-sm shadow-md hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pt-4 pb-6 space-y-4 shadow-lg">
          <a href="#home" className="block text-gray-700 font-medium py-1">Home</a>
          <a href="#technologies" className="block text-gray-700 font-medium py-1">Technologies</a>
          <a href="#projects" className="block text-gray-700 font-medium py-1">Projects</a>
          <a href="#about" className="block text-gray-700 font-medium py-1">About</a>
          <a href="#contact" className="block text-gray-700 font-medium py-1">Contact</a>
          <div className="pt-4 flex flex-col gap-3 border-t border-gray-100">
            <button className="text-center text-gray-700 font-semibold py-2">Sign In</button>
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium py-2.5 rounded-full text-sm w-full shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;