import { ArrowRight, ChevronDown, TrendingUp, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, ease } from '../lib/motion';
import fleetCars from '../assets/fleet-cars.png';

const floatingStats = [
  { icon: TrendingUp, value: '10,000+', label: 'Vehicles managed daily', color: 'text-emerald-400' },
  { icon: Clock,      value: '24 / 7',  label: 'Bureau support',         color: 'text-blue-400'   },
  { icon: Shield,     value: '100%',    label: 'Black-owned company',     color: 'text-violet-400' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-950"
    >
      {/* ── LEFT PANEL — content ── */}
      <div className="relative z-10 w-full lg:w-[48%] flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 pt-28 pb-20 lg:pt-0 lg:pb-0 min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-[#0b1930] to-gray-950 pointer-events-none" />
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-blue-700 opacity-[0.13] blur-[110px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full bg-cyan-600 opacity-[0.06] blur-[80px] pointer-events-none" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2.5 border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm text-blue-300 text-xs font-semibold tracking-[0.12em] uppercase px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            A Partner of Afrirent Holdings (Pty) Ltd
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
            className="text-5xl sm:text-6xl xl:text-[64px] font-bold text-white leading-[1.05] tracking-[-0.025em] mb-6"
          >
            End-to-end fleet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              solutions
            </span>{' '}
            for Africa.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.55, ease, delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed mb-10 max-w-md"
          >
            From full maintenance leases to vehicle tracking and fuel management —
            NamRent delivers seamless mobility solutions tailored to your operation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.14 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] px-7 py-4 rounded-xl shadow-[0_4px_28px_rgba(37,99,235,0.45)] hover:shadow-[0_6px_36px_rgba(37,99,235,0.65)] transition-all duration-200 group"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-[15px] px-7 py-4 rounded-xl transition-all duration-200"
            >
              Our Services
            </motion.a>
          </motion.div>

          {/* Stat strip */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.2 }}
            className="flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]"
          >
            {floatingStats.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="flex items-center gap-3 px-5 py-4 flex-1">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Icon className={`w-4 h-4 ${color}`} strokeWidth={2} />
                </div>
                <div>
                  <p className="text-base font-bold text-white leading-none">{value}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── RIGHT PANEL — branded fleet image ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[56%] overflow-hidden">
        <img
          src={fleetCars}
          alt="NamRent branded fleet vehicles"
          className="w-full h-full object-cover object-[55%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 lg:via-gray-950/20 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-950/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gray-950/80 to-transparent" />
        <div className="absolute inset-0 bg-blue-950/15 mix-blend-multiply" />

        {/* Floating stat card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.85, duration: 0.65, ease }}
          className="absolute bottom-10 right-8 hidden sm:flex flex-col bg-white/[0.09] backdrop-blur-2xl border border-white/[0.18] rounded-2xl p-5 shadow-2xl gap-3 min-w-[210px]"
        >
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fleet Operations</p>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399] animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-semibold">Live</span>
            </span>
          </div>
          <div>
            <p className="text-3xl font-black text-white tracking-tight leading-none">10,000+</p>
            <p className="text-sm text-gray-300 mt-0.5">vehicles managed daily</p>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '82%' }}
              transition={{ delay: 1.4, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
            />
          </div>
          <p className="text-[10px] text-gray-500">Est. 2012 · Walvis Bay, Namibia</p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-6 md:left-12 lg:left-16 xl:left-24 z-20 flex items-center gap-2 text-gray-600"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
        <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
