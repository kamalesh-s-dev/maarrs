import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav className="flex items-center justify-between w-full max-w-6xl px-6 py-3 bg-gradient-to-r from-[#e6f4fc]/90 via-[#f0f8ff]/90 to-[#e6f4fc]/90 backdrop-blur-md border border-white/50 rounded-full shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform hover:scale-105 duration-300">
          <img
            src="/logo.png"
            alt="MAARRS Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-gray-500 hover:text-[#009FE3] font-medium transition-colors">Home</Link>
          <Link href="/about" className="text-gray-500 hover:text-[#009FE3] font-medium transition-colors">About</Link>
          <Link href="/services" className="text-gray-500 hover:text-[#009FE3] font-medium transition-colors">Services</Link>
          <Link href="/blog" className="text-gray-500 hover:text-[#009FE3] font-medium transition-colors">Blog</Link>
        </div>

        {/* Call to Action */}
        <div className="flex items-center">
          <Link 
            href="/get-started" 
            className="px-6 py-2.5 bg-[#009FE3] text-white font-medium rounded-full shadow-md shadow-[#009FE3]/20 hover:bg-[#0089c4] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
