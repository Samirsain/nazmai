"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { MoodChip } from "./mood-chip"

type ApiResponse = {
  text: string
}

const PRESETS = ["Romantic", "Sad", "Happy", "Nostalgic", "Motivational", "Mystic"]

export function ShayariGenerator() {
  const [mood, setMood] = useState<string>("Romantic")
  const [customMood, setCustomMood] = useState<string>("")
  const [lang, setLang] = useState<"hindi" | "urdu" | "roman">("hindi")
  const [style, setStyle] = useState<"soft" | "classic" | "modern">("soft")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<string>("")

  const effectiveMood = useMemo(() => (customMood.trim().length ? customMood.trim() : mood), [mood, customMood])

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setResult("")
    try {
      const res = await fetch("/api/shayari", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mood: effectiveMood, lang, style }),
      })
      if (!res.ok) {
        throw new Error("Failed to generate shayari")
      }
      const data: ApiResponse = await res.json()
      setResult(data.text)
    } catch (err: any) {
      setError(err?.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="md:col-span-2">
        <div className="rounded-lg border bg-card p-5">
          <h3 className="text-lg font-semibold mb-3">Choose your mood</h3>
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
                <option value="roman">Roman (Hinglish)</option>
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
            className="rounded-md border bg-background/60 p-4 leading-relaxed"
            aria-live="polite"
            aria-busy={loading}
          >
            {result ? (
              <div className="grid gap-4">
                {result
                  .split("\n")
                  .filter((l) => l.trim().length)
                  .map((line, idx) => (
                    <p key={idx} className="transition-transform hover:translate-x-0.5 hover:text-foreground/90">
                      {line}
                    </p>
                  ))}
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">
                Your generated shayari will appear here. Choose a mood and click Generate.
              </div>
            )}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <img
              src="/images/seed-1.jpg"
              alt="Cumin seeds texture"
              className="rounded-md aspect-video object-cover ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-sm"
            />
            <img
              src="/images/seed-2.jpg"
              alt="Fennel seeds texture"
              className="rounded-md aspect-video object-cover ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-sm"
            />
            <img
              src="/images/seed-3.jpg"
              alt="Cardamom seeds texture"
              className="rounded-md aspect-video object-cover ring-1 ring-border transition-all hover:-translate-y-1 hover:shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
