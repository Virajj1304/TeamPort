"use client";

import { team, teamStatement } from "@/data/team";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-36">
      <div className="section-container">
        <hr className="section-divider mb-16" />

        <Reveal>
          <p className="eyebrow mb-8">05 / Team</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Built by us.
          </h2>
        </Reveal>

        {/* Team grid */}
        <RevealGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <RevealItem key={member.name}>
              <TiltCard className="border border-[var(--border)] bg-[var(--surface)] h-full group hover:border-[var(--accent)] transition-all duration-500">
                <div className="p-6 md:p-8 flex flex-col h-full relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500" />

                  {/* Avatar */}
                  <motion.div
                    className="w-14 h-14 border border-[var(--border)] flex items-center justify-center mb-5 relative z-10 group-hover:border-[var(--accent)] transition-colors duration-500"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-mono text-[var(--muted)] tracking-wide group-hover:text-[var(--accent)] transition-colors duration-500">
                      {member.initials}
                    </span>
                  </motion.div>

                  <h3 className="text-sm font-semibold tracking-tight relative z-10">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-[var(--accent)] tracking-wide relative z-10">
                    {member.role}
                  </p>
                  <p className="mt-3 text-xs text-[var(--muted)] leading-relaxed flex-1 relative z-10">
                    {member.contribution}
                  </p>

                  {/* Index number */}
                  <span className="absolute bottom-4 right-4 text-4xl font-semibold text-[var(--foreground)] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Team statement */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex items-start gap-4 max-w-2xl">
            <div className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {teamStatement}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
