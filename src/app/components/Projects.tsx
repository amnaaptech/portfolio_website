'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const allProjects = [
  {
    id: 1,
    title: 'React Portfolio',
    description: 'A responsive portfolio using React and Tailwind.',
    tags: ['React', 'Tailwind CSS'],
    image: '/img/project1.jpg',
    github: 'https://github.com/yourname/portfolio',
  },
  {
    id: 2,
    title: 'PHP E-commerce',
    description: 'A basic online store with PHP and MySQL.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    image: '/img/project1.jpg',
    github: 'https://github.com/yourname/php-ecommerce',
  },
  {
    id: 3,
    title: 'Admin Panel',
    description: 'Admin panel using Laravel with user roles.',
    tags: ['Laravel', 'MySQL'],
    image: '/img/project1.jpg',
    github: 'https://github.com/yourname/admin-panel',
  },
    {
    id: 4,
    title: 'Admin Panel',
    description: 'Admin panel using Laravel with user roles.',
    tags: ['Laravel', 'MySQL'],
    image: '/img/project1.jpg',
    github: 'https://github.com/yourname/admin-panel',
  },
    {
    id: 5,
    title: 'Admin Panel',
    description: 'Admin panel using Laravel with user roles.',
    tags: ['Laravel', 'MySQL'],
    image: '/img/project1.jpg',
    github: 'https://github.com/yourname/admin-panel',
  },  {
    id: 6,
    title: 'Admin Panel',
    description: 'Admin panel using Laravel with user roles.',
    tags: ['Laravel', 'MySQL'],
    image: '/img/project1.jpg',
    github: 'https://github.com/yourname/admin-panel',
  },
]

const filters = ['All', 'React', 'PHP', 'Laravel', 'Tailwind CSS', 'MySQL', 'Bootstrap']

const Projects = () => {
  const [selected, setSelected] = useState('All')

  const filteredProjects =
    selected === 'All'
      ? allProjects
      : allProjects.filter(project => project.tags.includes(selected))

  return (
    <section className="px-6 md:px-20 py-14 text-white min-h-screen bg-black">
      <h2 className="text-4xl font-bold text-center text-pink-500 mb-8 underline underline-offset-8 decoration-pink-500">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filters.map((tech, index) => (
          <button
            key={index}
            onClick={() => setSelected(tech)}
            className={`px-4 py-2 rounded-full border transition text-sm font-medium
              ${selected === tech ? 'bg-pink-500 text-white' : 'bg-transparent border-gray-600 text-gray-300 hover:bg-pink-600 hover:text-white'}`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filteredProjects.map(project => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="bg-[#1a1a1a] p-4 rounded-lg shadow-md border border-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded mb-3 h-40 w-full object-cover"
            />
            <h3 className="text-xl font-semibold mb-1 text-pink-400">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300">{project.description}</p>
            <div className="flex flex-wrap mt-2 gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs bg-pink-500/20 text-pink-400 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 mt-2 inline-block hover:underline"
              >
                View Code →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
