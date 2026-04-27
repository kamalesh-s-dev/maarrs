"use client";

import { useRef } from "react";
import gsap from "gsap";

interface Industry {
  title: string;
  description: string;
  bgColor: string;
  imagePlaceholder: string;
}

const industries: Industry[] = [
  {
    title: "Emerging Digital Businesses",
    description: "Scalable systems built for modern digital-first businesses.",
    bgColor: "#009FE3",
    imagePlaceholder: "Digital"
  },
  {
    title: "Education & Training",
    description: "Platforms supporting structured learning and institutional operations.",
    bgColor: "#0f172a",
    imagePlaceholder: "Education"
  },
  {
    title: "Healthcare & Medical",
    description: "Operational systems designed around clinical and administrative workflows.",
    bgColor: "#0f172a",
    imagePlaceholder: "Healthcare"
  },
  {
    title: "Retail & Commerce",
    description: "End-to-end commerce platforms built for evolving retail environments.",
    bgColor: "#0f172a",
    imagePlaceholder: "Retail"
  },
  {
    title: "Professional Services",
    description: "Tools and platforms for consultancy, advisory, and service-based operations.",
    bgColor: "#0f172a",
    imagePlaceholder: "Services"
  }
];

function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const cardInnerRef = useRef<HTMLDivElement>(null);
  const isFlippedRef = useRef(false);

  const handleMouseEnter = () => {
    if (isFlippedRef.current) return;
    isFlippedRef.current = true;
    gsap.to(cardInnerRef.current, {
      rotateY: 180,
      duration: 0.7,
      ease: "power3.inOut"
    });
  };

  const handleMouseLeave = () => {
    if (!isFlippedRef.current) return;
    isFlippedRef.current = false;
    gsap.to(cardInnerRef.current, {
      rotateY: 0,
      duration: 0.7,
      ease: "power3.inOut"
    });
  };

  return (
    <div
      className="relative flex-shrink-0 w-[200px] h-[200px] md:w-[220px] md:h-[220px] lg:w-[240px] lg:h-[240px] transition-all duration-300 hover:z-50"
      style={{ perspective: "1000px", zIndex: index }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Inner — this is what flips */}
      <div
        ref={cardInnerRef}
        className="relative w-full h-full rounded-full"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* FRONT — Image Placeholder */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden flex flex-col items-center justify-center shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: index === 0
              ? "linear-gradient(135deg, #009FE3 0%, #0077b6 100%)"
              : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
          }}
        >
          {/* Decorative dashed border ring */}
          <div className="absolute inset-3 rounded-full border-2 border-white/20 border-dashed" />

          {/* Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-12 h-12 text-white/50 mb-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          <span className="text-white/60 text-xs font-medium tracking-wide">{industry.imagePlaceholder}</span>
        </div>

        {/* BACK — Content */}
        <div
          className="absolute inset-0 rounded-full flex flex-col items-center justify-center text-center p-6 shadow-xl"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(135deg, #009FE3 0%, #0077b6 100%)"
          }}
        >
          {/* Decorative ring */}
          <div className="absolute inset-3 rounded-full border-2 border-white/20 border-dashed" />

          <div className="relative z-10 px-2">
            <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-2">
              {industry.title}
            </h3>
            <p className="text-blue-100 text-xs md:text-sm leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesWeWorkWith() {
  return (
    <section className="py-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight">
            Industries we work with
          </h2>
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
            MAARRS develops platforms tailored to industry-specific operations, workflows, and evolving business environments.
          </p>
        </div>

        {/* Cards Row — overlapping layout using negative margins */}
        <div className="flex items-center justify-center">
          <div className="flex items-center" style={{ paddingRight: '60px' }}>
            {industries.map((industry, index) => (
              <div
                key={index}
                style={{ marginLeft: index === 0 ? 0 : '-60px', zIndex: index }}
                className="relative hover:z-50 transition-all duration-300"
              >
                <IndustryCard industry={industry} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Hint text */}
        <p className="text-center text-gray-400 text-sm mt-12 tracking-wide">
          Hover over each circle to learn more
        </p>

      </div>
    </section>
  );
}
