import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';

import clientHenties from '../assets/client-henties.jpg';
import clientNamport from '../assets/client-namport.jpg';
import clientZpmc    from '../assets/client-zpmc.jpg';
import clientFoa     from '../assets/client-foa.jpg';
import clientLhu     from '../assets/client-lhu.jpg';
import clientNbc     from '../assets/client-nbc.jpg';

const clients = [
  { name: 'Municipality of Henties Bay', logo: clientHenties },
  { name: 'Namport',                     logo: clientNamport },
  { name: 'ZPMC',                        logo: clientZpmc    },
  { name: 'Fisheries Observer Agency',   logo: clientFoa     },
  { name: 'Langer Heinrich Uranium',     logo: clientLhu     },
  { name: 'Namibian Broadcasting Corporation', logo: clientNbc },
];

// Triplicate so the loop feels seamless at any viewport width
const track = [...clients, ...clients, ...clients];

export default function Clients() {
  return (
    <section className="py-20 border-t border-[#e0ddd5] overflow-hidden" style={{ backgroundColor: '#f5f3ed' }}>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          animation: marquee-scroll 30s linear infinite;
          will-change: transform;
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease }}
              className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6b6860] mb-4"
            >
              Our Clients
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              className="font-bold text-[#111110] tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Trusted by leading<br />
              <span style={{ color: '#a09d97' }}>organisations.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="text-sm text-[#6b6860] max-w-xs leading-relaxed md:text-right"
          >
            From government entities to mining and port operations, we manage fleets that keep critical industries moving.
          </motion.p>
        </motion.div>
      </div>

      {/* Full-bleed marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
        className="marquee-wrap relative"
      >
        {/* Left + right edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, #f5f3ed, transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, #f5f3ed, transparent)' }} />

        <div className="marquee-track flex gap-4 w-max">
          {track.map((client, i) => (
            <div
              key={i}
              className="group flex-shrink-0 w-44 h-24 flex items-center justify-center rounded-2xl border border-[#e0ddd5] bg-white px-5 transition-all duration-300 hover:border-[#ccc8be] hover:shadow-md"
              title={client.name}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-14 max-w-full object-contain transition-all duration-300"
                style={{ filter: 'grayscale(100%) opacity(0.55)' }}
                onMouseEnter={e => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'}
                onMouseLeave={e => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.55)'}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Count strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="flex -space-x-1.5">
            {clients.slice(0, 4).map((c) => (
              <div
                key={c.name}
                className="w-7 h-7 rounded-full border-2 border-[#f5f3ed] bg-white overflow-hidden flex items-center justify-center"
              >
                <img src={c.logo} alt={c.name} className="w-full h-full object-cover" style={{ filter: 'grayscale(30%)' }} />
              </div>
            ))}
          </div>
          <p className="text-sm text-[#6b6860]">
            <span className="font-semibold text-[#111110]">{clients.length}+ organisations</span> trust NamRent to manage their operational fleets.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
