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
