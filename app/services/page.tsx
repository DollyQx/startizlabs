import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ServicesDetailGrid } from "@/components/sections/services/ServicesDetailGrid";
import { PricingSection } from "@/components/sections/services/PricingSection";

export const metadata: Metadata = {
  title: "Startiz Labs Services — Strategy, Branding, Technology & Growth",
  description:
    "Comprehensive startup launch services. Get end-to-end strategy, brand identity design, technology development, copy content, search discoverability, and growth execution.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Startiz Labs Services — Strategy, Branding, Technology & Growth",
    description:
      "Comprehensive startup launch services. Get end-to-end strategy, brand identity design, technology development, copy content, search discoverability, and growth execution.",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Page Hero
───────────────────────────────────────────────────────────────────────────── */

function ServicesHero() {
  return (
    <section
      aria-label="Services overview"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,165,88,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Bottom edge line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <Container size="narrow" className="relative z-10 text-center">
        <div
          className="flex flex-col items-center gap-7"
          style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
        >
          <Badge variant="default">Services & Pricing</Badge>

          <h1
            id="services-page-heading"
            className="heading-1 text-fg"
          >
            Everything you need to build and launch.
          </h1>

          <p className="body-lg mx-auto max-w-[56ch]">
            From the first idea to your first customer, Startiz Labs brings
            strategy, creative, technology and growth together under one roof.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
            >
              Start Your Idea
            </Button>
            <Button
              href="#pricing"
              variant="ghost"
              size="lg"
            >
              View Pricing ↓
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <ServicesHero />

      {/* 6 service detail cards */}
      <ServicesDetailGrid />

      {/* Pricing — anchor id for the "View Pricing ↓" link */}
      <div id="pricing">
        <PricingSection />
      </div>
    </>
  );
}
