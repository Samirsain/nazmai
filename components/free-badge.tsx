"use client"

import { Heart, Zap } from "lucide-react"

export function FreeBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="glass-card rounded-full px-6 py-3 shadow-2xl border-2 border-primary/30 backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-pink-500 animate-pulse" />
          <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            100% Free Forever!
          </span>
          <Zap className="h-5 w-5 text-yellow-500 animate-pulse" />
        </div>
      </div>
    </div>
  )
}
