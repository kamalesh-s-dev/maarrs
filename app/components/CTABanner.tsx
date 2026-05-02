"use client";

import Link from "next/link";
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTABanner() {
  const ref = useScrollReveal(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full section-wrap">
      <div className="section-inner">
        <div
          className="reveal relative max-w-5xl mx-auto rounded-3xl px-8 py-20 md:py-24 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat shadow-[0_10px_40px_rgba(0,159,227,0.08)] border border-[#009FE3]/10"
          style={{ backgroundImage: "url('/ctabannerbg.png')" }}
        >
          {/* Abstract Overlays */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 rounded-3xl">
            {/* Soft Glass Glare */}
            <div className="absolute top-0 right-0 w-[150%] h-[100%] bg-gradient-to-bl from-white/40 to-transparent transform -skew-x-12 translate-x-[30%] opacity-20 pointer-events-none" />
            
            {/* Flowing Light Leaks */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#009FE3]/15 to-transparent rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#009FE3]/10 to-transparent rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite]" />
            
            {/* Delicate Topographic Rings (Subtle) */}
            <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] rounded-full border-[1px] border-[#009FE3]/5 opacity-30" />
            <div className="absolute top-[-40%] right-[-10%] w-[800px] h-[800px] rounded-full border-[1px] border-[#009FE3]/5 opacity-30" />
          </div>
          <h2 className="reveal relative z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-tight tracking-tight mb-6 max-w-2xl">
            Ready to transform your operations with custom platforms?
          </h2>
          <p className="reveal delay-100 relative z-10 text-base md:text-lg text-gray-500 leading-relaxed mb-12 max-w-xl">
            Partner with MAARRS to build scalable, intelligent technology platforms designed for long-term growth and operational excellence.
          </p>
          <div className="reveal delay-200 relative z-10 flex flex-col sm:flex-row items-center gap-4">
            <Link href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#009FE3] text-white font-semibold rounded-xl shadow-lg shadow-[#009FE3]/25 hover:bg-[#0089c4] hover:-translate-y-0.5 transition-all duration-300 text-base">
              Start a Conversation
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}