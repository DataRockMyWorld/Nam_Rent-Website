import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, staggerContainer, viewport, ease } from '../lib/motion';

const contactDetails = [
  { icon: Phone,  label: 'Phone',   value: '+264 64 20 5345',                              href: 'tel:+264642205345'          },
  { icon: Mail,   label: 'Email',   value: 'info@namrent.com.na',                          href: 'mailto:info@namrent.com.na' },
  { icon: MapPin, label: 'Address', value: '1st Floor, Swakopmund Plaza Hotel, Walvis Bay', href: '#'                         },
];

function Field({ label, id, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 hover:border-gray-300 transition-all duration-200"
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm]         = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1300));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease }}
            className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-3"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4"
          >
            Talk to our fleet specialists
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed"
          >
            Based in Walvis Bay, our team is ready to build a tailored fleet
            management solution for your business — reach out and we'll respond within one business day.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 items-start">

          {/* ── Contact info ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col gap-4"
          >
            {contactDetails.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                variants={fadeUp}
                transition={{ duration: 0.45, ease }}
                whileHover={{ x: 3 }}
                className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-blue-700 transition-colors">
                  <Icon className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors leading-snug">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Hours card */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.45, ease }}
              className="mt-2 p-6 rounded-2xl text-white"
              style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)' }}
            >
              <p className="text-[10px] font-bold tracking-widest uppercase text-blue-300 mb-4">Office Hours</p>
              <div className="space-y-3 text-sm">
                {[
                  { day: 'Mon – Fri',         hours: '07:30 – 17:30',     color: 'text-white' },
                  { day: 'Saturday',           hours: '08:00 – 13:00',     color: 'text-white' },
                  { day: 'Emergency Support',  hours: '24 / 7',            color: 'text-emerald-400' },
                ].map(({ day, hours, color }) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="text-blue-200">{day}</span>
                    <span className={`font-semibold ${color}`}>{hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Form ── */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: 0.6, ease }}
            className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_40px_rgba(0,0,0,0.06)] p-8 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-14 gap-4">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 16 }}
                  className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center"
                >
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="text-xl font-bold text-gray-900"
                >
                  Message received!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="text-gray-400 text-sm max-w-xs leading-relaxed"
                >
                  One of our specialists will be in touch within one business day.
                </motion.p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', message: '' }); }}
                  className="mt-2 text-blue-600 text-sm font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field id="name"    label="Full Name"      placeholder="Jane Smith"              value={form.name}    onChange={set('name')}    required />
                  <Field id="email"   label="Email Address"  type="email" placeholder="jane@company.com" value={form.email}   onChange={set('email')}   required />
                </div>
                <Field   id="company" label="Company Name"   placeholder="Your Company (Pty) Ltd"  value={form.company} onChange={set('company')} />

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message<span className="text-red-400 ml-0.5">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your fleet size, the challenges you're facing, and what you're hoping to achieve…"
                    value={form.message}
                    onChange={set('message')}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 hover:border-gray-300 transition-all duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-400 text-center">
                  Your information is private and will never be shared with third parties.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
