import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "AI Launch Planner | Startiz Labs",
  description:
    "Tell Startiz what you're building and our AI will recommend the right starting point for your launch journey.",
};

export default function LaunchPlannerPage() {
  return (
    <section
      aria-labelledby="planner-heading"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,165,88,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div
        className="relative z-10 flex max-w-xl flex-col items-center gap-8"
        style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
      >
        {/* Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-500/25 bg-brand-500/10">
          <Sparkles className="h-7 w-7 text-brand-400" aria-hidden />
        </div>

        {/* Badge */}
        <Badge variant="default">Coming Soon</Badge>

        {/* Heading */}
        <h1 id="planner-heading" className="heading-1 text-fg">
          AI Launch Planner
        </h1>

        {/* Body */}
        <p className="body-lg max-w-[44ch]">
          Tell us what you&apos;re building and our AI will analyse your idea,
          map out what you need to launch, and recommend where to start.
        </p>

        {/* Status */}
        <div className="rounded-xl border border-border bg-surface px-6 py-4 text-sm text-fg-muted">
          <p>
            We&apos;re building this in public.{" "}
            <span className="text-brand-400">Get early access</span> by
            reaching out — you&apos;ll be first to try it.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            Get Early Access
          </Button>
          <Button href="/services" variant="ghost" size="lg">
            ← Back to Services
          </Button>
        </div>
      </div>
    </section>
  );
}
