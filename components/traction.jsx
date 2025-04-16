"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { TrendingUp, Users, Building, Award } from "lucide-react"

export default function Traction() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      value: "5,000+",
      label: "Pre-orders",
      description: "From caregivers and healthcare facilities",
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      value: "98%",
      label: "Satisfaction rate",
      description: "From our beta testing program",
    },
    {
      icon: <Building className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      value: "12",
      label: "Healthcare partners",
      description: "Including major memory care facilities",
    },
    {
      icon: <Award className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      value: "3",
      label: "Industry awards",
      description: "For innovation in healthcare technology",
    },
  ]

  const partners = [
    "Memorial Healthcare",
    "Sunrise Senior Living",
    "Alzheimer's Association",
    "Mayo Clinic",
    "Cleveland Clinic",
    "Johns Hopkins",
  ]

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
    <section id="traction" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 text-sm font-medium text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 rounded-full mb-4"
          >
            Our Traction
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Making a Real Impact
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            MemoTag is already transforming dementia care with proven results and strong partnerships across the
            healthcare industry.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4 mx-auto">
                {metric.icon}
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{metric.value}</h3>
                <h4 className="text-lg font-medium text-teal-600 dark:text-teal-400 mb-2">{metric.label}</h4>
                <p className="text-gray-600 dark:text-gray-300">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Healthcare Partners
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg h-24"
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-white text-center">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Real Results</h3>
            <p className="text-lg mb-8">
              In our clinical trials, MemoTag has demonstrated significant improvements in patient outcomes and
              caregiver experience:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-3xl font-bold mb-2">85%</h4>
                <p>Reduction in wandering incidents</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-3xl font-bold mb-2">73%</h4>
                <p>Decrease in caregiver stress levels</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-3xl font-bold mb-2">62%</h4>
                <p>Improvement in early intervention rates</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
