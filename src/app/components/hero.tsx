
// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React from 'react'
// import Typewriter from 'typewriter-effect'

// const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-x-12 px-6 md:px-16 py-12 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white overflow-hidden"
//     >
//       {/* 🔆 Background Glow Layer */}
//       <div className="absolute -z-10 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-20 top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />

//       {/* Left: Animated Text */}
//       <div className="flex-1 space-y-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_2px_6px_rgba(236,72,153,0.6)]"
//         >
//           Hi, I'm Amna
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-2xl md:text-3xl font-medium text-cyan-400"
//         >
//           <Typewriter
//             options={{
//               strings: ['PHP Developer', 'Dot Net Developer', 'Frontend Enthusiast'],
//               autoStart: true,
//               loop: true,
//               delay: 75,
//               deleteSpeed: 50,
//             }}
//           />
//         </motion.div>

//         <motion.a
//           href="/Amna_CV.pdf"
//           download
//           whileHover={{ scale: 1.1 }}
//           className="inline-block mt-4 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/40 hover:bg-pink-500 transition duration-300"
//         >
//           Download CV
//         </motion.a>
//       </div>

//       {/* Right: Profile Image */}
//       <motion.div
//         className="flex-1 mt-5 md:mt-0 flex justify-center"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Image
//           src="/amna.png"
//           alt="Amna"
//           width={280}
//           height={280}
//           className="rounded-full border-4 border-pink-500 shadow-lg shadow-pink-500/40"
//         />
//       </motion.div>
//     </section>
//   )
// }

// export default Hero



// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import Typewriter from 'typewriter-effect'

// const Hero = () => {
//   const [dots, setDots] = useState<
//     { left: string; top: string; delay: number }[]
//   >([])

//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true) // Safe rendering on client only

//     // Generate random dots (client-side only)
//     const generatedDots = Array.from({ length: 20 }).map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       delay: Math.random() * 2,
//     }))
//     setDots(generatedDots)
//   }, [])

//   return (
//     <section
//       id="hero"
//       // className="relative min-h-screen flex flex-col md:flex-row items-center justify-between gap-x-12 px-6 md:px-16 pt-4 pb-6 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white overflow-hidden"

//        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-6 md:gap-x-12 px-6 md:px-16 py-8 md:py-12 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white overflow-hidden"
//     >
//       {/* 🔆 Background Glow */}
//       <div className="absolute -z-10 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-20 top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />

//       {/* ✨ Animated Floating Dots */}
//       {isClient &&
//         dots.map((dot, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-pink-400 rounded-full z-0"
//             initial={{ y: 0, opacity: 0.3 }}
//             animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: 'easeInOut',
//               delay: dot.delay,
//             }}
//             style={{ left: dot.left, top: dot.top }}
//           />
//         ))}

//       {/* 👩 Left: Intro */}
//       {/* <div className="flex-1 space-y-6">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_2px_6px_rgba(236,72,153,0.6)]"
//         >
//           Hi, I'm Amna
//         </motion.h1>

//         {/* 📝 Typewriter Animation */}
//         {/* {isClient && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-2xl md:text-3xl font-medium"
//           >
//             <Typewriter
//               options={{
//                 strings: [
//                   `<span style="color: #a78bfa">PHP Developer</span>`,
//                   `<span style="color: #d9a7c7">Dot Net Developer</span>`,
//                   `<span style="color:
//  #ffdde1
// ">Frontend Enthusiast</span>`,
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 75,
//                 deleteSpeed: 50,
//                 html: true,
//               }as any }
//             />
//           </motion.div>
//         )} */}

//         {/* <motion.a
//           href="/Amna_CV.pdf"
//           download
//           whileHover={{ scale: 1.1 }}
//           className="inline-block mt-4 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/40 hover:bg-pink-500 transition duration-300"
//         >
//           Download CV
//         </motion.a>
//       </div>

//       {/* 👧 Right: Profile Image */}
//       {/* <motion.div
//         className="flex-1 flex justify-center"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Image
//           src="/amna.png"
//           alt="Amna"
//           width={280}
//           height={280}
//           className="rounded-full border-4 border-pink-500 shadow-lg shadow-pink-500/40"
//         /> 
//       </motion.div>  */}



//       {/* 👩 Left: Intro */}
// <div className="flex-1 space-y-6 text-center md:text-left">
//   <motion.h1
//     initial={{ opacity: 0, y: -30 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_2px_6px_rgba(236,72,153,0.6)]"
//   >
//     Hi, I'm Amna
//   </motion.h1>

//   {/* 📝 Typewriter Animation */}
//   {isClient && (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5 }}
//       className="text-2xl md:text-3xl font-medium"
//     >
//       <Typewriter
//         options={{
//           strings: [
//             `<span style="color: #a78bfa">PHP Developer</span>`,
//             `<span style="color: #d9a7c7">Dot Net Developer</span>`,
//             `<span style="color: #ffdde1">Frontend Enthusiast</span>`,
//           ],
//           autoStart: true,
//           loop: true,
//           delay: 75,
//           deleteSpeed: 50,
//           html: true,
//         } as any}
//       />
//     </motion.div>
//   )}

//   {/* ✅ Centered Button on Small Screens */}
//   <motion.div
//     whileHover={{ scale: 1.1 }}
//     className="flex justify-center md:justify-start"
//   >
//     <a
//       href="/Amna_CV.pdf"
//       download
//       className="mt-4 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/40 hover:bg-pink-500 transition duration-300"
//     >
//       Download CV
//     </a>
//   </motion.div>
// </div>

// {/* 👧 Right: Profile Image */}
// <motion.div
//   className="flex-1 flex justify-center mt-8 md:mt-0"
//   initial={{ opacity: 0, scale: 0.8 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ duration: 0.5 }}
// >
//   <Image
//     src="/amna.png"
//     alt="Amna"
//     width={280}
//     height={280}
//     className="rounded-full object-cover border-4 border-pink-500 shadow-lg shadow-pink-500/40 w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
//   />
// </motion.div>

//     </section>
//   )
// }

// export default Hero


///just container line isssue 
// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'
// import Typewriter from 'typewriter-effect'

// const Hero = () => {
//   const [dots, setDots] = useState<{ left: string; top: string; delay: number }[]>([])
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//     const generatedDots = Array.from({ length: 20 }).map(() => ({
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//       delay: Math.random() * 2,
//     }))
//     setDots(generatedDots)
//   }, [])

//   return (
//     <section
//       id="hero"
//       // className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-4 md:gap-x-8 px-6 md:px-16 py-6 md:py-10 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white overflow-hidden"
//        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-2 md:gap-x-5 px-6 md:px-16 pt-2 md:pt-4 pb-6 md:pb-8 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white overflow-hidden"
// >
    
//       {/* 🔆 Background Glow */}
//       <div className="absolute -z-10 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-20 top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />

//       {/* ✨ Animated Floating Dots */}
//       {isClient &&
//         dots.map((dot, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-pink-400 rounded-full z-0"
//             initial={{ y: 0, opacity: 0.3 }}
//             animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: 'easeInOut',
//               delay: dot.delay,
//             }}
//             style={{ left: dot.left, top: dot.top }}
//           />
//         ))}

//       {/* 👩 Left: Intro */}
//       <div className="flex-1 space-y-5 text-center md:text-left">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_2px_6px_rgba(236,72,153,0.6)]"
//         >
//           Hi, I'm Amna
//         </motion.h1>

//         {isClient && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-2xl md:text-3xl font-medium"
//           >
//             <Typewriter
//               options={{
//                 strings: [
//                   `<span style="color: #a78bfa">PHP Developer</span>`,
//                   `<span style="color: #d9a7c7">Dot Net Developer</span>`,
//                   `<span style="color: #ffdde1">Frontend Enthusiast</span>`,
//                 ],
//                 autoStart: true,
//                 loop: true,
//                 delay: 75,
//                 deleteSpeed: 50,
//                 html: true,
//               } as any}
//             />
//           </motion.div>
//         )}

//         <motion.div
//            whileHover={{ scale: 1.1, x: 10 }}
//           className="flex justify-center md:justify-start"
//         >
//           <a
//             href="/img/Amna_CV.pdf"
//             download
//             className="mt-3 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/40 hover:bg-pink-500 transition duration-300"
//           >
//             Download CV
//           </a>
//         </motion.div>
//       </div>

//       {/* 👧 Right: Profile Image */}
//       <motion.div
//         className="flex-1 flex justify-center mt-5 md:mt-0"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Image
//           src="/img/amna.png"
//           alt="Amna"
//           width={280}
//           height={280}
//           className="rounded-full object-cover border-4 border-pink-500 shadow-lg shadow-pink-500/40 w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
//         />
//       </motion.div>
//     </section>
//   )
// }

// export default Hero

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-2 md:gap-x-5 px-6 md:px-16 pt-2 md:pt-4 pb-6 md:pb-8 text-white"
    >
      {/* 🔆 Background Glow (keep this if you want glow only) */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-20 top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />

      {/* 👩 Left: Intro */}
      <div className="flex-1 space-y-5 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_2px_6px_rgba(236,72,153,0.6)]"
        >
          Hi, I'm Amna
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-medium"
        >
          <Typewriter
            options={{
              strings: [
                `<span style="color: #a78bfa">PHP Developer</span>`,
                `<span style="color: #d9a7c7">Dot Net Developer</span>`,
                `<span style="color: #ffdde1">Frontend Enthusiast</span>`,
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              html: true,
            } as any}
          />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, x: 10 }}
          className="flex justify-center md:justify-start"
        >
          <a
            href="/img/Amna_CV.pdf"
            download
            className="mt-3 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/40 hover:bg-pink-500 transition duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* 👧 Right: Profile Image */}
      <motion.div
        className="flex-1 flex justify-center mt-5 md:mt-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* <Image
          src="/img/amna.png"
          alt="Amna"
          width={280}
          height={280}
          className="rounded-full object-cover border-4 border-pink-500 shadow-lg shadow-pink-500/40 w-[220px] h-[220px] md:w-[280px] md:h-[280px]"
        /> */}

        <Image
  src="/img/amna.png"
  alt="Amna"
  width={320}
  height={320}
  className="rounded-full object-cover border-4 border-pink-500 shadow-lg shadow-pink-500/40 w-[270px] h-[270px] md:w-[340px] md:h-[340px]"
/>

      </motion.div>
    </section>
  )
}

export default Hero
