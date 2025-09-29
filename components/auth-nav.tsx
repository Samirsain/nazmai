"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

type AuthData = { email: string; name?: string }

export function AuthNav() {
  const [auth, setAuth] = useState<AuthData | null>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem("samir_auth")
      if (stored) setAuth(JSON.parse(stored))
    } catch {}
  }, [])

  function signOut() {
    localStorage.removeItem("samir_auth")
    setAuth(null)
  }

  if (!auth) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/sign-in"
          className="rounded-md px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
        >
          Sign in
        </Link>
        <Link href="/sign-up" className="rounded-md bg-primary text-primary-foreground px-3 py-2 text-sm">
          Sign up
        </Link>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">Hi, {auth.name || "Samir"}</span>
      <Button variant="secondary" className="text-sm" onClick={signOut}>
        Sign out
      </Button>
    </div>
  )
}
