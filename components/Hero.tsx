'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download } from 'lucide-react'
import Image from 'next/image'
import { config } from '@/lib/config'

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-white dark:from-dark-900 dark:to-dark-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230ea5e9%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">{config.personal.name}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-dark-700 dark:text-gray-300 mb-4">
                {config.personal.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                {config.personal.bio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get In Touch
              </a>
              <a
                href={config.assets.resume}
                download
                className="btn-secondary inline-flex items-center justify-center"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Subtle Background Glow */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 blur-3xl bg-gradient-to-br from-primary-500/30 via-primary-400/20 to-primary-600/30 rounded-full" />
              </motion.div>

              {/* Main Profile Frame */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                {/* Outer Glass Frame */}
                <div className="absolute inset-0 rounded-full border-4 border-primary-500/20 dark:border-primary-400/20 backdrop-blur-sm bg-white/5 dark:bg-white/5 shadow-2xl" />
                
                {/* Inner Glow Ring */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent, rgba(14, 165, 233, 0.2), transparent, rgba(59, 130, 246, 0.2), transparent)',
                  }}
                />

                {/* Middle Glow Ring - Counter Rotating */}
                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-2 rounded-full"
                  style={{
                    background: 'conic-gradient(from 180deg, transparent, rgba(168, 85, 247, 0.15), transparent, rgba(59, 130, 246, 0.15), transparent)',
                  }}
                />

                {/* Profile Image Container */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-primary-50 to-white dark:from-dark-800 dark:to-dark-900 shadow-inner">
                  <div className="relative w-full h-full p-2">
                    {config.assets.avatar ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative w-full h-full rounded-full overflow-hidden"
                      >
                        <img 
                          src={config.assets.avatar} 
                          alt={config.personal.name} 
                          className="w-full h-full object-cover"
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10" />
                      </motion.div>
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center">
                        <div className="text-6xl font-bold text-white drop-shadow-2xl">
                          {config.personal.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Corner Decorative Elements */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary-500/30 rounded-tl-full" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary-500/30 rounded-tr-full" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary-500/30 rounded-bl-full" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary-500/30 rounded-br-full" />

                {/* Pulsing Center Dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary-500 rounded-full shadow-lg"
                />
              </motion.div>

              {/* Floating Achievement Badges */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-primary-600 to-primary-700 text-white px-4 py-2 rounded-full shadow-xl border-2 border-white dark:border-dark-800"
              >
                <div className="text-xs font-semibold">6+ Years</div>
                <div className="text-xs opacity-80">Experience</div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 3, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: 1.5,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full shadow-xl border-2 border-white dark:border-dark-800"
              >
                <div className="text-xs font-semibold">Unity</div>
                <div className="text-xs opacity-80">Expert</div>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  y: [-10, 0, -10],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: 0.7,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 -left-8 bg-white dark:bg-dark-800 text-primary-600 dark:text-primary-400 px-3 py-2 rounded-lg shadow-lg border border-primary-200 dark:border-primary-900"
              >
                <div className="text-xs font-bold">C# Developer</div>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, -10, 0],
                  y: [10, 0, 10],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: 2,
                  ease: "easeInOut"
                }}
                className="absolute bottom-1/4 -right-8 bg-white dark:bg-dark-800 text-primary-600 dark:text-primary-400 px-3 py-2 rounded-lg shadow-lg border border-primary-200 dark:border-primary-900"
              >
                <div className="text-xs font-bold">VR Specialist</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToNext}
          className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
