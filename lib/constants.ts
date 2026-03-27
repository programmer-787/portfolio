/**
 * Application Constants
 * 
 * Centralized configuration values and constants.
 * Modify these values to customize the application behavior.
 */

import { NavLink, SkillCategory } from "@/lib/types";

// Navigation
export const NAV_LINKS: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// Scroll settings
export const SCROLL_OFFSET = 100; // pixels from top to trigger active section
export const NAVBAR_SCROLL_THRESHOLD = 20; // pixels to show navbar background

// Animation settings
export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.6,
};

export const STAGGER_DELAY = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

// Viewport settings for scroll animations
export const VIEWPORT_SETTINGS = {
  once: true,
  margin: "-100px",
  amount: 0.2,
} as const;

// Form validation
export const FORM_VALIDATION = {
  name: {
    minLength: 2,
    required: "Name is required",
    tooShort: "Name must be at least 2 characters",
  },
  email: {
    required: "Email is required",
    invalid: "Please enter a valid email",
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  message: {
    minLength: 10,
    required: "Message is required",
    tooShort: "Message must be at least 10 characters",
  },
} as const;

// Skill categories
export const SKILL_CATEGORIES: SkillCategory[] = [
  "Frontend",
  "Backend",
  "AI/ML",
];

// Social platforms
export const SOCIAL_PLATFORMS = ["github", "linkedin", "twitter"] as const;
export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

// Cache settings
export const CACHE_SETTINGS = {
  formSuccessMessage: 5000, // ms to show success message
  typingDelay: { min: 800, max: 1500 }, // bot typing simulation
} as const;

// Breakpoints (Tailwind default)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Z-index layers
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// Accessibility
export const A11Y = {
  focusTrapSelector: 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  skipLinkTarget: "#main-content",
} as const;
