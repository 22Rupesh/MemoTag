"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { MapPin, Brain, Activity, Shield, Smartphone } from "lucide-react"

export default function Solution() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Real-time Location Tracking",
      description: "GPS-enabled wearable device provides precise location monitoring for wandering prevention.",
    },
    {
      icon: <Brain className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Cognitive Assessment",
      description: "AI algorithms analyze daily patterns to detect early signs of cognitive decline.",
    },
    {
      icon: <Activity className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Health Monitoring",
      description: "Tracks vital signs and activity levels to provide comprehensive health insights.",
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Emergency Alerts",
      description: "Immediate notifications for falls, unusual activity, or when patients leave safe zones.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-teal-600 dark:text-teal-400" />,
      title: "Caregiver App",
      description: "Intuitive mobile application for real-time monitoring and historical data analysis.",
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
    <section id="solution" className="py-20 bg-white dark:bg-gray-900">
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
            Our Solution
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            How MemoTag Works
          </motion.h2>
          <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            MemoTag combines wearable technology with advanced AI to provide comprehensive care for dementia patients,
            giving caregivers peace of mind and improving quality of life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="MemoTag Wearable Device"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white">
              The MemoTag Wearable
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
              Our discreet, comfortable wearable device is designed specifically for dementia patients. It combines
              multiple sensors to track location, movement, and vital signs.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6 order-2 lg:order-1"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white">
              AI-Powered Insights
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300">
              Our proprietary AI algorithms analyze data from the wearable device to provide actionable insights for
              caregivers and healthcare professionals.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4">
              {features.slice(3).map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-md bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="MemoTag AI Dashboard"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The MemoTag Difference</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Unlike traditional GPS trackers or medical alert systems, MemoTag provides a comprehensive solution that
              addresses both physical safety and cognitive health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
                  <span className="text-xl font-bold text-teal-600 dark:text-teal-400">1</span>
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Physical Tracking</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Precise location monitoring with geofencing to prevent wandering incidents.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
                  <span className="text-xl font-bold text-teal-600 dark:text-teal-400">2</span>
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Cognitive Monitoring</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                AI analysis of behavior patterns to detect early signs of cognitive changes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
                  <span className="text-xl font-bold text-teal-600 dark:text-teal-400">3</span>
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Caregiver Support</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Comprehensive tools and insights to reduce caregiver burden and improve care quality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
