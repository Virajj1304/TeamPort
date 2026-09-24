"use client";

import { useState } from "react";
import { project, changelog } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import TextScramble from "@/components/ui/TextScramble";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [changelogOpen, setChangelogOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Radial fade at bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 60%, var(--background) 100%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Eyebrow accent line */}
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="eyebrow text-[var(--accent)]">
              {project.competition}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
            <TextScramble text={project.name} delay={0.3} />
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
            {project.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Play size={14} />
              <span>Watch Demo</span>
            </MagneticButton>
            <MagneticButton
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>Try Prototype</span>
              <ArrowRight size={14} />
            </MagneticButton>
          </div>
        </Reveal>

        {/* Metadata */}
        <Reveal delay={0.4}>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[var(--muted)] font-mono tracking-wide">
            <span>{project.team}</span>
            <span className="hidden sm:inline text-[var(--border)]">·</span>
            <span>{project.status}</span>
            <span className="hidden sm:inline text-[var(--border)]">·</span>

            <span className="relative">
              <button
                onClick={() => setChangelogOpen(!changelogOpen)}
                className="hover:text-[var(--accent)] transition-colors cursor-pointer underline decoration-dotted underline-offset-4 decoration-[var(--border)]"
                aria-label="View changelog"
              >
                {project.version}
              </button>

              <AnimatePresence>
                {changelogOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                    className="changelog-popover"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3 font-sans">
                      Changelog
                    </p>
                    <div className="space-y-3">
                      {changelog.map((entry, i) => (
                        <div
                          key={entry.version}
                          className="flex gap-3 text-xs"
                        >
                          <span
                            className={`font-mono shrink-0 ${
                              i === changelog.length - 1
                                ? "text-[var(--accent)]"
                                : "text-[var(--muted)]"
                            }`}
                          >
                            {entry.version}
                          </span>
                          <span className="text-[var(--foreground)]">
                            {entry.note}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          </div>
        </Reveal>

        {/* Hero visual */}
        <Reveal delay={0.5}>
          <div className="mt-20 relative group">
            <motion.div
              className="border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-colors duration-500 group-hover:border-[var(--border-hover)]"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[var(--background)] border border-[var(--border)] rounded-sm px-3 py-1 text-[10px] text-[var(--muted)] font-mono">
                    app.terrapulse.dev
                  </div>
                </div>
              </div>

              {/* Screenshot area */}
              <div className="aspect-[16/9] bg-[var(--background)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 dot-bg opacity-30" />

                {/* Animated accent grid lines */}
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute left-1/4 top-0 w-px h-full bg-[var(--accent)]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <motion.div
                    className="absolute left-1/2 top-0 w-px h-full bg-[var(--accent)]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.05 }}
                    transition={{ duration: 2, delay: 1.5 }}
                  />
                  <motion.div
                    className="absolute left-3/4 top-0 w-px h-full bg-[var(--accent)]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.1 }}
                    transition={{ duration: 2, delay: 2 }}
                  />
                </div>

                <div className="relative z-10 text-center px-6">
                  <div className="w-16 h-16 mx-auto mb-6 border border-[var(--border)] flex items-center justify-center animate-border-glow">
                    <div className="w-3 h-3 rounded-full bg-[var(--accent)] pulse-ring" />
                  </div>
                  <p className="text-sm text-[var(--muted)] font-mono">
                    Replace with your project screenshot
                  </p>
                  {/* Easter egg #2 */}
                  <p className="mt-3 text-[10px] text-[var(--muted)] font-mono opacity-0 group-hover:opacity-60 transition-opacity duration-700 delay-300">
                    You found it — built with 47 cups of coffee ☕
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating accent corner decorations */}
            <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-[var(--accent)] opacity-50" />
            <div className="absolute -top-px -right-px w-4 h-4 border-t border-r border-[var(--accent)] opacity-50" />
            <div className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-[var(--accent)] opacity-50" />
            <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-[var(--accent)] opacity-50" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
