import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Lightbulb, Palette, Code2, TrendingUp } from "lucide-react";

const problems = [
  {
    label: "Great idea",
    question: "Where do I start?",
    icon: Lightbulb,
  },
  {
    label: "Brand",
    question: "How should it look?",
    icon: Palette,
  },
  {
    label: "Technology",
    question: "Who will build it?",
    icon: Code2,
  },
  {
    label: "Growth",
    question: "How do I reach customers?",
    icon: TrendingUp,
  },
];

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Subtle top border */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <Container>
        {/* Heading */}
        <AnimateIn className="mb-16 text-center">
          <h2
            id="problem-heading"
            className="heading-2 mx-auto max-w-[30ch] text-fg"
          >
            Great ideas shouldn&apos;t die{" "}
            <span className="text-fg-muted">in the planning stage.</span>
          </h2>
          <p className="body-lg mx-auto mt-5 max-w-[56ch]">
            Founders often have the vision, but launching a business means
            figuring out branding, websites, content, marketing, technology and
            countless other moving pieces.
          </p>
        </AnimateIn>

        {/* Problem cards with connecting lines */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map(({ label, question, icon: Icon }, i) => (
              <AnimateIn key={label} delay={i * 80}>
                <div className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2">
                  {/* Step dot on the connecting line (desktop) */}
                  <div
                    aria-hidden
                    className="absolute -top-[1.15rem] left-1/2 hidden h-3 w-3 -translate-x-1/2 rounded-full border border-border bg-surface-2 ring-2 ring-canvas lg:block"
                  />

                  {/* Icon */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="label-sm mb-1.5 text-brand-400">{label}</p>
                    <p className="body-base text-fg-muted italic">
                      &ldquo;{question}&rdquo;
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Resolution line */}
        <AnimateIn delay={400} className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4">
            {/* Vertical connector */}
            <div
              aria-hidden
              className="h-12 w-px bg-gradient-to-b from-border to-brand-500/60"
            />
            <p className="heading-3 text-fg">
              That&apos;s where{" "}
              <span className="text-brand-400">Startiz</span> comes in.
            </p>
          </div>
        </AnimateIn>
      </Container>
    </section>
  );
}
