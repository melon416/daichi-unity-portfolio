'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Gamepad2, Award, Users } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { icon: Award, label: 'Years Experience', value: '6+' },
    { icon: Gamepad2, label: 'VR Projects', value: '10+' },
    { icon: Code, label: 'Technologies Mastered', value: '15+' },
    { icon: Users, label: 'Years in Industry', value: '6+' },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get to know more about my background, passion, and what drives me as a developer
            </p>
          </div>

          <div className="mb-16">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-3xl font-bold mb-6 text-dark-800 dark:text-white">
                Experienced Unity & UI Game Developer
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I&apos;m an experienced UI Game Developer Engineer with over 6 years of experience 
                  creating innovative digital solutions. Currently working on implementing Coherent UI 
                  into the Oculus VR version of Civilization VII - a complex enterprise-scale integration 
                  never done before.
                </p>
                <p>
                  I specialize in Unity, C#, .NET framework, VR development, and modern web technologies 
                  including TypeScript, HTML, and CSS. My passion lies in creating immersive VR experiences 
                  and pushing the boundaries of what&apos;s possible in game development.
                </p>
                <p>
                  With experience ranging from Oracle-Netsuite development to Unity VR projects at Sense 
                  Arena, and now advanced VR UI development at Grip Studios, I bring a wealth of 
                  knowledge in both enterprise software and cutting-edge game development.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary-600 dark:text-primary-400" size={32} />
                </div>
                <div className="text-3xl font-bold text-dark-800 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
