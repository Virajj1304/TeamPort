"use client";

import { useState } from "react";
import { project, changelog } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [changelogOpen, setChangelogOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="section-container">
        <Reveal>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] max-w-4xl">
            {project.name}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg md:text-xl text-[var(--muted)] max-w-2xl leading-relaxed">
            {project.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Play size={14} />
              Watch Demo
            </a>
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Try Prototype
              <ArrowRight size={14} />
            </a>
          </div>
        </Reveal>

        {/* Metadata */}
        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[var(--muted)] font-mono tracking-wide">
            <span>{project.team}</span>
            <span className="hidden sm:inline text-[var(--border)]">·</span>
            <span>{project.competition}</span>
            <span className="hidden sm:inline text-[var(--border)]">·</span>
            <span>{project.status}</span>
            <span className="hidden sm:inline text-[var(--border)]">·</span>

            {/* Easter egg: clickable version → changelog */}
            <span className="relative">
              <button
                onClick={() => setChangelogOpen(!changelogOpen)}
                className="hover:text-[var(--foreground)] transition-colors cursor-pointer underline decoration-dotted underline-offset-4"
                aria-label="View changelog"
              >
                {project.version}
              </button>

              <AnimatePresence>
                {changelogOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="changelog-popover"
                  >
                    <p className="text-[10px] uppercase tracking-widest text-[var(--muted)] mb-3 font-sans">
                      Changelog
                    </p>
                    <div className="space-y-2">
                      {changelog.map((entry, i) => (
                        <div key={entry.version} className="flex gap-3 text-xs">
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

        {/* Hero visual — project screenshot placeholder */}
        <Reveal delay={0.4}>
          <div className="mt-16 relative group">
            <div className="border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[var(--background)] border border-[var(--border)] rounded-sm px-3 py-1 text-[10px] text-[var(--muted)] font-mono">
                    app.terrapulse.dev
                  </div>
                </div>
              </div>

              {/* Screenshot area */}
              <div className="aspect-[16/9] bg-[var(--background)] flex items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-700 ease-out">
                {/* Placeholder grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `
                      linear-gradient(var(--foreground) 1px, transparent 1px),
                      linear-gradient(90deg, var(--foreground) 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Easter egg #2: hidden message on hover */}
                <div className="relative z-10 text-center px-6">
                  <div className="w-16 h-16 mx-auto mb-6 border border-[var(--border)] flex items-center justify-center">
                    <div
                      className="w-3 h-3 rounded-full bg-[var(--accent)] animate-pulse"
                      style={{ animationDuration: "3s" }}
                    />
                  </div>
                  <p className="text-sm text-[var(--muted)] font-mono">
                    Replace with your project screenshot
                  </p>
                  <p className="mt-2 text-[10px] text-[var(--border)] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    You found it — built with 47 cups of coffee ☕
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
