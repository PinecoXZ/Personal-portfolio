"use client"

import { motion } from "framer-motion"

export function BioSection() {
  const highlights = [
    { label: "Building DualCamera", emoji: "⚡" },
    { label: "Pokémon Unite", emoji: "🎮" },
    { label: "Video Edits", emoji: "🎬" },
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
      className="flex flex-col items-center gap-3 text-center px-2"
      aria-label="About"
    >
      <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
        Building sleek web applications, producing creative video edits, and grinding Pokémon Unite. Welcome to my space.
      </p>

      {/* Quick highlights pill strip */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 pt-0.5">
        {highlights.map((h) => (
          <span
            key={h.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground/90 backdrop-blur-sm"
          >
            <span>{h.emoji}</span>
            <span>{h.label}</span>
          </span>
        ))}
      </div>
    </motion.section>
  )
}
