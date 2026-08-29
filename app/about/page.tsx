import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Cpu, Terminal, Laptop, ShieldCheck } from "lucide-react";
import { FounderCredibility } from "@/components/sections/FounderCredibility";

export const metadata: Metadata = {
  title: "About Startiz Labs — The People Building It",
  description:
    "Get to know Dolly Kumari and the philosophy behind Startiz Labs. We merge software engineering, cybersecurity, positioning, and growth design to launch startup models.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Startiz Labs — The People Building It",
    description:
      "Get to know Dolly Kumari and the philosophy behind Startiz Labs. We merge software engineering, cybersecurity, positioning, and growth design to launch startup models.",
  },
};

const principles = [
  {
    title: "Execution First",
    description: "Launch plans are valuable only when shipped. We prioritize getting functional tools, pages, and products into the hands of real users as fast as possible.",
    icon: Cpu
  },
  {
    title: "Security by Default",
    description: "We embed security engineering, code analysis, and asset protection rules directly at the foundation layer, not as an afterthought.",
    icon: ShieldCheck
  },
  {
    title: "AI as an Accelerator",
    description: "We use generative models to automate drafting, validation, and strategy mapping, freeing up human engineers to focus on custom code and product logic.",
    icon: Terminal
  }
];

const selectedWork = [
  {
    name: "ZOMOGGY",
    category: "Professional Experience · Product Engineering",
    description: "Built Zomoggy's digital presence from the ground up, combining software engineering, product development, branding, SEO and digital acquisition.",
    capabilities: ["Website", "Multi-panel food ordering app", "Branding", "SEO", "Ads management"],
    status: "Professional Work"
  },
  {
    name: "GURUMANTRA CLASSES — PATNA",
    category: "Business Digital Presence",
    description: "Complete digital presence management, including technology infrastructure and search visibility.",
    capabilities: ["Complete Digital Management", "Search Optimization", "Local Discovery"],
    status: "Professional Work"
  },
  {
    name: "BINCRAFT TECHNOLOGIES",
    category: "Professional Experience · Cybersecurity",
    description: "Cybersecurity engineering combined with the creation of the company's visual foundation.",
    capabilities: ["Cybersecurity", "Logo", "Color system", "Branding", "Visual identity"],
    status: "Professional Work"
  }
];

const securityInnovation = [
  {
    name: "HackerOne",
    category: "Security Research",
    description: "Bug hunting and security research experience."
  },
  {
    name: "Hackathons",
    category: "Developer Competitions",
    description: "Participation in technology hackathons and developer competitions."
  },
  {
    name: "Google / Microsoft",
    category: "Developer Initiatives",
    description: "Participation in hackathon or developer initiatives associated with major technology companies."
  }
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero & 2. Why Startiz Exists */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20" aria-label="About Startiz Labs">
        <Container size="narrow">
          <div className="flex flex-col items-start gap-4 mb-8">
            <span className="inline-flex max-w-max items-center rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-400 border border-brand-500/20">About Us</span>
            <h1 className="heading-2 max-w-[32ch] text-fg">
              We exist to make building a startup easier.
            </h1>
          </div>

          <div className="flex flex-col gap-6 text-fg-muted">
            <p className="body-lg text-fg">
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
              get a full range of capabilities — strategy, branding, development,
              and growth — working together from day one, so your business launches with
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

      {/* 3. Founder Details & History */}
      <FounderCredibility />

      {/* 5. Philosophy & Principles */}
      <section className="py-20 border-t border-border bg-surface" aria-labelledby="principles-heading">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="default" className="mb-3">Studio Philosophy</Badge>
            <h2 id="principles-heading" className="heading-2 text-fg">Principles we live by.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="flex flex-col gap-4 rounded-xl border border-border bg-canvas p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-fg uppercase tracking-wider">{principle.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-muted">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. Selected Work */}
      <section className="py-20 border-t border-border bg-canvas" aria-labelledby="work-heading">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Portfolio</span>
              <h2 id="work-heading" className="heading-2 mt-2 text-fg">Selected Work</h2>
              <p className="body-base mt-2 text-fg-muted">
                Real work across product, technology, branding and growth.
              </p>
            </div>
            <a 
              href="/work" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:underline"
              aria-label="View the complete projects page"
            >
              See All Work
              <ArrowRight className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {selectedWork.map((project) => (
              <article key={project.name} className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2 shadow-sm">
                <div className="flex flex-col gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-brand-400 tracking-wider uppercase">{project.status}</span>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-fg mt-1">{project.name}</h3>
                  </div>
                  <span className="text-xs text-fg-subtle font-medium">{project.category}</span>
                  <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                  {project.capabilities.map((tech) => (
                    <span key={tech} className="inline-flex items-center rounded-md bg-canvas px-2 py-0.5 text-[10px] font-semibold text-fg-subtle border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Security & Innovation */}
      <section className="py-20 border-t border-border bg-surface" aria-labelledby="sec-heading">
        <Container>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Research & Ecosystems</span>
            <h2 id="sec-heading" className="heading-2 mt-2 text-fg">Security & Innovation</h2>
            <p className="body-base mt-2 text-fg-muted max-w-[50ch]">
              Vulnerability assessment registries, technical developer hackathons and initiatives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {securityInnovation.map((item) => (
              <article key={item.name} className="group relative flex flex-col gap-3 rounded-xl border border-border bg-canvas p-6 shadow-sm">
                <span className="text-xs font-semibold tracking-wider text-brand-400 uppercase">{item.category}</span>
                <h3 className="heading-3 text-fg">{item.name}</h3>
                <p className="text-sm leading-relaxed text-fg-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Startiz Labs itself */}
      <section className="py-20 border-t border-border bg-canvas" aria-labelledby="self-heading">
        <Container>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Internal Building</span>
            <h2 id="self-heading" className="heading-2 mt-2 text-fg">Startiz Labs itself</h2>
            <p className="body-base mt-2 text-fg-muted max-w-[50ch]">
              How we construct our own platform infrastructure as a live showcase of our engineering logic.
            </p>
          </div>

          <div className="max-w-3xl">
            <article className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-8 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    <Laptop className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="heading-3 text-fg">STARTIZ LABS</h3>
                    <span className="text-[11px] font-bold text-brand-400 tracking-wide uppercase">Live · Building</span>
                  </div>
                </div>
                <span className="text-xs text-fg-subtle font-medium">Internal Product · AI · Web</span>
                <p className="text-base leading-relaxed text-fg-muted">
                  Startiz Labs itself is being built as an AI-powered launch studio, combining strategy, product engineering, branding, growth and an interactive AI Launch Planner.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-4 pt-6 border-t border-border/40">
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "AI integration",
                    "Product UX",
                    "Branding",
                    "Conversion design",
                    "Server-side API integration",
                    "AI Launch Planner"
                  ].map((tech) => (
                    <span key={tech} className="inline-flex items-center rounded-md bg-canvas px-2.5 py-1 text-xs font-semibold text-fg-subtle border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* 9. Final CTA */}
      <CTABanner
        title="Ready to build your launch plan?"
        subtitle="Tell us about your startup idea or explore our design & code services."
        primaryLabel="Build My Launch Plan"
        primaryHref="/launch-planner"
        secondaryLabel="Explore Services"
        secondaryHref="/services"
      />
    </>
  );
}
