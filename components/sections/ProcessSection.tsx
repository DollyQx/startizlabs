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

        {/* ── Desktop: horizontal timeline ─────────────────────── */}
        <div className="hidden lg:block" aria-label="Process steps">
          {/* Connecting line */}
          <div className="relative mb-0 px-8">
            <div
              aria-hidden
              className="absolute inset-x-8 top-[1.75rem] h-px bg-gradient-to-r from-brand-900 via-brand-500 to-brand-400"
            />

            <div className="relative grid grid-cols-5 gap-4">
              {steps.map(({ number, title, description }, i) => (
                <AnimateIn key={title} delay={i * 80} className="flex flex-col items-center gap-5 text-center">
                  {/* Node */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-brand-500/40 bg-canvas ring-4 ring-canvas">
                    <span className="label-sm text-brand-400">{number}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-fg">
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
        </div>

        {/* ── Mobile/Tablet: vertical timeline ─────────────────── */}
        <div className="lg:hidden" aria-label="Process steps">
          <div className="relative ml-7 flex flex-col gap-0">
            {/* Connecting line */}
            <div
              aria-hidden
              className="absolute bottom-8 left-0 top-8 w-px bg-gradient-to-b from-brand-900 via-brand-500 to-brand-400"
            />

            {steps.map(({ number, title, description }, i) => (
              <AnimateIn key={title} delay={i * 70} className="relative flex gap-8 pb-12 last:pb-0">
                {/* Node */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-500/40 bg-canvas ring-4 ring-canvas -ml-7">
                  <span className="label-sm text-brand-400">{number}</span>
                </div>

                {/* Content */}
                <div className="pt-3">
                  <h3 className="mb-1.5 text-sm font-semibold uppercase tracking-widest text-fg">
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
