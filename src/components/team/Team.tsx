"use client";

import { team, teamStatement } from "@/data/team";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
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
        <RevealGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
          {team.map((member) => (
            <RevealItem key={member.name}>
              <div className="bg-[var(--background)] p-6 md:p-8 flex flex-col h-full">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 border border-[var(--border)] flex items-center justify-center mb-5">
                  <span className="text-xs font-mono text-[var(--muted)] tracking-wide">
                    {member.initials}
                  </span>
                </div>

                <h3 className="text-sm font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-mono text-[var(--accent)] tracking-wide">
                  {member.role}
                </p>
                <p className="mt-3 text-xs text-[var(--muted)] leading-relaxed flex-1">
                  {member.contribution}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Team statement */}
        <Reveal delay={0.2}>
          <p className="mt-16 text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
            {teamStatement}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
