# Startiz Labs Agency Platform

Startiz Labs is a modern digital agency platform built with Next.js 16 (App Router), React 19, TailwindCSS 4, and TypeScript. It showcases case studies, service offerings, client portfolio projects, and includes an AI-powered Launch Planner.

## Features

- **Modern Agency Architecture**: Fully responsive, high-contrast dark theme with animated components and glassmorphism.
- **AI Launch Planner**: Server-side endpoint (`/api/launch-planner`) powered by `@google/generative-ai` to generate custom project roadmaps.
- **Case Studies Showcase**: Detailed interactive case studies for clients including GuruMantra Classes, Bincraft Technologies, and Zomoggy.
- **SEO & Metadata**: Built-in canonical tags, OpenGraph metadata, `sitemap.xml`, and `robots.txt`.

## Technology Stack

- **Framework**: Next.js 16 (App Router with Turbopack) & React 19
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4 & PostCSS
- **Icons & UI**: Lucide Icons, clsx, tailwind-merge
- **AI**: `@google/generative-ai` (Gemini SDK)

## Environment Variables

Create a `.env.local` file:

```env
GEMINI_API_KEY="your_google_gemini_api_key"
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run ESLint check
npm run lint

# Build production bundle
npm run build
```

## Security & Contributions

Please refer to [SECURITY.md](SECURITY.md) for vulnerability disclosure procedures.
