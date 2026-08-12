import { motion, useReducedMotion } from "motion/react";

/**
 * Endless gentle bobbing — used for every critter, mushroom and stray
 * sprinkle floating around the page.
 *
 *   <Float amplitude={14} duration={7} rotate={5} delay={0.4}>…</Float>
 */
export default function Float({
  children,
  amplitude = 10,
  rotate = 0,
  duration = 6,
  delay = 0,
  className = "",
  style,
  ...rest
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      animate={{
        y: [0, -amplitude, 0],
        rotate: rotate ? [-rotate, rotate, -rotate] : 0,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
