import { Fuel, Wrench, TrendingUp, Trophy, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, staggerContainer, viewport, ease } from '../lib/motion';
import fleetHero from '../assets/fleet-hero.png';

const benefits = [
  {
    icon:  Fuel,
    title: 'Save on fuel',
    body:  'Pre-authorised token-based fuel management with full transaction accountability eliminates waste, fraud, and unnecessary consumption.',
    tag:   'Fuel Savings',
  },
  {
    icon:  Wrench,
    title: 'Save on maintenance costs',
    body:  'Full maintenance lease structures and proactive servicing schedules keep your vehicles on the road and your maintenance budget in check.',
    tag:   'Cost Control',
  },
  {
    icon:  TrendingUp,
    title: 'Increase productivity & efficiency',
    body:  'Real-time tracking, route monitoring, and automated reporting give your team full visibility — enabling faster, smarter operational decisions.',
    tag:   'Productivity',
  },
  {
    icon:  Trophy,
    title: 'Improve competitiveness',
    body:  'Access to enterprise-grade fleet intelligence at an affordable cost levels the playing field and sharpens your competitive edge.',
    tag:   'Competitive Edge',
  },
  {
    icon:  Clock,
    title: 'Save on overtime claims',
    body:  'Accurate trip logs, driver behaviour tracking, and automated timesheets eliminate disputes and reduce inflated overtime claims.',
    tag:   'Labour Savings',
  },
  {
    icon:  ShieldCheck,
    title: 'Save on insurance',
    body:  'Incident management, driver safety monitoring, and accurate vehicle records lead to fewer claims and better insurance premiums.',
    tag:   'Risk Reduction',
  },
];

export default function Benefits() {
  return (
    <>
      {/* ── Image pull-quote banner ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={fleetHero}
          alt="Fleet equipment in operation"
          className="w-full h-full object-cover object-[50%_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-gray-950/30" />
        <div className="absolute inset-0 bg-blue-950/30 mix-blend-multiply" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease }}
              className="text-2xl md:text-4xl font-bold text-white max-w-2xl leading-snug tracking-tight"
            >
              "NamRent is geared and well-positioned to meet all your{' '}
              <span className="text-blue-300">end-to-end fleet management</span> needs."
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── Benefits section ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-20 items-start">

            {/* Sticky left */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: 0.6, ease }}
              className="lg:sticky lg:top-28"
            >
              <p className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-4">
                Client Benefits
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
                What our clients<br />
                <span className="text-gray-400">gain every day.</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-10">
                Our experienced, dedicated staff truly care about delivering value for money —
                working in close partnership with every client we serve.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                Start saving today
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[26px] top-4 bottom-4 w-px bg-gradient-to-b from-blue-200 via-gray-200 to-transparent hidden sm:block" />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="flex flex-col gap-5"
              >
                {benefits.map(({ icon: Icon, title, body, tag }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    transition={{ duration: 0.45, ease }}
                    whileHover={{ x: 5, boxShadow: '0 8px 36px rgba(0,0,0,0.08)' }}
                    className="group relative flex gap-5 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:border-blue-100 transition-all duration-300 cursor-default overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl" />
                    <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 z-10">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5 mb-2">
                        <h3 className="text-[15px] font-semibold text-gray-900 leading-snug">{title}</h3>
                        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">{tag}</span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
