"use client";

import { useEffect, useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

type AnalysisLoaderProps = {
  onComplete: () => void;
};

const loadingSteps = [
  "Understanding your business",
  "Identifying your target audience",
  "Mapping your market",
  "Defining your positioning",
  "Planning your launch",
  "Building your Startiz blueprint",
];

export function AnalysisLoader({ onComplete }: AnalysisLoaderProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Schedule next steps
    loadingSteps.forEach((_, index) => {
      // Mark step as completed after a delay
      const completionTime = (index + 1) * 500;
      const t1 = setTimeout(() => {
        setCompletedSteps((prev) => [...prev, index]);
        // Set the next step as active
        if (index < loadingSteps.length - 1) {
          setCurrentStepIndex(index + 1);
        }
      }, completionTime);
      timers.push(t1);
    });

    // Complete the whole process after the final step is done
    const finalTimer = setTimeout(() => {
      onComplete();
    }, (loadingSteps.length + 0.5) * 500);
    timers.push(finalTimer);

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [onComplete]);

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(34,165,88,0.08) 0%, transparent 65%)",
        }}
      />

      <Container size="narrow" className="relative z-10 flex flex-col items-center">
        {/* Loading header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <Loader2 className="h-10 w-10 text-brand-400 animate-spin" aria-hidden />
          <h2 className="heading-2 text-fg animate-pulse">Analyzing your idea...</h2>
          <p className="body-base text-fg-muted max-w-[35ch]">
            Our AI engine is processing your answers to draft your launch blueprint.
          </p>
        </div>

        {/* Loading checklist */}
        <div className="w-full max-w-sm rounded-2xl border border-border bg-surface/30 p-6 sm:p-8 backdrop-blur-sm">
          <ul className="flex flex-col gap-4 text-left">
            {loadingSteps.map((step, idx) => {
              const isFinished = completedSteps.includes(idx);
              const isActive = currentStepIndex === idx;

              return (
                <li
                  key={step}
                  className="flex items-center gap-3.5 transition-all duration-300"
                  style={{
                    opacity: isActive || isFinished ? 1 : 0.35,
                    transform: isActive ? "scale(1.02)" : "scale(1)",
                  }}
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                    {isFinished ? (
                      <CheckCircle2 className="h-5 w-5 text-brand-400" aria-hidden />
                    ) : isActive ? (
                      <Loader2 className="h-4.5 w-4.5 text-brand-400 animate-spin" aria-hidden />
                    ) : (
                      <div className="h-2 w-2 rounded-full bg-border" />
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isFinished
                        ? "text-fg-muted line-through decoration-border/50"
                        : isActive
                        ? "text-fg font-semibold"
                        : "text-fg-subtle"
                    }`}
                  >
                    {step}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
