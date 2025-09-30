"use client"

import { cn } from "@/lib/utils"

type MoodChipProps = {
  label: string
  selected?: boolean
  onClick?: () => void
}

export function MoodChip({ label, selected, onClick }: MoodChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1 text-sm transition-all",
        "hover:-translate-y-0.5 hover:shadow-md",
        selected 
          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg" 
          : "bg-card text-foreground hover:bg-accent border-primary/20",
      )}
      aria-pressed={selected}
    >
      {label}
    </button>
  )
}
