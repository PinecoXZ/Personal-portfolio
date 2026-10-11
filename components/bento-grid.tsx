"use client"

import Image from "next/image"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Youtube,
  Github,
  Mail,
  ArrowUpRight,
  Globe,
  Sparkles,
  Gamepad2,
  Check,
  Copy,
  Twitter,
  Instagram,
  Twitch,
  Linkedin,
  Video,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function BentoGrid() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText("fayezahmad827@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const socials = [
    { label: "YouTube (Gaming)", href: "https://www.youtube.com/@pinecoxz", icon: Youtube },
    { label: "YouTube (Other)", href: "https://www.youtube.com/@hechos786", icon: Youtube },
    { label: "GitHub", href: "https://github.com/PinecoXZ", icon: Github },
    { label: "Twitter / X", href: "https://x.com/fayez_ahmad499", icon: Twitter },
    { label: "Instagram", href: "https://www.instagram.com/_fayez_087/?hl=en", icon: Instagram },
    { label: "Twitch", href: "https://www.twitch.tv/madmaxunite", icon: Twitch },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fayez-ahmad-624619333/", icon: Linkedin },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-5 px-4 sm:px-6 py-8 sm:py-12">
      {/* Top Header bar */}
      <header className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-xs font-bold text-foreground shadow-sm">
            FA
          </div>
          <span className="font-mono text-xs font-medium tracking-tight text-muted-foreground">
            fayez.page
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[11px] tracking-tight">Open for Collabs</span>
        </div>
      </header>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* 1. Hero Profile Tile (Spans 2 cols on md, 2 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          className="bento-card md:col-span-2 lg:col-span-2 p-6 flex flex-col justify-between gap-6"
        >
          <div className="flex flex-row items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                Tech Creator • Gamer • Video Editor
              </span>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                Fayez Ahmad
              </h1>
              <span className="font-mono text-xs text-muted-foreground/80 mt-0.5">
                Bhubaneswar, India
              </span>
            </div>
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-card/60 shadow-xl">
              <Image
                src="/fayez-profile.jpg"
                alt="Fayez Ahmad"
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            Building sleek web applications, producing creative video edits, and grinding ranked Pokémon Unite. Welcome to my personal hub.
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-white/5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-foreground/80">
              ⚡ Web Development
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-foreground/80">
              🎮 Competitive Gaming
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-foreground/80">
              🎬 Video Production
            </span>
          </div>
        </motion.div>

        {/* 2. Featured Project 1: Hallway Chat (Spans 1 col on md, 2 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] as const }}
          className="bento-card md:col-span-1 lg:col-span-2 overflow-hidden flex flex-col justify-between group cursor-pointer"
        >
          <a
            href="https://hallwaychat.online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full justify-between"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-card/60">
              <Image
                src="/hallway-preview.png"
                alt="Hallway Chat — Meet Students on Campus"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-400 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live App
              </div>
            </div>

            <div className="p-5 flex items-end justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Featured Build
                </span>
                <span className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Hallway Chat
                </span>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  Next-generation real-time video chat built for students with instant rooms.
                </p>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        </motion.div>

        {/* 3. Featured Project 2: Flunked.online (Spans 2 cols on md/lg) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] as const }}
          className="bento-card md:col-span-1 lg:col-span-2 overflow-hidden flex flex-col justify-between group cursor-pointer"
        >
          <a
            href="https://flunked.online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full justify-between"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-card/60">
              <Image
                src="/flunked-preview.png"
                alt="Flunked — Student Survival Tools"
                fill
                sizes="(min-width: 1024px) 500px, 100vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-400 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Live App · 19+ Tools
              </div>
            </div>

            <div className="p-5 flex items-end justify-between gap-4">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Featured Product
                </span>
                <span className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  Flunked.online
                </span>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                  Tools built for the chaos of college. Attendance bunks, CTC in-hand math & survival guides.
                </p>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        </motion.div>

        {/* 4. Gaming Bento Tile (Spans 1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] as const }}
          className="bento-card p-5 flex flex-col justify-between gap-4"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
              <Gamepad2 className="h-5 w-5" />
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              Gaming
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-display text-base font-bold text-foreground">
              Pokémon Unite
            </span>
            <span className="font-mono text-xs text-primary font-medium mt-0.5">
              Ranked Grinder & Creator
            </span>
            <p className="text-xs text-muted-foreground/80 mt-1.5 leading-relaxed">
              Climbing masters, testing new meta builds, and creating gameplay breakdowns.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[11px] text-muted-foreground">
            <span>Clash of Clans</span>
            <span className="text-foreground/80">Active</span>
          </div>
        </motion.div>

        {/* 5. YouTube Channels Tile (Spans 2 cols on md/lg) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] as const }}
          className="bento-card md:col-span-2 lg:col-span-2 p-5 flex flex-col justify-between gap-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400">
                <Youtube className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold text-foreground">
                  YouTube Channels
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  2 Active Projects
                </span>
              </div>
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              @pinecoxz
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href="https://www.youtube.com/@pinecoxz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-white/8 bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-red-500/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-foreground group-hover:text-red-400 transition-colors">
                  Gaming Channel
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-400 transition-all" />
              </div>
              <span className="text-xs text-muted-foreground mt-1">
                @pinecoxz • Pokémon Unite & gaming
              </span>
            </a>

            <a
              href="https://www.youtube.com/@hechos786"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-xl border border-white/8 bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-red-500/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-foreground group-hover:text-red-400 transition-colors">
                  Other Channel
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red-400 transition-all" />
              </div>
              <span className="text-xs text-muted-foreground mt-1">
                @hechos786 • Creative video content
              </span>
            </a>
          </div>
        </motion.div>

        {/* 6. Featured Project 2: DualCamera Tile (Spans 1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] as const }}
          className="bento-card p-5 flex flex-col justify-between gap-4 group"
        >
          <div className="flex items-center justify-between">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <Video className="h-5 w-5" />
            </span>
            <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-2 py-0.5 font-mono text-[10px] text-amber-400">
              In Dev
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Creator Tool
            </span>
            <span className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
              DualCamera
            </span>
            <p className="text-xs text-muted-foreground/80 mt-1 leading-relaxed">
              Multi-angle simultaneous video recording app for vloggers and streamers.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[11px] text-muted-foreground">
            <span>Next Release</span>
            <span className="text-foreground/80">Coming Soon</span>
          </div>
        </motion.div>

        {/* 7. GitHub Bento Tile (Spans 1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] as const }}
          className="bento-card p-5 flex flex-col justify-between gap-4 group"
        >
          <a
            href="https://github.com/PinecoXZ?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-foreground">
                <Github className="h-5 w-5" />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Open Source
              </span>
              <span className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                GitHub Repos
              </span>
              <span className="font-mono text-xs text-primary font-medium mt-0.5">
                @PinecoXZ
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[11px] text-muted-foreground">
              <span>Public Repos</span>
              <span className="font-bold text-foreground">48</span>
            </div>
          </a>
        </motion.div>

        {/* 8. Portfolio Bento Tile (Spans 1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36, ease: [0.16, 1, 0.3, 1] as const }}
          className="bento-card p-5 flex flex-col justify-between gap-4 group"
        >
          <a
            href="https://portfolio-lovat-tau-81.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col h-full justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
                <Globe className="h-5 w-5" />
              </span>
              <span className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Main Site
              </span>
              <span className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                Portfolio & Resume
              </span>
              <span className="text-xs text-muted-foreground/80 mt-1 line-clamp-1">
                Explore complete builds, skills, and resume.
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[11px] text-muted-foreground">
              <span>Deployment</span>
              <span className="text-emerald-400">Online</span>
            </div>
          </a>
        </motion.div>

        {/* 9. Contact & Socials Bento Tile (Spans full width) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.44, ease: [0.16, 1, 0.3, 1] as const }}
          className="bento-card md:col-span-3 lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between gap-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold text-foreground">
                  Get In Touch
                </span>
                <span className="text-xs text-muted-foreground">
                  Inquiries, collaborations & questions
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-mono text-foreground hover:border-primary/50 hover:bg-white/[0.08] transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/5 flex-wrap gap-2">
            <span className="font-mono text-xs text-muted-foreground">
              fayezahmad827@gmail.com
            </span>

            {/* Social pills */}
            <div className="flex items-center gap-1.5">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-muted-foreground transition-all hover:border-primary/40 hover:bg-white/[0.08] hover:text-foreground hover:-translate-y-0.5"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="text-center font-mono text-[11px] text-muted-foreground/60 pt-4">
        © {new Date().getFullYear()} Fayez Ahmad · Built for the web
      </footer>
    </div>
  )
}
