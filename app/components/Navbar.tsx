import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav className="flex items-center justify-between w-full max-w-6xl px-5 py-3 backdrop-blur-xl border border-white/30 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
          <img
            src="/navbarlogo.png"
            alt="MAARRS Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-9">
          <Link href="/" className="text-[15px] font-medium text-slate-700 hover:text-[#009FE3] transition-colors duration-300 tracking-wide">Home</Link>
          <Link href="/about" className="text-[15px] font-medium text-slate-700 hover:text-[#009FE3] transition-colors duration-300 tracking-wide">About</Link>
          <Link href="/services" className="text-[15px] font-medium text-slate-700 hover:text-[#009FE3] transition-colors duration-300 tracking-wide">Services</Link>
          <Link href="/blog" className="text-[15px] font-medium text-slate-700 hover:text-[#009FE3] transition-colors duration-300 tracking-wide">Blog</Link>
        </div>

        {/* Call to Action */}
        <div className="flex items-center">
          <Link
            href="#contact"
            className="px-4 py-2 md:px-6 md:py-2.5 bg-[#009FE3] text-white text-[13px] md:text-sm font-semibold tracking-wide rounded-full shadow-[0_4px_14px_0_rgba(0,159,227,0.39)] hover:shadow-[0_6px_20px_rgba(0,159,227,0.23)] hover:bg-[#0089c4] hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
