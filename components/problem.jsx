"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, Clock, Users, AlertTriangle } from "lucide-react"

export default function Problem() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: <Brain className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      value: "55M+",
      label: "People living with dementia worldwide",
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      value: "60%",
      label: "Of cases go undiagnosed in early stages",
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      value: "250M",
      label: "Family caregivers affected globally",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      value: "70%",
      label: "Of wandering incidents can lead to serious harm",
    },
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
    <section id="problem" className="py-20 bg-gray-50 dark:bg-gray-800">
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
            The Challenge
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Understanding the Dementia Crisis
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Dementia affects millions worldwide, creating immense challenges for patients, caregivers, and healthcare
            systems. Early detection and continuous monitoring are critical but often lacking.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Diagnosis Gap</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Most dementia cases are diagnosed in late stages when intervention is less effective. Early detection
                can significantly improve outcomes and quality of life.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <span className="h-4 w-4 text-teal-600 dark:text-teal-400">•</span>
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Average delay of 2-3 years from symptom onset to diagnosis
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <span className="h-4 w-4 text-teal-600 dark:text-teal-400">•</span>
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Lack of continuous monitoring tools for at-home care
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-3">
                    <span className="h-4 w-4 text-teal-600 dark:text-teal-400">•</span>
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Caregiver burnout due to 24/7 supervision requirements
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 dark:bg-teal-800 mb-4">
                  <Brain className="w-10 h-10 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Early Detection Matters</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Early intervention can slow progression by up to 30% and significantly improve quality of life for
                  patients and caregivers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
