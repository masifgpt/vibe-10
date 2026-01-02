import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-black text-white sticky top-0 z-50 border-b border-white/10">
      <h1 className="text-xl font-bold tracking-wide">M Asif</h1>
      <nav className="space-x-6 text-gray-400 text-sm font-semibold">
        {/* Remove <a> inside Link */}
        <Link href="/" className="hover:text-lime-400 transition">
          Home

        </Link>
        <Link href="/about" className="hover:text-lime-400 transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-lime-400 transition">
          Contact
        </Link>
      </nav>
    </header>
  );
}
