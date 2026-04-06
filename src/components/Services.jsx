import {
  FileText, CreditCard, RefreshCw, MapPin,
  ClipboardList, Fuel, Droplets, Wrench, ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';

const capabilities = [
  {
    icon:  FileText,
    title: 'Full Maintenance Lease',
    desc:  'Value-for-money usage without the risks and hassles of acquisition, maintenance, or disposal associated with ownership.',
  },
  {
    icon:  CreditCard,
    title: 'Financial Lease & Instalment Sale',
    desc:  'Pay off your fleet vehicles over an agreed period and receive full ownership at the end of the contract.',
  },
  {
    icon:  RefreshCw,
    title: 'Vehicle Sale & Leaseback',
    desc:  'Acquire vehicles directly from us, or free up capital for other investments through leaseback transactions.',
  },
  {
    icon:  MapPin,
    title: 'Vehicle Tracking & Monitoring',
    desc:  'Increase productivity, efficiency, and security by controlling and monitoring every move your fleet makes.',
  },
  {
    icon:  ClipboardList,
    title: 'Regulatory Administration',
    desc:  "Licensing, registration, fines, insurance, and accident management — we handle the paperwork so you don't have to.",
  },
  {
    icon:  Fuel,
    title: 'Fuel Management',
    desc:  'Pre-authorised, token-based, fully automated transactions per vehicle — enabling recorded accountability.',
  },
  {
    icon:  Droplets,
    title: 'Wet Stock & Fuel Supply',
    desc:  'Self-bundled diesel, petrol, waste oils, and lubricants — storage tanks and equipment for on-site refuelling.',
  },
  {
    icon:  Wrench,
    title: 'Yellow Fleet Supply & Maintenance',
    desc:  'Lease and maintain Bell Equipment and heavy machinery for construction and project use.',
  },
];

function CapabilityCard({ icon: Icon, title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.45, ease }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 cursor-default overflow-hidden"
    >
      <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
      </div>
      <h3 className="text-[15px] font-semibold text-gray-900 mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3"
            >
              Our Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: 0.05 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight max-w-lg"
            >
              Everything your fleet operation needs
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="text-base text-gray-500 max-w-sm leading-relaxed md:text-right"
          >
            Our end-to-end offering covers every stage of the fleet management
            value chain — from acquisition to disposal.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {capabilities.map(({ icon, title, desc }) => (
            <CapabilityCard key={title} icon={icon} title={title} desc={desc} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex items-center justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group transition-colors"
          >
            Discuss a tailored solution
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
