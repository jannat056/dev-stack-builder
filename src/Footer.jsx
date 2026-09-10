import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold p-2 rounded-lg text-lg">DS</span>
            <span className="text-xl font-bold tracking-tight text-white">Dev Stack</span>
          </div>
          <p className="text-slate-400 text-sm max-w-sm">
            Curated tools, technologies, and resources for developers to build modern software efficiently.
          </p>
          <div className="flex space-x-4 text-slate-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium text-sm transition-colors">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium text-sm transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium text-sm transition-colors">LinkedIn</a>
          </div>
        </div>

        {/* Product Links */}
        <div>
          <h3 className="font-semibold text-white uppercase text-xs tracking-wider mb-4">Product</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#technologies" className="hover:text-white transition-colors">Technologies</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold text-white uppercase text-xs tracking-wider mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold text-white uppercase text-xs tracking-wider mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#privacy" className="hover:text-slate-400 transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-slate-400 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;