import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Startiz Labs — via WhatsApp chat or direct email enquiry.",
};

export default function ContactPage() {
  return (
    <section className="py-24" aria-label="Contact Startiz Labs">
      <Container size="narrow">
        <SectionHeading
          badge="Get in Touch"
          title="Let's talk about what you're building."
          subtitle="Start a direct chat on WhatsApp for a fast response, or send us an email enquiry. No pressure, just a real discussion about your goals."
          className="mb-16"
        />

        {/* Contact options */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* WhatsApp option */}
          <div className="flex flex-col items-start gap-5 rounded-xl border border-border bg-surface p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
              <MessageSquare className="h-6 w-6" aria-hidden />
            </div>
            <div className="flex-1">
              <h2 className="heading-3 mb-2 text-fg">WhatsApp Startiz</h2>
              <p className="body-base">
                Chat with our team directly. Ideal for quick questions, ideation, and rapid responses.
              </p>
            </div>
            <WhatsAppButton
              message="Hi Startiz Labs, I'd like to discuss a project."
              label="WhatsApp Startiz"
              variant="primary"
              size="md"
              eventName="whatsapp_contact_click"
              trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
              className="w-full justify-center sm:w-auto"
            />
          </div>

          {/* Email option */}
          <div className="flex flex-col items-start gap-5 rounded-xl border border-border bg-surface p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
              <Mail className="h-6 w-6" aria-hidden />
            </div>
            <div className="flex-1">
              <h2 className="heading-3 mb-2 text-fg">Email Enquiry</h2>
              <p className="body-base">
                Prefer traditional email? Reach us directly and our team will get back to you in one business day.
              </p>
            </div>
            <Button
              href="mailto:hello@startizlabs.com"
              variant="secondary"
              size="md"
              trailingIcon={<ArrowRight className="h-4 w-4" aria-hidden />}
              className="w-full justify-center sm:w-auto"
            >
              Send an Enquiry
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
