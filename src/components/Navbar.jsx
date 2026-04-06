import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpg';

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo — white pill on dark bg, transparent on white bg */}
        <a href="#home" className="flex-shrink-0">
          <div className={`transition-all duration-500 rounded-xl px-3 py-1.5 ${
            isScrolled ? 'bg-transparent' : 'bg-white shadow-md'
          }`}>
            <img
              src={logo}
              alt="NamRent Fleet Management"
              className="h-8 md:h-9 w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/10 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
        >
          Get a Quote
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
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
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <ul className="flex flex-col px-6 py-3 gap-0.5">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-2 text-sm font-medium text-gray-700 hover:text-blue-600 border-b border-gray-50 last:border-0 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-3 pb-2">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-blue-600 text-white text-sm font-semibold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
