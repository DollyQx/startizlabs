import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type CTABannerProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  className?: string;
};

/**
 * Full-width CTA strip — used at the bottom of pages.
 * Shows a heading, optional subtitle, and up to two CTA buttons.
 */
export function CTABanner({
  badge,
  title,
  subtitle,
  primaryLabel = "Start Your Idea",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-t border-border bg-surface py-20",
        className,
      )}
      aria-label="Call to action"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[400px] w-[600px] rounded-full bg-brand-500/5 blur-[100px]" />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-8 text-center">
        {badge && (
          <span className="label-sm text-brand-400">{badge}</span>
        )}

        <h2 className="heading-2 max-w-[28ch] text-fg">{title}</h2>

        {subtitle && (
          <p className="body-lg mx-auto max-w-[52ch]">{subtitle}</p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button href={primaryHref} variant="primary" size="lg">
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button href={secondaryHref} variant="outline" size="lg">
              {secondaryLabel}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
