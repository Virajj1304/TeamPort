"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { project } from "@/data/project";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Project", href: "#project" },
  { label: "Prototype", href: "#prototype" },
  { label: "Team", href: "#team" },
];

const sectionIds = ["hero", "why", "project", "prototype", "build", "team", "closing"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const updateActiveSection = useCallback(() => {
    const scrollY = window.scrollY + 120;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      updateActiveSection();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveSection]);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-14">
          <a
            href="#"
            className="text-sm font-semibold tracking-[0.15em] uppercase text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-300"
          >
            {project.name}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-xs font-medium tracking-wide uppercase transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? "text-[var(--foreground)] active"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-wide uppercase text-[var(--accent)] hover:text-[var(--foreground)] transition-colors duration-300"
            >
              Watch Demo
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[var(--foreground)] cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-[var(--background)] flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="text-2xl font-medium tracking-wide uppercase text-[var(--foreground)]"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="text-2xl font-medium tracking-wide uppercase text-[var(--accent)]"
            >
              Watch Demo
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
