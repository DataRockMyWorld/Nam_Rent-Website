import { Mail, Phone, MapPin } from 'lucide-react';
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

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#111110' }}>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 border-b" style={{ borderColor: '#2a2a28' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="inline-block bg-white rounded-xl px-3 py-2 shadow-sm mb-6">
              <img src={logo} alt="NamRent" className="h-8 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed mb-7 max-w-xs" style={{ color: '#a09d97' }}>
              Vehicle access and fleet management — made simple. Founded 2012. 100% black-owned. Proudly Namibian.
            </p>
            <ul className="space-y-3">
              {[
                { icon: Phone,  text: '+264 64 20 5345',               href: 'tel:+264642205345'          },
                { icon: Mail,   text: 'info@namrent.com.na',           href: 'mailto:info@namrent.com.na' },
                { icon: MapPin, text: '1st Floor, Swakopmund Plaza, Walvis Bay', href: '#'              },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a href={href} className="flex items-center gap-3 text-sm transition-colors group" style={{ color: '#a09d97' }}>
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#6b6860' }} strokeWidth={1.75} />
                    <span className="group-hover:text-[#f5f3ed] transition-colors">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase mb-5" style={{ color: '#6b6860' }}>
              Solutions
            </h4>
            <ul className="space-y-3">
              {[
                ['Fleet Management',      '#solutions'],
                ['Vehicle Access',        '#solutions'],
                ['Trade-In & Upgrade',    '#solutions'],
                ['How It Works',          '#how-it-works'],
                ['Get Started',           '#get-started'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm transition-colors hover:text-[#f5f3ed]" style={{ color: '#a09d97' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest uppercase mb-5" style={{ color: '#6b6860' }}>
              Company
            </h4>
            <ul className="space-y-3">
              {[
                ['About NamRent',    '#about'  ],
                ['Services',         '#services'],
                ['Corporate Fleets', '#corporate'],
                ['Contact',          '#contact' ],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm transition-colors hover:text-[#f5f3ed]" style={{ color: '#a09d97' }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs" style={{ color: '#6b6860' }}>
          © {new Date().getFullYear()} NamRent Fleet Management Services · A Partner of Afrirent Holdings (Pty) Ltd
        </p>
        <div className="flex items-center gap-2">
          {[
            { Icon: LinkedinIcon, label: 'LinkedIn' },
            { Icon: XIcon,        label: 'X'        },
            { Icon: FacebookIcon, label: 'Facebook' },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:bg-[#f5f3ed]/10"
              style={{ color: '#6b6860' }}
            >
              <Icon className="w-[15px] h-[15px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
