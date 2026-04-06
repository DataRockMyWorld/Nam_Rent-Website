// Shared Framer Motion variants

export const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const staggerFast = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export const slideLeft = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideRight = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

// Default viewport config — animate once when 15% in view
export const viewport = { once: true, amount: 0.15 };

// Standard easing
export const ease = [0.25, 0.1, 0.25, 1];
