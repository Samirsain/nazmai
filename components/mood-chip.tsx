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
        "hover:-translate-y-0.5 hover:shadow-sm",
        selected ? "bg-primary text-primary-foreground border-transparent" : "bg-card text-foreground hover:bg-accent",
      )}
      aria-pressed={selected}
    >
      {label}
    </button>
  )
}
