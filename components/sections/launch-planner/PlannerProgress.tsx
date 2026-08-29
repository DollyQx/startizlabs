"use client";

import { cn } from "@/lib/utils";

type PlannerProgressProps = {
  currentStep: number; // 1 to 5
};

const steps = [
  { id: 1, label: "Idea" },
  { id: 2, label: "Business" },
  { id: 3, label: "Audience" },
  { id: 4, label: "Budget" },
  { id: 5, label: "Blueprint" },
];

export function PlannerProgress({ currentStep }: PlannerProgressProps) {
  return (
    <div className="w-full">
      {/* Desktop Progress Stepper */}
      <div className="hidden sm:flex items-center justify-between relative">
        {/* Connecting bar background */}
        <div aria-hidden className="absolute left-0 top-[18px] right-0 h-0.5 bg-border -z-10" />
        
        {/* Active connecting bar */}
        <div
          aria-hidden
          className="absolute left-0 top-[18px] h-0.5 bg-brand-500 transition-all duration-500 -z-10"
          style={{
            width: `${((Math.min(currentStep, 5) - 1) / (steps.length - 1)) * 100}%`,
          }}
        />

        {steps.map((step) => {
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;

          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-300 bg-canvas",
                  isCompleted && "border-brand-500 text-brand-400 bg-brand-500/5",
                  isActive && "border-brand-500 text-brand-400 ring-4 ring-brand-500/10",
                  !isActive && !isCompleted && "border-border text-fg-subtle"
                )}
              >
                0{step.id}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium transition-colors duration-300",
                  isActive && "text-brand-400",
                  isCompleted && "text-fg-muted",
                  !isActive && !isCompleted && "text-fg-subtle"
                )}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Mobile Progress Stepper */}
      <div className="sm:hidden flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-brand-400">
            Step {Math.min(currentStep, 4)} of 4: {steps[Math.min(currentStep, 4) - 1]?.label}
          </span>
          <span className="text-fg-subtle">
            {Math.round((Math.min(currentStep, 4) / 4) * 100)}% Complete
          </span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
          <div
            className="h-full bg-brand-500 transition-all duration-500"
            style={{
              width: `${(Math.min(currentStep, 4) / 4) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
