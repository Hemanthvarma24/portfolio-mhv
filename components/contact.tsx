import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
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
            <ContactItem 
              href="mailto:mudunuruhamanth@gmail.com" 
              icon={<Mail size={24} className="text-blue-400" />} 
              title="Email" 
              description="Get in touch" 
            />
            <ContactItem 
              href="https://github.com/Hemanthvarma24" 
              icon={<Github size={24} className="text-purple-400" />} 
              title="GitHub" 
              description="View my work" 
            />
            <ContactItem 
              href="https://www.linkedin.com/in/hemanth-varma-532586286" 
              icon={<Linkedin size={24} className="text-pink-400" />} 
              title="LinkedIn" 
              description="Connect with me" 
            />
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

const ContactItem = ({ href, icon, title, description }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
    >
      {icon}
      <div>
        <h3 className="font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.a>
  );
};

export default ContactSection;
