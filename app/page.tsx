import Image from "next/image"
import { ShayariGenerator } from "@/components/shayari-generator"
import { AuthNav } from "@/components/auth-nav"
import SocialIcons from "@/components/social-icons"

export default function Home() {
  return (
    <main id="top" className="min-h-dvh">
      <header className="border-b bg-card/70 supports-[backdrop-filter]:backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/nazmai-logo.png"
              alt="NazmAI logo"
              width={48}
              height={48}
              className="rounded-md object-contain"
            />
            <h1 className="text-balance text-xl font-semibold">NazmAI — Shayari Powered by AI</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <AuthNav />
            <a
              href="#try"
              aria-describedby="try-desc"
              className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Try it
            </a>
            <span id="try-desc" className="sr-only">
              Jump to the generator section
            </span>
          </div>
        </div>
      </header>

      <section className="bg-hero-gradient mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <span className="inline-flex w-fit items-center rounded-full bg-accent px-2 py-1 text-xs text-accent-foreground ring-1 ring-border">
            NazmAI Shayari
          </span>
          <h2 className="text-pretty text-3xl md:text-4xl font-semibold leading-tight">
            Express any mood with personalized shayari
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Select a mood or type your own. NazmAI crafts elegant couplets you can share anywhere—subtle, soulful, and
            tailored to how you feel.
          </p>
          <ul className="text-sm text-muted-foreground grid gap-2">
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              Poetic lines in Hindi/Urdu/Roman (as you prefer)
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              Clean typography, accessible colors, and smooth hover effects
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
              Free to try—no sign-up required
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image
              src="/images/poet-hero.jpg"
              alt="Poet portrait"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-lg object-cover aspect-[4/3] ring-1 ring-border ring-offset-1 ring-offset-background transition-transform hover:-translate-y-1 hover:shadow-sm"
            />
            <Image
              src="/images/poet-hero.jpg"
              alt="Poet portrait"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-lg object-cover aspect-[4/3] ring-1 ring-border ring-offset-1 ring-offset-background transition-transform hover:-translate-y-1 hover:shadow-sm"
            />
            <Image
              src="/images/poet-hero.jpg"
              alt="Poet portrait"
              width={800}
              height={520}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="rounded-lg object-cover aspect-[4/3] ring-1 ring-border ring-offset-1 ring-offset-background transition-transform hover:-translate-y-1 hover:shadow-sm"
            />
          </div>
        </div>
      </section>

      <section id="try" className="border-t bg-accent/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="glass-card rounded-xl p-4 md:p-6">
            <h2 className="text-lg font-semibold">Generate Shayari</h2>
            <p className="text-sm text-muted-foreground mt-1">Enter a theme or keyword and pick a language.</p>
            <div className="mt-4">
              <ShayariGenerator />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t" aria-label="Powered by Samir Sain">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NazmAI — Created by Samir Sain</p>
          <div className="flex items-center gap-4">
            <SocialIcons />
            <a
              href="#top"
              className="underline-offset-4 hover:underline hover:text-foreground"
              aria-label="Back to top"
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
