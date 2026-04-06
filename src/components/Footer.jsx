import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';
import logo from '../assets/logo.jpg';

function LinkedinIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function XIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.629 5.905-5.629zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function FacebookIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const footerLinks = {
  Services: [
    { label: 'GPS Tracking',      href: '#services' },
    { label: 'Maintenance Mgmt',  href: '#services' },
    { label: 'Fuel Management',   href: '#services' },
    { label: 'Driver Safety',     href: '#services' },
    { label: 'Compliance',        href: '#services' },
    { label: 'Fleet Analytics',   href: '#services' },
  ],
  Company: [
    { label: 'About Us',    href: '#about'   },
    { label: 'Why NamRent', href: '#services' },
    { label: 'Careers',     href: '#contact'  },
    { label: 'News',        href: '#contact'  },
  ],
  Legal: [
    { label: 'Privacy Policy',   href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'POPIA Compliance', href: '#' },
  ],
};

const socials = [
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: XIcon,        label: 'X'        },
  { icon: FacebookIcon, label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      {/* Pre-footer CTA band */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Ready for a seamless mobility solution?</h3>
            <p className="text-sm text-gray-400">Our specialists will build a tailored proposal within one business day.</p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-blue-600/30 transition-all duration-200"
          >
            Get a Quote
          </motion.a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <div className="bg-white rounded-xl px-3 py-2 inline-block shadow-md">
                <img
                  src={logo}
                  alt="NamRent Fleet Management"
                  className="h-9 w-auto object-contain"
                />
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-7 max-w-xs">
              Founded in 2012. A 100% black-owned company and proud partner of Afrirent Holdings (Pty) Ltd.
            </p>

            <ul className="space-y-3.5">
              {[
                { icon: Phone,  text: '+264 64 20 5345',                              href: 'tel:+264642205345'          },
                { icon: Mail,   text: 'info@namrent.com.na',                          href: 'mailto:info@namrent.com.na' },
                { icon: MapPin, text: '1st Floor, Swakopmund Plaza, Walvis Bay',      href: '#'                         },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a href={href} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                    <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" strokeWidth={1.75} />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} NamRent Fleet Management Services · A Partner of Afrirent Holdings (Pty) Ltd
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="group w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-blue-600 flex items-center justify-center transition-all duration-200"
              >
                <Icon className="w-[15px] h-[15px] text-gray-500 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
