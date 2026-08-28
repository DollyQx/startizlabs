import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Whether the card should lift on hover */
  hoverable?: boolean;
  as?: React.ElementType;
};

/**
 * Base card shell — clean surface with optional hover lift.
 * Compose it with CardHeader, CardBody etc. as needed.
 */
export function Card({
  children,
  className,
  hoverable = false,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-xl border border-border bg-surface p-6",
        hoverable &&
          "cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/5",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-4", className)}>{children}</div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("body-base", className)}>{children}</div>;
}
