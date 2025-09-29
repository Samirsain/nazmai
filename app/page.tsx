import Image from "next/image"
import { ShayariGenerator } from "@/components/shayari-generator"

export default function Home() {
  return (
    <main className="min-h-dvh">
      <header className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/seed-1.jpg"
              alt="Spice seeds texture"
              width={40}
              height={40}
              className="rounded-md object-cover"
            />
            <h1 className="text-balance text-xl font-semibold">NazmAI — Mood-based Shayari</h1>
          </div>
          <a
            href="#try"
            className="rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium transition-transform hover:scale-[1.02] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Try it
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-4">
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
          <div className="grid grid-cols-3 gap-3">
            <Image
              src="/images/seed-1.jpg"
              alt="Cumin seeds close-up"
              width={400}
              height={260}
              className="rounded-lg object-cover aspect-[4/3] ring-1 ring-border transition-transform hover:-translate-y-1"
            />
            <Image
              src="/images/seed-2.jpg"
              alt="Fennel seeds on slate"
              width={400}
              height={260}
              className="rounded-lg object-cover aspect-[4/3] ring-1 ring-border transition-transform hover:-translate-y-1"
            />
            <Image
              src="/images/seed-3.jpg"
              alt="Cardamom pods"
              width={400}
              height={260}
              className="rounded-lg object-cover aspect-[4/3] ring-1 ring-border transition-transform hover:-translate-y-1"
            />
          </div>
        </div>
      </section>

      <section id="try" className="border-t bg-accent/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <ShayariGenerator />
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} NazmAI</p>
          <a href="#top" className="underline-offset-4 hover:underline hover:text-foreground" aria-label="Back to top">
            Back to top
          </a>
        </div>
      </footer>
    </main>
  )
}
