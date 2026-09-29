import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Terminal, Shield, Laptop, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FounderCredibility } from "@/components/sections/FounderCredibility";
import Link from "next/link";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
  title: "Work & Portfolio — Startiz Labs",
  description:
    "Explore things we've actually built. From professional client case studies to independent engineering projects and developer tooling.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work & Portfolio — Startiz Labs",
    description:
      "Explore things we've actually built. From professional client case studies to independent engineering projects and developer tooling.",
  },
};

const professionalWork = [
  {
    name: "ZOMOGGY",
    path: "/work/zomoggy",
    category: "Professional Experience · Product Engineering · Brand & Growth",
    description: "Built Zomoggy's digital presence from the ground up, combining software engineering, product development, branding, SEO, content and digital acquisition.",
    capabilities: [
      "Website",
      "Multi-panel food ordering app",
      "Branding",
      "SEO",
      "Social media content",
      "Meta Ads",
      "Google Ads"
    ],
    status: "Hero Case study",
    icon: Laptop,
    isHero: true
  },
  {
    name: "BINCRAFT TECHNOLOGIES",
    path: "/work/bincraft-technologies",
    category: "Professional Experience · Security Engineering · Brand Identity",
    description: "Security engineering combined with the creation of the company's visual foundation and color identity systems.",
    capabilities: [
      "Security Engineering",
      "Logo",
      "Color system",
      "Branding",
      "Visual identity"
    ],
    status: "Case Study",
    icon: Shield,
    isHero: false
  },
  {
    name: "GURUMANTRA CLASSES — PATNA",
    path: "/work/gurumantra-classes",
    category: "Business Digital Presence",
    description: "Complete digital presence management, including technology infrastructure and local search engine visibility.",
    capabilities: [
      "Complete Digital Management",
      "Search Optimization",
      "Local Discovery"
    ],
    status: "Case Study",
    icon: Layers,
    isHero: false
  }
];

const engineeringProjects = [
  {
    name: "Realtime Chat App",
    category: "Software Engineering · Real-time Application",
    description: "Instant message delivery using WebSocket (Socket.io) with persistence in MongoDB. Includes secure JWT authentication, online presence tracking, custom scrollbars, and smart notifications.",
    capabilities: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Tailwind 4"],
    link: "https://github.com/DollyQx/realtime-chat-app",
    icon: Terminal
  },
  {
    name: "Security Log Analyzer",
    category: "Developer Tooling · Security Research",
    description: "A SIEM-style dashboard (SentinelX) that detects brute force login activity (exceeding 5 failures in 1 minute) and suspicious IPs from server log files.",
    capabilities: ["Python", "FastAPI", "MongoDB", "Motor", "Chart.js", "Tailwind CSS"],
    link: "https://github.com/DollyQx/security-log-analyzer",
    icon: Shield
  },
  {
    name: "Crimson Manor",
    category: "Voice-First Game Environment",
    description: "Build conversation-focused AI pipelines. Voice-first murder mystery game using Agora Conversational AI engine in Next.js, parsing audio flow and tracking real-time turn metrics.",
    capabilities: ["Agora Conversational AI", "Next.js", "Agent UIKit", "RTM Latency Metrics"],
    link: "https://github.com/DollyQx/crimson-manor",
    icon: Terminal
  },
  {
    name: "MERN Food Ordering Platform",
    category: "Full Stack · MERN · Food Technology",
    description: "Scalable MERN franchise ordering backend API featuring role-based dashboards (Admin, Franchise, Customer), Razorpay online payment clearing, and push alerts.",
    capabilities: ["MongoDB", "Express", "React", "Node.js", "Razorpay", "Firebase"],
    link: "https://github.com/DollyQx/mern-food-ordering-platform",
    icon: Laptop
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
          <div className="flex flex-col items-center text-center gap-6">
            <Badge variant="default">SELECTED WORK</Badge>
            <h1 id="work-hero-heading" className="heading-1 text-fg max-w-[24ch]">
              Things we&apos;ve actually built.
            </h1>
            <p className="body-lg max-w-[50ch] text-fg-muted">
              From production software and digital brands to developer tools and independent engineering builds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <Button href="/contact" variant="primary" size="md">
                Start Your Project
              </Button>
              <Button href="/launch-planner" variant="outline" size="md">
                Try AI Launch Planner
              </Button>
            </div>
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
              Factual client projects executed across product construction, brand architecture, and online visibility.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {professionalWork.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.name}
                  className={`group relative flex flex-col justify-between rounded-xl border border-border bg-canvas p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2 ${
                    project.isHero ? "md:col-span-3 border-brand-500/20" : ""
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-fg">{project.name}</h3>
                          <span className="text-[10px] font-bold uppercase text-brand-400 tracking-wider">
                            {project.status}
                          </span>
                        </div>
                      </div>
                      <Link
                        href={project.path}
                        className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-xs font-semibold text-brand-400 hover:border-brand-500/30 hover:bg-brand-500/10 transition-colors"
                        aria-label={`View case study for ${project.name}`}
                      >
                        View Case Study
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                    <span className="text-xs text-fg-subtle font-medium">{project.category}</span>
                    <p className="text-sm leading-relaxed text-fg-muted">{project.description}</p>
                  </div>

                  <div className="mt-8 flex flex-col gap-4 pt-4 border-t border-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.capabilities.map((tech) => (
                        <span key={tech} className="inline-flex items-center rounded-md bg-surface-3 px-2 py-1 text-[10px] font-semibold text-fg-subtle border border-border">
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

      {/* 02 — Engineering Projects */}
      <section className="py-16 sm:py-20 border-t border-border bg-canvas" aria-labelledby="eng-heading">
        <Container>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">02 / Engineering Projects</span>
            <h2 id="eng-heading" className="heading-2 mt-2 text-fg">Independent Builds</h2>
            <p className="body-base mt-2 text-fg-muted max-w-[50ch]">
              Developer research exploring web architectures, real-time networking, SIEM tooling, and voice agent integrations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {engineeringProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.name} className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2 shadow-sm">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-fg">{project.name}</h3>
                          <span className="text-[10px] font-bold text-fg-subtle uppercase tracking-wider">Independent Build</span>
                        </div>
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-canvas text-fg-muted transition-colors hover:text-brand-400 hover:border-brand-500/30"
                        aria-label={`View ${project.name} code on GitHub`}
                      >
                        <GithubIcon className="h-4 w-4" />
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

      {/* 03 — Building Startiz */}
      <section className="py-16 sm:py-20 border-t border-border bg-surface" aria-labelledby="startiz-build-heading">
        <Container>
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">03 / Building Startiz</span>
            <h2 id="startiz-build-heading" className="heading-2 mt-2 text-fg">Active Studio Stack</h2>
            <p className="body-base mt-2 text-fg-muted max-w-[50ch]">
              Our proprietary tooling and internal client planning solutions.
            </p>
          </div>

          <div className="max-w-3xl">
            <article className="group relative flex flex-col justify-between rounded-xl border border-border bg-canvas p-8 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2 shadow-sm">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                      <Layers className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <h3 className="heading-3 text-fg">STARTIZ LABS</h3>
                      <span className="text-[11px] font-bold text-brand-400 tracking-wide uppercase">Live · Building</span>
                    </div>
                  </div>
                  <Link
                    href="/launch-planner"
                    className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-xs font-semibold text-brand-400 hover:border-brand-500/30 hover:bg-brand-500/10 transition-colors"
                  >
                    Launch Planner Tool
                    <ArrowRight className="h-3 w-3" />
                  </Link>
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

      {/* Founder Credibility block */}
      <FounderCredibility />
    </>
  );
}
