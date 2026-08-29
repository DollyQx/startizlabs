"use client";

import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

const blueprintItems = [
  "Target Audience",
  "Market Opportunity",
  "Brand Positioning",
  "Unique Selling Proposition",
  "Website Structure",
  "Content Strategy",
  "Marketing Plan",
  "Launch Roadmap",
];

function AIMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Outer glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-3xl opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,165,88,0.2) 0%, transparent 70%)",
        }}
      />

      {/* Window frame */}
      <div className="relative overflow-hidden rounded-2xl border border-brand-500/20 bg-surface-2 shadow-2xl shadow-brand-900/50">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-surface-3 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <div className="h-3 w-3 rounded-full bg-surface-3 ring-1 ring-border" />
            <div className="h-3 w-3 rounded-full bg-surface-3 ring-1 ring-border" />
            <div className="h-3 w-3 rounded-full bg-brand-500/50" />
          </div>
          <div className="ml-2 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-400" aria-hidden />
            <span className="text-xs font-medium text-fg-muted">
              Startiz AI Launch Planner
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* Input section */}
          <div className="mb-5">
            <label className="label-sm mb-2 block text-fg-muted" htmlFor="ai-demo-input">
              What are you building?
            </label>
            <div
              id="ai-demo-input"
              className="min-h-[72px] rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-fg-muted"
            >
              I want to launch a sustainable clothing brand for college students.
              <span
                aria-hidden
                className="animate-cursor ml-0.5 inline-block h-4 w-0.5 bg-brand-400"
              />
            </div>
          </div>

          {/* Divider with AI label */}
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" aria-hidden />
            <div className="flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-surface px-3 py-1">
              <Sparkles className="h-3 w-3 text-brand-400" aria-hidden />
              <span className="text-xs font-medium text-brand-400">
                Here&apos;s your Startiz Launch Blueprint
              </span>
            </div>
            <div className="h-px flex-1 bg-border" aria-hidden />
          </div>

          {/* Blueprint items */}
          <ul className="grid grid-cols-2 gap-2" role="list">
            {blueprintItems.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-2"
                style={{
                  animation: `fade-in-up 0.4s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.06}s both`,
                }}
              >
                <CheckCircle2
                  className="h-4 w-4 shrink-0 text-brand-400"
                  aria-hidden
                />
                <span className="text-xs text-fg-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA inside mockup */}
        <div className="border-t border-border px-6 py-4">
          <Button
            href="/launch-planner"
            variant="primary"
            size="md"
            className="w-full justify-center"
            trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            Build My Launch Plan
          </Button>
        </div>
      </div>

      {/* AI badge below */}
      <div className="mt-4 flex items-center justify-center gap-1.5">
        <div
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-brand-500"
        />
        <span className="label-sm text-fg-subtle">
          AI-powered · Built for founders
        </span>
      </div>
    </div>
  );
}

export function AISection() {
  return (
    <section
      aria-labelledby="ai-heading"
      className="relative overflow-hidden bg-surface py-24 sm:py-32"
    >
      {/* Edge lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      {/* Background glow */}
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,165,88,0.10) 0%, transparent 70%)",
        }}
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: text */}
          <AnimateIn direction="left">
            <div className="flex flex-col gap-7">
              <span className="label-sm text-brand-400">AI-Powered Launch Planning</span>

              <h2 id="ai-heading" className="heading-2 text-fg">
                Your idea.{" "}
                <span className="text-fg-muted">Analyzed by AI.</span>{" "}
                <span className="block text-brand-400">
                  Turned into a launch plan.
                </span>
              </h2>

              <p className="body-lg max-w-[48ch]">
                Tell us what you&apos;re building and get a structured launch blueprint covering strategy, audience, positioning, brand, MVP, marketing and your next steps.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  href="/launch-planner"
                  variant="primary"
                  size="lg"
                  trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
                >
                  Build My Launch Plan
                </Button>
              </div>
            </div>
          </AnimateIn>

          {/* Right: mockup */}
          <AnimateIn direction="right" delay={150}>
            <AIMockup />
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
