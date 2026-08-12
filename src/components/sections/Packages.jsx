import { motion, useReducedMotion } from "motion/react";
import { packageAddOn, packages } from "../../data/menu";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Pill from "../ui/Pill";
import Stagger from "../motion/Stagger";
import Reveal from "../motion/Reveal";
import Float from "../motion/Float";
import { Blob, StarBurst, WaveDivider } from "../art/Doodles";
import { BerrySprig, Mushroom, Tree } from "../art/Botanicals";
import { Bee, Butterfly } from "../art/Critters";

const TONES = {
  matcha: { card: "bg-matcha", tab: "bg-botanist" },
  grape: { card: "bg-grape", tab: "bg-grape-deep" },
  coral: { card: "bg-coral", tab: "bg-berry" },
};

function Check() {
  return (
    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper">
      <svg viewBox="0 0 24 24" className="size-3" fill="none" aria-hidden="true">
        <path d="M4 13l5 5L20 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function PackageCard({ pkg, index }) {
  const reduce = useReducedMotion();
  const tone = TONES[pkg.accent] ?? TONES.matcha;

  return (
    <Stagger.Item variant={index === 1 ? "pop" : index === 0 ? "wonk" : "wonkAlt"}>
      <motion.article
        whileHover={reduce ? {} : { y: -12, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        style={{ rotate: index === 1 ? 0 : index === 0 ? -1.6 : 1.6 }}
        className={`sticker relative flex h-full flex-col rounded-[34px] p-7 ${tone.card} ${
          pkg.featured ? "lg:-mt-8 lg:pb-10" : ""
        }`}
      >
        {pkg.featured && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <Float amplitude={5} duration={4}>
              <div className="relative grid size-24 place-items-center">
                <StarBurst tone="fill-sunbutter" className="absolute inset-0 size-full" />
                <span className="relative text-center font-display text-xs leading-tight font-black tracking-tight uppercase">
                  Most
                  <br />
                  booked
                </span>
              </div>
            </Float>
          </div>
        )}

        <div className={pkg.featured ? "mt-12" : ""}>
          <Pill tone="paper">{pkg.size}</Pill>
          <h3 className="wonk mt-4 font-display text-3xl font-black sm:text-4xl">{pkg.name}</h3>

          <div className="mt-3 flex items-end gap-2">
            <span className="wonk font-display text-6xl leading-none font-black">${pkg.price}</span>
            <span className="hand pb-2 text-xl text-ink/70">/ package</span>
          </div>
        </div>

        <ul className="mt-7 flex flex-1 flex-col gap-3">
          {pkg.includes.map((line) => (
            <li key={line} className="flex items-start gap-2.5 text-[15px] leading-snug font-semibold">
              <Check />
              {line}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Button href="#requests" tone="paper" className="w-full justify-center">
            Book this package
          </Button>
        </div>
      </motion.article>
    </Stagger.Item>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden bg-sage/50 py-24 sm:py-32">
      <WaveDivider fill="fill-cream" className="absolute inset-x-0 top-0 h-16 rotate-180" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Blob tone="fill-botanist/25" className="absolute -left-32 top-1/3 size-[30rem]" />
        <Blob tone="fill-diamond/40" className="absolute -right-28 bottom-10 size-96" />
        <Float amplitude={16} rotate={10} duration={7} className="absolute left-[6%] top-[16%] hidden lg:block">
          <Bee className="size-16" />
        </Float>
        <Float amplitude={18} rotate={8} duration={8} delay={0.6} className="absolute right-[8%] top-[12%] hidden lg:block">
          <Butterfly upper="fill-aqua" lower="fill-grape" className="size-20" />
        </Float>
        <div className="absolute -bottom-2 left-[3%] hidden items-end gap-6 lg:flex">
          <Tree canopy="fill-botanist" className="size-40" />
          <Mushroom cap="fill-coral" className="size-16" />
        </div>
        <div className="absolute -bottom-2 right-[4%] hidden items-end gap-5 lg:flex">
          <BerrySprig className="size-24" />
          <Tree canopy="fill-forest" className="size-32" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          kicker="one box, whole party"
          title="Party packages"
          sub="Pre-built spreads for when you'd rather not do the maths. Every package is colour-matched to your theme at no extra cost."
          squiggle="stroke-berry"
        />

        <Stagger className="mt-20 grid gap-8 lg:grid-cols-3 lg:items-start" stagger={0.12}>
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.name} pkg={pkg} index={i} />
          ))}
        </Stagger>

        <Reveal variant="up" delay={0.15} className="mt-14">
          <div className="sticker mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-[30px] bg-paper p-6 text-center sm:flex-row sm:text-left">
            <Float amplitude={6} rotate={4} duration={5}>
              <div className="grid size-16 shrink-0 place-items-center rounded-2xl border-2 border-ink bg-diamond text-3xl">
                🎀
              </div>
            </Float>
            <div className="flex-1">
              <h4 className="wonk font-display text-2xl font-black">
                {packageAddOn.label} — add ${packageAddOn.price.toFixed(2)}
              </h4>
              <p className="mt-1 text-sm text-ink-soft">{packageAddOn.note}</p>
            </div>
            <Button href="#requests" tone="sunbutter" size="sm">
              Add it on
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
