import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold p-2 rounded-lg text-lg">DS</span>
            <span className="text-xl font-bold tracking-tight">Dev Stack</span>
          </div>
          <p className="text-gray-500 text-sm max-w-sm">
            Curated tools, technologies, and resources for developers to build modern software efficiently.
          </p>
          <div className="flex space-x-4 text-gray-600">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black font-medium text-sm">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black font-medium text-sm">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black font-medium text-sm">LinkedIn</a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold text-gray-900 uppercase text-xs tracking-wider mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#home" className="hover:text-black">Home</a></li>
            <li><a href="#technologies" className="hover:text-black">Technologies</a></li>
            <li><a href="#projects" className="hover:text-black">Projects</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-gray-900 uppercase text-xs tracking-wider mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#about" className="hover:text-black">About</a></li>
            <li><a href="#contact" className="hover:text-black">Contact</a></li>
            <li><a href="#careers" className="hover:text-black">Careers</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold text-gray-900 uppercase text-xs tracking-wider mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#privacy" className="hover:text-black">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-black">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-base-300 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#privacy" className="hover:underline">Privacy</a>
          <a href="#terms" className="hover:underline">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;