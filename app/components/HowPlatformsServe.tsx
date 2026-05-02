"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ── Icons ─────────────────────────────────────────────────────── */
const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
);
const IconBuilding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
  </svg>
);
const IconNetwork = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 0-4.5H6v4.5Zm0 0H3.75m2.25 0v4.5m0-4.5a2.25 2.25 0 1 1 4.5 0m-4.5 0a2.25 2.25 0 0 0 4.5 0" />
  </svg>
);
const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);
const IconHeadset = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" width={22} height={22}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
  </svg>
);

const FEATURES = [
  {
    id: "01",
    step: "Step",
    title: "Unique Identity Creation",
    description: "Developing distinctive identities that capture the true essence of a business and clearly differentiate it from the competition.",
    icon: <IconShield />,
  },
  {
    id: "02",
    step: "Step",
    title: "Brand Building",
    description: "Crafting compelling brands that resonate with audiences, build trust, and inspire loyalty in a crowded market.",
    icon: <IconBuilding />,
  },
  {
    id: "03",
    step: "Step",
    title: "Digital Enterprise",
    description: "Launching innovative digital businesses that redefine industry standards and deliver exceptional customer experiences.",
    icon: <IconNetwork />,
  },
  {
    id: "04",
    step: "Step",
    title: "Business Framework",
    description: "Designing robust operational models to streamline processes, boost efficiency, and drive sustainable growth.",
    icon: <IconBolt />,
  },
  {
    id: "05",
    step: "Step",
    title: "Workflow Automation",
    description: "Leveraging advanced automation tools to simplify repetitive tasks, reduce errors, and free up valuable time.",
    icon: <IconHeadset />,
  },
  {
    id: "06",
    step: "Step",
    title: "Supportive Assistance",
    description: "Providing comprehensive, ongoing support and guidance to help clients adapt, evolve, and succeed.",
    icon: <IconShield />,
  },
];

export default function HowPlatformsServe() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      /* Left panel entrance */
      gsap.from(badgeRef.current, { scrollTrigger: { trigger: section, start: "top 78%" }, y: -18, opacity: 0, duration: 0.65, ease: "power3.out" });
      gsap.from(headingRef.current, { scrollTrigger: { trigger: section, start: "top 76%" }, y: 36, opacity: 0, duration: 0.8, delay: 0.1, ease: "power3.out" });
      gsap.from(cardRef.current, { scrollTrigger: { trigger: section, start: "top 73%" }, y: 44, opacity: 0, scale: 0.95, duration: 0.9, delay: 0.2, ease: "power3.out" });

      /* Idle float on dark card */
      gsap.to(cardRef.current, { y: -7, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });

      /* Timeline line grows down */
      gsap.from(lineRef.current, {
        scrollTrigger: { trigger: section, start: "top 68%" },
        scaleY: 0, transformOrigin: "top center", duration: 1.2, ease: "power2.out",
      });

      /* Each feature item: individual ScrollTrigger → flip-in from right */
      itemRefs.current.forEach((item, i) => {
        if (!item) return;

        /* Card flips in */
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 88%", toggleActions: "play none none none" },
          x: 60, opacity: 0, rotateY: 8,
          duration: 0.65, ease: "power3.out",
          transformOrigin: "left center",
        });

        /* Matching dot pops in */
        gsap.from(dotRefs.current[i], {
          scrollTrigger: { trigger: item, start: "top 88%", toggleActions: "play none none none" },
          scale: 0, opacity: 0, duration: 0.4, ease: "back.out(2.5)",
        });

        /* Active dot pulse when card is in center view */
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 60%",
          onEnter: () => gsap.to(dotRefs.current[i], { scale: 1.4, boxShadow: "0 0 0 6px rgba(0,159,227,0.25)", duration: 0.3, ease: "power2.out" }),
          onLeave: () => gsap.to(dotRefs.current[i], { scale: 1, boxShadow: "0 0 0 3px rgba(0,159,227,0.20)", duration: 0.3 }),
          onEnterBack: () => gsap.to(dotRefs.current[i], { scale: 1.4, boxShadow: "0 0 0 6px rgba(0,159,227,0.25)", duration: 0.3 }),
          onLeaveBack: () => gsap.to(dotRefs.current[i], { scale: 1, boxShadow: "0 0 0 3px rgba(0,159,227,0.20)", duration: 0.3 }),
        });
      });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onIconEnter = (el: HTMLDivElement | null) => el && gsap.to(el, { scale: 1.13, boxShadow: "0 6px 22px rgba(0,159,227,0.32)", duration: 0.3, ease: "power2.out" });
  const onIconLeave = (el: HTMLDivElement | null) => el && gsap.to(el, { scale: 1, boxShadow: "0 2px 10px rgba(0,159,227,0.12)", duration: 0.4, ease: "elastic.out(1,0.5)" });

  return (
    <>
      <style>{`
        .hps-section {
          position: relative; width: 100%;
          background: #f5f8ff; overflow: hidden;
        }
        .hps-section::before {
          content: ""; position: absolute;
          top: -120px; right: -160px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0,159,227,0.07) 0%, transparent 68%);
          pointer-events: none;
        }
        /* Two-column grid. Left is sticky. */
        .hps-inner {
          display: grid;
          grid-template-columns: 1fr 1.18fr;
          gap: 64px; align-items: start;
        }
        @media (max-width: 960px) {
          .hps-inner { grid-template-columns: 1fr; gap: 48px; }
          .hps-sticky { position: static !important; }
        }

        /* Sticky left panel */
        .hps-sticky {
          position: sticky;
          top: 100px;
          display: flex; flex-direction: column;
        }

        /* Badge */
        .hps-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 14px 5px 10px; border-radius: 8px;
          border: 1px solid rgba(0,159,227,0.22);
          background: rgba(0,159,227,0.07);
          font-size: 11px; font-weight: 700; letter-spacing: .10em;
          color: #009FE3; text-transform: uppercase;
          width: fit-content; margin-bottom: 22px;
        }
        .hps-heading {
          font-size: clamp(2rem, 4.2vw, 3.1rem); font-weight: 800;
          color: #0f172a; line-height: 1.12;
          letter-spacing: -0.03em; margin-bottom: 32px;
        }
        .hps-heading-blue { color: #009FE3; }

        /* Dark card */
        .hps-dark-card {
          background: linear-gradient(160deg, #101c2e 0%, #0d1624 100%);
          border-radius: 26px; overflow: hidden;
          box-shadow: 0 24px 64px rgba(0,20,60,0.35);
          will-change: transform; position: relative;
        }
        .hps-dark-card::after {
          content: ""; position: absolute;
          bottom: 0; left: 0; right: 0; height: 55%;
          background: radial-gradient(ellipse at 40% 110%, rgba(0,90,220,0.32) 0%, transparent 70%);
          pointer-events: none;
        }
        .hps-photo-wrap {
          position: relative; width: 100%; aspect-ratio: 16/10; overflow: hidden;
        }
        .hps-card-body { padding: 26px 28px 28px; position: relative; z-index: 2; }
        .hps-card-sparkle { color: #4fa8e8; margin-bottom: 12px; display: flex; }
        .hps-card-text {
          font-size: 0.93rem; color: #94a3b8;
          line-height: 1.75; margin-bottom: 22px; max-width: 340px;
        }
        .hps-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 11px 22px; background: #009FE3; color: #fff;
          font-size: 0.88rem; font-weight: 700; border-radius: 10px;
          text-decoration: none;
          transition: background .25s, transform .25s, box-shadow .25s;
          box-shadow: 0 4px 18px rgba(0,159,227,0.35);
        }
        .hps-cta:hover { background: #007dc0; transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,159,227,.45); }

        /* Right — timeline wrapper */
        .hps-right { display: flex; flex-direction: row; gap: 0; align-items: stretch; }

        /* Timeline track */
        .hps-track {
          display: flex; flex-direction: column; align-items: center;
          margin-right: 20px; flex-shrink: 0;
          position: relative; padding-top: 26px; padding-bottom: 26px;
        }
        .hps-line {
          position: absolute; top: 26px; bottom: 26px; width: 2px;
          background: linear-gradient(to bottom, rgba(0,159,227,0.28), rgba(0,159,227,0.06));
          border-radius: 2px; will-change: transform;
        }
        .hps-dot {
          width: 14px; height: 14px; border-radius: 50%;
          background: #009FE3; border: 2.5px solid #f5f8ff;
          box-shadow: 0 0 0 3px rgba(0,159,227,0.20);
          z-index: 2; flex-shrink: 0; will-change: transform, opacity;
        }
        .hps-dot-gap { flex: 1; }

        /* Feature cards column */
        .hps-items { flex: 1; display: flex; flex-direction: column; gap: 14px; }

        .hps-item {
          background: #fff; border: 1px solid #dce8f8;
          border-radius: 18px; padding: 18px 20px;
          display: flex; align-items: center; gap: 16px;
          box-shadow: 0 2px 14px rgba(0,80,180,0.05);
          transition: box-shadow .35s, border-color .35s, transform .25s;
          will-change: transform, opacity; position: relative; overflow: hidden;
        }
        .hps-item::before {
          content: ""; position: absolute; inset: 0;
          background: linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%);
          transform: translateX(-110%); transition: transform .6s ease; pointer-events: none;
        }
        .hps-item:hover::before { transform: translateX(110%); }
        .hps-item:hover {
          box-shadow: 0 8px 32px rgba(0,159,227,0.14);
          border-color: rgba(0,159,227,0.24); transform: translateX(5px);
        }
        .hps-num {
          font-size: 0.76rem; font-weight: 800; color: #009FE3;
          min-width: 36px; height: 28px; border-radius: 7px;
          border: 1.5px solid rgba(0,159,227,0.25);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; background: rgba(0,159,227,0.05); letter-spacing: .02em;
        }
        .hps-item-text { flex: 1; }
        .hps-item-step  { font-size: .68rem; font-weight: 700; color: #009FE3; letter-spacing: .10em; text-transform: uppercase; margin-bottom: 3px; opacity: 0.7; }
        .hps-item-title { font-size: .94rem; font-weight: 800; color: #0f172a; margin-bottom: 4px; letter-spacing: -.015em; }
        .hps-item-desc  { font-size: .81rem; color: #64748b; line-height: 1.62; }
        .hps-icon-box {
          width: 44px; height: 44px; border-radius: 12px;
          background: linear-gradient(135deg, #e8f4fd 0%, #cce6f7 100%);
          display: flex; align-items: center; justify-content: center;
          color: #009FE3; box-shadow: 0 2px 10px rgba(0,159,227,.12);
          flex-shrink: 0; will-change: transform, box-shadow;
        }
        /* Right panel top padding to align with dark card visually */
        .hps-right-pad { padding-top: 0px; }
        @media (max-width: 768px) {
          .hps-right-pad { padding-top: 60px; }
        }
        .hps-bg-dot {
          position: absolute; border-radius: 50%;
          background: #009FE3; opacity: .10; pointer-events: none;
        }
      `}</style>

      <section ref={sectionRef} className="hps-section section-wrap">
        <span className="hps-bg-dot" style={{ width: 6, height: 6, top: "14%", left: "5%" }} />
        <span className="hps-bg-dot" style={{ width: 5, height: 5, top: "44%", left: "3%" }} />
        <span className="hps-bg-dot" style={{ width: 7, height: 7, top: "74%", left: "7%" }} />
        <span className="hps-bg-dot" style={{ width: 5, height: 5, top: "28%", right: "4%" }} />
        <span className="hps-bg-dot" style={{ width: 6, height: 6, top: "86%", right: "6%" }} />

        <div className="section-inner hps-inner">

          {/* ── LEFT (sticky) ───────────────────────────────── */}
          <div ref={stickyRef} className="hps-sticky">
            <span ref={badgeRef} className="hps-badge">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" width={12} height={12}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
              </svg>
              Platform Impact
            </span>

            <h2 ref={headingRef} className="hps-heading">
              How our platforms<br />
              serve <span className="hps-heading-blue">organisations</span>
            </h2>

            <div ref={cardRef} className="hps-dark-card">
              <div className="hps-photo-wrap">
                <Image src="/serveimage.png" alt="MAARRS platform in action" fill style={{ objectFit: "cover", objectPosition: "center" }} priority />
              </div>
              <div className="hps-card-body">
                <div className="hps-card-sparkle">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" width={20} height={20}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                </div>
                <p className="hps-card-text">
                  MAARRS platforms function as integrated operational systems that
                  support digital identity, automation, workflows, and scalable
                  business operations.
                </p>
                <Link href="#contact" className="hps-cta">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width={16} height={16}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT — timeline ─────────────────────────────── */}
          <div className="hps-right hps-right-pad">

            {/* Dots + line track */}
            <div className="hps-track">
              <div ref={lineRef} className="hps-line" />
              {FEATURES.map((_, i) => (
                <React.Fragment key={i}>
                  <span ref={(el) => { dotRefs.current[i] = el; }} className="hps-dot" />
                  {i < FEATURES.length - 1 && <div className="hps-dot-gap" />}
                </React.Fragment>
              ))}
            </div>

            {/* Feature cards */}
            <div className="hps-items">
              {FEATURES.map((feat, i) => {
                let iconEl: HTMLDivElement | null = null;
                return (
                  <div key={i} ref={(el) => { itemRefs.current[i] = el; }} className="hps-item">
                    <span className="hps-num">{feat.id}</span>
                    <div className="hps-item-text">

                      <div className="hps-item-title">{feat.title}</div>
                      <div className="hps-item-desc">{feat.description}</div>
                    </div>
                    <div
                      ref={(el) => { iconEl = el; }}
                      className="hps-icon-box"
                      onMouseEnter={() => onIconEnter(iconEl)}
                      onMouseLeave={() => onIconLeave(iconEl)}
                    >
                      {feat.icon}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
