import React from 'react';

const Banner = () => {
  const bannerSrc = `${import.meta.env.BASE_URL}assets/banner-stack.png`;

  return (
    <div className="w-full bg-gradient-to-b from-slate-50/50 to-white py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Area */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-medium">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#technologies" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-sm shadow-md shadow-pink-500/20 hover:opacity-95 transition-all"
              >
                Explore Technologies
              </a>
              <button 
                className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl blur-xl opacity-20 -z-10 animate-pulse"></div>
              <img 
                src={bannerSrc} 
                alt="Development Stack Illustration" 
                className="w-full h-auto object-contain drop-shadow-2xl"
                onError={(e) => {
                  // Fallback if image path has any minor mismatch
                  e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;