"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-[clamp(24px,3vw,80px)] w-full">
      <nav className="flex items-center justify-between w-full max-w-[1240px] px-5 py-3 backdrop-blur-xl border border-white/30 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
          <img
            src="/navbarlogo.png"
            alt="MAARRS Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-9">
          <Link href="/" className="text-[15px] font-medium text-slate-700 hover:text-[#009FE3] transition-colors duration-300 tracking-wide">Home</Link>
          <Link href="#about" className="text-[15px] font-medium text-slate-700 hover:text-[#009FE3] transition-colors duration-300 tracking-wide">About</Link>
          <Link href="#founders" className="text-[15px] font-medium text-slate-700 hover:text-[#009FE3] transition-colors duration-300 tracking-wide">Founders</Link>
          <Link href="#careers" className="text-[15px] font-medium text-slate-700 hover:text-[#009FE3] transition-colors duration-300 tracking-wide">Careers</Link>
        </div>

        {/* Call to Action and Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:flex px-4 py-2 md:px-6 md:py-2.5 bg-[#009FE3] text-white text-[13px] md:text-sm font-semibold tracking-wide rounded-full shadow-[0_4px_14px_0_rgba(0,159,227,0.39)] hover:shadow-[0_6px_20px_rgba(0,159,227,0.23)] hover:bg-[#0089c4] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </Link>
          <button 
            className="md:hidden flex items-center justify-center p-1 text-slate-700 hover:text-[#009FE3] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[110%] left-4 right-4 bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-5 flex flex-col gap-4 md:hidden">
          <Link onClick={() => setIsOpen(false)} href="/" className="text-base font-semibold text-slate-700 hover:text-[#009FE3]">Home</Link>
          <Link onClick={() => setIsOpen(false)} href="#about" className="text-base font-semibold text-slate-700 hover:text-[#009FE3]">About</Link>
          <Link onClick={() => setIsOpen(false)} href="#founders" className="text-base font-semibold text-slate-700 hover:text-[#009FE3]">Founders</Link>
          <Link onClick={() => setIsOpen(false)} href="#careers" className="text-base font-semibold text-slate-700 hover:text-[#009FE3]">Careers</Link>
          <hr className="border-gray-200" />
          <Link onClick={() => setIsOpen(false)} href="#contact" className="text-center py-3 bg-[#009FE3] text-white font-semibold rounded-xl shadow-md">
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
