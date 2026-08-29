import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Laptop, Shield, Layers, Layout, Palette, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: Bincraft Technologies — Startiz Labs",
  description:
    "Explore how Bincraft Technologies combined cybersecurity engineering with an identity redesign, including logos, color systems, and brand assets.",
  alternates: {
    canonical: "/work/bincraft-technologies",
  },
  openGraph: {
    title: "Case Study: Bincraft Technologies — Startiz Labs",
    description:
      "Explore how Bincraft Technologies combined cybersecurity engineering with an identity redesign, including logos, color systems, and brand assets.",
  },
};

export default function BincraftPage() {
  const capabilities = [
    "Cybersecurity Engineering",
    "Security Vulnerability Assessment",
    "Asset Threat Modeling",
    "Logo Architecture",
    "Brand Color System",
    "Visual Identity Guidelines",
    "Creative Vector Mockups"
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16" aria-label="Bincraft Hero">
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
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">02 / COMPLETED CASE STUDY</span>
            <h1 className="heading-1 text-fg">Bincraft Technologies</h1>
            <p className="body-lg text-fg-muted max-w-[65ch]">
              Integrating corporate asset protection, security policy audits, and professional brand identity assets under one unified design system.
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
              <span className="block text-fg font-medium mt-1">Cybersecurity Engineer</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">PERIOD</span>
              <span className="block text-fg font-medium mt-1">10 April 2023 – June 2024</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">DELIVERABLES</span>
              <span className="block text-fg font-medium mt-1">Cybersecurity Guarding, Logo Design, Color System</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">CLIENT</span>
              <span className="block text-fg font-medium mt-1">Bincraft Technologies Group</span>
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
                <h3 className="heading-2 text-fg mb-4">Securing the Brand & the Base</h3>
                <p className="body-base text-fg-muted">
                  Bincraft Technologies required dual alignment: protecting their infrastructure assets from exposure threats while establishing a polished, premium aesthetic identity to communicate trust with corporate IT partners. The solution covered standardizing threat models and designing vector logos, brand books, and custom color token lists.
                </p>
              </div>

              {/* The Work */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">THE WORK</h2>
                <h3 className="heading-2 text-fg mb-4">Scope of Accomplishments</h3>
                <ul className="space-y-4 text-sm text-fg-muted list-none pl-0">
                  <li className="flex gap-3 items-start">
                    <ShieldCheck className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Cybersecurity Operations:</strong> Performed risk assessment scans, classified access controls, and checked software libraries to establish robust baseline defenses.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Layout className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Corporate Logo Design:</strong> Crafted geometric professional vector logos built for versatile sizing (favicons, email blocks, large presentations).
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Palette className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Color Token System:</strong> Standardized primary, surface, border, and semantic colors to create an elegant dark visual aesthetic suited for modern tech companies.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Layers className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Visual Guidelines Guide:</strong> Formulated comprehensive branding rules detailing correct typography families (Inter/Outfit), layout margins, and logo misuse rules.
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
                <h3 className="heading-3 text-fg">Design Assets</h3>
                
                {/* Brand Colors Mock */}
                <div className="rounded-lg border border-border/80 bg-canvas p-4 flex flex-col gap-2">
                  <span className="text-[9px] font-bold text-brand-400 uppercase tracking-widest">Brand Accent Colors</span>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    <div className="flex flex-col gap-1 items-center">
                      <div className="h-8 w-full rounded bg-[#22a558] border border-border" />
                      <span className="text-[8px] text-fg-subtle font-mono">#22A558</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <div className="h-8 w-full rounded bg-[#0a0f0d] border border-border" />
                      <span className="text-[8px] text-fg-subtle font-mono">#0A0F0D</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <div className="h-8 w-full rounded bg-[#161d1a] border border-border" />
                      <span className="text-[8px] text-fg-subtle font-mono">#161D1A</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <div className="h-8 w-full rounded bg-[#f4f7f5] border border-border" />
                      <span className="text-[8px] text-fg-subtle font-mono">#F4F7F5</span>
                    </div>
                  </div>
                </div>

                {/* Logo Guide Mock */}
                <div className="rounded-lg border border-border/80 bg-canvas p-4 flex flex-col gap-2 relative overflow-hidden">
                  <span className="text-[9px] font-bold text-brand-400 uppercase tracking-widest">Logo Geometry Mapping</span>
                  <div className="h-16 w-full border border-dashed border-brand-500/20 bg-surface-2 mt-2 rounded flex items-center justify-center relative">
                    {/* Grid lines layout */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-3 pointer-events-none opacity-40">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div key={i} className="border-[0.5px] border-brand-500/10" />
                      ))}
                    </div>
                    {/* Mock Logo Icon */}
                    <div className="relative z-10 flex items-center gap-1">
                      <div className="h-6 w-6 rounded border border-brand-400 bg-brand-500/10 flex items-center justify-center">
                        <Shield className="h-3.5 w-3.5 text-brand-400" />
                      </div>
                      <span className="font-mono text-xs font-bold text-fg tracking-wide">BINCRAFT</span>
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

            {/* Link to Gurumantra */}
            <Link
              href="/work/gurumantra-classes"
              className="group flex items-center justify-between rounded-xl border border-border bg-canvas p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-surface-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  <Layers className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase text-fg">GuruMantra Classes</h4>
                  <span className="text-[10px] text-fg-subtle">Digital Infrastructure</span>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-fg-subtle transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Have something similar in mind? */}
      <section className="relative overflow-hidden border-t border-border bg-canvas py-16 text-center" aria-label="Bincraft page final call to action">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h3 className="heading-2 text-fg">Have something similar in mind?</h3>
            <p className="body-base text-fg-muted">
              We specialize in bridging sound safety practices, threat controls, logos, and digital system identities. Let&apos;s build yours.
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
