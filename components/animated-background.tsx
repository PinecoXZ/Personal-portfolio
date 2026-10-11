export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Top central aura */}
      <div
        className="ambient-glow absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[min(720px,100vw)] rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.65 0.2 275 / 0.7) 0%, oklch(0.6 0.16 300 / 0.3) 45%, transparent 70%)",
        }}
      />

      {/* Subtle bottom-right turquoise/emerald wash */}
      <div
        className="ambient-glow absolute -bottom-32 -right-10 h-[440px] w-[440px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.16 165 / 0.6) 0%, oklch(0.7 0.15 200 / 0.2) 50%, transparent 70%)",
        }}
      />

      {/* Subtle mid-left deep indigo wash */}
      <div
        className="ambient-glow absolute top-1/3 -left-36 h-[380px] w-[380px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.18 260 / 0.6) 0%, transparent 65%)",
        }}
      />

      {/* Subtle micro-grid texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 50% 35%, black 25%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 25%, transparent 85%)",
        }}
      />
    </div>
  )
}
