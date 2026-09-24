"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { project } from "@/data/project";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Project", href: "#project" },
  { label: "Prototype", href: "#prototype" },
  { label: "Team", href: "#team" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-14">
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-semibold tracking-wide uppercase text-[var(--foreground)]"
          >
            {project.name}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wide uppercase text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-wide uppercase text-[var(--accent)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              Watch Demo
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--foreground)]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--background)] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium tracking-wide uppercase text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium tracking-wide uppercase text-[var(--accent)]"
            >
              Watch Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
