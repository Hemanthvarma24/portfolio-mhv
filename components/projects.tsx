import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import profile from "@/app/assets/pic.jpg";
import project1 from "@/app/assets/shoppe.png";
import project2 from "@/app/assets/doccure.png";
import project3 from "@/app/assets/siddha.jpeg";

const projects = [
  {
    title: "Shoppe - E-commerce Platform",
    description:
      "A modern e-commerce platform featuring a responsive design, user-friendly catalog, secure checkout, and seamless payment integration.",
    link: "https://shopee-varma.vercel.app/",
    image: project1,
    tech: ["HTML", "TailwindCSS", "React.js", "JavaScript"],
  },
  {
    title: "Doccure - Telemedicine Portal",
    description:
      "A comprehensive telemedicine solution for virtual consultations, appointment scheduling, and secure video conferencing.",
    link: "https://github.com/hemanthvarma",
    image: project2,
    tech: ["HTML", "TailwindCSS", "Next.js", "JavaScript"],
  },
  {
    title: "Siddhalife - Ayurvedic Products",
    description:
      "An online marketplace for Ayurvedic products with personalized recommendations, detailed product information, and an educational blog.",
    link: "https://github.com/hemanthvarma",
    image: project3,
    tech: ["HTML", "TailwindCSS", "Next.js", "JavaScript", "API"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          Showcasing my best work, built with modern technologies to create intuitive and engaging user experiences.
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
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl text-white font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                    >
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
  );
};

export default ProjectsSection;