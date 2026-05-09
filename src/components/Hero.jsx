import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, ease } from '../lib/motion';
import fleetCars from '../assets/fleet-cars.png';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: '#f5f3ed' }}
    >
      {/* ── LEFT — content ── */}
      <div className="relative z-10 w-full lg:w-[52%] flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 pt-28 pb-20 lg:min-h-screen">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1b3a6b] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#3d3b37]">
              A Partner of Afrirent Holdings (Pty) Ltd
            </span>
          </motion.div>

          {/* Headline — editorial scale */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
            className="font-bold text-[#111110] leading-[1.0] tracking-[-0.03em] mb-7"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Vehicle access.<br />
            Fleet management.<br />
            <span className="text-[#6b6860]">Simplified.</span>
          </motion.h1>

          {/* One-line sub */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease, delay: 0.12 }}
            className="text-lg text-[#3d3b37] leading-relaxed mb-10 max-w-sm"
          >
            Whether you own a vehicle, need one, or want to trade in — Namrent handles the rest.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.a
              href="#get-started"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-[#111110] hover:bg-[#1a1917] text-[#f5f3ed] font-semibold text-[15px] px-7 py-4 rounded-xl transition-all duration-200 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="#solutions"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-[#e0ddd5] hover:border-[#ccc8be] bg-transparent hover:bg-[#eeebe2] text-[#1a1917] font-semibold text-[15px] px-7 py-4 rounded-xl transition-all duration-200"
            >
              Our Solutions
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-8 left-6 md:left-12 lg:left-16 xl:left-24 flex items-center gap-2 text-[#6b6860]"
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
        </motion.div>
      </div>

      {/* ── RIGHT — fleet photo ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[52%] overflow-hidden">
        <img
          src={fleetCars}
          alt="NamRent branded fleet vehicles"
          className="w-full h-full object-cover object-[55%_50%]"
        />
        {/* Cream fade from left to blend with content panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f3ed] via-[#f5f3ed]/50 lg:via-[#f5f3ed]/10 to-transparent" />
        {/* Subtle top and bottom fades */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#f5f3ed]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f3ed]/60 to-transparent" />

        {/* Floating stat card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.65, ease }}
          className="absolute bottom-10 right-8 hidden sm:flex flex-col bg-[#f5f3ed]/90 backdrop-blur-xl border border-[#e0ddd5] rounded-2xl p-5 shadow-xl gap-2.5 min-w-[200px]"
        >
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold text-[#6b6860] uppercase tracking-widest">Fleet Operations</p>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-600 font-semibold">Live</span>
            </span>
          </div>
          <div>
            <p className="text-3xl font-black text-[#111110] tracking-tight leading-none">10,000+</p>
            <p className="text-sm text-[#3d3b37] mt-0.5">vehicles managed daily</p>
          </div>
          <div className="w-full h-px bg-[#e0ddd5]" />
          <p className="text-[10px] text-[#6b6860]">Est. 2012 · Walvis Bay, Namibia</p>
        </motion.div>
      </div>
    </section>
  );
}
