"use client"

import type { LucideIcon } from "lucide-react"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Youtube, Github, Mail, ArrowUpRight, Globe, Check, Copy } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type SubLink = {
  label: string
  description?: string
  href: string
  isEmail?: boolean
}

type LinkItem = {
  label: string
  description: string
  href?: string
  icon: LucideIcon
  badge: string
  subLinks?: SubLink[]
}

const links: LinkItem[] = [
  {
    label: "YouTube",
    description: "Gaming & Creative Video Edits",
    icon: Youtube,
    badge: "2 Channels",
    subLinks: [
      {
        label: "Gaming Channel",
        description: "@pinecoxz • Pokémon Unite & gaming",
        href: "https://www.youtube.com/@pinecoxz",
      },
      {
        label: "Other Channel",
        description: "@hechos786 • Creative video content",
        href: "https://www.youtube.com/@hechos786",
      },
    ],
  },
  {
    label: "GitHub",
    description: "Source code & side projects",
    icon: Github,
    badge: "Open Source",
    subLinks: [
      {
        label: "GitHub Profile",
        description: "@PinecoXZ",
        href: "https://github.com/PinecoXZ",
      },
      {
        label: "Repositories",
        description: "Explore all public repos & projects",
        href: "https://github.com/PinecoXZ?tab=repositories",
      },
    ],
  },
  {
    label: "Portfolio",
    description: "Personal website, projects & resume",
    href: "https://portfolio-lovat-tau-81.vercel.app/",
    icon: Globe,
    badge: "Live",
  },
  {
    label: "Contact",
    description: "Inquiries & collaborations",
    icon: Mail,
    badge: "Email",
    subLinks: [
      {
        label: "Personal Email",
        description: "fayezahmad827@gmail.com",
        href: "mailto:fayezahmad827@gmail.com",
        isEmail: true,
      },
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
}

function SubLinkRow({ sl }: { sl: SubLink }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const email = sl.href.replace("mailto:", "")
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <a
      href={sl.href}
      target={sl.href.startsWith("http") ? "_blank" : undefined}
      rel={sl.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-primary/40 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
          {sl.label}
        </span>
        {sl.description && (
          <span className="font-mono text-xs text-muted-foreground">{sl.description}</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        {sl.isEmail && (
          <button
            type="button"
            onClick={handleCopy}
            className="flex h-7 items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-2 text-[11px] font-mono text-muted-foreground transition-colors hover:border-primary/50 hover:bg-white/[0.08] hover:text-foreground"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check className="h-3 w-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        )}
        <span className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  )
}

function LinkCardInner({ link }: { link: LinkItem }) {
  const Icon = link.icon

  return (
    <>
      {/* Icon pill with subtle bevel */}
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-foreground/90 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      {/* Label and description */}
      <span className="flex min-w-0 flex-1 flex-col text-left">
        <span className="flex items-center gap-2">
          <span className="font-display text-sm font-bold tracking-tight text-foreground">
            {link.label}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-muted-foreground/80">
            {link.badge}
          </span>
        </span>
        <span className="truncate text-xs text-muted-foreground/80">
          {link.description}
        </span>
      </span>

      {/* Trailing arrow button */}
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-transparent text-muted-foreground/50 transition-all duration-200 group-hover:border-white/10 group-hover:bg-white/[0.04] group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </>
  )
}

function LinkCard({ link }: { link: LinkItem }) {
  const cardClassName =
    "group acrylic-card relative flex w-full items-center gap-3.5 rounded-2xl p-3.5 sm:p-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer"

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  if (link.subLinks) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <motion.button
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            className={cardClassName}
          >
            <LinkCardInner link={link} />
          </motion.button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md border border-white/12 bg-background/95 backdrop-blur-2xl">
          <DialogHeader>
            <DialogTitle className="font-display text-base font-bold">{link.label}</DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {link.description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2 pt-2">
            {link.subLinks.map((sl) => (
              <SubLinkRow key={sl.label} sl={sl} />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <motion.a
      href={link.href}
      target={link.href?.startsWith("http") ? "_blank" : undefined}
      rel={link.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      className={cardClassName}
    >
      <LinkCardInner link={link} />
    </motion.a>
  )
}

export function LinksSection() {
  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="show"
      aria-label="Important links"
      className="flex flex-col gap-2.5"
    >
      {links.map((link) => (
        <LinkCard key={link.label} link={link} />
      ))}
    </motion.nav>
  )
}
