"use client"

import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { FamousPoets } from "@/components/famous-poets"
import { SiteFooter } from "@/components/site-footer"
import { FreeBadge } from "@/components/free-badge"
import ShayariGenerator from "@/components/shayari-generator"
import { Wand2 } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <Hero />
      <FreeBadge />
      
      {/* Generator Section */}
      <main className="mx-auto max-w-7xl px-4 py-16">
        <section id="generator" className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200/30 dark:bg-purple-800/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200/30 dark:bg-pink-800/20 rounded-full blur-3xl" />
          
          <div className="relative glass-card rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-primary/10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-sm font-medium mb-4">
                <Wand2 className="h-4 w-4 text-primary" />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
                  AI Shayari Generator
                </span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                Create Your Perfect
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Shayari
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Select your mood, choose your language, and let AI craft beautiful poetry just for you
              </p>
            </div>

            {/* Generator */}
            <ShayariGenerator />
          </div>
        </section>
      </main>

      {/* Famous Poets Section */}
      <FamousPoets />
      
      <SiteFooter />
    </>
  )
}
