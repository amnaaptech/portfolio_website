// // import Image from "next/image";
// import Hero from "./components/hero";
// import ProjectCard from "./components/Projects";

// export default function Home() {
//   return (
//     <main className="bg-white text-gray-900">
//       <Hero />
//      <ProjectCard />
//       <Navbar />
//       <Skills />
//       <Contact />
//       <Footer /> 
//     </main>
//   );
// }


'use client'

import Hero from "./components/hero";
import  Skills from "./components/Skills";
import ProjectsCard from './components/ProjectsCards'
import TestimonialsSlider from './components/Testimonials'
import Contact from './components/Contact'
import About from './components/About'
import ServicesSection from "./components/Services";
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [dots, setDots] = useState<{ left: string; top: string; delay: number }[]>([])

  useEffect(() => {
    const generatedDots = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 200}%`, // 👈 adjust based on scroll height
      delay: Math.random() * 2,
    }))
    setDots(generatedDots)
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white">
      {/* 🌸 Global Pink Dots Background */}
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full opacity-20 z-0"
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: dot.delay,
          }}
          style={{ left: dot.left, top: dot.top }}
        />
      ))}

      {/* 💫 All Sections */}
      <div className="relative z-10">
        <Hero />
        <Skills/>
    <ServicesSection/>
        <ProjectsCard />
        <About/>
        <Contact/>
        <TestimonialsSlider/>
      

      </div>
    </div>
  )
}
