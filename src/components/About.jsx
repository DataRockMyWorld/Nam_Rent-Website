import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';
import fleetCars from '../assets/fleet-cars.png';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#e0ddd5]" style={{ backgroundColor: '#f5f3ed' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl">
              <img
                src={fleetCars}
                alt="NamRent branded fleet vehicles"
                className="w-full h-full object-cover object-[55%_50%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/70 via-transparent to-transparent" />

              {/* Bottom info row */}
              <div className="absolute bottom-0 left-0 right-0 p-7 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#a09d97] mb-1">Headquartered</p>
                  <p className="text-lg font-bold text-white">Walvis Bay, Namibia</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#a09d97] mb-1">Founded</p>
                  <p className="text-lg font-bold text-white">2012</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Content */}
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
              className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6b6860] mb-5"
            >
              About NamRent
            </motion.p>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="font-bold text-[#111110] tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Trusted fleet operations<br />
              <span style={{ color: '#a09d97' }}>since 2012.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: 0.1 }}
              className="text-[#3d3b37] leading-relaxed mb-4 text-base max-w-md"
            >
              Founded in 2012, NamRent is a Namibian fleet operations and mobility solutions
              company with over a decade of enterprise fleet management experience.
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: 0.13 }}
              className="text-[#3d3b37] leading-relaxed mb-10 text-base max-w-md"
            >
              We deliver integrated fleet services — from full maintenance leasing and vehicle
              tracking to fuel management, regulatory administration, and full fleet outsourcing —
              enabling businesses to focus on core operations while we manage the vehicles that
              keep them moving.
            </motion.p>

            <motion.a
              href="#contact"
              variants={fadeUp}
              transition={{ duration: 0.4, ease }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#111110] hover:bg-[#1a1917] text-[#f5f3ed] text-sm font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 group"
            >
              Discuss your fleet requirements
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
