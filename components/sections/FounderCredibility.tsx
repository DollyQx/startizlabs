"use client";

import { Container } from "@/components/ui/Container";
import { Briefcase, Calendar, ShieldCheck, Globe, Star, Flag } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export function FounderCredibility() {
  const experiences = [
    {
      company: "Zomoggy",
      role: "Software Engineer",
      period: "18 July 2024 – 27 February 2026",
      details: "Built Zomoggy's digital presence from the ground up, combining software engineering, product development, branding, SEO, content, and digital acquisition."
    },
    {
      company: "Bincraft Technologies",
      role: "Cybersecurity Engineer",
      period: "10 April 2023 – June 2024",
      details: "Worked in cybersecurity while contributing to Bincraft Technologies' visual identity, logo, color system, and brand foundations."
    }
  ];

  const credentials = [
    {
      title: "HackerOne Bug Hunting",
      description: "Active vulnerability research and responsible white-hat security disclosure.",
      icon: ShieldCheck
    },
    {
      title: "Hackathon Competitor",
      description: "Participating in rapid prototyping and collaborative technology assembly.",
      icon: Star
    },
    {
      title: "Developer Ecosystem Presence",
      description: "Engaging in platform developer initiatives across major technology networks.",
      icon: Flag
    }
  ];

  const socials = [
    { name: "LinkedIn", url: "https://linkedin.com/in/dollyqx", icon: LinkedinIcon },
    { name: "GitHub", url: "https://github.com/dollyqx", icon: GithubIcon },
    { name: "Google Developer Profile", url: "https://g.dev/dollyqx", icon: Globe },
    { name: "Instagram", url: "https://instagram.com/d011yqx", icon: InstagramIcon }
  ];

  return (
    <section className="py-20 border-t border-border bg-surface" aria-labelledby="founder-credibility-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Panel: Profile Detail */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative aspect-square w-full max-w-sm rounded-2xl border border-brand-500/20 bg-surface-2 flex flex-col items-center justify-center overflow-hidden group shadow-lg shadow-brand-950/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-950/60 to-surface-3 transition-opacity group-hover:opacity-85" aria-hidden="true" />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div 
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-3xl font-bold font-mono tracking-wider shadow-[0_0_20px_rgba(34,165,88,0.15)] transition-transform duration-300 group-hover:scale-105"
                  aria-label="Dolly Kumari initials avatar placeholder"
                >
                  DK
                </div>
                <h3 className="text-sm font-bold text-fg-subtle uppercase tracking-widest mt-1">Founder Profile</h3>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400">FOUNDER</span>
              <h2 id="founder-credibility-heading" className="heading-2 mt-1 text-fg">Dolly Kumari</h2>
              <p className="text-sm font-semibold tracking-wide text-fg-subtle mt-1">
                Software Engineer · Cybersecurity · Product Builder
              </p>
            </div>

            <blockquote className="border-l-2 border-brand-500/70 pl-4 py-1">
              <p className="text-sm italic text-fg-muted font-medium leading-relaxed">
                &ldquo;Building Startiz Labs as an AI-powered launch studio to bridge strategy, design, and reliable software engineering.&rdquo;
              </p>
            </blockquote>

            <div className="flex flex-wrap items-center gap-3" aria-label="Founder social channels">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-canvas text-fg-muted transition-colors hover:bg-brand-500/10 hover:text-brand-400 hover:border-brand-500/30 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                    aria-label={`Visit Dolly Kumari's ${social.name}`}
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Panels: History / Ecosystem */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Timeline */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-6">Professional History</h3>
              <div className="relative border-l border-border/80 pl-6 ml-3 flex flex-col gap-8">
                {experiences.map((exp) => (
                  <div key={exp.company} className="relative">
                    <div className="absolute -left-9 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-canvas">
                      <Briefcase className="h-3.5 w-3.5 text-fg-subtle" aria-hidden="true" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-fg">{exp.company}</h4>
                        <span className="inline-flex items-center gap-1.5 text-xs text-brand-400 font-semibold uppercase">
                          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                          {exp.period}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-fg-subtle uppercase tracking-wider">{exp.role}</span>
                      <p className="text-sm leading-relaxed text-fg-muted mt-1">{exp.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ecosystem Credentials */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-6">Ecosystem Credibility</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {credentials.map((cred) => {
                  const Icon = cred.icon;
                  return (
                    <div key={cred.title} className="flex flex-col gap-2 rounded-xl border border-border bg-canvas p-4 shadow-sm">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20 max-w-max">
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </div>
                      <h4 className="text-xs font-bold text-fg uppercase tracking-wider mt-1">{cred.title}</h4>
                      <p className="text-[11px] leading-relaxed text-fg-muted">{cred.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
