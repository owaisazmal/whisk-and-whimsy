import { motion, useReducedMotion } from "motion/react";
import { site } from "../../site.config";
import Button from "../ui/Button";
import Float from "../motion/Float";
import Drift from "../motion/Drift";
import Reveal from "../motion/Reveal";
import GardenScatter from "../layout/GardenScatter";
import { Blob, ScallopDivider, Squiggle } from "../art/Doodles";
import { Bloom, Daisy, Fern, Mushroom, Sparkle, Tulip } from "../art/Botanicals";
import { Bee, Butterfly, Dragonfly, Ladybug, Snail } from "../art/Critters";
import { Cakesicle, Cookie, Cupcake, RoundCake } from "../art/Treats";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  const line = (delay) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 40, rotate: -3 },
    animate: { opacity: 1, y: 0, rotate: 0 },
    transition: { duration: 0.85, delay, ease: EASE },
  });

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 lg:pt-44 lg:pb-32">
      {/* ---- background colour fields ---- */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-matcha/70 via-cream to-cream" />
        <Blob tone="fill-botanist/35" className="absolute -top-32 -left-40 size-[38rem] animate-spin-slow" />
        <Blob tone="fill-diamond/60" className="absolute -right-40 top-10 size-[34rem]" />
        <Blob tone="fill-aqua/30" className="absolute -bottom-40 left-1/4 size-[30rem]" />
      </div>

      {/* ---- floating garden ---- */}
      <GardenScatter
        className="-z-10"
        items={[
          { el: <Butterfly className="size-16 sm:size-20" />, at: "left-[4%] top-[18%]", amp: 22, rot: 8, dur: 7, drift: 70 },
          { el: <Ladybug className="size-10 sm:size-12" />, at: "right-[6%] top-[12%] hidden sm:block", amp: 14, rot: 12, dur: 5.5, delay: 0.6, drift: 50 },
          { el: <Bee className="size-12 sm:size-14" />, at: "left-[46%] top-[8%] hidden lg:block", amp: 18, rot: 10, dur: 6.4, delay: 1.1, drift: 90 },
          { el: <Dragonfly className="size-14" />, at: "right-[38%] bottom-[16%] hidden sm:block", amp: 16, rot: 6, dur: 8, delay: 0.4, drift: 40 },
          { el: <Sparkle tone="fill-sunbutter" className="size-8" />, at: "left-[26%] top-[30%] hidden lg:block", amp: 10, dur: 4.5, delay: 0.2, drift: 25 },
          { el: <Sparkle tone="fill-grape" className="size-6" />, at: "right-[18%] bottom-[30%]", amp: 12, dur: 5.2, delay: 1.4, drift: 35 },
          { el: <Fern tone="stroke-forest/60" className="size-40 sm:size-56" />, at: "-left-10 bottom-0", amp: 6, rot: 3, dur: 9, drift: -30 },
          { el: <Fern tone="stroke-forest/50" className="size-32 sm:size-44 -scale-x-100" />, at: "-right-6 bottom-6", amp: 6, rot: 3, dur: 10, delay: 0.8, drift: -20 },
          { el: <Snail className="size-16" />, at: "left-[12%] bottom-[6%]", amp: 5, rot: 2, dur: 7.5, drift: 15 },
        ]}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8">
        {/* ------------------------------ copy ------------------------------ */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div {...line(0.05)} className="inline-flex">
            <span className="sticker-sm inline-flex items-center gap-2 rounded-full bg-paper px-4 py-2 text-xs font-extrabold tracking-wider uppercase">
              <span className="size-2 animate-pulse rounded-full bg-coral" />
              Now taking orders for next month
            </span>
          </motion.div>

          <h1 className="wonk mt-6 text-[3.25rem] leading-[0.92] font-black text-ink sm:text-7xl lg:text-8xl">
            <motion.span {...line(0.15)} className="block">
              Whimsy,
            </motion.span>
            <motion.span {...line(0.28)} className="relative block text-forest">
              by the dozen.
              <Squiggle
                tone="stroke-coral"
                className="absolute -bottom-2 left-1/2 h-5 w-56 -translate-x-1/2 lg:left-0 lg:w-72 lg:translate-x-0"
              />
            </motion.span>
          </h1>

          <motion.p
            {...line(0.42)}
            className="mx-auto mt-10 max-w-[46ch] text-lg leading-relaxed text-ink-soft sm:text-xl lg:mx-0"
          >
            {site.blurb}
          </motion.p>

          <motion.div {...line(0.54)} className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button href="#menu" tone="forest" size="lg">
              Peek at the menu
            </Button>
            <Button href="#requests" tone="coral" size="lg">
              Requests!?
            </Button>
          </motion.div>

          <motion.ul
            {...line(0.66)}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-bold text-ink-soft lg:justify-start"
          >
            {["Baked to order", "Colour-matched to your theme", "Pickup or delivery"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="grid size-5 place-items-center rounded-full border-2 border-ink bg-matcha text-[10px]">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ------------------------------ scene ------------------------------ */}
        <div className="relative z-10 mx-auto aspect-square w-full max-w-[34rem]">
          <Blob tone="fill-matcha" className="absolute inset-0 size-full" />

          <Drift speed={-24} className="absolute inset-0">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.7, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute inset-x-[16%] top-[26%]"
            >
              <Float amplitude={8} duration={7}>
                <RoundCake className="w-full drop-shadow-[0_18px_0_rgba(47,67,39,0.12)]" />
              </Float>
            </motion.div>
          </Drift>

          {[
            { El: Cupcake, at: "left-[-6%] top-[8%] w-[34%]", d: 0.5, amp: 16, rot: 6, dur: 6 },
            { El: Cakesicle, at: "right-[-4%] top-[18%] w-[30%]", d: 0.62, amp: 20, rot: -8, dur: 7 },
            { El: Cookie, at: "right-[2%] bottom-[6%] w-[32%]", d: 0.74, amp: 14, rot: 10, dur: 6.5 },
          ].map(({ El, at, d, amp, rot, dur }) => (
            <motion.div
              key={at}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: d, ease: [0.34, 1.56, 0.64, 1] }}
              className={`absolute ${at}`}
            >
              <Float amplitude={amp} rotate={rot} duration={dur}>
                <El className="w-full" />
              </Float>
            </motion.div>
          ))}

          {/* ground planting */}
          <div className="absolute inset-x-0 bottom-[-2%] flex items-end justify-between px-2">
            <Float amplitude={4} rotate={3} duration={8}>
              <Mushroom cap="fill-coral" className="w-20 sm:w-24" />
            </Float>
            <Float amplitude={5} rotate={4} duration={6.5} delay={0.5}>
              <Tulip petal="fill-grape" className="w-16 sm:w-20" />
            </Float>
            <Float amplitude={4} rotate={3} duration={7.5} delay={1}>
              <Mushroom cap="fill-aqua" className="w-14 sm:w-16" />
            </Float>
            <Float amplitude={6} rotate={5} duration={7} delay={0.3}>
              <Bloom petal="fill-diamond" className="w-16 sm:w-20" />
            </Float>
            <Float amplitude={4} rotate={3} duration={9} delay={0.8}>
              <Daisy className="w-14 sm:w-16" />
            </Float>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <Reveal variant="fade" delay={1} className="relative z-10 mt-16 flex justify-center">
        <motion.a
          href="#treats"
          className="hand flex flex-col items-center gap-1 text-lg text-forest"
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          scroll, there&rsquo;s more
          <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
            <path d="M12 4v15m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>
      </Reveal>

      <ScallopDivider fill="fill-forest" className="absolute inset-x-0 bottom-0 -z-0 h-8" />
    </section>
  );
}
