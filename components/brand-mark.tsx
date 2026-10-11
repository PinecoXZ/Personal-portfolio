"use client"

import { motion } from "framer-motion"

export function BrandMark() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
      className="flex w-full items-center justify-between"
      aria-label="Site header"
    >
      <div className="flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-xs font-bold text-foreground shadow-sm backdrop-blur-md">
          FA
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-semibold tracking-tight text-foreground/90">
            Fayez Ahmad
          </span>
          <span className="font-mono text-[10px] text-muted-foreground/80">
            Link Hub
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-[11px] font-mono tracking-tight">Available</span>
      </div>
    </motion.header>
  )
}
