"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Free",
    price: "₹0",
    features: ["10 shayari/day", "Basic styles", "Copy & share"],
    cta: "Get Started",
    variant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "₹199/mo",
    features: ["Unlimited shayari", "Advanced styles", "Collections"],
    cta: "Upgrade",
    variant: "default" as const,
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹499/mo",
    features: ["All Pro features", "Priority generation", "Early access"],
    cta: "Go Premium",
    variant: "outline" as const,
  },
]

export function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-center text-2xl md:text-3xl font-semibold">Simple Pricing</h2>
      <p className="text-center text-muted-foreground mt-2">Choose a plan that fits your poetic journey.</p>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <Card
            key={t.name}
            className={`glass-card transition-all hover:shadow-md ${t.highlighted ? "ring-1 ring-foreground/10" : ""}`}
          >
            <CardHeader>
              <CardTitle className="flex items-baseline justify-between">
                <span>{t.name}</span>
                <span className="text-xl">{t.price}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant={t.variant}>
                {t.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
