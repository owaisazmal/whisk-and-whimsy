import { motion, useReducedMotion } from "motion/react";
import { revealVariants, transitionFor } from "./variants";

/**
 * Scroll-triggered entrance.
 *
 *   <Reveal variant="wonk" delay={0.1}>…</Reveal>
 *
 * Falls back to a plain opacity fade when the visitor prefers reduced motion,
 * so nothing slides, rotates or scales.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.7,
  amount = 0.3,
  once = true,
  as = "div",
  className = "",
  style,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  const key = reduce ? "fade" : variant;

  return (
    <Tag
      className={className}
      style={style}
      variants={revealVariants[key] ?? revealVariants.up}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={transitionFor(key, reduce ? 0.35 : duration, delay)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
