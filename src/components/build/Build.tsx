"use client";

import { timeline, lessons } from "@/data/project";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Build() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end center"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="build" className="py-24 md:py-36">
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
          <div ref={timelineRef} className="relative">
            {/* Static track line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

            {/* Scroll-driven progress line */}
            <motion.div
              className="absolute left-[19px] top-0 w-px bg-[var(--accent)] hidden md:block origin-top"
              style={{ height: progressHeight }}
            />

            <div className="space-y-14">
              {timeline.map((item, i) => (
                <RevealItem key={item.step}>
                  <div className="flex gap-6 md:gap-10 group">
                    {/* Step marker */}
                    <div className="relative shrink-0 z-10">
                      <motion.div
                        className={`w-10 h-10 border flex items-center justify-center text-xs font-mono tracking-wide transition-all duration-500 ${
                          i === timeline.length - 1
                            ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-light)]"
                            : "border-[var(--border)] text-[var(--muted)] bg-[var(--surface)]"
                        }`}
                        whileHover={{
                          borderColor: "var(--accent)",
                          color: "var(--accent)",
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.step}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="pt-1 flex-1">
                      <div className="flex items-baseline gap-4 flex-wrap">
                        <h3 className="text-base font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <span className="text-xs font-mono text-[var(--muted)]">
                          {item.date}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed max-w-lg group-hover:text-[var(--foreground)] transition-colors duration-300">
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
          <div className="mt-28">
            <p className="eyebrow mb-10">What we learned</p>
            <div className="grid md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
              {lessons.map((lesson, i) => (
                <motion.div
                  key={lesson.title}
                  className="bg-[var(--surface)] p-6 md:p-8 group cursor-default"
                  whileHover={{ backgroundColor: "var(--surface-hover)" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-xs font-mono text-[var(--accent)] opacity-50 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-sm font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                      {lesson.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed pl-7">
                    {lesson.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
