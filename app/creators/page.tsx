import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { Card, CardHeader, CardBody } from "@/components/ui/Card";
import { Mic, Video, Layout, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Creators",
  description:
    "Personal branding and creator business services from Startiz Labs — built for solopreneurs and content creators.",
};

const offerings = [
  {
    icon: Mic,
    title: "Personal Brand Strategy",
    body: "Define your niche, voice, and positioning so you stand out and attract the right audience.",
  },
  {
    icon: Video,
    title: "Content Systems",
    body: "Build scalable content pipelines — from ideation to publishing — without burning out.",
  },
  {
    icon: Layout,
    title: "Creator Website",
    body: "A premium personal site that showcases your work and converts visitors into followers or clients.",
  },
  {
    icon: TrendingUp,
    title: "Audience Growth",
    body: "SEO, social strategy, and platform-specific playbooks to grow your reach consistently.",
  },
];

export default function CreatorsPage() {
  return (
    <>
      <section className="py-24" aria-label="Creator services">
        <Container>
          <SectionHeading
            badge="For Creators"
            title="Build a brand that works for you."
            subtitle="Whether you're a solopreneur, influencer, or expert — we help you turn your personal brand into a real business."
            className="mb-16"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {offerings.map(({ icon: Icon, title, body }) => (
              <Card key={title} hoverable>
                <CardHeader>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="heading-3 text-fg">{title}</h3>
                </CardHeader>
                <CardBody>{body}</CardBody>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Your brand is your business."
        subtitle="Let's build it the right way from day one."
        primaryLabel="Start Your Idea"
        primaryHref="/contact"
      />
    </>
  );
}
