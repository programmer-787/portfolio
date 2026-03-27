"use client";

/**
 * Performance Optimization Utilities
 * 
 * This file contains utilities and configurations for optimizing
 * the portfolio's performance and Core Web Vitals.
 */

import dynamic from "next/dynamic";

/**
 * Dynamic imports for code-splitting heavy components
 * These components will be loaded on demand, reducing initial bundle size
 */

// ChatBot - loaded only when user interacts with the button
export const ChatBot = dynamic(
  () => import("@/components/ChatBot").then((mod) => mod.ChatBot),
  {
    ssr: false,
    loading: () => null,
  }
);

// Skills section - heavy with many animations
export const Skills = dynamic(
  () => import("@/sections/Skills").then((mod) => mod.Skills),
  {
    loading: () => <SkillsSkeleton />,
  }
);

/**
 * Skeleton loader for Skills section
 */
function SkillsSkeleton() {
  return (
    <div className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="h-8 w-48 bg-gray-800 rounded animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 bg-gray-800 rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Performance best practices implemented:
 * 
 * 1. ✅ Code splitting with dynamic imports
 * 2. ✅ Lazy loading images with Next.js Image
 * 3. ✅ Font optimization with display: swap
 * 4. ✅ Passive event listeners for scroll
 * 5. ✅ RequestAnimationFrame for animations
 * 6. ✅ CSS containment for isolated components
 * 7. ✅ Proper image sizing with sizes attribute
 * 8. ✅ Modern image formats (WebP, AVIF)
 */
