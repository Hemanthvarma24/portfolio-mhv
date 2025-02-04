import type React from "react"
import { motion } from "framer-motion"
import { skillToIconInfo } from "../utils/skillIcons"

interface Skill {
  category: string
  items: string[]
}

interface SkillsIconsProps {
  skills: Skill[]
}

const SkillIcon: React.FC<{ skill: string }> = ({ skill }) => {
  const iconInfo = skillToIconInfo[skill]
  if (!iconInfo) return null

  const { icon: Icon, color, viewBox = "0 0 24 24" } = iconInfo

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center justify-center p-4"
    >
      <div className="relative w-16 h-16 flex items-center justify-center">
        <div className="absolute inset-0 bg-white opacity-10 rounded-full"></div>
        {typeof Icon === "string" ? (
          <svg
            viewBox={viewBox}
            className="w-12 h-12"
            dangerouslySetInnerHTML={{ __html: Icon }}
            style={{ fill: color }}
          />
        ) : (
          <Icon className="w-12 h-12" style={{ color }} />
        )}
      </div>
      <span className="text-xs text-center mt-2 text-gray-300">{skill}</span>
    </motion.div>
  )
}

const SkillsIcons: React.FC<SkillsIconsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Technical Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            With a comprehensive skill set in modern web technologies, I bring ideas to life through clean, efficient,
            and scalable code.
          </p>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {skills.flatMap((skillSet, categoryIndex) =>
            skillSet.items.map((skill, index) => (
              <motion.div
                key={`${skillSet.category}-${skill}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (categoryIndex * skillSet.items.length + index) * 0.1 }}
              >
                <SkillIcon skill={skill} />
              </motion.div>
            )),
          )}
        </div>
      </div>
    </section>
  )
}

export default SkillsIcons

