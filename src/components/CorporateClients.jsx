import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';

const stats = [
  { value: '10,000+', label: 'Vehicles under management' },
  { value: '24/7',    label: 'Emergency support'          },
  { value: '1',       label: 'Account, many vehicles'     },
  { value: '13+',     label: 'Years of fleet expertise'   },
];

export default function CorporateClients() {
  return (
    <section id="corporate" className="py-24 border-t border-[#2a2a28]" style={{ backgroundColor: '#111110' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              className="text-[11px] font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: '#a09d97' }}
            >
              Corporate &amp; Tender
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="font-bold tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#f5f3ed' }}
            >
              Fleet solutions<br />
              <span style={{ color: '#a09d97' }}>for businesses.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              className="text-base leading-relaxed mb-10 max-w-md"
              style={{ color: '#a09d97' }}
            >
              One account. Multiple vehicles. Consolidated maintenance, tracking, licensing,
              and invoicing — built for companies with structured fleet needs.
            </motion.p>
            <motion.a
              href="#get-started"
              variants={fadeUp}
              transition={{ duration: 0.4, ease }}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 group"
              style={{ backgroundColor: '#f5f3ed', color: '#111110' }}
            >
              Request a fleet consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#2a2a28' }}
          >
            {stats.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                transition={{ duration: 0.45, ease }}
                className="p-8"
                style={{ backgroundColor: '#111110' }}
              >
                <p
                  className="text-4xl font-black tracking-tighter leading-none mb-2"
                  style={{ color: '#f5f3ed' }}
                >
                  {value}
                </p>
                <p className="text-sm" style={{ color: '#a09d97' }}>{label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
