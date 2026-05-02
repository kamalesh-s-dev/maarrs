import React from 'react';

interface GutterDecoratedProps {
  children: React.ReactNode;
  arcSide?: 'left' | 'right' | 'both' | 'none';
  dotCluster?: 'left' | 'right' | 'both' | 'none';
  gridEdges?: boolean;
  verticalLabel?: string;
  sectionBadge?: string;
  ghostNumber?: string;
  watermarkText?: string;
  glowLeak?: 'left' | 'right' | 'both' | 'none';
  concentricRings?: 'left' | 'right' | 'both' | 'none';
  scanLine?: boolean;
  className?: string;
}

export default function GutterDecorated({
  children,
  arcSide = 'none',
  dotCluster = 'none',
  gridEdges = false,
  verticalLabel,
  sectionBadge,
  ghostNumber,
  watermarkText,
  glowLeak = 'none',
  concentricRings = 'none',
  scanLine = false,
  className = '',
}: GutterDecoratedProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* ── Decorative layer (z-0, pointer-events-none) ─────────── */}
      <div className="absolute inset-0 pointer-events-none z-[0]">

        {/* Always-on subtle ambient radial — gives every section a soft abstract wash */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,159,227,0.05)_0%,transparent_70%)]" />

        {/* Scan Line */}
        {scanLine && (
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#009FE3]/30 to-transparent shadow-[0_0_8px_rgba(0,159,227,0.5)] opacity-50 scan-line-anim hidden md:block" />
        )}

        {/* Grid Edges */}
        {gridEdges && (
          <>
            <div className="absolute top-0 bottom-0 left-[3%] w-[1px] bg-gradient-to-b from-transparent via-[#009FE3]/25 to-transparent hidden md:block" />
            <div className="absolute top-0 bottom-0 right-[3%] w-[1px] bg-gradient-to-b from-transparent via-[#009FE3]/25 to-transparent hidden md:block" />
          </>
        )}

        {/* Glow / Light Leak — mix-blend-normal so visible on any background */}
        {(glowLeak === 'left' || glowLeak === 'both') && (
          <div className="absolute top-[10%] left-0 w-[45vw] h-[45vw] bg-[#009FE3] rounded-full filter blur-[120px] opacity-[0.07] animate-pulse-slow" />
        )}
        {(glowLeak === 'right' || glowLeak === 'both') && (
          <div className="absolute bottom-[10%] right-0 w-[45vw] h-[45vw] bg-[#0077b6] rounded-full filter blur-[120px] opacity-[0.06] animate-pulse-slow" />
        )}

        {/* Side Arcs — inset so overflow-hidden keeps them visible */}
        {(arcSide === 'left' || arcSide === 'both') && (
          <div className="absolute top-1/2 left-[-8%] w-[36vw] h-[80vh] rounded-[100%] border border-[#009FE3]/20 -translate-y-1/2 hidden lg:block" />
        )}
        {(arcSide === 'right' || arcSide === 'both') && (
          <div className="absolute top-1/2 right-[-8%] w-[36vw] h-[80vh] rounded-[100%] border border-[#009FE3]/20 -translate-y-1/2 hidden lg:block" />
        )}

        {/* Concentric Rings — lowered breakpoint to lg so they show on normal screens */}
        {(concentricRings === 'left' || concentricRings === 'both') && (
          <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] border border-[#009FE3]/12 rounded-full -translate-y-1/2 hidden lg:flex items-center justify-center">
            <div className="w-[400px] h-[400px] border border-dashed border-[#009FE3]/15 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[300px] h-[300px] border border-[#009FE3]/10 rounded-full" />
          </div>
        )}
        {(concentricRings === 'right' || concentricRings === 'both') && (
          <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] border border-[#009FE3]/12 rounded-full -translate-y-1/2 hidden lg:flex items-center justify-center">
            <div className="w-[400px] h-[400px] border border-dashed border-[#009FE3]/15 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[300px] h-[300px] border border-[#009FE3]/10 rounded-full" />
          </div>
        )}

        {/* Dot Cluster — lowered breakpoint to lg */}
        {(dotCluster === 'left' || dotCluster === 'both') && (
          <div className="absolute top-[12%] left-[1.5%] opacity-30 hidden lg:block">
            <DotGrid />
          </div>
        )}
        {(dotCluster === 'right' || dotCluster === 'both') && (
          <div className="absolute bottom-[12%] right-[1.5%] opacity-30 hidden lg:block">
            <DotGrid />
          </div>
        )}

        {/* Ghost Number */}
        {ghostNumber && (
          <div className="absolute bottom-[-5%] left-[-2%] text-[25vw] font-black text-slate-800 leading-none opacity-[0.02] select-none tracking-tighter">
            {ghostNumber}
          </div>
        )}

        {/* Watermark Text */}
        {watermarkText && (
          <div className="absolute top-[10%] right-[-5%] text-[10vw] font-black text-slate-800 leading-none opacity-[0.02] select-none tracking-tight whitespace-nowrap -rotate-90 origin-bottom-right">
            {watermarkText}
          </div>
        )}

        {/* Section Badge & Vertical Label */}
        <div className="absolute top-0 left-[0.5%] xl:left-[1%] bottom-0 flex-col justify-center items-center py-20 hidden 2xl:flex opacity-60">
          {sectionBadge && (
            <div className="font-mono text-[10px] text-[#009FE3] tracking-[0.2em] -rotate-90 mt-10">
              {sectionBadge}
            </div>
          )}
          <div className="flex-1" />
          {verticalLabel && (
            <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.4em] text-slate-400 -rotate-90 whitespace-nowrap origin-center">
              {verticalLabel}
            </div>
          )}
          <div className="flex-1" />
        </div>
      </div>

      <style>{`
        @keyframes scanLineAnim {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        .scan-line-anim {
          animation: scanLineAnim 12s linear infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.06; transform: scale(1); }
          50% { opacity: 0.10; transform: scale(1.06); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

const DotGrid = () => (
  <svg width="60" height="120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle fill="#009FE3" cx="2" cy="2" r="1.5"></circle>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
  </svg>
);
