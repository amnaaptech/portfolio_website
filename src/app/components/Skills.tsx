
'use client'

import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaCode,
  FaLaravel,
  FaBootstrap,
  FaAngular,
  FaDatabase
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiDotnet, // 👈 Add this line
} from 'react-icons/si'

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-300" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
  { name: 'PHP', icon: <FaPhp className="text-purple-400" /> },
  { name: 'Laravel', icon: <FaLaravel className="text-red-500" /> },
  { name: 'C#', icon: <FaCode className="text-purple-600" /> },
  { name: 'ASP.NET Core', icon: <SiDotnet className="text-indigo-400" /> },
  { name: 'SQL Server', icon: <FaDatabase className="text-red-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-300" /> },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
  { name: 'Angular', icon: <FaAngular className="text-red-600" /> },
]

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-14 px-6 md:px-20 text-white"
    >
      <h2 className="text-4xl font-bold text-center text-pink-500 mb-12  underline-offset-8 decoration-pink-500">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex flex-col items-center justify-center w-32 h-32 bg-[#1a1a1a] border border-gray-800 rounded-xl shadow-md hover:shadow-pink-500/20 transition"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills
