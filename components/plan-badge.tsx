"use client"

import { useUser } from "@/contexts/user-context"
import { Crown, Sparkles } from "lucide-react"
import Link from "next/link"

export function PlanBadge() {
  const { plan, dailyGenerations, canGenerate, isPremium, isPro } = useUser()

  const getDailyLimit = () => {
    switch (plan) {
      case "free":
        return 10
      case "pro":
        return 100
      case "premium":
        return Infinity
      default:
        return 10
    }
  }

  const dailyLimit = getDailyLimit()

  return (
    <Link href="/plans" className="group">
      <div className="flex items-center gap-3 px-4 py-2 rounded-full border bg-card/80 backdrop-blur-sm hover:bg-accent transition-colors">
        <div className="flex items-center gap-1.5">
          {isPremium ? (
            <Crown className="h-4 w-4 text-yellow-500" />
          ) : isPro ? (
            <Sparkles className="h-4 w-4 text-primary" />
          ) : null}
          <span className="text-sm font-medium capitalize">{plan}</span>
        </div>
        
        <div className="h-4 w-px bg-border" />
        
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span className={canGenerate ? "text-green-600" : "text-red-600"}>
            {dailyGenerations}
          </span>
          <span>/</span>
          <span>{dailyLimit === Infinity ? "∞" : dailyLimit}</span>
        </div>
        
        {!isPremium && (
          <div className="ml-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            Upgrade →
          </div>
        )}
      </div>
    </Link>
  )
}
