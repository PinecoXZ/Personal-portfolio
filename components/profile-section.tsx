"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function ProfileSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      className="flex flex-col items-center gap-4 text-center"
      aria-label="Profile"
    >
      {/* Luxury avatar frame */}
      <div className="relative group">
        <div className="relative h-28 w-28 overflow-hidden rounded-full p-[2px] bg-gradient-to-b from-white/25 via-white/10 to-transparent shadow-2xl shadow-black/70">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-card">
            <Image
              src="/fayez-profile.jpg"
              alt="Fayez Ahmad"
              fill
              sizes="112px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Quiet status dot */}
        <span
          className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-background"
          title="Active"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>
      </div>

      {/* Title & Headline */}
      <div className="flex flex-col items-center gap-1.5">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Fayez Ahmad
        </h1>
        <p className="font-mono text-xs font-semibold tracking-wide text-primary">
          Tech Creator • Gamer • Video Editor
        </p>
      </div>
    </motion.section>
  )
}
