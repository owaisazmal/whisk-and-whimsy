import { motion, useReducedMotion } from "motion/react";
import { revealVariants, staggerContainer, transitionFor } from "./variants";

/**
 * Wrap a list so its children animate in one after another.
 *
 *   <Stagger className="grid gap-6">
 *     {items.map(i => <Stagger.Item key={i.id}>…</Stagger.Item>)}
 *   </Stagger>
 */
export default function Stagger({
  children,
  stagger = 0.09,
  delayChildren = 0,
  amount = 0.2,
  once = true,
  as = "div",
  className = "",
  ...rest
}) {
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Item({
  children,
  variant = "wonk",
  duration = 0.62,
  as = "div",
  className = "",
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  const key = reduce ? "fade" : variant;

  return (
    <Tag
      className={className}
      variants={revealVariants[key] ?? revealVariants.wonk}
      transition={transitionFor(key, reduce ? 0.3 : duration, 0)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

Stagger.Item = Item;
