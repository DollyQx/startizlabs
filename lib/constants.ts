// ─────────────────────────────────────────────────────────────────────────────
// Site Metadata
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_NAME = "Startiz Labs";
export const SITE_TAGLINE = "From Idea to Launch.";
export const SITE_DESCRIPTION =
  "Startiz Labs is an end-to-end startup launch studio that helps founders, creators, and early-stage businesses turn ideas into launch-ready businesses.";
export const SITE_URL = "https://startizlabs.com";

// ─────────────────────────────────────────────────────────────────────────────
// Navigation
// ─────────────────────────────────────────────────────────────────────────────

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Creators", href: "/creators" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_CTA = {
  label: "Start Your Idea",
  href: "/contact",
};

export const SECONDARY_CTA = {
  label: "Build With AI",
  href: "/contact",
};

// ─────────────────────────────────────────────────────────────────────────────
// Footer Links
// ─────────────────────────────────────────────────────────────────────────────

export const FOOTER_SERVICES: NavLink[] = [
  { label: "Business Strategy", href: "/services" },
  { label: "Brand Identity", href: "/services" },
  { label: "Website Development", href: "/services" },
  { label: "Digital Marketing", href: "/services" },
  { label: "AI & Automation", href: "/services" },
  { label: "Creator Branding", href: "/creators" },
];

export const FOOTER_COMPANY: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
