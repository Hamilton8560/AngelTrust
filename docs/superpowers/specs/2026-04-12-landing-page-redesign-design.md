# AngelTrust Landing Page Redesign — Design Spec

**Date:** 2026-04-12
**Client:** Engel Law Offices (Adam Engel, Esq.)
**Goal:** Maximize Calendly consultation bookings
**Scope:** Landing page (homepage) only — blog, legal pages, routing unchanged
**Framework:** Hormozi Value Equation (conversion logic) + Taste-Skill (design execution)
**Stack:** React + Vite + Tailwind CSS 3.4 (existing)

---

## Conversion Strategy

**Single conversion event:** Book a free 30-minute Calendly call.

Every section on the page has one job: move the visitor closer to clicking "Book Your Free Consultation." No competing CTAs (guide download, contact form, email capture). One button. One action.

**Hormozi Value Equation applied:**

| Factor | How We Address It |
|--------|------------------|
| Dream Outcome | "Don't Leave Your Family Unprotected" — speaks to universal fear |
| Perceived Likelihood | 15 verified 5-star reviews, 15+ years experience, VA & DC licensed |
| Time Delay | "A 30-minute call can change that" — fast, immediate |
| Effort/Sacrifice | "Free. No obligation. No pressure." — zero risk |

**Target audience:** Mixed — young families (30-45), high-net-worth individuals, seniors/retirees. Copy addresses all three through universal fears (guardianship, probate, unintended heirs).

---

## Page Structure

Alternating dark (#0A1F44) / light (#f8fafc) sections for visual rhythm.

### Section 1: Hero (Dark)

**Layout:** Split-screen — 50/50 grid. Copy left, Adam's photo right.

**Left side:**
- Label: "Estate Planning Attorney — Leesburg, VA" (gold, uppercase, 12px, letter-spacing 2.5px)
- Headline: "Don't Leave Your Family Unprotected." (38px desktop, 28px mobile, font-weight 800, tracking-tighter)
- Subhead: "Every year, thousands of families lose homes, savings, and custody battles because they didn't have a plan. A 30-minute call with Adam Engel can change that." (16px, slate-400, max-width 440px)
- CTA: "Book Your Free Consultation" — gold button, navy text, 14px 32px padding
- Risk line: "Free 30-min call · No obligation · No pressure" (13px, slate-500)
- Social proof bar (below, separated by 1px border-top): 5 gold stars + "5.0 — verified reviews" + "15+ years experience" + "VA & DC"

**Right side:**
- Adam Engel's real professional photo
- Styled in a rounded container with subtle gold accent line at bottom
- Photo sourced from existing site or provided by Adam (high-res)

**Mobile:** Stacks to single column. Photo below copy. Social proof bar wraps to 2 rows. Full-width CTA.

**Motion:** Hero content fades up on load with stagger (label → headline → subhead → CTA → proof bar, 80ms stagger). CTA button has magnetic hover pull + scale-98 active state with spring physics.

### Section 2: Problem Agitation (Light)

**Layout:** Left-aligned vertical stack. Max-width 600px.

**Content:**
- Label: "Without a plan" (gold, uppercase)
- Headline: "The State Decides Everything." (32px, weight 800)
- Three numbered problems, one line each:
  1. "A judge picks who raises your kids."
  2. "Your family waits 6–18 months in probate."
  3. "Your assets go to people you never intended."
- Each with a navy numbered badge (40px square, rounded-8, gold number)
- Bridge banner: Navy background, rounded-10, flex between text and CTA: "All preventable. One conversation." + "Book a Free Call" button

**Mobile:** Same structure, full-width bridge banner, button stacks below text.

**Motion:** Each problem staggers in on scroll (spring physics, stiffness 100, damping 20, 120ms stagger). Bridge banner slides up with slight overshoot.

### Section 3: Value Stack (Dark)

**Layout:** Left-aligned list. Max-width 580px. No cards — border-bottom dividers only.

**Content:**
- Label: "Your free consultation includes" (gold, uppercase)
- Headline: "Everything You Need to Protect Your Family." (30px, white)
- Six line items, each with:
  - Gold dot (8px circle)
  - Service name (white, 15px, weight 500)
  - Crossed-out dollar value (slate-500, line-through)
  - Items:
    1. Full estate plan review — ~~$300~~
    2. Will vs. trust recommendation — ~~$200~~
    3. Tax exposure assessment — ~~$250~~
    4. Guardianship planning guidance — ~~$150~~
    5. Power of attorney overview — ~~$150~~
    6. Custom action plan for your situation — ~~$200~~
  - Total value line: ~~$1,250~~
- Reveal box: Gold-tinted glass container (bg gold/8%, border gold/20%, inner shadow white/10)
  - "Your cost today" (14px, slate-400)
  - "Free" (42px, gold, weight 800)
  - "30-minute consultation with Adam Engel" (13px, slate-500)
  - CTA: "Claim Your Free Consultation" (gold button)

**Note:** Dollar values are anchors. Adam should confirm they feel accurate. They represent typical hourly billing for these services.

**Mobile:** Same stack, full-width reveal box, full-width button.

**Motion:** Line items stagger in on scroll (100ms apart). Prices animate from visible to strikethrough. "Free" scales from 0.8 to 1.0 with overshoot spring. Reveal box has liquid glass refraction (inner border white/10, inner shadow).

### Section 4: Testimonial Marquee (Light)

**Layout:** Full-width, edge-to-edge. Two horizontal rows of testimonial cards.

**Content:**
- Label: "Don't take our word for it" (gold, uppercase)
- Headline: "Hear From Our Clients." (30px, navy)
- No review count displayed anywhere. The volume speaks for itself.

**Row 1 (scrolls left, 8 cards):**
1. Sarah — "...helping me through some very difficult circumstances..."
2. Anthony — "...attention to detail, timeliness, and professionalism..."
3. Ashley — "Exceptional Service and Expertise..."
4. Steven — "...wonderful experience updating our will..."
5. Linda — "Expert legal work at affordable rates."
6. Donald — "...sound advice and was attentive to details..."
7. Mark — "...incredibly knowledgeable, kind and explained things in a straightforward manner..."
8. Betty — "Responsive, agile, and professional..."

**Row 2 (scrolls right, 7 cards):**
1. Sandra — "...professionalism, knowledge, and genuine care..."
2. Susan — "...resolved my issue without me needing to come in..."
3. Jessica — "...top notch professional...will do everything he can..."
4. Lisa — "...provided me with legal counsel at a time in my life when I needed..."
5. Patricia — "...amazing knowledge, integrity, attention to detail..."
6. Michelle — "...extremely responsive & professional..."
7. Nancy — "...very thorough and expeditious...updating my will..."

**Card design:**
- min-width 280-320px (varies by quote length)
- White background, 1px border slate-200, rounded-12, 20px padding
- 5 gold stars at top
- Quote text with key phrases bolded (13px, slate-700)
- Avatar: navy circle (28px) with gold initial letter + first name + "Verified" label

**Mechanics:**
- CSS keyframe animation: `translateX(0) → translateX(-100%)` on duplicated DOM nodes for seamless loop
- Row 1 speed: ~40s per loop. Row 2: ~45s (slightly different = organic feel)
- Pause on hover: `animation-play-state: paused`
- Edge fades: gradient overlays on left/right edges (80px, background to transparent) mask loop seams
- Performance: pure CSS transform, GPU-accelerated, no JS animation loop

**Mobile:** Single row marquee. Cards min-width 260px.

### Section 5: Meet Adam + Guarantee (Dark)

**Layout:** 60/40 split grid. Copy left, photo right.

**Left side:**
- Label: "Meet your attorney" (gold, uppercase)
- Name: "Adam Engel, Esq." (28px, white, weight 800)
- Bio: "15+ years helping families across Virginia and DC protect what matters most. Adam's approach is simple — listen first, explain clearly, build a plan that actually works for your life." (15px, slate-400)
- Credentials (flex row with divider):
  - Education: J.D., Loyola Law School / B.A., UCLA
  - Licensed: Virginia State Bar / District of Columbia Bar
- Guarantee box (gold-tinted glass):
  - "Zero-risk guarantee" (15px, white, weight 600)
  - "Your consultation is free. No obligation. No sales pitch. If Adam can help, he'll tell you how. If he can't, he'll point you to someone who can."

**Right side:**
- Adam's real professional photo in a 3:4 aspect ratio container
- rounded-16, subtle gold accent line at bottom
- Photo: use the existing headshot from engellawoffices.com or request high-res from Adam

**Mobile:** Stacks. Photo above copy (photo first on mobile for face recognition).

**Motion:** Section fades up on scroll. Guarantee box has subtle pulse on the border (gold/15 → gold/25, 3s loop).

### Section 6: Final CTA (Light)

**Layout:** Centered. Max-width 580px. This is the only centered section — intentional hierarchy break for the closer.

**Content:**
- Headline: "Your Family's Future. One Call Away." (30px, navy, weight 800)
- Subhead: "30 minutes. Free. No obligation." (15px, slate-500)
- CTA: "Book Your Free Consultation" (gold button, larger — 16px 40px padding)
- Phone fallback: "or call directly: (703) 223-2170" (clickable tel: link)
- Trust badges (flex row, separated by 1px dividers):
  - "15+" / "Years experience"
  - 5 gold stars / "Client rating"
  - "VA & DC" / "Licensed"

**Mobile:** Same structure, full-width button, trust badges stack to 1-column.

**Motion:** Button magnetic hover + scale-98 active + spring. Section fades up.

### Section 7: Footer (Dark)

**Keep existing footer structure** with minor cleanup:
- Contact info (phone, email, address)
- Legal links (privacy, terms, disclaimer)
- Copyright
- Remove any competing CTAs or guide download references

---

## Design System

### Colors (unchanged from existing)

| Token | Hex | Usage |
|-------|-----|-------|
| navy-900 | #0A1F44 | Primary bg, dark sections, text |
| navy-800 | #162B4D | Secondary dark |
| navy-700 | #1C3654 | Tertiary dark |
| gold-500 | #C5A572 | Primary accent, CTAs, stars, labels |
| gold-600 | #B08F5C | Hover states |
| light-bg | #f8fafc | Light section backgrounds |

### Typography

- **Font:** Geist (replaces system/Inter default). Fallback: `system-ui, -apple-system, sans-serif`
- **Headlines:** `text-4xl md:text-5xl tracking-tighter leading-none font-extrabold`
- **Section headlines:** `text-3xl font-extrabold tracking-tight`
- **Body:** `text-base text-slate-400 leading-relaxed max-w-[65ch]`
- **Labels:** `text-xs uppercase tracking-[2.5px] font-semibold text-gold-500`

### Motion (MOTION_INTENSITY=6)

- **Spring physics:** `type: "spring", stiffness: 100, damping: 20` on all interactive elements
- **Scroll reveals:** Framer Motion `useInView` + staggerChildren (80-120ms)
- **CTA buttons:** Magnetic hover (useMotionValue/useTransform, NOT useState), scale-98 on active, -translate-y-1px tactile push
- **Marquee:** Pure CSS keyframe, ~40s loop, pause on hover
- **Value stack prices:** Animate from visible to strikethrough on scroll enter
- **"Free" text:** Scale from 0.8 → 1.0 with overshoot spring

### Layout Patterns

- **Container:** `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Split sections:** `grid grid-cols-1 lg:grid-cols-2 gap-12`
- **Asymmetric splits:** `grid-template-columns: 3fr 2fr` (60/40)
- **Full-height hero:** `min-h-[100dvh]` (NOT h-screen)
- **Mobile collapse:** All grids → single column below lg breakpoint

### Assets

- **Adam's photo:** Real headshot — source from existing site or request high-res
- **fal.ai available** for generating: office environment backgrounds, lifestyle/family imagery if needed
- All generated assets saved to `public/media/` with descriptive names
- No Unsplash, no placeholder URLs

---

## What Gets Removed

These elements from the current site are NOT on the redesigned landing page:

- ~~Shield icon in hero~~
- ~~"Secure Your Legacy" headline~~
- ~~6 service cards with Learn More modals~~
- ~~Fee calculator on homepage~~
- ~~Free guide download modal / email capture~~
- ~~Contact form (replaced by Calendly CTA)~~
- ~~About section with 4 values grid~~
- ~~8 expertise badges~~
- ~~Blog section reference on homepage~~

**These features still exist** on their respective routes (/blog, etc.) — they're just not on the landing page conversion funnel.

---

## What Gets Added

- Testimonial data file with all 15 verified reviews
- Geist font import
- Framer Motion dependency (for scroll reveals, spring physics, magnetic buttons)
- Marquee CSS animation
- Redesigned Hero, ProblemAgitation, ValueStack, TestimonialMarquee, MeetAdam, FinalCTA components

---

## Navigation Changes

Top nav stays but simplifies for the landing page:
- Logo (left)
- Links: About (scrolls to section 5) | Blog (links to /blog)
- CTA button: "Free Consultation" (gold, links to Calendly)
- Keep it minimal — fewer nav options = less distraction from the funnel

Mobile: hamburger menu, same items.

---

## Success Metrics

- **Primary:** Calendly booking rate (clicks on "Book Your Free Consultation")
- **Secondary:** Phone call clicks (tel: link)
- **Tertiary:** Scroll depth (how far visitors get through the funnel)
