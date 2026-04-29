"use client";
import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "../hooks/useScrollReveal";

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" width={18} height={18}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.99l1.005.828c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);
const IconChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" width={18} height={18}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25C7.004 12 7.5 12.504 7.5 13.125v6.75C7.5 20.496 7.004 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);
const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" width={18} height={18}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);
const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.6} stroke="currentColor" width={18} height={18}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

/* ── Card definitions matching the reference design positions ── */
const CARDS = [
  {
    icon: <IconSettings />,
    accent: "#009FE3",
    side: "left" as const,
    top: "22%",
    left: "15%",
    anim: "ag1",
    dur: "6.8s",
    delay: "0s",
  },
  {
    icon: <IconBolt />,
    accent: "#7c3aed",
    side: "left" as const,
    top: "65%",
    left: "20%",
    anim: "ag2",
    dur: "5.6s",
    delay: "1.4s",
  },
  {
    icon: <IconChart />,
    accent: "#009FE3",
    side: "right" as const,
    top: "18%",
    right: "22%",
    anim: "ag3",
    dur: "7.4s",
    delay: "0.7s",
  },
  {
    icon: <IconGlobe />,
    accent: "#0891b2",
    side: "right" as const,
    top: "70%",
    right: "16%",
    anim: "ag4",
    dur: "8.2s",
    delay: "2.1s",
  },
];

export default function HeroBanner() {
  const ref = useScrollReveal(0.1);

  return (
    <>
      <style>{`
        @keyframes ag1{0%,100%{transform:translate(0,0)}35%{transform:translate(18px,-24px)}70%{transform:translate(-12px,14px)}}
        @keyframes ag2{0%,100%{transform:translate(0,0)}38%{transform:translate(-24px,-18px)}72%{transform:translate(18px,12px)}}
        @keyframes ag3{0%,100%{transform:translate(0,0)}42%{transform:translate(22px,24px)}78%{transform:translate(-14px,-18px)}}
        @keyframes ag4{0%,100%{transform:translate(0,0)}46%{transform:translate(-18px,26px)}78%{transform:translate(24px,-14px)}}

        /* ── Floating icon shell ── */
        .hb-card {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.4));
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 0 8px 32px rgba(0,159,227,0.15), inset 0 2px 4px rgba(255,255,255,0.8);
          z-index: 6;
          will-change: transform;
          transition: all .4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }
        .hb-inner-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          box-shadow: inset 0 2px 4px rgba(255,255,255,0.5);
          transition: transform .4s ease;
        }
        .hb-inner-circle svg {
          width: 26px;
          height: 26px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
        }
        .hb-card:hover {
          box-shadow: 0 16px 48px rgba(0,159,227,0.3), inset 0 2px 4px rgba(255,255,255,1);
          animation-play-state: paused;
        }
        .hb-card:hover .hb-inner-circle {
          transform: scale(1.1);
        }
      `}</style>

      <section
        ref={ref as React.RefObject<HTMLElement>}
        className="relative w-full min-h-[100vh] flex flex-col items-center justify-center pt-24 overflow-hidden"
        style={{ background: "#f0f6ff" }}
      >
        {/* ── Hero background image ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 0 }}
        >
          <Image
            src="/herobanner8.png"
            alt="Hero background orbital rings"
            width={1920}
            height={1080}
            quality={100}
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
        </div>

        {/* Subtle white fade at very top & bottom to blend with nav/next section */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom,rgba(240,246,255,.45) 0%,transparent 12%,transparent 88%,rgba(240,246,255,.55) 100%)",
            zIndex: 1,
          }}
        />

        {/* ══ FLOATING ICONS ══════════════════════════════════════ */}
        {CARDS.map((card, i) => (
          <div
            key={i}
            className="hb-card hidden md:flex"
            style={{
              top: card.top,
              ...(card.side === "left"
                ? { left: card.left }
                : { right: card.right }),
              animation: `${card.anim} ${card.dur} ease-in-out infinite alternate`,
              animationDelay: card.delay,
              color: card.accent,
            }}
          >
            <div
              className="hb-inner-circle"
              style={{ background: `linear-gradient(135deg, ${card.accent}15, ${card.accent}30)` }}
            >
              {card.icon}
            </div>
          </div>
        ))}

        {/* ══ MAIN CONTENT ══════════════════════════════════════════ */}
        <div
          className="relative flex flex-col items-center text-center max-w-4xl px-6 mx-auto mt-10"
          style={{ zIndex: 10 }}
        >
          <h1 className="reveal text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-[#0b1120] leading-[1.08] tracking-tighter mb-8 drop-shadow-sm">
            Custom Technology{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #009FE3 0%, #0ea5e9 50%, #0284c7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Platforms
            </span>
            ,{" "}
            <br className="hidden md:block" />
            built with intent.
          </h1>

          <p className="reveal delay-100 text-md md:text-[1.25rem] text-[#334155] max-w-2xl leading-[1.7] font-medium tracking-tight mb-12">
            We build custom digital platforms that empower organisations to operate efficiently, scale securely, and evolve continuously.
          </p>

          <div className="reveal delay-200 flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="#contact"
              className="group flex items-center justify-center gap-2 px-9 py-4 bg-[#009FE3] text-white font-semibold rounded-full shadow-[0_8px_24px_rgba(0,159,227,0.35)] hover:bg-[#008ce3] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,159,227,0.45)] transition-all duration-300 w-full sm:w-auto text-[1.05rem]"
            >
              Start a Conversation
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            {/* <Link
              href="/explore"
              className="flex items-center justify-center px-9 py-4 bg-white/60 backdrop-blur-xl text-slate-700 font-semibold rounded-full border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:bg-white hover:text-[#009FE3] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-white transition-all duration-300 w-full sm:w-auto text-[1.05rem]"
            >
              Explore Platforms
            </Link> */}
          </div>
        </div>
      </section>
    </>
  );
}
