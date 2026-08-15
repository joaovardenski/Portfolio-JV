// Shared framer-motion fade-in variants used across About, Skills and Testimonial.
export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

export const fadeInKeyframes = {
  whileInView: { opacity: [0, 1] },
};
