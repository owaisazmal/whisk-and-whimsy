import Reveal from "../motion/Reveal";
import { Squiggle } from "../art/Doodles";

/**
 * Every section header on the site: a handwritten kicker, a wonky display
 * title with a squiggle under one word, and optional supporting copy.
 */
export default function SectionHeading({
  kicker,
  title,
  sub,
  align = "center",
  squiggle = "stroke-coral",
  className = "",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : align === "right" ? "items-end text-right" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignment} ${className}`}>
      {kicker && (
        <Reveal variant="pop" duration={0.5}>
          <span className="hand text-2xl text-forest sm:text-3xl">{kicker}</span>
        </Reveal>
      )}

      <Reveal variant="wonk" delay={0.06}>
        <h2 className="wonk relative mt-1 max-w-[16ch] text-4xl font-black text-ink sm:text-5xl lg:text-6xl">
          {title}
          <Squiggle
            tone={squiggle}
            className={`absolute -bottom-3 h-4 w-40 ${align === "left" ? "left-0" : align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"}`}
          />
        </h2>
      </Reveal>

      {sub && (
        <Reveal variant="up" delay={0.14}>
          <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-ink-soft">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
