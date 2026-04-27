import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

        {/* Column 1 — Logo, Tagline, Socials */}
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image src="/logo.png" alt="MAARRS Logo" width={120} height={36} className="object-contain h-9 w-auto" />
          </Link>

          {/* Tagline */}
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            MAARRS builds custom technology platforms designed to support scalable, structured, and future-ready business operations.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-[#009FE3] hover:text-[#009FE3] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* X / Twitter */}
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-[#009FE3] hover:text-[#009FE3] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:hello@maarrs.com" aria-label="Email"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-[#009FE3] hover:text-[#009FE3] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 — Navigation */}
        <div className="flex flex-col gap-5">
          <h4 className="text-[#0f172a] font-semibold text-base tracking-wide">Navigation</h4>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Platforms", href: "/platforms" },
              { label: "Industries", href: "/industries" },
              { label: "Process", href: "/process" },
              { label: "Capabilities", href: "/capabilities" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-500 text-sm hover:text-[#009FE3] transition-colors duration-200 w-fit"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3 — Contact */}
        <div className="flex flex-col gap-5">
          <h4 className="text-[#0f172a] font-semibold text-base tracking-wide">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:hello@maarrs.com" className="text-gray-500 text-sm hover:text-[#009FE3] transition-colors duration-200 w-fit">
              hello@maarrs.com
            </a>
            <a href="tel:+91XXXXXXXXXX" className="text-gray-500 text-sm hover:text-[#009FE3] transition-colors duration-200 w-fit">
              +91 XXXXX XXXXX
            </a>
            <span className="text-gray-500 text-sm">India</span>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-sm">
            © 2028 MAARRS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-400 text-sm hover:text-[#009FE3] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 text-sm hover:text-[#009FE3] transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
