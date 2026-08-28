"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  /** Icon to render before the label */
  leadingIcon?: React.ReactNode;
  /** Icon to render after the label */
  trailingIcon?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
    /** Open in new tab */
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-brand-500 text-canvas font-semibold",
    "hover:bg-brand-400",
    "active:bg-brand-600",
    "shadow-sm shadow-brand-500/30",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" "),
  secondary: [
    "bg-surface-2 text-fg font-medium",
    "ring-1 ring-border",
    "hover:bg-surface-3 hover:ring-brand-500/30",
    "active:bg-surface",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" "),
  ghost: [
    "bg-transparent text-fg-muted font-medium",
    "hover:bg-surface hover:text-fg",
    "active:bg-surface-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" "),
  outline: [
    "bg-transparent text-brand-400 font-medium",
    "ring-1 ring-brand-500/40",
    "hover:bg-brand-500/10 hover:ring-brand-500",
    "active:bg-brand-500/15",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3.5 text-sm gap-1.5 rounded-lg",
  md: "h-10 px-5 text-sm gap-2 rounded-lg",
  lg: "h-12 px-7 text-base gap-2 rounded-xl",
};

const baseStyles =
  "inline-flex items-center justify-center select-none transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring whitespace-nowrap";

/**
 * Polymorphic Button — renders a <button> or <Link> depending on `href`.
 * Use `external` to open links in a new tab with rel="noopener noreferrer".
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    leadingIcon,
    trailingIcon,
    ...rest
  } = props;

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && props.href !== undefined) {
    const { href, external, disabled, ...linkRest } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={cn(classes, disabled && "pointer-events-none opacity-50")}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...(linkRest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </Link>
    );
  }

  const { disabled, ...btnRest } = rest as ButtonAsButton;
  return (
    <button
      className={classes}
      disabled={disabled}
      {...(btnRest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
