import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingCTA } from "@/components/layout/WhatsAppFloatingCTA";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — From Idea to Launch`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — From Idea to Launch`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — From Idea to Launch`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — From Idea to Launch`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://startizlabs.com/#organization",
      "name": "Startiz Labs",
      "url": "https://startizlabs.com",
      "logo": "https://startizlabs.com/startiz-logo.png",
      "description": "Startiz Labs helps founders, creators and early-stage businesses with strategy, branding, technology, AI, SEO, content and growth.",
      "telephone": "+91 7982683218",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 7982683218",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://www.linkedin.com/company/startiz-labs",
        "https://instagram.com/startizlabs",
        "https://facebook.com/startizlabs",
        "https://youtube.com/@startizlabs"
      ],
      "founder": {
        "@type": "Person",
        "name": "Dolly Kumari",
        "jobTitle": "Founder",
        "sameAs": [
          "https://linkedin.com/in/dollyqx",
          "https://github.com/dollyqx",
          "https://instagram.com/d011yqx",
          "https://g.dev/dollyqx"
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://startizlabs.com/#website",
      "url": "https://startizlabs.com",
      "name": "Startiz Labs",
      "publisher": {
        "@id": "https://startizlabs.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-canvas text-fg antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingCTA />
      </body>
    </html>
  );
}

