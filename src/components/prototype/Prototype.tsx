"use client";

import { project, prototypeChecklist } from "@/data/project";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight, Play, Check } from "lucide-react";

export default function Prototype() {
  return (
    <section id="prototype" className="py-24 md:py-32">
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
          <div className="mt-16 border border-[var(--border)] bg-[var(--surface)]">
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

            {/* Prototype area */}
            <div className="aspect-[16/9] bg-[var(--background)] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `
                    radial-gradient(circle, var(--foreground) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="relative z-10 text-center px-6">
                <p className="text-sm text-[var(--muted)] font-mono mb-6">
                  Live prototype preview
                </p>
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Try the Live Prototype
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* CTAs and status */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.prototypeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Try the Live Prototype
                <ArrowRight size={14} />
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Play size={14} />
                Watch the Demo
              </a>
            </div>

            {/* Status */}
            <div className="md:text-right">
              <p className="text-xs font-mono text-[var(--muted)] tracking-wide mb-4">
                {project.version} · {project.status}
              </p>
              <ul className="space-y-2">
                {prototypeChecklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[var(--foreground)] md:justify-end"
                  >
                    <Check
                      size={14}
                      className="text-[var(--accent)] shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
