export interface PlannerAnswers {
  idea: string;
  stage: string;
  businessName: string;
  industry: string;
  targetMarket: string;
  targetCustomer: string;
  customerKnowledge: string;
  budget: string;
  timeline: string;
}

export interface MetricScore {
  strategy: number;
  brand: number;
  product: number;
  growth: number;
}

export interface LaunchBlueprint {
  businessIdea: {
    refinedConcept: string;
    problem: string;
    solution: string;
    businessModel: string;
  };
  targetAudience: {
    primaryCustomer: string;
    characteristics: string;
    mainPainPoints: string;
    buyingMotivation: string;
  };
  market: {
    marketOpportunity: string;
    competitorCategories: string;
    potentialDifferentiation: string;
    keyAssumptions: string;
  };
  positioning: {
    suggestedPositioning: string;
    valueProposition: string;
    usp: string;
    brandAngle: string;
  };
  brand: {
    suggestedBrandDirection: string;
    sampleNames: string[];
    taglineConcepts: string[];
    suggestedVisualDirection: string;
  };
  productMvp: {
    recommendedMvp: string;
    mustHaveFeatures: string[];
    niceToHaveFeatures: string[];
    suggestedFirstVersion: string;
  };
  website: {
    recommendedWebsiteType: string;
    suggestedPages: string[];
    mainCta: string;
    homepageStructure: string[];
  };
  contentMarketing: {
    contentPillars: string[];
    launchContentIdeas: string[];
    seoDirection: string;
    customerAcquisition: string[];
  };
  launchRoadmap: {
    week1: string;
    week2: string;
    week3: string;
    week4: string;
  };
  score: number;
  status: string;
  metrics: MetricScore;
}
