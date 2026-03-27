"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardProps } from "@/lib/types";

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Card({ children, className, hover = true, as = "div" }: CardProps) {
  const Component = motion[as];

  return (
    <Component
      variants={variants}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      className={cn(
        "relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden",
        "hover:border-gray-500 transition-all duration-500",
        className
      )}
    >
      {children}
    </Component>
  );
}
