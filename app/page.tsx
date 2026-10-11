"use client"

import Image from "next/image"
import type React from "react"
import { useState } from "react"
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitch,
  Twitter,
  Youtube,
  Radio,
  ExternalLink,
} from "lucide-react"

export default function EditorialPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText("fayezahmad827@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  const projects = [
    {
      index: "01",
      title: "Hallway Chat",
      category: "Real-time Video Network",
      status: "Live Production",
      statusType: "live",
      image: "/hallway-preview.png",
      description:
        "Random 1-on-1 video chats built strictly for college life across 50+ verified campuses. Features instant student rooms, WebRTC video streams, and study-partner matching.",
      href: "https://hallwaychat.online",
      tag: "hallwaychat.online",
    },
    {
      index: "02",
      title: "Flunked",
      category: "Academic Survival Platform",
      status: "Live Production · 19+ Tools",
      statusType: "live",
      image: "/flunked-preview.png",
      description:
        "Tools built for the chaos of college. Free micro-calculators for attendance bunks (75% cutoff rule), CTC in-hand reality checks, and semester survival math.",
      href: "https://flunked.online",
      tag: "flunked.online",
    },
    {
      index: "03",
      title: "DualCamera",
      category: "Creator Utility",
      status: "In Development",
      statusType: "dev",
      image: null,
      description:
        "Multi-angle simultaneous video recording suite for vloggers, tutorial makers, and streamers capturing front and back perspectives.",
      href: "#",
      tag: "v1.0 Beta",
    },
    {
      index: "04",
      title: "GitHub Repository Index",
      category: "Open Source",
      status: "48 Public Repos",
      statusType: "metric",
      image: null,
      description:
        "A public catalog of experiments, web tools, utilities, and algorithmic side projects built with modern TypeScript, React, and Next.js.",
      href: "https://github.com/PinecoXZ?tab=repositories",
      tag: "@PinecoXZ",
    },
    {
      index: "05",
      title: "Interactive Portfolio & Resume",
      category: "Personal Archive",
      status: "Deployed",
      statusType: "live",
      image: null,
      description:
        "Comprehensive showcase detailing technical proficiencies, complete project retrospectives, and downloadable credentials.",
      href: "https://portfolio-lovat-tau-81.vercel.app/",
      tag: "portfolio.vercel.app",
    },
  ]

  const mediaChannels = [
    {
      name: "Gaming Channel",
      handle: "@pinecoxz",
      platform: "YouTube",
      href: "https://www.youtube.com/@pinecoxz",
      focus: "Pokémon Unite ranked climbs, meta analyses, and gameplay commentary.",
    },
    {
      name: "Other Channel",
      handle: "@hechos786",
      platform: "YouTube",
      href: "https://www.youtube.com/@hechos786",
      focus: "Creative video productions, motion cuts, and edits.",
    },
    {
      name: "Live Broadcasts",
      handle: "madmaxunite",
      platform: "Twitch",
      href: "https://www.twitch.tv/madmaxunite",
      focus: "Live gameplay sessions, community matches, and ranked sessions.",
    },
  ]

  const socialLinks = [
    { label: "YouTube (Gaming)", handle: "@pinecoxz", href: "https://www.youtube.com/@pinecoxz", icon: Youtube },
    { label: "YouTube (Other)", handle: "@hechos786", href: "https://www.youtube.com/@hechos786", icon: Youtube },
    { label: "GitHub", handle: "@PinecoXZ", href: "https://github.com/PinecoXZ", icon: Github },
    { label: "Twitter / X", handle: "@fayez_ahmad499", href: "https://x.com/fayez_ahmad499", icon: Twitter },
    { label: "Instagram", handle: "@_fayez_087", href: "https://www.instagram.com/_fayez_087/?hl=en", icon: Instagram },
    { label: "Twitch", handle: "@madmaxunite", href: "https://www.twitch.tv/madmaxunite", icon: Twitch },
    { label: "LinkedIn", handle: "Fayez Ahmad", href: "https://www.linkedin.com/in/fayez-ahmad-624619333/", icon: Linkedin },
  ]

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 sm:px-10 sm:py-20 font-sans text-[#1c1a17]">
      {/* ── MASTHEAD ── */}
      <header className="border-b border-[#e5dfd3] pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs tracking-wider text-[#756f65]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#1c1a17]">INDEX / 2026</span>
            <span className="text-[#c7bfb1]">/</span>
            <span>BHUBANESWAR, INDIA</span>
          </div>

          <div className="flex items-center gap-2 text-[#2e5241]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2e5241] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2e5241]" />
            </span>
            <span className="font-semibold uppercase tracking-widest text-[11px]">
              Available for Projects
            </span>
          </div>
        </div>
      </header>

      {/* ── HERO BIOGRAPHY ── */}
      <section className="py-12 sm:py-16 border-b border-[#e5dfd3]">
        <div className="grid grid-cols-[1fr_auto] gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-6 sm:gap-y-8 items-start">
          {/* Header Title Block (Left on mobile, left on desktop) */}
          <div className="space-y-2 col-start-1 col-end-2">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#9a3412]">
              Developer · Video Creator · Gamer
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#141312] leading-[1.08]">
              Fayez Ahmad
            </h1>
          </div>

          {/* Portrait with hairline frame (Right on mobile & desktop) */}
          <div className="col-start-2 col-end-3 md:row-span-2 relative h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 shrink-0 self-start overflow-hidden rounded-lg border border-[#ded7c8] bg-white p-1 shadow-sm">
            <div className="relative h-full w-full overflow-hidden rounded">
              <Image
                src="/fayez-profile.jpg"
                alt="Fayez Ahmad"
                fill
                sizes="(max-width: 640px) 80px, 144px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Body Content Block (Spans full width on mobile below title+photo; spans left column on desktop) */}
          <div className="col-span-2 md:col-span-1 space-y-6 max-w-xl">
            <p className="font-serif text-xl sm:text-2xl font-light italic leading-relaxed text-[#423e38]">
              "Building intentional digital experiences, crafting rhythm-driven video productions, and competing in ranked gaming."
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-[#5c564c] font-normal">
              Based in India, I design and engineer modern web software, publish gaming content and video edits, and compete in Pokémon Unite and strategy games.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-md bg-[#1c1a17] px-3.5 py-1.5 text-xs font-mono font-medium text-[#faf7f2] transition-all hover:bg-[#38342f]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-[#a8a29e]" />
                    <span>fayezahmad827@gmail.com</span>
                  </>
                )}
              </button>

              <a
                href="https://portfolio-lovat-tau-81.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-[#dbd4c6] bg-white px-3 py-1.5 text-xs font-mono font-medium text-[#1c1a17] transition-all hover:border-[#1c1a17]"
              >
                <span>Portfolio</span>
                <ArrowUpRight className="h-3 w-3 text-[#8c8578]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 01: SELECTED WORKS ── */}
      <section className="py-12 border-b border-[#e5dfd3]">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#756f65]">
            01 / Selected Works & Code
          </h2>
          <span className="font-mono text-xs text-[#9c9486]">
            5 Entries
          </span>
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target={p.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="editorial-card group block p-6 rounded-md hover:border-[#a39886]"
            >
              {p.image && (
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded border border-[#ded7c8] bg-[#f5f1e8] mb-5">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 850px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#f0ebd9] pb-3 mb-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-[#9c9486] font-semibold">
                    {p.index}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl font-medium text-[#1c1a17] group-hover:text-[#9a3412] transition-colors">
                    {p.title}
                  </span>
                  <span className="hidden sm:inline font-mono text-[11px] text-[#78716c]">
                    — {p.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
                  <span
                    className={`rounded px-2 py-0.5 text-[11px] font-medium ${
                      p.statusType === "live"
                        ? "bg-[#e8f3ed] text-[#2e5241]"
                        : p.statusType === "dev"
                        ? "bg-[#fef3c7] text-[#92400e]"
                        : "bg-[#f3f0e8] text-[#5c564c]"
                    }`}
                  >
                    {p.status}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#a8a29e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1c1a17]" />
                </div>
              </div>

              <p className="text-sm leading-relaxed text-[#5c564c]">
                {p.description}
              </p>

              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#8c8578]">
                <span>{p.tag}</span>
                <span className="text-[#9a3412] opacity-0 group-hover:opacity-100 transition-opacity">
                  Open Project →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── SECTION 02: BROADCASTS & MEDIA ── */}
      <section className="py-12 border-b border-[#e5dfd3]">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#756f65]">
            02 / Media Channels & Streaming
          </h2>
          <span className="font-mono text-xs text-[#9c9486]">
            Active Channels
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mediaChannels.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-card group flex flex-col justify-between p-5 rounded-md hover:border-[#a39886]"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold text-[#9a3412]">
                    {ch.platform}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#a8a29e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1c1a17]" />
                </div>
                <h3 className="font-serif text-lg font-medium text-[#1c1a17] group-hover:text-[#9a3412] transition-colors">
                  {ch.name}
                </h3>
                <p className="text-xs leading-relaxed text-[#5c564c]">
                  {ch.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0ebd9] mt-4 font-mono text-[11px] text-[#78716c]">
                {ch.handle}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── SECTION 03: DISCIPLINES ── */}
      <section className="py-12 border-b border-[#e5dfd3]">
        <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#756f65] mb-8">
          03 / Practice & Disciplines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-medium text-[#1c1a17]">
              Web Engineering
            </h3>
            <p className="text-sm leading-relaxed text-[#5c564c]">
              Architecting fast frontend applications with Next.js, modern TypeScript, responsive interfaces, and accessible design systems.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-lg font-medium text-[#1c1a17]">
              Video Production
            </h3>
            <p className="text-sm leading-relaxed text-[#5c564c]">
              Cutting dynamic motion sequences, short-form viral storytelling, music sync, and visual grading across digital formats.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-lg font-medium text-[#1c1a17]">
              Ranked Gaming
            </h3>
            <p className="text-sm leading-relaxed text-[#5c564c]">
              High-tier competitive play in Pokémon Unite and strategy games, analyzing macro play, meta shifts, and community strategies.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 04: DIRECTORY & CORRESPONDENCE ── */}
      <section className="py-12 border-b border-[#e5dfd3]">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-[#756f65]">
            04 / Directory & Correspondence
          </h2>
          <span className="font-mono text-xs text-[#9c9486]">
            Get In Touch
          </span>
        </div>

        <div className="editorial-card p-6 sm:p-8 rounded-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-serif text-xl sm:text-2xl font-medium text-[#1c1a17]">
                Let's create something together.
              </p>
              <p className="text-xs sm:text-sm text-[#5c564c] mt-1">
                Open for software projects, video collaborations, and gaming inquiries.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded bg-[#1c1a17] px-4 py-2.5 text-xs font-mono font-medium text-[#faf7f2] transition-colors hover:bg-[#38342f] self-start sm:self-auto shrink-0"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy fayezahmad827@gmail.com</span>
                </>
              )}
            </button>
          </div>

          <div className="border-t border-[#f0ebd9] pt-6">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#756f65] mb-3">
              Social Directory
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col rounded border border-[#e8e2d5] bg-[#faf8f4] p-3 text-xs transition-colors hover:border-[#1c1a17] hover:bg-white"
                  >
                    <div className="flex items-center justify-between text-[#78716c] mb-1">
                      <Icon className="h-3.5 w-3.5" />
                      <ArrowUpRight className="h-3 w-3" />
                    </div>
                    <span className="font-semibold text-[#1c1a17]">{s.label}</span>
                    <span className="font-mono text-[10px] text-[#8c8578] truncate">
                      {s.handle}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── COLOPHON / FOOTER ── */}
      <footer className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8c8578]">
        <div>
          © {new Date().getFullYear()} Fayez Ahmad · Printed digitally
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://portfolio-lovat-tau-81.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1a17] transition-colors underline underline-offset-4"
          >
            Portfolio & Resume
          </a>
          <span>·</span>
          <a
            href="https://github.com/PinecoXZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1a17] transition-colors underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
