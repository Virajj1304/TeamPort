"use client";

import { features, pipeline } from "@/data/project";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Project() {
  return (
    <section id="project" className="py-24 md:py-36">
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
          <div className="mt-16 relative">
            <div className="flex flex-col md:flex-row items-stretch gap-px bg-[var(--border)] border border-[var(--border)]">
              {[
                { label: "Input", text: pipeline.input },
                { label: "Process", text: pipeline.process },
                { label: "Output", text: pipeline.output },
              ].map((step, i) => (
                <motion.div
                  key={step.label}
                  className="flex-1 bg-[var(--surface)] p-6 md:p-8 flex flex-col relative group"
                  whileHover={{ backgroundColor: "var(--surface-hover)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-6 h-6 border border-[var(--accent)] flex items-center justify-center text-[10px] font-mono text-[var(--accent)]">
                      {i + 1}
                    </span>
                    <p className="eyebrow text-[var(--accent)]">
                      {step.label}
                    </p>
                  </div>
                  <p className="text-sm text-[var(--muted)] leading-relaxed group-hover:text-[var(--foreground)] transition-colors duration-300">
                    {step.text}
                  </p>

                  {/* Flowing arrow connector */}
                  {i < 2 && (
                    <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 bg-[var(--background)] border border-[var(--border)] items-center justify-center">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <ArrowRight
                          size={12}
                          className="text-[var(--accent)]"
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Flowing dots under pipeline */}
            <div className="hidden md:block absolute -bottom-3 left-[10%] right-[10%]">
              <div className="flex justify-between">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Features */}
        <RevealGroup className="mt-24 grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <RevealItem key={feature.number}>
              <TiltCard className="border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 h-full group hover:border-[var(--border-hover)] transition-colors duration-300">
                <div className="flex items-start gap-5">
                  <span className="text-2xl font-semibold text-[var(--accent)] opacity-30 font-mono shrink-0 group-hover:opacity-60 transition-opacity duration-300">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
