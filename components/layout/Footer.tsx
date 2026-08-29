import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

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
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/company/startiz-labs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Startiz Labs on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-brand-500/30 hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <LinkedinIcon className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://instagram.com/startizlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Startiz Labs on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-brand-500/30 hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <InstagramIcon className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://facebook.com/startizlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Startiz Labs on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-brand-500/30 hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <FacebookIcon className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://youtube.com/@startizlabs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Startiz Labs on YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-brand-500/30 hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <YoutubeIcon className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="mailto:hello@startizlabs.com"
                aria-label="Email Startiz Labs"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-brand-500/30 hover:bg-surface-2 hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MailIcon className="h-5 w-5" aria-hidden />
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
