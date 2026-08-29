import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/sections/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We understand your idea, goals and market.",
    color: "from-brand-900 to-brand-800",
  },
  {
    number: "02",
    title: "Define",
    description: "We shape your positioning, audience and launch strategy.",
    color: "from-brand-800 to-brand-700",
  },
  {
    number: "03",
    title: "Build",
    description: "We create your brand, website, content and digital systems.",
    color: "from-brand-700 to-brand-600",
  },
  {
    number: "04",
    title: "Launch",
    description: "We help put everything into the market.",
    color: "from-brand-600 to-brand-500",
  },
  {
    number: "05",
    title: "Grow",
    description: "We optimize, automate and build for the next stage.",
    color: "from-brand-500 to-brand-400",
  },
];

export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <Container>
        <AnimateIn className="mb-20">
          <SectionHeading
            id="process-heading"
            badge="How It Works"
            title="From idea to launch. One step at a time."
            subtitle="A structured, founder-friendly process built to get you to market fast without cutting corners."
          />
        </AnimateIn>

        {/* Consolidated Responsive Process steps */}
        <div className="relative mx-auto max-w-lg lg:max-w-none" aria-label="Process steps">
          {/* Combined Connecting line */}
          <div
            aria-hidden
            className="absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-brand-900 via-brand-500 to-brand-400 lg:bottom-auto lg:left-8 lg:right-8 lg:top-[1.75rem] lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />

          {/* Combined steps content */}
          <div className="relative flex flex-col gap-0 pl-7 lg:grid lg:grid-cols-5 lg:gap-4 lg:pl-0">
            {steps.map(({ number, title, description }, i) => (
              <AnimateIn
                key={title}
                delay={i * 75}
                className="relative flex flex-row gap-8 pb-12 last:pb-0 lg:flex-col lg:items-center lg:gap-5 lg:text-center lg:pb-0"
              >
                {/* Node */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 -ml-7 items-center justify-center rounded-full border border-brand-500/40 bg-canvas ring-4 ring-canvas lg:ml-0">
                  <span className="label-sm text-brand-400">{number}</span>
                </div>

                {/* Content */}
                <div className="pt-3 lg:pt-0">
                  <h3 className="mb-1.5 text-sm font-semibold uppercase tracking-widest text-fg lg:mb-2">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
