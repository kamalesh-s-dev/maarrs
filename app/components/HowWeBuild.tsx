"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function HowWeBuild() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: "01",
      shortTitle: "UNDERSTAND",
      title: "Understand the Business",
      description: "Analyse operational workflows, systems, and business environments.",
      points: [
        "Deep-dive into business processes",
        "Map existing workflows",
        "Identify automation opportunities",
        "Understand stakeholder needs"
      ]
    },
    {
      id: "02",
      shortTitle: "ARCHITECTURE",
      title: "Architecture Design",
      description: "Design scalable and robust system architecture aligned with business goals.",
      points: [
        "Define technical stack",
        "Create scalable data models",
        "Plan integration points",
        "Ensure security compliance"
      ]
    },
    {
      id: "03",
      shortTitle: "BUILD",
      title: "Development & Build",
      description: "Develop and implement the custom platform according to the designed architecture.",
      points: [
        "Agile development sprints",
        "Continuous integration and deployment",
        "Regular stakeholder reviews",
        "Comprehensive quality assurance"
      ]
    },
    {
      id: "04",
      shortTitle: "EVOLVE",
      title: "Evolve & Scale",
      description: "Iteratively improve and scale the platform to meet future operational demands.",
      points: [
        "Monitor system performance",
        "Gather and analyze user feedback",
        "Implement new features",
        "Scale infrastructure securely"
      ]
    }
  ];

  useEffect(() => {
    // GSAP Animation for flex expansion
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          flex: index === activeIndex ? 5 : 1,
          duration: 0.6,
          ease: "power3.out",
          overwrite: "auto"
        });

        // Animate inner content opacity based on active state
        const expandedContent = card.querySelector('.expanded-content');
        const collapsedContent = card.querySelector('.collapsed-content');
        
        if (expandedContent && collapsedContent) {
          if (index === activeIndex) {
            gsap.to(expandedContent, { opacity: 1, duration: 0.4, delay: 0.2, display: 'flex' });
            gsap.to(collapsedContent, { opacity: 0, duration: 0.2, display: 'none' });
          } else {
            gsap.to(expandedContent, { opacity: 0, duration: 0.2, display: 'none' });
            gsap.to(collapsedContent, { opacity: 1, duration: 0.4, delay: 0.2, display: 'flex' });
          }
        }
      }
    });
  }, [activeIndex]);

  return (
    <section className="py-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight">How we build</h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            MAARRS follows a structured platform development approach focused on operational understanding, scalable architecture, and long-term adaptability.
          </p>
        </div>

        {/* Interactive Cards Container */}
        <div 
          ref={containerRef}
          className="flex flex-col md:flex-row gap-4 md:gap-6 h-auto md:h-[450px]"
        >
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-colors duration-500 ${
                  isActive 
                    ? "bg-gradient-to-br from-white to-[#f4f9ff] border-2 border-[#bde4f8]" 
                    : "bg-[#f8fbff] border border-gray-100 hover:border-blue-200"
                }`}
                style={{ flex: isActive ? 5 : 1, minHeight: isActive ? '450px' : '100px' }}
              >
                {/* --- EXPANDED CONTENT --- */}
                <div className="expanded-content absolute inset-0 p-8 md:p-12 flex-col w-full h-full" style={{ display: isActive ? 'flex' : 'none', opacity: isActive ? 1 : 0 }}>
                  <div className="flex items-center gap-6 mb-8 w-full max-w-[500px]">
                    <div className="flex-shrink-0 w-16 h-16 bg-[#009FE3] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-[#009FE3]/30">
                      {step.id}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a] whitespace-nowrap">
                      {step.title}
                    </h3>
                  </div>
                  
                  <div className="max-w-md">
                    <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-4">
                      {step.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#009FE3] flex-shrink-0">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 font-medium text-sm md:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* --- COLLAPSED CONTENT --- */}
                <div className="collapsed-content absolute inset-0 p-6 flex-col items-center justify-center md:justify-between w-full h-full" style={{ display: !isActive ? 'flex' : 'none', opacity: !isActive ? 1 : 0 }}>
                  <div className="hidden md:block h-6"></div> {/* Spacer for alignment */}
                  <div className="flex-shrink-0 w-14 h-14 bg-[#e6f4fc] rounded-xl flex items-center justify-center text-[#009FE3] text-xl font-bold">
                    {step.id}
                  </div>
                  <div className="text-gray-500 font-bold tracking-widest text-xs uppercase hidden md:block">
                    {step.shortTitle}
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
