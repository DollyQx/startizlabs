import { Lightbulb, BarChart2, ShoppingBag, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionHeading } from "@/components/sections/SectionHeading";

const audiences = [
  {
    icon: Lightbulb,
    title: "Founders",
    description:
      "Turn an idea into a real business — with the strategy, brand and technology to get to market.",
    accentClass: "bg-brand-500/10 text-brand-400",
  },
  {
    icon: BarChart2,
    title: "Early-Stage Businesses",
    description:
      "Build the systems and presence needed to grow from validation to scale.",
    accentClass: "bg-brand-500/10 text-brand-400",
  },
  {
    icon: ShoppingBag,
    title: "D2C & Brands",
    description:
      "Build a brand people remember — with identity, storytelling and digital channels that convert.",
    accentClass: "bg-brand-500/10 text-brand-400",
  },
  {
    icon: Star,
    title: "Creators",
    description:
      "Turn your audience and personal brand into a sustainable, scalable business opportunity.",
    accentClass: "bg-brand-500/10 text-brand-400",
  },
];

export function WhoWeHelpSection() {
  return (
    <section
      aria-labelledby="who-heading"
      className="relative py-24 sm:py-32"
    >
      <Container>
        <AnimateIn className="mb-16">
          <SectionHeading
            id="who-heading"
            badge="Who We Help"
            title="Built for people building something."
            subtitle="Whether you're starting from scratch or ready to scale, Startiz is designed for you."
          />
        </AnimateIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {audiences.map(({ icon: Icon, title, description, accentClass }, i) => (
            <AnimateIn key={title} delay={i * 80}>
              <article className="group flex flex-col gap-5 rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-brand-500/25 hover:bg-surface-2">
                {/* Icon */}
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${accentClass} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </div>

                {/* Content */}
                <div>
                  <h3 className="heading-3 mb-2 text-fg">{title}</h3>
                  <p className="body-base">{description}</p>
                </div>

                {/* Hover arrow hint */}
                <span
                  aria-hidden
                  className="label-sm translate-x-0 text-brand-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  Learn more →
                </span>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
