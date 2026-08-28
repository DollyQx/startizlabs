import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted" | "accent" | "outline";
};

/**
 * Small label badge for section labels, status indicators, etc.
 */
export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "label-sm inline-flex items-center gap-1.5 rounded-full px-3 py-1 transition-colors",
        variant === "default" &&
          "bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20",
        variant === "muted" &&
          "bg-surface text-fg-muted ring-1 ring-border",
        variant === "accent" &&
          "bg-brand-500 text-canvas",
        variant === "outline" &&
          "bg-transparent text-fg-muted ring-1 ring-border",
        className,
      )}
    >
      {children}
    </span>
  );
}
