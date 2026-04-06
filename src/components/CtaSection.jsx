import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';
import fleetHero from '../assets/fleet-hero.png';

const bullets = [
  'Full Maintenance Lease available',
  'Deployed with 24-hour bureau support',
  '100% black-owned Namibian company',
];

export default function CtaSection() {
  return (
    <section className="relative py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img src={fleetHero} alt="" aria-hidden className="w-full h-full object-cover object-[50%_45%] scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#03112e]/97 via-[#0c1f4a]/95 to-[#091428]/97" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-blue-600 opacity-[0.08] blur-[140px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 border border-blue-400/30 bg-blue-400/10 text-blue-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Get Started Today
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-6"
          >
            Let us manage your{' '}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300">
              fleet operations.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed mb-10"
          >
            NamRent delivers a seamless mobility solution — from full maintenance leases to
            fuel supply, tracking, and regulatory management. One partner for your entire fleet.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.13 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
          >
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" strokeWidth={2} />
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.16 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base px-8 py-4 rounded-xl shadow-[0_4px_32px_rgba(37,99,235,0.55)] hover:shadow-[0_6px_40px_rgba(37,99,235,0.75)] transition-all duration-200 group"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="tel:+264642205345"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
            >
              Call +264 64 20 5345
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
