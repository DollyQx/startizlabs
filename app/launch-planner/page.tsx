import type { Metadata } from "next";
import { LaunchPlanner } from "@/components/sections/launch-planner/LaunchPlanner";

export const metadata: Metadata = {
  title: "AI Launch Planner | Startiz Labs",
  description:
    "Tell Startiz what you're building and our AI will recommend the right starting point for your launch journey.",
};

export default function LaunchPlannerPage() {
  return <LaunchPlanner />;
}
