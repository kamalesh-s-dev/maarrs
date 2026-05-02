"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Careers() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".car-header > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".car-header", start: "top 85%" } }
      );

      // Career Cards Stagger
      gsap.fromTo(
        ".car-card",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: "power4.out", scrollTrigger: { trigger: ".car-cards-container", start: "top 80%" } }
      );

      // CTA Banner Animation
      gsap.fromTo(
        ".car-cta",
        { opacity: 0, scale: 0.95, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: ".car-cta", start: "top 85%" } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const opportunities = [
    {
      title: "Internship Opportunities",
      subtitle: "Start strong with real-world experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
      ),
      points: [
        "Hands-on exposure to live projects",
        "Mentorship from experienced professionals",
        "A collaborative environment that values your ideas"
      ]
    },
    {
      title: "Opportunities for Freshers",
      subtitle: "Launch your career with the right foundation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.499 4.499 0 0 0-1.757 4.306 4.499 4.499 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
        </svg>
      ),
      points: [
        "Training and guidance to build core skills",
        "Challenging projects that accelerate learning",
        "A culture that encourages new perspectives and fresh ideas"
      ]
    },
    {
      title: "Opportunities for Experienced Professionals",
      subtitle: "Take your expertise further.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
      points: [
        "Lead impactful projects that shape India's gig economy",
        "Collaborate with passionate, driven teams",
        "Drive innovation and transformation for diverse clients"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="w-full section-wrap bg-[#f8fbff] relative overflow-hidden" id="careers">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Fine Crosshatch Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #009FE3 1px, transparent 1px), linear-gradient(to bottom, #009FE3 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        
        {/* Color Wash Gradients */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-gradient-to-b from-[#009FE3]/5 to-transparent rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] bg-gradient-to-t from-[#7c3aed]/5 to-transparent rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4" />
        
        {/* Concentric Ellipses */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border-[1px] border-[#009FE3]/5 rounded-[100%]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] border-[1px] border-[#009FE3]/5 rounded-[100%]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border-[1px] border-[#009FE3]/5 rounded-[100%]" />
      </div>

      <div className="section-inner">
        {/* Header */}
        <div className="car-header text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#009FE3]/10 border border-[#009FE3]/20 text-[11px] font-bold tracking-[0.11em] text-[#009FE3] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009FE3] animate-[pulse_2.2s_ease-in-out_infinite]" />
              Careers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-tight tracking-tight mb-6">
            Join the MAARRS Journey
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            At MAARRS, we're driven by curiosity, innovation, and the passion to make a difference. We're building a team that's as bold and future-focused as our solutions. Whether you're a student, a fresh graduate, or an experienced professional — your growth story can begin here.
          </p>
        </div>

        {/* Opportunity Cards */}
        <div className="car-cards-container grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className={`car-card group flex flex-col bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,159,227,0.08)] hover:border-[#009FE3]/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#e6f4fc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-[100px] pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f0f8ff] to-[#e6f4fc] flex items-center justify-center text-[#009FE3] mb-6 border border-[#009FE3]/10 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(0,159,227,0.15)] transition-all duration-300">
                <div className="w-8 h-8">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#0f172a] mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-[#009FE3] font-medium text-sm mb-7">
                {item.subtitle}
              </p>

              <ul className="flex flex-col gap-4 mt-auto">
                {item.points.map((point, ptIndex) => (
                  <li key={ptIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#009FE3] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-600 text-[14px] leading-relaxed font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="car-cta mt-6 relative rounded-[2rem] overflow-hidden border border-[#009FE3]/10 bg-white shadow-[0_8px_40px_rgba(0,159,227,0.06)] p-12 md:p-20 flex flex-col items-center text-center group">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(0,159,227,0.06)_0%,transparent_70%)] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#009FE3] to-[#008ce3] shadow-[0_8px_20px_rgba(0,159,227,0.3)] flex items-center justify-center text-white mb-8 z-10 group-hover:scale-110 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-5 tracking-tight z-10">
            Interested in joining us?
          </h3>
          <p className="text-slate-500 text-lg max-w-xl mb-10 z-10 leading-relaxed">
            We’re always looking for bold, future-focused talent. Share your CV with us and explore opportunities at MAARRS.
          </p>

          <a
            href="mailto:careers@maarrs.com"
            className="z-10 relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-[#0f172a] font-bold rounded-full border border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,159,227,0.15)] hover:border-[#009FE3]/40 hover:text-[#009FE3] transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            <span className="relative text-[15px]">Send your CV to careers@maarrs.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
