import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SITE_TAGLINE } from "@/lib/constants";

export function FinalCTASection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-surface py-28 sm:py-36"
    >
      {/* Top edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      {/* Central strong glow */}
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,165,88,0.14) 0%, transparent 65%)",
        }}
      />

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container size="narrow" className="relative z-10 text-center">
        <AnimateIn>
          <div className="flex flex-col items-center gap-8">
            {/* Label */}
            <span className="label-sm text-brand-400">Ready to Build?</span>

            {/* Heading */}
            <h2
              id="final-cta-heading"
              className="heading-1 text-fg"
            >
              Have an idea{" "}
              <span className="text-brand-400">worth building?</span>
            </h2>

            {/* Subtext */}
            <p className="body-lg mx-auto max-w-[40ch]">
              Let&apos;s turn it into something real.
            </p>

            {/* CTAs */}
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
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Talk to Startiz
              </Button>
            </div>

            {/* Tagline */}
            <p className="label-sm mt-2 text-fg-subtle">{SITE_TAGLINE}</p>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
