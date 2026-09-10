import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold p-2 rounded-lg text-lg">DS</span>
            <span className="text-xl font-bold tracking-tight">Dev Stack</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-black font-medium transition-colors">Home</a>
            <a href="#technologies" className="text-gray-600 hover:text-black font-medium transition-colors">Technologies</a>
            <a href="#projects" className="text-gray-600 hover:text-black font-medium transition-colors">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-black font-medium transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-black font-medium transition-colors">Contact</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn btn-ghost btn-sm font-semibold">Sign In</button>
            <button className="btn bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none btn-sm px-5 rounded-full">Sign Up</button>
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
        <div className="md:hidden bg-base-100 border-b px-4 pt-2 pb-4 space-y-3">
          <a href="#home" className="block text-gray-700 font-medium py-1">Home</a>
          <a href="#technologies" className="block text-gray-700 font-medium py-1">Technologies</a>
          <a href="#projects" className="block text-gray-700 font-medium py-1">Projects</a>
          <a href="#about" className="block text-gray-700 font-medium py-1">About</a>
          <a href="#contact" className="block text-gray-700 font-medium py-1">Contact</a>
          <div className="pt-2 flex flex-col gap-2">
            <button className="btn btn-outline btn-sm w-full">Sign In</button>
            <button className="btn bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none btn-sm w-full">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;