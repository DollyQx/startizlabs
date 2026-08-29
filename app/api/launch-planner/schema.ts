import { z } from "zod";

// Zod Schema to validate incoming PlannerAnswers
export const PlannerAnswersSchema = z.object({
  idea: z.string().min(10, "Business idea description must be at least 10 characters long").max(5000, "Input is too long"),
  stage: z.string().min(1, "Stage is required").max(100),
  businessName: z.string().max(200).optional().or(z.literal("")),
  industry: z.string().min(1, "Industry is required").max(200),
  targetMarket: z.string().min(1, "Target market is required").max(100),
  targetCustomer: z.string().min(10, "Target customer description must be at least 10 characters long").max(3000, "Input is too long"),
  customerKnowledge: z.string().min(1, "Customer knowledge level is required").max(100),
  budget: z.string().min(1, "Budget category is required").max(100),
  timeline: z.string().min(1, "Launch timeline is required").max(100),
});

// Zod Schema to validate AI feedback LaunchBlueprint
export const LaunchBlueprintSchema = z.object({
  businessIdea: z.object({
    refinedConcept: z.string().min(1, "Refined concept is required"),
    problem: z.string().min(1, "Problem description is required"),
    solution: z.string().min(1, "Solution description is required"),
    businessModel: z.string().min(1, "Business model is required"),
  }),
  targetAudience: z.object({
    primaryCustomer: z.string().min(1, "Primary customer is required"),
    characteristics: z.string().min(1, "Characteristics is required"),
    mainPainPoints: z.string().min(1, "Main pain points are required"),
    buyingMotivation: z.string().min(1, "Buying motivation is required"),
  }),
  market: z.object({
    marketOpportunity: z.string().min(1, "Market opportunity is required"),
    competitorCategories: z.string().min(1, "Competitor categories are required"),
    potentialDifferentiation: z.string().min(1, "Potential differentiation is required"),
    keyAssumptions: z.string().min(1, "Key assumptions are required"),
  }),
  positioning: z.object({
    suggestedPositioning: z.string().min(1, "Suggested positioning is required"),
    valueProposition: z.string().min(1, "Value proposition is required"),
    usp: z.string().min(1, "USP is required"),
    brandAngle: z.string().min(1, "Brand angle is required"),
  }),
  brand: z.object({
    suggestedBrandDirection: z.string().min(1, "Suggested brand direction is required"),
    sampleNames: z.array(z.string()).min(1, "At least one sample name is required"),
    taglineConcepts: z.array(z.string()).min(1, "At least one tagline concept is required"),
    suggestedVisualDirection: z.string().min(1, "Suggested visual direction is required"),
  }),
  productMvp: z.object({
    recommendedMvp: z.string().min(1, "Recommended MVP is required"),
    mustHaveFeatures: z.array(z.string()).min(1, "At least one must-have feature is required"),
    niceToHaveFeatures: z.array(z.string()),
    suggestedFirstVersion: z.string().min(1, "Suggested first version is required"),
  }),
  website: z.object({
    recommendedWebsiteType: z.string().min(1, "Recommended website type is required"),
    suggestedPages: z.array(z.string()).min(1, "At least one suggested page is required"),
    mainCta: z.string().min(1, "Main CTA is required"),
    homepageStructure: z.array(z.string()).min(1, "At least one homepage structure detail is required"),
  }),
  contentMarketing: z.object({
    contentPillars: z.array(z.string()).min(1, "At least one content pillar is required"),
    launchContentIdeas: z.array(z.string()).min(1, "At least one content idea is required"),
    seoDirection: z.string().min(1, "SEO direction is required"),
    customerAcquisition: z.array(z.string()).min(1, "At least one customer acquisition channel is required"),
  }),
  launchRoadmap: z.object({
    week1: z.string().min(1, "Week 1 is required"),
    week2: z.string().min(1, "Week 2 is required"),
    week3: z.string().min(1, "Week 3 is required"),
    week4: z.string().min(1, "Week 4 is required"),
  }),
  score: z.number().int().min(0).max(100),
  status: z.string().min(1, "Status is required"),
  metrics: z.object({
    strategy: z.number().int().min(0).max(100),
    brand: z.number().int().min(0).max(100),
    product: z.number().int().min(0).max(100),
    growth: z.number().int().min(0).max(100),
  }),
});
