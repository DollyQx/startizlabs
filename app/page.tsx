import type { Metadata } from "next";
import { HeroSection }       from "@/components/sections/HeroSection";
import { ProblemSection }    from "@/components/sections/ProblemSection";
import { ServicesSection }   from "@/components/sections/ServicesSection";
import { ProcessSection }    from "@/components/sections/ProcessSection";
import { PortfolioPreview }  from "@/components/sections/PortfolioPreview";
import { AISection }         from "@/components/sections/AISection";
import { WhoWeHelpSection }  from "@/components/sections/WhoWeHelpSection";
import { CreatorCallout }    from "@/components/sections/CreatorCallout";
import { WhyStartizSection } from "@/components/sections/WhyStartizSection";
import { TrustSection }      from "@/components/sections/TrustSection";
import { FinalCTASection }   from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: {
    absolute: "Startiz Labs — From Idea to Launch",
  },
  description:
    "Startiz Labs is a premiere startup launch studio. We help founders, creators, and early-stage businesses navigate launch planning, strategy, branding, engineering, content, and growth.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Startiz Labs — From Idea to Launch",
    description:
      "Startiz Labs is a premiere startup launch studio. We help founders, creators, and early-stage businesses navigate launch planning, strategy, branding, engineering, content, and growth.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — The Problem */}
      <ProblemSection />

      {/* 3 — What We Do */}
      <ServicesSection />

      {/* 4 — How Startiz Works */}
      <ProcessSection />

      {/* 4.5 — Portfolio Preview */}
      <PortfolioPreview />

      {/* 5 — AI Feature */}
      <AISection />

      {/* 6 — Who We Help */}
      <WhoWeHelpSection />

      {/* 7 — Creator Callout */}
      <CreatorCallout />

      {/* 8 — Why Startiz */}
      <WhyStartizSection />

      {/* 8.5 — Trust Section */}
      <TrustSection />

      {/* 9 — Final CTA */}
      <FinalCTASection />
    </>
  );
}
