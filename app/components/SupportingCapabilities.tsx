"use client";

import Link from "next/link";
import { useScrollReveal } from '../hooks/useScrollReveal';

const capabilities = [
  {
    title: "Digital Transformation",
    description: "Modernising systems, operational workflows, and business processes through scalable digital solutions.",
    points: ["System modernisation", "Process optimization", "Digital workflow design", "Scalable infrastructure"],
    href: "/services/digital-transformation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    ghostIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-full h-full text-[#009FE3]/10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Consulting",
    description: "Strategic advisory support focused on operational clarity, structure, and sustainable growth.",
    points: ["Strategic planning", "Operational assessment", "Growth frameworks", "Governance structure"],
    href: "/services/consulting",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    ghostIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-full h-full text-[#009FE3]/10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function SupportingCapabilities() {
  const ref = useScrollReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-[#f8fbff] w-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="reveal text-4xl md:text-5xl font-bold text-[#0f172a] mb-5 tracking-tight">Supporting capabilities</h2>
          <p className="reveal delay-100 text-lg text-gray-500 leading-relaxed">
            MAARRS strengthens platform ecosystems through strategic support services that improve operational structure, scalability, and long-term business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`reveal card-shine delay-${(index + 1) * 100} relative bg-white border border-gray-200 rounded-3xl p-10 flex flex-col gap-6 overflow-hidden group hover:shadow-xl hover:border-blue-100 transition-all duration-300`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none select-none opacity-60">
                {cap.ghostIcon}
              </div>
              <div className="relative z-10 w-14 h-14 bg-[#009FE3] rounded-2xl flex items-center justify-center shadow-lg shadow-[#009FE3]/20 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                {cap.icon}
              </div>
              <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-[#0f172a] leading-tight">{cap.title}</h3>
              <p className="relative z-10 text-gray-500 text-base leading-relaxed">{cap.description}</p>
              <ul className="relative z-10 flex flex-col gap-3">
                {cap.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#009FE3] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600 text-sm md:text-base font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <Link href={cap.href} className="relative z-10 inline-flex items-center gap-2 text-[#009FE3] font-semibold text-base mt-2 hover:gap-3 transition-all duration-300">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
