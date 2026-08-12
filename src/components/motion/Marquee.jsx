import { motion, useReducedMotion } from "motion/react";

/**
 * Seamless scrolling ticker. The track is rendered twice and translated by
 * exactly -50%, so the loop point is invisible.
 *
 *   <Marquee speed={26} reverse>…</Marquee>
 *
 * `pauseOnHover` uses a CSS-driven play-state so it costs nothing at runtime.
 */
export default function Marquee({
  children,
  speed = 30,
  reverse = false,
  className = "",
  itemClassName = "",
  ...rest
}) {
  const reduce = useReducedMotion();

  const track = (
    <div className={`flex shrink-0 items-center ${itemClassName}`} aria-hidden="true">
      {children}
    </div>
  );

  if (reduce) {
    return (
      <div className={`flex overflow-hidden ${className}`} {...rest}>
        <div className={`flex shrink-0 items-center ${itemClassName}`}>{children}</div>
      </div>
    );
  }

  return (
    <div className={`flex overflow-hidden ${className}`} {...rest}>
      <motion.div
        className="flex shrink-0 will-change-transform"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        <div className={`flex shrink-0 items-center ${itemClassName}`}>{children}</div>
        {track}
      </motion.div>
    </div>
  );
}
