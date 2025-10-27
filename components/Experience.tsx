'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building2, Award } from 'lucide-react'
import { config } from '@/lib/config'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative"
    >
      <div className="card p-8 relative">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-2">
              {experience.title}
            </h3>
            <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
              <Building2 size={16} className="mr-2" />
              {experience.company}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
              <MapPin size={14} className="mr-2" />
              {experience.location}
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <Calendar size={14} className="mr-2" />
              {experience.period}
            </div>
          </div>
          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
            {experience.type}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experience.description}
        </p>

        <div className="mb-4">
          <h4 className="font-semibold text-dark-800 dark:text-white mb-2">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
            {experience.achievements.map((achievement: string, idx: number) => (
              <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-dark-800 dark:text-white mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-dark-800">
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My professional journey and the experiences that have shaped my career
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-8 mb-16">
            {config.experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white flex items-center">
                <Award className="mr-3 text-primary-600 dark:text-primary-400" size={28} />
                Education
              </h3>
              {config.education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-semibold text-dark-800 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {edu.school}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {edu.location} • {edu.period}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {edu.description}
                  </p>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Additional Programming Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="card p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white flex items-center">
                <Award className="mr-3 text-primary-600 dark:text-primary-400" size={28} />
                Additional Experience
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-dark-800 dark:text-white mb-1">
                    Programming as a Hobby (2011-2015)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    Developed software tools for electronic parts store using C++ and C++ Builder. 
                    Created invoice calculation systems and components counting applications for LED circuits. 
                    Built a Minesweeper game clone as a programming exercise.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {['C++', 'C++ Builder'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-dark-800 dark:text-white mb-1">
                    Continuous Learning (2018 - Present)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    Actively learning and creating projects in free time: Unity 3D games, C#, WPF, 
                    databases, C++, Unreal Engine 5, Flutter & Dart, and web development with React, 
                    Angular, HTML5, CSS3. Also interested in algorithmization, machine learning, Git, 
                    and continuous skill improvement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
