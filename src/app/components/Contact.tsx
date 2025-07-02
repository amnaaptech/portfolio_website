'use client'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 text-white">
      <h2 className="text-4xl font-bold text-center text-pink-500 mb-12  underline-offset-8 decoration-pink-500">
        Contact Me
      </h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <div>
          <label className="block mb-1 text-sm text-gray-300">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-300">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-300">Message</label>
          <textarea
            placeholder="Type your message..."
            rows={5}
            className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-500 transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  )
}

export default Contact
