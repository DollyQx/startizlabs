"use client";

import { useState, useEffect } from "react";
import { 
  Lightbulb, Users, BarChart3, Crosshair, Palette, 
  Layers, Globe, Send, Check, X, Shield, Download, ArrowRight, Star
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LaunchBlueprint, PlannerAnswers } from "./types";

type BlueprintResultsProps = {
  answers: PlannerAnswers;
  blueprint: LaunchBlueprint;
  onReset: () => void;
};

export function BlueprintResults({ answers, blueprint, onReset }: BlueprintResultsProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    idea: true, // open the first one by default
  });
  
  // Lead modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bizName, setBizName] = useState(answers.businessName || "");
  const [contactMethod, setContactMethod] = useState("email");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [modalError, setModalError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !whatsapp) {
      setModalError("Please fill out all required fields.");
      return;
    }
    if (!consent) {
      setModalError("Please agree to the contact consent check box.");
      return;
    }
    setModalError("");
    setIsSubmitting(true);

    // Simulate database submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Close modal helper
  const closeModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setWhatsapp("");
  };

  // SVG dimensions for circular progress
  const radius = 45;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (blueprint.score / 100) * circumference;

  return (
    <div className="relative w-full py-12 sm:py-16">
      <Container size="default">
        {/* Results Header */}
        <div className="text-center mb-16">
          <span className="label-sm inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 mb-4 animate-fade-in">
            Plan Ready
          </span>
          <h1 className="heading-display mb-3">Your Launch Blueprint</h1>
          <p className="body-lg max-w-[50ch] mx-auto text-fg-muted">
            Here&apos;s a strategic analysis of your business idea and a roadmap to get you ready for launch.
          </p>
        </div>

        {/* Scores & Metrics Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {/* Main Circular Score card */}
          <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm md:col-span-1 text-center">
            <span className="text-xs font-semibold text-fg-subtle uppercase tracking-wider mb-6">
              Launch Readiness
            </span>

            {/* Circular Progress Gauge */}
            <div className="relative flex items-center justify-center h-36 w-36 mb-6">
              <svg className="h-full w-full rotate-[-90deg]">
                {/* Background Ring */}
                <circle
                  cx="72"
                  cy="72"
                  r={radius}
                  className="stroke-borderfill fill-transparent"
                  strokeWidth={strokeWidth}
                  style={{ stroke: "rgba(255,255,255,0.05)" }}
                />
                {/* Score Indicator Ring */}
                <circle
                  cx="72"
                  cy="72"
                  r={radius}
                  className="stroke-brand-500 fill-transparent transition-all duration-[1500ms] ease-out-quint"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={isMounted ? strokeDashoffset : circumference}
                  strokeLinecap="round"
                />
              </svg>
              {/* Score text */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl font-extrabold text-fg">{blueprint.score}</span>
                <span className="text-[10px] text-fg-subtle font-medium uppercase tracking-wider mt-0.5">/ 100</span>
              </div>
            </div>

            <span className="text-sm font-semibold text-brand-400 bg-brand-500/10 px-3.5 py-1 rounded-full">
              {blueprint.status}
            </span>
          </div>

          {/* Individual Category Metrics Card */}
          <div className="p-8 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm md:col-span-2 flex flex-col justify-center">
            <span className="text-xs font-semibold text-fg-subtle uppercase tracking-wider mb-6">
              Evaluation Metrics
            </span>
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Metric Row 1: Strategy */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-fg">Strategy</span>
                  <span className="text-brand-400">{blueprint.metrics.strategy}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full bg-brand-500 transition-all duration-1000 ease-out"
                    style={{ width: isMounted ? `${blueprint.metrics.strategy}%` : "0%" }}
                  />
                </div>
              </div>

              {/* Metric Row 2: Brand */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-fg">Brand Direction</span>
                  <span className="text-brand-400">{blueprint.metrics.brand}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full bg-brand-500 transition-all duration-1000 ease-out"
                    style={{ width: isMounted ? `${blueprint.metrics.brand}%` : "0%" }}
                  />
                </div>
              </div>

              {/* Metric Row 3: Product */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-fg">Product / MVP</span>
                  <span className="text-brand-400">{blueprint.metrics.product}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full bg-brand-500 transition-all duration-1000 ease-out"
                    style={{ width: isMounted ? `${blueprint.metrics.product}%` : "0%" }}
                  />
                </div>
              </div>

              {/* Metric Row 4: Growth */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-fg">Growth &amp; SEO</span>
                  <span className="text-brand-400">{blueprint.metrics.growth}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full bg-brand-500 transition-all duration-1000 ease-out"
                    style={{ width: isMounted ? `${blueprint.metrics.growth}%` : "0%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blueprint Sections Title */}
        <div className="mb-8">
          <h2 className="heading-3 text-fg mb-1">Blueprint Breakdown</h2>
          <p className="text-sm text-fg-subtle">
            Expand each section to explore tactical action points.
          </p>
        </div>

        {/* The 8 Blueprint Sections */}
        <div className="flex flex-col gap-4 mb-16">
          {/* Section 1: BUSINESS IDEA */}
          <div className="rounded-xl border border-border bg-surface/20 overflow-hidden">
            <button
              onClick={() => toggleAccordion("idea")}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-fg hover:bg-surface/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <Lightbulb className="h-5 w-5 text-brand-400" />
                <span>1. Business Idea</span>
              </div>
              <span className="text-fg-subtle">{openAccordions.idea ? "▲" : "▼"}</span>
            </button>
            {openAccordions.idea && (
              <div className="p-6 border-t border-border/40 bg-surface/10 grid gap-5 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Refined Concept</h4>
                  <p className="text-fg-muted">{blueprint.businessIdea.refinedConcept}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Business Model</h4>
                  <p className="text-fg-muted">{blueprint.businessIdea.businessModel}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Core Problem</h4>
                  <p className="text-fg-muted">{blueprint.businessIdea.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Proposed Solution</h4>
                  <p className="text-fg-muted">{blueprint.businessIdea.solution}</p>
                </div>
              </div>
            )}
          </div>

          {/* Section 2: TARGET AUDIENCE */}
          <div className="rounded-xl border border-border bg-surface/20 overflow-hidden">
            <button
              onClick={() => toggleAccordion("audience")}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-fg hover:bg-surface/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <Users className="h-5 w-5 text-brand-400" />
                <span>2. Target Audience</span>
              </div>
              <span className="text-fg-subtle">{openAccordions.audience ? "▲" : "▼"}</span>
            </button>
            {openAccordions.audience && (
              <div className="p-6 border-t border-border/40 bg-surface/10 grid gap-5 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Primary Customer</h4>
                  <p className="text-fg-muted">{blueprint.targetAudience.primaryCustomer}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Main Pain Points</h4>
                  <p className="text-fg-muted">{blueprint.targetAudience.mainPainPoints}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Customer Characteristics</h4>
                  <p className="text-fg-muted">{blueprint.targetAudience.characteristics}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Buying Motivations</h4>
                  <p className="text-fg-muted">{blueprint.targetAudience.buyingMotivation}</p>
                </div>
              </div>
            )}
          </div>

          {/* Section 3: MARKET */}
          <div className="rounded-xl border border-border bg-surface/20 overflow-hidden">
            <button
              onClick={() => toggleAccordion("market")}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-fg hover:bg-surface/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <BarChart3 className="h-5 w-5 text-brand-400" />
                <span>3. Market Opportunity</span>
              </div>
              <span className="text-fg-subtle">{openAccordions.market ? "▲" : "▼"}</span>
            </button>
            {openAccordions.market && (
              <div className="p-6 border-t border-border/40 bg-surface/10 grid gap-5 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Market Opportunity</h4>
                  <p className="text-fg-muted">{blueprint.market.marketOpportunity}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Competitor Categories</h4>
                  <p className="text-fg-muted">{blueprint.market.competitorCategories}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Potential Differentiation</h4>
                  <p className="text-fg-muted">{blueprint.market.potentialDifferentiation}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Key Launch Assumptions</h4>
                  <p className="text-fg-muted">{blueprint.market.keyAssumptions}</p>
                </div>
              </div>
            )}
          </div>

          {/* Section 4: POSITIONING */}
          <div className="rounded-xl border border-border bg-surface/20 overflow-hidden">
            <button
              onClick={() => toggleAccordion("positioning")}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-fg hover:bg-surface/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <Crosshair className="h-5 w-5 text-brand-400" />
                <span>4. Business Positioning</span>
              </div>
              <span className="text-fg-subtle">{openAccordions.positioning ? "▲" : "▼"}</span>
            </button>
            {openAccordions.positioning && (
              <div className="p-6 border-t border-border/40 bg-surface/10 grid gap-5 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Suggested Positioning</h4>
                  <p className="text-fg-muted">{blueprint.positioning.suggestedPositioning}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Value Proposition</h4>
                  <p className="text-fg-muted">{blueprint.positioning.valueProposition}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Unique Selling Proposition (USP)</h4>
                  <p className="text-fg-muted">{blueprint.positioning.usp}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Brand Angle</h4>
                  <p className="text-fg-muted">{blueprint.positioning.brandAngle}</p>
                </div>
              </div>
            )}
          </div>

          {/* Section 5: BRAND */}
          <div className="rounded-xl border border-border bg-surface/20 overflow-hidden">
            <button
              onClick={() => toggleAccordion("brand")}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-fg hover:bg-surface/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <Palette className="h-5 w-5 text-brand-400" />
                <span>5. Brand Direction</span>
              </div>
              <span className="text-fg-subtle">{openAccordions.brand ? "▲" : "▼"}</span>
            </button>
            {openAccordions.brand && (
              <div className="p-6 border-t border-border/40 bg-surface/10 grid gap-5 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Suggested Direction</h4>
                  <p className="text-fg-muted">{blueprint.brand.suggestedBrandDirection}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Suggested Visual Style</h4>
                  <p className="text-fg-muted">{blueprint.brand.suggestedVisualDirection}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Sample Names</h4>
                  <ul className="list-disc pl-5 text-fg-muted flex flex-col gap-1">
                    {blueprint.brand.sampleNames.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Tagline Concepts</h4>
                  <ul className="list-disc pl-5 text-fg-muted flex flex-col gap-1">
                    {blueprint.brand.taglineConcepts.map((tag) => (
                      <li key={tag}>&ldquo;{tag}&rdquo;</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Section 6: PRODUCT / MVP */}
          <div className="rounded-xl border border-border bg-surface/20 overflow-hidden">
            <button
              onClick={() => toggleAccordion("product")}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-fg hover:bg-surface/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <Layers className="h-5 w-5 text-brand-400" />
                <span>6. Product / MVP Scope</span>
              </div>
              <span className="text-fg-subtle">{openAccordions.product ? "▲" : "▼"}</span>
            </button>
            {openAccordions.product && (
              <div className="p-6 border-t border-border/40 bg-surface/10 grid gap-5 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Recommended MVP</h4>
                  <p className="text-fg-muted">{blueprint.productMvp.recommendedMvp}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Suggested First Version</h4>
                  <p className="text-fg-muted">{blueprint.productMvp.suggestedFirstVersion}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Must-Have Features</h4>
                  <ul className="list-disc pl-5 text-fg-muted flex flex-col gap-1">
                    {blueprint.productMvp.mustHaveFeatures.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Nice-to-Have Features</h4>
                  <ul className="list-disc pl-5 text-fg-muted flex flex-col gap-1">
                    {blueprint.productMvp.niceToHaveFeatures.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Section 7: WEBSITE */}
          <div className="rounded-xl border border-border bg-surface/20 overflow-hidden">
            <button
              onClick={() => toggleAccordion("website")}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-fg hover:bg-surface/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <Globe className="h-5 w-5 text-brand-400" />
                <span>7. Recommended Website</span>
              </div>
              <span className="text-fg-subtle">{openAccordions.website ? "▲" : "▼"}</span>
            </button>
            {openAccordions.website && (
              <div className="p-6 border-t border-border/40 bg-surface/10 grid gap-5 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Recommended Architecture</h4>
                  <p className="text-fg-muted">{blueprint.website.recommendedWebsiteType}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Main Calls to Action (CTA)</h4>
                  <p className="text-fg-muted">{blueprint.website.mainCta}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Suggested Pages</h4>
                  <ul className="list-disc pl-5 text-fg-muted flex flex-col gap-1">
                    {blueprint.website.suggestedPages.map((pg) => (
                      <li key={pg}>{pg}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Suggested Homepage Layout</h4>
                  <ol className="list-decimal pl-5 text-fg-muted flex flex-col gap-1">
                    {blueprint.website.homepageStructure.map((struct) => (
                      <li key={struct}>{struct}</li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
          </div>

          {/* Section 8: CONTENT & MARKETING */}
          <div className="rounded-xl border border-border bg-surface/20 overflow-hidden">
            <button
              onClick={() => toggleAccordion("marketing")}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-fg hover:bg-surface/30 transition-colors duration-200"
            >
              <div className="flex items-center gap-3.5">
                <Send className="h-5 w-5 text-brand-400" />
                <span>8. Content &amp; Marketing channels</span>
              </div>
              <span className="text-fg-subtle">{openAccordions.marketing ? "▲" : "▼"}</span>
            </button>
            {openAccordions.marketing && (
              <div className="p-6 border-t border-border/40 bg-surface/10 grid gap-5 md:grid-cols-2 text-sm">
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">SEO Keywords Strategy</h4>
                  <p className="text-fg-muted">{blueprint.contentMarketing.seoDirection}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Core Content Pillars</h4>
                  <ul className="list-disc pl-5 text-fg-muted flex flex-col gap-1">
                    {blueprint.contentMarketing.contentPillars.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Acquisition Channels</h4>
                  <ul className="list-disc pl-5 text-fg-muted flex flex-col gap-1">
                    {blueprint.contentMarketing.customerAcquisition.map((ch) => (
                      <li key={ch}>{ch}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1.5">Launch Content Ideas</h4>
                  <ul className="list-disc pl-5 text-fg-muted flex flex-col gap-1">
                    {blueprint.contentMarketing.launchContentIdeas.map((idea) => (
                      <li key={idea}>{idea}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 9. LAUNCH ROADMAP - SEPARATE VISUAL SECTION */}
        <section className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/10 backdrop-blur-sm mb-16 relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(34,165,88,0.06) 0%, transparent 65%)",
            }}
          />

          <div className="mb-10 text-center sm:text-left">
            <h3 className="heading-3 text-fg flex items-center justify-center sm:justify-start gap-2.5">
              <span>9. Launch Roadmap Timeline</span>
            </h3>
            <p className="text-sm text-fg-subtle mt-1">
              Your weekly action timeline leading up to public release.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-border/80 flex flex-col gap-10">
            {/* Week 1 */}
            <div className="relative">
              <div aria-hidden className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
              <h4 className="font-bold text-fg text-base sm:text-lg mb-1">WEEK 1: Foundation</h4>
              <p className="text-sm text-fg-muted max-w-[70ch] leading-relaxed">{blueprint.launchRoadmap.week1}</p>
            </div>
            
            {/* Week 2 */}
            <div className="relative">
              <div aria-hidden className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
              <h4 className="font-bold text-fg text-base sm:text-lg mb-1">WEEK 2: Brand + Website</h4>
              <p className="text-sm text-fg-muted max-w-[70ch] leading-relaxed">{blueprint.launchRoadmap.week2}</p>
            </div>

            {/* Week 3 */}
            <div className="relative">
              <div aria-hidden className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
              <h4 className="font-bold text-fg text-base sm:text-lg mb-1">WEEK 3: Content + Marketing</h4>
              <p className="text-sm text-fg-muted max-w-[70ch] leading-relaxed">{blueprint.launchRoadmap.week3}</p>
            </div>

            {/* Week 4 */}
            <div className="relative">
              <div aria-hidden className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 ring-4 ring-brand-500/20" />
              <h4 className="font-bold text-fg text-base sm:text-lg mb-1">WEEK 4: Launch</h4>
              <p className="text-sm text-fg-muted max-w-[70ch] leading-relaxed">{blueprint.launchRoadmap.week4}</p>
            </div>
          </div>
        </section>

        {/* Recommended Startiz Package */}
        <section className="rounded-2xl border border-brand-500/30 bg-surface/50 p-8 sm:p-10 relative overflow-hidden mb-16 shadow-lg shadow-brand-500/5">
          <div aria-hidden className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-brand-500/20 via-transparent to-transparent pointer-events-none" />
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-[62ch]">
              <span className="label-sm inline-flex items-center gap-1 bg-brand-500/10 text-brand-400 px-3 py-1 rounded-full mb-3 inline-block">
                <Star className="h-3.5 w-3.5 fill-brand-400" />
                WHAT YOU MAY NEED
              </span>
              <h3 className="heading-3 mb-2 flex items-baseline gap-2.5">
                <span>Recommended Package:</span>
                <span className="text-brand-400 font-extrabold text-2xl">LAUNCH</span>
              </h3>
              <p className="text-sm font-semibold text-fg mb-4">Starting from ₹29,999</p>
              <p className="text-sm text-fg-muted leading-relaxed">
                <span className="font-medium text-fg">AI Recommendation Reason:</span> Based on your current stage, you may benefit from strategy, branding, website, SEO foundation, content and launch support.
              </p>
              <p className="text-xs text-fg-subtle mt-4 italic">
                * Note: This is an AI recommendation based on your inputs, not a guaranteed contract requirement.
              </p>
            </div>

            <div className="flex flex-row sm:flex-col gap-3 min-w-[200px] shrink-0 justify-start sm:justify-center">
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                size="lg"
                className="w-full"
              >
                Talk to Startiz
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="w-full"
              >
                Explore Packages
              </Button>
            </div>
          </div>
        </section>

        {/* Next Steps & Priorities */}
        <section className="grid gap-8 md:grid-cols-2 p-8 sm:p-10 rounded-2xl border border-border bg-surface/30 backdrop-blur-sm mb-12">
          <div>
            <h3 className="heading-3 mb-6">Your next 3 priorities</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <span className="h-7 w-7 text-xs font-bold leading-7 text-center rounded-md border border-brand-500/30 text-brand-400 bg-brand-500/10">01</span>
                <div>
                  <h4 className="font-medium text-fg text-sm">Define your positioning</h4>
                  <p className="text-xs text-fg-muted mt-0.5">Finalize how you stand out from fast fashion.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="h-7 w-7 text-xs font-bold leading-7 text-center rounded-md border border-brand-500/30 text-brand-400 bg-brand-500/10">02</span>
                <div>
                  <h4 className="font-medium text-fg text-sm">Build your brand identity</h4>
                  <p className="text-xs text-fg-muted mt-0.5">Settle names, logos, colors and typography direction.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="h-7 w-7 text-xs font-bold leading-7 text-center rounded-md border border-brand-500/30 text-brand-400 bg-brand-500/10">03</span>
                <div>
                  <h4 className="font-medium text-fg text-sm">Create your launch-ready website</h4>
                  <p className="text-xs text-fg-muted mt-0.5">Build a high-conversion landing page to capture preorders.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 rounded-xl bg-canvas border border-border/80 text-center sm:text-left">
            <div>
              <h3 className="heading-3 mb-2">Ready to build it?</h3>
              <p className="body-base text-fg-muted mb-6">
                Let&apos;s team up to implement your launch blueprint with premium design and development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => setIsModalOpen(true)}
                variant="primary"
                size="lg"
                className="w-full sm:flex-1"
                trailingIcon={<ArrowRight className="h-4.5 w-4.5" aria-hidden />}
              >
                Start With Startiz
              </Button>
              <Button
                onClick={() => {
                  const alertMsg = "Your blueprint is preparing for download (placeholder link).";
                  alert(alertMsg);
                }}
                variant="ghost"
                size="lg"
                className="w-full sm:flex-1 text-fg-subtle"
                leadingIcon={<Download className="h-4.5 w-4.5" aria-hidden />}
              >
                Download Blueprint
              </Button>
            </div>
          </div>
        </section>

        {/* Reset / Start Over link */}
        <div className="text-center">
          <button
            onClick={onReset}
            className="text-xs text-fg-subtle hover:text-brand-400 underline underline-offset-4 cursor-pointer"
          >
            Start Over with a New Plan
          </button>
        </div>
      </Container>

      {/* ─────────────────────────────────────────────────────────────────────────
         Lead Capture Modal
         ───────────────────────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-canvas/80 backdrop-blur-md transition-opacity duration-300"
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-lg rounded-2xl border border-border bg-surface p-6 sm:p-8 shadow-2xl animate-fade-in-up">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-fg-subtle hover:text-fg p-1 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleModalSubmit} className="flex flex-col gap-5">
                <div>
                  <h3 className="heading-3 mb-1">Let&apos;s build this.</h3>
                  <p className="text-xs text-fg-muted">
                    Fill out consultation info and we will connect in 24 hours.
                  </p>
                </div>

                {modalError && <p className="text-xs text-brand-400 font-semibold">{modalError}</p>}

                {/* Field Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-name" className="text-xs font-semibold text-fg">
                    Your Name <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="modal-name"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full rounded-lg border border-border bg-canvas p-3 text-xs text-fg focus:border-brand-500 focus:outline-[0px] focus:ring-1 focus:ring-brand-500 transition-all"
                  />
                </div>

                {/* Field Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-email" className="text-xs font-semibold text-fg">
                    Email Address <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="modal-email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sharma.rahul@example.com"
                    className="w-full rounded-lg border border-border bg-canvas p-3 text-xs text-fg focus:border-brand-500 focus:outline-[0px] focus:ring-1 focus:ring-brand-500 transition-all"
                  />
                </div>

                {/* Field WhatsApp */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="modal-tel" className="text-xs font-semibold text-fg">
                    WhatsApp Number <span className="text-brand-400">*</span>
                  </label>
                  <input
                    id="modal-tel"
                    required
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="e.g. +91 99887 76655"
                    className="w-full rounded-lg border border-border bg-canvas p-3 text-xs text-fg focus:border-brand-500 focus:outline-[0px] focus:ring-1 focus:ring-brand-500 transition-all"
                  />
                </div>

                {/* Field Business Name */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <label htmlFor="modal-biz" className="text-xs font-semibold text-fg">
                      Business Name
                    </label>
                    <span className="text-[10px] text-fg-subtle">Optional</span>
                  </div>
                  <input
                    id="modal-biz"
                    type="text"
                    value={bizName}
                    onChange={(e) => setBizName(e.target.value)}
                    placeholder="e.g. Campus Loop basics"
                    className="w-full rounded-lg border border-border bg-canvas p-3 text-xs text-fg focus:border-brand-500 focus:outline-[0px] focus:ring-1 focus:ring-brand-500 transition-all"
                  />
                </div>

                {/* Field preferred contact method */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-fg">Preferred Contact Method</span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-xs text-fg-muted cursor-pointer">
                      <input
                        type="radio"
                        name="method"
                        checked={contactMethod === "email"}
                        onChange={() => setContactMethod("email")}
                        className="accent-brand-500"
                      />
                      <span>Email</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs text-fg-muted cursor-pointer">
                      <input
                        type="radio"
                        name="method"
                        checked={contactMethod === "whatsapp"}
                        onChange={() => setContactMethod("whatsapp")}
                        className="accent-brand-500"
                      />
                      <span>WhatsApp</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs text-fg-muted cursor-pointer">
                      <input
                        type="radio"
                        name="method"
                        checked={contactMethod === "phone"}
                        onChange={() => setContactMethod("phone")}
                        className="accent-brand-500"
                      />
                      <span>Phone Call</span>
                    </label>
                  </div>
                </div>

                {/* Consent checkbox */}
                <label className="flex items-start gap-2.5 cursor-pointer mt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 accent-brand-500 cursor-pointer"
                    required
                  />
                  <span className="text-[10px] sm:text-xs text-fg-subtle leading-tight">
                    I agree to be contacted regarding my Startiz request.
                  </span>
                </label>

                {/* CTA Submit */}
                <Button
                  disabled={isSubmitting}
                  variant="primary"
                  size="md"
                  className="w-full mt-2"
                >
                  {isSubmitting ? "Submitting Request..." : "Request Consultation"}
                </Button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-fg-subtle text-center">
                  <Shield className="h-3 w-3" />
                  <span>Secure privacy. No third-party spam.</span>
                </div>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center gap-6 py-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/10 border border-brand-500/20">
                  <Check className="h-6 w-6 text-brand-400" />
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Consultation Requested!</h3>
                  <p className="body-base text-fg-muted max-w-[32ch]">
                    We have received your details for <strong className="text-fg">{bizName || "your project"}</strong>. Our team will contact you via <strong className="text-brand-400">{contactMethod}</strong> within 24 hours.
                  </p>
                </div>
                <Button
                  onClick={closeModal}
                  variant="outline"
                  size="md"
                  className="px-8 mt-2"
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
