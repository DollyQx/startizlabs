import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";

export function TrustSection() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="relative overflow-hidden bg-canvas py-24 sm:py-32"
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

      <Container size="narrow" className="relative z-10 text-center">
        <AnimateIn>
          <div className="flex flex-col items-center gap-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
              <ShieldCheck className="h-6 w-6" aria-hidden />
            </div>

            <h2 id="trust-heading" className="heading-2 text-fg animate-fade-in">
              Built by people who <span className="text-brand-400">build</span>.
            </h2>

            <p className="body-lg mx-auto max-w-[50ch] text-fg-muted">
              Startiz Labs brings software engineering, secure development practices, branding, AI and growth together to help early-stage businesses move from idea to execution.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                href="/about"
                variant="primary"
                size="lg"
                trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
              >
                Meet the Founder
              </Button>
              <Button
                href="/work"
                variant="outline"
                size="lg"
                trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
              >
                See Our Work
              </Button>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
