


// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React from 'react'
// import Typewriter, { Options } from 'typewriter-effect'

// const Hero = () => {
//   const typewriterOptions = {
//   strings: [
//     `<span style="color: #a78bfa">PHP Developer</span>`,
//     `<span style="color: #d9a7c7">Dot Net Developer</span>`,
//     `<span style="color: #ffdde1">Frontend Enthusiast</span>`,
//   ],
//   autoStart: true,
//   loop: true,
//   delay: 75,
//   deleteSpeed: 50,
//   html: true,
// } as unknown as Options

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-2 md:gap-x-5 px-6 md:px-16 pt-2 md:pt-4 pb-6 md:pb-8 text-white"
//     >
//       {/* 🔆 Background Glow */}
//       <div className="absolute -z-10 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px] opacity-20 top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2" />

//       {/* 👩 Left: Intro */}
//       <div className="flex-1 space-y-5 text-center md:text-left">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_2px_6px_rgba(236,72,153,0.6)]"
//         >
//           Hi, I&apos;m Amna
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-2xl md:text-3xl font-medium"
//         >
//           <Typewriter options={typewriterOptions} />
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.1, x: 10 }}
//           className="flex justify-center md:justify-start"
//         >
//           <a
//             href="/img/Amnacv.pdf"
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
//           width={320}
//           height={320}
//           className="rounded-full object-cover border-4 border-pink-500 shadow-lg shadow-pink-500/40 w-[270px] h-[270px] md:w-[340px] md:h-[340px]"
//         />
//       </motion.div>
//     </section>
//   )
// }

// export default Hero



// 'use client'

// import { motion } from 'framer-motion'
// import Image from 'next/image'
// import React from 'react'
// import Typewriter, { Options } from 'typewriter-effect'

// const Hero = () => {
//   const typewriterOptions = {
//     strings: [
//       `<span style="color: #a78bfa">PHP Developer</span>`,
//       `<span style="color: #d9a7c7">Dot Net Developer</span>`,
//       `<span style="color: #ffdde1">Frontend Enthusiast</span>`,
//     ],
//     autoStart: true,
//     loop: true,
//     delay: 75,
//     deleteSpeed: 50,
//     html: true,
//   } as unknown as Options

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-2 md:gap-x-5 px-6 md:px-16 pt-2 md:pt-4 pb-6 md:pb-8 text-white"
//     >
//       {/* ✅ Pink Glow Background with Shadow & Blur */}
//       <div
//         className="absolute -z-10 
//           w-[400px] h-[400px] md:w-[520px] md:h-[520px] 
//           sm:w-[520px] sm:h-[520px] 
//           bg-pink-500 rounded-full 
//           blur-[160px] 
//           opacity-20
//           shadow-[0_0_100px_40px_rgba(236,72,153,0.3)] 
//           top-1/2 left-1/2 md:top-[35%] md:left-[30%] 
//           -translate-x-1/2 -translate-y-1/2"
//       />

//       {/* 👩 Left: Intro */}
//       <div className="flex-1 space-y-5 text-center md:text-left">
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_2px_6px_rgba(236,72,153,0.6)]"
//         >
//           Hi, I&apos;m Amna
//         </motion.h1>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-2xl md:text-3xl font-medium"
//         >
//           <Typewriter options={typewriterOptions} />
//         </motion.div>

//         <motion.div
//           whileHover={{ scale: 1.1, x: 10 }}
//           className="flex justify-center md:justify-start"
//         >
//           <a
//             href="/img/Amnacv.pdf"
//             download
//             className="mt-3 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/40 hover:bg-pink-500 transition duration-300"
//           >
//             Download CV
//           </a>
//         </motion.div>
//       </div>

//       {/* 👧 Right: Profile Image */}
// <motion.div
//   className="flex-1 flex justify-center mt-5 md:mt-0 relative"
//   // initial={{ opacity: 0, scale: 0.9 }}
//   animate={{
//     opacity: 1,
//     scale: 1,
//     y: [0, -20, 0, 20, 0]
//   }}
//   transition={{
//     duration: 6,
//     repeat: Infinity,
//     ease: "linear"
//   }}
// >
//   {/* 🔴 Animated Glowing Shadow */}
//   <motion.div
//     className="absolute bottom-0 w-56 h-5 rounded-full bg-pink-500 blur-2xl opacity-40 z-0"
//     animate={{
//       opacity: [0.2, 0.4, 0.2],
//       scale: [1, 1.1, 1],
//     }}
//     transition={{
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut"
//     }}
//   />

//   {/* 👧 Floating Image */}
//   <Image
//     src="/img/amna.png"
//     alt="Amna"
//     width={320}
//     height={320}
//     className="relative z-10 rounded-full object-cover border-4 border-pink-500 shadow-lg shadow-pink-500/40 w-[270px] h-[270px] md:w-[340px] md:h-[340px]"
//   />
// </motion.div>


//     </section>
//   )
// }

// export default Hero



//new code
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Typewriter, { Options } from 'typewriter-effect'

const Hero = () => {
  const typewriterOptions = {
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
  } as unknown as Options

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-x-2 md:gap-x-5 px-6 md:px-16 pt-2 md:pt-4 pb-6 md:pb-8 text-white overflow-hidden"
    >
      {/* ✅ Glow Background Behind Whole Section */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-pink-500 blur-3xl opacity-30" />
      </div>

      {/* 👩 Left: Intro */}
      <div className="flex-1 space-y-5 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-pink-500 drop-shadow-[0_2px_6px_rgba(236,72,153,0.6)]"
        >
          Hi, I&apos;m Amna
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl md:text-3xl font-medium"
        >
          <Typewriter options={typewriterOptions} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, x: 10 }}
          className="flex justify-center md:justify-start"
        >
          <a
            href="/img/Amnacv.pdf"
            download
            className="mt-3 px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/40 hover:bg-pink-500 transition duration-300"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* 👧 Right: Floating Profile Image + Glow */}
      <motion.div
        className="flex-1 flex justify-center mt-5 md:mt-0 relative"
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -20, 0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* 🔴 Glow Under Image */}
        <motion.div
          className="absolute bottom-0 w-56 h-5 rounded-full bg-pink-500 blur-2xl opacity-40 z-0"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* 👧 Profile Image */}
        <Image
          src="/img/amna.png"
          alt="Amna"
          width={320}
          height={320}
          className="relative z-10 rounded-full object-cover border-4 border-pink-500 shadow-lg shadow-pink-500/40 w-[270px] h-[270px] md:w-[340px] md:h-[340px]"
        />
      </motion.div>
    </section>
  )
}

export default Hero
