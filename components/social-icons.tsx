import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Github, Twitter, Instagram, Youtube, Facebook, Globe } from "lucide-react"

type SocialItem = {
  name: string
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const DEFAULT_LINKS: SocialItem[] = [
  { name: "Twitter", href: "https://x.com/", Icon: Twitter },
  { name: "Instagram", href: "https://www.instagram.com/samir_sain0001?", Icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/", Icon: Youtube },
  { name: "Facebook", href: "https://facebook.com/", Icon: Facebook },
  { name: "GitHub", href: "https://github.com/", Icon: Github },
  { name: "Website", href: "https://example.com/", Icon: Globe },
]

export function SocialIcons({
  links = DEFAULT_LINKS,
  className,
  iconClassName,
  size = "md",
}: {
  links?: SocialItem[]
  className?: string
  iconClassName?: string
  size?: "sm" | "md" | "lg" | "xl"
}) {
  const iconSize = size === "xl" ? "h-7 w-7" : size === "lg" ? "h-6 w-6" : size === "sm" ? "h-4 w-4" : "h-5 w-5"

  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {links.map(({ name, href, Icon }) => (
        <li key={name}>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
            className={cn(
              "text-muted-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ring-offset-background",
              "transition-all hover:-translate-y-0.5", // subtle motion for premium feel
              className,
            )}
          >
            <Icon className={cn(iconSize, iconClassName)} aria-hidden="true" />
            <span className="sr-only">{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default SocialIcons
