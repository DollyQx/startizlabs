import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Terminal, Shield, Laptop, Layers } from "lucide-react";
import { Button } from "@/components/ui/Button";

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

export const metadata: Metadata = {
  title: "Work — Selected Projects | Startiz Labs",
  description:
    "Explore professional client work and engineering builds by Startiz Labs, bridging software, cybersecurity, and brand identity.",
};

const professionalWork = [
  {
    name: "ZOMOGGY",
    category: "Professional Experience · Product Engineering · Brand & Growth",
    description: "Built Zomoggy's digital presence from the ground up, combining software engineering, product development, branding, SEO, content and digital acquisition.",
    capabilities: [
      "Website",
      "Multi-panel food ordering application",
      "Branding",
      "SEO",
      "Social media content",
      "Meta Ads",
      "Google Ads"
    ],
    status: "Professional Work",
    icon: Laptop,
  },
  {
    name: "GURUMANTRA CLASSES — PATNA",
    category: "Business Digital Presence",
    description: "Complete digital presence management, including technology infrastructure and search visibility.",
    capabilities: [
      "Complete Digital Management",
      "Search Optimization",
      "Local Discovery"
    ],
    status: "Professional Work",
    icon: Layers,
  },
  {
    name: "BINCRAFT TECHNOLOGIES",
    category: "Professional Experience · Cybersecurity · Brand Identity",
    description: "Cybersecurity engineering combined with the creation of the company's visual foundation.",
    capabilities: [
      "Cybersecurity",
      "Logo",
      "Color system",
      "Branding",
      "Visual identity"
    ],
    status: "Professional Work",
    icon: Shield,
  }
];

const engineeringProjects = [
  {
    name: "Realtime Chat App",
    category: "Software Engineering · Real-time Application",
    description: "A full-stack application built with React, Node.js, Socket.io, and MongoDB that includes live messaging, chat rooms, and online user tracking.",
    capabilities: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    status: "Independent Build",
    link: "https://github.com/DollyQx/realtime-chat-app",
    icon: Terminal,
  },
  {
    name: "Security Log Analyzer",
    category: "Cybersecurity · Security Tooling",
    description: "A cybersecurity project designed to detect suspicious login activity and visualize security alerts via an interactive dashboard.",
    capabilities: ["Python", "Log Parsing", "Threat Detection", "Dashboards"],
    status: "Independent Build",
    link: "https://github.com/DollyQx/security-log-analyzer",
    icon: Shield,
  },
  {
    name: "Crimson Manor",
    category: "Software Project",
    description: "A voice-first interactive murder mystery game powered by Agora Conversational AI, allowing players to have natural voice conversations with an AI Game Master to investigate a crime.",
    capabilities: ["Agora AI", "Conversational UX", "Vocal Analysis", "GenAI Game Master"],
    status: "Independent Build",
    link: "https://github.com/DollyQx/crimson-manor",
    icon: Terminal,
  },
  {
    name: "MERN Food Ordering Platform",
    category: "Full Stack · MERN · Food Technology",
    description: "A production-ready food ordering platform built with the MERN stack (MongoDB, Express, React, Node.js), featuring user authentication, menu management, and real-time order processing.",
    capabilities: ["MongoDB", "Express", "React", "Node.js", "State Engine"],
    status: "Independent Build",
    link: "https://github.com/DollyQx/mern-food-ordering-platform",
    icon: Laptop,
  }
];

const securityInnovation = [
  {
    name: "HackerOne",
    category: "Security Research",
    description: "Bug hunting and security research experience.",
    capabilities: ["Vulnerability Assessment", "Responsible Disclosure", "Web Security"],
    status: "Active Research",
  },
  {
    name: "Hackathons",
    category: "Developer Competitions",
    description: "Participation in technology hackathons and developer competitions.",
    capabilities: ["Rapid Prototyping", "Collaborative Assembly", "Presentation"],
    status: "Participant",
    link: "https://github.com/dollyqx",
    linkText: "Explore GitHub",
  },
  {
    name: "Google / Microsoft",
    category: "Developer Initiatives",
    description: "Participation in hackathon or developer initiatives associated with major technology companies.",
    capabilities: ["API Integration", "Cloud Deployments", "Tech Ecosystems"],
    status: "Participant",
  }
];

const internalProjects = [
  {
    name: "STARTIZ LABS",
    category: "Internal Product · AI · Web",
    description: "Startiz Labs itself is being built as an AI-powered launch studio, combining strategy, product engineering, branding, growth and an interactive AI Launch Planner.",
    capabilities: [
      "Next.js",
      "AI integration",
      "Product UX",
      "Branding",
      "Conversion design",
      "Server-side API integration",
      "AI Launch Planner"
    ],
    status: "Live · Building",
    icon: Layers,
  }
];

export default function WorkPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20" aria-labelledby="work-hero-heading">
        {/* Subtle background glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[600px] rounded-full bg-brand-500/5 blur-[100px]" />
        </div>

        <Container>
          <div className="flex flex-col items-center text-center gap-4">
            <Badge variant="default">Our Work</Badge>
            <h1 id="work-hero-heading" className="heading-1 text-fg max-w-[20ch]">
              Things we&apos;ve actually built.
            </h1>
            <p className="body-lg max-w-[52ch] text-fg-muted">
              From production software and digital brands to cybersecurity projects and AI-powered products.
            </p>
          </div>
        </Container>
      </section>

      {/* 01 — Professional Work */}
      <section className="py-16 sm:py-20 border-t border-border bg-surface" aria-labelledby="prof-heading">
        <Container>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">01 / Professional Work</span>
            <h2 id="prof-heading" className="heading-2 mt-2 text-fg">Verified Business Engagements</h2>
            <p className="body-base mt-2 text-fg-muted max-w-[50ch]">
              Factual digital client service execution across tech development, branding, and visibility.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {professionalWork.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.name} className="group relative flex flex-col justify-between rounded-xl border border-border bg-canvas p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-fg">{project.name}</h3>
                        <span className="text-[11px] font-medium text-brand-400">{project.status}</span>
                      </div>
                    </div>
                    <span className="text-xs text-fg-subtle font-medium">{project.category}</span>
                    <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-border/60">
                    {project.capabilities.map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-surface-3 px-2 py-1 text-[10px] font-semibold text-fg-subtle border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 02 — Engineering Projects */}
      <section className="py-16 sm:py-20 border-t border-border bg-canvas" aria-labelledby="eng-heading">
        <Container>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">02 / Engineering Projects</span>
            <h2 id="eng-heading" className="heading-2 mt-2 text-fg">Independent Builds</h2>
            <p className="body-base mt-2 text-fg-muted max-w-[50ch]">
              Developer research exploring software engineering, cybersecurity, and conversational product integrations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {engineeringProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.name} className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-fg">{project.name}</h3>
                          <span className="text-[11px] font-medium text-fg-subtle">{project.status}</span>
                        </div>
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-canvas text-fg-muted transition-colors hover:text-brand-400 hover:border-brand-500/30"
                        aria-label={`View ${project.name} code on GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                    <span className="text-xs text-brand-400 font-medium">{project.category}</span>
                    <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 pt-4 border-t border-border/40">
                    <div className="flex flex-wrap gap-1.5">
                      {project.capabilities.map((tech) => (
                        <span key={tech} className="inline-flex items-center rounded-md bg-canvas px-2 py-1 text-[10px] font-semibold text-fg-muted border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:underline"
                      aria-label={`View the repository for ${project.name} on GitHub`}
                    >
                      View on GitHub
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 03 — Security & Innovation */}
      <section className="py-16 sm:py-20 border-t border-border bg-surface" aria-labelledby="sec-heading">
        <Container>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">03 / Security & Innovation</span>
            <h2 id="sec-heading" className="heading-2 mt-2 text-fg">Security Ecosystems</h2>
            <p className="body-base mt-2 text-fg-muted max-w-[50ch]">
              Participation in technology hackathons, bug registries, and platform developer initiatives.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {securityInnovation.map((project) => (
              <article key={project.name} className="group relative flex flex-col justify-between rounded-xl border border-border bg-canvas p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold tracking-wider text-brand-400 uppercase">{project.category}</span>
                  <h3 className="heading-3 text-fg">{project.name}</h3>
                  <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-400 hover:underline"
                      aria-label={`Explore Dolly profile on GitHub for hackathons`}
                    >
                      {project.linkText || "View Activity"}
                      <ExternalLink className="h-3 w-3" aria-hidden />
                    </a>
                  ) : (
                    <span className="text-[10px] font-bold text-fg-subtle uppercase tracking-wider">{project.status}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 04 — Building Startiz */}
      <section className="py-16 sm:py-20 border-t border-border bg-canvas" aria-labelledby="startiz-build-heading">
        <Container>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">04 / Building Startiz</span>
            <h2 id="startiz-build-heading" className="heading-2 mt-2 text-fg">Active Studio Stack</h2>
            <p className="body-base mt-2 text-fg-muted max-w-[50ch]">
              Our proprietary tooling and internal client planning solutions.
            </p>
          </div>

          <div className="max-w-3xl">
            {internalProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.name} className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-8 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <h3 className="heading-3 text-fg">{project.name}</h3>
                          <span className="text-[11px] font-bold text-brand-400 tracking-wide uppercase">{project.status}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-fg-subtle font-medium">{project.category}</span>
                    <p className="text-base leading-relaxed text-fg-muted">{project.description}</p>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 pt-6 border-t border-border/40">
                    <div className="flex flex-wrap gap-2">
                      {project.capabilities.map((tech) => (
                        <span key={tech} className="inline-flex items-center rounded-md bg-canvas px-2.5 py-1 text-xs font-semibold text-fg-subtle border border-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="relative overflow-hidden border-t border-border bg-surface py-20" aria-label="Work page call to action">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[400px] w-[600px] rounded-full bg-brand-500/5 blur-[100px]" />
        </div>

        <Container className="relative z-10 flex flex-col items-center gap-8 text-center">
          <h2 className="heading-2 max-w-[28ch] text-fg">Ready to build your launch plan?</h2>
          <p className="body-lg mx-auto max-w-[50ch] text-fg-muted">
            Run your startup idea through our AI-integrated planner to get a custom roadmap immediately, free.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/launch-planner" variant="primary" size="lg">
              Build My Launch Plan
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
