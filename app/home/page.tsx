"use client"

import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { Pricing } from "@/components/pricing"
import { SiteFooter } from "@/components/site-footer"
import ShayariGenerator from "@/components/shayari-generator"

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <Hero />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <section id="generator" className="glass-card rounded-xl p-4 md:p-6">
          <h2 className="text-xl font-semibold">Try the Shayari Generator</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Enter a theme (love, dosti, sadness) and choose a language (Hindi, Urdu, English, Hinglish).
          </p>
          <div className="mt-4">
            <ShayariGenerator />
          </div>
        </section>
        <Pricing />
      </main>
      <SiteFooter />
    </>
  )
}
