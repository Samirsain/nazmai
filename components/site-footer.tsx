"use client"

import Link from "next/link"
import { Heart, Github, Twitter, Globe } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              NazmAI
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered shayari generator. Create beautiful poetry in multiple languages and moods.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="h-4 w-4 text-pink-500" />
              <span className="text-muted-foreground">100% Free Forever</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/my-collection" className="hover:text-foreground transition-colors">
                  My Collection
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Info */}
          <div>
            <h4 className="font-semibold mb-4">Created By</h4>
            <p className="text-sm mb-3">
              <span className="font-semibold text-foreground">Samir Sain</span>
              <br />
              <span className="text-muted-foreground">Full Stack Developer</span>
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/samirsain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/samirsain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://samirsain.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
                aria-label="Portfolio"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-foreground">Samir Sain</span>. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-3 w-3 text-pink-500" /> using{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary transition-colors"
            >
              Next.js
            </a>
            {" "}and{" "}
            <a
              href="https://groq.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-primary transition-colors"
            >
              Groq AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}