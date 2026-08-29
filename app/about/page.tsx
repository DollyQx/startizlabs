import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { Badge } from "@/components/ui/Badge";
import { Globe, Calendar, Briefcase, ArrowRight, ShieldCheck, Cpu, Terminal, Laptop } from "lucide-react";

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const metadata: Metadata = {
  title: "About Us | Startiz Labs",
  description:
    "Learn about Startiz Labs — our mission, founder Dolly Kumari, our principles, and how we merge engineering, cybersecurity, and growth.",
};

const founderSocials = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/dollyqx",
    icon: Linkedin,
    label: "Visit Dolly Kumari's LinkedIn profile"
  },
  {
    name: "GitHub",
    url: "https://github.com/dollyqx",
    icon: Github,
    label: "Visit Dolly Kumari's GitHub profile"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/d011yqx",
    icon: Instagram,
    label: "Visit Dolly Kumari's Instagram profile"
  },
  {
    name: "Google Developer Profile",
    url: "https://g.dev/dollyqx",
    icon: Globe,
    label: "Visit Dolly Kumari's Google Developer profile"
  }
];

const experiences = [
  {
    company: "Zomoggy",
    role: "Software Engineer",
    period: "18 July 2024 – 27 February 2026",
    description: "Built and developed Zomoggy's digital presence from the ground up, spanning software engineering, website development, multi-panel food ordering systems, branding, SEO, content and digital marketing."
  },
  {
    company: "Bincraft Technologies",
    role: "Cybersecurity Engineer",
    period: "10 April 2023 – June 2024",
    description: "Worked across cybersecurity while also contributing to Bincraft Technologies' logo, color system and overall brand identity."
  }
];

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
          <SectionHeading
            badge="About Us"
            title="We exist to make building a startup easier."
            align="left"
            className="mb-8"
          />

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

      {/* 3. Founder Details */}
      <section className="py-20 border-t border-border bg-surface" aria-labelledby="founder-section-heading">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Image Placeholder */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative aspect-square w-full max-w-sm rounded-2xl border border-brand-500/20 bg-surface-2 flex flex-col items-center justify-center overflow-hidden group shadow-lg shadow-brand-950/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/60 to-surface-3 transition-opacity group-hover:opacity-85" aria-hidden="true" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div 
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-3xl font-bold font-mono tracking-wider shadow-[0_0_20px_rgba(34,165,88,0.15)] transition-transform duration-300 group-hover:scale-105"
                    aria-label="Dolly Kumari initials avatar placeholder"
                  >
                    DK
                  </div>
                  <span className="text-[10px] font-bold text-fg-subtle uppercase tracking-widest">Founder Profile</span>
                </div>
              </div>
            </div>

            {/* Right Column: Profile details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Founder</span>
                <h2 id="founder-section-heading" className="heading-2 mt-1 text-fg">Dolly Kumari</h2>
                <p className="text-sm font-semibold tracking-wide text-fg-subtle mt-1">
                  Software Engineer · Cybersecurity · Product Builder · Founder
                </p>
              </div>

              <blockquote className="border-l-2 border-brand-500/70 pl-4 py-1">
                <p className="text-base italic text-fg-muted font-medium leading-relaxed">
                  &ldquo;Building Startiz Labs to help founders turn ideas into execution through strategy, technology, AI and growth.&rdquo;
                </p>
              </blockquote>

              {/* Social profiles list */}
              <div className="flex flex-wrap items-center gap-3 mt-2" aria-label="Founder social profiles">
                {founderSocials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-canvas text-fg-muted transition-colors hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                      aria-label={social.label}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Experience Timeline */}
      <section className="py-20 border-t border-border bg-canvas" aria-labelledby="exp-heading">
        <Container size="narrow">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Professional History</span>
            <h2 id="exp-heading" className="heading-2 mt-2 text-fg">Founder Experience</h2>
          </div>

          <div className="relative border-l border-border/80 pl-6 ml-4 flex flex-col gap-12">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative">
                {/* Node icon indicator */}
                <div className="absolute -left-10 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-canvas">
                  <Briefcase className="h-4 w-4 text-fg-subtle" aria-hidden="true" />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-fg">{exp.company}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs text-brand-400 font-semibold uppercase">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {exp.period}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-fg-subtle uppercase tracking-wider">{exp.role}</span>
                  <p className="text-sm leading-relaxed text-fg-muted mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
