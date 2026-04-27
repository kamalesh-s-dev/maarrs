"use client";

import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HowPlatformsServe() {
  const ref = useScrollReveal();

  const features = [
    { id: "01", title: "Brand & Identity Enablement", description: "Supporting consistent brand presence across digital touchpoints." },
    { id: "02", title: "Digital Enterprise Enablement", description: "Helping organisations operate and scale through structured digital systems." },
    { id: "03", title: "Business Framework Structuring", description: "Organising business models, workflows, and operational structures into scalable frameworks." },
    { id: "04", title: "Workflow Automation", description: "Automating repetitive operational processes for improved efficiency." },
    { id: "05", title: "Embedded Support & Assistance", description: "Providing ongoing guidance and operational support when required." }
  ];

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

        {/* Left */}
        <div className="flex flex-col">
          <h2 className="reveal-left text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0f172a] mb-10 leading-[1.1] tracking-tight">
            How our platforms<br className="hidden lg:block"/> serve organisations
          </h2>

          <div className="reveal-left delay-200 bg-[#16202e] rounded-3xl p-6 md:p-8 flex flex-col gap-8 shadow-2xl">
            <div className="w-full aspect-video bg-slate-800 rounded-2xl flex flex-col items-center justify-center text-slate-400 font-medium border-2 border-slate-700 border-dashed">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 opacity-50 mb-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              Image Placeholder
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              MAARRS platforms function as integrated operational systems that support digital identity, automation, workflows, and scalable business operations.
            </p>
            <div>
              <Link href="/get-started" className="inline-flex items-center gap-2 px-6 py-3 bg-[#009FE3] text-white font-semibold rounded-xl hover:bg-[#0089c4] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-[#009FE3]/20">
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`reveal-right delay-${index * 100} bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 group cursor-default`}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-[#f0f8ff] rounded-xl flex items-center justify-center text-[#009FE3] font-bold text-xl group-hover:bg-[#009FE3] group-hover:text-white transition-colors duration-300">
                {feature.id}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#0f172a] font-bold text-xl mb-1.5 group-hover:text-[#009FE3] transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
