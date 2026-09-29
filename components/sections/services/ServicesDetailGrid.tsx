import { Target, Palette, Globe, FileText, TrendingUp, Bot } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimateIn } from "@/components/ui/AnimateIn";

type Service = {
  number: string;
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
};

const services: Service[] = [
  {
    number: "01",
    icon: Target,
    title: "Strategy",
    description: "Turn an idea into a clear business direction.",
    deliverables: [
      "Business idea clarification",
      "Target audience research",
      "Competitor research",
      "Market positioning",
      "USP development",
      "Business roadmap",
      "Launch strategy",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "Branding",
    description: "Build an identity people remember.",
    deliverables: [
      "Brand positioning",
      "Naming",
      "Tagline",
      "Logo",
      "Color palette",
      "Typography",
      "Brand direction",
      "Social profile identity",
    ],
  },
  {
    number: "03",
    icon: Globe,
    title: "Website & Technology",
    description: "Build the digital foundation your business needs.",
    deliverables: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "E-commerce websites",
      "Web applications",
      "MVP development",
      "AI integrations",
      "Automation",
    ],
  },
  {
    number: "04",
    icon: FileText,
    title: "Content",
    description: "Tell your story consistently across every channel.",
    deliverables: [
      "Content strategy",
      "Social media strategy",
      "Instagram content",
      "Reels concepts",
      "Copywriting",
      "Founder branding",
      "Creator content systems",
      "Launch campaigns",
    ],
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "SEO & Marketing",
    description:
      "Get discovered, reach the right audience and turn attention into opportunities.",
    deliverables: [
      "Basic SEO",
      "Technical SEO",
      "Keyword research",
      "On-page SEO",
      "Local SEO",
      "Social media marketing",
      "Digital marketing strategy",
    ],
  },
  {
    number: "06",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Use intelligent systems to reduce repetitive work and scale faster.",
    deliverables: [
      "AI chatbot integration",
      "AI content workflows",
      "CRM automation",
      "Email automation",
      "WhatsApp workflows",
      "Business process automation",
      "Custom AI solutions",
    ],
  },
];

export function ServicesDetailGrid() {
  return (
    <section
      aria-labelledby="services-detail-heading"
      className="relative py-24 sm:py-28"
    >
      {/* Bottom edge line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map(({ number, icon: Icon, title, description, deliverables }, i) => (
            <AnimateIn key={title} delay={i * 55}>
              <article
                aria-label={`Service: ${title}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-brand-500/25 hover:bg-surface-2"
              >
                {/* Header row */}
                <div className="mb-6 flex items-start justify-between">
                  <span className="label-sm text-fg-subtle">{number}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-canvas transition-all duration-300 group-hover:border-brand-500/30 group-hover:bg-surface">
                    <Icon className="h-4.5 w-4.5 text-brand-400" aria-hidden />
                  </div>
                </div>

                {/* Title + description */}
                <h3 className="heading-3 mb-3 text-fg">{title}</h3>
                <p className="body-base mb-6">{description}</p>

                {/* Divider */}
                <div aria-hidden className="mb-6 h-px w-full bg-border" />

                {/* Deliverables */}
                <ul className="flex flex-1 flex-col gap-2.5" role="list" aria-label={`${title} deliverables`}>
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        aria-hidden
                        className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/60"
                      />
                      <span className="text-sm text-fg-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </AnimateIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
