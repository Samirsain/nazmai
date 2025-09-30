import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { UserProvider } from "@/contexts/user-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "NazmAI — AI-Powered Shayari Generator",
  description: "Generate beautiful shayari by mood in Hindi, Urdu, English, and Hinglish. Created by Samir Sain using Next.js.",
  creator: "Samir Sain",
  authors: [{ name: "Samir Sain" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        id="app"
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased min-h-dvh bg-background text-foreground`}
      >
        <UserProvider>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </UserProvider>
      </body>
    </html>
  )
}
