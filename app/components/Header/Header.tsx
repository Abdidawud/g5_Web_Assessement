// /app/components/Header.tsx
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-whitw text-slate-600">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <img src="/A2SV.png" alt="Logo" className="h-8" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow flex justify-center space-x-8">
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/teams" className="hover:text-gray-300">
          Teams
        </Link>
        <Link href="/success-story" className="hover:text-gray-300">
          Success Story
        </Link>
        <Link href="/about-us" className="hover:text-gray-300">
          About Us
        </Link>
        <Link href="/blog" className="hover:text-gray-300 text-blue-800">
          Blogs
        </Link>
        <Link href="/get-involved" className="hover:text-gray-300">
          Get Involved
        </Link>
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <Link href="/login">
          <button className="px-4 py-2 text-semibold hover:bg-slate-300 text-slate-950 rounded-md">
            Login
          </button>
        </Link>
        <Link href="/donate">
          <button className="px-4 py-2 bg-blue-800 text-white rounded-md">
            Donate
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
