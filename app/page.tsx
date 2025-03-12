"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/aboutme";
import Experience from "@/components/experience";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/projects"
import Education from "@/components/education"
import  ContactSection from "@/components/contact"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
 
  
  return (
    <div className="min-h-screen bg-[#0d1224] text-white">
      <Navbar />
      <main className="container mx-auto py-4 px-4 sm:px-6">
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills /> 
<ProjectsSection/>
<Education/>
< ContactSection/>
      </main>
      
      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Hemanth Varma. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}