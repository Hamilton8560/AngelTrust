import React from 'react';
import { motion } from 'framer-motion';
import { ALL_TESTIMONIALS, type Testimonial } from '../../data/testimonials';

function TestimonialCard({ t, index }: { t: Testimonial; index: number }) {
  const parts = t.quote.split(t.boldPhrase);
  return (
    <motion.div
      className="break-inside-avoid mb-4 bg-white border border-slate-200/80 rounded-xl p-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: index * 0.04,
      }}
    >
      <div className="flex gap-0.5 mb-2.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-gold-500 text-[13px]">&#9733;</span>
        ))}
      </div>
      <p className="text-slate-700 text-[13px] leading-[1.75] mb-3.5">
        &ldquo;{parts[0]}<strong className="text-navy-900">{t.boldPhrase}</strong>{parts[1] || ''}&rdquo;
      </p>
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-navy-900 flex items-center justify-center">
          <span className="text-gold-500 text-[11px] font-bold">{t.initial}</span>
        </div>
        <span className="text-navy-900 text-xs font-semibold">{t.name}</span>
        <span className="text-slate-400 text-[11px]">&middot; Verified</span>
      </div>
    </motion.div>
  );
}

export function TestimonialWall() {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Stats strip */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20 items-end mb-14">
          <div>
            <motion.p
              className="text-gold-500 text-xs uppercase tracking-[2.5px] font-semibold mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Don't take our word for it
            </motion.p>
            <motion.h2
              className="text-3xl lg:text-4xl font-extrabold text-navy-900 tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              Hear From Our Clients.
            </motion.h2>
          </div>

          {/* Stats strip */}
          <motion.div
            className="flex flex-wrap items-center gap-8 lg:gap-12 lg:justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <p className="text-navy-900 text-3xl lg:text-4xl font-extrabold tracking-tight">15+</p>
              <p className="text-slate-400 text-[11px] uppercase tracking-[1.5px] mt-0.5">Years experience</p>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block" />
            <div>
              <div className="flex items-baseline gap-2">
                <p className="text-navy-900 text-3xl lg:text-4xl font-extrabold tracking-tight">5.0</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-sm">&#9733;</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-400 text-[11px] uppercase tracking-[1.5px] mt-0.5">Client rating</p>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block" />
            <div>
              <p className="text-navy-900 text-3xl lg:text-4xl font-extrabold tracking-tight">VA & DC</p>
              <p className="text-slate-400 text-[11px] uppercase tracking-[1.5px] mt-0.5">Licensed</p>
            </div>
          </motion.div>
        </div>

        {/* Masonry grid — all 15 visible at once */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          {ALL_TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
