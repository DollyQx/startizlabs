import { LaunchBlueprint } from "./types";

export const MOCK_BLUEPRINT: LaunchBlueprint = {
  score: 64,
  status: "Getting There",
  metrics: {
    strategy: 78,
    brand: 62,
    product: 70,
    growth: 45,
  },
  businessIdea: {
    refinedConcept: "A value-focused, environmentally-conscious clothing brand catering specifically to collegiate students by utilizing organic materials and a circular exchange program.",
    problem: "College students want to dress style-consciously and sustainably, but fast-fashion alternatives are polluting, and ethical brands are priced far beyond a typical student budget.",
    solution: "Produce high-durability, modern-cut basic apparel from 100% organic cotton, sold at student-friendly price points and supported by a trade-in program for store credit.",
    businessModel: "Direct-to-consumer (D2C) e-commerce channel, supplemented by pop-up campus partnerships and collaborative physical retail trunks.",
  },
  targetAudience: {
    primaryCustomer: "Socio-politically conscious university students aged 18–25.",
    characteristics: "Digitally native, active on social apps, value-oriented, environmentally aware, motivated by authentic community affiliations rather than corporate marketing.",
    mainPainPoints: "High price of sustainable alternatives; greenwashing from fast fashion brands; lack of apparel durability; difficulty recycling old clothes.",
    buyingMotivation: "Desire to dress fashionably while aligning with ethical practices, without exceeding limited discretionary campus spending budgets.",
  },
  market: {
    marketOpportunity: "The Indian circular apparel and sustainable fashion market is expanding at a high CAGR, driven by millennial and Gen-Z consumers prioritizing eco-credentials.",
    competitorCategories: "High-end sustainable labels (expensive); Fast-fashion houses greenwashing lines (not durable/trusted); Generic campus bookstore merchandise (lacks styling).",
    potentialDifferentiation: "Transparent cost disclosures, built-in buyback/upcycling programs, and strong student affiliate micro-networks.",
    keyAssumptions: "Students are willing to return worn items for shop discounts, and organic supply chains can scale cost-effectively at lower margins.",
  },
  positioning: {
    suggestedPositioning: "The honest, circular campus uniform.",
    valueProposition: "Modern organic basics that don't cost the Earth or your tuition.",
    usp: "India's first fully circular student-first basics label built on durability and student-friendly pricing.",
    brandAngle: "Practical, transparent sustainability. No greenwashing, just clean garments built for campus life.",
  },
  brand: {
    suggestedBrandDirection: "Clean, bold, and minimal. Incorporates earth tones and raw cotton textures combined with bright modern typography.",
    sampleNames: ["Verve Organic", "Campus Loop", "Grounded Basics"],
    taglineConcepts: [
      "Wear. Return. Re-spin.",
      "basics built for learning, living, and looping.",
      "Tuition-friendly sustainability."
    ],
    suggestedVisualDirection: "Deep forest greens, natural linens, accented with vibrant sand/beige and clean off-whites. Imagery should focus on raw products, student creators, and actual circular supply chain steps.",
  },
  productMvp: {
    recommendedMvp: "A capsule launch collection consisting of three signature organic basic items: The Campus Tee, The Loop Hoodie, and Daily Socks.",
    mustHaveFeatures: [
      "100% certified organic cotton yarns",
      "QR-enabled tags linking to transparent material path details",
      "Pre-shrunk fabric construction to ensure long-life durability",
      "Return-shipping portal on website for circular buy-backs"
    ],
    niceToHaveFeatures: [
      "Custom dye matching for specific college student organizations",
      "Recycled poly drawstrings",
      "Biodegradable plant-based mailers"
    ],
    suggestedFirstVersion: "Release a pre-order capsule of 200 items per style to validate sizing demand before scaling production runs.",
  },
  website: {
    recommendedWebsiteType: "High-conversion Shopify or custom NextJS dynamic store landing experience.",
    suggestedPages: [
      "Home page showing product capsule and mission",
      "Shop/Collection pages with interactive size guides",
      "Circular Trade-In Hub explaining the buyback process",
      "Material Transparency Ledger detailing costs/origins"
    ],
    mainCta: "Reserve From Capsule One",
    homepageStructure: [
      "Hero with bold circular value statement",
      "Capsule display carousel",
      "Transparency calculator (fast fashion footprints vs. ours)",
      "The Campus Loop circular flow illustration",
      "Pre-order countdown + CTA banner"
    ],
  },
  contentMarketing: {
    contentPillars: [
      "Anti-Greenwashing Education",
      "Behind-the-Scenes Manufacturing Transparency",
      "Campus Life & Student Spotlights (co-creators)"
    ],
    launchContentIdeas: [
      "Short form video counting the supply-chain miles of a typical fast fashion t-shirt vs yours",
      "Pop-up trade-in boxes at local hostels/dorms filmed for TikTok/Instagram Reels",
      "Founder log detailing the trial-runs of making circular basic garments"
    ],
    seoDirection: "Optimize for terms like 'sustainable campus apparel India', 'affordable organic cotton basics', 'circular clothes student discount'.",
    customerAcquisition: [
      "Student brand ambassador program offering free gears/commissions",
      "Short-form social storytelling campaigns on Instagram Reels and TikTok",
      "Stall pop-ups at college fests/sports events"
    ],
  },
  launchRoadmap: {
    week1: "Finalize capsule designs, source certified organic cotton manufacturers in India, and set up dynamic domain and holding page.",
    week2: "Develop visual identity package, launch social profiles with raw behind-the-scenes content, and open email pre-registration.",
    week3: "Launch capsule pre-orders with student influencer affiliate codes, run hostel circular recycling drives to seed campaign awareness.",
    week4: "Fulfill initial pre-order batches, run post-purchase feedback loops on fits/fabrics, and open the circular recycling hub portal."
  }
};
