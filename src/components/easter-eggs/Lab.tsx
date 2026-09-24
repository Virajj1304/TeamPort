"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const labEntries = [
  {
    title: "First whiteboard sketch",
    description:
      'The very first architecture diagram. "Sensor → Magic → Map" was the technical specification.',
  },
  {
    title: "Failed prototype #1",
    description:
      "Tried to render 10,000 data points on a single canvas. The browser froze. We learned about spatial indexing.",
  },
  {
    title: "The 3 AM realization",
    description:
      "Soil health scoring clicked at 3 AM. The formula is embarrassingly simple — that's why it works.",
  },
  {
    title: "Field testing day",
    description:
      'First real test with a farmer. Their exact words: "Just show me the map." We rebuilt everything the next week.',
  },
  {
    title: "Naming session",
    description:
      'Other names considered: SoilSense, FieldPulse, DirtData. "TerraPulse" won because it sounded less silly.',
  },
];

export default function Lab() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#lab") {
        setIsOpen(true);
        history.replaceState(null, "", window.location.pathname);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[var(--foreground)]/80 flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-[var(--background)] border border-[var(--border)] w-full max-w-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[var(--border)] sticky top-0 bg-[var(--background)] z-10">
                <div>
                  <p className="eyebrow">Lab</p>
                  <p className="text-xs text-[var(--muted)] mt-1">
                    Behind the scenes
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors cursor-pointer"
                  aria-label="Close lab"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Entries */}
              <div className="p-6 space-y-6">
                {labEntries.map((entry, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="border-b border-[var(--border)] pb-6 last:border-0 last:pb-0">
                      <p className="text-sm font-semibold tracking-tight">
                        {entry.title}
                      </p>
                      <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
