'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { config } from '@/lib/config'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C#', level: 95 },
        { name: '.NET', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 75 },
        { name: 'VB.NET', level: 70 },
        { name: 'SQL', level: 85 },
      ]
    },
    {
      title: 'Game Development',
      skills: [
        { name: 'Unity 3D', level: 95 },
        { name: 'Unity VR', level: 90 },
        { name: 'Oculus VR', level: 88 },
        { name: 'C# (Game Dev)', level: 93 },
        { name: 'Unreal Engine 5', level: 70 },
        { name: 'Game Design', level: 85 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Unity UI', level: 92 },
        { name: 'Coherent UI', level: 88 },
        { name: 'Flutter & Dart', level: 75 },
        { name: 'WPF', level: 85 },
        { name: 'Terraform', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'Bamboo', level: 80 },
        { name: 'Oracle SQL', level: 85 },
        { name: 'Perforce', level: 80 },
      ]
    }
  ]

  const SkillBar = ({ name, level, delay = 0 }: { name: string, level: number, delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-dark-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
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
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and expertise across different domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="card p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-dark-800 dark:text-white">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-dark-800 dark:text-white">
              Additional Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'API Integration', 'JSON Parsing', 'Resource Caching', 'Bug Fixing', 
                'Code Refactoring', 'Mentoring', 'Architecture Migration',
                'IoT Technology', 'Algorithmization', 'Machine Learning', 'Code Review',
                'Performance Optimization', 'UI Implementation', 'Enterprise Software'
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
