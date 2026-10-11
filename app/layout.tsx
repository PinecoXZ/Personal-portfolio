import type { Metadata, Viewport } from "next"
import { Newsreader, Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-lovat-tau-81.vercel.app"),
  title: "Fayez Ahmad — Personal Index & Works",
  description:
    "The personal index of Fayez Ahmad. Developer, creator, and gamer crafting modern web software and media.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Fayez Ahmad — Personal Index & Works",
    description: "Developer, creator, and gamer. Selected works, media channels, and correspondence.",
    type: "website",
    url: "https://portfolio-lovat-tau-81.vercel.app",
    siteName: "Fayez Ahmad",
    images: [
      {
        url: "/fayez-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Fayez Ahmad Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@fayez_ahmad499",
    creator: "@fayez_ahmad499",
    title: "Fayez Ahmad — Personal Index & Works",
    description: "Developer, creator, and gamer. Selected works, media channels, and correspondence.",
    images: ["/fayez-profile.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: "#faf7f2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-[#faf7f2] text-[#1a1918] antialiased selection:bg-[#e4dcce] selection:text-[#1a1918]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
