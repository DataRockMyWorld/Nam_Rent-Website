import { motion } from 'framer-motion';
import { viewport, ease } from '../lib/motion';

const steps = [
  { num: '01', title: 'Tell us who you are',                   above: true  },
  { num: '02', title: 'Share your contact details',            above: false },
  { num: '03', title: 'Describe your fleet requirement',       above: true  },
  { num: '04', title: 'Select the services you need',          above: false },
  { num: '05', title: 'Our team responds within 24 hours',     above: true  },
];

/* ─── Node component ─── */
function Node({ num, index }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={viewport}
      transition={{
        delay: 0.15 + index * 0.32,
        type: 'spring',
        stiffness: 240,
        damping: 22,
      }}
      className="relative z-10 flex items-center justify-center"
    >
      {/* Pulse ring — fires once after node appears */}
      <motion.div
        initial={{ scale: 1, opacity: 0.6 }}
        whileInView={{ scale: 2.2, opacity: 0 }}
        viewport={viewport}
        transition={{ delay: 0.4 + index * 0.32, duration: 0.7, ease: 'easeOut' }}
        className="absolute w-10 h-10 rounded-full bg-[#111110] pointer-events-none"
      />

      {/* Outer cream ring */}
      <div className="w-10 h-10 rounded-full bg-[#f5f3ed] border-2 border-[#111110] flex items-center justify-center shadow-sm">
        {/* Inner filled dot */}
        <div className="w-5 h-5 rounded-full bg-[#111110] flex items-center justify-center">
          <span className="text-[7px] font-black text-[#f5f3ed] tracking-widest leading-none">
            {index + 1}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Step label ─── */
function Label({ title, index, above }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: above ? 10 : -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ delay: 0.35 + index * 0.32, duration: 0.5, ease }}
      className="text-center text-sm font-medium text-[#111110] leading-snug max-w-[110px] mx-auto"
    >
      {title}
    </motion.p>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-[#e0ddd5]" style={{ backgroundColor: '#f5f3ed' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#3d3b37] mb-4">
              The Process
            </p>
            <h2
              className="font-bold text-[#111110] tracking-tight leading-[1.05]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              How it works.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="flex items-center gap-4 self-start md:self-auto"
          >
            <p className="text-[#3d3b37] text-sm max-w-[180px] leading-relaxed">
              A streamlined five-step engagement process. No complex documentation upfront.
            </p>
            <motion.a
              href="#get-started"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 inline-flex items-center gap-1.5 bg-[#111110] hover:bg-[#1a1917] text-[#f5f3ed] text-xs font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              Start enquiry →
            </motion.a>
          </motion.div>
        </div>

        {/* ─── DESKTOP: Horizontal timeline ─── */}
        <div className="hidden lg:block">
          {/* 5-column grid — each step owns its column */}
          <div className="grid grid-cols-5">

            {/* ROW 1 — Labels above (01, 03, 05) */}
            {steps.map(({ num, title, above }) => (
              <div key={`top-${num}`} className="flex items-end justify-center h-24 pb-6">
                {above && <Label title={title} index={parseInt(num) - 1} above={true} />}
              </div>
            ))}

          </div>

          {/* ROW 2 — Line + nodes */}
          <div className="relative grid grid-cols-5 items-center">

            {/* Animated line — runs between centers of first and last node */}
            {/* Offset by 10% (half a column) on each side */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-px"
              style={{ left: '10%', right: '10%' }}
            >
              {/* Track */}
              <div className="absolute inset-0 bg-[#e0ddd5]" />
              {/* Fill */}
              <motion.div
                className="absolute inset-y-0 left-0 right-0 bg-[#111110] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              />
            </div>

            {/* Nodes */}
            {steps.map(({ num }, i) => (
              <div key={`node-${num}`} className="flex justify-center py-2">
                <Node num={num} index={i} />
              </div>
            ))}
          </div>

          {/* ROW 3 — Labels below (02, 04) */}
          <div className="grid grid-cols-5">
            {steps.map(({ num, title, above }) => (
              <div key={`bot-${num}`} className="flex items-start justify-center h-24 pt-6">
                {!above && <Label title={title} index={parseInt(num) - 1} above={false} />}
              </div>
            ))}
          </div>
        </div>

        {/* ─── MOBILE: Vertical list ─── */}
        <div className="lg:hidden flex flex-col">
          {/* Vertical track */}
          <div className="relative flex flex-col pl-8">
            {/* Track line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#e0ddd5]" />
            {/* Animated fill */}
            <motion.div
              className="absolute left-[19px] top-2 w-px bg-[#111110] origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewport}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
              style={{ bottom: '8px' }}
            />

            {steps.map(({ num, title }, i) => (
              <div key={num} className="relative flex items-start gap-6 pb-10 last:pb-0">
                {/* Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewport}
                  transition={{ delay: 0.1 + i * 0.2, type: 'spring', stiffness: 260, damping: 22 }}
                  className="flex-shrink-0 -ml-8 w-10 h-10 rounded-full bg-[#f5f3ed] border-2 border-[#111110] flex items-center justify-center"
                >
                  <div className="w-5 h-5 rounded-full bg-[#111110] flex items-center justify-center">
                    <span className="text-[7px] font-black text-[#f5f3ed]">{i + 1}</span>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ delay: 0.2 + i * 0.2, duration: 0.5, ease }}
                  className="pt-2"
                >
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#6b6860] block mb-1">{num}</span>
                  <p className="text-base font-semibold text-[#111110]">{title}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
