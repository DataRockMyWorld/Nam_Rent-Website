import { ArrowRight, Settings, FileText, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';

/*
  Three cards — genuinely distinct tonal identities:
  Card 1  Existing Vehicle  →  Ink dark   #111110   (authoritative, "we handle it")
  Card 2  New Vehicle       →  Cream light #f5f3ed   (fresh start, inverted — draws the eye)
  Card 3  Trade-In          →  Warm navy  #1b3a6b   (confident, transitional)
*/

const NAV = '#1b3a6b';   // warm deep navy — the new accent

const options = [
  {
    num: '01',
    icon: Settings,
    badge: 'Already have a vehicle',
    title: 'Fleet Management',
    line: 'We manage what you own — maintenance, tracking, licensing, and insurance.',
    services: ['Maintenance', 'GPS Tracking', 'Insurance support', 'Licensing', 'Fleet management'],
    bg: '#111110',
    topBar: '#f5f3ed22',           // subtle warm line
    text: '#f5f3ed',
    muted: '#a09d97',
    border: 'rgba(255,255,255,0.07)',
    chip: 'rgba(255,255,255,0.06)',
    cta: '#a09d97',
    ctaHover: '#f5f3ed',
    label: 'Manage my vehicle',
  },
  {
    num: '02',
    icon: FileText,
    badge: 'Need a new vehicle',
    title: 'Vehicle Access',
    line: 'We help you procure the right vehicle and manage it from day one.',
    services: ['Procurement support', 'Maintenance', 'GPS Tracking', 'Insurance support', 'Fleet management'],
    types: ['Sedan', 'SUV', 'Pickup', 'Van', 'Other'],
    bg: '#f5f3ed',
    topBar: NAV,                    // strong navy accent stripe
    text: '#111110',
    muted: '#3d3b37',
    border: '#e0ddd5',
    chip: '#e8e5dc',
    cta: NAV,
    ctaHover: '#152d54',
    label: 'Get a new vehicle',
  },
  {
    num: '03',
    icon: RefreshCw,
    badge: 'Trade in your vehicle',
    title: 'Trade-In & Upgrade',
    line: 'Trade your existing vehicle for a newer one with full fleet management.',
    services: ['Trade-in support', 'Procurement', 'Maintenance', 'GPS Tracking', 'Fleet management'],
    bg: '#1b3a6b',
    topBar: 'rgba(255,255,255,0.15)',
    text: '#f5f3ed',
    muted: '#8baad4',
    border: 'rgba(255,255,255,0.1)',
    chip: 'rgba(255,255,255,0.08)',
    cta: '#c8daf4',
    ctaHover: '#f5f3ed',
    label: 'Start my trade-in',
  },
];

export default function ServiceOptions() {
  return (
    <section id="solutions" className="py-24 border-t border-[#e0ddd5]" style={{ backgroundColor: '#eeebe2' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-14"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#3d3b37] mb-4"
          >
            Vehicle Solutions
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="font-bold text-[#111110] tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Three pathways.<br />
            <span style={{ color: '#a09d97' }}>One partner.</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {options.map((opt, i) => (
            <motion.div
              key={opt.num}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden flex flex-col"
              style={{ backgroundColor: opt.bg }}
            >
              {/* Top accent bar */}
              <div className="h-[3px] w-full" style={{ backgroundColor: opt.topBar }} />

              {/* Ghost number */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-3 leading-none font-black select-none pointer-events-none"
                style={{ fontSize: '160px', color: 'rgba(128,128,128,0.05)' }}
              >
                {opt.num}
              </div>

              <div className="relative z-10 p-8 flex flex-col flex-1 gap-6">
                {/* Badge + icon row */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border"
                    style={{ color: opt.muted, borderColor: opt.border, backgroundColor: opt.chip }}
                  >
                    {opt.badge}
                  </span>
                  <opt.icon className="w-4.5 h-4.5 opacity-30" style={{ color: opt.text }} strokeWidth={1.5} />
                </div>

                {/* Step + title */}
                <div>
                  <p className="text-[11px] font-bold tracking-widest uppercase mb-2" style={{ color: opt.muted }}>
                    {opt.num}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight mb-3" style={{ color: opt.text }}>
                    {opt.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: opt.muted }}>
                    {opt.line}
                  </p>
                </div>

                {/* Vehicle types — option 2 only */}
                {opt.types && (
                  <div className="flex flex-wrap gap-1.5">
                    {opt.types.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full border"
                        style={{ color: opt.muted, borderColor: opt.border, backgroundColor: opt.chip }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Services list */}
                <div className="flex flex-col gap-1.5 flex-1">
                  {opt.services.map((s) => (
                    <div key={s} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: opt.muted }} />
                      <span className="text-sm" style={{ color: opt.muted }}>{s}</span>
                    </div>
                  ))}
                </div>

                {/* Duration chips */}
                <div className="flex gap-2">
                  {['3 Years', '5 Years'].map((d) => (
                    <span
                      key={d}
                      className="text-xs px-3.5 py-1.5 rounded-full border"
                      style={{ color: opt.muted, borderColor: opt.border, backgroundColor: opt.chip }}
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-70 group"
                  style={{ color: opt.cta }}
                >
                  {opt.label}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10 text-center"
        >
          <motion.a
            href="#get-started"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 text-sm font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 group"
            style={{ backgroundColor: '#111110', color: '#f5f3ed' }}
          >
            Request a Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
