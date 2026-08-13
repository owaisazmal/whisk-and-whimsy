/**
 * Shared motion variants.
 *
 * Every scroll-reveal on the site pulls from this map, so the whole page
 * shares one easing/timing personality. Tune it here, not per-section.
 */

export const EASE_SOFT = [0.22, 1, 0.36, 1]; // gentle overshoot-free ease-out
export const EASE_POP = [0.34, 1.56, 0.64, 1]; // springy, slight overshoot

const shift = (axis, distance) => ({
  hidden: { opacity: 0, [axis]: distance },
  show: { opacity: 1, [axis]: 0 },
});

export const revealVariants = {
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  up: shift("y", 36),
  down: shift("y", -36),
  left: shift("x", 44),
  right: shift("x", -44),
  pop: {
    hidden: { opacity: 0, scale: 0.82 },
    show: { opacity: 1, scale: 1 },
  },
  /** Tips in off-kilter, then settles straight — the house entrance. */
  wonk: {
    hidden: { opacity: 0, y: 34, rotate: -6, scale: 0.94 },
    show: { opacity: 1, y: 0, rotate: 0, scale: 1 },
  },
  /** Same, mirrored, so alternating cards don't tilt in lockstep. */
  wonkAlt: {
    hidden: { opacity: 0, y: 34, rotate: 6, scale: 0.94 },
    show: { opacity: 1, y: 0, rotate: 0, scale: 1 },
  },
  /** Grows up from its base — good for anything "planted" (mushrooms, trees). */
  sprout: {
    hidden: { opacity: 0, scaleY: 0.35, y: 24 },
    show: { opacity: 1, scaleY: 1, y: 0 },
  },
};

export const transitionFor = (variant, duration, delay) => ({
  duration,
  delay,
  ease: variant === "pop" || variant === "wonk" || variant === "wonkAlt" ? EASE_POP : EASE_SOFT,
});

/** Container that hands its children a staggered entrance. */
export const staggerContainer = (stagger = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
