import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, staggerContainer, viewport, ease } from '../lib/motion';

const highlights = [
  'Founded in 2012 by Synthia Nicolene Swartz',
  '100% black-owned, proudly Namibian company',
  'Partner of Afrirent Holdings (Pty) Ltd, South Africa',
  'Innovating to resolve transport problems before they arise',
];

const miniStats = [
  { value: '2012', label: 'Founded'     },
  { value: '100%', label: 'Black-Owned' },
  { value: '8',    label: 'Services'    },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── Visual panel ── */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.65, ease }}
            className="relative order-2 lg:order-1"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #1d4ed8 100%)' }}
            >
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <svg viewBox="0 0 400 300" className="w-full opacity-[0.13]" fill="none">
                <circle cx="200" cy="150" r="110" stroke="white" strokeWidth="0.8" />
                <circle cx="200" cy="150" r="65" stroke="white" strokeWidth="0.8" strokeDasharray="5 3" />
                <circle cx="200" cy="150" r="22" fill="white" opacity="0.5" />
                {[0,60,120,180,240,300].map((deg) => {
                  const r = (deg * Math.PI) / 180;
                  return <line key={deg} x1={200+22*Math.cos(r)} y1={150+22*Math.sin(r)} x2={200+110*Math.cos(r)} y2={150+110*Math.sin(r)} stroke="white" strokeWidth="0.6" />;
                })}
                {[0,120,240].map((deg) => {
                  const r = (deg * Math.PI) / 180;
                  return <circle key={deg} cx={200+110*Math.cos(r)} cy={150+110*Math.sin(r)} r="9" fill="#60a5fa" />;
                })}
                {[60,180,300].map((deg) => {
                  const r = (deg * Math.PI) / 180;
                  return <circle key={deg} cx={200+65*Math.cos(r)} cy={150+65*Math.sin(r)} r="6" fill="white" opacity="0.8" />;
                })}
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-10 pb-10 pt-6">
                <p className="text-6xl font-black tracking-tighter leading-none mb-1">10K+</p>
                <p className="text-sm font-medium text-blue-200 mb-8">Vehicles Managed Daily</p>
                <div className="grid grid-cols-3 gap-0 w-full max-w-xs border border-white/10 rounded-2xl overflow-hidden">
                  {miniStats.map(({ value, label }) => (
                    <div key={label} className="text-center px-4 py-4 border-r border-white/10 last:border-0">
                      <p className="text-xl font-bold">{value}</p>
                      <p className="text-[11px] text-blue-300 mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.4, delay: 0.35, ease }}
              className="absolute -bottom-5 -right-4 bg-white rounded-2xl shadow-xl px-5 py-3.5 border border-gray-100"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-0.5">Headquartered in</p>
              <p className="text-sm font-bold text-gray-900">Walvis Bay, Namibia</p>
            </motion.div>
          </motion.div>

          {/* ── Content ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="order-1 lg:order-2"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-4"
            >
              About NamRent
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-5"
            >
              Built for Africa.<br />
              <span className="text-gray-400">Driven by purpose.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: 0.08 }}
              className="text-base text-gray-500 leading-relaxed mb-4 max-w-md"
            >
              NamRent was founded in 2012 to provide professional, affordable fleet
              management while advancing black economic empowerment. We are a
              100% black-owned company with a core focus on the transport industry.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              className="text-base text-gray-500 leading-relaxed mb-10 max-w-md"
            >
              As a proud partner of Afrirent Holdings (Pty) Ltd, we are ideally
              positioned to provide total fleet management solutions — from full
              maintenance leases to fuel supply and vehicle tracking.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-3.5 mb-10">
              {highlights.map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  transition={{ duration: 0.4, ease }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-[18px] h-[18px] text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.a
              href="#contact"
              variants={fadeUp}
              transition={{ duration: 0.4, ease }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
            >
              Get in touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
