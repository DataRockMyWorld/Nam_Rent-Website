import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpg';

const navLinks = [
  { label: 'Solutions',    href: '#solutions'    },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services',     href: '#services'     },
  { label: 'About',        href: '#about'        },
  { label: 'Contact',      href: '#contact'      },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#f5f3ed]/95 backdrop-blur-xl border-b border-[#e0ddd5]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <div className={`transition-all duration-500 rounded-xl px-3 py-1.5 ${
            scrolled ? 'bg-transparent' : 'bg-white/90 shadow-sm'
          }`}>
            <img src={logo} alt="NamRent" className="h-9 md:h-11 w-auto object-contain" />
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  scrolled
                    ? 'text-[#1a1917] hover:text-[#111110] hover:bg-[#e0ddd5]'
                    : 'text-[#1a1917] hover:text-[#111110] hover:bg-[#1a1917]/5'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#get-started"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:inline-flex items-center gap-2 bg-[#111110] hover:bg-[#1a1917] text-[#f5f3ed] text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
        >
          Get Started
        </motion.a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#1a1917] hover:bg-[#1a1917]/5 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden bg-[#f5f3ed] border-t border-[#e0ddd5]"
          >
            <ul className="flex flex-col px-6 py-3 gap-0.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-2 text-sm font-medium text-[#3d3b37] hover:text-[#111110] border-b border-[#e0ddd5] last:border-0 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-3 pb-2">
                <a
                  href="#get-started"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-[#111110] text-[#f5f3ed] text-sm font-semibold py-3 px-4 rounded-xl transition-colors"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
