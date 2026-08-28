"use client";

import { useInView } from "@/lib/hooks/useInView";
import { cn } from "@/lib/utils";

type AnimateInProps = {
  children: React.ReactNode;
  className?: string;
  /** Delay in ms before the animation starts after element enters view */
  delay?: number;
  /** Direction the element slides in from */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Animation duration in ms */
  duration?: number;
  as?: React.ElementType;
};

const directionMap = {
  up:    "translateY(28px)",
  down:  "translateY(-28px)",
  left:  "translateX(-28px)",
  right: "translateX(28px)",
  none:  "none",
};

/**
 * Wraps children with a fade + slide entrance animation
 * triggered by the Intersection Observer when the element scrolls into view.
 *
 * Works as a client-side shell around any children (including Server Components).
 */
export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 650,
  as: Tag = "div",
}: AnimateInProps) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      className={cn("will-change-[opacity,transform]", className)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : directionMap[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}
