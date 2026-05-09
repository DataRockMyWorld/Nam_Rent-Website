import {
  FileText, CreditCard, RefreshCw, MapPin,
  ClipboardList, Fuel, Droplets, Wrench,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';

const capabilities = [
  { icon: FileText,      title: 'Full Maintenance Lease'          },
  { icon: CreditCard,    title: 'Financial Lease & Instalment'    },
  { icon: RefreshCw,     title: 'Vehicle Sale & Leaseback'        },
  { icon: MapPin,        title: 'Vehicle Tracking & Monitoring'   },
  { icon: ClipboardList, title: 'Regulatory Administration'       },
  { icon: Fuel,          title: 'Fuel Management'                 },
  { icon: Droplets,      title: 'Wet Stock & Fuel Supply'         },
  { icon: Wrench,        title: 'Yellow Fleet & Maintenance'      },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-[#e0ddd5]" style={{ backgroundColor: '#eeebe2' }}>
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
              className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6b6860] mb-4"
            >
              Our Services
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="font-bold text-[#111110] tracking-tight leading-tight max-w-md"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Everything your<br />fleet needs.
            </motion.h2>
          </div>
          <motion.a
            href="#get-started"
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#111110] hover:bg-[#1a1917] text-[#f5f3ed] text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200 group self-start md:self-auto"
          >
            Discuss a solution
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e0ddd5] rounded-2xl overflow-hidden"
        >
          {capabilities.map(({ icon: Icon, title }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              transition={{ duration: 0.45, ease, delay: i * 0.04 }}
              className="group flex items-start gap-4 p-7 cursor-default transition-all duration-300 hover:bg-[#f5f3ed]"
              style={{ backgroundColor: '#eeebe2' }}
            >
              <div className="w-9 h-9 rounded-xl bg-[#111110] group-hover:bg-[#1a1917] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <Icon className="w-4 h-4 text-[#f5f3ed]" strokeWidth={1.75} />
              </div>
              <p className="text-sm font-semibold text-[#111110] leading-snug pt-1.5">{title}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
