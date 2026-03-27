"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";

const skills = [
  { name: "Next.js", level: 95, color: "from-gray-700 to-gray-900" },
  { name: "Tailwind CSS", level: 90, color: "from-cyan-500 to-blue-500" },
  { name: "Firebase", level: 85, color: "from-yellow-500 to-orange-500" },
  { name: "Python", level: 88, color: "from-blue-500 to-yellow-500" },
  { name: "AI & Robotics", level: 82, color: "from-purple-500 to-pink-500" },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={viewportSettings}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg shadow-blue-500/25"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportSettings}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportSettings}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Hi, I&apos;m Muhammad Faizan
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  A passionate Full Stack Developer and AI Engineer with a knack for 
                  creating elegant solutions to complex problems. I bridge the gap 
                  between cutting-edge AI technology and user-centric web applications.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  My approach combines technical expertise with a deep understanding 
                  of UI/UX principles. I believe that great software isn&apos;t just 
                  about clean code—it&apos;s about creating intuitive experiences 
                  that solve real-world problems.
                </p>
              </motion.div>

              {/* Focus Areas */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ),
                    title: "Problem Solving",
                    desc: "Breaking down complex challenges",
                    color: "blue",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    ),
                    title: "UI/UX Design",
                    desc: "Creating intuitive experiences",
                    color: "purple",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl cursor-pointer hover:border-white/20 transition-colors"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className={`w-10 h-10 bg-${item.color}-500/20 rounded-lg flex items-center justify-center mb-3 text-${item.color}-400`}
                    >
                      {item.icon}
                    </motion.div>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Skills & Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportSettings}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Animated Illustration */}
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Animated circles */}
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-8 border-2 border-purple-500/20 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute inset-16 border-2 border-cyan-500/20 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 cursor-pointer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Floating skill badges */}
                  {[
                    { emoji: "⚛️", pos: "top-0 right-0", delay: 0 },
                    { emoji: "🤖", pos: "bottom-0 left-0", delay: 0.5 },
                    { emoji: "🎨", pos: "top-0 left-0", delay: 1 },
                    { emoji: "🚀", pos: "bottom-0 right-0", delay: 1.5 },
                  ].map((badge, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${badge.pos} w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center cursor-pointer`}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: badge.delay }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <span className="text-xl">{badge.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                <motion.h4
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewportSettings}
                  className="text-xl font-semibold text-white text-center"
                >
                  Technical Skills
                </motion.h4>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportSettings}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <motion.span
                          className="text-gray-500 text-sm"
                          whileHover={{ color: "#60a5fa", scale: 1.1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={viewportSettings}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
