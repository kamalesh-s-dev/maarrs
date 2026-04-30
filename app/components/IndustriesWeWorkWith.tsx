"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface Industry {
  title: string;
  description: string;
  imageSrc: string;
}

const INDUSTRIES: Industry[] = [
  {
    title: "Emerging Digital Businesses",
    description: "Scalable systems built for modern digital-first businesses.",
    imageSrc: "/Image (Emerging Digital Businesses).png",
  },
  {
    title: "Education & Training",
    description: "Platforms supporting structured learning and institutional operations.",
    imageSrc: "/Image (Education & Coaching).png",
  },
  {
    title: "Healthcare & Medical",
    description: "Operational systems designed around clinical and administrative workflows.",
    imageSrc: "/Image (Wellness & Healthcare).png",
  },
  {
    title: "Retail & Commerce",
    description: "End-to-end commerce platforms built for evolving retail environments.",
    imageSrc: "/Image (Gig & Freelance Ecosystems).png",
  },
  {
    title: "Professional Services",
    description: "Tools and platforms for consultancy, advisory, and service-based operations.",
    imageSrc: "/Image (Professional Services).png",
  },
];

function IndustryCard({ industry, index, isActive, onHover }: { industry: Industry; index: number; isActive: boolean; onHover: () => void }) {
  const cardInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardInnerRef.current) {
      gsap.to(cardInnerRef.current, {
        rotateY: isActive ? 180 : 0,
        duration: 0.8,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    }
  }, [isActive]);

  return (
    <div
      className="iww-card-wrap"
      style={{ zIndex: isActive ? 50 : index }}
      onMouseEnter={onHover}
    >
      <div ref={cardInnerRef} className="iww-card-inner">
        {/* ── FRONT (Inactive) ── */}
        <div className="iww-card-front overflow-hidden">
          <Image
            src={industry.imageSrc}
            alt={industry.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 180px, (max-width: 480px) 140px, 220px"
            className="transition-transform duration-700 hover:scale-110"
          />
          <div className="iww-ring-dashed z-10" />
        </div>

        {/* ── BACK (Active) ── */}
        <div className="iww-card-back">
          <div className="iww-ring-dashed iww-ring-blue" />
          <div className="iww-back-content">
            <h3 className="iww-back-title">{industry.title}</h3>
            <p className="iww-back-desc">{industry.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndustriesWeWorkWith() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRefs.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .iww-section {
          position: relative; width: 100%;
          padding: 100px 24px 120px;
          background: #f5f8ff;
          overflow: hidden;
        }
        /* Matching subtle background glows */
        .iww-section::before {
          content: ""; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 800px 400px at 50% 100%, rgba(0,159,227,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 400px 400px at 10% 40%, rgba(0,100,255,0.04) 0%, transparent 70%),
            radial-gradient(ellipse 400px 400px at 90% 60%, rgba(0,159,227,0.04) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .iww-inner { max-width: 1140px; margin: 0 auto; position: relative; z-index: 2; }

        /* Badge */
        .iww-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 16px; border-radius: 999px;
          border: 1px solid rgba(0,159,227,0.22); background: rgba(255,255,255,0.8);
          font-size: 11px; font-weight: 700; letter-spacing: .10em;
          color: #009FE3; text-transform: uppercase; margin-bottom: 20px;
          backdrop-filter: blur(8px);
        }
        .iww-badge-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #009FE3;
          animation: iwwDot 2s ease-in-out infinite;
        }
        @keyframes iwwDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }

        .iww-heading {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800;
          color: #0f172a; letter-spacing: -.03em; line-height: 1.1; margin-bottom: 14px;
        }
        .iww-blue { color: #009FE3; }
        .iww-sub { font-size: 1rem; color: #64748b; line-height: 1.75; max-width: 600px; margin: 0 auto 60px; }

        /* Card Container */
        .iww-cards-container {
          display: flex; align-items: center; justify-content: center;
          padding-right: 60px; /* Offset for negative margins */
        }

        /* ── Card Styles ── */
        .iww-card-wrap {
          position: relative; flex-shrink: 0;
          width: 220px; height: 220px;
          perspective: 1200px; cursor: pointer;
          transition: transform 0.4s ease;
        }
        @media(max-width: 768px) {
          .iww-card-wrap { width: 170px; height: 170px; }
          .iww-cards-container { 
            flex-wrap: wrap; 
            gap: 20px; 
            padding-right: 0; 
          }
        }
        @media(max-width: 480px) {
          .iww-card-wrap { width: 155px; height: 155px; }
          .iww-cards-container { gap: 16px; }
        }

        .iww-card-wrap:hover { transform: translateY(-10px); z-index: 60 !important; }

        .iww-card-inner {
          position: relative; width: 100%; height: 100%;
          border-radius: 50%; transform-style: preserve-3d;
          will-change: transform;
        }

        .iww-card-front, .iww-card-back {
          position: absolute; inset: 0; border-radius: 50%;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          backface-visibility: hidden; -webkit-backface-visibility: hidden;
          box-shadow: 0 10px 30px rgba(0, 100, 200, 0.1);
        }

        /* FRONT (Inactive) - Image */
        .iww-card-front {
          background: #eaf4ff;
          border: 1px solid rgba(0,159,227,0.2);
        }

        /* BACK (Active) - Clean White/Light */
        .iww-card-back {
          background: linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%);
          color: #0f172a; transform: rotateY(180deg);
          border: 1px solid rgba(0,159,227,0.25);
          box-shadow: 0 15px 40px rgba(0, 159, 227, 0.15);
          padding: 24px; text-align: center;
        }
        .iww-back-title {
          font-size: 1.05rem; font-weight: 800; line-height: 1.2;
          margin-bottom: 8px; letter-spacing: -0.01em; color: #009FE3;
        }
        .iww-back-desc {
          font-size: 0.75rem; color: #475569; line-height: 1.5; font-weight: 500;
        }

        @media(max-width: 768px) {
          .iww-card-back { padding: 12px; }
          .iww-back-title { font-size: 0.9rem; margin-bottom: 4px; }
          .iww-back-desc { font-size: 0.7rem; line-height: 1.35; }
        }

        /* Decorative Rings */
        .iww-ring-dashed {
          position: absolute; inset: 12px; border-radius: 50%;
          border: 1.5px dashed rgba(255,255,255,0.6); pointer-events: none;
        }
        .iww-ring-blue { border-color: rgba(0,159,227,0.3); }

        /* Scatter dots */
        .iww-dot { position: absolute; border-radius: 50%; background: #009FE3; opacity: .09; pointer-events: none; }
      `}</style>

      <section ref={sectionRef} className="iww-section">
        {/* Scatter dots */}
        <span className="iww-dot" style={{ width: 8, height: 8, top: "20%", left: "8%" }} />
        <span className="iww-dot" style={{ width: 6, height: 6, top: "65%", left: "5%" }} />
        <span className="iww-dot" style={{ width: 7, height: 7, top: "15%", right: "10%" }} />
        <span className="iww-dot" style={{ width: 5, height: 5, top: "80%", right: "8%" }} />

        <div className="iww-inner">
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
              <span ref={(el) => { headerRefs.current[0] = el; }} className="iww-badge">
                <span className="iww-badge-dot" />
                Domains
              </span>
            </div>
            <h2 ref={(el) => { headerRefs.current[1] = el; }} className="iww-heading">
              Industries we <span className="iww-blue">work with</span>
            </h2>
            <p ref={(el) => { headerRefs.current[2] = el; }} className="iww-sub">
              MAARRS develops platforms tailored to industry-specific operations, workflows, and evolving business environments.
            </p>
          </div>

          <div className="iww-cards-container">
            {INDUSTRIES.map((industry, index) => {
              // Remove negative margin for overlapping effect on mobile to allow clean wrapping
              const marginClass = index === 0 ? "ml-0" : "max-md:ml-0 -ml-[40px] md:-ml-[60px]";

              return (
                <div key={index} className={marginClass}>
                  <IndustryCard
                    industry={industry}
                    index={index}
                    isActive={activeIndex === index}
                    onHover={() => setActiveIndex(index)}
                  />
                </div>
              );
            })}
          </div>


        </div>
      </section>
    </>
  );
}
