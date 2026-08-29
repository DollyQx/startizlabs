"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlannerAnswers, LaunchBlueprint } from "./types";
import { MOCK_BLUEPRINT } from "./mockData";
import { PlannerProgress } from "./PlannerProgress";
import { 
  IntroStep, IdeaStep, BusinessStep, AudienceStep, BudgetStep 
} from "./steps";
import { AnalysisLoader } from "./AnalysisLoader";
import { BlueprintResults } from "./BlueprintResults";

const initialAnswers: PlannerAnswers = {
  idea: "",
  stage: "",
  businessName: "",
  industry: "",
  targetMarket: "",
  targetCustomer: "",
  customerKnowledge: "",
  budget: "",
  timeline: "",
};

export function LaunchPlanner() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<PlannerAnswers>(initialAnswers);
  const [generatedBlueprint, setGeneratedBlueprint] = useState<LaunchBlueprint | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loaderFinished, setLoaderFinished] = useState(false);

  // Synchronise state transitions for minimum 3.5s loader animations and AI response resolving
  useEffect(() => {
    if (step === 5 && loaderFinished && generatedBlueprint) {
      const timer = setTimeout(() => {
        setStep(6);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [step, loaderFinished, generatedBlueprint]);

  const updateAnswer = (key: keyof PlannerAnswers, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const generateBlueprint = async () => {
    setApiError(null);
    setGeneratedBlueprint(null);
    setLoaderFinished(false);
    setIsLoading(true);
    setStep(5); // Transition to loader immediately

    const startTime = Date.now();

    try {
      const res = await fetch("/api/launch-planner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "We couldn't generate your blueprint right now.");
      }

      setGeneratedBlueprint(data);
      setIsLoading(false);
    } catch (err: unknown) {
      console.error("AI Launch Planner API submit error:", err);
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      
      // Pause briefly so loader visual transition looks natural instead of flickering
      const elapsed = Date.now() - startTime;
      const delay = Math.max(0, 1200 - elapsed);

      setTimeout(() => {
        setIsLoading(false);
        setApiError(msg || "We couldn't generate your blueprint right now. Your answers are saved. Please try again.");
        setStep(4); // Revert to let them edit/retry
      }, delay);
    }
  };

  const nextStep = () => {
    if (step === 4) {
      generateBlueprint();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const backStep = () => {
    setStep((prev) => Math.max(0, prev - 1));
  };

  const handleLoaderComplete = () => {
    setLoaderFinished(true);
  };

  const resetPlanner = () => {
    setAnswers(initialAnswers);
    setGeneratedBlueprint(null);
    setApiError(null);
    setLoaderFinished(false);
    setIsLoading(false);
    setStep(0);
  };

  // Step 0: Intro Page
  if (step === 0) {
    return <IntroStep onStart={nextStep} />;
  }

  // Step 5: AI Animated Transition Loader
  if (step === 5) {
    return <AnalysisLoader onComplete={handleLoaderComplete} />;
  }

  // Step 6: Blueprint Results Page
  if (step === 6) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-canvas">
        <BlueprintResults 
          answers={answers} 
          blueprint={generatedBlueprint || MOCK_BLUEPRINT} 
          onReset={resetPlanner} 
        />
      </div>
    );
  }

  // Steps 1 to 4: The Questionnaire Flow Workspace
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col py-12 sm:py-16 md:py-24 overflow-hidden bg-canvas">
      {/* Background glow styling */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(34,165,88,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Grid lines background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-fg) 1px, transparent 1px), linear-gradient(90deg, var(--color-fg) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container size="narrow" className="relative z-10 flex flex-col gap-8 flex-1">
        {/* Workspace Mini-Header */}
        <div className="flex items-center justify-between border-b border-border/40 pb-5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-brand-500/25 bg-brand-500/10">
              <Sparkles className="h-4 w-4 text-brand-400" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
              Launch Planner
            </span>
          </div>

          <Button
            onClick={resetPlanner}
            variant="ghost"
            size="sm"
            leadingIcon={<ArrowLeft className="h-3.5 w-3.5" />}
          >
            Exit
          </Button>
        </div>

        {/* Progress Tracker */}
        <div className="w-full">
          <PlannerProgress currentStep={step} />
        </div>

        {/* Form Container Card with entry animation */}
        <div 
          key={step + (apiError ? "-err" : "")} // refresh animation on step or error toggling
          className="w-full rounded-2xl border border-border bg-surface/30 p-6 sm:p-10 backdrop-blur-sm shadow-xl shadow-canvas/20 mt-4"
          style={{ animation: "fade-in-up 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          {apiError ? (
            <div className="flex flex-col items-center text-center gap-6 py-6 animate-fade-in">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400">
                <span className="text-lg font-extrabold font-mono">!</span>
              </div>
              <div className="max-w-[42ch]">
                <h3 className="heading-3 mb-2 text-fg">We couldn&apos;t generate your blueprint right now.</h3>
                <p className="text-xs text-fg-muted leading-relaxed">
                  {apiError}
                </p>
                <p className="text-[11px] text-fg-subtle/80 mt-1 italic">
                  Your inputs are saved safely. You can edit your choices or try requesting again.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-2">
                <Button
                  onClick={() => setApiError(null)}
                  variant="outline"
                  size="md"
                  className="w-full sm:min-w-[140px]"
                  disabled={isLoading}
                >
                  Edit Answers
                </Button>
                <Button
                  onClick={generateBlueprint}
                  variant="primary"
                  size="md"
                  className="w-full sm:min-w-[140px]"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Try Again"}
                </Button>
              </div>
            </div>
          ) : (
            <>
              {step === 1 && (
                <IdeaStep
                  answers={answers}
                  onChange={updateAnswer}
                  onNext={nextStep}
                  onBack={backStep}
                />
              )}
              {step === 2 && (
                <BusinessStep
                  answers={answers}
                  onChange={updateAnswer}
                  onNext={nextStep}
                  onBack={backStep}
                />
              )}
              {step === 3 && (
                <AudienceStep
                  answers={answers}
                  onChange={updateAnswer}
                  onNext={nextStep}
                  onBack={backStep}
                />
              )}
              {step === 4 && (
                <BudgetStep
                  answers={answers}
                  onChange={updateAnswer}
                  onNext={nextStep}
                  onBack={backStep}
                />
              )}
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
