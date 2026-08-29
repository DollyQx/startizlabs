/**
 * Startiz Labs WhatsApp Configuration and Utilities
 */

export const WHATSAPP_RAW = "7982683218";
export const WHATSAPP_WA = "917982683218";

/**
 * Encodes a prefilled message and context to form a correct wa.me link.
 * Does not expose malformed numbers or malformed links.
 */
export function createWhatsAppLink(message: string): string {
  const cleanMessage = message.trim();
  const encoded = encodeURIComponent(cleanMessage);
  return `https://wa.me/${WHATSAPP_WA}?text=${encoded}`;
}

/**
 * Triggers analytics tracking events in a modular format.
 * Currently prints logs in dev as placeholder setup.
 */
export function trackWhatsAppClick(eventName: string): void {
  if (typeof window !== "undefined") {
    // Analytics handler placeholder
    console.log(`[Analytics Event] ${eventName}`);
    // Example: (window as any).gtag?.('event', eventName);
  }
}
