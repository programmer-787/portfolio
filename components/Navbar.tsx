"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition, useActiveSection, useMobileMenu, useSmoothScroll } from "@/lib/hooks";
import { navLinks } from "@/data/config";
import { NAVBAR_SCROLL_THRESHOLD, SCROLL_OFFSET } from "@/lib/constants";

export function Navbar() {
  const { isScrolled } = useScrollPosition({ offset: NAVBAR_SCROLL_THRESHOLD });
  const activeSection = useActiveSection(
    navLinks.map((link) => link.href.substring(1)),
    SCROLL_OFFSET
  );
  const { isOpen, setIsOpen } = useMobileMenu();
  const scrollToSection = useSmoothScroll();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-950/80 backdrop-blur-xl border-b border-gray-800 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group"
            aria-label="Go to homepage"
          >
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow"
              aria-hidden="true"
            >
              <span className="text-white font-bold text-lg">MF</span>
            </motion.div>
            <motion.span
              className="hidden sm:block text-lg font-semibold text-white"
              whileHover={{ color: "#60a5fa" }}
              transition={{ duration: 0.2 }}
            >
              Muhammad Faizan
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1" role="navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}
                  <motion.span
                    className="relative z-10"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 inline-block"
              >
                Hire Me
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <div className="relative w-5 h-5" aria-hidden="true">
              <motion.div
                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute w-full h-0.5 bg-current rounded-full"
                style={{ top: isOpen ? "8px" : "4px" }}
              />
              <motion.div
                animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute w-full h-0.5 bg-current rounded-full"
                style={{ top: "12px" }}
              />
              <motion.div
                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute w-full h-0.5 bg-current rounded-full"
                style={{ top: isOpen ? "8px" : "20px" }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
              role="navigation"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`block px-4 py-3 rounded-xl transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white"
                            : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{link.label}</span>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-blue-500 rounded-full"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-2"
                >
                  <Link
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center font-medium rounded-xl shadow-lg shadow-blue-500/25"
                  >
                    Hire Me
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
