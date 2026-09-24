"use client";

import { project } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import TextScramble from "@/components/ui/TextScramble";
import { ArrowRight, Play } from "lucide-react";

export default function Closing() {
  return (
    <section id="closing" className="py-24 md:py-36 relative">
      {/* Subtle radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, var(--accent-glow) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <hr className="section-divider mb-16" />

        <Reveal>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            <TextScramble text="Better soil data." delay={0} />
            <br />
            <TextScramble text="Better decisions." delay={0.4} />
            <br />
            <span className="text-[var(--accent)]">
              <TextScramble text="Less water wasted." delay={0.8} />
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Try Prototype</span>
              <ArrowRight size={14} />
            </MagneticButton>
            <MagneticButton
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Play size={14} />
              <span>Watch Demo</span>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-20 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[var(--muted)] font-mono tracking-wide">
            <span>{project.name}</span>
            <span className="text-[var(--border)]">·</span>
            <span>{project.team}</span>
            <span className="text-[var(--border)]">·</span>
            <span>{project.competition}</span>
          </div>
        </Reveal>

        {/* Footer */}
        <Reveal delay={0.5}>
          <footer className="mt-24 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[var(--muted)]">
              {project.name} · {project.version} · {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-6 text-xs text-[var(--muted)]">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors duration-300"
              >
                Source
              </a>
              <a
                href="#lab"
                className="hover:text-[var(--accent)] transition-colors duration-300"
              >
                Lab
              </a>
            </div>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}
