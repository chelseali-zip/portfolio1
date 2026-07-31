export const fadeUp = {
  initial: { opacity: 0, y: 28, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-12% 0px" },
  transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
};

export const stagger = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-12% 0px" },
  transition: { staggerChildren: 0.08 },
};
