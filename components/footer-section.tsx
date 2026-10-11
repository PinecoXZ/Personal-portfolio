"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Twitter, Instagram, Twitch, Linkedin, Github, Youtube } from "lucide-react"

type Social = {
  label: string
  href: string
  icon: LucideIcon
}

const socials: Social[] = [
  { label: "YouTube (Gaming)", href: "https://www.youtube.com/@pinecoxz", icon: Youtube },
  { label: "YouTube (Other)", href: "https://www.youtube.com/@hechos786", icon: Youtube },
  { label: "GitHub", href: "https://github.com/PinecoXZ", icon: Github },
  { label: "Twitter / X", href: "https://x.com/fayez_ahmad499", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com/_fayez_087/?hl=en", icon: Instagram },
  { label: "Twitch", href: "https://www.twitch.tv/madmaxunite", icon: Twitch },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/fayez-ahmad-624619333/", icon: Linkedin },
]

export function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-4 flex flex-col items-center gap-3.5 pb-6"
    >
      <ul className="flex items-center gap-2" aria-label="Social profiles">
        {socials.map((social) => {
          const Icon = social.icon
          return (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.08] hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          )
        })}
      </ul>

      <p className="text-center font-mono text-[11px] text-muted-foreground/60">
        © {new Date().getFullYear()} Fayez Ahmad
      </p>
    </motion.footer>
  )
}
