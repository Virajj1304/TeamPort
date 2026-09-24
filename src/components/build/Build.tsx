"use client";

import { timeline, lessons } from "@/data/project";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function Build() {
  return (
    <section id="build" className="py-24 md:py-32">
      <div className="section-container">
        <hr className="section-divider mb-16" />

        <Reveal>
          <p className="eyebrow mb-8">04 / Build</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            From idea to prototype.
          </h2>
        </Reveal>

        {/* Timeline */}
        <RevealGroup className="mt-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <RevealItem key={item.step}>
                  <div className="flex gap-6 md:gap-10">
                    {/* Step marker */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-10 h-10 border flex items-center justify-center text-xs font-mono tracking-wide ${
                          i === timeline.length - 1
                            ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-light)]"
                            : "border-[var(--border)] text-[var(--muted)] bg-[var(--surface)]"
                        }`}
                      >
                        {item.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-1">
                      <div className="flex items-baseline gap-4">
                        <h3 className="text-base font-semibold tracking-tight">
                          {item.title}
                        </h3>
                        <span className="text-xs font-mono text-[var(--muted)]">
                          {item.date}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </RevealGroup>

        {/* What we learned */}
        <Reveal delay={0.2}>
          <div className="mt-24">
            <p className="eyebrow mb-10">What we learned</p>
            <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
              {lessons.map((lesson) => (
                <div
                  key={lesson.title}
                  className="bg-[var(--background)] p-6 md:p-8"
                >
                  <h4 className="text-sm font-semibold tracking-tight mb-2">
                    {lesson.title}
                  </h4>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {lesson.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
