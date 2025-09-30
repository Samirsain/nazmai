"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useUser } from "@/contexts/user-context"
import { Check, Sparkles, Crown } from "lucide-react"

const tiers = [
  {
    name: "Free",
    price: "₹0",
    period: "",
    features: [
      "10 shayari per day",
      "6 basic moods",
      "4 languages (Hindi, Urdu, English, Hinglish)",
      "3 style options",
      "Copy & share",
    ],
    cta: "Current Plan",
    variant: "secondary" as const,
    planValue: "free" as const,
    icon: null,
  },
  {
    name: "Pro",
    price: "₹199",
    period: "/month",
    features: [
      "100 shayari per day",
      "All basic moods",
      "All languages & styles",
      "Save to collections",
      "No watermark",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    variant: "default" as const,
    highlighted: true,
    planValue: "pro" as const,
    icon: Sparkles,
  },
  {
    name: "Premium",
    price: "₹499",
    period: "/month",
    features: [
      "Unlimited generations",
      "6 exclusive premium moods",
      "5 premium themes",
      "Advanced AI quality",
      "Early access to features",
      "24/7 priority support",
    ],
    cta: "Go Premium",
    variant: "outline" as const,
    planValue: "premium" as const,
    icon: Crown,
  },
]

export function Pricing() {
  const { plan, setPlan } = useUser()

  const handlePlanSelect = (selectedPlan: "free" | "pro" | "premium") => {
    setPlan(selectedPlan)
    // In a real app, you would integrate payment processing here
    alert(`Plan changed to ${selectedPlan.toUpperCase()}!\n\nNote: This is a demo. In production, you would integrate payment processing (Stripe, Razorpay, etc.)`)
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">Unlock the power of AI-generated shayari</p>
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((t) => {
          const Icon = t.icon
          const isCurrentPlan = plan === t.planValue
          
          return (
            <Card
              key={t.name}
              className={`glass-card transition-all hover:shadow-lg relative overflow-hidden ${
                t.highlighted ? "ring-2 ring-primary scale-105 md:scale-110" : ""
              } ${isCurrentPlan ? "ring-2 ring-green-500" : ""}`}
            >
              {t.highlighted && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg font-semibold">
                  Most Popular
                </div>
              )}
              
              {isCurrentPlan && (
                <div className="absolute top-0 left-0 bg-green-500 text-white text-xs px-3 py-1 rounded-br-lg font-semibold">
                  Current Plan
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  {Icon && <Icon className="h-5 w-5 text-primary" />}
                  <CardTitle className="text-2xl">{t.name}</CardTitle>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{t.price}</span>
                  <span className="text-muted-foreground ml-1">{t.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full font-semibold" 
                  variant={isCurrentPlan ? "outline" : t.variant}
                  onClick={() => handlePlanSelect(t.planValue)}
                  disabled={isCurrentPlan}
                >
                  {isCurrentPlan ? "Current Plan" : t.cta}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          All plans include access to our AI-powered shayari generator. Upgrade anytime.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Demo Mode: Payment integration not implemented. Plan changes are saved locally.
        </p>
      </div>
    </section>
  )
}
