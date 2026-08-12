import { motion, useReducedMotion } from "motion/react";
import { site } from "../../site.config";
import { Mushroom } from "../art/Botanicals";

/** Wordmark + mushroom. The cap gives a little hop on hover. */
export default function Logo({ compact = false, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <a href="#top" className={`group flex items-center gap-2.5 ${className}`} aria-label={`${site.name} — home`}>
      <motion.span
        className="grid size-10 shrink-0 place-items-center"
        whileHover={reduce ? {} : { rotate: [0, -12, 10, 0], y: -3 }}
        transition={{ duration: 0.55 }}
      >
        <Mushroom cap="fill-coral" className="size-10" />
      </motion.span>

      <span className="flex flex-col leading-none">
        <span className="wonk font-display text-lg font-black tracking-tight whitespace-nowrap text-ink sm:text-2xl">
          {site.nameParts[0]}
          <span className="text-coral"> {site.nameParts[1]} </span>
          {site.nameParts[2]}
        </span>
        {!compact && (
          <span className="hand mt-0.5 text-base text-forest">{site.tagline}</span>
        )}
      </span>
    </a>
  );
}
