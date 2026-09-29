"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Laptop, Shield, Layers } from "lucide-react";
import Link from "next/link";

export function PortfolioPreview() {
  const featured = [
    {
      title: "Zomoggy",
      label: "PROFESSIONAL EXPERIENCE",
      category: "Software Engineering · Product · Branding · SEO · Growth",
      description: "Built Zomoggy's digital presence from the ground up, combining software engineering, product development, branding, SEO, content and digital acquisition.",
      ctaLabel: "View Case Study",
      ctaHref: "/work/zomoggy",
      icon: Laptop,
      isHero: true
    },
    {
      title: "Bincraft Technologies",
      label: "PROFESSIONAL EXPERIENCE",
      category: "Security Engineering · Brand Identity",
      description: "Worked in security engineering while also contributing to Bincraft Technologies' visual identity and brand foundation.",
      ctaLabel: "View Case Study",
      ctaHref: "/work/bincraft-technologies",
      icon: Shield,
      isHero: false
    },
    {
      title: "Startiz Labs / AI Launch Planner",
      label: "INTERNAL PRODUCT",
      category: "AI · Product · Technology",
      description: "An interactive AI-powered experience that analyzes a founder's idea and generates a structured launch blueprint.",
      ctaLabel: "Try AI Launch Planner",
      ctaHref: "/launch-planner",
      icon: Layers,
      isHero: false
    }
  ];

  return (
    <section className="py-20 border-t border-border bg-canvas relative overflow-hidden" aria-labelledby="portfolio-preview-heading">
      {/* Background glow effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[350px] w-[500px] rounded-full bg-brand-500/5 blur-[90px]" />
      </div>

      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-3">
            <Badge variant="default" className="w-fit">SELECTED WORK</Badge>
            <h2 id="portfolio-preview-heading" className="heading-2 text-fg">
              Built, not just promised.
            </h2>
            <p className="body-base text-fg-muted max-w-[50ch]">
              Explore software, brands and digital experiences we&apos;ve worked on.
            </p>
          </div>
          <Button href="/work" variant="outline" size="md" trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}>
            View All Work
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((project) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className={`group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2 shadow-sm ${
                  project.isHero ? "lg:col-span-1 lg:ring-1 lg:ring-brand-500/10 border-brand-500/20" : ""
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-brand-400 tracking-widest uppercase">{project.label}</span>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-fg mt-0.5">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <span className="text-xs text-fg-subtle font-medium">{project.category}</span>
                  <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/60">
                  <Link
                    href={project.ctaHref}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-400 hover:underline"
                  >
                    {project.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
