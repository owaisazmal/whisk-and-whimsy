import Marquee from "../motion/Marquee";
import { Sparkle } from "../art/Botanicals";

const TOP = [
  "Cakesicles",
  "Number cakes",
  "Cinnamon rolls",
  "Hand-iced cookies",
  "Mini loaf cakes",
  "Dipped pretzels",
];

const BOTTOM = [
  "Baked to order",
  "Small batch",
  "Colour matched",
  "Decorated by hand",
  "Party packages",
  "Gift wrapped",
];

function Row({ words, tone, sparkle }) {
  return (
    <>
      {words.map((w) => (
        <span key={w} className="flex items-center">
          <span className={`wonk px-6 font-display text-2xl font-black whitespace-nowrap sm:text-4xl ${tone}`}>
            {w}
          </span>
          <Sparkle tone={sparkle} className="size-5 shrink-0 sm:size-7" />
        </span>
      ))}
    </>
  );
}

/** Two counter-rotating ribbons that pin the hero to the rest of the page. */
export default function Ticker() {
  return (
    <div className="relative z-10 -mt-2 overflow-hidden py-6">
      <div className="-rotate-[1.6deg]">
        <Marquee speed={34} className="border-y-[3px] border-ink bg-forest py-3">
          <Row words={TOP} tone="text-cream" sparkle="fill-sunbutter" />
        </Marquee>
      </div>

      <div className="mt-3 rotate-[1.3deg]">
        <Marquee speed={40} reverse className="border-y-[3px] border-ink bg-coral py-3">
          <Row words={BOTTOM} tone="text-ink" sparkle="fill-paper" />
        </Marquee>
      </div>
    </div>
  );
}
