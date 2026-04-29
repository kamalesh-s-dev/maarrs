"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const DURATION = 5; // seconds per slide

import Image from "next/image";

const STEPS = [
  {
    id: "01", label: "Understand",
    title: "Understand the Business",
    description: "Analyze operational workflows, systems, and business environments to build the right foundation.",
    points: ["Deep-dive into business processes", "Map existing workflows", "Identify automation opportunities", "Understand stakeholder needs"],
    image: "/buildimg1.png",
  },
  {
    id: "02", label: "Architecture",
    title: "Architecture Design",
    description: "Design scalable, secure, and modular architecture aligned with business goals.",
    points: ["Define technical stack", "Create scalable data models", "Plan integration points", "Ensure security compliance"],
    image: "/buildimg2.png",
  },
  {
    id: "03", label: "Build",
    title: "Development & Build",
    description: "Develop robust platforms with clean code, best practices, and continuous quality.",
    points: ["Agile development sprints", "CI/CD pipelines", "Regular stakeholder reviews", "Comprehensive QA"],
    image: "/buildimg3.png",
  },
  {
    id: "04", label: "Evolve",
    title: "Evolve & Scale",
    description: "Continuously improve, adapt, and scale to meet changing business needs.",
    points: ["Monitor system performance", "Gather user feedback", "Implement new features", "Scale infrastructure securely"],
    image: "/buildimg4.png",
  },
];

export default function HowWeBuild() {
  const [active, setActive] = useState(0);
  const hoveredRef = useRef(false);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  /* ── GSAP: only animates the flex-width ──────────────────────── */
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        flex: i === active ? 5 : 1,
        duration: 0.75,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    });
  }, [active]);

  /* ── Progress bar + auto-advance ─────────────────────────────── */
  const startProgress = useCallback((idx: number) => {
    progressRefs.current.forEach((b) => b && gsap.set(b, { scaleX: 0 }));
    const bar = progressRefs.current[idx];
    if (!bar) return;
    tweenRef.current?.kill();
    tweenRef.current = gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1, duration: DURATION, ease: "none",
        onComplete: () => {
          if (!hoveredRef.current) {
            setActive((prev) => (prev + 1) % STEPS.length);
          }
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!hoveredRef.current) startProgress(active);
  }, [active, startProgress]);

  /* ── Scroll entrance ──────────────────────────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hwb-hdr", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        y: 28, opacity: 0, duration: 0.75, stagger: 0.12, ease: "power3.out",
      });
      gsap.from(cardsRef.current, {
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" },
        y: 42, opacity: 0, duration: 0.7, stagger: 0.1, delay: 0.18, ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onEnter = (i: number) => {
    hoveredRef.current = true;
    tweenRef.current?.pause();
    setActive(i);
  };
  const onLeave = () => {
    hoveredRef.current = false;
    startProgress(activeRef.current);
  };

  return (
    <>
      <style>{`
        /* ── Section ── */
        .hwb-section {
          position: relative; width: 100%;
          padding: 60px 24px 110px;
          background: #f5f8ff;
          overflow: hidden;
        }
        /* Matching radial bg from WhatWeBuild / HowPlatformsServe */
        

        .hwb-inner { max-width: 1140px; margin: 0 auto; position: relative; z-index: 2; }

        /* Badge */
        .hwb-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 16px; border-radius: 999px;
          border: 1px solid rgba(0,159,227,0.22); background: rgba(255,255,255,0.8);
          font-size: 11px; font-weight: 700; letter-spacing: .10em;
          color: #009FE3; text-transform: uppercase; margin-bottom: 20px;
          backdrop-filter: blur(8px);
        }
        .hwb-badge-dot {
          width: 7px; height: 7px; border-radius: 50%; background: #009FE3;
          animation: hwbDot 2s ease-in-out infinite;
        }
        @keyframes hwbDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(.7)} }

        .hwb-heading {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800;
          color: #0f172a; letter-spacing: -.03em; line-height: 1.1; margin-bottom: 14px;
        }
        .hwb-blue { color: #009FE3; }
        .hwb-sub { font-size: 1rem; color: #64748b; line-height: 1.75; max-width: 500px; margin: 0 auto 52px; }

        /* ── Row ── */
        .hwb-row { display: flex; flex-direction: row; gap: 12px; height: 330px; }
        @media(max-width:768px){ .hwb-row{flex-direction:column;} }

        /* ── Card shell ── */
        .hwb-card {
          position: relative; border-radius: 22px;
          overflow: hidden; cursor: pointer;
          will-change: flex; min-width: 0;
        }
        /* ACTIVE */
        .hwb-card-on {
          background: #ffffff;
          border: 1.5px solid rgba(0,159,227,0.30);
          box-shadow:
            0 0 0 4px rgba(0,159,227,0.06),
            0 8px 40px rgba(0,159,227,0.12),
            0 2px 8px rgba(0,0,0,0.05);
        }
        /* INACTIVE */
        .hwb-card-off {
          background: linear-gradient(160deg, #ffffff 0%, #f0f6ff 100%);
          border: 1px solid rgba(0,159,227,0.14);
          box-shadow:
            0 4px 24px rgba(0,80,180,0.07),
            0 1px 4px rgba(0,0,0,0.04);
        }
        /* Subtle bottom gradient + dot grid on inactive */
        .hwb-card-off::before {
          content: "";
          position: absolute; bottom: 0; left: 0; right: 0; height: 55%;
          background:
            radial-gradient(circle at 1px 1px, rgba(0,159,227,0.12) 1px, transparent 0) 0 0 / 18px 18px,
            linear-gradient(to top, rgba(0,159,227,0.06) 0%, transparent 100%);
          pointer-events: none; z-index: 0;
        }
        .hwb-card-off:hover {
          border-color: rgba(0,159,227,0.28);
          box-shadow: 0 6px 32px rgba(0,159,227,0.12), 0 1px 4px rgba(0,0,0,0.04);
        }

        /* Both layers sit absolutely — no layout-shift possible */
        .hwb-layer { position: absolute; inset: 0; }

        /* EXPANDED — fades in immediately with card expansion */
        .hwb-layer-exp {
          opacity: 0;
          transform: translateY(10px);
          transition:
            opacity  0.35s cubic-bezier(0.22,1,0.36,1) 0.05s,
            transform 0.35s cubic-bezier(0.22,1,0.36,1) 0.05s;
          pointer-events: none;
        }
        .hwb-layer-exp.show {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        /* COLLAPSED — vanishes immediately so no flash during expansion */
        .hwb-layer-coll {
          opacity: 1;
          transform: scale(1);
          transition:
            opacity  0.08s linear 0s,
            transform 0.08s linear 0s;
          pointer-events: auto;
        }
        .hwb-layer-coll.hide {
          opacity: 0;
          transform: scale(0.96);
          pointer-events: none;
        }

        /* ── EXPANDED content ── */
        .hwb-exp {
          display: flex; flex-direction: row;
          padding: 24px 28px; gap: 16px; height: 100%;
          box-sizing: border-box;
        }
        .hwb-exp-left { flex: 1; display: flex; flex-direction: column; min-width: 0; overflow: hidden; }
        .hwb-exp-right {
          width: 220px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .hwb-exp-hdr { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; flex-wrap: nowrap; }
        .hwb-exp-title {
          font-size: 1.25rem; font-weight: 800; color: #0f172a;
          letter-spacing: -.02em; line-height: 1.2;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .hwb-exp-line {
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #009FE3 0%, rgba(0, 159, 227, 0) 100%);
          border-radius: 999px;
          margin-bottom: 12px;
          transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .hwb-layer-exp.show .hwb-exp-line {
          width: 60px;
          transition-delay: 0.2s;
        }
        .hwb-exp-desc { font-size: .86rem; color: #64748b; line-height: 1.68; margin-bottom: 12px; }
        .hwb-points { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
        .hwb-pt {
          display: flex; align-items: center; gap: 10px;
          opacity: 0; transform: translateX(-10px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        /* Stagger bullet points after expanded panel appears */
        .hwb-layer-exp.show .hwb-pt:nth-child(1) { opacity:1; transform:translateX(0); transition-delay: 0.22s; }
        .hwb-layer-exp.show .hwb-pt:nth-child(2) { opacity:1; transform:translateX(0); transition-delay: 0.32s; }
        .hwb-layer-exp.show .hwb-pt:nth-child(3) { opacity:1; transform:translateX(0); transition-delay: 0.42s; }
        .hwb-layer-exp.show .hwb-pt:nth-child(4) { opacity:1; transform:translateX(0); transition-delay: 0.52s; }
        .hwb-pt-text { font-size: .84rem; color: #475569; font-weight: 500; }
        .hwb-icon-box {
          width: 100%; height: 260px; border-radius: 16px;
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
        }

        /* ── COLLAPSED content ── */
        .hwb-coll {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          height: 100%; gap: 18px; padding: 20px;
        }
        .hwb-coll-img {
          width: 90px; height: 90px; position: relative;
        }
        .hwb-coll-label {
          font-size: .68rem; font-weight: 700; color: #64748b;
          letter-spacing: .12em; text-transform: uppercase;
          writing-mode: vertical-rl; transform: rotate(180deg);
        }
        @media(max-width:768px){
          .hwb-row { height: 600px; }
          .hwb-exp { flex-direction: column; padding: 16px; overflow-y: auto; }
          .hwb-exp-right { width: 100%; height: 100px; display: none; } /* Hide image on very small screens to save space */
          .hwb-exp-title { white-space: normal; font-size: 1.1rem; }
          .hwb-coll { flex-direction: row; padding: 12px; gap: 12px; justify-content: flex-start; }
          .hwb-coll-img { width: 40px; height: 40px; }
          .hwb-coll-label { writing-mode: horizontal-tb; transform: none; font-size: 0.8rem; }
        }

        /* ── Progress indicators ── */
        .hwb-indicators { display: flex; align-items: center; justify-content: center; gap: 10px; margin-top: 30px; }
        .hwb-ind {
          height: 5px; border-radius: 999px;
          background: rgba(0,159,227,0.15); overflow: hidden; cursor: pointer;
          transition: width .35s ease;
        }
        .hwb-ind.on  { width: 68px; }
        .hwb-ind.off { width: 44px; }
        .hwb-ind-fill {
          height: 100%; border-radius: 999px; background: #009FE3;
          transform-origin: left center; transform: scaleX(0);
        }

        /* Scatter dots */
        .hwb-dot { position: absolute; border-radius: 50%; background: #009FE3; opacity: .09; pointer-events: none; }
      `}</style>

      <section ref={sectionRef} className="hwb-section">
        {/* Soft glow blobs */}

        {/* Scatter dots */}
        <span className="hwb-dot" style={{ width: 8, height: 8, top: "10%", left: "6%" }} />
        <span className="hwb-dot" style={{ width: 6, height: 6, top: "55%", left: "4%" }} />
        <span className="hwb-dot" style={{ width: 7, height: 7, top: "18%", right: "8%" }} />
        <span className="hwb-dot" style={{ width: 5, height: 5, top: "72%", right: "5%" }} />

        <div className="hwb-inner">
          {/* Header */}
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
              <span className="hwb-badge hwb-hdr">
                <span className="hwb-badge-dot" />
                Our Approach
              </span>
            </div>
            <h2 className="hwb-heading hwb-hdr">
              How we <span className="hwb-blue">build</span>
            </h2>
            <p className="hwb-sub hwb-hdr">
              MAARRS follows a structured platform development approach focused on operational
              understanding, scalable architecture, and long-term adaptability.
            </p>
          </div>

          {/* Cards */}
          <div className="hwb-row">
            {STEPS.map((step, i) => {
              const isOn = i === active;
              return (
                <div
                  key={i}
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className={`hwb-card ${isOn ? "hwb-card-on" : "hwb-card-off"}`}
                  style={{ flex: isOn ? 5 : 1 }}
                  onMouseEnter={() => onEnter(i)}
                  onMouseLeave={onLeave}
                >
                  {/* ── EXPANDED layer — fades in with delay so card is wide first ── */}
                  <div className={`hwb-layer hwb-layer-exp${isOn ? " show" : ""}`}>
                    <div className="hwb-exp">
                      <div className="hwb-exp-left">
                        <div className="hwb-exp-hdr">
                          <span className="text-xl font-bold text-[#009FE3]/70">{step.id}</span>
                          <h3 className="hwb-exp-title">{step.title}</h3>
                        </div>
                        <div className="hwb-exp-line" />

                        <p className="hwb-exp-desc">{step.description}</p>
                        <ul className="hwb-points">
                          {step.points.map((pt, j) => (
                            <li key={j} className="hwb-pt">
                              <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} style={{ color: "#009FE3", flexShrink: 0 }}>
                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                              </svg>
                              <span className="hwb-pt-text">{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="hwb-exp-right">
                        <div className="hwb-icon-box">
                          <Image src={step.image} alt={step.title} fill style={{ objectFit: "contain" }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── COLLAPSED layer — disappears immediately ── */}
                  <div className={`hwb-layer hwb-layer-coll${isOn ? " hide" : ""}`}>
                    <div className="hwb-coll">
                      <div className="hwb-coll-img">
                        <Image src={step.image} alt={step.label} fill style={{ objectFit: "contain" }} />
                      </div>
                      <span className="hwb-coll-label">{step.label}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress indicators */}
          <div className="hwb-indicators">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`hwb-ind ${i === active ? "on" : "off"}`}
                onClick={() => {
                  tweenRef.current?.kill();
                  hoveredRef.current = false;
                  setActive(i);
                }}
              >
                <div ref={(el) => { progressRefs.current[i] = el; }} className="hwb-ind-fill" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
