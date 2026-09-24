"use client";

import { project } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Play } from "lucide-react";

export default function Closing() {
  return (
    <section id="closing" className="py-24 md:py-32">
      <div className="section-container">
        <hr className="section-divider mb-16" />

        <Reveal>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Better soil data. <br />
            Better decisions. <br />
            Less water wasted.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={project.prototypeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Try Prototype
              <ArrowRight size={14} />
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Play size={14} />
              Watch Demo
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-20 flex flex-wrap gap-x-8 gap-y-3 text-xs text-[var(--muted)] font-mono tracking-wide">
            <span>{project.name}</span>
            <span className="text-[var(--border)]">·</span>
            <span>{project.team}</span>
            <span className="text-[var(--border)]">·</span>
            <span>{project.competition}</span>
          </div>
        </Reveal>

        {/* Minimal footer */}
        <Reveal delay={0.3}>
          <footer className="mt-24 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[var(--muted)]">
              {project.name} · {project.version} · {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-6 text-xs text-[var(--muted)]">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                Source
              </a>
              {/* Easter egg #3: subtle LAB link */}
              <a
                href="#lab"
                className="hover:text-[var(--foreground)] transition-colors"
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
