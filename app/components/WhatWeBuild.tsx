"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ── Register GSAP plugin (safe in client component) ─────────── */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ═══════════════════════════════════════════════════════════════
   ICONS
═══════════════════════════════════════════════════════════════ */
const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.6} stroke="currentColor" width={26} height={26}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.99l1.005.828c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const IconChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.6} stroke="currentColor" width={26} height={26}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25C7.004 12 7.5 12.504 7.5 13.125v6.75C7.5 20.496 7.004 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

const IconDocument = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
    strokeWidth={1.6} stroke="currentColor" width={26} height={26}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════
   CARD DATA
═══════════════════════════════════════════════════════════════ */
const CARDS = [
  {
    title: "Operational\nPlatforms",
    description: "Platforms designed to support and streamline day-to-day operational execution.",
    icon: <IconSettings />,
  },
  {
    title: "Industry-Specific\nPlatforms",
    description: "Custom systems tailored to unique industry processes and business models.",
    icon: <IconChart />,
  },
  {
    title: "Data & Governance\nPlatforms",
    description: "Structured platforms enabling oversight, governance, and informed decision-making.",
    icon: <IconDocument />,
  },
];

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function WhatWeBuild() {
  const sectionRef   = useRef<HTMLElement>(null);
  const badgeRef     = useRef<HTMLSpanElement>(null);
  const headingRef   = useRef<HTMLHeadingElement>(null);
  const subtitleRef  = useRef<HTMLParagraphElement>(null);
  const gridRef      = useRef<HTMLDivElement>(null);
  const cardRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs      = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      /* ── 1. Badge fade-down ──────────────────────────────────── */
      gsap.from(badgeRef.current, {
        scrollTrigger: { trigger: section, start: "top 78%" },
        y: -18,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      /* ── 2. Heading word-by-word stagger ────────────────────── */
      gsap.from(headingRef.current, {
        scrollTrigger: { trigger: section, start: "top 75%" },
        y: 40,
        opacity: 0,
        duration: 0.85,
        delay: 0.12,
        ease: "power3.out",
      });

      /* ── 3. Subtitle ────────────────────────────────────────── */
      gsap.from(subtitleRef.current, {
        scrollTrigger: { trigger: section, start: "top 72%" },
        y: 24,
        opacity: 0,
        duration: 0.75,
        delay: 0.28,
        ease: "power3.out",
      });

      /* ── 4. Cards staggered scale + fade entrance ───────────── */
      gsap.from(cardRefs.current, {
        scrollTrigger: { trigger: gridRef.current, start: "top 82%" },
        y: 50,
        opacity: 0,
        scale: 0.94,
        duration: 0.75,
        stagger: 0.14,
        ease: "power3.out",
      });

      /* ── 5. Divider width sweep (0 → full) ──────────────────── */
      dividerRefs.current.forEach((div, i) => {
        gsap.from(div, {
          scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          width: 0,
          opacity: 0,
          duration: 0.6,
          delay: 0.45 + i * 0.14,
          ease: "power2.out",
        });
      });

      /* ── 6. Icon boxes — continuous subtle breathing loop ───── */
      iconRefs.current.forEach((box, i) => {
        gsap.to(box, {
          y: -5,
          scale: 1.04,
          duration: 2.4 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.6,
        });

        /* subtle glow box-shadow pulse via CSS var trick */
        gsap.to(box, {
          boxShadow: "0 6px 24px rgba(0,159,227,0.28)",
          duration: 2.4 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.6,
        });
      });

      /* ── 7. Background dots — slow random drift ─────────────── */
      dotRefs.current.forEach((dot, i) => {
        const dir = i % 2 === 0 ? -1 : 1;
        gsap.to(dot, {
          y: dir * (8 + i * 3),
          x: -dir * (4 + i * 2),
          duration: 4 + i * 1.1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.7,
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* ── Card hover: GSAP icon spin-jolt ──────────────────────── */
  const handleCardEnter = (i: number) => {
    gsap.to(iconRefs.current[i], {
      rotate: -8,
      scale: 1.14,
      duration: 0.35,
      ease: "power2.out",
      overwrite: "auto",
    });
  };
  const handleCardLeave = (i: number) => {
    gsap.to(iconRefs.current[i], {
      rotate: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
      overwrite: "auto",
    });
  };

  return (
    <>
      <style>{`
        /* ── Section ── */
        .wwb-section {
          position: relative;
          width: 100%;
          padding: 110px 24px 120px;
          background: #f5f8ff;
          overflow: hidden;
        }
        .wwb-section::before {
          content: "";
          position: absolute;
          top: -100px; left: -140px;
          width: 520px; height: 520px;
          background: radial-gradient(circle, rgba(0,159,227,0.08) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }
        .wwb-section::after {
          content: "";
          position: absolute;
          bottom: -80px; right: -100px;
          width: 440px; height: 440px;
          background: radial-gradient(circle, rgba(0,159,227,0.07) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        /* ── Badge ── */
        .wwb-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 16px;
          border-radius: 999px;
          background: rgba(0,159,227,0.08);
          border: 1px solid rgba(0,159,227,0.20);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.11em;
          color: #009FE3;
          text-transform: uppercase;
          margin-bottom: 22px;
        }
        .wwb-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #009FE3;
          animation: wwbPulse 2.2s ease-in-out infinite;
        }
        @keyframes wwbPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.7); }
        }

        /* ── Heading ── */
        .wwb-heading {
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 18px;
        }
        .wwb-heading-blue { color: #009FE3; }

        /* ── Subtitle ── */
        .wwb-sub {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.75;
          max-width: 530px;
          margin: 0 auto;
        }

        /* ── Grid ── */
        .wwb-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-top: 64px;
        }
        @media (max-width: 900px) {
          .wwb-grid { grid-template-columns: 1fr; max-width: 480px; margin-inline: auto; }
        }

        /* ── Card ── */
        .wwb-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #dce8f8;
          border-radius: 24px;
          padding: 36px 32px 34px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 18px rgba(0,80,180,0.055);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
          overflow: hidden;
          cursor: default;
          /* Shine sweep layer */
        }
        .wwb-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            115deg,
            transparent 0%,
            rgba(255,255,255,0.22) 50%,
            transparent 100%
          );
          transform: translateX(-110%);
          transition: transform 0.65s ease;
          pointer-events: none;
          z-index: 1;
        }
        .wwb-card:hover::before { transform: translateX(110%); }
        .wwb-card:hover {
          box-shadow: 0 10px 44px rgba(0,159,227,0.15);
          border-color: rgba(0,159,227,0.25);
        }

        /* ── Icon area ── */
        .wwb-icon-wrap {
          position: absolute;
          top: 28px; right: 28px;
          z-index: 2;
        }
        .wwb-icon-box {
          width: 60px; height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg, #e8f4fd 0%, #cce6f7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #009FE3;
          box-shadow: 0 3px 12px rgba(0,159,227,0.14);
          will-change: transform, box-shadow;
          /* breathing driven by GSAP — no CSS transition needed here */
        }

        /* Subtle inner ring on icon box */
        .wwb-icon-box::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 17px;
          border: 1px solid rgba(0,159,227,0.18);
          pointer-events: none;
        }

        /* ── Accent dot ── */
        .wwb-accent-dot {
          position: absolute;
          top: 60px; right: 97px;
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #009FE3;
          opacity: 0.5;
          z-index: 2;
        }

        /* ── Title ── */
        .wwb-card-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.3;
          letter-spacing: -0.02em;
          white-space: pre-line;
          margin-top: 8px;
          margin-bottom: 14px;
          padding-right: 80px;
          position: relative; z-index: 2;
        }

        /* ── Divider ── */
        .wwb-divider {
          width: 38px; height: 2.5px;
          background: linear-gradient(90deg, #009FE3, #0077b6);
          border-radius: 2px;
          margin-bottom: 18px;
          flex-shrink: 0;
          position: relative; z-index: 2;
          will-change: width, opacity;
        }

        /* ── Description ── */
        .wwb-card-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.75;
          flex: 1;
          position: relative; z-index: 2;
        }

        /* ── Background scatter dots ── */
        .wwb-bg-dot {
          position: absolute;
          border-radius: 50%;
          background: #009FE3;
          opacity: 0.11;
          pointer-events: none;
          will-change: transform;
        }
      `}</style>

      <section id="about" ref={sectionRef} className="wwb-section">

        {/* Scattered background dots — animated by GSAP */}
        {[
          { w: 6,  h: 6,  top: "16%", left: "7%"  },
          { w: 5,  h: 5,  top: "40%", left: "13%" },
          { w: 7,  h: 7,  top: "68%", left: "5%"  },
          { w: 5,  h: 5,  top: "20%", right: "9%" },
          { w: 6,  h: 6,  top: "54%", right: "6%" },
          { w: 4,  h: 4,  top: "78%", right: "17%"},
        ].map((d, i) => (
          <span
            key={i}
            ref={(el) => { dotRefs.current[i] = el; }}
            className="wwb-bg-dot"
            style={{ width: d.w, height: d.h, top: d.top, ...(d.left ? { left: d.left } : { right: (d as any).right }) }}
          />
        ))}

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>

          {/* ── Header ── */}
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
              <span ref={badgeRef} className="wwb-badge">
                <span className="wwb-badge-dot" />
                Our Expertise
              </span>
            </div>

            <h2 ref={headingRef} className="wwb-heading">
              What we <span className="wwb-heading-blue">build</span>
            </h2>

            <p ref={subtitleRef} className="wwb-sub">
              MAARRS designs custom technology platforms built around operational
              workflows, business structures, and scalable digital ecosystems.
            </p>
          </div>

          {/* ── Cards ── */}
          <div ref={gridRef} className="wwb-grid">
            {CARDS.map((card, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                className="wwb-card"
                onMouseEnter={() => handleCardEnter(i)}
                onMouseLeave={() => handleCardLeave(i)}
              >
                {/* Icon – top-right, animated by GSAP breathing loop */}
                <div className="wwb-icon-wrap">
                  <div
                    ref={(el) => { iconRefs.current[i] = el; }}
                    className="wwb-icon-box"
                  >
                    {card.icon}
                  </div>
                </div>

                {/* Accent dot */}
                <span className="wwb-accent-dot" />

                {/* Title */}
                <h3 className="wwb-card-title">{card.title}</h3>

                {/* Divider — width animated by GSAP ScrollTrigger */}
                <div
                  ref={(el) => { dividerRefs.current[i] = el; }}
                  className="wwb-divider"
                />

                {/* Description */}
                <p className="wwb-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
