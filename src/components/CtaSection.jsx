import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';
import fleetHero from '../assets/fleet-hero.png';

export default function CtaSection() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={fleetHero}
          alt=""
          aria-hidden
          className="w-full h-full object-cover object-[50%_45%] scale-105"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(17,17,16,0.97) 0%, rgba(17,17,16,0.92) 100%)' }} />
        {/* Subtle cream tint at the edges */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #f5f3ed 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#a09d97] mb-8"
          >
            Ready to start
          </motion.p>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.65, ease, delay: 0.05 }}
            className="font-bold text-[#f5f3ed] tracking-tight leading-[1.05] mb-8"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 5.5rem)' }}
          >
            Let us manage<br />
            your fleet<br />
            <span style={{ color: '#a09d97' }}>for you.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#get-started"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-[#f5f3ed] hover:bg-white text-[#111110] font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 group"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="tel:+264642205345"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 border border-[#6b6860] hover:border-[#a09d97] text-[#c8c5bf] hover:text-[#f5f3ed] font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200"
            >
              +264 64 20 5345
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
