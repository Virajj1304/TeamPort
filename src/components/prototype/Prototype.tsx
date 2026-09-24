"use client";

import { project, prototypeChecklist } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, Play, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Prototype() {
  return (
    <section id="prototype" className="py-24 md:py-36">
      <div className="section-container">
        <hr className="section-divider mb-16" />

        <Reveal>
          <p className="eyebrow mb-8">03 / Prototype</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Try it.
          </h2>
        </Reveal>

        {/* Prototype preview frame */}
        <Reveal delay={0.2}>
          <div className="mt-16 relative group">
            <motion.div
              className="border border-[var(--border)] bg-[var(--surface)] overflow-hidden group-hover:border-[var(--accent)] transition-colors duration-700"
              whileHover={{ scale: 1.003 }}
              transition={{ duration: 0.6 }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#333] group-hover:bg-[var(--accent)] transition-colors duration-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#333]" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-[var(--background)] border border-[var(--border)] rounded-sm px-3 py-1 text-[10px] text-[var(--muted)] font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    app.terrapulse.dev
                  </div>
                </div>
              </div>

              {/* Prototype area */}
              <div className="aspect-[16/9] bg-[var(--background)] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 dot-bg opacity-20" />

                {/* Animated scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-px bg-[var(--accent)] opacity-20"
                  animate={{ top: ["0%", "100%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10 text-center px-6">
                  <div className="w-20 h-20 mx-auto mb-8 border border-[var(--accent)] flex items-center justify-center pulse-ring">
                    <div className="w-4 h-4 rounded-full bg-[var(--accent)]" />
                  </div>
                  <p className="text-sm text-[var(--muted)] font-mono mb-8">
                    Live prototype — click to launch
                  </p>
                  <MagneticButton
                    href={project.prototypeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Try the Live Prototype</span>
                    <ArrowRight size={14} />
                  </MagneticButton>
                </div>
              </div>
            </motion.div>

            {/* Corner accents */}
            <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-[var(--accent)] opacity-50" />
            <div className="absolute -top-px -right-px w-4 h-4 border-t border-r border-[var(--accent)] opacity-50" />
            <div className="absolute -bottom-px -left-px w-4 h-4 border-b border-l border-[var(--accent)] opacity-50" />
            <div className="absolute -bottom-px -right-px w-4 h-4 border-b border-r border-[var(--accent)] opacity-50" />
          </div>
        </Reveal>

        {/* CTAs and status */}
        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="flex flex-wrap gap-4">
              <MagneticButton
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Try the Live Prototype</span>
                <ArrowRight size={14} />
              </MagneticButton>
              <MagneticButton
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Play size={14} />
                <span>Watch the Demo</span>
              </MagneticButton>
            </div>

            <div className="md:text-right">
              <p className="text-xs font-mono text-[var(--accent)] tracking-wide mb-4">
                {project.version} · {project.status}
              </p>
              <ul className="space-y-3">
                {prototypeChecklist.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-sm text-[var(--muted)] md:justify-end"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <Check
                      size={14}
                      className="text-[var(--accent)] shrink-0"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
