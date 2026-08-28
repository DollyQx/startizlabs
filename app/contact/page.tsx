import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Startiz Labs — book a free discovery call or send us a message.",
};

export default function ContactPage() {
  return (
    <section className="py-24" aria-label="Contact Startiz Labs">
      <Container size="narrow">
        <SectionHeading
          badge="Get in Touch"
          title="Let's talk about your idea."
          subtitle="Book a free 30-minute discovery call or send us a message. No pressure, no pitch — just a real conversation."
          className="mb-16"
        />

        {/* Contact options */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Discovery call placeholder */}
          <div className="flex flex-col items-start gap-5 rounded-xl border border-border bg-surface p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
              <MessageSquare className="h-6 w-6" aria-hidden />
            </div>
            <div>
              <h2 className="heading-3 mb-2 text-fg">Book a Discovery Call</h2>
              <p className="body-base">
                A free 30-minute call to discuss your idea, your goals, and how
                we can help.
              </p>
            </div>
            <Button href="#" variant="primary" size="md" disabled>
              Coming Soon
            </Button>
          </div>

          {/* Email placeholder */}
          <div className="flex flex-col items-start gap-5 rounded-xl border border-border bg-surface p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
              <Mail className="h-6 w-6" aria-hidden />
            </div>
            <div>
              <h2 className="heading-3 mb-2 text-fg">Send a Message</h2>
              <p className="body-base">
                Prefer email? Reach us directly and we&apos;ll get back to you
                within one business day.
              </p>
            </div>
            <Button
              href="mailto:hello@startizlabs.com"
              variant="secondary"
              size="md"
            >
              hello@startizlabs.com
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
