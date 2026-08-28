import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Use "narrow" for content-heavy text sections (max ~72ch) */
  size?: "default" | "narrow" | "wide";
  as?: React.ElementType;
};

/**
 * Responsive max-width container with horizontal padding.
 * Default: 1280px. Narrow: 800px. Wide: 1440px.
 */
export function Container({
  children,
  className,
  size = "default",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "default" && "max-w-screen-xl",
        size === "narrow"  && "max-w-[52rem]",
        size === "wide"    && "max-w-[90rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
