import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "How It Works — Startup Launch Process | Startiz Labs",
  description:
    "Learn our structured process: Discovery, Strategy & Planning, Build, and Launch & Grow, designed to ship your business fast.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How It Works — Startup Launch Process | Startiz Labs",
    description:
      "Learn our structured process: Discovery, Strategy & Planning, Build, and Launch & Grow, designed to ship your business fast.",
  },
};

const steps = [
  {
    step: "01",
    title: "Discovery",
    body: "We start with a deep-dive session to understand your idea, your market, and your goals.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    body: "We build your business model, define your brand positioning, and create a launch roadmap.",
  },
  {
    step: "03",
    title: "Build",
    body: "Our team executes across brand, product, and content — shipping everything in parallel.",
  },
  {
    step: "04",
    title: "Launch & Grow",
    body: "We take you live and activate your marketing — then help you iterate and scale.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="py-24" aria-label="How it works">
        <Container>
          <div className="flex flex-col items-center text-center gap-4 mb-20">
            <Badge variant="default">Process</Badge>
            <h1 className="heading-2 max-w-[28ch] text-fg">
              From idea to launch — step by step.
            </h1>
            <p className="body-lg mx-auto max-w-[50ch] text-fg-muted">
              A structured, founder-friendly process built to get you to market fast without cutting corners.
            </p>
          </div>

          <div className="relative flex flex-col gap-0">
            {/* Connecting line */}
            <div
              aria-hidden
              className="absolute left-9 top-12 hidden h-[calc(100%-3rem)] w-px bg-border md:block"
            />

            {steps.map(({ step, title, body }) => (
              <div
                key={step}
                className="relative flex gap-8 pb-14 last:pb-0"
              >
                {/* Step number bubble */}
                <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-surface text-brand-400">
                  <span className="label-sm">{step}</span>
                </div>

                <div className="pt-4">
                  <h3 className="heading-3 mb-2 text-fg">{title}</h3>
                  <p className="body-base text-fg-muted">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to start your journey?"
        subtitle="Step one is just a conversation. Let's talk about your idea."
        primaryLabel="Start Your Idea"
        primaryHref="/contact"
      />
    </>
  );
}
