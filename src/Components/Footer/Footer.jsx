import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#001529] text-white px-6 py-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Logo and Socials */}
        <div className="flex flex-col md:flex-row justify-between items-end pb-4 border-b border-white/10">
          
          {/* Logo Side */}
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-lg shadow-lg">
               {/* This represents the triangular logo from your image */}
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-widest uppercase">Hero.io</span>
          </div>

          {/* Social Links Side */}
          <div className="flex flex-col items-end gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">Social Links</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-blue-400 transition-all duration-300">
                <FaXTwitter size={18} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 text-center">
          <p className="text-gray-400 text-sm tracking-wide font-light">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;