import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

/**
 * Scroll parallax. Positive `speed` drifts up as you scroll down (foreground),
 * negative lags behind (background).
 *
 *   <Drift speed={60} rotate={8}>…</Drift>
 */
export default function Drift({
  children,
  speed = 40,
  rotate = 0,
  scale = 0,
  className = "",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const y = useTransform(smooth, [0, 1], [speed, -speed]);
  const r = useTransform(smooth, [0, 1], [-rotate, rotate]);
  const s = useTransform(smooth, [0, 1], [1 - scale, 1 + scale]);

  if (reduce) {
    return (
      <div ref={ref} className={className} style={style} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, rotate: rotate ? r : undefined, scale: scale ? s : undefined, ...style }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
