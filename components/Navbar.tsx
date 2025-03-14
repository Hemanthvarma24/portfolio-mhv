"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when clicking outside
  useEffect(() => {
    // Only run in the browser, not during server-side rendering
    if (typeof window === "undefined") return;
    
    const handleOutsideClick = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      if (mobileMenu && !mobileMenu.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="bg-transparent px-6 md:px-12 relative">
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center ml-0 lg:ml-8">
          <Link href="/" className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text text-3xl font-bold">
            MHV
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-white focus:outline-none z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-6">
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/#projects", label: "PROJECTS" },
            { href: "/#contact", label: "CONTACT" },
          ].map(({ href, label }) => (
            <motion.li key={href} whileHover={{ scale: 1.1 }}>
              <Link href={href} className="text-white text-sm transition-colors duration-300 hover:text-blue-400">
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-black bg-opacity-90 md:hidden flex flex-col items-center py-4 space-y-3 z-40"
          >
            {[
              { href: "/#about", label: "ABOUT" },
              { href: "/#experience", label: "EXPERIENCE" },
              { href: "/#skills", label: "SKILLS" },
              { href: "/#education", label: "EDUCATION" },
              { href: "/#projects", label: "PROJECTS" },
              { href: "/#contact", label: "CONTACT" },
            ].map(({ href, label }) => (
              <motion.div key={href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={href}
                  className="text-white text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;