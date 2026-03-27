/**
 * Shared Types and Interfaces
 * 
 * Centralized type definitions for the entire application.
 * Follows TypeScript best practices for type safety and reusability.
 */

// Navigation
export interface NavLink {
  href: string;
  label: string;
}

// Site Configuration
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  location?: string;
  availability?: string;
}

// Skills
export interface Skill {
  name: string;
  icon?: React.ReactNode;
  level: number;
  color: string;
  gradient: string;
  category?: SkillCategory;
}

export type SkillCategory = "Frontend" | "Backend" | "AI/ML" | "Tools";

export interface SkillCategoryData {
  title: SkillCategory;
  icon: React.ReactNode;
  skills: Skill[];
}

// Projects
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  gradient: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
  featured: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// Experience
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startDate?: string;
  endDate?: string;
  description: string;
  current?: boolean;
}

// Social Links
export type SocialPlatform = "github" | "linkedin" | "twitter" | "email";

export interface SocialLink {
  platform: SocialPlatform;
  href: string;
  label: string;
  icon: React.ReactNode;
}

// Contact Form
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

// UI Components
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article" | "section";
}

export interface SectionProps {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  background?: "default" | "alternate";
}

// ChatBot
export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface QuickReply {
  label: string;
  query: string;
}

// Animation
export interface AnimationVariants {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}

export interface ViewportSettings {
  once: boolean;
  margin: string;
  amount: number;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type ClassName = string | undefined | null | false;
