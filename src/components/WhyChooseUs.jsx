import { TrendingUp, Users, MonitorSmartphone, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';

const features = [
  {
    icon:     TrendingUp,
    title:    'Strategic Growth',
    desc:     'We build on core competencies and expand into complementary industries — adding value at every node of the fleet management value chain.',
    gradient: 'from-blue-600 to-cyan-400',
    shadow:   'rgba(37,99,235,0.25)',
    badge:    'Growth',
  },
  {
    icon:     Users,
    title:    'Experience & Dedicated Team',
    desc:     'Key account executives, project management teams, and back-office resources — assembled to deliver smooth, large-scale service delivery.',
    gradient: 'from-violet-600 to-indigo-400',
    shadow:   'rgba(99,102,241,0.25)',
    badge:    'People',
  },
  {
    icon:     MonitorSmartphone,
    title:    'Technology-Driven',
    desc:     'User-friendly interfaces, 24-hour call centre support, and real-time asset location — driving cost optimisation and operational value.',
    gradient: 'from-sky-600 to-blue-400',
    shadow:   'rgba(2,132,199,0.25)',
    badge:    'Tech',
  },
  {
    icon:     Handshake,
    title:    'Strategic Partnerships',
    desc:     'We leverage strong industry relationships and group-level capabilities to deliver consistent service expansion, operational growth, and excellence across all client accounts.',
    gradient: 'from-slate-700 to-slate-500',
    shadow:   'rgba(51,65,85,0.25)',
    badge:    'Partnership',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

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
            className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3"
          >
            Why Choose NamRent
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight max-w-lg leading-tight"
            >
              What sets our operations apart
            </motion.h2>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease, delay: 0.08 }}
              className="text-sm text-gray-500 max-w-xs leading-relaxed md:text-right"
            >
              We anticipate operational challenges and build solutions before they impact your fleet.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map(({ icon: Icon, title, desc, gradient, shadow, badge }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              whileHover={{ y: -6, boxShadow: `0 24px 56px ${shadow}` }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:border-transparent transition-all duration-300 cursor-default overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-bold tracking-wider uppercase text-gray-400">{badge}</span>
              </div>
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-[15px] font-semibold text-gray-900 mb-2.5 leading-snug">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
