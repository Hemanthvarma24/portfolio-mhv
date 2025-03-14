import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import profile from "@/app/assets/pic.jpg";
import project1 from "@/app/assets/shoppe.png";
import project2 from "@/app/assets/doccure.png";
import project3 from "@/app/assets/siddha.jpeg";
import project4 from "@/app/assets/qualifit-img.png"
import project5 from "@/app/assets/pranic-healing.png"
import project6 from "@/app/assets/events.png"

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
  {
    title: "Qualifit AI ",
    description:
      "Qualifit leverages the power of AI to help job seekers create resumes, ace interviews, and match with the right jobs. For corporates, automate resume screening, candidate evaluation, and streamline hiring with ease.",
    link: "https://qualifit-ai.example.com/",
    image: project4,
    tech: ["HTML", "TailwindCSS", "Next.js", "JavaScript","TypeScript", "RESTful API"],
  },
  {
    title: "Pranic Healing - Wellness Platform",
    description:
      "Pranic healing is based on the idea that stress, trauma, or illness can cause the body’s energy fields to become imbalanced or blocked. Practitioners use no-touch techniques to cleanse these blockages and re-energize the affected areas.",
    link: "https://pranic-healing.example.com/",
    image: project5,
    tech: ["HTML", "TailwindCSS", "Next.js", "JavaScript"],
  },
  {
    title: "Workfreaks-Events - Corporate Event Management",
    description:
     "Workfreaks-Events specializes in corporate event management, offering services like event planning, venue selection, vendor coordination, scheduling, and on-site execution for conferences, seminars, product launches, and team-building activities.",
    link: "https://workfreaks-events.example.com/",
    image: project6,
    tech: ["HTML", "TailwindCSS", "Next.js", "JavaScript", "TypeScript"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 md:py-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-12"
      >
        <div className="flex justify-center my-4">
          <div className="flex items-center">
            <span className="w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white px-4 py-2 text-lg md:text-xl rounded-md">
              Projects
            </span>
            <span className="w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
        <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base mt-3 md:mt-4">
          Showcasing my best work, built with modern technologies to create intuitive and engaging user experiences.
        </p>
      </motion.div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
              <div className="relative h-44 md:h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl text-white font-bold mb-2 md:mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs md:text-sm px-2 py-1 font-semibold bg-white text-purple-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
