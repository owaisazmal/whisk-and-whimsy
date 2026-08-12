import { site } from "../../site.config";
import { steps } from "../../data/menu";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../motion/Reveal";
import Stagger from "../motion/Stagger";
import Float from "../motion/Float";
import Drift from "../motion/Drift";
import { ArrowDoodle, Blob, Tape } from "../art/Doodles";
import { Bloom, Fern, Mushroom, Sparkle, ToadstoolTrio } from "../art/Botanicals";
import { Hedgehog, Ladybug, Snail } from "../art/Critters";
import { CinnamonRoll, Cookie } from "../art/Treats";

const STEP_TONES = ["bg-matcha", "bg-aqua", "bg-diamond", "bg-sunbutter"];

export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Blob tone="fill-matcha/50" className="absolute -right-40 top-0 size-[34rem]" />
        <Blob tone="fill-blush/40" className="absolute -left-32 bottom-20 size-96" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        {/* ------------------------- about ------------------------- */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* collage */}
          <Reveal variant="left" className="relative order-2 lg:order-1">
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <Drift speed={-20} className="absolute inset-0">
                <div className="sticker-lg grain absolute inset-[8%] rotate-[-3deg] rounded-[40px] bg-matcha" />
              </Drift>

              <div className="absolute inset-x-[10%] bottom-[12%]">
                <Float amplitude={6} rotate={2} duration={7}>
                  <Hedgehog className="w-full drop-shadow-[0_12px_0_rgba(47,67,39,0.12)]" />
                </Float>
              </div>

              <Float amplitude={10} rotate={5} duration={6} className="absolute -left-2 top-[6%] w-[30%]">
                <div className="sticker relative rounded-3xl bg-paper p-3">
                  <Tape tone="bg-coral/70" className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
                  <CinnamonRoll className="w-full" />
                </div>
              </Float>

              <Float amplitude={12} rotate={-4} duration={7.5} delay={0.5} className="absolute right-0 top-[26%] w-[28%] sm:-right-3">
                <div className="sticker relative rounded-3xl bg-paper p-3">
                  <Tape tone="bg-aqua/70" className="-top-3 left-1/2 -translate-x-1/2 rotate-6" />
                  <Cookie icing="fill-diamond" className="w-full" />
                </div>
              </Float>

              <Float amplitude={5} duration={8} className="absolute bottom-[4%] -left-4 w-[22%]">
                <ToadstoolTrio className="w-full" />
              </Float>

              <Float amplitude={9} rotate={8} duration={5.5} className="absolute right-[6%] bottom-[2%] w-[16%]">
                <Ladybug className="w-full" />
              </Float>

              <Sparkle tone="fill-sunbutter" className="absolute top-[2%] right-[24%] size-8 animate-twinkle" />
              <Sparkle tone="fill-grape" className="absolute bottom-[30%] left-[4%] size-6 animate-twinkle" style={{ animationDelay: "1.2s" }} />
            </div>
          </Reveal>

          {/* copy */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              kicker="hello, hi, hey"
              title="A very small kitchen"
              squiggle="stroke-botanist"
            />

            <Reveal variant="up" delay={0.12}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  {site.name} started as one stand mixer, a stack of cookie cutters and a stubborn
                  refusal to make anything boring. Everything still comes out of that same kitchen —
                  in small batches, in the 48 hours before you pick it up.
                </p>
                <p>
                  We like <span className="marker font-bold text-ink">mushrooms on cakes</span>, ladybugs
                  on cookies, and colours that don&rsquo;t quite behave. If you arrive with a screenshot
                  and a feeling, that&rsquo;s enough to start.
                </p>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button href="#requests" tone="forest">
                  Tell us what you want
                </Button>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hand text-xl text-forest underline decoration-wavy underline-offset-4"
                >
                  see more on {site.instagram}
                </a>
              </div>
            </Reveal>

            <Reveal variant="up" delay={0.28}>
              <dl className="mt-10 grid grid-cols-3 gap-3">
                {[
                  ["500+", "orders baked"],
                  ["100%", "made to order"],
                  ["5–7", "days lead time"],
                ].map(([n, l]) => (
                  <div key={l} className="sticker-sm rounded-2xl bg-paper px-3 py-4 text-center">
                    <dt className="wonk font-display text-3xl font-black text-forest">{n}</dt>
                    <dd className="mt-1 text-xs font-bold tracking-wide text-ink-soft uppercase">{l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        {/* ------------------------- steps ------------------------- */}
        <div className="relative mt-28">
          <SectionHeading
            kicker="how this works"
            title="Four small steps"
            squiggle="stroke-aqua"
          />

          <ArrowDoodle
            tone="stroke-coral"
            className="absolute -top-4 right-[8%] hidden size-20 -scale-x-100 lg:block"
          />

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {steps.map((step, i) => (
              <Stagger.Item key={step.title} variant={i % 2 ? "wonkAlt" : "wonk"}>
                <div className="sticker relative h-full rounded-[30px] bg-paper p-6 pt-8">
                  <div
                    className={`sticker-sm absolute -top-6 left-6 grid size-14 place-items-center rounded-full font-display text-2xl font-black ${STEP_TONES[i]}`}
                  >
                    {i + 1}
                  </div>

                  <div className="absolute top-4 right-5 opacity-70">
                    {i === 0 && <Bloom petal="fill-diamond" className="size-9" />}
                    {i === 1 && <Fern tone="stroke-forest" className="size-9" />}
                    {i === 2 && <Mushroom cap="fill-coral" className="size-9" />}
                    {i === 3 && <Snail className="size-9" />}
                  </div>

                  <h4 className="wonk mt-4 font-display text-2xl font-black">{step.title}</h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </Stagger.Item>
            ))}
          </Stagger>

          <Reveal variant="fade" delay={0.2}>
            <p className="hand mt-10 text-center text-2xl text-forest">{site.leadTime}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
