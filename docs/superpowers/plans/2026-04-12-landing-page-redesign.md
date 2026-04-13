# Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the AngelTrust homepage into a Hormozi-style conversion funnel that drives Calendly consultation bookings.

**Architecture:** Replace the current homepage (Hero + ServicesPage + AboutPage + BlogPage + ContactPage) with 6 new conversion-focused sections (Hero, ProblemAgitation, ValueStack, TestimonialMarquee, MeetAdam, FinalCTA). All other routes (/blog, /privacy, etc.) remain unchanged. New components live in `src/components/landing/`. Framer Motion handles scroll reveals and micro-interactions. Testimonial data lives in `src/data/testimonials.ts`.

**Tech Stack:** React 18, Vite, Tailwind CSS 3.4, Framer Motion (new), Geist font (new)

**Spec:** `docs/superpowers/specs/2026-04-12-landing-page-redesign-design.md`

**Testing note:** No test framework exists in this project. Each task uses `npm run build` to verify no compile errors and `npm run dev` for visual verification.

---

## File Map

| Action | Path | Responsibility |
|--------|------|---------------|
| Create | `src/data/testimonials.ts` | All 15 reviews as typed data |
| Create | `src/components/landing/Hero.tsx` | Split-screen hero with social proof bar |
| Create | `src/components/landing/ProblemAgitation.tsx` | 3 fear-based one-liners + bridge CTA |
| Create | `src/components/landing/ValueStack.tsx` | 6 deliverables with crossed-out prices + "Free" reveal |
| Create | `src/components/landing/TestimonialMarquee.tsx` | Infinite 2-row marquee, all 15 reviews |
| Create | `src/components/landing/MeetAdam.tsx` | Bio + credentials + guarantee |
| Create | `src/components/landing/FinalCTA.tsx` | Centered closer with trust badges |
| Create | `src/components/landing/LandingPage.tsx` | Assembles all 6 sections |
| Create | `src/components/shared/MagneticButton.tsx` | Reusable magnetic hover CTA |
| Modify | `src/App.tsx` | Swap homepage content to LandingPage |
| Modify | `src/components/shared/Navigation.tsx` | Simplify nav links (About, Blog, CTA) |
| Modify | `src/components/shared/Footer.tsx` | Remove guide/competing CTA references |
| Modify | `src/index.css` | Add Geist font import + marquee keyframes |
| Modify | `tailwind.config.js` | Add Geist to fontFamily |
| Modify | `index.html` | Update title/meta |

---

### Task 1: Install dependencies and configure fonts

**Files:**
- Modify: `package.json`
- Modify: `tailwind.config.js`
- Modify: `src/index.css`
- Modify: `index.html`

- [ ] **Step 1: Install framer-motion**

```bash
cd /Users/davidhamilton/AngelTrust && npm install framer-motion
```

- [ ] **Step 2: Add Geist font import to index.css**

Replace the contents of `src/index.css` with:

```css
@import url('https://cdn.jsdelivr.net/npm/geist@1/dist/fonts/geist-sans/style.css');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    font-family: 'Geist Sans', 'Geist', system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

@keyframes marquee-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-marquee-left {
  animation: marquee-left 40s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 45s linear infinite;
}

.pause-on-hover:hover {
  animation-play-state: paused;
}
```

- [ ] **Step 3: Add Geist to Tailwind config**

Replace `tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'Geist', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0A1F44',
          800: '#162B4D',
          700: '#1C3654',
        },
        gold: {
          500: '#C5A572',
          600: '#B08F5C',
          700: '#97784C',
        },
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 4: Update index.html title**

Replace `index.html` with:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/assets/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Estate planning attorney in Leesburg, VA. Wills, trusts, and estate administration for families across Virginia and DC. Free 30-minute consultation." />
    <title>Engel Law Offices — Estate Planning Attorney | Leesburg, VA</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 6: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add package.json package-lock.json tailwind.config.js src/index.css index.html && git commit -m "chore: add framer-motion, Geist font, marquee keyframes"
```

---

### Task 2: Create testimonial data

**Files:**
- Create: `src/data/testimonials.ts`

- [ ] **Step 1: Create the testimonials data file**

Create `src/data/testimonials.ts`:

```ts
export interface Testimonial {
  name: string;
  initial: string;
  quote: string;
  boldPhrase: string;
}

export const ROW_1_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah',
    initial: 'S',
    quote: 'Shout out to Adam for helping me through some very difficult circumstances. Adam is friendly, professional, and the kind of attorney you want on your side.',
    boldPhrase: 'some very difficult circumstances.',
  },
  {
    name: 'Anthony',
    initial: 'A',
    quote: 'Adam and his staff have been incredibly helpful in guiding our family. His attention to detail, timeliness, and professionalism have been greatly appreciated. We will be using him for any and all legal matters moving forward.',
    boldPhrase: 'any and all legal matters moving forward.',
  },
  {
    name: 'Ashley',
    initial: 'A',
    quote: 'Exceptional Service and Expertise. A stellar experience with Engel Law Offices.',
    boldPhrase: 'Exceptional Service and Expertise.',
  },
  {
    name: 'Steven',
    initial: 'S',
    quote: 'What a wonderful experience updating our will. He was personable, knowledgeable, and efficient. My husband and I highly recommend this firm.',
    boldPhrase: 'highly recommend this firm.',
  },
  {
    name: 'Linda',
    initial: 'L',
    quote: 'Expert legal work at affordable rates.',
    boldPhrase: 'Expert legal work at affordable rates.',
  },
  {
    name: 'Donald',
    initial: 'D',
    quote: 'Provided sound advice and was attentive to details. Easy to speak with & an all-around kind person. Would recommend.',
    boldPhrase: 'sound advice',
  },
  {
    name: 'Mark',
    initial: 'M',
    quote: 'Adam was incredibly knowledgeable, kind and explained things in a straightforward manner. I felt he was working with me to explain and communicate, which is important because I have a medical condition — I really appreciate his patience and understanding.',
    boldPhrase: 'patience and understanding.',
  },
  {
    name: 'Betty',
    initial: 'B',
    quote: 'Adam was great! Responsive, agile, and professional. Great experience!',
    boldPhrase: 'Responsive, agile, and professional.',
  },
];

export const ROW_2_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sandra',
    initial: 'S',
    quote: 'I wholeheartedly recommend Adam Engel. His blend of professionalism, knowledge, and genuine care for his clients makes him a standout in his field.',
    boldPhrase: 'professionalism, knowledge, and genuine care',
  },
  {
    name: 'Susan',
    initial: 'S',
    quote: 'I had questions about Power of Attorney and Adam resolved my issue without me needing to come in! Highly recommend!',
    boldPhrase: 'resolved my issue without me needing to come in!',
  },
  {
    name: 'Jessica',
    initial: 'J',
    quote: 'Adam is a top notch professional. His work and business ethics are excellent, and he will do everything he can to make sure all his clients needs are met, and met in a timely fashion.',
    boldPhrase: 'everything he can to make sure all his clients needs are met',
  },
  {
    name: 'Lisa',
    initial: 'L',
    quote: 'Mr. Adam Engel provided me with legal counsel at a time in my life when I needed to get Power of Attorney for my sister\'s estate.',
    boldPhrase: 'at a time in my life when I needed',
  },
  {
    name: 'Patricia',
    initial: 'P',
    quote: 'Adam\'s amazing knowledge, integrity, attention to detail and winning spirit make any transaction a pleasure. Thank you Adam!',
    boldPhrase: 'knowledge, integrity, attention to detail',
  },
  {
    name: 'Michelle',
    initial: 'M',
    quote: 'Mr. Engel is extremely responsive & professional in dealing with our clients!',
    boldPhrase: 'extremely responsive & professional',
  },
  {
    name: 'Nancy',
    initial: 'N',
    quote: 'I had a very good experience with Mr. Engel. He was very thorough and expeditious in successfully dealing with the legal requirements involving updating my will.',
    boldPhrase: 'very thorough and expeditious',
  },
];
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/data/testimonials.ts && git commit -m "feat: add testimonial data for 15 verified reviews"
```

---

### Task 3: Create MagneticButton component

**Files:**
- Create: `src/components/shared/MagneticButton.tsx`

- [ ] **Step 1: Create the MagneticButton component**

Create `src/components/shared/MagneticButton.tsx`:

```tsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { CONTACT_INFO } from '../../constants/contact';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export function MagneticButton({ children, className = '', href }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href || CONTACT_INFO.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-gold-500 text-navy-900 font-bold rounded-lg transition-colors hover:bg-gold-600 ${className}`}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.98, y: 1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/components/shared/MagneticButton.tsx && git commit -m "feat: add MagneticButton with spring physics hover"
```

---

### Task 4: Create Hero section

**Files:**
- Create: `src/components/landing/Hero.tsx`

- [ ] **Step 1: Create the Hero component**

Create `src/components/landing/Hero.tsx`:

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function Hero() {
  return (
    <section className="bg-navy-900 min-h-[100dvh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-4"
            >
              Estate Planning Attorney — Leesburg, VA
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-none mb-5"
            >
              Don't Leave Your Family{' '}
              <br className="hidden sm:block" />
              Unprotected.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-base lg:text-lg leading-relaxed mb-7 max-w-[440px]"
            >
              Every year, thousands of families lose homes, savings, and custody
              battles because they didn't have a plan. A 30-minute call with
              Adam Engel can change that.
            </motion.p>

            <motion.div variants={fadeUp} className="mb-8">
              <MagneticButton className="px-8 py-3.5 text-[15px]">
                Book Your Free Consultation
              </MagneticButton>
              <p className="text-slate-500 text-[13px] mt-3">
                Free 30-min call &middot; No obligation &middot; No pressure
              </p>
            </motion.div>

            {/* Social proof bar */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 border-t border-white/[0.08]"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-500 text-base">&#9733;</span>
                ))}
              </div>
              <span className="text-slate-400 text-sm">
                <strong className="text-white">5.0</strong> — verified reviews
              </span>
              <span className="text-white/[0.15] hidden sm:inline">|</span>
              <span className="text-slate-400 text-sm">
                <strong className="text-white">15+</strong> years experience
              </span>
              <span className="text-white/[0.15] hidden sm:inline">|</span>
              <span className="text-slate-400 text-sm">VA & DC</span>
            </motion.div>
          </motion.div>

          {/* Right: Adam's photo */}
          <motion.div
            className="flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
          >
            <div className="relative w-full max-w-[380px] aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-navy-700 to-navy-900 border border-gold-500/10">
              <img
                src="https://www.engellawoffices.com/wp-content/uploads/2024/01/adam-engel.jpg"
                alt="Adam Engel, Estate Planning Attorney"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/components/landing/Hero.tsx && git commit -m "feat: add split-screen Hero with social proof bar"
```

---

### Task 5: Create ProblemAgitation section

**Files:**
- Create: `src/components/landing/ProblemAgitation.tsx`

- [ ] **Step 1: Create the ProblemAgitation component**

Create `src/components/landing/ProblemAgitation.tsx`:

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';

const problems = [
  { num: 1, text: 'A judge picks who raises your kids.' },
  { num: 2, text: 'Your family waits 6–18 months in probate.' },
  { num: 3, text: 'Your assets go to people you never intended.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function ProblemAgitation() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[600px]">
          <motion.p
            className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Without a plan
          </motion.p>
          <motion.h2
            className="text-[28px] sm:text-[32px] font-extrabold text-navy-900 tracking-tight leading-tight mb-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            The State Decides Everything.
          </motion.h2>

          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {problems.map((p) => (
              <motion.div
                key={p.num}
                variants={fadeUp}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-500 text-base font-bold">{p.num}</span>
                </div>
                <p className="text-navy-900 text-base font-semibold">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Bridge */}
          <motion.div
            className="mt-9 bg-navy-900 rounded-[10px] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
          >
            <p className="text-white text-[15px]">
              All preventable. <strong>One conversation.</strong>
            </p>
            <MagneticButton className="px-6 py-2.5 text-sm whitespace-nowrap">
              Book a Free Call
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/components/landing/ProblemAgitation.tsx && git commit -m "feat: add ProblemAgitation section with stagger reveal"
```

---

### Task 6: Create ValueStack section

**Files:**
- Create: `src/components/landing/ValueStack.tsx`

- [ ] **Step 1: Create the ValueStack component**

Create `src/components/landing/ValueStack.tsx`:

```tsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MagneticButton } from '../shared/MagneticButton';

const items = [
  { name: 'Full estate plan review', price: '$300' },
  { name: 'Will vs. trust recommendation', price: '$200' },
  { name: 'Tax exposure assessment', price: '$250' },
  { name: 'Guardianship planning guidance', price: '$150' },
  { name: 'Power of attorney overview', price: '$150' },
  { name: 'Custom action plan for your situation', price: '$200' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export function ValueStack() {
  const revealRef = useRef(null);
  const revealInView = useInView(revealRef, { once: true, margin: '-50px' });

  return (
    <section className="bg-navy-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[580px]">
          <motion.p
            className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Your free consultation includes
          </motion.p>
          <motion.h2
            className="text-[26px] sm:text-[30px] font-extrabold text-white tracking-tight leading-tight mb-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            Everything You Need to
            <br />
            Protect Your Family.
          </motion.h2>

          {/* Line items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {items.map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUp}
                className="flex justify-between items-center py-4 border-b border-white/[0.06]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                  <span className="text-white text-[15px] font-medium">{item.name}</span>
                </div>
                <span className="text-slate-500 text-sm line-through">{item.price}</span>
              </motion.div>
            ))}

            {/* Total */}
            <motion.div
              variants={fadeUp}
              className="flex justify-between items-center pt-5"
            >
              <span className="text-slate-400 text-sm font-medium">Total value</span>
              <span className="text-slate-500 text-lg font-semibold line-through">$1,250</span>
            </motion.div>
          </motion.div>

          {/* The reveal */}
          <motion.div
            ref={revealRef}
            className="mt-6 bg-gold-500/[0.08] border border-gold-500/20 rounded-[10px] p-7 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={revealInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <p className="text-slate-400 text-sm mb-2">Your cost today</p>
            <motion.p
              className="text-gold-500 text-[42px] font-extrabold tracking-tight mb-1"
              initial={{ scale: 0.8 }}
              animate={revealInView ? { scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.15 }}
            >
              Free
            </motion.p>
            <p className="text-slate-500 text-[13px] mb-6">
              30-minute consultation with Adam Engel
            </p>
            <MagneticButton className="px-9 py-3.5 text-[15px]">
              Claim Your Free Consultation
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/components/landing/ValueStack.tsx && git commit -m "feat: add ValueStack with price anchoring and Free reveal"
```

---

### Task 7: Create TestimonialMarquee section

**Files:**
- Create: `src/components/landing/TestimonialMarquee.tsx`

- [ ] **Step 1: Create the TestimonialMarquee component**

Create `src/components/landing/TestimonialMarquee.tsx`:

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ROW_1_TESTIMONIALS, ROW_2_TESTIMONIALS, type Testimonial } from '../../data/testimonials';

function TestimonialCard({ t }: { t: Testimonial }) {
  const parts = t.quote.split(t.boldPhrase);
  return (
    <div className="min-w-[280px] sm:min-w-[300px] max-w-[340px] bg-white border border-slate-200/80 rounded-xl p-5 flex-shrink-0">
      <div className="flex gap-0.5 mb-2.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-gold-500 text-[13px]">&#9733;</span>
        ))}
      </div>
      <p className="text-slate-700 text-[13px] leading-[1.7] mb-3.5">
        &ldquo;{parts[0]}<strong>{t.boldPhrase}</strong>{parts[1] || ''}&rdquo;
      </p>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-navy-900 flex items-center justify-center">
          <span className="text-gold-500 text-[11px] font-bold">{t.initial}</span>
        </div>
        <span className="text-navy-900 text-xs font-semibold">{t.name}</span>
        <span className="text-slate-400 text-[11px]">&middot; Verified</span>
      </div>
    </div>
  );
}

function MarqueeRow({ testimonials, direction }: { testimonials: Testimonial[]; direction: 'left' | 'right' }) {
  const doubled = [...testimonials, ...testimonials];
  const animClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="relative overflow-hidden">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

      <div className={`flex gap-4 ${animClass} pause-on-hover`}>
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-9">
        <motion.p
          className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Don't take our word for it
        </motion.p>
        <motion.h2
          className="text-[28px] sm:text-[30px] font-extrabold text-navy-900 tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          Hear From Our Clients.
        </motion.h2>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeRow testimonials={ROW_1_TESTIMONIALS} direction="left" />
        <MarqueeRow testimonials={ROW_2_TESTIMONIALS} direction="right" />
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/components/landing/TestimonialMarquee.tsx && git commit -m "feat: add infinite 2-row testimonial marquee with all 15 reviews"
```

---

### Task 8: Create MeetAdam section

**Files:**
- Create: `src/components/landing/MeetAdam.tsx`

- [ ] **Step 1: Create the MeetAdam component**

Create `src/components/landing/MeetAdam.tsx`:

```tsx
import React from 'react';
import { motion } from 'framer-motion';

export function MeetAdam() {
  return (
    <section className="bg-navy-900 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <p className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-3">
              Meet your attorney
            </p>
            <h2 className="text-[26px] sm:text-[28px] font-extrabold text-white tracking-tight mb-5">
              Adam Engel, Esq.
            </h2>
            <p className="text-slate-400 text-[15px] leading-[1.8] mb-6 max-w-[480px]">
              15+ years helping families across Virginia and DC protect what matters
              most. Adam's approach is simple — listen first, explain clearly, build
              a plan that actually works for your life.
            </p>

            {/* Credentials */}
            <div className="flex gap-6 mb-7">
              <div>
                <p className="text-slate-500 text-[11px] uppercase tracking-[1px] mb-1">Education</p>
                <p className="text-white text-[13px] font-medium">J.D., Loyola Law School</p>
                <p className="text-slate-400 text-[13px]">B.A., UCLA</p>
              </div>
              <div className="w-px bg-white/[0.08]" />
              <div>
                <p className="text-slate-500 text-[11px] uppercase tracking-[1px] mb-1">Licensed</p>
                <p className="text-white text-[13px] font-medium">Virginia State Bar</p>
                <p className="text-slate-400 text-[13px]">District of Columbia Bar</p>
              </div>
            </div>

            {/* Guarantee box */}
            <div className="bg-gold-500/[0.06] border border-gold-500/[0.15] rounded-[10px] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
              <p className="text-white text-[15px] font-semibold mb-1.5">Zero-risk guarantee</p>
              <p className="text-slate-400 text-sm leading-[1.7]">
                Your consultation is free. No obligation. No sales pitch. If Adam can
                help, he'll tell you how. If he can't, he'll point you to someone who can.
              </p>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            className="flex items-center justify-center lg:justify-end order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
          >
            <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-b from-navy-700 to-navy-900 border border-gold-500/10">
              <img
                src="https://www.engellawoffices.com/wp-content/uploads/2024/01/adam-engel.jpg"
                alt="Adam Engel, Estate Planning Attorney"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/components/landing/MeetAdam.tsx && git commit -m "feat: add MeetAdam section with guarantee box"
```

---

### Task 9: Create FinalCTA section

**Files:**
- Create: `src/components/landing/FinalCTA.tsx`

- [ ] **Step 1: Create the FinalCTA component**

Create `src/components/landing/FinalCTA.tsx`:

```tsx
import React from 'react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../shared/MagneticButton';
import { CONTACT_INFO } from '../../constants/contact';

export function FinalCTA() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-[580px] mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-navy-900 tracking-tight leading-tight mb-3">
            Your Family's Future.
            <br />
            One Call Away.
          </h2>
          <p className="text-slate-500 text-[15px] mb-8">
            30 minutes. Free. No obligation.
          </p>

          <MagneticButton className="px-10 py-4 text-base">
            Book Your Free Consultation
          </MagneticButton>

          <p className="text-slate-400 text-[13px] mt-4 mb-9">
            or call directly:{' '}
            <a
              href={`tel:${CONTACT_INFO.phone.link}`}
              className="text-navy-900 font-semibold hover:text-gold-500 transition-colors"
            >
              {CONTACT_INFO.phone.display}
            </a>
          </p>

          {/* Trust badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 pt-6 border-t border-slate-200">
            <div className="text-center">
              <p className="text-navy-900 text-xl font-extrabold">15+</p>
              <p className="text-slate-400 text-[11px] uppercase tracking-[1px]">Years experience</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="flex gap-0.5 justify-center mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold-500 text-base">&#9733;</span>
                ))}
              </div>
              <p className="text-slate-400 text-[11px] uppercase tracking-[1px]">Client rating</p>
            </div>
            <div className="hidden sm:block w-px h-8 bg-slate-200" />
            <div className="text-center">
              <p className="text-navy-900 text-xl font-extrabold">VA & DC</p>
              <p className="text-slate-400 text-[11px] uppercase tracking-[1px]">Licensed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

- [ ] **Step 3: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/components/landing/FinalCTA.tsx && git commit -m "feat: add FinalCTA with trust badges and phone fallback"
```

---

### Task 10: Create LandingPage and wire up App.tsx + Navigation

**Files:**
- Create: `src/components/landing/LandingPage.tsx`
- Modify: `src/App.tsx`
- Modify: `src/components/shared/Navigation.tsx`

- [ ] **Step 1: Create LandingPage component**

Create `src/components/landing/LandingPage.tsx`:

```tsx
import React from 'react';
import { Hero } from './Hero';
import { ProblemAgitation } from './ProblemAgitation';
import { ValueStack } from './ValueStack';
import { TestimonialMarquee } from './TestimonialMarquee';
import { MeetAdam } from './MeetAdam';
import { FinalCTA } from './FinalCTA';

export function LandingPage() {
  return (
    <>
      <Hero />
      <ProblemAgitation />
      <ValueStack />
      <TestimonialMarquee />
      <div id="about">
        <MeetAdam />
      </div>
      <div id="contact">
        <FinalCTA />
      </div>
    </>
  );
}
```

- [ ] **Step 2: Update App.tsx**

Replace `src/App.tsx` with:

```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LandingPage } from './components/landing/LandingPage';
import { BlogPage } from './pages/blog';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { CategoryPage } from './pages/blog/CategoryPage';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { Disclaimer } from './pages/legal/Disclaimer';
import { TermsOfService } from './pages/legal/TermsOfService';

export default function App() {
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <Router basename={basename}>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/category/:category" element={<CategoryPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </Layout>
    </Router>
  );
}
```

- [ ] **Step 3: Update Navigation.tsx**

Replace `src/components/shared/Navigation.tsx` with:

```tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ConsultationButton } from './ConsultationButton';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-navy-900 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/assets/logo.png" alt="Angel Trust" className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold text-white">Angel Trust</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, 'about')}
              className="text-gray-200 hover:text-gold-500 transition-colors text-sm"
            >
              About
            </a>
            <Link
              to="/blog"
              className="text-gray-200 hover:text-gold-500 transition-colors text-sm"
            >
              Blog
            </Link>
            <ConsultationButton />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/[0.06]">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, 'about')}
              className="block px-3 py-2 text-base text-gray-200 hover:text-gold-500 transition-colors"
            >
              About
            </a>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base text-gray-200 hover:text-gold-500 transition-colors"
            >
              Blog
            </Link>
            <div className="px-3 py-2">
              <ConsultationButton className="w-full text-center" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 5: Visual verification**

```bash
cd /Users/davidhamilton/AngelTrust && npm run dev
```

Open http://localhost:5173 and verify:
- Hero: split-screen, headline left, photo right, social proof bar, gold CTA
- Problem section: 3 numbered one-liners, navy bridge banner
- Value stack: 6 line items with crossed prices, "Free" reveal
- Testimonial marquee: 2 rows scrolling opposite directions, pauses on hover
- Meet Adam: photo + bio + guarantee box
- Final CTA: centered, trust badges, phone number
- Nav: logo, About, Blog, Free Consultation button
- Footer: unchanged, contact + legal links
- Mobile: all sections stack to single column, no horizontal scroll

- [ ] **Step 6: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/components/landing/LandingPage.tsx src/App.tsx src/components/shared/Navigation.tsx && git commit -m "feat: wire up landing page funnel and simplify navigation"
```

---

### Task 11: Final polish and cleanup

**Files:**
- Modify: `src/components/shared/Footer.tsx` (minor)

- [ ] **Step 1: Clean up Footer**

In `src/components/shared/Footer.tsx`, replace the tagline text:

Replace:
```
Protecting your legacy through expert estate planning in Virginia
& DC.
```
With:
```
Estate planning attorney helping families across Virginia & DC.
```

This aligns the footer copy with the new landing page tone — concrete, not aspirational.

- [ ] **Step 2: Full build verification**

```bash
cd /Users/davidhamilton/AngelTrust && npm run build
```

Expected: Build succeeds with zero errors and zero warnings.

- [ ] **Step 3: Final visual check**

```bash
cd /Users/davidhamilton/AngelTrust && npm run dev
```

Verify the complete page flow:
1. Dark hero → Light problems → Dark value stack → Light testimonials → Dark meet Adam → Light final CTA → Dark footer
2. All Calendly links work (open in new tab)
3. Phone number is clickable
4. Blog link navigates to /blog
5. Mobile responsive — no horizontal overflow on any section
6. Marquee loops seamlessly without visible seam
7. Scroll animations trigger once per section

- [ ] **Step 4: Commit**

```bash
cd /Users/davidhamilton/AngelTrust && git add src/components/shared/Footer.tsx && git commit -m "chore: align footer copy with new landing page tone"
```
