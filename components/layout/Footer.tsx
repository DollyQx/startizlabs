import Link from "next/link";
import { Globe, Camera, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";

type FooterLink = { label: string; href: string };

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="label-sm text-fg">{title}</h3>
      <ul className="flex flex-col gap-3" role="list">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-fg-muted transition-colors hover:text-fg focus-visible:text-fg focus-visible:outline-none focus-visible:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

const solutionLinks: FooterLink[] = [
  { label: "Strategy", href: "/services" },
  { label: "Branding", href: "/services" },
  { label: "Website & Technology", href: "/services" },
  { label: "Content & Marketing", href: "/services" },
  { label: "Creator Solutions", href: "/creators" },
];

const exploreLinks: FooterLink[] = [
  { label: "Build With AI", href: "/contact" },
  { label: "Launch Planner", href: "/contact" },
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-surface"
      aria-label="Site footer"
    >
      <Container className="py-16">
        {/* ── Top grid ──────────────────────────────────────────── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column — spans 2 on lg */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              aria-label={`${SITE_NAME} — home`}
              className="w-fit focus-visible:outline-none focus-visible:underline"
            >
              <span className="text-base font-bold tracking-widest text-fg">
                STARTIZ
                <span className="text-brand-500">.</span>
                LABS
              </span>
            </Link>

            <p className="label-sm text-brand-400">{SITE_TAGLINE}</p>

            <p className="max-w-[28ch] text-sm leading-relaxed text-fg-muted">
              {SITE_DESCRIPTION}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Startiz Labs on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-brand-500/30 hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Globe className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Startiz Labs on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-brand-500/30 hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Camera className="h-4 w-4" aria-hidden />
              </a>
              <a
                href="mailto:hello@startizlabs.com"
                aria-label="Email Startiz Labs"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-brand-500/30 hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>

          {/* Link groups */}
          <FooterLinkGroup title="Company"   links={companyLinks} />
          <FooterLinkGroup title="Solutions" links={solutionLinks} />
          <FooterLinkGroup title="Explore"   links={exploreLinks} />
        </div>

        {/* ── Bottom bar ────────────────────────────────────────── */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-fg-subtle">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-fg-subtle transition-colors hover:text-fg-muted focus-visible:outline-none focus-visible:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
