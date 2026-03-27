# Muhammad Faizan - Portfolio

A modern, production-ready developer portfolio built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-pink?logo=framer)

## 🚀 Features

- **Modern Stack**: Next.js 16 App Router with Turbopack
- **TypeScript**: Full type safety with strict mode
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Theme**: Optimized for dark mode
- **Animations**: Smooth Framer Motion animations
- **SEO Optimized**: Meta tags, Open Graph, sitemap
- **Accessibility**: WCAG compliant with ARIA labels
- **Performance**: Optimized images, code splitting, lazy loading
- **PWA Ready**: Manifest, offline support
- **ChatBot**: Interactive AI assistant

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with SEO
│   └── page.tsx             # Home page
├── components/              # Reusable components
│   ├── ui/                  # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   ├── ChatBot.tsx          # AI chat assistant
│   ├── ErrorBoundary.tsx    # Error handling
│   ├── Footer.tsx           # Site footer
│   ├── Layout.tsx           # App layout wrapper
│   ├── Navbar.tsx           # Navigation bar
│   ├── WebVitals.tsx        # Performance monitoring
│   └── index.ts             # Barrel exports
├── data/                    # Application data
│   ├── config.ts            # Site configuration
│   └── portfolio.ts         # Barrel exports
├── lib/                     # Utilities and helpers
│   ├── hooks/               # Custom React hooks
│   │   ├── hooks.ts
│   │   └── index.ts
│   ├── animations.ts        # Framer Motion variants
│   ├── constants.ts         # App constants
│   ├── performance.tsx      # Performance utilities
│   ├── types.ts             # TypeScript types
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
│   ├── manifest.json        # PWA manifest
│   ├── robots.txt           # Robots configuration
│   └── sitemap.xml          # SEO sitemap
└── sections/                # Page sections
    ├── About.tsx
    ├── Contact.tsx
    ├── Experience.tsx
    ├── Hero.tsx
    ├── Projects.tsx
    ├── Skills.tsx
    └── index.ts
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Icons | React Icons |
| Linting | ESLint 9 |
| Build | Turbopack |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/muhammadfaizan/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Customization

### Update Personal Information

Edit `data/config.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  // ... more config
};
```

### Add Your Projects

Update the `projects` array in `data/config.ts`:

```typescript
{
  id: "project-id",
  title: "Project Name",
  description: "Brief description",
  image: "/projects/image.jpg",
  technologies: ["Next.js", "TypeScript"],
  liveLink: "https://project.com",
  githubLink: "https://github.com/...",
  featured: true,
}
```

### Modify Skills

Update `skillData` in `data/config.ts`:

```typescript
export const skillData = {
  Frontend: [
    { name: "React", level: 90, gradient: "from-cyan-500 to-blue-500" },
    // ... more skills
  ],
  // ... more categories
};
```

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| LCP | < 2.5s | ✅ |
| FID | < 100ms | ✅ |
| CLS | < 0.1 | ✅ |
| INP | < 200ms | ✅ |

## ♿ Accessibility

- Skip to main content link
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- Screen reader friendly

## 🔒 Security Headers

Implemented in `next.config.ts`:

- Strict-Transport-Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy
- Permissions-Policy

## 📱 PWA Features

- Installable on mobile devices
- Offline support ready
- App manifest
- Apple touch icons
- Theme colors

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📝 Code Quality

### ESLint Configuration

Strict rules enabled for:
- Import ordering
- TypeScript best practices
- Accessibility
- Naming conventions
- Code organization

### TypeScript Strict Mode

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📬 Contact

- **Portfolio**: [muhammadfaizan.dev](https://muhammadfaizan.dev)
- **GitHub**: [@muhammadfaizan](https://github.com/muhammadfaizan)
- **LinkedIn**: [Muhammad Faizan](https://linkedin.com/in/muhammadfaizan)
- **Email**: your.email@example.com

---

Built with ❤️ by Muhammad Faizan
