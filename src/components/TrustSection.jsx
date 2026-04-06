import { Truck, Users, Clock, ShieldCheck, Award, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';

const stats = [
  { value: '10,000+', label: 'Vehicles Daily',    icon: Truck,       color: 'text-blue-500' },
  { value: '2012',    label: 'Year Founded',       icon: Award,       color: 'text-blue-500' },
  { value: '24 / 7',  label: 'Bureau Support',     icon: Clock,       color: 'text-blue-500' },
  { value: '100%',    label: 'Black-Owned',        icon: ShieldCheck, color: 'text-blue-500' },
  { value: '8',       label: 'Core Services',      icon: Users,       color: 'text-blue-500' },
  { value: '13+',     label: 'Years Experience',   icon: Handshake,   color: 'text-blue-500' },
];

const industries = [
  'Mining & Resources',
  'Logistics & Transport',
  'Government Fleets',
  'Construction & Yellow Fleet',
  'Agriculture',
  'Private Sector',
];

export default function TrustSection() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease }}
          className="text-center text-xs font-bold text-gray-400 tracking-[0.18em] uppercase mb-12"
        >
          Geared and well-positioned to meet all your fleet management needs
        </motion.p>

        {/* Stat strip */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
        >
          {stats.map(({ value, label, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={{ duration: 0.45, ease }}
              whileHover={{ backgroundColor: '#f8faff', scale: 1.02 }}
              className={`relative flex flex-col items-center text-center px-6 py-8 bg-white transition-all duration-200 cursor-default
                ${i < stats.length - 1 ? 'border-b lg:border-b-0 border-r-0 md:border-r border-gray-100' : ''}`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.75} />
              </div>
              <p className="text-2xl font-bold text-gray-900 tracking-tight leading-none mb-1">{value}</p>
              <p className="text-xs text-gray-400 font-medium leading-snug">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-3"
        >
          {industries.map((name, i) => (
            <span key={name} className="flex items-center gap-3 text-xs font-medium text-gray-400">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-200 hidden sm:block" />}
              {name}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
