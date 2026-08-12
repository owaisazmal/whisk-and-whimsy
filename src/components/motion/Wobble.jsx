import { motion, useReducedMotion } from "motion/react";

/**
 * Hover/tap personality for anything clickable: lifts, tilts, and squashes
 * back down on press. Shared by buttons, cards and nav pills so interaction
 * feels consistent everywhere.
 */
export default function Wobble({
  children,
  lift = -4,
  tilt = -2,
  grow = 1.03,
  press = 0.97,
  as = "div",
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      whileHover={reduce ? {} : { y: lift, rotate: tilt, scale: grow }}
      whileTap={reduce ? {} : { scale: press, rotate: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 420, damping: 18, mass: 0.6 }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
