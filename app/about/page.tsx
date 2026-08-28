import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Startiz Labs — our mission, our philosophy, and why we exist.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-24" aria-label="About Startiz Labs">
        <Container size="narrow">
          <SectionHeading
            badge="About"
            title="We exist to make building a startup easier."
            align="left"
            className="mb-12"
          />

          <div className="flex flex-col gap-6 text-fg-muted">
            <p className="body-lg">
              Startiz Labs is an end-to-end startup launch studio built for
              founders, creators, and early-stage businesses who are serious
              about turning their ideas into real businesses.
            </p>
            <p className="body-base">
              Most early founders face the same problem: they have a great idea
              but don&apos;t know where to start — or they start in the wrong
              place. They spend months on things that don&apos;t move the needle,
              while the things that matter (strategy, brand, positioning,
              distribution) get left behind.
            </p>
            <p className="body-base">
              We built Startiz Labs to change that. Our studio model means you
              get a full team — strategists, designers, developers, and marketers
              — working together from day one, so your business launches with
              everything it needs to grow.
            </p>
            <p className="body-base">
              And we&apos;re not stopping at services. Our vision is an AI-powered
              platform where any founder can enter their idea and receive a
              complete, actionable launch blueprint — and the tools to execute
              it.
            </p>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Let's build something together."
        subtitle="Tell us about your idea and let's see how we can help."
        primaryLabel="Start Your Idea"
        primaryHref="/contact"
      />
    </>
  );
}
