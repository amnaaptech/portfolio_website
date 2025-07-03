
'use client'

import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProjectCard = () => {
  const projects = [
    {
      title: 'Market Place Project',
      desc: 'A dynamic, animated marketplace built with Next.js, TypeScript, and Tailwind CSS.',
      image: '/img/marketplace.png',
      live: 'https://amnaaptech-markeplace-hackathon-3-dxg1.vercel.app/',
    },
    {
      title: 'Portfolio Website',
      desc: 'A fully animated portfolio made with Framer Motion and Tailwind CSS.',
      image: '/img/portfolio.png',
      live: 'https://amnaaptech-portfolio.vercel.app/',
    },
   {
  title: 'CarBreezy Website',
  desc: 'A static responsive car showroom website built using HTML and Bootstrap.',
  image: '/img/Carbreezy.png',
  live: 'https://amnaaptech.github.io/', // Add link if deployed
}, 
{
  title: `Men's Hair Salon Website`,
  desc: 'A dynamic salon website built using PHP and MySQL for backend functionality, with admin and user panels.',
  image: '/img/Hair.png',
  live: 'https://amnaaptech-todo.vercel.app/', 
},

  ]

  return (
    <div className="flex flex-col items-center px-4 py-10"id="projects">
      {/* 📝 Section Heading */}
      <h2 className="text-4xl font-bold text-pink-500 mb-10 text-center  underline-offset-8 decoration-pink-500">
        My Projects
      </h2>

      {/* 🧱 Cards */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-10 w-full sm:w-[80%] md:w-[320px] rounded-xl bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black text-white border border-gray-800 overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="w-full object-cover h-[200px]"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold text-pink-500 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.desc}</p>

              <div className="flex items-center justify-between">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-pink-600 text-white rounded-full hover:bg-pink-500 transition"
                >
                  View Project
                </a>

                <div className="flex gap-3">
                  <a
                    href="https://github.com/amnaaptech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/feed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
       {/* 🎯 Call to Action */}
      <div className="mt-12 text-center">
        <Link href="/Projects">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg shadow-pink-500/30 transition duration-300"
          >
            View all project
          </motion.button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
