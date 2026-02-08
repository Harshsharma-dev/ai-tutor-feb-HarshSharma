// Color Palette
export const COLORS = {
  // Primary Colors
  figmaBlue: '#0D99FF',
  figmaPurple: '#A259FF',
  figmaOrange: '#FF9F66',
  figmaGreen: '#10B981',
  figmaPink: '#FF69B4',
  figmaCyan: '#06B6D4',
  figmaIndigo: '#6366F1',
  figmaGray: '#6B7280',
  
  // UI Colors
  backgroundPrimary: '#FFFFFF',
  backgroundSecondary: '#F7F7F7',
  backgroundAccent: '#F0F8FF',
  textPrimary: '#000000',
  textSecondary: '#666666',
  textTertiary: '#999999',
  borderColor: '#E5E5E5',
  buttonBlack: '#000000',
  buttonWhite: '#FFFFFF',
  footerBg: '#000000',
} as const;

// Product Icons Data
export const PRODUCTS = [
  { id: 'figjam', name: 'FigJam', color: COLORS.figmaPurple },
  { id: 'slides', name: 'Figma Slides', color: COLORS.figmaOrange },
  { id: 'devmode', name: 'Dev Mode', color: COLORS.figmaGreen },
  { id: 'design', name: 'Figma Design', color: COLORS.figmaBlue },
  { id: 'draw', name: 'Figma Draw', color: COLORS.figmaCyan },
  { id: 'buzz', name: 'Figma Buzz', color: COLORS.figmaPink },
  { id: 'sites', name: 'Figma Sites', color: COLORS.figmaIndigo },
  { id: 'make', name: 'Figma Make', color: COLORS.figmaGray },
] as const;

// Pricing Tiers
export type BillingCycle = 'monthly' | 'annual';

export interface SeatPricing {
  monthly: number;
  annual: number;
}

export interface PricingTier {
  id: string;
  name: string;
  highlighted?: boolean;
  billingType?: string;
  seats: {
    collab?: SeatPricing | number;
    dev?: SeatPricing | number;
    full?: SeatPricing | number;
  };
  cta: {
    primary: string;
    secondary?: string;
  };
  whyChoose: string[];
  keyFeatures: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    seats: {},
    cta: {
      primary: 'Select plan',
    },
    whyChoose: [
      'Need basic design, presentation, and brainstorming tools',
      'Want to try Figma products',
    ],
    keyFeatures: [
      'Unlimited drafts',
      'UI kits and templates',
      'Basic design file inspection',
      '150 AI credits/day, up to 500 AI credits/mo',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    highlighted: true,
    seats: {
      collab: { monthly: 3, annual: 2 },
      dev: { monthly: 12, annual: 10 },
      full: { monthly: 16, annual: 13 },
    },
    cta: {
      primary: 'Select plan',
    },
    whyChoose: [
      'Need unlimited files and projects for a single team',
      'Want advanced prototyping tools and easier dev handoff',
    ],
    keyFeatures: [
      'Unlimited files and projects',
      'Team-wide design libraries',
      'Advanced Dev Mode inspection and MCP Server',
      '3,000 AI credits/mo for Full seat',
    ],
  },
  {
    id: 'organization',
    name: 'Organization',
    billingType: 'Billed annually',
    seats: {
      collab: 5,
      dev: 25,
      full: 55,
    },
    cta: {
      primary: 'Select plan',
      secondary: 'Contact sales',
    },
    whyChoose: [
      'Are a business that designs products across your organization',
      'Need centralized billing and admin controls',
    ],
    keyFeatures: [
      'Organization-wide design systems',
      'Centralized teams and billing',
      'Unified admin and security controls',
      'Private plugins',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    billingType: 'Billed annually',
    seats: {
      collab: 5,
      dev: 35,
      full: 90,
    },
    cta: {
      primary: 'Contact sales',
      secondary: 'Learn more',
    },
    whyChoose: [
      'Are a business designing for multiple products or brands',
      'Require advanced security, support, and controls',
    ],
    keyFeatures: [
      'Advanced security and controls',
      'Guest access management',
      'Dedicated support and onboarding',
      'Custom contract and SLA',
    ],
  },
];

// Seat Types
export interface SeatType {
  id: string;
  name: string;
  description: string;
  products: string[];
}

export const SEAT_TYPES: SeatType[] = [
  {
    id: 'collab',
    name: 'Collab seat',
    description: 'The Collab seat makes it easy to work together.',
    products: ['figjam', 'slides'],
  },
  {
    id: 'dev',
    name: 'Dev seat',
    description: 'The Dev seat gives devs the details they need.',
    products: ['figjam', 'slides', 'devmode', 'buzz'],
  },
  {
    id: 'full',
    name: 'Full seat',
    description: 'The Full seat connects your entire workflow.',
    products: ['figjam', 'slides', 'devmode', 'design', 'draw', 'buzz', 'sites', 'make'],
  },
];

// Footer Links
export const FOOTER_LINKS = {
  product: [
    { label: 'Figma Make', href: '#', badge: 'NEW' },
    { label: 'AI', href: '#' },
    { label: 'Downloads', href: '#' },
    { label: 'Release notes', href: '#' },
  ],
  plans: [
    { label: 'Pricing', href: '#' },
    { label: 'Enterprise', href: '#' },
    { label: 'Organization', href: '#' },
    { label: 'Professional', href: '#' },
  ],
  useCases: [
    { label: 'Online whiteboard', href: '#' },
    { label: 'Strategic planning', href: '#' },
    { label: 'Mind mapping', href: '#' },
    { label: 'Concept map', href: '#' },
    { label: 'AI app builder', href: '#' },
    { label: 'AI prototype generator', href: '#' },
    { label: 'AI website builder', href: '#' },
    { label: 'AI wireframe generator', href: '#' },
  ],
  resources: [
    { label: 'Color palettes', href: '#' },
    { label: 'Color palette generator', href: '#' },
    { label: 'Color contrast checker', href: '#' },
    { label: 'Font library', href: '#' },
    { label: 'Lorem ipsum generator', href: '#' },
    { label: 'Templates', href: '#' },
    { label: 'Developers', href: '#' },
    { label: 'Integrations', href: '#' },
    { label: 'Affiliate program', href: '#' },
    { label: 'Resource library', href: '#' },
    { label: 'Reports and insights', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Status', href: '#' },
    { label: 'Legal and privacy', href: '#' },
  ],
};
