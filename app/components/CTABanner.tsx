"use client";

import Link from "next/link";
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CTABanner() {
  const ref = useScrollReveal(0.2);

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full px-4 py-10 md:py-16">
      <div
        className="reveal relative max-w-5xl mx-auto rounded-3xl overflow-hidden px-8 py-20 md:py-24 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/ctabannerbg.png')" }}
      >
        <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-tight tracking-tight mb-6 max-w-2xl">
          Ready to transform your operations with custom platforms?
        </h2>
        <p className="reveal delay-100 text-base md:text-lg text-gray-500 leading-relaxed mb-12 max-w-xl">
          Partner with MAARRS to build scalable, intelligent technology platforms designed for long-term growth and operational excellence.
        </p>
        <div className="reveal delay-200 flex flex-col sm:flex-row items-center gap-4">
          <Link href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#009FE3] text-white font-semibold rounded-xl shadow-lg shadow-[#009FE3]/25 hover:bg-[#0089c4] hover:-translate-y-0.5 transition-all duration-300 text-base">
            Start a Conversation
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link href="/work" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0f172a] font-semibold rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-base">
            Explore Our Work
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
