import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/sections/SectionHeading";

const points = [
  {
    number: "01",
    title: "One Team",
    description:
      "Strategy, creative, technology and growth under one roof — moving together from day one.",
  },
  {
    number: "02",
    title: "Built Around Your Idea",
    description:
      "No cookie-cutter solutions. Everything starts with your business, your audience and your goals.",
  },
  {
    number: "03",
    title: "AI + Human Execution",
    description:
      "AI helps plan and accelerate. Humans make the important decisions and build the real thing.",
  },
  {
    number: "04",
    title: "Launch-Focused",
    description:
      "We don't stop at ideas. The goal is always to get you launch-ready — and then help you grow.",
  },
];

export function WhyStartizSection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <AnimateIn className="mb-16">
          <SectionHeading
            id="why-heading"
            badge="Why Startiz"
            title="Why build with Startiz?"
            subtitle="The reasons founders choose us over the alternative of figuring it all out alone."
          />
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ number, title, description }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <div className="group flex flex-col gap-5 rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:border-brand-500/25 hover:bg-surface-2">
                {/* Number */}
                <span className="label-sm text-brand-500">{number}</span>

                {/* Title */}
                <h3 className="heading-3 text-fg">{title}</h3>

                {/* Description */}
                <p className="body-base flex-1">{description}</p>

                {/* Bottom accent — appears on hover */}
                <div
                  aria-hidden
                  className="h-0.5 w-8 rounded-full bg-brand-500/40 transition-all duration-500 group-hover:w-full group-hover:bg-brand-500/60"
                />
              </div>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
