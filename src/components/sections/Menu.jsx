import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { menu } from "../../data/menu";
import SectionHeading from "../ui/SectionHeading";
import Pill from "../ui/Pill";
import TreatArt from "../art/Treats";
import Reveal from "../motion/Reveal";
import Float from "../motion/Float";
import GardenScatter from "../layout/GardenScatter";
import { ScallopDivider } from "../art/Doodles";
import { Clover, Daisy, Mushroom, Sparkle } from "../art/Botanicals";
import { Ladybug, Snail } from "../art/Critters";

const SWATCH = {
  matcha: "bg-matcha",
  diamond: "bg-diamond",
  grape: "bg-grape",
  sage: "bg-sage",
  coral: "bg-coral",
};

function Item({ item, accent, index, className = "" }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 26, rotate: index % 2 ? 2 : -2 },
        show: { opacity: 1, y: 0, rotate: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? {} : { y: -5, scale: 1.015 }}
      className={`sticker-sm relative flex items-center gap-3.5 rounded-3xl bg-paper p-3 sm:gap-5 sm:p-5 ${className}`}
    >
      <div className={`grid size-16 shrink-0 place-items-center rounded-2xl border-2 border-ink sm:size-24 ${SWATCH[accent] ?? "bg-matcha"}`}>
        <Float amplitude={5} rotate={2} duration={5 + (index % 4) * 0.5}>
          <TreatArt name={item.art} className="w-11 sm:w-16" />
        </Float>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h4 className="wonk font-display text-lg leading-tight font-black text-balance sm:text-2xl">
            {item.name}
          </h4>
          <div className="shrink-0 text-right">
            <div className="wonk font-display text-xl leading-none font-black text-forest sm:text-3xl">
              ${item.price}
            </div>
            <div className="mt-0.5 text-[10px] font-bold tracking-wide text-ink-soft uppercase sm:text-[11px]">
              {item.unit}
            </div>
          </div>
        </div>

        {item.star && (
          <span className="hand text-base text-coral" title="Popular">
            ★ popular
          </span>
        )}
        <p className="mt-1 text-[13px] leading-snug text-ink-soft sm:text-sm">{item.blurb}</p>
      </div>
    </motion.li>
  );
}

export default function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <section id="menu" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <ScallopDivider fill="fill-forest" flip className="absolute inset-x-0 top-0 h-8 rotate-180" />

      <GardenScatter
        items={[
          { el: <Daisy className="size-16" />, at: "left-[3%] top-[14%]", amp: 8, rot: 4, dur: 7, drift: 30 },
          { el: <Ladybug className="size-10" />, at: "right-[5%] top-[24%]", amp: 12, rot: 10, dur: 5.5, drift: 55 },
          { el: <Clover className="size-14" />, at: "right-[8%] bottom-[12%]", amp: 7, rot: 5, dur: 8, drift: 25 },
          { el: <Snail className="size-14" />, at: "left-[6%] bottom-[8%]", amp: 5, rot: 3, dur: 9, drift: 18 },
          { el: <Sparkle tone="fill-grape" className="size-6" />, at: "left-[18%] top-[42%]", amp: 10, dur: 4.6, drift: 20 },
        ]}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5 lg:px-8">
        <SectionHeading
          kicker="the whole list"
          title="Menu"
          sub="Everything below is made to order. Flavours, colours and themes are yours to pick — the prices stay the same."
          squiggle="stroke-grape"
        />

        {/* ---------------------------- tabs ---------------------------- */}
        <Reveal variant="up" delay={0.1} className="mt-14">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex flex-wrap items-center justify-center gap-2.5"
          >
            {menu.map((cat) => {
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  onClick={() => setActiveId(cat.id)}
                  className={`relative rounded-full px-5 py-2.5 font-display text-lg font-black transition-colors sm:text-xl ${
                    isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="menu-tab"
                      className="sticker-sm absolute inset-0 -z-10 rounded-full bg-sunbutter"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {cat.name}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* --------------------------- panel ---------------------------- */}
        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              id={`panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${active.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="sticker-lg grain relative rounded-[36px] bg-paper p-4 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="hand text-2xl text-forest">{active.kicker}</span>
                    <h3 className="wonk font-display text-3xl font-black sm:text-4xl">{active.name}</h3>
                  </div>
                  <Pill tone={active.accent}>{active.items.length} option{active.items.length > 1 ? "s" : ""}</Pill>
                </div>

                <motion.ul
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
                  initial="hidden"
                  animate="show"
                  className="mt-7 grid gap-4 lg:grid-cols-2"
                >
                  {active.items.map((item, i) => (
                    <Item
                      key={item.name}
                      item={item}
                      accent={active.accent}
                      index={i}
                      className={active.items.length === 1 ? "lg:col-span-2" : ""}
                    />
                  ))}
                </motion.ul>

                {active.note && (
                  <p className="hand mt-7 flex items-start gap-2 text-xl text-forest">
                    <Mushroom cap="fill-coral" className="mt-0.5 size-6 shrink-0" />
                    {active.note}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal variant="up" className="mt-10 text-center">
          <p className="text-base text-ink-soft">
            Allergies, dietary swaps or something not on the list?{" "}
            <a href="#requests" className="marker font-extrabold text-ink underline decoration-wavy underline-offset-4">
              Ask us anyway
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
