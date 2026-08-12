import { motion, useReducedMotion } from "motion/react";
import { featured } from "../../data/menu";
import Carousel from "../ui/Carousel";
import SectionHeading from "../ui/SectionHeading";
import Pill, { PriceTag } from "../ui/Pill";
import TreatArt from "../art/Treats";
import Reveal from "../motion/Reveal";
import Float from "../motion/Float";
import { Blob } from "../art/Doodles";
import { Mushroom } from "../art/Botanicals";
import { Butterfly } from "../art/Critters";

const BACKDROPS = {
  matcha: "bg-matcha",
  diamond: "bg-diamond",
  coral: "bg-coral",
  aqua: "bg-aqua",
  grape: "bg-grape",
  sage: "bg-sage",
  sunbutter: "bg-sunbutter",
  blush: "bg-blush",
};

function TreatCard({ item, index }) {
  const reduce = useReducedMotion();
  const tilt = index % 2 === 0 ? -1.4 : 1.4;

  return (
    <motion.article
      whileHover={reduce ? {} : { y: -10, rotate: 0, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      style={{ rotate: tilt }}
      className="sticker group relative h-full rounded-[30px] bg-paper p-5 pb-6"
    >
      <div className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-3xl border-[3px] border-ink ${BACKDROPS[item.accent] ?? "bg-matcha"}`}>
        <Blob tone="fill-paper/35" className="absolute -right-8 -bottom-10 size-40" />
        <Float amplitude={7} rotate={2.5} duration={5.5 + index * 0.35}>
          <TreatArt name={item.art} className="w-36 drop-shadow-[0_10px_0_rgba(47,67,39,0.10)] sm:w-40" />
        </Float>

        <Pill tone="paper" className="absolute top-3 left-3">
          {item.tag}
        </Pill>
      </div>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="wonk font-display text-2xl leading-tight font-black">{item.name}</h3>
          <p className="hand mt-1 text-lg text-forest">
            {item.unit === "from" ? "from " : ""}${item.price}
            {item.unit !== "from" ? ` ${item.unit}` : ""}
          </p>
        </div>
        <PriceTag price={item.price} unit={item.unit === "from" ? "start" : item.unit.replace("/ ", "per ")} className="size-16 shrink-0" />
      </div>
    </motion.article>
  );
}

export default function FeaturedTreats() {
  return (
    <section id="treats" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.12]">
        <Blob tone="fill-cream" className="absolute -left-24 top-10 size-96" />
        <Blob tone="fill-cream" className="absolute -right-32 bottom-0 size-[28rem]" />
      </div>

      <Float amplitude={14} rotate={8} duration={7} className="absolute right-[6%] top-12 hidden lg:block">
        <Butterfly upper="fill-sunbutter" lower="fill-coral" className="size-20" />
      </Float>
      <Float amplitude={6} rotate={3} duration={9} className="absolute left-[4%] bottom-10 hidden lg:block">
        <Mushroom cap="fill-grape" className="size-24" />
      </Float>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="[&_h2]:text-cream [&_p]:text-matcha [&_span.hand]:text-sunbutter">
          <SectionHeading
            kicker="the usual suspects"
            title="Things people order twice"
            sub="A rotating handful of what leaves the kitchen most. Drag it, flick it, or let it run."
            squiggle="stroke-sunbutter"
          />
        </div>

        <Reveal variant="up" delay={0.1} className="mt-16">
          <Carousel
            label="Featured treats"
            delay={3800}
            dotActive="bg-sunbutter"
            dotIdle="bg-cream hover:bg-matcha"
            slideClassName="min-w-0 shrink-0 grow-0 basis-[82%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            {featured.map((item, i) => (
              <TreatCard key={item.name} item={item} index={i} />
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
