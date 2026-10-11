"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, Sparkles } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Project = {
  title: string
  tag: string
  statusBadge: string
  href: string
  thumbnail: string
  message: string
  features: string[]
  linkText?: string
}

const projects: Project[] = [
  {
    title: "Hallway Chat",
    tag: "Video Chat App",
    statusBadge: "Live",
    href: "https://hallwaychat.online",
    thumbnail: "/hallway-preview.png",
    message:
      "A next-generation real-time video chat application built for students with instant peer connections and private lobbies.",
    features: ["Real-time WebRTC Video", "Instant Student Rooms", "Low Latency"],
    linkText: "Launch hallwaychat.online",
  },
  {
    title: "Flunked.online",
    tag: "Academic Survival Platform",
    statusBadge: "Live · 19+ Tools",
    href: "https://flunked.online",
    thumbnail: "/flunked-preview.png",
    message:
      "Student tools built for college reality: 75% attendance cutoff calculators, CTC in-hand reality checks, and survival math.",
    features: ["Attendance Bunk Math", "CTC In-Hand Calculator", "Zero Signup"],
    linkText: "Launch flunked.online",
  },
  {
    title: "DualCamera",
    tag: "Creator Tool",
    statusBadge: "In Progress",
    href: "#",
    thumbnail: "/dualcamera-tool.svg",
    message:
      "A creator tool for simultaneous dual-angle recording, designed for mobile creators, streamers, and vloggers.",
    features: ["Multi-Angle Capture", "Custom PIP Overlays", "Active Development"],
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          className="group acrylic-card relative flex flex-col overflow-hidden rounded-2xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"
        >
          {/* Card thumbnail container */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-card/80">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(min-width: 640px) 240px, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />

            {/* Status pill badge on thumbnail */}
            <span className="absolute top-2.5 right-2.5 rounded-full border border-white/10 bg-background/80 px-2 py-0.5 font-mono text-[9px] font-medium text-foreground/90 backdrop-blur-md">
              {project.statusBadge}
            </span>
          </div>

          {/* Card details */}
          <div className="flex flex-1 items-end justify-between gap-2 p-3 sm:p-3.5">
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-display text-sm font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </span>
              <span className="truncate font-mono text-[11px] text-muted-foreground/80">
                {project.tag}
              </span>
            </div>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-muted-foreground transition-all duration-200 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </div>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border border-white/12 bg-background/95 backdrop-blur-2xl">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <DialogTitle className="font-display text-lg font-bold">{project.title}</DialogTitle>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-primary">
              {project.statusBadge}
            </span>
          </div>
          <DialogDescription className="font-mono text-xs text-muted-foreground">
            {project.tag}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 pt-2">
          <p className="text-sm leading-relaxed text-muted-foreground/90">{project.message}</p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.features.map((feat) => (
              <span
                key={feat}
                className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {feat}
              </span>
            ))}
          </div>

          {project.href !== "#" && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full items-center justify-between rounded-xl border border-primary/30 bg-primary/10 p-3.5 transition-all duration-200 hover:border-primary/60 hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span className="text-sm font-semibold text-primary">
                {project.linkText || "Visit Project"}
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function FeaturedSection() {
  return (
    <section className="flex flex-col gap-3" aria-label="Featured projects">
      <div className="flex items-center justify-between px-1">
        <h2 className="flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
          <Sparkles className="h-3 w-3 text-primary" />
          Featured Builds
        </h2>
        <span className="font-mono text-[11px] text-muted-foreground/70">
          {projects.length} Works
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} index={idx} />
        ))}
      </div>
    </section>
  )
}
