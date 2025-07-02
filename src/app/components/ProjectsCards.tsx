// 'use client'

// import { Github, Linkedin } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React from 'react'

// const ProjectCard = () => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.98 }}
//       className="max-w-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl"
//     >
//       <Image
//         src="/img/project1.jpg" // 🔁 replace with your project image
//         alt="Project Screenshot"
//         width={400}
//         height={250}
//         className="w-full object-cover h-[200px]"
//       />

//       <div className="p-5">
//         <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
//           Market Place Project
//         </h3>
//         <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
//           This is a dynamic project built with Next.js, TypeScript, and Tailwind CSS.
//         </p>

//         {/* Buttons & Icons */}
//         <div className="flex items-center justify-between">
//           <a
//             href="https://amnaaptech-markeplace-hackathon-3-dxg1.vercel.app/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-2 text-sm bg-pink-600 text-white rounded-full hover:bg-pink-500 transition"
//           >
//             View Project
//           </a>

//           <div className="flex gap-3">
//             <a
//               href="https://github.com/amnaaptech"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//             <a
//               href="https://www.linkedin.com/feed/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 dark:text-gray-300 hover:text-pink-500 transition"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default ProjectCard

// 'use client'

// import { Github, Linkedin } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'

// const ProjectCard = () => {
//   const [dots, setDots] = useState<{ left: string; top: string; delay: number }[]>([])

//   useEffect(() => {
//     const generatedDots = Array.from({ length: 15 }).map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       delay: Math.random() * 2,
//     }))
//     setDots(generatedDots)
//   }, [])

//   return (
//     <motion.div
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.98 }}
//       className="relative max-w-sm bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black text-white border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
//     >
//       {/* 🌸 Pink Dots Background */}
//       {dots.map((dot, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full opacity-30 z-0"
//           initial={{ y: 0 }}
//           animate={{ y: [-10, 10, -10] }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: dot.delay,
//           }}
//           style={{ left: dot.left, top: dot.top }}
//         />
//       ))}

//       {/* 📷 Image */}
//       <Image
//         src="/img/project1.jpg"
//         alt="Project Screenshot"
//         width={400}
//         height={250}
//         className="w-full object-cover h-[200px] z-10 relative"
//       />

//       {/* 📄 Content */}
//       <div className="p-5 relative z-10">
//         <h3 className="text-2xl font-bold text-pink-500 mb-2">Market Place Project</h3>
//         <p className="text-gray-300 mb-4 text-sm leading-relaxed">
//           A dynamic, animated marketplace built with Next.js, TypeScript, and Tailwind CSS.
//         </p>

//         <div className="flex items-center justify-between">
//           <a
//             href="https://amnaaptech-markeplace-hackathon-3-dxg1.vercel.app/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-2 text-sm bg-pink-600 text-white rounded-full hover:bg-pink-500 transition"
//           >
//             View Project
//           </a>

//           <div className="flex gap-3">
//             <a
//               href="https://github.com/amnaaptech"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-pink-500 transition"
//             >
//               <Github className="w-5 h-5" />
//             </a>
//             <a
//               href="https://www.linkedin.com/feed/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-pink-500 transition"
//             >
//               <Linkedin className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default ProjectCard
// 'use client'

// import { Github, Linkedin } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'

// const ProjectCard = () => {
//   const [dots, setDots] = useState<{ left: string; top: string; delay: number }[]>([])

//   useEffect(() => {
//     const generatedDots = Array.from({ length: 25 }).map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       delay: Math.random() * 2,
//     }))
//     setDots(generatedDots)
//   }, [])

//   return (
//     <div className="relative p-4 overflow-hidden rounded-xl bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black shadow-md">
//       {/* 🌸 Floating Pink Dots */}
//       {dots.map((dot, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-2 h-2 bg-pink-400 rounded-full opacity-20"
//           initial={{ y: 0 }}
//           animate={{ y: [-8, 8, -8] }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: dot.delay,
//           }}
//           style={{ top: dot.top, left: dot.left }}
//         />
//       ))}

//       {/* 👇 Actual Card */}
//       <motion.div
//         whileHover={{ scale: 1.03 }}
//         whileTap={{ scale: 0.98 }}
//         className="relative z-10 max-w-sm bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black text-white border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
//       >
//         <Image
//           src="/img/project1.jpg"
//           alt="Project Screenshot"
//           width={400}
//           height={250}
//           className="w-full object-cover h-[200px]"
//         />

//         <div className="p-5">
//           <h3 className="text-2xl font-bold text-pink-500 mb-2">Market Place Project</h3>
//           <p className="text-gray-300 mb-4 text-sm leading-relaxed">
//             A dynamic, animated marketplace built with Next.js, TypeScript, and Tailwind CSS.
//           </p>

//           <div className="flex items-center justify-between">
//             <a
//               href="https://amnaaptech-markeplace-hackathon-3-dxg1.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 text-sm bg-pink-600 text-white rounded-full hover:bg-pink-500 transition"
//             >
//               View Project
//             </a>

//             <div className="flex gap-3">
//               <a
//                 href="https://github.com/amnaaptech"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-pink-500 transition"
//               >
//                 <Github className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/feed/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-pink-500 transition"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default ProjectCard

//is me card rounded nh hai or thk hai code
// 'use client'

// import { Github, Linkedin } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'

// const ProjectCard = () => {
//   const [dots, setDots] = useState<{ left: string; top: string; delay: number }[]>([])

//   useEffect(() => {
//     const generatedDots = Array.from({ length: 25 }).map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       delay: Math.random() * 2,
//     }))
//     setDots(generatedDots)
//   }, [])

//   return (
//     <div className="relative p-4 overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black shadow-md">
//       {/* 🌸 Floating Pink Dots (Background) */}
//       {dots.map((dot, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full opacity-20 z-0"
//           initial={{ y: 0 }}
//           animate={{ y: [-8, 8, -8] }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             ease: 'easeInOut',
//             delay: dot.delay,
//           }}
//           style={{ top: dot.top, left: dot.left }}
//         />
//       ))}

//       {/* 🎯 Actual Card */}
//       <motion.div
//         whileHover={{ scale: 1.03 }}
//         whileTap={{ scale: 0.98 }}
//         className="relative z-10 max-w-sm w-full bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black text-white border border-gray-800 overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
//       >
//         {/* Project Image */}
//         <Image
//           src="/img/project1.jpg"
//           alt="Project Screenshot"
//           width={400}
//           height={250}
//           className="w-full object-cover h-[200px]"
//         />

//         <div className="p-5">
//           <h3 className="text-2xl font-bold text-pink-500 mb-2">Market Place Project</h3>
//           <p className="text-gray-300 mb-4 text-sm leading-relaxed">
//             A dynamic, animated marketplace built with Next.js, TypeScript, and Tailwind CSS.
//           </p>

//           <div className="flex items-center justify-between">
//             <a
//               href="https://amnaaptech-markeplace-hackathon-3-dxg1.vercel.app/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-2 text-sm bg-pink-600 text-white rounded-full hover:bg-pink-500 transition"
//             >
//               View Project
//             </a>

//             <div className="flex gap-3">
//               <a
//                 href="https://github.com/amnaaptech"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-pink-500 transition"
//               >
//                 <Github className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://www.linkedin.com/feed/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-pink-500 transition"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default ProjectCard


// 'use client'

// import { Github, Linkedin } from 'lucide-react'
// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React from 'react'

// const ProjectCard = () => {
//   const projects = [
//     {
//       title: 'Market Place Project',
//       desc: 'A dynamic, animated marketplace built with Next.js, TypeScript, and Tailwind CSS.',
//       image: '/img/project1.jpg',
//       live: 'https://amnaaptech-markeplace-hackathon-3-dxg1.vercel.app/',
//     },
//     {
//       title: 'Portfolio Website',
//       desc: 'A fully animated portfolio made with Framer Motion and Tailwind CSS.',
//       image: '/img/project1.jpg',
//       live: 'https://amnaaptech-portfolio.vercel.app/',
//     },
//     {
//       title: 'Todo App',
//       desc: 'A simple task manager built with React and local storage.',
//       image: '/img/project1.jpg',
//       live: 'https://amnaaptech-todo.vercel.app/',
//     },
//         {
//       title: 'Todo App',
//       desc: 'A simple task manager built with React and local storage.',
//       image: '/img/project1.jpg',
//       live: 'https://amnaaptech-todo.vercel.app/',
//     },
    
//   ]

//   return (
//     <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
//       {projects.map((project, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.98 }}
//           className="relative z-10 w-full sm:w-[80%] md:w-[320px] rounded-xl bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-black text-white border border-gray-800 overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-shadow duration-300"
//         >
//           {/* 🖼️ Image */}
//           <Image
//             src={project.image}
//             alt={project.title}
//             width={400}
//             height={250}
//             className="w-full object-cover h-[200px]"
//           />

//           <div className="p-5">
//             <h3 className="text-2xl font-bold text-pink-500 mb-2">{project.title}</h3>
//             <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.desc}</p>

//             <div className="flex items-center justify-between">
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-4 py-2 text-sm bg-pink-600 text-white rounded-full hover:bg-pink-500 transition"
//               >
//                 View Project
//               </a>

//               <div className="flex gap-3">
//                 <a
//                   href="https://github.com/amnaaptech"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-pink-500 transition"
//                 >
//                   <Github className="w-5 h-5" />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/feed/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-pink-500 transition"
//                 >
//                   <Linkedin className="w-5 h-5" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   )
// }

// export default ProjectCard
'use client'

import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
    </div>
  )
}

export default ProjectCard
