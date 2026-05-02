import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-sec {
          position: relative;
          width: 100%;
          background: #f5f8ff;
          border-top: 1px solid rgba(0,159,227,0.15);
          overflow: hidden;
        }
        
        /* Soft radial glow backgrounds */
        .footer-sec::before {
          content: ""; position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 800px 400px at 20% 100%, rgba(0,159,227,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 600px 500px at 80% 0%, rgba(0,100,255,0.04) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        /* Scatter Dots */
        .ftr-dot { position: absolute; border-radius: 50%; background: #009FE3; opacity: .15; pointer-events: none; z-index: 1; }

        .ftr-inner {
          position: relative; z-index: 2;
        }

        /* ── Social Icons ── */
        .ftr-social {
          display: flex; align-items: center; justify-content: center;
          width: 40px; height: 40px; border-radius: 12px;
          background: #ffffff;
          border: 1px solid rgba(0,159,227,0.2);
          color: #009FE3;
          box-shadow: 0 4px 14px rgba(0,100,200,0.04);
          transition: all 0.3s ease;
        }
        .ftr-social:hover {
          background: #009FE3;
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,159,227,0.2);
          border-color: #009FE3;
        }

        /* ── Links ── */
        .ftr-link {
          color: #64748b; font-size: 0.9rem; font-weight: 500;
          transition: all 0.2s ease;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .ftr-link:hover {
          color: #009FE3; transform: translateX(4px);
        }

        /* ── Bottom Bar ── */
        .ftr-bottom {
          border-top: 1px solid rgba(0,159,227,0.12);
          margin-top: 60px;
          padding: 24px 0;
          display: flex; justify-content: space-between; align-items: center;
        }
        @media(max-width: 768px) {
          .ftr-bottom { flex-direction: column; gap: 16px; text-align: center; }
        }
        
        .ftr-bottom-link {
          color: #94a3b8; font-size: 0.85rem; transition: color 0.2s;
        }
        .ftr-bottom-link:hover { color: #009FE3; }
      `}</style>

      <footer className="footer-sec section-wrap" style={{ paddingBottom: 0 }}>
        <span className="ftr-dot" style={{ width: 8, height: 8, top: "20%", left: "8%" }} />
        <span className="ftr-dot" style={{ width: 5, height: 5, top: "70%", left: "45%" }} />
        <span className="ftr-dot" style={{ width: 6, height: 6, top: "30%", right: "12%" }} />

        <div className="ftr-inner section-inner">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            
            {/* Column 1 — Brand & Intro */}
            <div className="md:col-span-6 flex flex-col gap-6">
              <Link href="/" className="inline-flex items-center">
                <Image src="/logo.png" alt="MAARRS Logo" width={180} height={54} className="object-contain h-14 w-auto" />
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                MAARRS designs and builds custom technology platforms that help organisations operate, scale, and evolve through structured digital systems aligned to real business needs.
              </p>
              
              <div className="flex items-center gap-4 mt-2">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="ftr-social">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="ftr-social">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="mailto:hello@maarrs.com" className="ftr-social">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 — Navigation */}
            <div className="md:col-span-3 flex flex-col gap-5">
              <h4 className="text-[#0f172a] font-bold text-base tracking-tight">Company</h4>
              <nav className="flex flex-col gap-3">
                <Link href="/" className="ftr-link">Home</Link>
                <Link href="#about" className="ftr-link">About</Link>
                <Link href="#founders" className="ftr-link">Founders</Link>
                <Link href="#careers" className="ftr-link">Careers</Link>
              </nav>
            </div>

            {/* Column 3 — Contact */}
            <div className="md:col-span-3 flex flex-col gap-5">
              <h4 className="text-[#0f172a] font-bold text-base tracking-tight">Get in Touch</h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@maarrs.com" className="ftr-link">hello@maarrs.com</a>
                <a href="tel:+918754799981" className="ftr-link">+91 87547 99981</a>
                <span className="text-gray-500 text-sm mt-1 leading-relaxed">
                  14/11, Balaji Garden Extn,<br/>
                  Subramaniyam Palayam,<br/>
                  GN mills post, Coimbatore North,<br/>
                  Tamilnadu- 641029
                </span>
              </div>
            </div>

          </div>

          <div className="ftr-bottom">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} MAARRS. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="ftr-bottom-link">Privacy Policy</Link>
              <Link href="/terms" className="ftr-bottom-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
