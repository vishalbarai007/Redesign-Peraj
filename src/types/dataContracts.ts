export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  logoUrl: string;
  footerLogoUrl: string;
  phone: string;
  email: string;
  address: string;
  establishedYear: number;
  irdaiLicense: string;
  navigation: NavItem[];
  primaryActionLabel: string;
  socials: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface HeroData {
  badge: string;
  headline: string;
  highlightedHeadlineWord?: string;
  subheadline: string;
  benefits: string[];
  primaryCtaText: string;
  secondaryCtaText: string;
  emergencyDirectLine: string;
  formTitle: string;
  formSubtitle: string;
}

export interface StatItem {
  id: string;
  value: string;
  unit?: string;
  label: string;
  description: string;
}

export interface ProblemItem {
  id: string;
  index: string;
  title: string;
  painPoint: string;
  solutionImpact: string;
  category: string;
}

export interface OfferingItem {
  id: string;
  title: string;
  shortDescription: string;
  coveragePoints: string[];
  imageUrl: string;
  badge: string;
  recommendedFor: string;
}

export interface ProcessStep {
  step: number;
  phase: string;
  title: string;
  description: string;
  deliverable: string;
  timeline: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorRole: string;
  organization: string;
  industry: string;
  claimHighlight?: string;
  rating?: number;
}

export interface IndustryItem {
  id: string;
  name: string;
  keyRisks: string[];
  imageUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
