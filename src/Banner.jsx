 import React from 'react';

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content Area */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#technologies" className="btn bg-gradient-to-r from-orange-500 to-pink-500 text-white border-none px-6 rounded-full shadow-md">
              Explore Technologies
            </a>
            <button className="btn btn-outline border-gray-300 px-6 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="flex justify-center">
          <img 
            src="assets/banner-stack.png" 
            alt="Development Stack Illustration" 
            className="w-full max-w-md h-auto object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;