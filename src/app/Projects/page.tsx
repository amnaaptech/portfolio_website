'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const allProjects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Developed a responsive developer portfolio using Next.js and Tailwind CSS to showcase projects, skills, and contact information.',
    tags: ['Tailwind CSS','Nextjs'],
    image: '/img/portfolio.PNG',
    github: 'https://github.com/amnaaptech/portfolio_website',
  },
  {
    id: 2,
    title: 'Hair Salon Management',
    description: 'Developed an online Hair Salon Management System using PHP and MySQL with features for appointment booking, staff management, and role-based admin access.',
    tags: ['PHP', 'MySQL'],
    image: '/img/Hair.png',
    github: 'https://github.com/amnaaptech/Elegance_Salon',
  },
    {
    id: 3,
    title: 'Market Place Project',
    description: 'Built a responsive developer portfolio using Next.js, Tailwind CSS, and Sanity CMS with dynamic content loading through API integration.',
    tags: ['TypeScript','Tailwind CSS','Nextjs'],
    image: '/img/marketplace.png',
    github: 'https://github.com/amnaaptech/amnaaptech-Markeplace_Hackathon_3',
  },
   {
    id: 4,
    title: 'Arts',
    description: 'Developed an e-commerce website for a stationery and gift store using ASP.NET Core MVC with role-based access, product management, and order placement features.using C#,ASP.NET Core (MVC)',
    tags: ['SQL Server', 'ASP.NET','C#'],
    image: '/img/Arts.PNG',
    github: 'https://github.com/amnaaptech/OnlineShoppingCart_asp.net',
  },
   {
    id: 5,
    title: 'Carbreezy Website',
    description: 'Built a static, responsive car showroom website using HTML, CSS, JavaScript, and Bootstrap for showcasing vehicles and enhancing user experience across devices.',
    tags: ['CSS', 'HTML','JS'],
    image: '/img/Carbreezy.png',
    github: 'https://github.com/amnaaptech/amnaaptech.github.io',
  },
  {
    id: 6,
    title: 'Admin Panel',
    description: 'Developed an admin panel using PHP and MySQL with user role management for secure access control and CRUD operations.',
    tags: ['PHP', 'MySQL'],
    image: '/img/Admin2.PNG',
    github: 'https://github.com/amnaaptech/Elegance_Salon/tree/main/Admin%20Dashboard',
  },
  {
    id: 7,
    title: 'CRUD',
    description: 'Implemented full CRUD operations using Angular for dynamic data management with responsive UI and real-time updates.',
    tags: ['Angular'],
    image: '/img/Angular.png',
    github: 'https://github.com/amnaaptech/CRUD_Angular',
  }, 
  
    {
    id: 8,
    title: 'Admin Panel',
    description: 'Admin panel using Nextjs ,and Tailwindcss.',
    tags: ['Nextjs', 'TypeScript','Tailwind CSS'],
    image: '/img/Adminnext1.PNG',
    github: 'https://github.com/amnaaptech/admin-dashboard',
  },
]

const filters = ['All', 'PHP', 'HTML','CSS','JS' ,'TypeScript','Tailwind CSS', 'MySQL','Nextjs','C#','ASP.NET','SQL Server','Angular']

const Projects = () => {
  const [selected, setSelected] = useState('All')

  const filteredProjects =
    selected === 'All'
      ? allProjects
      : allProjects.filter(project => project.tags.includes(selected))

  return (
    <section className="px-6 md:px-20 py-14 text-white min-h-screen bg-black" >
      <h2 className="text-4xl font-bold text-center text-pink-500 mb-8  underline-offset-8 decoration-pink-500">
        My All Projects
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
