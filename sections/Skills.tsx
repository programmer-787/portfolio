"use client";

import { motion } from "framer-motion";
import { Card, Section } from "@/components/ui";
import { skillData, tools } from "@/data/config";
import { staggerContainer, viewportSettings } from "@/lib/animations";
import type { Skill } from "@/lib/types";
import { TbBrain } from "react-icons/tb";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaAws, FaDocker, FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiTypescript, SiFirebase,
  SiPostgresql, SiMongodb, SiExpress, SiFastapi,
  SiTensorflow, SiPytorch, SiOpencv, SiRedis, SiGraphql, SiDjango,
} from "react-icons/si";
import { TbRobot, TbBrain as TbBrainIcon, TbApi } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

// Icon mapping for skills
const iconMap: Record<string, React.ReactNode> = {
  // Frontend
  "Next.js": <SiNextdotjs className="w-8 h-8" />,
  "React": <FaReact className="w-8 h-8" />,
  "TypeScript": <SiTypescript className="w-8 h-8" />,
  "Tailwind CSS": <SiTailwindcss className="w-8 h-8" />,
  "HTML5": <FaHtml5 className="w-8 h-8" />,
  "CSS3": <FaCss3Alt className="w-8 h-8" />,
  "JavaScript": <FaJs className="w-8 h-8" />,
  // Backend
  "Node.js": <FaNodeJs className="w-8 h-8" />,
  "Python": <FaPython className="w-8 h-8" />,
  "FastAPI": <SiFastapi className="w-8 h-8" />,
  "Express": <SiExpress className="w-8 h-8" />,
  "Django": <SiDjango className="w-8 h-8" />,
  "PostgreSQL": <SiPostgresql className="w-8 h-8" />,
  "MongoDB": <SiMongodb className="w-8 h-8" />,
  "Firebase": <SiFirebase className="w-8 h-8" />,
  "Redis": <SiRedis className="w-8 h-8" />,
  "GraphQL": <SiGraphql className="w-8 h-8" />,
  "Docker": <FaDocker className="w-8 h-8" />,
  "AWS": <FaAws className="w-8 h-8" />,
  // AI/ML
  "TensorFlow": <SiTensorflow className="w-8 h-8" />,
  "PyTorch": <SiPytorch className="w-8 h-8" />,
  "OpenCV": <SiOpencv className="w-8 h-8" />,
  "AI & Robotics": <TbRobot className="w-8 h-8" />,
  "Machine Learning": <TbBrainIcon className="w-8 h-8" />,
};

// Color mapping for skills
const colorMap: Record<string, string> = {
  "Next.js": "text-white",
  "React": "text-cyan-400",
  "TypeScript": "text-blue-400",
  "Tailwind CSS": "text-cyan-400",
  "HTML5": "text-orange-500",
  "CSS3": "text-blue-500",
  "JavaScript": "text-yellow-400",
  "Node.js": "text-green-500",
  "Python": "text-yellow-400",
  "FastAPI": "text-green-400",
  "Express": "text-gray-400",
  "Django": "text-green-500",
  "PostgreSQL": "text-blue-400",
  "MongoDB": "text-green-500",
  "Firebase": "text-yellow-500",
  "Redis": "text-red-500",
  "GraphQL": "text-pink-500",
  "Docker": "text-blue-400",
  "AWS": "text-orange-400",
  "TensorFlow": "text-orange-500",
  "PyTorch": "text-red-500",
  "OpenCV": "text-purple-400",
  "AI & Robotics": "text-cyan-400",
  "Machine Learning": "text-green-400",
};

// Category icon mapping
const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <SiNextdotjs className="w-6 h-6" />,
  Backend: <TbApi className="w-6 h-6" />,
  "AI/ML": <GiArtificialIntelligence className="w-6 h-6" />,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportSettings}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500`} aria-hidden="true" />
      
      <Card className="p-6 group-hover:border-gray-500" hover={false}>
        <motion.div
          className={`mb-4 ${skill.color}`}
          whileHover={{ rotate: 360, scale: 1.15 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {skill.icon}
        </motion.div>

        <h3 className="text-white font-semibold mb-3">{skill.name}</h3>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Proficiency</span>
            <motion.span
              className="text-gray-300 font-medium"
              whileHover={{ scale: 1.2, color: "#60a5fa" }}
            >
              {skill.level}%
            </motion.span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full relative`}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={viewportSettings}
              transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                aria-hidden="true"
              />
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full blur-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      description="A comprehensive toolkit built over years of hands-on experience"
      icon={<TbBrain className="w-8 h-8 text-white" />}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        className="space-y-16"
      >
        {Object.entries(skillData).map(([categoryName, skills], categoryIndex) => (
          <motion.div
            key={categoryName}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            {/* Category Header */}
            <motion.div
              className="flex items-center gap-4 mb-8"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                {categoryIcons[categoryName]}
              </motion.div>
              <h3 className="text-2xl font-bold text-white">{categoryName}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent" aria-hidden="true" />
            </motion.div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skills.map((skillData, skillIndex) => {
                const skill: Skill = {
                  ...skillData,
                  color: colorMap[skillData.name] || "text-gray-400",
                  icon: iconMap[skillData.name] || <TbBrainIcon className="w-8 h-8" />,
                };
                return <SkillCard key={skill.name} skill={skill} index={skillIndex} />;
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportSettings}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <div className="text-center mb-8">
          <motion.h3
            className="text-xl font-semibold text-white mb-2"
            whileHover={{ scale: 1.05 }}
          >
            Tools & Technologies
          </motion.h3>
          <p className="text-gray-500">Other technologies I work with</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, index) => (
            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportSettings}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -5, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-sm hover:border-blue-500/50 hover:text-white transition-all cursor-default"
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
