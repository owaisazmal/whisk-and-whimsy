import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Seamless scrolling ticker. The track is rendered twice and translated by
 * exactly -50%, so the loop point is invisible.
 *
 *   <Marquee speed={26} reverse>…</Marquee>
 *
 * `repeat` duplicates the children *inside* each track. A short word list can
 * produce a track narrower than half the viewport, which leaves a visible gap
 * on wide monitors — bump `repeat` until `2 × repeat × trackWidth` comfortably
 * exceeds the widest screen you care about. Scroll speed is held constant:
 * the duration scales with `repeat`, so the ribbon moves at the same px/sec
 * however many copies are in it.
 */
export default function Marquee({
  children,
  speed = 30,
  repeat = 1,
  reverse = false,
  className = "",
  itemClassName = "",
  ...rest
}) {
  const reduce = useReducedMotion();

  const content = Array.from({ length: repeat }, (_, i) => (
    <Fragment key={i}>{children}</Fragment>
  ));

  const track = (
    <div className={`flex shrink-0 items-center ${itemClassName}`} aria-hidden="true">
      {content}
    </div>
  );

  if (reduce) {
    return (
      <div className={`flex overflow-hidden ${className}`} {...rest}>
        <div className={`flex shrink-0 items-center ${itemClassName}`}>{content}</div>
      </div>
    );
  }

  return (
    <div className={`flex overflow-hidden ${className}`} {...rest}>
      <motion.div
        className="flex shrink-0 will-change-transform"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed * repeat, repeat: Infinity, ease: "linear" }}
      >
        <div className={`flex shrink-0 items-center ${itemClassName}`}>{content}</div>
        {track}
      </motion.div>
    </div>
  );
}
