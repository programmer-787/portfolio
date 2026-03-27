"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionProps } from "@/lib/types";
import { fadeInUp, viewportSettings } from "@/lib/animations";

export function Section({
  id,
  title,
  description,
  icon,
  children,
  className,
  background = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "py-20 relative overflow-hidden",
        background === "alternate" && "bg-gray-900/50",
        className
      )}
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
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            {icon && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={viewportSettings}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 shadow-lg shadow-blue-500/25"
              >
                {icon}
              </motion.div>
            )}
            <h2
              id={`${id}-heading`}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            >
              {title}
            </h2>
            {description && (
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {description}
              </p>
            )}
            <div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"
              aria-hidden="true"
            />
          </motion.div>

          {/* Section Content */}
          {children}
        </div>
      </div>
    </section>
  );
}
