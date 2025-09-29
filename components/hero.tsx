"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-hero-gradient">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs glass-card text-muted-foreground">
          <span>Poetic. Minimal. Premium.</span>
        </div>
        <h1 className="mt-5 text-balance text-3xl md:text-5xl font-semibold">
          Generate Beautiful Shayari for Every Mood
        </h1>
        <p className="mt-3 text-pretty text-muted-foreground md:text-lg">
          Hindi • Urdu • English • Hinglish — crafted with elegance by Samir.
        </p>
        <div className="mt-6">
          <Link
            href="#generator"
            className="inline-flex items-center rounded-lg px-5 py-3 glass-card transition-all hover:shadow-md"
          >
            Generate Shayari
          </Link>
        </div>
      </div>
    </section>
  )
}
