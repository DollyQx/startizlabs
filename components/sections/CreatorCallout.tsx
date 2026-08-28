import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function CreatorCallout() {
  return (
    <section
      aria-labelledby="creator-heading"
      className="relative overflow-hidden bg-surface py-24 sm:py-32"
    >
      {/* Edge lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      {/* Background glow — left side */}
      <div
        aria-hidden
        className="animate-pulse-glow pointer-events-none absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(34,165,88,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container size="narrow" className="relative z-10 text-center">
        <AnimateIn>
          <div className="flex flex-col items-center gap-8">
            {/* Label */}
            <span className="label-sm text-brand-400">Creator Solutions</span>

            {/* Heading */}
            <h2
              id="creator-heading"
              className="heading-2 text-fg"
            >
              Creators are{" "}
              <span className="text-brand-400">businesses</span> too.
            </h2>

            {/* Copy */}
            <p className="body-lg mx-auto max-w-[50ch]">
              Build your personal brand beyond followers. From positioning and
              content to websites, collaborations and monetization, Startiz helps
              creators build something bigger.
            </p>

            {/* CTA */}
            <Button
              href="/creators"
              variant="outline"
              size="lg"
              trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
            >
              Explore Creator Solutions
            </Button>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
