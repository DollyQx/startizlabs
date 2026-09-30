# Security Policy

## Reporting Security Vulnerabilities

If you discover a security vulnerability within `startizlabs`, please notify the engineering team via email instead of opening a public issue.

## Security Practices

1. **Environment Security**: Sensitive API keys (such as `@google/generative-ai` keys) must be supplied via environment variables (`GEMINI_API_KEY`) and never committed to version control.
2. **Server-Side API Boundaries**: API endpoints like `/api/launch-planner` validate requests and execute generative AI calls server-side.
3. **Data Hygiene**: Standard Next.js server components and client components enforce safe rendering against cross-site scripting (XSS).
