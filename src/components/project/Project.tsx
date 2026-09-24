"use client";

import { features, pipeline } from "@/data/project";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export default function Project() {
  return (
    <section id="project" className="py-24 md:py-32">
      <div className="section-container">
        <hr className="section-divider mb-16" />

        <Reveal>
          <p className="eyebrow mb-8">02 / Project</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            What we built.
          </h2>
        </Reveal>

        {/* Pipeline: Input → Process → Output */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col md:flex-row items-stretch gap-px bg-[var(--border)] border border-[var(--border)]">
            {[
              { label: "Input", text: pipeline.input },
              { label: "Process", text: pipeline.process },
              { label: "Output", text: pipeline.output },
            ].map((step, i) => (
              <div
                key={step.label}
                className="flex-1 bg-[var(--background)] p-6 md:p-8 flex flex-col relative"
              >
                <p className="eyebrow text-[var(--accent)] mb-3">
                  {step.label}
                </p>
                <p className="text-sm text-[var(--foreground)] leading-relaxed">
                  {step.text}
                </p>
                {i < 2 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 bg-[var(--background)] border border-[var(--border)] items-center justify-center">
                    <ArrowRight size={10} className="text-[var(--muted)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Features */}
        <RevealGroup className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-12">
          {features.map((feature) => (
            <RevealItem key={feature.number}>
              <div className="group">
                <span className="text-xs font-mono text-[var(--accent)] tracking-wide">
                  {feature.number}
                </span>
                <h3 className="mt-2 text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
