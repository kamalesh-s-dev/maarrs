import React from 'react';

interface GutterDecoratedProps {
  children: React.ReactNode;
  arcSide?: 'left' | 'right' | 'both' | 'none';
  dotCluster?: 'left' | 'right' | 'both' | 'none';
  cornerMarks?: boolean;
  gridEdges?: boolean;
  verticalLabel?: string;
  sectionBadge?: string;
  crossMarks?: boolean;
  ghostNumber?: string;
  watermarkText?: string;
  glowLeak?: 'left' | 'right' | 'both' | 'none';
  concentricRings?: 'left' | 'right' | 'both' | 'none';
  scanLine?: boolean;
  tickMarks?: boolean;
  className?: string;
}

export default function GutterDecorated({
  children,
  arcSide = 'none',
  dotCluster = 'none',
  cornerMarks = false,
  gridEdges = false,
  verticalLabel,
  sectionBadge,
  crossMarks = false,
  ghostNumber,
  watermarkText,
  glowLeak = 'none',
  concentricRings = 'none',
  scanLine = false,
  tickMarks = false,
  className = '',
}: GutterDecoratedProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Decorative Overlay - Sits under the pointer-events-none layer but behind main text */}
      <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden mix-blend-multiply">
        {/* Glow / Light Leak */}
        {(glowLeak === 'left' || glowLeak === 'both') && (
          <div className="absolute top-[20%] left-[-15%] w-[50vw] h-[50vw] bg-[#009FE3] rounded-full mix-blend-normal filter blur-[100px] opacity-[0.04] animate-pulse-slow" />
        )}
        {(glowLeak === 'right' || glowLeak === 'both') && (
          <div className="absolute top-[60%] right-[-15%] w-[50vw] h-[50vw] bg-[#7c3aed] rounded-full mix-blend-normal filter blur-[100px] opacity-[0.04] animate-pulse-slow" />
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
      </div>

      <div className="absolute inset-0 pointer-events-none z-[50] overflow-hidden">
        
        {/* Scan Line */}
        {scanLine && (
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#009FE3]/30 to-transparent shadow-[0_0_8px_rgba(0,159,227,0.5)] opacity-50 scan-line-anim hidden md:block" />
        )}

        {/* Grid Edges */}
        {gridEdges && (
          <>
            <div className="absolute top-0 bottom-0 left-[3%] w-[1px] bg-gradient-to-b from-transparent via-[#009FE3]/20 to-transparent hidden md:block" />
            <div className="absolute top-0 bottom-0 right-[3%] w-[1px] bg-gradient-to-b from-transparent via-[#009FE3]/20 to-transparent hidden md:block" />
          </>
        )}
        
        {/* Tick Marks (Ruler style) */}
        {tickMarks && (
          <div className="absolute top-[10%] bottom-[10%] left-[3%] flex flex-col justify-between hidden md:flex opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-[8px] h-[1px] bg-[#009FE3]" />
            ))}
          </div>
        )}

        {/* Side Arcs */}
        {arcSide === 'left' || arcSide === 'both' ? (
          <div className="absolute top-1/2 left-[-20%] md:left-[-15%] xl:left-[-10%] w-[40vw] h-[80vh] rounded-[100%] border-[1px] border-[#009FE3]/15 -translate-y-1/2 hidden lg:block" />
        ) : null}
        {arcSide === 'right' || arcSide === 'both' ? (
          <div className="absolute top-1/2 right-[-20%] md:right-[-15%] xl:right-[-10%] w-[40vw] h-[80vh] rounded-[100%] border-[1px] border-[#009FE3]/15 -translate-y-1/2 hidden lg:block" />
        ) : null}
        
        {/* Concentric Rings */}
        {(concentricRings === 'left' || concentricRings === 'both') && (
          <div className="absolute top-1/2 left-[-15%] w-[600px] h-[600px] border-[1px] border-[#009FE3]/10 rounded-full -translate-y-1/2 hidden 2xl:flex items-center justify-center">
            <div className="w-[500px] h-[500px] border-[1px] border-dashed border-[#009FE3]/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] border-[1px] border-[#009FE3]/10 rounded-full" />
          </div>
        )}
        {(concentricRings === 'right' || concentricRings === 'both') && (
          <div className="absolute top-1/2 right-[-15%] w-[600px] h-[600px] border-[1px] border-[#009FE3]/10 rounded-full -translate-y-1/2 hidden 2xl:flex items-center justify-center">
            <div className="w-[500px] h-[500px] border-[1px] border-dashed border-[#009FE3]/20 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] border-[1px] border-[#009FE3]/10 rounded-full" />
          </div>
        )}

        {/* Dot Cluster */}
        {(dotCluster === 'left' || dotCluster === 'both') && (
          <div className="absolute top-[15%] left-[2%] opacity-40 hidden 2xl:block">
            <DotGrid />
          </div>
        )}
        {(dotCluster === 'right' || dotCluster === 'both') && (
          <div className="absolute bottom-[15%] right-[2%] opacity-40 hidden 2xl:block">
            <DotGrid />
          </div>
        )}

        {/* Cross Marks */}
        {crossMarks && (
          <>
            <CrossMark top="12%" left="6%" />
            <CrossMark bottom="15%" right="6%" />
            <CrossMark top="45%" right="5%" />
          </>
        )}

        {/* Corner Marks */}
        {cornerMarks && (
          <div className="absolute inset-[3.5%] hidden xl:block">
             <div className="absolute top-0 left-0 w-[24px] h-[24px] border-t-[1.5px] border-l-[1.5px] border-[#009FE3]/30" />
             <div className="absolute top-0 right-0 w-[24px] h-[24px] border-t-[1.5px] border-r-[1.5px] border-[#009FE3]/30" />
             <div className="absolute bottom-0 left-0 w-[24px] h-[24px] border-b-[1.5px] border-l-[1.5px] border-[#009FE3]/30" />
             <div className="absolute bottom-0 right-0 w-[24px] h-[24px] border-b-[1.5px] border-r-[1.5px] border-[#009FE3]/30" />
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
          0%, 100% { opacity: 0.03; transform: scale(1); }
          50% { opacity: 0.05; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

const DotGrid = () => (
  <svg width="40" height="90" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
        <circle fill="#009FE3" cx="2" cy="2" r="1.5"></circle>
      </pattern>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
  </svg>
);

const CrossMark = ({ top, bottom, left, right }: any) => (
  <div className="absolute hidden lg:block opacity-30" style={{ top, bottom, left, right }}>
    <div className="relative w-[18px] h-[18px]">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#009FE3] -translate-y-1/2" />
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-[#009FE3] -translate-x-1/2" />
    </div>
  </div>
);
