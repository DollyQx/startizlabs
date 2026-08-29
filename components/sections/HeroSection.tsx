"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/* ─── Floating decorative elements ─── */
function FloatingRing() {
  return (
    <div
      aria-hidden
      className="animate-float absolute right-[8%] top-[22%] hidden lg:block"
    >
      <div className="relative h-28 w-28 opacity-60">
        <div className="absolute inset-0 rounded-full border border-brand-500/25" />
        <div className="absolute inset-5 rounded-full border border-brand-500/15" />
        <div className="absolute inset-10 rounded-full border border-brand-500/10" />
        {/* Orbiting dot */}
        <div className="absolute -right-1 top-[38%] h-2.5 w-2.5 rounded-full bg-brand-500/60 shadow-[0_0_8px_2px_rgba(34,165,88,0.4)]" />
      </div>
    </div>
  );
}

function FloatingCard() {
  return (
    <div
      aria-hidden
      className="animate-float-alt absolute left-[7%] top-[28%] hidden lg:block"
    >
      <div className="rounded-xl border border-brand-500/15 bg-surface-2/70 px-4 py-3 backdrop-blur-sm">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-brand-500/70" />
          <div className="h-1.5 w-14 rounded-full bg-fg-subtle/50" />
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-20 rounded-full bg-fg-subtle/35" />
          <div className="h-1.5 w-16 rounded-full bg-fg-subtle/25" />
          <div className="h-1.5 w-24 rounded-full bg-fg-subtle/20" />
        </div>
      </div>
    </div>
  );
}

function FloatingDots() {
  return (
    <div
      aria-hidden
      className="animate-float-slow absolute bottom-[28%] right-[10%] hidden lg:block"
    >
      <div className="grid grid-cols-3 gap-1.5 opacity-40">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-1 w-1 rounded-full bg-brand-400"
            style={{ opacity: 0.3 + (i % 3) * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

function FloatingLabel() {
  return (
    <div
      aria-hidden
      className="animate-float absolute bottom-[35%] left-[9%] hidden lg:block"
      style={{ animationDelay: "2s" }}
    >
      <div className="rounded-full border border-brand-500/20 bg-surface/80 px-3 py-1.5 backdrop-blur-sm">
        <span className="label-sm text-brand-400/70">Launch Ready ↗</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-5 py-28 text-center"
    >
      {/* ── Background: animated grid ─────────────────────────── */}
      <div
        aria-hidden
        className="animate-grid pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* ── Background: central radial glow ───────────────────── */}
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute left-1/2 top-[45%] h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,165,88,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── Background: top edge glow ──────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      {/* ── Floating decorative elements ────────────────────────── */}
      <FloatingRing />
      <FloatingCard />
      <FloatingDots />
      <FloatingLabel />

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-7">
        {/* Badge */}
        <div style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}>
          <Badge variant="default">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-400" />
            End-to-End Startup Launch Studio
          </Badge>
        </div>

        {/* Headline */}
        <div style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}>
          <h1 className="heading-display text-fg">
            Your Idea.{" "}
            <span className="block text-brand-400">Our Execution.</span>
          </h1>
        </div>

        {/* Body */}
        <div style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.45s both" }}>
          <p className="body-lg mx-auto max-w-[52ch]">
            From strategy and branding to technology, content and growth,
            Startiz Labs helps turn ideas into launch-ready businesses.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-3"
          style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s both" }}
        >
          <Button
            href="/launch-planner"
            variant="primary"
            size="lg"
            trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            Build Your Launch Plan
          </Button>
          <Button
            href="/services"
            variant="outline"
            size="lg"
            trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            Explore Services
          </Button>
        </div>

        {/* Trust line */}
        <div
          className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.75s both" }}
        >
          {["Strategy", "Branding", "Technology", "Content", "Growth"].map(
            (item, i, arr) => (
              <span key={item} className="flex items-center gap-4">
                <span className="label-sm text-fg-subtle">{item}</span>
                {i < arr.length - 1 && (
                  <span aria-hidden className="h-0.5 w-0.5 rounded-full bg-fg-subtle/40" />
                )}
              </span>
            ),
          )}
        </div>
      </div>

      {/* ── Bottom fade-out ──────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-canvas to-transparent"
      />
    </section>
  );
}
