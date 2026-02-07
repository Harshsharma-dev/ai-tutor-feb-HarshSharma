# Frontend Developer Challenge: Pixel-Perfect Replication – Figma Pricing Page

## Overview

This is a timed coding exercise (90 minutes recommended) designed to evaluate your attention to detail, proficiency with Tailwind CSS, and ability to build clean, precise UI components.

Your task is to replicate the **desktop version only** of the Figma pricing page as pixel-perfect as possible using the provided Next.js + Tailwind boilerplate.

**Target Page:** https://www.figma.com/pricing/

## Time Limit

**60 minutes recommended** (strict timing optional based on your process).  
Prioritize visual accuracy, clean code, and functional elements where specified (e.g., Monthly/Annual toggle for Professional plan). Bonus points for implementing subtle animations.

## Boilerplate Setup

- Next.js 14+ (App Router)
- Tailwind CSS pre-configured
- The application is fully Dockerized for consistency
- No additional libraries installed (keep it vanilla; you may add minimal ones like framer-motion for bonus animation if desired)

**Primary way to run (required for evaluation):**

```bash
docker compose up --build
```

**To run locally:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Required Scope (Build exactly these sections – stop after the footer)

1. **Header/Navbar** (Figma logo, Log in, Contact sales, Get started for free button; optional simplified nav or hamburger)
2. **Title/Hero section** (“Pick your plan, choose your seats”), product list callout (“Seats give you access to Figma products:” with FigJam, Figma Slides, Dev Mode, Figma Design, Figma Draw, Figma Buzz, Figma Sites, Figma Make), and “Prices in USD”
3. **Pricing section** (four plan cards: Starter, Professional, Organization, Enterprise)
   - **Starter**: Free, “Select plan” CTA, “Why choose Starter?” with bullet list and key features
   - **Professional**: Monthly/Annual toggle (must be functional and update prices: Collab $3/$2, Dev $12/$10, Full $16/$13 or similar), three seat types with prices, “Select plan” CTA, “Why choose Professional?” and key features
   - **Organization**: “Billed annually”, Collab $5/mo, Dev $25/mo, Full $55/mo, Select plan + Contact sales, “Why choose Organization?” and key features
   - **Enterprise**: “Billed annually”, Collab $5/mo, Dev $35/mo, Full $90/mo, Contact sales + Learn more, “Why choose Enterprise?” and key features
4. **Seat explainer section** (“Not sure which seat is right for you?” with Collab seat, Dev seat, and Full seat descriptions and product bullets)
5. **Footer** (Product, Plans, Use cases, Resources, Company link groups; optional legal/copyright line)

**Do NOT build:**

- Mobile/responsive breakpoints below desktop
- Full “Compare all features” table (hundreds of rows) – a short “View all plan features” link or placeholder is fine
- Cookie banner or complex modals
- Full navigation dropdowns (simplified nav or hamburger placeholder is fine)

**Images & Media:**

- Use placeholder images (e.g., simple SVGs or colored shapes) for the Figma logo and product icons
- Focus on layout and spacing – exact brand assets not required

## Requirements

- **Pixel-perfect desktop match** (1440px+ viewport)
- Use Tailwind classes extensively (arbitrary values allowed: e.g., `[#1A1A1A]`, `[27px]`)
- Clean, semantic HTML
- Proper use of flex/grid for layouts (especially pricing cards and seat types)
- Exact typography, spacing, colors, shadows, borders, rounding, and hover states
- Functional Monthly/Annual toggle for Professional plan (prices must update correctly)
- Minimal or no custom CSS (except for bonus animation)

## Submission Instructions

1. **Fork this repository** to your personal GitHub account.
2. **Make your forked repository public** — private repositories will not be considered or reviewed.
3. Complete the challenge in your forked repository (commit regularly with clear messages).
4. Raise a Merge Request.
5. In your internal MR or submission:
   - Confirm that `docker compose up --build` works correctly in your fork
   - Add side-by-side screenshots comparing your implementation to the reference page (upload them directly if possible)
   - Mention if you implemented the bonus animation
6. Do not share zip files or private links — only public repositories and internal MRs will be evaluated.

## Evaluation Criteria (Scored out of 100 + Bonus)

| Category                 | Weight | Details                                                                                                                |
| ------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| **Visual Accuracy**      | 50%    | Pixel-perfect match: colors (exact hex), typography, spacing/padding/margins, shadows, borders, rounding, hover states |
| **Layout & Structure**   | 20%    | Correct use of flex/grid (especially cards and seat types), proper nesting, semantic HTML                              |
| **Tailwind Proficiency** | 15%    | Extensive use of utility classes, minimal custom CSS, clean class organization                                         |
| **Code Quality**         | 10%    | Readable component structure, logical file organization, no unused code                                                |
| **Attention to Detail**  | 5%     | Subtle elements (e.g., seat type icons, toggle states, “Why choose” sections)                                          |
| **Bonus: Animation**     | +10    | Smooth number increment when switching Monthly/Annual (e.g., using framer-motion or CSS)                               |

We value precision and craftsmanship. Good luck!
