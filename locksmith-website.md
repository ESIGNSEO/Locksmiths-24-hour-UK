# Implementation Plan - Unique SEO-Optimised Locksmith Website (1,400 Landing Pages)

We will build a high-performance, responsive, and SEO-optimised locksmith service website for `locksmiths24hour.co.uk` covering England, Scotland, and Wales (excluding Northern Ireland). The application will be built using Next.js (App Router, Static Site Generation) and Tailwind CSS, fully replicating the premium dark/light HSL design, typography, spacing, border-radii, animations, and sticky action bars from the live demo site (`https://flomaftei.getsbg.com/`).

---

## User Review Required

> [!IMPORTANT]
> **Dynamic SSG Build Time:** Generating 1,400 pages statically can take 1-3 minutes during `npm run build`. Next.js is configured for Static Site Generation (SSG) to ensure lightning-fast SEO response times, but this means we compile all pages ahead of time.
> 
> **Auto-Services Limitation:** As requested, we will place explicit warnings on all pages stating that our auto-locksmith service **only opens locked cars** and does not cut, program, or repair keys.
> 
> **No Contact Email:** There will be no email addresses anywhere on the site. All conversion triggers will point directly to phone calls and WhatsApp chats using `07742 831011`.

---

## Open Questions

- *Do you have any specific branding logo asset files to use? If not, we will use a clean CSS-based text logo with a custom SVG key icon matching the live demo's header styling.*

---

## Proposed Changes

### Component: Framework & Styling Setup

Set up the core Next.js skeleton and tailwind configuration matching the exact design token system of the live demo.

#### [NEW] [tailwind.config.ts](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/tailwind.config.ts)
- Custom HSL variable theme support for both light and dark modes.
- Color system: Background (`#ffffff` / `#0a1029`), Foreground (`#0a1029` / `#fafafa`), Primary Accent (`#ffd900`), Cards (`#ffffff` / `#141c34`), Borders (`#d4d9e2` / `#2e364d`).
- Custom keyframe animations for the calling button pulsate effect (`animate-pulse-btn`).

#### [NEW] [src/app/globals.css](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/app/globals.css)
- Core HSL colors, utility classes, and custom glassmorphism style rules.
- Transitions and spring physics styles for premium hover interactions.

---

### Component: Location Dataset & Content Generator

A dedicated generator system that builds a data array of ~1,400 towns in England, Scotland, and Wales, along with a dynamic Content Variation Engine that guarantees 100% unique SEO copy per town.

#### [NEW] [src/data/counties-towns.ts](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/data/counties-towns.ts)
- A comprehensive geographical dataset mapped by Country (England, Scotland, Wales) and County.
- Defines major towns (totaling ~1,400) and maps surrounding villages, hamlets, districts, and local postcodes to each town.

#### [NEW] [src/utils/seo-engine.ts](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/utils/seo-engine.ts)
- Implementing a Spintax/Synonym and sentence rotation engine.
- Will dynamically generate page copy, meta titles, and descriptions using local town-specific parameters. It will guarantee that every page has a distinct structure and wording to pass search engine duplicate content algorithms.

---

### Component: Global Layout & Dynamic Routes

The structural template of the site, including search engines crawler parameters and JSON-LD schema objects.

#### [NEW] [src/app/layout.tsx](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/app/layout.tsx)
- Root HTML wrapper.
- Sets up standard metadata, viewport settings, and global Font (Inter).
- Sticky header layout and mobile-sticky action bar (`Call Now` and `WhatsApp`).

#### [NEW] [src/components/StructuredData.tsx](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/components/StructuredData.tsx)
- Reusable React component injecting the `<script type="application/ld+json">` schema matching the user's requested schema payload.

#### [NEW] [src/app/locksmith-[town]/page.tsx](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/app/locksmith-%5Btown%5D/page.tsx)
- Dynamic route utilizing Next.js `generateStaticParams()` to pre-render the 1,400 static town landing pages.
- Standard dynamic layout: Hero section, High-Light Highlight box, Surroundings list, Services list, Local why-choose-us section, and trust signals.

---

### Component: Main Pages

Standard informational pages.

#### [NEW] [src/app/page.tsx](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/app/page.tsx)
- Homepage containing full service list, trust reviews, and grouped links to all 1,400 landing pages for absolute crawlability.

#### [NEW] [src/app/services/page.tsx](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/app/services/page.tsx)
- Services description page with clear auto service boundaries.

#### [NEW] [src/app/areas-covered/page.tsx](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/app/areas-covered/page.tsx)
- Full list of counties and towns, organized by country.

#### [NEW] [src/app/about-us/page.tsx](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/app/about-us/page.tsx)
- Professional story founded in 2004, guarantees, Yale/Chubb lock brands.

#### [NEW] [src/app/contact/page.tsx](file:///f:/SIMPLE%20PROJECTS/Locksmiths-24-hour-UK/src/app/contact/page.tsx)
- Local phone call, WhatsApp CTA links, address form, and FAQs.

---

## Verification Plan

### Automated Tests
- Build test: `npm run build` to verify all 1,400 static pages generate successfully.
- Lint check: `npm run lint` and TypeScript compilation `npx tsc --noEmit`.
- Security audit: Run the AG Kit security scan script `python .agents/skills/vulnerability-scanner/scripts/security_scan.py .`.
- SEO & Performance check: Run the lighthouse audit script `python .agents/skills/performance-profiling/scripts/lighthouse_audit.py http://localhost:3000`.

### Manual Verification
- Start the development server (`npm run dev`) and run a visual check on responsive states (mobile, tablet, desktop) using the browser subagent.
- Verify color contrast and hover animations match the live demo layout styling.
- Check that there is no email address on any page, and the phone number `07742 831011` is correctly linked to `tel:07742831011`.
- Verify the auto-locksmith limitation text is visible on all services lists.

## ✅ PHASE X COMPLETE
- Lint: ✅ Pass
- Security: ✅ No critical issues
- Build: ✅ Success
- Date: 2026-06-10
