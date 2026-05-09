import { useState } from 'react';
import { ArrowRight, CheckCircle, Send, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, viewport, ease } from '../lib/motion';

const serviceCheckboxes = [
  { id: 'maintenance',   label: 'Basic vehicle maintenance' },
  { id: 'insurance',     label: 'Insurance support'         },
  { id: 'tracking',      label: 'Vehicle tracking'          },
  { id: 'licensing',     label: 'Licensing support'         },
  { id: 'fleet',         label: 'Full fleet management'     },
];

const vehicleTypes = ['Sedan', 'SUV', 'Pickup', 'Van', 'Other'];
const conditions   = ['Excellent', 'Good', 'Fair', 'Poor'];

const STEPS = ['Client Type', 'Vehicle Status', 'Service Details', 'Your Details'];

function StepIndicator({ current }) {
  return (
    <div className="flex items-center gap-1 sm:gap-2 mb-10">
      {STEPS.map((label, i) => (
        <div key={label} className="flex items-center gap-1 sm:gap-2">
          <div className={`flex items-center gap-2 ${i <= current ? 'opacity-100' : 'opacity-40'}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
              i < current   ? 'bg-emerald-500 text-white' :
              i === current ? 'bg-[#1b3a6b] text-[#f5f3ed] ring-4 ring-[#1b3a6b]/15' :
              'bg-[#e0ddd5] text-[#a09d97]'
            }`}>
              {i < current ? <CheckCircle className="w-3.5 h-3.5" /> : i + 1}
            </div>
            <span className={`hidden sm:block text-xs font-medium ${i === current ? 'text-[#1b3a6b]' : 'text-[#6b6860]'}`}>
              {label}
            </span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`w-4 sm:w-8 h-px mx-1 transition-all duration-300 ${i < current ? 'bg-emerald-300' : 'bg-[#e0ddd5]'}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function OptionCard({ selected, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 text-sm font-medium ${
        selected
          ? 'bg-[#1b3a6b]/[0.07] border-[#1b3a6b] text-[#1b3a6b]'
          : 'bg-[#f5f3ed] border-[#e0ddd5] text-[#3d3b37] hover:border-[#1b3a6b]/40'
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span>{children}</span>
        <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all duration-200 ${
          selected ? 'border-[#1b3a6b] bg-[#1b3a6b]' : 'border-[#ccc8be]'
        }`}>
          {selected && <div className="w-full h-full rounded-full bg-white scale-[0.4]" />}
        </div>
      </div>
    </button>
  );
}

function CheckOption({ checked, onChange, label }) {
  return (
    <label className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 ${
      checked ? 'bg-[#1b3a6b]/[0.07] border-[#1b3a6b]/40 text-[#1b3a6b]' : 'bg-[#f5f3ed] border-[#e0ddd5] text-[#3d3b37] hover:border-[#1b3a6b]/40'
    }`}>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
      <div className={`w-4 h-4 rounded flex-shrink-0 border-2 flex items-center justify-center transition-all duration-200 ${
        checked ? 'bg-[#1b3a6b] border-[#1b3a6b]' : 'border-[#ccc8be]'
      }`}>
        {checked && <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
}

function InputField({ label, id, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#3d3b37] mb-1.5">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <input
        id={id} type={type} placeholder={placeholder}
        value={value} onChange={onChange} required={required}
        className="w-full px-4 py-3 rounded-xl border border-[#e0ddd5] bg-[#f5f3ed] text-[#1a1917] placeholder:text-[#a09d97] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3a6b]/25 focus:border-[#1b3a6b] hover:border-[#ccc8be] transition-all duration-200"
      />
    </div>
  );
}

export default function ServiceForm() {
  const [step, setStep]           = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  // Step 1
  const [clientType, setClientType]     = useState('');
  // Step 2
  const [vehicleStatus, setVehicleStatus] = useState('');
  // Step 3 — existing vehicle
  const [existingMake, setExistingMake]   = useState('');
  const [existingYear, setExistingYear]   = useState('');
  const [existingMiles, setExistingMiles] = useState('');
  const [numVehicles, setNumVehicles]     = useState('');
  // Step 3 — new vehicle
  const [vehicleType, setVehicleType]     = useState('');
  const [numNewVehicles, setNumNewVehicles] = useState('');
  // Step 3 — trade-in
  const [tradeMake, setTradeMake]         = useState('');
  const [tradeYear, setTradeYear]         = useState('');
  const [tradeMiles, setTradeMiles]       = useState('');
  const [tradeCondition, setTradeCondition] = useState('');
  const [replaceType, setReplaceType]     = useState('');
  // Shared
  const [services, setServices]           = useState({});
  const [duration, setDuration]           = useState('');
  const [comments, setComments]           = useState('');
  // Step 4 — contact
  const [name, setName]     = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail]   = useState('');
  const [phone, setPhone]   = useState('');
  const [location, setLocation] = useState('');

  const toggleService = (id) => setServices((s) => ({ ...s, [id]: !s[id] }));

  const canAdvance = () => {
    if (step === 0) return !!clientType;
    if (step === 1) return !!vehicleStatus;
    if (step === 2) {
      if (vehicleStatus === 'existing') return !!(existingMake && duration);
      if (vehicleStatus === 'new')      return !!(vehicleType && duration);
      if (vehicleStatus === 'trade')    return !!(tradeMake && tradeCondition && replaceType && duration);
    }
    if (step === 3) return !!(name && email && phone);
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canAdvance()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="get-started" className="py-24 border-t border-[#e0ddd5]" style={{ backgroundColor: '#f5f3ed' }}>
      <div className="max-w-3xl mx-auto px-6 md:px-10">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease }}
            className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#3d3b37] mb-3"
          >
            Get Started
          </motion.p>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.55, ease, delay: 0.05 }}
            className="font-bold text-[#111110] tracking-tight mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Choose Your Fleet Solution
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.5, ease, delay: 0.1 }}
            className="text-[#3d3b37] max-w-md mx-auto leading-relaxed"
          >
            Answer a few quick questions. We'll be in touch within one business day.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease }}
          className="rounded-3xl border border-[#e0ddd5] shadow-sm p-8 md:p-10"
          style={{ backgroundColor: '#eeebe2' }}
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
                className="text-xl font-bold text-[#111110]"
              >
                Request received!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="text-[#3d3b37] text-sm max-w-sm leading-relaxed"
              >
                Thank you, {name}. Our team will review your details and contact you within one business day to discuss your vehicle solution.
              </motion.p>
              <button
                onClick={() => { setSubmitted(false); setStep(0); setClientType(''); setVehicleStatus(''); }}
                className="mt-2 text-[#1b3a6b] text-sm font-semibold hover:underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={step === 3 ? handleSubmit : (e) => e.preventDefault()}>
              <StepIndicator current={step} />

              <AnimatePresence mode="wait">

                {/* ── STEP 0: Client Type ── */}
                {step === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-bold text-[#111110] mb-2">Are you a new or existing client?</h3>
                    <p className="text-sm text-[#3d3b37] mb-6">This helps us understand how to best assist you.</p>
                    <div className="flex flex-col gap-3">
                      <OptionCard selected={clientType === 'new'}      onClick={() => setClientType('new')}>New client — I have not worked with Namrent before</OptionCard>
                      <OptionCard selected={clientType === 'existing'} onClick={() => setClientType('existing')}>Existing client — I already have a relationship with Namrent</OptionCard>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 1: Vehicle Status ── */}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-bold text-[#111110] mb-2">Which best describes your current need?</h3>
                    <p className="text-sm text-[#3d3b37] mb-6">Select the option that applies to your situation.</p>
                    <div className="flex flex-col gap-3">
                      <OptionCard selected={vehicleStatus === 'existing'} onClick={() => setVehicleStatus('existing')}>
                        I already have a vehicle — I need fleet management support
                      </OptionCard>
                      <OptionCard selected={vehicleStatus === 'new'} onClick={() => setVehicleStatus('new')}>
                        I need a new vehicle — Help me access and manage one
                      </OptionCard>
                      <OptionCard selected={vehicleStatus === 'trade'} onClick={() => setVehicleStatus('trade')}>
                        I want to trade in my current vehicle for a newer one
                      </OptionCard>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 2: Service Details ── */}
                {step === 2 && vehicleStatus === 'existing' && (
                  <motion.div key="step2-existing" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-bold text-[#111110] mb-2">Tell us about your vehicle</h3>
                    <p className="text-sm text-[#3d3b37] mb-6">Provide some basic details about the vehicle(s) you want managed.</p>
                    <div className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField id="existingMake" label="Vehicle Make & Model" placeholder="e.g. Toyota HiLux" value={existingMake} onChange={(e) => setExistingMake(e.target.value)} required />
                        <InputField id="existingYear" label="Year of Manufacture" placeholder="e.g. 2020" value={existingYear} onChange={(e) => setExistingYear(e.target.value)} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField id="existingMiles" label="Current Mileage (km)" placeholder="e.g. 45000" value={existingMiles} onChange={(e) => setExistingMiles(e.target.value)} />
                        <InputField id="numVehicles"   label="Number of Vehicles" placeholder="e.g. 3" value={numVehicles} onChange={(e) => setNumVehicles(e.target.value)} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#3d3b37] mb-3">Required services</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {serviceCheckboxes.map(({ id, label }) => (
                            <CheckOption key={id} checked={!!services[id]} onChange={() => toggleService(id)} label={label} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#3d3b37] mb-3">Preferred management duration <span className="text-red-400">*</span></p>
                        <div className="flex gap-3">
                          {['3 years', '5 years'].map((d) => (
                            <OptionCard key={d} selected={duration === d} onClick={() => setDuration(d)}>{d}</OptionCard>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && vehicleStatus === 'new' && (
                  <motion.div key="step2-new" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-bold text-[#111110] mb-2">Tell us about the vehicle you need</h3>
                    <p className="text-sm text-[#3d3b37] mb-6">We will help you access the right vehicle with full fleet management support.</p>
                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="text-sm font-medium text-[#3d3b37] mb-3">Type of vehicle required <span className="text-red-400">*</span></p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {vehicleTypes.map((v) => (
                            <OptionCard key={v} selected={vehicleType === v} onClick={() => setVehicleType(v)}>{v}</OptionCard>
                          ))}
                        </div>
                      </div>
                      <InputField id="numNewVehicles" label="Number of vehicles required" placeholder="e.g. 2" value={numNewVehicles} onChange={(e) => setNumNewVehicles(e.target.value)} />
                      <div>
                        <p className="text-sm font-medium text-[#3d3b37] mb-3">Required services</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {serviceCheckboxes.map(({ id, label }) => (
                            <CheckOption key={id} checked={!!services[id]} onChange={() => toggleService(id)} label={label} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#3d3b37] mb-3">Preferred management duration <span className="text-red-400">*</span></p>
                        <div className="flex gap-3">
                          {['3 years', '5 years'].map((d) => (
                            <OptionCard key={d} selected={duration === d} onClick={() => setDuration(d)}>{d}</OptionCard>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#3d3b37] mb-1.5">Additional comments</label>
                        <textarea rows={3} placeholder="Any specific requirements or preferences..." value={comments} onChange={(e) => setComments(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#e0ddd5] bg-[#f5f3ed] text-[#1a1917] placeholder:text-[#a09d97] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3a6b]/25 focus:border-[#1b3a6b] resize-none transition-all duration-200" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && vehicleStatus === 'trade' && (
                  <motion.div key="step2-trade" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-bold text-[#111110] mb-2">Tell us about your trade-in</h3>
                    <p className="text-sm text-[#3d3b37] mb-6">Provide basic details about your current vehicle and what you need as a replacement.</p>
                    <div className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField id="tradeMake"  label="Current Vehicle Make & Model" placeholder="e.g. Ford Ranger" value={tradeMake} onChange={(e) => setTradeMake(e.target.value)} required />
                        <InputField id="tradeYear"  label="Year of Manufacture" placeholder="e.g. 2018" value={tradeYear} onChange={(e) => setTradeYear(e.target.value)} />
                      </div>
                      <InputField id="tradeMiles" label="Current Mileage (km)" placeholder="e.g. 95000" value={tradeMiles} onChange={(e) => setTradeMiles(e.target.value)} />
                      <div>
                        <p className="text-sm font-medium text-[#3d3b37] mb-3">Vehicle condition <span className="text-red-400">*</span></p>
                        <div className="grid grid-cols-2 gap-2">
                          {conditions.map((c) => (
                            <OptionCard key={c} selected={tradeCondition === c} onClick={() => setTradeCondition(c)}>{c}</OptionCard>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#3d3b37] mb-3">Preferred replacement vehicle type <span className="text-red-400">*</span></p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {vehicleTypes.map((v) => (
                            <OptionCard key={v} selected={replaceType === v} onClick={() => setReplaceType(v)}>{v}</OptionCard>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#3d3b37] mb-3">Required services</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {serviceCheckboxes.map(({ id, label }) => (
                            <CheckOption key={id} checked={!!services[id]} onChange={() => toggleService(id)} label={label} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#3d3b37] mb-3">Preferred management duration <span className="text-red-400">*</span></p>
                        <div className="flex gap-3">
                          {['3 years', '5 years'].map((d) => (
                            <OptionCard key={d} selected={duration === d} onClick={() => setDuration(d)}>{d}</OptionCard>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#3d3b37] mb-1.5">Additional comments</label>
                        <textarea rows={3} placeholder="Any other details about your trade-in or requirements..." value={comments} onChange={(e) => setComments(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-[#e0ddd5] bg-[#f5f3ed] text-[#1a1917] placeholder:text-[#a09d97] text-sm focus:outline-none focus:ring-2 focus:ring-[#1b3a6b]/25 focus:border-[#1b3a6b] resize-none transition-all duration-200" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ── STEP 3: Contact Details ── */}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-bold text-[#111110] mb-2">Your contact details</h3>
                    <p className="text-sm text-[#3d3b37] mb-6">Our team will use these details to follow up with you directly.</p>
                    <div className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField id="name"    label="Full Name"     placeholder="Jane Smith"              value={name}     onChange={(e) => setName(e.target.value)}     required />
                        <InputField id="company" label="Company Name"  placeholder="Your Company (Pty) Ltd"  value={company}  onChange={(e) => setCompany(e.target.value)} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField id="email"    label="Email Address" type="email" placeholder="jane@company.com" value={email}    onChange={(e) => setEmail(e.target.value)}    required />
                        <InputField id="phone"    label="Phone Number"  type="tel"   placeholder="+264 81 000 0000" value={phone}    onChange={(e) => setPhone(e.target.value)}    required />
                      </div>
                      <InputField id="location" label="Location / Region" placeholder="e.g. Walvis Bay, Namibia" value={location} onChange={(e) => setLocation(e.target.value)} />

                      <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4">
                        <p className="text-xs text-amber-700 leading-relaxed">
                          <span className="font-semibold">Note:</span> Additional documents may be requested later by email or during a consultation, depending on the service selected. No sensitive documents are required at this stage.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#e0ddd5]">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="text-sm font-medium text-[#3d3b37] hover:text-[#111110] transition-colors"
                  >
                    ← Back
                  </button>
                ) : <div />}

                {step < 3 ? (
                  <motion.button
                    type="button"
                    disabled={!canAdvance()}
                    onClick={() => setStep((s) => s + 1)}
                    whileHover={canAdvance() ? { scale: 1.02, y: -1 } : {}}
                    whileTap={canAdvance() ? { scale: 0.98 } : {}}
                    className="inline-flex items-center gap-2 bg-[#111110] hover:bg-[#1a1917] disabled:opacity-40 disabled:cursor-not-allowed text-[#f5f3ed] font-semibold text-sm px-7 py-3 rounded-xl transition-all duration-200"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={loading || !canAdvance()}
                    whileHover={!loading && canAdvance() ? { scale: 1.02, y: -1 } : {}}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 bg-[#111110] hover:bg-[#1a1917] disabled:opacity-50 disabled:cursor-not-allowed text-[#f5f3ed] font-semibold text-sm px-7 py-3 rounded-xl transition-all duration-200"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Submitting…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
