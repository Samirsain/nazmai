"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function MyCollectionPage() {
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    try {
      const key = "samir_shayari_collection"
      const saved = JSON.parse(localStorage.getItem(key) || "[]")
      setItems(Array.isArray(saved) ? saved : [])
    } catch {}
  }, [])

  const copy = async (txt: string) => {
    await navigator.clipboard.writeText(txt)
  }

  const remove = (txt: string) => {
    const next = items.filter((i) => i !== txt)
    setItems(next)
    localStorage.setItem("samir_shayari_collection", JSON.stringify(next))
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">My Collection</h1>
      <p className="text-muted-foreground mt-1">Saved Shayari from your sessions.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.length === 0 && <p className="text-muted-foreground">No items saved yet.</p>}
        {items.map((txt) => (
          <div key={txt} className="glass-card rounded-xl p-4">
            <div className="font-shayari leading-relaxed whitespace-pre-wrap">{txt}</div>
            <div className="mt-3 flex gap-2">
              <Button size="sm" variant="secondary" onClick={() => copy(txt)}>
                Copy
              </Button>
              <Button size="sm" variant="outline" onClick={() => remove(txt)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
