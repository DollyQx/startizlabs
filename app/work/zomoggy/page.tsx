import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ArrowRight, Laptop, Shield, Layers, Layout, Search, Megaphone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Study: Zomoggy — Startiz Labs",
  description:
    "Explore how Zomoggy's complete platform presence was developed, from software engineering and multi-role dashboards to SEO and brand systems.",
  alternates: {
    canonical: "/work/zomoggy",
  },
  openGraph: {
    title: "Case Study: Zomoggy — Startiz Labs",
    description:
      "Explore how Zomoggy's complete platform presence was developed, from software engineering and multi-role dashboards to SEO and brand systems.",
  },
};

export default function ZomoggyPage() {
  const capabilities = [
    "Next.js Web Client",
    "Node.js Backend REST API",
    "Android App Integration",
    "Razorpay Online Payment Hook",
    "TailwindCSS & Framer Motion",
    "Firebase Platform Services",
    "Cloudinary Asset Hosting",
    "Meta Ads & Google Ads Management",
    "System Branding & SEO Layout"
  ];

  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16" aria-label="Zomoggy Hero">
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
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400">01 / FEATURED CASE STUDY</span>
            <h1 className="heading-1 text-fg">Zomoggy</h1>
            <p className="body-lg text-fg-muted max-w-[65ch]">
              Complete software architecture, brand layout, and operational launch implementation for a multi-role food delivery and franchise management system.
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
              <span className="block text-fg font-medium mt-1">Software Engineer</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">PERIOD</span>
              <span className="block text-fg font-medium mt-1">18 July 2024 – 27 February 2026</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">DELIVERABLES</span>
              <span className="block text-fg font-medium mt-1">Full-Stack Web, Android app, Branding, SEO & Ads</span>
            </div>
            <div>
              <span className="block text-xs font-bold text-fg-subtle tracking-wider uppercase">CLIENT</span>
              <span className="block text-fg font-medium mt-1">Zomoggy Franchise Group</span>
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
                <h3 className="heading-2 text-fg mb-4">Building a Digital Franchise Model</h3>
                <p className="body-base text-fg-muted">
                  Zomoggy needed a robust system to manage orders, franchise permissions, client accounts, dynamic menu catalogs, and active merchant checkouts in one unified system. The project was conceived as an end-to-end launch encompassing user web interfaces, native Android apps, scalable APIs, search performance layouts, and paid advertising operations.
                </p>
              </div>

              {/* The Work */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3">THE WORK</h2>
                <h3 className="heading-2 text-fg mb-4">Scope of Accomplishments</h3>
                <ul className="space-y-4 text-sm text-fg-muted list-none pl-0">
                  <li className="flex gap-3 items-start">
                    <Layout className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Multi-Role Web Portals:</strong> Engineered separate workflows and dashboard consoles for System Administrators, Franchise Owners, and Customers using Next.js.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Laptop className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Full-Stack REST Architecture:</strong> Designed a secure backend server (Node.js/Express) providing database persistence with MongoDB, JWT-based role authorizations, and edge storage file systems.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Layers className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Android Mobile Client:</strong> Coordinated Android application compilation (`zomoggyiya`) binding API tokens, Firebase cloud notifications, and geolocation orders.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Search className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Search Optimization & Visibility:</strong> Implemented schema markup, responsive indexing pages, and layout structures to gain organic discovery.
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Megaphone className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-fg">Growth & Ads Launch:</strong> Set up and orchestrated launching Meta Ads and Google Ads strategies for targeting franchise and customer segments.
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
                <h3 className="heading-3 text-fg">Visual Concept Mocks</h3>
                
                {/* Mock Card 1 */}
                <div className="rounded-lg border border-border/80 bg-canvas p-4 flex flex-col gap-2 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 h-16 w-16 bg-brand-500/10 rounded-bl-full border-b border-l border-brand-500/20 pointer-events-none" />
                  <span className="text-[9px] font-bold text-brand-400 uppercase tracking-widest">Dashboard Console Mock</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                    <span className="text-[10px] text-fg-subtle font-mono">FRANCHISE MANAGER V1.0</span>
                  </div>
                  <div className="h-16 w-full bg-surface-2 rounded border border-border/50 mt-2 flex flex-col gap-2 p-2">
                    <div className="h-2 w-1/3 bg-border rounded" />
                    <div className="h-2 w-2/3 bg-border/60 rounded" />
                    <div className="flex justify-between items-center mt-auto">
                      <div className="h-4 w-12 bg-brand-500/20 rounded" />
                      <div className="h-3 w-8 bg-border rounded" />
                    </div>
                  </div>
                </div>

                {/* Mock Card 2 */}
                <div className="rounded-lg border border-border/80 bg-canvas p-4 flex flex-col gap-2 relative overflow-hidden">
                  <span className="text-[9px] font-bold text-brand-400 uppercase tracking-widest">Mobile Client Flow Mock</span>
                  <span className="text-[10px] text-fg-subtle font-mono">CUSTOMER APP PREVIEW</span>
                  <div className="h-24 w-1/2 mx-auto bg-surface-2 rounded-t-xl border-t border-x border-border/60 mt-2 flex flex-col gap-1.5 p-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-border self-center" />
                    <div className="h-1.5 w-full bg-border rounded" />
                    <div className="h-1.5 w-4/5 bg-border rounded" />
                    <div className="h-5 w-full bg-brand-500/10 border border-brand-500/20 rounded mt-auto" />
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
      <section className="relative overflow-hidden border-t border-border bg-canvas py-16 text-center" aria-label="Zomoggy page final call to action">
        <Container>
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h3 className="heading-2 text-fg">Have something similar in mind?</h3>
            <p className="body-base text-fg-muted">
              We specialize in bringing full digital architectures, database integrations, applications and visibility channels to life. Let&apos;s build yours.
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
