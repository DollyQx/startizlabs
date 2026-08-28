import {
  Target, Palette, Globe, FileText, TrendingUp, Bot,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/sections/SectionHeading";

const services = [
  {
    number: "01",
    icon: Target,
    title: "Strategy",
    description:
      "Clarify the idea, audience, positioning and launch roadmap. Build a clear path to market before a single pixel or line of code.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Branding",
    description:
      "Build a memorable identity — from naming and positioning to visual direction that makes your business recognizable from day one.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Website & Technology",
    description:
      "Design and build the digital foundation your business needs. Fast, accessible, and built to grow with you.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Content",
    description:
      "Create the content system that tells your story, builds attention and turns audiences into customers.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "SEO & Marketing",
    description:
      "Build discoverability, reach and customer acquisition channels that compound over time.",
  },
  {
    number: "06",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Use AI and automation to reduce repetitive work, scale smarter and build systems that run without you.",
  },
];

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative bg-surface py-24 sm:py-32"
    >
      {/* Top/bottom edge lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <Container>
        <AnimateIn className="mb-16">
          <SectionHeading
            id="services-heading"
            badge="What We Do"
            title="Everything you need to go from idea to launch."
            subtitle="A complete set of services designed to work together — not a collection of isolated deliverables."
          />
        </AnimateIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ number, icon: Icon, title, description }, i) => (
            <AnimateIn key={title} delay={i * 60}>
              <article className="group relative flex flex-col gap-5 rounded-2xl border border-border bg-canvas p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5">
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <span className="label-sm text-fg-subtle">{number}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition-colors duration-300 group-hover:border-brand-500/30 group-hover:bg-surface-2">
                    <Icon
                      className="h-4.5 w-4.5 text-brand-400 transition-colors duration-300"
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="heading-3 text-fg">{title}</h3>

                {/* Description */}
                <p className="body-base flex-1">{description}</p>

                {/* Hover accent line */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-px rounded-b-2xl bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </article>
            </AnimateIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimateIn delay={200} className="mt-14 text-center">
          <Button href="/services" variant="outline" size="lg">
            Explore All Services →
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
