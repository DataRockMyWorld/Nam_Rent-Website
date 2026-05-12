import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';

const contactDetails = [
  { icon: Phone,  label: 'Phone',   value: '+264 81 142 4092',                                                          href: 'tel:+264811424092'                },
  { icon: Phone,  label: 'Phone',   value: '+264 81 294 0222',                                                          href: 'tel:+264812940222'                },
  { icon: Mail,   label: 'Email',   value: 'info@namrentfleet.com',                                                     href: 'mailto:info@namrentfleet.com'     },
  { icon: Mail,   label: 'Email',   value: 'cch@iway.na',                                                               href: 'mailto:cch@iway.na'               },
  { icon: MapPin, label: 'Address', value: 'Heuschneider Platz 11, c/o Kolonnen & Heuschneider Street, Swakopmund',    href: '#'                                },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-[#e0ddd5]" style={{ backgroundColor: '#f5f3ed' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6b6860] mb-5">
              Get in Touch
            </p>
            <h2
              className="font-bold text-[#111110] tracking-tight leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Talk to our<br />fleet specialists.
            </h2>
            <p className="text-[#3d3b37] text-base leading-relaxed max-w-sm">
              Based in Swakopmund. We respond within one business day.
            </p>

            {/* Office hours */}
            <div className="mt-10 border-t border-[#e0ddd5] pt-8 flex flex-col gap-3">
              {[
                { day: 'Mon – Fri',        hours: '07:30 – 17:30' },
                { day: 'Saturday',          hours: '08:00 – 13:00' },
                { day: 'Emergency Support', hours: '24 / 7'        },
              ].map(({ day, hours }) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-sm text-[#3d3b37]">{day}</span>
                  <span className="text-sm font-semibold text-[#111110]">{hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-3"
          >
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeUp}
                transition={{ duration: 0.45, ease }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-5 p-6 rounded-2xl border border-[#e0ddd5] hover:border-[#ccc8be] transition-all duration-200 group"
                style={{ backgroundColor: '#eeebe2' }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#111110] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4.5 h-4.5 text-[#f5f3ed] w-[18px] h-[18px]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-[#6b6860] uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-[#1a1917] group-hover:text-[#111110] transition-colors">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
