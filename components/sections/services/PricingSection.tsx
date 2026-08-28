import { CheckCircle2, XCircle, ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────────
   Types
───────────────────────────────────────────────────────────────────────────── */

type PricingCardData = {
  name: string;
  tagline: string;
  price: string;
  priceLabel?: string;
  deliverables: string[];
  notIncluded?: string[];
  cta: string;
  ctaHref: string;
  ctaVariant?: "primary" | "outline";
  note?: string;
  badge?: string;
  accent?: boolean;
  featured?: boolean;
};

/* ─────────────────────────────────────────────────────────────────────────────
   Data
───────────────────────────────────────────────────────────────────────────── */

const packages: PricingCardData[] = [
  {
    name: "START",
    tagline: "Your foundation before launch.",
    price: "₹9,999",
    priceLabel: "FOUNDING CLIENT PRICE",
    accent: true,
    ctaVariant: "primary",
    cta: "Start With START",
    ctaHref: "/contact",
    note: "Designed for founders who need a clear foundation before launching.",
    deliverables: [
      "Business idea clarification",
      "Basic target audience research",
      "Basic competitor research",
      "USP positioning",
      "Brand name suggestions",
      "Tagline",
      "Basic logo",
      "Basic color palette + typography",
      "Instagram profile setup guidance",
      "5 initial social-media content ideas",
      "Basic launch roadmap",
    ],
    notIncluded: [
      "Full website",
      "Professional photoshoot",
      "Video production",
      "Paid advertising execution",
      "E-commerce development",
      "Legal / GST / trademark registration",
      "Ongoing social-media management",
    ],
  },
  {
    name: "LAUNCH",
    tagline: "Turn your idea into a launch-ready presence.",
    price: "Starting from ₹29,999",
    ctaVariant: "outline",
    cta: "Build My Launch",
    ctaHref: "/contact",
    deliverables: [
      "Strategy",
      "Brand identity",
      "Business website / landing page",
      "Basic SEO setup",
      "Social media setup",
      "Launch content",
      "Launch roadmap",
      "Basic analytics setup",
    ],
  },
  {
    name: "LAUNCH PRO",
    tagline: "End-to-end execution for serious launches.",
    price: "Starting from ₹59,999",
    badge: "Best for Early-Stage Businesses",
    featured: true,
    ctaVariant: "primary",
    cta: "Talk to Startiz",
    ctaHref: "/contact",
    deliverables: [
      "Business strategy",
      "Market research",
      "Complete branding",
      "Custom website",
      "SEO foundation",
      "Content system",
      "Digital marketing setup",
      "Lead generation setup",
      "AI / automation opportunities",
      "Launch support",
    ],
  },
  {
    name: "CREATOR",
    tagline: "Build a personal brand beyond followers.",
    price: "Starting from ₹19,999",
    ctaVariant: "outline",
    cta: "Build My Creator Brand",
    ctaHref: "/contact",
    deliverables: [
      "Personal brand positioning",
      "Profile optimization",
      "Content strategy",
      "Content pillars",
      "Reel / content ideas",
      "Portfolio / creator website",
      "Media kit direction",
      "Brand collaboration positioning",
      "Basic SEO",
      "Monetization direction",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   PricingCard component
───────────────────────────────────────────────────────────────────────────── */

function PricingCard({
  name,
  tagline,
  price,
  priceLabel,
  deliverables,
  notIncluded,
  cta,
  ctaHref,
  ctaVariant = "outline",
  note,
  badge,
  accent,
  featured,
}: PricingCardData) {
  return (
    <article
      aria-label={`${name} pricing package`}
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300",
        featured
          ? "border-brand-500/35 bg-surface-2 shadow-lg shadow-brand-500/8"
          : accent
          ? "border-brand-500/25 bg-canvas"
          : "border-border bg-surface",
        "hover:border-brand-500/30",
      )}
    >
      {/* Featured badge */}
      {badge && (
        <div className="mb-5">
          <span className="label-sm inline-flex items-center gap-1.5 rounded-full bg-brand-500/15 px-3 py-1 text-brand-400 ring-1 ring-brand-500/25">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            {badge}
          </span>
        </div>
      )}

      {/* Package name + tagline */}
      <div className="mb-7">
        <h3 className="mb-1.5 text-xl font-bold tracking-tight text-fg">
          {name}
        </h3>
        <p className="text-sm text-fg-muted">{tagline}</p>
      </div>

      {/* Price block */}
      <div
        className={cn(
          "mb-7 rounded-xl p-5",
          featured ? "bg-canvas" : "bg-surface-2",
        )}
      >
        {priceLabel && (
          <p className="label-sm mb-2 text-brand-400">{priceLabel}</p>
        )}
        <p
          className={cn(
            "font-bold leading-none tracking-tight text-fg",
            priceLabel ? "text-3xl" : "text-2xl",
          )}
        >
          {price}
        </p>
      </div>

      {/* What's included */}
      <div className="mb-6 flex-1">
        <p className="label-sm mb-4 text-fg-subtle">What&apos;s included</p>
        <ul className="flex flex-col gap-2.5" role="list">
          {deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                aria-hidden
              />
              <span className="text-sm leading-snug text-fg-muted">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Not included (START only) */}
      {notIncluded && notIncluded.length > 0 && (
        <div className="mb-7">
          <div aria-hidden className="mb-4 h-px w-full bg-border" />
          <p className="label-sm mb-4 text-fg-subtle">Not included</p>
          <ul className="flex flex-col gap-2.5" role="list">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <XCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-fg-subtle"
                  aria-hidden
                />
                <span className="text-sm leading-snug text-fg-subtle">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto pt-6">
        <Button
          href={ctaHref}
          variant={ctaVariant}
          size="md"
          className="w-full justify-center"
          trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
        >
          {cta}
        </Button>

        {note && (
          <p className="mt-3 text-center text-xs leading-relaxed text-fg-subtle">
            {note}
          </p>
        )}
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Pricing section — cards grid
───────────────────────────────────────────────────────────────────────────── */

function PricingCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {packages.map((pkg, i) => (
        <AnimateIn key={pkg.name} delay={i * 70}>
          <PricingCard {...pkg} />
        </AnimateIn>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Custom Solutions strip
───────────────────────────────────────────────────────────────────────────── */

function CustomSolutionsStrip() {
  return (
    <AnimateIn>
      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-surface-2 p-8 sm:p-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-5">
            <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-canvas text-fg-muted">
              <MessageSquare className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h3 className="mb-1.5 text-lg font-semibold text-fg">
                Don&apos;t fit into a package?
              </h3>
              <p className="body-base max-w-[54ch] text-sm">
                Every business is different. If you need a combination of
                services or something more technical, we&apos;ll build a custom
                scope around your requirements.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <Button
              href="/contact"
              variant="secondary"
              size="md"
              trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
            >
              Talk to Startiz
            </Button>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   AI Recommendation CTA
───────────────────────────────────────────────────────────────────────────── */

function AIRecommendationCTA() {
  return (
    <AnimateIn>
      <div className="relative mt-6 overflow-hidden rounded-2xl border border-brand-500/20 p-8 text-center sm:p-12">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(34,165,88,0.12) 0%, transparent 65%)",
          }}
        />

        {/* Grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-500/20 bg-brand-500/10">
            <Sparkles className="h-5 w-5 text-brand-400" aria-hidden />
          </div>

          <div>
            <h3 className="heading-3 mb-3 text-fg">
              Not sure what you need?
            </h3>
            <p className="body-base mx-auto max-w-[44ch]">
              Tell us what you&apos;re building and let Startiz AI recommend
              the right starting point for your journey.
            </p>
          </div>

          <Button
            href="/launch-planner"
            variant="outline"
            size="lg"
            trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            Find My Package
          </Button>

          <p className="label-sm text-fg-subtle">
            AI-powered · Built for founders
          </p>
        </div>
      </div>
    </AnimateIn>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Full Pricing Section (exported)
───────────────────────────────────────────────────────────────────────────── */

export function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="relative bg-surface py-24 sm:py-32"
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

      <Container>
        {/* Heading */}
        <AnimateIn className="mb-14 text-center">
          <div className="flex flex-col items-center gap-4">
            <span className="label-sm text-brand-400">Pricing</span>
            <h2 id="pricing-heading" className="heading-2 text-fg">
              Choose where you want to start.
            </h2>
            <p className="body-lg mx-auto max-w-[54ch]">
              Simple packages for different stages of the journey. Custom
              solutions are available when your requirements go beyond a package.
            </p>
          </div>
        </AnimateIn>

        {/* Cards grid */}
        <PricingCards />

        {/* Custom solutions */}
        <CustomSolutionsStrip />

        {/* AI recommendation */}
        <AIRecommendationCTA />
      </Container>
    </section>
  );
}
