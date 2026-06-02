"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { fadeInUp, staggerContainer, viewportSettings } from "@/lib/animations";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

interface Certification {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  technologies: string[];
  certificateLink?: string;
  inProgress?: boolean;
}

const certifications: Certification[] = [
  {
    id: "giaic",
    name: "Governor Initiative for AI & Cloud Computing",
    title: "Certified Agentic AI & Robotics Engineer",
    description:
      "Completed advanced training in AI, Cloud Computing, and modern technologies. Focused on real-world projects, automation, and scalable applications.",
    icon: <FaAward className="w-6 h-6" />,
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    technologies: ["AI", "Cloud Computing", "Robotics", "Automation"],
    certificateLink: "#",
    inProgress: true,
  },
  {
    id: "smit",
    name: "Saylani Mass IT Training",
    title: "Mobile And Web App Development",
    description:
      "Completed an intensive full-stack program at SMIT, mastering modern technologies like React.js, Node.js, and MongoDB. Developed and deployed scalable, responsive web applications with a focus on seamless user experience and robust backend logic.",
    icon: <FaAward className="w-6 h-6" />,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    technologies: ["React.js", "Node.js", "MongoDB", "Full-Stack"],
    certificateLink: "#",
    inProgress: false,
  },
  {
    id: "college",
    name: "Bahria College Hanif Campus",
    title: "Higher Secondary Education - In Progress",
    description:
      "Currently in the Intermediate (CS), building a strong foundation in computational thinking and programming. Actively exploring software logic and developing beginner-level projects to solve real-world problems while preparing for a Bachelor's in Software Engineering",
    icon: <FaAward className="w-6 h-6" />,
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    technologies: ["Computer Science","Problem Solving", "Logic Building", "Programming"],
    inProgress: true,
  },
  {
    id: "matric",
    name: "Bahria College EAB-II Majeed Campus",
    title: "Matriculation - Computer Science",
    description:
      "Completed Matriculation with a major in Computer Science, building a strong foundation in Mathematics and Logical Reasoning. Developed a keen interest in programming and algorithmic thinking during this period, which laid the groundwork for my transition into Machine Learning and Agentic AI.",
    icon: <FaAward className="w-6 h-6" />,
    gradient: "from-orange-500 via-red-500 to-pink-500",
    technologies: ["Computer Science", "Mathematics", "Programming"],
    inProgress: false,
  },
];

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportSettings}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="h-full" hover={true}>
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
          aria-hidden="true"
        />

        <div className="p-6 sm:p-8">
          {/* Icon Badge */}
          <motion.div
            className={`w-16 h-16 bg-gradient-to-br ${cert.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white">{cert.icon}</div>
          </motion.div>

          {/* Certification Badge */}
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={viewportSettings}
              transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded-full ${
                cert.inProgress
                  ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30"
                  : "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30"
              }`}
            >
              <FaAward className={`w-3.5 h-3.5 ${cert.inProgress ? "text-green-500" : "text-yellow-500"}`} />
              <span className={`text-xs font-semibold ${cert.inProgress ? "text-green-500" : "text-yellow-500"}`}>
                {cert.inProgress ? "In Progress" : "Certified"}
              </span>
            </motion.div>
          </div>

          {/* Organization Name */}
          <p className="text-sm font-medium text-blue-400 mb-2">{cert.name}</p>

          {/* Certification Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
            {cert.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {cert.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies">
            {cert.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportSettings}
                transition={{ delay: techIndex * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                className="px-3 py-1.5 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-lg cursor-default"
                role="listitem"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* View Certificate Button */}
          {cert.certificateLink && (
            <motion.a
              href={cert.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportSettings}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25"
            >
              <span>View Certificate</span>
              <FaExternalLinkAlt className="w-4 h-4" aria-hidden="true" />
            </motion.a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-gray-900/50 relative overflow-hidden"
      aria-labelledby="certifications-heading"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
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
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg shadow-blue-500/25 mx-auto"
            >
              <FaAward className="w-8 h-8 text-white" />
            </motion.div>
            <h2 id="certifications-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Certifications
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications validating my expertise and continuous learning
            </p>
            <div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"
              aria-hidden="true"
            />
          </motion.div>

          {/* Certifications Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
            role="list"
            aria-label="Certification list"
          >
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 text-sm">
              Committed to continuous learning and professional development
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
