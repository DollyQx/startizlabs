import type { Metadata } from "next";
import { LaunchPlanner } from "@/components/sections/launch-planner/LaunchPlanner";

export const metadata: Metadata = {
  title: "AI Launch Planner — Turn Your Idea Into a Launch Plan",
  description:
    "Analyze your startup idea with our AI-powered launch planner. Tell us what you're building to get a custom roadmap spanning strategy, structure, engineering, and distribution.",
  alternates: {
    canonical: "/launch-planner",
  },
  openGraph: {
    title: "AI Launch Planner — Turn Your Idea Into a Launch Plan",
    description:
      "Analyze your startup idea with our AI-powered launch planner. Tell us what you're building to get a custom roadmap spanning strategy, structure, engineering, and distribution.",
  },
};

export default function LaunchPlannerPage() {
  return <LaunchPlanner />;
}
