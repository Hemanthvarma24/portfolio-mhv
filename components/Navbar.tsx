"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-6 md:px-12">
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-3xl font-bold">
            MHV
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navbar Links */}
        <ul
          className={`absolute left-0 top-16 w-full bg-black transition-all duration-300 md:static md:flex md:w-auto md:space-x-2 md:bg-transparent ${
            isOpen ? "opacity-100 h-auto py-4" : "opacity-0 h-0 md:opacity-100 md:h-auto"
          }`}
        >
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/#projects", label: "PROJECTS" },
            { href: "/#contact", label: "CONTACT" },
          ].map(({ href, label }) => (
            <li key={href} className="w-full md:w-auto">
              <Link
                href={href}
                className="block px-6 py-3 text-sm text-white transition-colors duration-300 hover:text-pink-400"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
