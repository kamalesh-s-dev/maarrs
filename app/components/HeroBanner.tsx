"use client";

import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HeroBanner() {
  const ref = useScrollReveal(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: "url('/Container.png')",
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6 mx-auto mt-10">

        {/* Dots */}
        <div className="reveal delay-100 absolute -left-12 md:-left-32 top-10 flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#009FE3] animate-pulse"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#009FE3]/70 animate-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#009FE3]/40 animate-pulse" style={{ animationDelay: '400ms' }}></div>
        </div>

        {/* Lightning Card */}
        <div className="reveal delay-200 hidden md:flex absolute -right-20 md:-right-40 -top-10 items-center justify-center bg-white w-14 h-14 rounded-2xl shadow-xl shadow-blue-500/10 animate-bounce" style={{ animationDuration: '3s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-[#009FE3]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        </div>

        {/* Check Card */}
        <div className="reveal delay-300 hidden md:flex absolute -right-16 md:-right-32 bottom-0 items-center justify-center bg-[#009FE3] w-12 h-12 rounded-xl shadow-xl shadow-[#009FE3]/30 animate-bounce" style={{ animationDuration: '4s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="reveal text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0f172a] leading-tight tracking-tight mb-8">
          Custom Technology Platforms, <br className="hidden md:block" />
          built with intent.
        </h1>

        <p className="reveal delay-100 text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed mb-12">
          MAARRS designs and builds custom technology platforms that help
          organisations operate, scale, and evolve through structured digital
          systems aligned to real business needs.
        </p>

        {/* Buttons */}
        <div className="reveal delay-200 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/start"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#009FE3] text-white font-semibold rounded-xl shadow-lg shadow-[#009FE3]/20 hover:bg-[#0089c4] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            Start a Conversation
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/explore"
            className="flex items-center justify-center px-8 py-3.5 bg-white text-[#009FE3] font-semibold rounded-xl border-2 border-[#009FE3] hover:bg-[#f0f8ff] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            Explore Platforms
          </Link>
        </div>
      </div>
    </section>
  );
}
