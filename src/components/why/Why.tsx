"use client";

import { why } from "@/data/project";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function Why() {
  const flow = [
    { label: "Problem", text: why.problem },
    { label: "Limitation", text: why.limitation },
    { label: "Opportunity", text: why.opportunity },
  ];

  return (
    <section id="why" className="py-24 md:py-32">
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

        {/* Problem → Limitation → Opportunity */}
        <RevealGroup className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--border)]">
          {flow.map((item) => (
            <RevealItem key={item.label}>
              <div className="bg-[var(--background)] p-6 md:p-8">
                <p className="eyebrow text-[var(--accent)] mb-3">{item.label}</p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Our Insight */}
        <Reveal delay={0.2}>
          <div className="mt-16 border-l-2 border-[var(--accent)] pl-6 md:pl-8 max-w-2xl">
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
