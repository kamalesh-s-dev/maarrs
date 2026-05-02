"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Founders() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".fnd-header > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".fnd-header", start: "top 85%" } }
      );

      // Founder Cards Stagger
      gsap.fromTo(
        ".fnd-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power4.out", scrollTrigger: { trigger: ".fnd-cards-container", start: "top 80%" } }
      );

      // Thesis & Vision Cards
      gsap.fromTo(
        ".fnd-bottom-card",
        { opacity: 0, scale: 0.95, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".fnd-bottom-container", start: "top 85%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full section-wrap bg-[#f8fbff] relative overflow-hidden" id="founders">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Radial Dot Grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#009FE3 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }} />
        
        {/* Floating Orbs / Glows */}
        <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-gradient-to-tr from-[#009FE3]/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-tl from-[#0891b2]/10 to-transparent rounded-full blur-[100px]" />
        
        {/* Diagonal Slash Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonal-slash-founders" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20" stroke="#009FE3" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal-slash-founders)" />
        </svg>
      </div>

      <div className="section-inner">
        
        {/* Header Section */}
        <div className="fnd-header text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#009FE3]/10 border border-[#009FE3]/20 text-[11px] font-bold tracking-[0.11em] text-[#009FE3] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009FE3] animate-[pulse_2.2s_ease-in-out_infinite]" />
              Founders
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-tight tracking-tight mb-8">
            Building the Backbone for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009FE3] to-[#0891b2]">Next Wave of Growth</span>
          </h2>
          
          <div className="flex flex-col gap-5 text-lg text-slate-600 leading-relaxed text-left md:text-center">
            <p>
              MAARRS was founded on a clear conviction—that the future of economic growth lies in enabling individuals and small businesses operating outside traditional corporate structures.
            </p>
            <p>
              Despite their potential, these sectors remain constrained by fragmented systems, limited access to structured support, and lack of scalable frameworks.
            </p>
            <p className="font-medium text-[#0f172a]">
              The founders bring together complementary expertise in finance and business strategy to address this gap—building MAARRS as a platform that transforms unstructured potential into scalable, sustainable enterprises.
            </p>
          </div>
        </div>

        {/* Founders Profiles */}
        <div className="fnd-cards-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-24">
          
          {/* Founder 1 */}
          <div className="fnd-card flex flex-col bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,159,227,0.04)] hover:shadow-[0_12px_40px_rgba(0,159,227,0.08)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#e6f4fc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[120px] pointer-events-none" />
            
            <div className="flex items-center gap-5 mb-8 relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                ZS
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight">Zubeidha Sirajudeen</h3>
                <p className="text-[#009FE3] font-semibold text-sm md:text-base mt-1">Co-Founder | Financial Strategy & Governance</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 text-slate-600 leading-relaxed text-[15px] md:text-base relative z-10">
              <p>
                Zubeidha Sirajudeen brings a strong foundation in banking and financial services, with deep expertise in financial structuring, risk management, and capital efficiency.
              </p>
              <p>
                Her professional journey has been shaped by working closely with diverse customer segments, giving her firsthand insight into the challenges faced by small and emerging businesses—particularly within underserved and unorganized sectors. She has consistently identified the absence of financial discipline and structured frameworks as a key barrier to sustainable growth.
              </p>
              <p className="font-medium text-slate-700">
                At MAARRS, Zubeidha leads financial strategy and governance, ensuring that every solution is built on principles of scalability, accountability, and long-term value creation. Her approach integrates financial rigor into the core of the platform, enabling businesses to grow with clarity, control, and resilience.
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="fnd-card flex flex-col bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,159,227,0.04)] hover:shadow-[0_12px_40px_rgba(0,159,227,0.08)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#e6f4fc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[120px] pointer-events-none" />
            
            <div className="flex items-center gap-5 mb-8 relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                KG
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f172a] tracking-tight">K Ganesan</h3>
                <p className="text-[#009FE3] font-semibold text-sm md:text-base mt-1">Co-Founder | Business Strategy & Growth</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 text-slate-600 leading-relaxed text-[15px] md:text-base relative z-10">
              <p>
                Ganesan is an experienced financier with a strong understanding of business ecosystems, investment strategy, and growth execution.
              </p>
              <p>
                He has worked closely with businesses across different stages, helping them transition from fragmented operations to structured, performance-driven models. His strength lies in aligning strategic intent with execution—identifying opportunities for value creation and building clear pathways to achieve them.
              </p>
              <p className="font-medium text-slate-700 mt-auto">
                At MAARRS, Ganesan drives business strategy and growth, focusing on developing scalable models, forging strategic partnerships, and ensuring that the platform evolves in alignment with market needs. His approach is grounded in delivering measurable outcomes and unlocking long-term enterprise value.
              </p>
            </div>
          </div>

        </div>

        {/* Thesis & Vision Section */}
        <div className="fnd-bottom-container flex flex-col lg:flex-row gap-8 lg:gap-10 mt-10">
          
          {/* Founder's Thesis (Wider) */}
          <div className="fnd-bottom-card lg:w-[60%] bg-white border border-gray-100 rounded-[2rem] p-10 md:p-14 shadow-[0_8px_30px_rgba(0,159,227,0.05)] relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(0,159,227,0.08)] transition-shadow duration-500">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,159,227,0.03)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#f0f8ff] flex items-center justify-center text-[#009FE3]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold text-[#009FE3] uppercase tracking-widest">Core Philosophy</h3>
                <h4 className="text-2xl font-extrabold text-[#0f172a] tracking-tight">Founder's Thesis</h4>
              </div>
            </div>
            
            <div className="flex flex-col gap-5 text-slate-600 leading-relaxed text-[15px] md:text-[17px] relative z-10">
              <p>
                The unorganized sector represents one of the largest untapped opportunities, yet remains limited by lack of structure, access, and systems.
              </p>
              <p>
                MAARRS is built on the belief that meaningful transformation requires more than incremental change—it requires a fundamental shift in how businesses are enabled to grow.
              </p>
              <p className="font-medium text-[#0f172a] border-l-4 border-[#009FE3] pl-5 py-1 mt-2">
                By combining financial discipline, structured business frameworks, and technology-led execution, we are building an ecosystem that empowers individuals and enterprises to scale with confidence.
              </p>
            </div>
          </div>

          {/* Shared Vision (Narrower, quote style) */}
          <div className="fnd-bottom-card lg:w-[40%] bg-gradient-to-br from-[#f0f8ff] to-[#e6f4fc] rounded-[2rem] p-10 md:p-14 shadow-[0_8px_30px_rgba(0,159,227,0.08)] relative overflow-hidden flex flex-col justify-center border border-[#009FE3]/10 hover:shadow-[0_12px_40px_rgba(0,159,227,0.12)] transition-shadow duration-500">
            {/* Huge quote mark in the background */}
            <svg className="absolute top-6 left-6 w-32 h-32 text-[#009FE3] opacity-10 pointer-events-none" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <h3 className="text-xs font-bold text-[#009FE3] uppercase tracking-widest mb-6 relative z-10">A Shared Vision</h3>
            
            <p className="text-[19px] md:text-[22px] text-[#0f172a] leading-relaxed font-bold relative z-10 tracking-tight italic">
              "To build MAARRS as a category-defining platform that drives formalization, enhances productivity, and unlocks sustainable growth across underserved sectors—creating long-term value for businesses, partners, and the broader economy."
            </p>
            
            <div className="mt-10 flex gap-2 relative z-10 items-center">
              <div className="w-12 h-1.5 rounded-full bg-[#009FE3]" />
              <div className="w-2 h-2 rounded-full bg-[#009FE3]/40" />
              <div className="w-2 h-2 rounded-full bg-[#009FE3]/20" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
