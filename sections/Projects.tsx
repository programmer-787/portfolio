"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { TbRobot, TbWorld } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { staggerContainer, fadeInUp, viewportSettings } from "@/lib/animations";

interface Project {
  title: string;
  description: string;
  image: string;
  gradient: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "AI-Powered E-Commerce Platform",
    description: "Full-stack e-commerce solution with AI-driven product recommendations and personalized shopping experiences.",
    image: "/projects/ecommerce.jpg",
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "TensorFlow", "Stripe"],
    liveLink: "https://demo-ecommerce.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/ecommerce-ai",
    featured: true,
  },
  {
    title: "Smart Healthcare Dashboard",
    description: "Real-time patient monitoring system with predictive analytics for early disease detection.",
    image: "/projects/healthcare.jpg",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    technologies: ["React", "Python", "FastAPI", "MongoDB", "PyTorch"],
    liveLink: "https://healthcare-demo.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/healthcare-dashboard",
    featured: true,
  },
  {
    title: "Robotics Control System",
    description: "Web-based interface for controlling and monitoring autonomous robots in real-time.",
    image: "/projects/robotics.jpg",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    technologies: ["Next.js", "WebSocket", "Python", "OpenCV", "ROS"],
    liveLink: "https://robotics-control.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/robotics-control",
    featured: true,
  },
  {
    title: "Portfolio Generator AI",
    description: "AI-powered tool that generates professional portfolios from user input and career data.",
    image: "/projects/portfolio-ai.jpg",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    technologies: ["React", "TypeScript", "Firebase", "OpenAI API", "Tailwind"],
    liveLink: "https://portfolio-generator.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/portfolio-generator",
    featured: false,
  },
  {
    title: "Real-Time Collaboration Tool",
    description: "Team collaboration platform with video conferencing, screen sharing, and document editing.",
    image: "/projects/collab.jpg",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    technologies: ["Next.js", "WebRTC", "Socket.io", "Redis", "AWS"],
    liveLink: "https://collab-tool.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/collab-tool",
    featured: false,
  },
  {
    title: "Financial Analytics Platform",
    description: "Advanced financial data visualization with predictive market analysis using machine learning.",
    image: "/projects/fintech.jpg",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    technologies: ["React", "Python", "Django", "PostgreSQL", "TensorFlow"],
    liveLink: "https://fintech-analytics.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/fintech-platform",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportSettings}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group"
      aria-labelledby={`project-title-${index}`}
    >
      <div className="relative h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-gray-500 transition-all duration-500">
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
          aria-hidden="true"
        />

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={viewportSettings}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
            className="absolute top-4 right-4 z-20"
          >
            <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-orange-500/25">
              Featured
            </span>
          </motion.div>
        )}

        {/* Image Container */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          {/* Gradient Background (fallback) */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
            aria-hidden="true"
          />

          {/* Project Image with Next.js Image optimization */}
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title} project`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 2}
            loading={index < 2 ? "eager" : "lazy"}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
            onError={(e) => {
              // Fallback to gradient if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />

          {/* Overlay Pattern */}
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"
            aria-hidden="true"
          />

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={viewportSettings}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg"
              aria-hidden="true"
            >
              {index % 3 === 0 ? (
                <GiArtificialIntelligence className="w-10 h-10 text-white" />
              ) : index % 3 === 1 ? (
                <TbWorld className="w-10 h-10 text-white" />
              ) : (
                <TbRobot className="w-10 h-10 text-white" />
              )}
            </motion.div>
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent flex items-end justify-center pb-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex gap-3"
              role="group"
              aria-label={`Actions for ${project.title}`}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                  aria-label={`View live demo of ${project.title}`}
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors shadow-lg"
                  aria-label={`View source code of ${project.title} on GitHub`}
                >
                  <FaGithub className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <motion.h3
            id={`project-title-${index}`}
            className="text-xl font-bold text-white mb-2"
            whileHover={{ color: "#60a5fa" }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Technologies used">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewportSettings}
                transition={{ delay: techIndex * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                className="px-2.5 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-lg cursor-default"
                role="listitem"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span
                className="px-2.5 py-1 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-lg"
                aria-label={`${project.technologies.length - 4} more technologies`}
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-gray-700/50" role="group" aria-label="Project links">
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25"
                aria-label={`View live demo of ${project.title}`}
              >
                <FaExternalLinkAlt className="w-4 h-4" aria-hidden="true" />
                Live Demo
              </Link>
            </motion.div>
            <motion.div
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-700 text-white text-sm font-medium rounded-xl hover:bg-gray-600 transition-colors"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <FaGithub className="w-4 h-4" aria-hidden="true" />
                Code
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-900/50 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
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
              aria-hidden="true"
            >
              <TbWorld className="w-8 h-8 text-white" />
            </motion.div>
            <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my best work, from AI-powered applications to full-stack solutions
            </p>
            <div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"
              aria-hidden="true"
            />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            role="list"
            aria-label="Project list"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>

          {/* View More CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/muhammadfaizan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 border border-gray-700 text-white font-medium rounded-xl hover:bg-gray-700 hover:border-gray-600 transition-all shadow-lg"
                aria-label="View more projects on GitHub"
              >
                <FaGithub className="w-5 h-5" aria-hidden="true" />
                View More on GitHub
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
