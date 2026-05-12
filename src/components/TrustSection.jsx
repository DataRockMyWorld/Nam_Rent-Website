import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp, viewport, ease } from '../lib/motion';

function CountUp({ end, duration = 2.2 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-5% 0px' });

  useEffect(() => {
    if (!inView) return;
    let startTs = null;
    const tick = (ts) => {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs;
      const raw = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - raw, 3);
      setValue(Math.round(eased * end));
      if (raw < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}

const stats = [
  { count: 10000, suffix: '+',  label: 'Vehicles under management'   },
  { count: 24,    suffix: '/7', label: 'Fleet operations support'     },
  { count: 9,     suffix: '',   label: 'Managed service capabilities' },
  { count: 13,    suffix: '+',  label: 'Years of fleet expertise'     },
];

const industries = [
  'Mining & Resources',
  'Construction',
  'Engineering & Projects',
  'Logistics & Transport',
  'Corporate & Commercial',
  'Government & Public Sector',
  'Field Services',
  'Agriculture',
];

export default function TrustSection() {
  return (
    <section className="py-20 border-t border-b border-[#e0ddd5]" style={{ backgroundColor: '#f5f3ed' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Giant counters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#e0ddd5] mb-14"
        >
          {stats.map(({ count, suffix, label }, i) => (
            <motion.div
              key={label}
              variants={fadeUp}
              transition={{ duration: 0.55, ease, delay: i * 0.07 }}
              className="px-8 py-10 relative group cursor-default"
            >
              {/* Ghost watermark */}
              <div
                aria-hidden
                className="absolute inset-0 flex items-end justify-end pb-2 pr-4 pointer-events-none select-none overflow-hidden"
              >
                <span className="text-[100px] font-black leading-none text-[#e0ddd5]">
                  {count >= 1000 ? Math.round(count / 1000) : count}
                </span>
              </div>

              <div className="relative z-10">
                <p className="text-5xl sm:text-6xl font-black text-[#111110] tracking-tighter leading-none mb-2">
                  <CountUp end={count} />{suffix}
                </p>
                <p className="text-sm text-[#3d3b37] font-medium">{label}</p>
              </div>

              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-[#111110] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Industry strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2"
        >
          <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#6b6860] mr-2">Serving</span>
          {industries.map((name, i) => (
            <span key={name} className="flex items-center gap-3 text-xs font-medium text-[#6b6860]">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-[#ccc8be] hidden sm:block" />}
              {name}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
