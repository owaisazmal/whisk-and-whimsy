import { testimonials } from "../../data/menu";
import Carousel from "../ui/Carousel";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../motion/Reveal";
import Float from "../motion/Float";
import { Blob, WaveDivider } from "../art/Doodles";
import { Daisy, Sparkle } from "../art/Botanicals";
import { Butterfly, Dragonfly } from "../art/Critters";

const TONES = {
  diamond: "bg-diamond",
  grape: "bg-grape",
  matcha: "bg-matcha",
  coral: "bg-coral",
};

function QuoteCard({ item }) {
  return (
    <figure className={`sticker grain relative flex h-full flex-col rounded-[34px] p-7 sm:p-9 ${TONES[item.accent] ?? "bg-matcha"}`}>
      <span
        aria-hidden="true"
        className="wonk absolute -top-2 right-6 font-display text-8xl leading-none font-black text-ink/15"
      >
        &rdquo;
      </span>

      <blockquote className="relative flex-1 font-display text-xl leading-snug font-bold sm:text-2xl">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <figcaption className="relative mt-7 flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-paper font-display text-lg font-black">
          {item.name.charAt(0)}
        </span>
        <span>
          <span className="block font-extrabold">{item.name}</span>
          <span className="block text-sm text-ink/70">{item.detail}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-aqua/35 py-24 sm:py-32">
      <WaveDivider fill="fill-sage/50" className="absolute inset-x-0 top-0 h-16 rotate-180" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Blob tone="fill-paper/50" className="absolute -left-24 top-16 size-96" />
        <Blob tone="fill-diamond/40" className="absolute -right-20 bottom-0 size-80" />
        <Float amplitude={18} rotate={9} duration={7} className="absolute left-[7%] bottom-[14%] hidden lg:block">
          <Dragonfly className="size-16" />
        </Float>
        <Float amplitude={16} rotate={7} duration={8} delay={0.7} className="absolute right-[6%] top-[18%] hidden lg:block">
          <Butterfly upper="fill-coral" lower="fill-sunbutter" className="size-20" />
        </Float>
        <Float amplitude={8} rotate={4} duration={6} className="absolute left-[14%] top-[12%] hidden sm:block">
          <Daisy className="size-12" />
        </Float>
        <Sparkle tone="fill-sunbutter" className="absolute right-[22%] bottom-[22%] size-7 animate-twinkle" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          kicker="nice things people said"
          title="Word of mouth"
          sub="Mostly collected from text messages sent at 11pm after a party."
          squiggle="stroke-forest"
        />

        <Reveal variant="up" delay={0.1} className="mt-16">
          <Carousel
            label="Customer reviews"
            delay={5200}
            gapClassName="gap-6"
            slideClassName="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2"
            dotActive="bg-forest"
            dotIdle="bg-paper hover:bg-matcha"
          >
            {testimonials.map((item) => (
              <QuoteCard key={item.name} item={item} />
            ))}
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
