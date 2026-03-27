/**
 * Site Configuration (Data Only)
 * 
 * Pure data configuration without JSX.
 * For components with icons, use the hooks or create icon maps separately.
 */

import { SiteConfig, NavLink, Project, Experience, SocialPlatform } from "@/lib/types";

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

export const siteConfig: SiteConfig = {
  name: "Muhammad Faizan",
  title: "Full Stack Developer | AI Engineer",
  description: "Building elegant solutions to complex problems.",
  url: "https://muhammadfaizan.dev",
  email: "your.email@example.com",
  github: "https://github.com/muhammadfaizan",
  linkedin: "https://linkedin.com/in/muhammadfaizan",
  twitter: "https://twitter.com/muhammadfaizan",
  location: "Available Worldwide",
  availability: "Available for opportunities",
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// ============================================================================
// SOCIAL PLATFORMS
// ============================================================================

export const socialPlatforms: { platform: SocialPlatform; href: string; label: string }[] = [
  {
    platform: "github",
    href: siteConfig.github,
    label: "GitHub",
  },
  {
    platform: "linkedin",
    href: siteConfig.linkedin,
    label: "LinkedIn",
  },
  {
    platform: "twitter",
    href: siteConfig.twitter,
    label: "Twitter",
  },
];

// ============================================================================
// SKILLS (Data Only - Icons added in components)
// ============================================================================

export const skillData = {
  Frontend: [
    { name: "Next.js", level: 95, gradient: "from-gray-700 to-gray-900" },
    { name: "React", level: 92, gradient: "from-cyan-500 to-blue-500" },
    { name: "TypeScript", level: 90, gradient: "from-blue-500 to-blue-700" },
    { name: "Tailwind CSS", level: 93, gradient: "from-cyan-400 to-teal-500" },
    { name: "HTML5", level: 98, gradient: "from-orange-500 to-red-500" },
    { name: "CSS3", level: 95, gradient: "from-blue-400 to-blue-600" },
    { name: "JavaScript", level: 94, gradient: "from-yellow-400 to-yellow-600" },
  ],
  Backend: [
    { name: "Node.js", level: 88, gradient: "from-green-500 to-emerald-600" },
    { name: "Python", level: 90, gradient: "from-blue-500 to-yellow-500" },
    { name: "FastAPI", level: 85, gradient: "from-green-400 to-emerald-500" },
    { name: "Express", level: 86, gradient: "from-gray-400 to-gray-600" },
    { name: "Django", level: 82, gradient: "from-green-600 to-green-800" },
    { name: "PostgreSQL", level: 84, gradient: "from-blue-500 to-indigo-600" },
    { name: "MongoDB", level: 83, gradient: "from-green-500 to-green-700" },
    { name: "Firebase", level: 87, gradient: "from-yellow-500 to-orange-500" },
    { name: "Redis", level: 80, gradient: "from-red-500 to-red-700" },
    { name: "GraphQL", level: 78, gradient: "from-pink-500 to-purple-600" },
    { name: "Docker", level: 82, gradient: "from-blue-500 to-cyan-500" },
    { name: "AWS", level: 79, gradient: "from-orange-400 to-yellow-500" },
  ],
  "AI/ML": [
    { name: "TensorFlow", level: 82, gradient: "from-orange-500 to-red-500" },
    { name: "PyTorch", level: 80, gradient: "from-red-500 to-orange-500" },
    { name: "OpenCV", level: 78, gradient: "from-purple-500 to-purple-700" },
    { name: "AI & Robotics", level: 85, gradient: "from-cyan-400 to-blue-500" },
    { name: "Machine Learning", level: 83, gradient: "from-green-400 to-teal-500" },
  ],
} as const;

// Skills for About section
export const aboutSkills = [
  { name: "Next.js", level: 95, gradient: "from-gray-700 to-gray-900" },
  { name: "Tailwind CSS", level: 90, gradient: "from-cyan-500 to-blue-500" },
  { name: "Firebase", level: 85, gradient: "from-yellow-500 to-orange-500" },
  { name: "Python", level: 88, gradient: "from-blue-500 to-yellow-500" },
  { name: "AI & Robotics", level: 82, gradient: "from-purple-500 to-pink-500" },
];

// Tools
export const tools = [
  "Git", "GitHub", "VS Code", "Linux", "Figma", "Postman", 
  "Jest", "Webpack", "Vite", "npm", "Yarn", "CI/CD",
] as const;

// ============================================================================
// PROJECTS
// ============================================================================

export const projects: Project[] = [
  {
    id: "ecommerce-ai",
    title: "AI-Powered E-Commerce Platform",
    description: "Full-stack e-commerce solution with AI-driven product recommendations and personalized shopping experiences.",
    longDescription: "A comprehensive e-commerce platform featuring real-time inventory management, secure payment processing, and machine learning-based product recommendations that increase conversion rates by 35%.",
    image: "/projects/ecommerce.jpg",
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "TensorFlow", "Stripe"],
    liveLink: "https://demo-ecommerce.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/ecommerce-ai",
    featured: true,
    createdAt: "2024-01-15",
    updatedAt: "2024-03-20",
  },
  {
    id: "healthcare-dashboard",
    title: "Smart Healthcare Dashboard",
    description: "Real-time patient monitoring system with predictive analytics for early disease detection.",
    longDescription: "A healthcare analytics dashboard that processes patient data in real-time, using ML algorithms to predict potential health issues and provide actionable insights to medical professionals.",
    image: "/projects/healthcare.jpg",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    technologies: ["React", "Python", "FastAPI", "MongoDB", "PyTorch"],
    liveLink: "https://healthcare-demo.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/healthcare-dashboard",
    featured: true,
    createdAt: "2024-02-10",
    updatedAt: "2024-03-18",
  },
  {
    id: "robotics-control",
    title: "Robotics Control System",
    description: "Web-based interface for controlling and monitoring autonomous robots in real-time.",
    longDescription: "An intuitive control system for managing multiple robots simultaneously, featuring live video feeds, sensor data visualization, and automated task scheduling.",
    image: "/projects/robotics.jpg",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    technologies: ["Next.js", "WebSocket", "Python", "OpenCV", "ROS"],
    liveLink: "https://robotics-control.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/robotics-control",
    featured: true,
    createdAt: "2024-01-20",
    updatedAt: "2024-03-15",
  },
  {
    id: "portfolio-generator",
    title: "Portfolio Generator AI",
    description: "AI-powered tool that generates professional portfolios from user input and career data.",
    image: "/projects/portfolio-ai.jpg",
    gradient: "from-violet-600 via-purple-600 to-indigo-600",
    technologies: ["React", "TypeScript", "Firebase", "OpenAI API", "Tailwind"],
    liveLink: "https://portfolio-generator.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/portfolio-generator",
    featured: false,
    createdAt: "2024-03-01",
    updatedAt: "2024-03-10",
  },
  {
    id: "collab-tool",
    title: "Real-Time Collaboration Tool",
    description: "Team collaboration platform with video conferencing, screen sharing, and document editing.",
    image: "/projects/collab.jpg",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    technologies: ["Next.js", "WebRTC", "Socket.io", "Redis", "AWS"],
    liveLink: "https://collab-tool.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/collab-tool",
    featured: false,
    createdAt: "2024-02-15",
    updatedAt: "2024-03-05",
  },
  {
    id: "fintech-platform",
    title: "Financial Analytics Platform",
    description: "Advanced financial data visualization with predictive market analysis using machine learning.",
    image: "/projects/fintech.jpg",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    technologies: ["React", "Python", "Django", "PostgreSQL", "TensorFlow"],
    liveLink: "https://fintech-analytics.vercel.app",
    githubLink: "https://github.com/muhammadfaizan/fintech-platform",
    featured: false,
    createdAt: "2024-01-05",
    updatedAt: "2024-02-28",
  },
];

// ============================================================================
// EXPERIENCE
// ============================================================================

export const experience: Experience[] = [
  {
    id: "tech-company",
    company: "Tech Company",
    role: "Senior Frontend Developer",
    period: "2023 - Present",
    description: "Leading frontend architecture and mentoring junior developers. Improved performance by 40%.",
    current: true,
  },
  {
    id: "startup-inc",
    company: "Startup Inc",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built and maintained multiple products serving 10k+ users. Implemented CI/CD pipelines.",
  },
  {
    id: "digital-agency",
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2019 - 2021",
    description: "Developed responsive websites and web applications for various clients across industries.",
  },
];

// ============================================================================
// STATS
// ============================================================================

export const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
] as const;

// ============================================================================
// CHATBOT
// ============================================================================

export const chatBotConfig = {
  quickReplies: [
    { label: "👋 Who are you?", query: "Who are you?" },
    { label: "💼 Skills", query: "What are your skills?" },
    { label: "🚀 Projects", query: "Show me your projects" },
    { label: "📧 Contact", query: "How can I contact you?" },
  ],
  responses: {
    "who are you": `Hi! I'm ${siteConfig.name}, a passionate ${siteConfig.title}. 

I specialize in building elegant web applications and intelligent systems that solve real-world problems. With 5+ years of experience, I've worked on everything from e-commerce platforms to AI-powered solutions.

When I'm not coding, you'll find me exploring new technologies or contributing to open-source projects! 🚀`,

    "what are your skills": `I have expertise across multiple domains:

🎨 Frontend: Next.js, React, TypeScript, Tailwind CSS, HTML5, CSS3

⚙️ Backend: Node.js, Python, FastAPI, Express, Django, PostgreSQL, MongoDB

🤖 AI/ML: TensorFlow, PyTorch, OpenCV, Machine Learning, Robotics

🛠️ Tools: Git, Docker, AWS, Firebase, Redis, GraphQL

I'm always learning and expanding my skillset!`,

    "show me your projects": `I've worked on some exciting projects! Here are the highlights:

🏆 AI-Powered E-Commerce Platform - Full-stack solution with ML recommendations

🏥 Smart Healthcare Dashboard - Real-time patient monitoring with predictive analytics

🤖 Robotics Control System - Web interface for autonomous robot control

💼 Portfolio Generator AI - AI tool that creates professional portfolios

📱 Real-Time Collaboration Tool - Team platform with video & document editing

💰 Financial Analytics Platform - Market analysis with ML predictions

Check out the Projects section for more details!`,

    "how can i contact you": `I'd love to hear from you! Here's how to reach me:

📧 Email: ${siteConfig.email}
💼 LinkedIn: ${siteConfig.linkedin}
🐙 GitHub: ${siteConfig.github}
🐦 Twitter: ${siteConfig.twitter}

Feel free to reach out for collaborations, opportunities, or just to say hi! 👋`,

    default: `Thanks for your message! 

I'm an AI assistant for ${siteConfig.name}'s portfolio. Here are some things I can help you with:

• Learn about ${siteConfig.name.split(' ')[0]}'s background
• Explore skills and expertise
• Discover projects
• Get contact information

Feel free to ask me anything or use the quick reply buttons below! 😊`,
  },
} as const;
