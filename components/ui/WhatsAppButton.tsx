"use client";

import { createWhatsAppLink, trackWhatsAppClick } from "@/lib/contact";
import { Button } from "@/components/ui/Button";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export type WhatsAppButtonProps = {
  message: string;
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  eventName?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
};

/**
 * Reusable WhatsAppButton.
 * Resolves the prefilled message internally using createWhatsAppLink.
 * Emits click analytics callback.
 */
export function WhatsAppButton({
  message,
  label,
  variant = "primary",
  size = "md",
  className,
  eventName = "whatsapp_click",
  leadingIcon,
  trailingIcon,
}: WhatsAppButtonProps) {
  const href = createWhatsAppLink(message);

  const handleClick = () => {
    trackWhatsAppClick(eventName);
  };

  return (
    <Button
      href={href}
      external
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
      aria-label={label}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
    >
      {label}
    </Button>
  );
}
