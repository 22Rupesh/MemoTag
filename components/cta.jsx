"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [email, setEmail] = useState("")
  const [role, setRole] = useState("caregiver")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setEmail("")
    }, 1500)
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Get Started
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Join the MemoTag Community
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Whether you're a caregiver, healthcare professional, or investor, we'd love to connect with you and show you
            how MemoTag can transform dementia care.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Request a Demo or Join Waitlist</h3>

            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
                  <Check className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  We've received your request and will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    I am a:
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="caregiver">Family Caregiver</option>
                    <option value="professional">Healthcare Professional</option>
                    <option value="facility">Care Facility Manager</option>
                    <option value="investor">Investor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors duration-300 ${
                    loading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Submitting..." : "Request Demo"}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">For Caregivers</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Early access to MemoTag technology</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Personalized onboarding and support</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Access to caregiver community and resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">For Healthcare Professionals</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Facility implementation planning</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Staff training and certification</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Integration with existing healthcare systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">For Investors</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Detailed business plan and market analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Current traction and growth projections</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">Direct access to founding team</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
