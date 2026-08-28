import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

type SectionHeadingProps = {
  /** Optional pill badge label above the heading */
  badge?: string;
  /** Main heading text — rendered as h2 */
  title: string;
  /** Optional subtitle paragraph */
  subtitle?: string;
  /** Text alignment */
  align?: "left" | "center";
  className?: string;
  /** id for aria-labelledby on the parent section */
  id?: string;
};

/**
 * Reusable section heading block.
 * Pair with a Container for consistent layout.
 */
export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left"   && "items-start text-left",
        className,
      )}
    >
      {badge && <Badge variant="default">{badge}</Badge>}

      <h2 id={id} className="heading-2 max-w-[32ch] text-fg">
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "body-lg max-w-[54ch]",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
