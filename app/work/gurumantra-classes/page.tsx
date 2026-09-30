import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Laptop, Shield, Layout, Search, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: GuruMantra Classes — Startiz Labs",
  description:
    "Explore how GuruMantra Classes' digital presence was established, including search engine local discovery, optimization, and platform infrastructure.",
  alternates: {
    canonical: "/work/gurumantra-classes",
  },
  openGraph: {
    title: "Case Study: GuruMantra Classes — Startiz Labs",
    description:
      "Explore how GuruMantra Classes' digital presence was established, including search engine local discovery, optimization, and platform infrastructure.",
  },
};

export default function GuruMantraPage() {
  const capabilities = [
    "Digital Branding Strategy",
    "Local Search Engine Discovery",
    "Schema Markup Integration",
    "Google Maps API Placement",
    "Responsive Static Landing Pages",
    "Content Architecture Optimization",
    "Infrastructure Setup & Web Analytics"
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16" aria-label="GuruMantra Hero">
        <Container>
          {/* Back to Work Link */}
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-fg-subtle hover:text-brand-400 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Selected Work
          </Link>

          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">03 / COMPLETED CASE STUDY</span>
            <h1 className="heading-1 text-fg">GuruMantra Classes</h1>
            <p className="body-lg text-fg-muted max-w-[65ch]">
              Complete regional digital management, web infrastructure integration, and search visibility launch for a leading education brand.
            </p>
          </div>
        </Container>
      </section>

      {/* Project Meta Bar Info */}
      <section className="border-y border-border bg-surface py-8">
        <Container>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 text-sm">
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">ROLE</span>
              <span className="block text-fg font-medium mt-1">Digital Infrastructure Lead</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">PERIOD</span>
              <span className="block text-fg font-medium mt-1">Contract - Shipped 2024</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">DELIVERABLES</span>
              <span className="block text-fg font-medium mt-1">Local SEO Setup, Web Presence, Infrastructure</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">CLIENT</span>
              <span className="block text-fg font-medium mt-1">GuruMantra Classes Patna</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study Details */}
      <section className="py-16 sm:py-20 bg-canvas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col gap-10">
              {/* Overview */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">OVERVIEW</h2>
                <h3 className="heading-2 text-fg mb-4">Establishing Local Authority</h3>
                <p className="body-base text-fg-muted">
                  GuruMantra Classes required unified digital structuring to make sure students could discover their educational programs, map physical branches, and contact study advisors online. The execution focused on optimizing local search engine endpoints, mapping schema attributes, and designing search-indexable information frameworks.
                </p>
              </div>

              {/* The Work */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">THE WORK</h2>
                <h3 className="heading-2 text-fg mb-4">Scope of Accomplishments</h3>
                <ul className="space-y-4 text-sm text-fg-muted list-none pl-0">
                  <li className="flex gap-3 items-start">
                    <Search className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Search Optimization (SEO):</strong> Set up verified business parameters, formatted correct meta schema tags, and optimized local citation consistency to increase direct mobile discoveries.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Globe className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Web Presence Alignment:</strong> Assembled clean, indexable static assets containing curriculum modules, physical addresses, maps, and enrollment endpoints.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Layout className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Information Architecture:</strong> Re-structured course pages with clear, logical menu levels, enabling prospective students to easily read schedule outlines.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Outcome */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">OUTCOME</h2>
                <div className="rounded-xl border border-brand-500/20 bg-surface-2 p-6">
                  <p className="body-base font-semibold text-brand-400 mb-1">Project Milestone Completed</p>
                  <p className="text-sm text-fg-muted">
                    Scope successfully delivered in production across product design, full-stack engineering, branding, SEO and digital client launch execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Capabilities Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rounded-xl border border-border bg-surface p-6 shadow-sm">
                <h3 className="heading-3 text-fg mb-4">Core Capabilities</h3>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-canvas px-3 py-1 text-xs font-semibold text-fg-subtle border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Showcase (Mock UI) */}
              <div className="rounded-xl border border-border bg-surface p-6 flex flex-col gap-4 shadow-sm">
                <h3 className="heading-3 text-fg">Optimization Metrics</h3>
                
                {/* Search Discovery Mock */}
                <div className="rounded-lg border border-border/80 bg-canvas p-4 flex flex-col gap-2 relative overflow-hidden">
                  <span className="text-[9px] font-bold text-brand-400 uppercase tracking-widest">Search Engine Listing Preview</span>
                  <div className="h-20 w-full bg-surface-3 border border-border/40 rounded mt-2 p-2 flex flex-col justify-between">
                    <span className="text-xs font-bold text-[#3b82f6] hover:underline cursor-pointer">GuruMantra Classes — Patna Coaching Centers</span>
                    <span className="text-[9.5px] text-brand-400">★★★★★ 4.9 Rating · Verified Business</span>
                    <p className="text-[9.5px] text-fg-subtle line-clamp-2">Providing class modules for secondary exams. Contact details, maps, and enrollment forms.</p>
                  </div>
                </div>

                {/* Local Maps Mock */}
                <div className="rounded-lg border border-border/80 bg-canvas p-4 flex flex-col gap-2 relative overflow-hidden">
                  <span className="text-[9px] font-bold text-brand-400 uppercase tracking-widest">Discovery Map Routing</span>
                  <div className="h-16 w-full bg-surface-2 rounded border border-border/50 mt-2 flex items-center justify-center relative">
                    {/* Simulated Map Grid */}
                    <div className="absolute inset-0 border border-dashed border-border/30 opacity-40" />
                    {/* Mock Map pin */}
                    <div className="flex flex-col items-center relative z-10">
                      <div className="h-4 w-4 bg-brand-500 rounded-full border-2 border-canvas shadow-lg flex items-center justify-center animate-bounce">
                        <span className="h-1.5 w-1.5 rounded-full bg-canvas" />
                      </div>
                      <span className="text-[8px] bg-canvas border border-border px-1.5 py-0.5 rounded text-fg font-mono uppercase mt-1">GuruMantra Patna</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Work */}
      <section className="py-16 border-t border-border bg-surface">
        <Container>
          <div className="mb-10 text-center">
            <Badge variant="default" className="mb-2">PORTFOLIO</Badge>
            <h3 className="heading-3 text-fg">Related Case Studies</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {/* Link to Zomoggy */}
            <Link
              href="/work/zomoggy"
              className="group flex items-center justify-between rounded-xl border border-border bg-canvas p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  <Laptop className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-fg">Zomoggy</h4>
                  <span className="text-[10px] text-fg-subtle">Product Engineering & Ads</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-fg-subtle transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Link to Bincraft */}
            <Link
              href="/work/bincraft-technologies"
              className="group flex items-center justify-between rounded-xl border border-border bg-canvas p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  <Shield className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-fg">Bincraft Technologies</h4>
                  <span className="text-[10px] text-fg-subtle">Security Engineering & Brand Identity</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-fg-subtle transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Have something similar in mind? */}
      <section className="relative overflow-hidden border-t border-border bg-canvas py-16 text-center" aria-label="Gurumantra page final call to action">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h3 className="heading-2 text-fg">Have something similar in mind?</h3>
            <p className="body-base text-fg-muted">
              We specialize in creating digital mapping, landing networks, analytics tools, and local positioning systems. Let&apos;s build yours.
            </p>
            <Button href="/contact" variant="primary" size="md">
              Talk to Startiz
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
