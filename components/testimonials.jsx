"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      quote:
        "MemoTag has completely transformed how I care for my mother. The peace of mind knowing I'll be alerted if she wanders is invaluable.",
      author: "Sarah Johnson",
      role: "Family Caregiver",
    },
    {
      quote:
        "As a geriatric physician, I've seen firsthand how MemoTag improves patient outcomes. The cognitive monitoring provides insights we couldn't get before.",
      author: "Dr. Michael Chen",
      role: "Geriatric Specialist",
    },
    {
      quote:
        "Our memory care facility has implemented MemoTag across all residents, and we've seen a dramatic reduction in wandering incidents and improved staff efficiency.",
      author: "Rebecca Torres",
      role: "Memory Care Director",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 text-sm font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 rounded-full mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            What People Are Saying
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-12"
        >
          <div className="absolute top-8 left-8 text-teal-500 dark:text-teal-400 opacity-20">
            <Quote size={80} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col items-center">
              <div className="mb-8 text-center">
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6">
                  "{testimonials[current].quote}"
                </p>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonials[current].author}</h4>
                <p className="text-gray-600 dark:text-gray-400">{testimonials[current].role}</p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={prev}
                  className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setAutoplay(false)
                        setCurrent(index)
                      }}
                      className={`w-3 h-3 rounded-full ${
                        index === current ? "bg-teal-600 dark:bg-teal-400" : "bg-gray-300 dark:bg-gray-600"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg h-24">
            <span className="text-lg font-medium text-gray-900 dark:text-white text-center">Featured in Forbes</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg h-24">
            <span className="text-lg font-medium text-gray-900 dark:text-white text-center">TechCrunch</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg h-24">
            <span className="text-lg font-medium text-gray-900 dark:text-white text-center">Healthcare Today</span>
          </div>
          <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg h-24">
            <span className="text-lg font-medium text-gray-900 dark:text-white text-center">MedTech Innovation</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
