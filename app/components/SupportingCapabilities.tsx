"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const capabilities = [
  {
    num: "01",
    title: "Digital Transformation",
    description: "Modernising systems, operational workflows, and business processes through scalable digital solutions.",
    points: ["System modernisation", "Process optimization", "Digital workflow design", "Scalable infrastructure"],
    href: "/services/digital-transformation",
    image: "/cardimg1.png",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Consulting",
    description: "Strategic advisory support focused on operational clarity, structure, and sustainable growth.",
    points: ["Strategic planning", "Operational assessment", "Growth frameworks", "Governance structure"],
    href: "/services/consulting",
    image: "/cardimg2.png",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Strategic Impact",
    desc: "Solutions aligned with your business goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#009FE3]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  },
  {
    title: "Operational Excellence",
    desc: "Improving efficiency, structure, and performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#009FE3]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    )
  },
  {
    title: "Scalable Platforms",
    desc: "Built for adaptability and long-term growth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#009FE3]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    )
  },
  {
    title: "Expert Guidance",
    desc: "Experienced support every step of the way.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#009FE3]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    )
  }
];

export default function SupportingCapabilities() {
  const ref = useScrollReveal();

  return (
    <>
      <style>{`
        .sc-section {
          position: relative; width: 100%;
          padding: 100px 24px 120px;
          background: #f5f8ff;
          overflow: hidden;
        }
        /* Soft radial glow backgrounds */
        .sc-section::before {
          content: ""; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 800px 500px at 20% 0%, rgba(0,159,227,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 600px 600px at 80% 80%, rgba(0,100,255,0.04) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        .sc-inner { max-width: 1140px; margin: 0 auto; position: relative; z-index: 2; }

        /* Badge */
        .sc-badge {
          display: inline-flex; align-items: center; gap: 7px;
          padding: 6px 16px; border-radius: 999px;
          border: 1px solid rgba(0,159,227,0.22); background: rgba(255,255,255,0.8);
          font-size: 11px; font-weight: 700; letter-spacing: .10em;
          color: #009FE3; text-transform: uppercase; margin-bottom: 24px;
          backdrop-filter: blur(8px);
        }

        .sc-heading {
          font-size: clamp(2rem, 4.5vw, 3.2rem); font-weight: 800;
          color: #0f172a; letter-spacing: -.03em; line-height: 1.1; margin-bottom: 18px;
        }
        .sc-blue { color: #009FE3; }
        .sc-sub { font-size: 1rem; color: #64748b; line-height: 1.75; max-width: 600px; margin: 0 auto 60px; }

        /* ── Cards Grid ── */
        .sc-grid {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;
          margin-bottom: 32px;
        }
        @media(max-width: 960px) {
          .sc-grid { grid-template-columns: 1fr; }
        }

        .sc-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(0,159,227,0.12);
          border-radius: 28px;
          padding: 40px;
          box-shadow: 0 12px 40px rgba(0, 100, 200, 0.05);
          overflow: hidden;
          transition: all 0.4s ease;
        }
        .sc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0, 159, 227, 0.12);
          border-color: rgba(0,159,227,0.25);
        }

        /* Top Header in Card */
        .sc-card-hdr {
          display: flex; justify-content: space-between; align-items: flex-start;
          margin-bottom: 32px;
        }
        .sc-card-icon {
          width: 56px; height: 56px; border-radius: 18px;
          background: linear-gradient(135deg, #009FE3 0%, #0077b6 100%);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 24px rgba(0,159,227,0.25);
        }
        .sc-card-num {
          display: flex; align-items: center; justify-content: center;
          width: 44px; height: 44px;
          border-radius: 12px;
          border: 1px solid rgba(0,159,227,0.15);
          color: #009FE3; font-weight: 700; font-size: 0.95rem;
          background: #f8fbff;
        }

        .sc-card-title {
          font-size: 1.75rem; font-weight: 800; color: #0f172a;
          letter-spacing: -0.02em; margin-bottom: 12px;
        }
        .sc-card-desc {
          font-size: 0.9rem; color: #64748b; line-height: 1.6;
          margin-bottom: 32px; max-width: 90%;
        }

        /* Content vs Image Split */
        .sc-card-body {
          display: flex; justify-content: space-between; align-items: stretch;
          position: relative; min-height: 180px;
        }
        .sc-card-list-wrapper {
          display: flex; flex-direction: column; justify-content: space-between;
          z-index: 10; position: relative;
        }
        
        .sc-card-points {
          list-style: none; padding: 0; margin: 0 0 32px 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .sc-point {
          display: flex; align-items: center; gap: 10px;
        }
        .sc-point-icon {
          width: 20px; height: 20px; border-radius: 50%;
          background: #009FE3; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .sc-point-text {
          font-size: 0.85rem; color: #475569; font-weight: 500;
        }

        .sc-learn-more {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 0.95rem; font-weight: 700; color: #009FE3;
          transition: gap 0.3s ease;
        }
        .sc-learn-more:hover { gap: 12px; }

        /* Image positioning inside card */
        .sc-card-image-wrapper {
          position: absolute; right: -20px; bottom: -20px;
          width: 220px; height: 220px; z-index: 1;
          pointer-events: none;
        }
        @media(max-width: 480px) {
          .sc-card-image-wrapper { width: 160px; height: 160px; right: -10px; bottom: -10px; opacity: 0.6; }
        }

        /* ── Features Row ── */
        .sc-features-row {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;
        }
        @media(max-width: 1024px) {
          .sc-features-row { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media(max-width: 640px) {
          .sc-features-row { grid-template-columns: 1fr; }
        }

        .sc-feat-box {
          background: #ffffff; border: 1px solid rgba(0,159,227,0.12);
          border-radius: 20px; padding: 20px;
          display: flex; align-items: center; gap: 16px;
          box-shadow: 0 4px 20px rgba(0,100,200,0.03);
          transition: all 0.3s ease;
        }
        .sc-feat-box:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0,159,227,0.08);
          border-color: rgba(0,159,227,0.2);
        }
        .sc-feat-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: rgba(0,159,227,0.08);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .sc-feat-title { font-size: 0.9rem; font-weight: 700; color: #0f172a; margin-bottom: 2px; }
        .sc-feat-desc { font-size: 0.75rem; color: #64748b; line-height: 1.4; }

        /* Scatter Dots */
        .sc-dot { position: absolute; border-radius: 50%; background: #009FE3; opacity: .09; pointer-events: none; }
      `}</style>

      <section ref={ref as React.RefObject<HTMLElement>} className="sc-section">
        <span className="sc-dot" style={{ width: 8, height: 8, top: "15%", left: "8%" }} />
        <span className="sc-dot" style={{ width: 6, height: 6, top: "60%", left: "4%" }} />
        <span className="sc-dot" style={{ width: 7, height: 7, top: "25%", right: "10%" }} />
        <span className="sc-dot" style={{ width: 5, height: 5, top: "85%", right: "6%" }} />

        <div className="sc-inner">
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span className="sc-badge reveal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                Our Support
              </span>
            </div>
            <h2 className="sc-heading reveal delay-100">
              Supporting <span className="sc-blue">capabilities</span>
            </h2>
            <p className="sc-sub reveal delay-200">
              MAARRS strengthens platform ecosystems through strategic support services that improve operational structure, scalability, and long-term business outcomes.
            </p>
          </div>

          <div className="sc-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className={`sc-card reveal delay-${(index + 1) * 100}`}>
                <div className="sc-card-hdr">
                  <div className="sc-card-icon">{cap.icon}</div>
                  <div className="sc-card-num">{cap.num}</div>
                </div>
                
                <h3 className="sc-card-title">{cap.title}</h3>
                
                {/* Small Separator Line */}
                <div className="w-12 h-[2px] bg-gradient-to-r from-[#009FE3] to-transparent rounded-full mb-4 opacity-50" />

                <p className="sc-card-desc">{cap.description}</p>
                
                <div className="sc-card-body">
                  <div className="sc-card-list-wrapper">
                    <ul className="sc-card-points">
                      {cap.points.map((point, i) => (
                        <li key={i} className="sc-point">
                          <span className="sc-point-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
                              <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="sc-point-text">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="sc-card-image-wrapper">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      style={{ objectFit: "contain", objectPosition: "bottom right" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sc-features-row">
            {features.map((feat, index) => (
              <div key={index} className={`sc-feat-box reveal delay-${(index + 2) * 100}`}>
                <div className="sc-feat-icon">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="sc-feat-title">{feat.title}</h4>
                  <p className="sc-feat-desc">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
