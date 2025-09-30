"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { MoodChip } from "./mood-chip"
import { useUser } from "@/contexts/user-context"
import { Sparkles } from "lucide-react"

type ApiResponse = {
  text: string
  error?: string
}

// All moods available for everyone!
const PRESETS = [
  "Romantic", 
  "Sad", 
  "Happy", 
  "Nostalgic", 
  "Motivational", 
  "Mystic",
  "Philosophical", 
  "Spiritual", 
  "Revolutionary", 
  "Sufi", 
  "Nature", 
  "Existential"
]

// Beautiful themes for everyone
const THEMES = {
  sunset: {
    name: "Sunset Dreams",
    gradient: "from-orange-400 via-pink-500 to-purple-600",
    textColor: "text-white",
  },
  ocean: {
    name: "Ocean Depths",
    gradient: "from-blue-400 via-cyan-500 to-teal-600",
    textColor: "text-white",
  },
  forest: {
    name: "Forest Whispers",
    gradient: "from-green-400 via-emerald-500 to-lime-600",
    textColor: "text-white",
  },
  midnight: {
    name: "Midnight Poetry",
    gradient: "from-indigo-600 via-purple-700 to-pink-800",
    textColor: "text-white",
  },
  classic: {
    name: "Classic Elegance",
    gradient: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    textColor: "text-foreground",
  },
}

export function ShayariGenerator() {
  const { generationCount, incrementGenerations } = useUser()
  const [mood, setMood] = useState<string>("Romantic")
  const [customMood, setCustomMood] = useState<string>("")
  const [lang, setLang] = useState<"hindi" | "urdu" | "english" | "hinglish">("hindi")
  const [style, setStyle] = useState<"soft" | "classic" | "modern">("soft")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<string>("")
  const [copied, setCopied] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<keyof typeof THEMES>("classic")

  const effectiveMood = useMemo(() => (customMood.trim().length ? customMood.trim() : mood), [mood, customMood])

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult("")

    try {
      const response = await fetch("/api/generate-shayari", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mood: effectiveMood,
          language: lang,
          style: style,
        }),
      })

      const data: ApiResponse = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate shayari")
      }

      setResult(data.text)
      incrementGenerations()
    } catch (err: any) {
      setError(err?.message || "Failed to generate shayari. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      // optional: could set an error toast
    }
  }

  const currentTheme = THEMES[selectedTheme]

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-2">
        <div className="rounded-lg border bg-card p-5">
          {/* Counter */}
          <div className="mb-4 p-3 rounded-md bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-between">
            <span className="text-sm font-medium">Total Generated:</span>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {generationCount}
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-3">Choose your mood</h3>
          
          {/* All Moods */}
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((m) => (
              <MoodChip
                key={m}
                label={m}
                selected={mood === m && customMood.trim().length === 0}
                onClick={() => {
                  setMood(m)
                  setCustomMood("")
                }}
              />
            ))}
          </div>

          <div className="mt-4 grid gap-3">
            <label className="text-sm text-muted-foreground" htmlFor="customMood">
              Or type your own mood
            </label>
            <input
              id="customMood"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="e.g. Rainy evening, longing, peaceful"
              value={customMood}
              onChange={(e) => setCustomMood(e.target.value)}
            />
          </div>

          {/* Theme Selector */}
          <div className="mt-4">
            <label className="text-sm text-muted-foreground mb-2 flex items-center gap-2">
              <Sparkles className="h-3 w-3 text-primary" />
              Choose Theme
            </label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {(Object.keys(THEMES) as Array<keyof typeof THEMES>).map((themeKey) => {
                const theme = THEMES[themeKey]
                return (
                  <button
                    key={themeKey}
                    type="button"
                    onClick={() => setSelectedTheme(themeKey)}
                    className={`p-2 rounded-md border text-xs transition-all ${
                      selectedTheme === themeKey
                        ? "ring-2 ring-primary border-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className={`h-6 rounded bg-gradient-to-r ${theme.gradient} mb-1`} />
                    <span>{theme.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm text-muted-foreground" htmlFor="lang">
                Language
              </label>
              <select
                id="lang"
                className="rounded-md border bg-background px-3 py-2 text-sm"
                value={lang}
                onChange={(e) => setLang(e.target.value as any)}
              >
                <option value="hindi">Hindi (देवनागरी)</option>
                <option value="urdu">Urdu (نستعلیق)</option>
                <option value="english">English</option>
                <option value="hinglish">Hinglish (Roman)</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-muted-foreground" htmlFor="style">
                Style
              </label>
              <select
                id="style"
                className="rounded-md border bg-background px-3 py-2 text-sm"
                value={style}
                onChange={(e) => setStyle(e.target.value as any)}
              >
                <option value="soft">Soft & Subtle</option>
                <option value="classic">Classic Ghazal</option>
                <option value="modern">Modern Minimal</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-6 w-full rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02] hover:shadow-md disabled:opacity-60"
          >
            {loading ? "Crafting..." : "Generate Shayari"}
          </button>

          {error && (
            <p className="mt-3 text-sm text-destructive" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="rounded-lg border bg-card p-5">
          <h3 className="text-lg font-semibold mb-3">Your poem</h3>
          <div
            className={`rounded-md border p-6 leading-relaxed min-h-[200px] ${
              result ? `bg-gradient-to-br ${currentTheme.gradient} ${currentTheme.textColor}` : "bg-background/60"
            }`}
            aria-live="polite"
            aria-busy={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Crafting your shayari...</p>
                </div>
              </div>
            ) : result ? (
              <div className="grid gap-4">
                {result
                  .split("\n")
                  .filter((l) => l.trim().length)
                  .map((line, idx) => (
                    <p key={idx} className="text-lg transition-transform hover:translate-x-1">
                      {line}
                    </p>
                  ))}
              </div>
            ) : (
              <div className="text-sm text-muted-foreground flex items-center justify-center h-full">
                Your generated shayari will appear here. Choose a mood and click Generate.
              </div>
            )}
          </div>

          {result ? (
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="inline-flex items-center rounded-md border bg-card px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Copy shayari to clipboard"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
              <span className="text-xs text-muted-foreground">Share anywhere</span>
            </div>
          ) : null}

          <div className="mt-5 grid grid-cols-3 gap-3">
            <img
              src="/images/poet-hero.jpg"
              alt="Poet portrait"
              className="rounded-md aspect-video object-cover ring-1 ring-border ring-offset-1 ring-offset-background transition-transform hover:-translate-y-1 hover:shadow-sm"
            />
            <img
              src="/images/poet-hero.jpg"
              alt="Poet portrait"
              className="rounded-md aspect-video object-cover ring-1 ring-border ring-offset-1 ring-offset-background transition-transform hover:-translate-y-1 hover:shadow-sm"
            />
            <img
              src="/images/poet-hero.jpg"
              alt="Poet portrait"
              className="rounded-md aspect-video object-cover ring-1 ring-border ring-offset-1 ring-offset-background transition-transform hover:-translate-y-1 hover:shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShayariGenerator
