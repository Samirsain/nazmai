"use client"

import { SocialIcons } from "./social-icons"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Samir • All rights reserved.</p>
        <SocialIcons size="lg" />
      </div>
    </footer>
  )
}
