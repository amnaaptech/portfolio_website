


'use client'

import { useState, useEffect, TouchEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sadan',
    feedback: 'Amna delivered my project before the deadline. Highly recommended for clean, professional frontend work!',
    stars: 5,
  },
  {
    name: 'Sarah Khan',
    feedback: 'The admin panel was dynamic and easy to use. Thank you for your dedication and support!',
    stars: 5,
  },
  {
    name: 'Syed Saad',
    feedback: 'Amazing UI skills and great communication. I’ll hire her again for sure.',
    stars: 5,
  },
]

const TestimonialsSlider = () => {
  const [index, setIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => next(), 5000)
    return () => clearInterval(timer)
  }, [])

  // Swipe handlers
  const handleTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX

    if (diff > 50) next() // swipe left
    if (diff < -50) prev() // swipe right

    setTouchStartX(null)
  }

  return (
    <section id="testimonials" className="py-20 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-pink-500">Client Testimonials</h2>

      <div className="relative max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="bg-[#111111] text-white p-8 rounded-xl border border-pink-500/30 shadow-lg"
          >
           
<p className="italic text-gray-300 mb-4">
  <span className="text-pink-400 text-xl">&ldquo;</span>
  {testimonials[index].feedback}
  <span className="text-pink-400 text-xl">&rdquo;</span>
</p>


            <div className="flex items-center gap-2 mb-2">
              {[...Array(testimonials[index].stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-pink-400 font-semibold">{testimonials[index].name}</p>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="p-2 rounded-full border border-pink-500 text-pink-400 hover:bg-pink-600 hover:text-white transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSlider
