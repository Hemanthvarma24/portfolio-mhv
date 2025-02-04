"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ExternalLink, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import profile from "@/app/assets/pic.jpg"
import SkillsIcons from "../components/SkillsIcons"
import project1 from "@/app/assets/shoppe.png"
import project2 from "@/app/assets/doccure.png"
import project3 from "@/app/assets/siddha.jpeg"
import { useState } from "react"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "javascript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "REST APIs"],
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "Github", "Figma"],
    },
  ]
  const projects = [
    {
      title: "Shoppe - E-commerce Platform",
      description:
        "A modern e-commerce solution featuring a responsive design, user-friendly product catalog, secure checkout process, and integration with popular payment gateways.",
      link: "https://shopee-varma.vercel.app/",
      image: project1,
      tech: ["HTML", "tailwindcss ", "react.js", "javascript"],
    },
    {
      title: "Doccure - Telemedicine Portal",
      description:
        "A comprehensive telemedicine platform enabling virtual consultations, appointment scheduling, electronic health records management, and secure video conferencing for healthcare providers and patients.",
      link: "https://github.com/hemanthvarma",
      image: project2,
      tech: ["HTML", "tailwindcss ", "Next.js", "javascript"],
    },
    {
      title: "Siddhalife - Ayurvedic Products",
      description:
        "An online marketplace for authentic Ayurvedic products, featuring detailed product information, customer reviews, personalized recommendations, and an educational blog on Ayurvedic practices.",
      link: "https://github.com/hemanthvarma",
      image: project3,
      tech: ["HTML", "tailwindcss ", "Next.js", "javascript", "API"],
    },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <nav className="fixed w-full bg-[#0a0b0f]/90 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
          >
            HV
          </motion.div>
          <div className="hidden md:flex gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-300 hover:text-blue-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
          <button className="md:hidden text-gray-300 hover:text-blue-400 transition-colors" onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0a0b0f] border-t border-gray-800 px-4 sm:px-6 py-4"
          >
            <ul className="flex flex-col gap-4">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
      <main className="container mx-auto px-4 sm:px-6 pt-24">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-blue-400 text-xl font-semibold mb-4">Frontend Developer</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    Hemanth Varma
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                  A passionate Frontend Developer with expertise in building exceptional digital experiences.
                  Specializing in modern web technologies and creating user-centric, performant applications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="HEMANTH VARMA Resume....pdf"
                  download="HEMANTH_VARMA_Resume.pdf"
                  className="w-full sm:w-auto"
                >
                  <Button variant="default" size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700 w-full">
                    <FileText size={20} />
                    Download Resume
                  </Button>
                </a>
                <a href="mailto:mudunuruhamanth@gmail.com" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 border-blue-400 text-blue-400 hover:bg-gray-100 w-full"
                  >
                    <Mail size={20} />
                    Contact Me
                  </Button>
                </a>
              </div>
              <div className="flex gap-6 pt-4 justify-center sm:justify-start">
                <motion.a
                  href="https://github.com/Hemanthvarma24"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/hemanth-varma-532586286"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mudunuruhamanth@gmail.com"
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mt-12 md:mt-0"
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl shadow-blue-500/20">
                <Image src={profile || "/placeholder.svg"} alt="Hemanth Varma" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-18 md:py-20">
          <SkillsIcons skills={skills} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-18 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of my best work, demonstrating my expertise in building complex, user-focused applications.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl text-white font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-sm px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mt-auto"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center px-4 md:px-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-400 mb-12">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
              want to say hi, feel free to reach out!
            </p>
            <Card className="p-6 md:p-8 bg-gray-900/50 border-gray-800">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <motion.a
                  href="mailto:mudunuruhamanth@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                >
                  <Mail size={24} className="text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-sm text-gray-400">Get in touch</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://github.com/Hemanthvarma24"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                >
                  <Github size={24} className="text-purple-400" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">GitHub</h3>
                    <p className="text-sm text-gray-400">View my work</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/hemanth-varma-532586286"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                >
                  <Linkedin size={24} className="text-pink-400" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">LinkedIn</h3>
                    <p className="text-sm text-gray-400">Connect with me</p>
                  </div>
                </motion.a>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">© 2025 Hemanth Varma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

