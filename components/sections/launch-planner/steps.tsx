"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Sparkles, Building2, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlannerAnswers } from "./types";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────────────────────────────
   Step Utilities & Shared Components
   ───────────────────────────────────────────────────────────────────────────── */

type StepBaseProps = {
  answers: PlannerAnswers;
  onChange: (key: keyof PlannerAnswers, value: string) => void;
  onNext: () => void;
  onBack: () => void;
};

/* ─────────────────────────────────────────────────────────────────────────────
   PAGE 0: Introduction Page
   ───────────────────────────────────────────────────────────────────────────── */

type IntroStepProps = {
  onStart: () => void;
};

export function IntroStep({ onStart }: IntroStepProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-5 py-20 text-center">
      {/* Radial glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(34,165,88,0.12) 0%, transparent 65%)",
        }}
      />

      <Container size="narrow" className="relative z-10">
        <div 
          className="flex flex-col items-center gap-7"
          style={{ animation: "fade-in-up 0.8s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
        >
          {/* AI Badge */}
          <span className="label-sm inline-flex items-center gap-1.5 rounded-full px-3 py-1 bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            STARTIZ AI
          </span>

          {/* Heading */}
          <h1 className="heading-display text-fg">
            Tell us what you&apos;re <span className="text-brand-400">building.</span>
          </h1>

          {/* Subheading */}
          <p className="body-lg mx-auto max-w-[46ch]">
            Give us your idea. We&apos;ll map out what it takes to turn it into a
            launch-ready business.
          </p>

          {/* Supporting line */}
          <p className="text-sm text-fg-subtle">
            No business jargon required. Start with whatever you know.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
            <Button
              onClick={onStart}
              variant="primary"
              size="lg"
              trailingIcon={<ArrowRight className="h-4.5 w-4.5" aria-hidden />}
            >
              Build My Launch Plan
            </Button>
            <Button href="/" variant="ghost" size="lg">
              Back to Startiz
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STEP 1: Your Idea
   ───────────────────────────────────────────────────────────────────────────── */

export function IdeaStep({ answers, onChange, onNext, onBack }: StepBaseProps) {
  const [error, setError] = useState("");

  const stages = [
    { value: "idea", label: "Just an idea" },
    { value: "validating", label: "Validating the idea" },
    { value: "building", label: "Building the product" },
    { value: "launched", label: "Already launched" },
    { value: "customers", label: "Already getting customers" },
  ];

  const handleContinue = () => {
    if (!answers.idea.trim() || answers.idea.trim().length < 10) {
      setError("Please describe your idea in a bit more detail (at least 10 characters).");
      return;
    }
    if (!answers.stage) {
      setError("Please select the stage you are currently at.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="heading-2 text-fg mb-2">What are you building?</h2>
        <p className="body-base text-fg-muted">
          Describe your business idea, product, or service in your own words.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Text Area */}
        <div className="flex flex-col gap-2">
          <label htmlFor="idea-desc" className="label-sm text-fg">
            Your business idea <span className="text-brand-400">*</span>
          </label>
          <textarea
            id="idea-desc"
            required
            rows={4}
            value={answers.idea}
            onChange={(e) => {
              onChange("idea", e.target.value);
              if (error) setError("");
            }}
            placeholder="Example: I want to start a sustainable clothing brand for college students with a circular trading model..."
            className="w-full rounded-xl border border-border bg-surface/50 p-4 text-sm text-fg placeholder:text-fg-subtle/60 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors duration-200 resize-y min-h-[100px]"
          />
        </div>

        {/* Stage Picker */}
        <div className="flex flex-col gap-3">
          <span className="label-sm text-fg">
            What stage are you at? <span className="text-brand-400">*</span>
          </span>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {stages.map((stage) => {
              const isSelected = answers.stage === stage.value;
              return (
                <button
                  type="button"
                  key={stage.value}
                  onClick={() => {
                    onChange("stage", stage.value);
                    if (error) setError("");
                  }}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer select-none",
                    isSelected
                      ? "border-brand-500 bg-brand-500/5 text-fg ring-2 ring-brand-500/10"
                      : "border-border bg-surface/30 text-fg-muted hover:border-brand-500/30 hover:bg-surface/50"
                  )}
                >
                  <span className="text-sm font-semibold">{stage.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {error && <p className="text-xs text-brand-400 mt-1">{error}</p>}

        {/* Action Controls */}
        <div className="flex items-center gap-3 mt-6 border-t border-border/55 pt-6">
          <Button
            onClick={onBack}
            variant="ghost"
            size="md"
            leadingIcon={<ArrowLeft className="h-4 w-4" aria-hidden />}
          >
            Back
          </Button>
          <Button
            onClick={handleContinue}
            variant="primary"
            size="md"
            className="ml-auto"
            trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STEP 2: Business Basics
   ───────────────────────────────────────────────────────────────────────────── */

export function BusinessStep({ answers, onChange, onNext, onBack }: StepBaseProps) {
  const [error, setError] = useState("");

  const industries = [
    "Technology / SaaS",
    "D2C / E-commerce",
    "Food & Beverage",
    "Health & Wellness",
    "Education",
    "Finance / FinTech",
    "Creator / Personal Brand",
    "Travel / Lifestyle",
    "Professional Services",
    "Other",
  ];

  const markets = [
    { value: "local", label: "Local Area", description: "Serving a specific city or region." },
    { value: "india", label: "Domestic / India", description: "Selling across the country." },
    { value: "international", label: "International", description: "Targeting globally." },
    { value: "not-sure", label: "Not sure yet", description: "Still planning market outreach." },
  ];

  const handleContinue = () => {
    if (!answers.industry) {
      setError("Please select a primary industry category.");
      return;
    }
    if (!answers.targetMarket) {
      setError("Please select your target market scale.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="heading-2 text-fg mb-2">Business Basics</h2>
        <p className="body-base text-fg-muted">
          Give us some foundation context about your project.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Name input */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="biz-name" className="label-sm text-fg">
              Business / project name
            </label>
            <span className="text-xs text-fg-subtle">Optional</span>
          </div>
          <input
            id="biz-name"
            type="text"
            value={answers.businessName}
            onChange={(e) => onChange("businessName", e.target.value)}
            placeholder="e.g. Campus Loop Basics"
            className="w-full rounded-xl border border-border bg-surface/50 p-4 text-sm text-fg placeholder:text-fg-subtle/60 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors duration-200"
          />
        </div>

        {/* Industry select */}
        <div className="flex flex-col gap-2">
          <label htmlFor="biz-industry" className="label-sm text-fg">
            Primary Industry <span className="text-brand-400">*</span>
          </label>
          <div className="relative">
            <select
              id="biz-industry"
              value={answers.industry}
              onChange={(e) => {
                onChange("industry", e.target.value);
                if (error) setError("");
              }}
              className="w-full rounded-xl border border-border bg-surface/50 p-4 text-sm text-fg appearance-none focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors duration-200"
            >
              <option value="" disabled className="bg-canvas text-fg-subtle">Select industry...</option>
              {industries.map((ind) => (
                <option key={ind} value={ind} className="bg-surface text-fg">{ind}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-fg-muted">
              ▼
            </div>
          </div>
        </div>

        {/* Target Market grid */}
        <div className="flex flex-col gap-3">
          <span className="label-sm text-fg">
            Target Market Scale <span className="text-brand-400">*</span>
          </span>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            {markets.map((m) => {
              const isSelected = answers.targetMarket === m.value;
              return (
                <button
                  type="button"
                  key={m.value}
                  onClick={() => {
                    onChange("targetMarket", m.value);
                    if (error) setError("");
                  }}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer select-none",
                    isSelected
                      ? "border-brand-500 bg-brand-500/5 text-fg ring-2 ring-brand-500/10"
                      : "border-border bg-surface/30 text-fg-muted hover:border-brand-500/30 hover:bg-surface/50"
                  )}
                >
                  <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-canvas">
                    {m.value === "local" && <Building2 className="h-4 w-4 text-brand-400" />}
                    {m.value === "india" && <Building2 className="h-4 w-4 text-brand-400" />}
                    {m.value === "international" && <Globe2 className="h-4 w-4 text-brand-400" />}
                    {m.value === "not-sure" && <Globe2 className="h-4 w-4 text-brand-400" />}
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-fg">{m.label}</span>
                    <span className="block text-xs text-fg-subtle mt-0.5">{m.description}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {error && <p className="text-xs text-brand-400 mt-1">{error}</p>}

        {/* Action Controls */}
        <div className="flex items-center gap-3 mt-6 border-t border-border/55 pt-6">
          <Button
            onClick={onBack}
            variant="ghost"
            size="md"
            leadingIcon={<ArrowLeft className="h-4 w-4" aria-hidden />}
          >
            Back
          </Button>
          <Button
            onClick={handleContinue}
            variant="primary"
            size="md"
            className="ml-auto"
            trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STEP 3: Target Customer
   ───────────────────────────────────────────────────────────────────────────── */

export function AudienceStep({ answers, onChange, onNext, onBack }: StepBaseProps) {
  const [error, setError] = useState("");

  const knowledgeLevels = [
    { value: "figuring", label: "I'm still figuring it out" },
    { value: "rough", label: "I have a rough idea" },
    { value: "spoken", label: "I've spoken to potential customers" },
    { value: "validated", label: "I already have customers" },
  ];

  const handleContinue = () => {
    if (!answers.targetCustomer.trim() || answers.targetCustomer.trim().length < 10) {
      setError("Please describe your target customer (at least 10 characters).");
      return;
    }
    if (!answers.customerKnowledge) {
      setError("Please specify how well you currently know your customer.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="heading-2 text-fg mb-2">Target Customer</h2>
        <p className="body-base text-fg-muted">
          Tell us about the people who will buy or use your product.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Text Area */}
        <div className="flex flex-col gap-2">
          <label htmlFor="audience-desc" className="label-sm text-fg">
            Who are you building this for? <span className="text-brand-400">*</span>
          </label>
          <textarea
            id="audience-desc"
            required
            rows={4}
            value={answers.targetCustomer}
            onChange={(e) => {
              onChange("targetCustomer", e.target.value);
              if (error) setError("");
            }}
            placeholder="Example: College students aged 18–25 who care about sustainable fashion and want tuition-friendly pricing..."
            className="w-full rounded-xl border border-border bg-surface/50 p-4 text-sm text-fg placeholder:text-fg-subtle/60 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors duration-200 resize-y min-h-[100px]"
          />
        </div>

        {/* Knowledge Radio cards */}
        <div className="flex flex-col gap-3">
          <span className="label-sm text-fg">
            How well do you know your target customer? <span className="text-brand-400">*</span>
          </span>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
            {knowledgeLevels.map((lvl) => {
              const isSelected = answers.customerKnowledge === lvl.value;
              return (
                <button
                  type="button"
                  key={lvl.value}
                  onClick={() => {
                    onChange("customerKnowledge", lvl.value);
                    if (error) setError("");
                  }}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all duration-200 cursor-pointer select-none",
                    isSelected
                      ? "border-brand-500 bg-brand-500/5 text-fg ring-2 ring-brand-500/10"
                      : "border-border bg-surface/30 text-fg-muted hover:border-brand-500/30 hover:bg-surface/50"
                  )}
                >
                  <span className="text-sm font-semibold">{lvl.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {error && <p className="text-xs text-brand-400 mt-1">{error}</p>}

        {/* Action Controls */}
        <div className="flex items-center gap-3 mt-6 border-t border-border/55 pt-6">
          <Button
            onClick={onBack}
            variant="ghost"
            size="md"
            leadingIcon={<ArrowLeft className="h-4 w-4" aria-hidden />}
          >
            Back
          </Button>
          <Button
            onClick={handleContinue}
            variant="primary"
            size="md"
            className="ml-auto"
            trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   STEP 4: Budget & Timeline
   ───────────────────────────────────────────────────────────────────────────── */

export function BudgetStep({ answers, onChange, onNext, onBack }: StepBaseProps) {
  const [error, setError] = useState("");

  const budgets = [
    { value: "under-10k", label: "Under ₹10,000" },
    { value: "10k-25k", label: "₹10,000 – ₹25,000" },
    { value: "25k-50k", label: "₹25,000 – ₹50,000" },
    { value: "50k-1lakh", label: "₹50,000 – ₹1 Lakh" },
    { value: "1lakh-plus", label: "₹1 Lakh+" },
    { value: "not-sure", label: "Not sure yet" },
  ];

  const timelines = [
    { value: "asap", label: "ASAP" },
    { value: "30-days", label: "Within 30 days" },
    { value: "1-3-months", label: "1–3 months" },
    { value: "3-6-months", label: "3–6 months" },
    { value: "not-decided", label: "Not decided" },
  ];

  const handleContinue = () => {
    if (!answers.budget) {
      setError("Please select an approximate launch budget category.");
      return;
    }
    if (!answers.timeline) {
      setError("Please select your target launch timeline.");
      return;
    }
    setError("");
    onNext();
  };

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="heading-2 text-fg mb-2">Budget &amp; Timeline</h2>
        <p className="body-base text-fg-muted">
          Final details to shape your roadmap and structure recommendations.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Budget picker */}
        <div className="flex flex-col gap-3">
          <span className="label-sm text-fg">
            What&apos;s your approximate launch budget? <span className="text-brand-400">*</span>
          </span>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
            {budgets.map((b) => {
              const isSelected = answers.budget === b.value;
              return (
                <button
                  type="button"
                  key={b.value}
                  onClick={() => {
                    onChange("budget", b.value);
                    if (error) setError("");
                  }}
                  className={cn(
                    "flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer select-none",
                    isSelected
                      ? "border-brand-500 bg-brand-500/5 text-fg ring-2 ring-brand-500/10"
                      : "border-border bg-surface/30 text-fg-muted hover:border-brand-500/30 hover:bg-surface/50"
                  )}
                >
                  <span className="text-xs sm:text-sm font-semibold">{b.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline picker */}
        <div className="flex flex-col gap-3">
          <span className="label-sm text-fg">
            When do you want to launch? <span className="text-brand-400">*</span>
          </span>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
            {timelines.map((t) => {
              const isSelected = answers.timeline === t.value;
              return (
                <button
                  type="button"
                  key={t.value}
                  onClick={() => {
                    onChange("timeline", t.value);
                    if (error) setError("");
                  }}
                  className={cn(
                    "flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all duration-200 cursor-pointer select-none",
                    isSelected
                      ? "border-brand-500 bg-brand-500/5 text-fg ring-2 ring-brand-500/10"
                      : "border-border bg-surface/30 text-fg-muted hover:border-brand-500/30 hover:bg-surface/50"
                  )}
                >
                  <span className="text-xs sm:text-sm font-semibold">{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {error && <p className="text-xs text-brand-400 mt-1">{error}</p>}

        {/* Action Controls */}
        <div className="flex items-center gap-3 mt-6 border-t border-border/55 pt-6">
          <Button
            onClick={onBack}
            variant="ghost"
            size="md"
            leadingIcon={<ArrowLeft className="h-4 w-4" aria-hidden />}
          >
            Back
          </Button>
          <Button
            onClick={handleContinue}
            variant="primary"
            size="md"
            className="ml-auto"
            trailingIcon={<Sparkles className="h-4.5 w-4.5 text-canvas" aria-hidden />}
          >
            Analyze My Idea
          </Button>
        </div>
      </div>
    </div>
  );
}
