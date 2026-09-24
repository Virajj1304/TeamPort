"use client";

import { why } from "@/data/project";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { motion } from "framer-motion";

export default function Why() {
  const flow = [
    { label: "Problem", text: why.problem, icon: "✕" },
    { label: "Limitation", text: why.limitation, icon: "△" },
    { label: "Opportunity", text: why.opportunity, icon: "◯" },
  ];

  return (
    <section id="why" className="py-24 md:py-36">
      <div className="section-container">
        <hr className="section-divider mb-16" />

        <Reveal>
          <p className="eyebrow mb-8">01 / Why</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            {why.problem}
          </h2>
        </Reveal>

        {/* Key stat */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex items-baseline gap-2">
            <span className="text-5xl md:text-7xl font-semibold text-[var(--accent)] tabular-nums">
              <CountUp end={70} suffix="%" />
            </span>
            <span className="text-sm text-[var(--muted)] max-w-xs">
              of global freshwater is used in agriculture — mostly based on guesswork
            </span>
          </div>
        </Reveal>

        {/* Problem → Limitation → Opportunity */}
        <RevealGroup className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {flow.map((item) => (
            <RevealItem key={item.label}>
              <motion.div
                className="bg-[var(--surface)] p-6 md:p-8 h-full group cursor-default"
                whileHover={{ backgroundColor: "var(--surface-hover)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg text-[var(--accent)] opacity-60">{item.icon}</span>
                  <p className="eyebrow text-[var(--accent)]">{item.label}</p>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed group-hover:text-[var(--foreground)] transition-colors duration-300">
                  {item.text}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Our Insight */}
        <Reveal delay={0.2}>
          <div className="mt-20 relative pl-6 md:pl-8 max-w-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)] opacity-60" />
            <div className="absolute left-[-3px] top-0 w-2 h-2 bg-[var(--accent)] rounded-full" />
            <p className="eyebrow mb-3">Our Insight</p>
            <p className="text-base md:text-lg text-[var(--foreground)] leading-relaxed">
              {why.insight}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
