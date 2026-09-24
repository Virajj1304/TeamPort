"use client";

import { useState } from "react";
import { team, TeamMember } from "@/data/team";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

function MemberPhoto({ member }: { member: TeamMember }) {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = Boolean(member.photo && !imgError);

  return (
    <div
      className={`relative w-full aspect-[4/3] max-w-md ml-auto rounded-none overflow-hidden transition-all duration-500 bg-[var(--background)] flex items-center justify-center ${hasPhoto
          ? "border border-[var(--border)] group-hover:border-[var(--accent)] shadow-sm"
          : "border border-dashed border-[var(--border)] group-hover:border-[var(--accent)] p-6"
        }`}
    >
      {/* Corner crosshairs */}
      <span className="absolute top-2.5 left-2.5 text-[11px] font-mono text-[var(--muted)] opacity-60 select-none z-10">
        +
      </span>
      <span className="absolute top-2.5 right-2.5 text-[11px] font-mono text-[var(--accent)] opacity-80 select-none z-10">
        +
      </span>
      <span className="absolute bottom-2.5 left-2.5 text-[11px] font-mono text-[var(--muted)] opacity-60 select-none z-10">
        +
      </span>
      <span className="absolute bottom-2.5 right-2.5 text-[11px] font-mono text-[var(--muted)] opacity-60 select-none z-10">
        +
      </span>

      {hasPhoto ? (
        <>
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
          {/* Subtle gradient vignette at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-white/80 z-10 pointer-events-none">
            {/*<span className="tracking-wider uppercase">{member.name}</span>
            <span className="text-[var(--accent)]">{member.role.split("/")[0].trim()}</span>*/}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center p-3 relative z-10">
          <div className="w-10 h-10 border border-[var(--border)] flex items-center justify-center mb-3 group-hover:border-[var(--accent)] transition-colors duration-500 bg-[var(--surface)]">
            <svg
              className="w-5 h-5 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-xs font-mono font-medium text-[var(--foreground)] tracking-wide">
            Photo Placeholder
          </p>
          <p className="mt-1 text-[11px] font-mono text-[var(--muted)]">
            {member.name}
          </p>
          <span className="mt-2.5 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-[var(--accent)] bg-[var(--surface)] border border-[var(--border)]">
            {member.photo ? member.photo.replace("/", "") : "photo.jpg"}
          </span>
        </div>
      )}
    </div>
  );
}

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

        {/* Stacked team member containers (one below the other) with photo placeholder on the right */}
        <RevealGroup className="mt-16 flex flex-col gap-6">
          {team.map((member, i) => (
            <RevealItem key={member.name}>
              <TiltCard className="border border-[var(--border)] bg-[var(--surface)] group hover:border-[var(--accent)] transition-all duration-500">
                <div className="p-6 md:p-8 relative overflow-hidden">
                  {/* Subtle hover glow */}
                  <div className="absolute inset-0 bg-[var(--accent)] opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none" />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center relative z-10">
                    {/* Member details on left */}
                    <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            className="w-12 h-12 border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--accent)] transition-colors duration-500 bg-[var(--background)]"
                            whileHover={{ scale: 1.05 }}
                          >
                            <span className="text-xs font-mono text-[var(--muted)] tracking-wider group-hover:text-[var(--accent)] transition-colors duration-500">
                              {member.initials}
                            </span>
                          </motion.div>

                          <span className="text-3xl md:text-4xl font-semibold text-[var(--foreground)] opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-500 font-mono select-none">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[var(--foreground)]">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-xs md:text-sm font-mono text-[var(--accent)] tracking-wide">
                          {member.role}
                        </p>
                        <p className="mt-3 text-xs md:text-sm text-[var(--muted)] leading-relaxed max-w-xl">
                          {member.contribution}
                        </p>
                      </div>
                    </div>

                    {/* Photo placeholder on right of each container */}
                    <div className="md:col-span-5 lg:col-span-4">
                      <MemberPhoto member={member} />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Team statement */}

      </div>
    </section>
  );
}
