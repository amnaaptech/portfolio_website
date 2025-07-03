'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-20 text-white">
      {/* 🔸 Heading */}
      <motion.h2
        className="text-4xl font-bold text-center text-pink-500 mb-12  underline-offset-8 decoration-pink-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* 🔸 Content */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
        {/* 👩 Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/img/amna.png"
            alt="Amna"
            width={340}
            height={300}
            className="rounded-xl object-cover w-[380px] h-[240px] border-4 border-pink-500 shadow-lg shadow-pink-500/30"
          />
        </motion.div>

        {/* 👩 Description */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 space-y-4 text-lg"
        >
          <p>
            Hi! I&apos;m <span className="text-pink-400 font-semibold">Amna</span>, a passionate web developer from Karachi, Pakistan.
            I specialize in building dynamic and responsive websites using technologies like PHP, .NET, and React.
          </p>
          <p>
  I love solving problems, creating beautiful UIs, and learning new tools &amp; frameworks. Whether it&apos;s a custom admin panel or an interactive portfolio — 
  I enjoy turning ideas into real-world digital products.
</p>

          <p>
            Currently, I&apos;m focused on sharpening my frontend skills with Next.js and TypeScript, and building creative web projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
