"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  NAV_LINKS,
  PRIMARY_CTA,
  SECONDARY_CTA,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/constants";

/**
 * Top-level navigation bar.
 *
 * - Desktop: logo | nav links | dual CTAs
 * - Mobile: logo | hamburger → slide-down menu with all links + CTAs
 * - Keyboard: Escape closes the mobile menu; focus returns to toggle button
 * - Scroll: transparent at top, fills in on scroll
 */
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Track scroll to show navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change (wrapped in startTransition to avoid cascading-render lint error)
  useEffect(() => {
    const t = setTimeout(() => setMobileOpen(false), 0);
    return () => clearTimeout(t);
  }, [pathname]);

  // Close on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape" && mobileOpen) {
      setMobileOpen(false);
      toggleRef.current?.focus();
    }
  }, [mobileOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-canvas/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* ── Logo ─────────────────────────────────────────────────── */}
        <Link
          href="/"
          aria-label={`${SITE_NAME} — home`}
          className="group flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-canvas rounded-sm"
        >
          <span className="text-base font-bold tracking-widest text-fg transition-colors group-hover:text-brand-400">
            STARTIZ
            <span className="text-brand-500">.</span>
            LABS
          </span>
          <span className="label-sm mt-0.5 text-fg-subtle">{SITE_TAGLINE}</span>
        </Link>

        {/* ── Desktop nav links ────────────────────────────────────── */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors rounded-md",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-canvas",
                  isActive(link.href)
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg hover:bg-surface",
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    aria-hidden
                    className="absolute bottom-0 left-1/2 h-px w-4 -translate-x-1/2 rounded-full bg-brand-500"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTAs ─────────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Button href={SECONDARY_CTA.href} variant="ghost" size="sm">
            {SECONDARY_CTA.label}
          </Button>
          <Button href={PRIMARY_CTA.href} variant="primary" size="sm">
            {PRIMARY_CTA.label}
          </Button>
        </div>

        {/* ── Mobile hamburger ─────────────────────────────────────── */}
        <button
          ref={toggleRef}
          type="button"
          className={cn(
            "lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-fg-muted",
            "transition-colors hover:bg-surface hover:text-fg",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-canvas",
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </nav>

      {/* ── Mobile menu ──────────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-hidden={!mobileOpen}
        className={cn(
          "lg:hidden overflow-hidden border-b border-border bg-canvas/95 backdrop-blur-md",
          "transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-5 pb-6 pt-2 sm:px-8">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive(link.href)
                      ? "bg-surface text-fg"
                      : "text-fg-muted hover:bg-surface hover:text-fg",
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  tabIndex={mobileOpen ? 0 : -1}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
            <Button
              href={PRIMARY_CTA.href}
              variant="primary"
              size="lg"
              className="w-full"
              tabIndex={mobileOpen ? 0 : -1}
            >
              {PRIMARY_CTA.label}
            </Button>
            <Button
              href={SECONDARY_CTA.href}
              variant="outline"
              size="lg"
              className="w-full"
              tabIndex={mobileOpen ? 0 : -1}
            >
              {SECONDARY_CTA.label}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
