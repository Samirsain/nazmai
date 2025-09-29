"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/my-collection", label: "My Collection" },
  { href: "/plans", label: "Premium Plans" },
  { href: "/contact", label: "Contact" },
]

export function SiteNav() {
  const pathname = usePathname()
  return (
    <header className="w-full sticky top-0 z-40 border-b bg-background/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Samir Shayari
        </Link>
        <nav className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm transition-colors",
                "hover:bg-muted/60",
                pathname === l.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
