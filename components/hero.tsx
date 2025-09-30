"use client"

import Link from "next/link"
import { Sparkles, Heart, Feather } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-blue-950/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-60 -left-40 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-1/3 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 glass-card text-sm font-medium backdrop-blur-xl border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AI-Powered Poetry Generation
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Generate Beautiful
            </span>
            <span className="block mt-2">
              Shayari for Every Mood
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the art of poetry with AI. From romantic ghazals to philosophical verses,
            create authentic shayari in multiple languages.
          </p>

          {/* Language tags */}
          <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium">
              🇮🇳 Hindi
            </span>
            <span className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium">
              🇵🇰 Urdu
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              🇬🇧 English
            </span>
            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
              💬 Hinglish
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="#generator"
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
            >
              <Feather className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span>Start Creating - 100% Free!</span>
            </Link>
            <Link
              href="#poets"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 glass-card backdrop-blur-xl border border-border font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              <Heart className="h-5 w-5 text-pink-500" />
              <span>Explore Poets</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                1000+
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Shayaris Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                12
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Mood Options</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                4
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ∞
              </div>
              <div className="mt-1 text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
