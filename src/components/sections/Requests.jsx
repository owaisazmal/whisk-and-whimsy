import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { site } from "../../site.config";
import Button from "../ui/Button";
import Reveal from "../motion/Reveal";
import Float from "../motion/Float";
import Marquee from "../motion/Marquee";
import { ArrowDoodle, Blob, GrassDivider, Squiggle, StarBurst } from "../art/Doodles";
import { Bloom, Mushroom, Sparkle, Tulip } from "../art/Botanicals";
import { Bee, Butterfly, Ladybug, Snail } from "../art/Critters";

const INTERESTS = [
  "Cakesicles",
  "Decorated cookies",
  "A number cake",
  "Cupcakes",
  "Cinnamon rolls",
  "A party package",
  "Something weird",
];

const FIELD =
  "sticker-sm w-full rounded-2xl bg-paper px-4 py-3 text-base font-semibold text-ink placeholder:font-normal placeholder:text-ink-soft/70 focus:outline-none";

export default function Requests() {
  const [form, setForm] = useState({ name: "", email: "", date: "", details: "" });
  const [picked, setPicked] = useState([]);
  const [sent, setSent] = useState(false);

  const toggle = (tag) =>
    setPicked((p) => (p.includes(tag) ? p.filter((t) => t !== tag) : [...p, tag]));

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  /**
   * No backend yet — this opens the visitor's mail client with everything
   * pre-filled. Swap this handler for a fetch() to Formspree / Resend / an
   * API route when the client picks an inbox.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Date needed: ${form.date || "not sure yet"}`,
      `Interested in: ${picked.length ? picked.join(", ") : "not sure yet"}`,
      "",
      "Details:",
      form.details,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Order request — ${form.name || "new customer"}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  return (
    <section id="requests" className="relative overflow-hidden bg-grape/45 pt-24 pb-40 sm:pt-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Blob tone="fill-diamond/60" className="absolute -left-32 top-10 size-[30rem]" />
        <Blob tone="fill-aqua/40" className="absolute -right-28 bottom-24 size-96" />
        <Float amplitude={18} rotate={10} duration={6.5} className="absolute left-[6%] top-[10%] hidden lg:block">
          <Bee className="size-16" />
        </Float>
        <Float amplitude={20} rotate={8} duration={7.5} delay={0.5} className="absolute right-[8%] top-[16%] hidden lg:block">
          <Butterfly upper="fill-matcha" lower="fill-sunbutter" className="size-20" />
        </Float>
        <Sparkle tone="fill-sunbutter" className="absolute left-[18%] bottom-[26%] hidden size-8 animate-twinkle lg:block" />
      </div>

      {/* a loud little ribbon */}
      <div className="relative -rotate-[1.2deg]">
        <Marquee speed={26} className="border-y-[3px] border-ink bg-sunbutter py-2.5">
          {["REQUESTS!?", "YES REALLY", "ASK FOR ANYTHING", "NO IDEA TOO SILLY", "TELL US THE VIBE"].map((w) => (
            <span key={w} className="flex items-center">
              <span className="wonk px-6 font-display text-xl font-black whitespace-nowrap sm:text-2xl">{w}</span>
              <Mushroom cap="fill-coral" className="size-6 shrink-0" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative mx-auto mt-20 max-w-6xl px-5 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* ------------------------- pitch ------------------------- */}
          <div>
            <Reveal variant="pop">
              <span className="hand text-2xl text-forest">go on then</span>
            </Reveal>

            <Reveal variant="wonk" delay={0.06}>
              <h2 className="wonk relative mt-1 text-5xl leading-[0.95] font-black text-ink sm:text-6xl lg:text-7xl">
                Requests
                <span className="text-berry">!?</span>
                <Squiggle tone="stroke-coral" className="absolute -bottom-3 left-0 h-4 w-48" />
              </h2>
            </Reveal>

            <Reveal variant="up" delay={0.14}>
              <p className="mt-9 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
                Yes — really. If you want a cake shaped like a toadstool, cookies with beetles on
                them, or a flavour that isn&rsquo;t written down anywhere, this is the box for it.
                We&rsquo;ll reply with a sketch and a price within two days.
              </p>
            </Reveal>

            <Reveal variant="up" delay={0.2}>
              <ul className="mt-8 space-y-3">
                {[
                  ["📅", site.leadTime],
                  ["🎨", "Colour matching from a photo, screenshot or paint chip"],
                  ["💌", `Questions? ${site.email}`],
                ].map(([icon, text]) => (
                  <li key={text} className="flex items-start gap-3 text-[15px] font-semibold text-ink-soft">
                    <span className="sticker-sm grid size-9 shrink-0 place-items-center rounded-xl bg-paper text-base">
                      {icon}
                    </span>
                    <span className="pt-1.5">{text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="relative mt-12 hidden items-end gap-4 lg:flex">
              <Float amplitude={6} rotate={3} duration={7}>
                <Mushroom cap="fill-berry" className="size-24" />
              </Float>
              <Float amplitude={8} rotate={5} duration={6} delay={0.4}>
                <Tulip petal="fill-coral" className="size-20" />
              </Float>
              <Float amplitude={5} rotate={4} duration={8} delay={0.8}>
                <Bloom petal="fill-paper" center="fill-sunbutter" className="size-16" />
              </Float>
              <ArrowDoodle tone="stroke-forest" className="absolute -top-8 right-0 size-16 rotate-12" />
            </div>
          </div>

          {/* ------------------------- form ------------------------- */}
          <Reveal variant="wonkAlt" delay={0.1}>
            <div className="sticker-lg grain relative rounded-[36px] bg-paper p-6 sm:p-9">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[28rem] flex-col items-center justify-center text-center"
                  >
                    <div className="relative grid size-32 place-items-center">
                      <StarBurst tone="fill-matcha" className="absolute inset-0 size-full animate-spin-slow" />
                      <Ladybug className="relative size-16" />
                    </div>
                    <h3 className="wonk mt-6 font-display text-3xl font-black">Off it goes!</h3>
                    <p className="mt-3 max-w-[34ch] text-ink-soft">
                      Your mail app should have opened with everything filled in. If it didn&rsquo;t,
                      email us directly at{" "}
                      <a href={`mailto:${site.email}`} className="font-bold text-forest underline decoration-wavy underline-offset-4">
                        {site.email}
                      </a>
                      .
                    </p>
                    <Button tone="matcha" size="sm" className="mt-7" onClick={() => setSent(false)}>
                      Send another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="hand text-xl text-forest">your name</span>
                        <input
                          required
                          value={form.name}
                          onChange={set("name")}
                          placeholder="Jamie"
                          className={`mt-1.5 ${FIELD}`}
                        />
                      </label>

                      <label className="block">
                        <span className="hand text-xl text-forest">email</span>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={set("email")}
                          placeholder="jamie@email.com"
                          className={`mt-1.5 ${FIELD}`}
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="hand text-xl text-forest">when do you need it?</span>
                      <input type="date" value={form.date} onChange={set("date")} className={`mt-1.5 ${FIELD}`} />
                    </label>

                    <fieldset>
                      <legend className="hand text-xl text-forest">what are you after?</legend>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {INTERESTS.map((tag) => {
                          const on = picked.includes(tag);
                          return (
                            <button
                              type="button"
                              key={tag}
                              onClick={() => toggle(tag)}
                              aria-pressed={on}
                              className={`sticker-sm rounded-full px-3.5 py-1.5 text-sm font-extrabold transition-colors ${
                                on ? "bg-forest text-cream" : "bg-cream text-ink hover:bg-matcha"
                              }`}
                            >
                              {tag}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <label className="block">
                      <span className="hand text-xl text-forest">tell us the vibe</span>
                      <textarea
                        required
                        rows={5}
                        value={form.details}
                        onChange={set("details")}
                        placeholder="Sage green and cream, garden party, and I really want mushrooms on something…"
                        className={`mt-1.5 resize-none ${FIELD}`}
                      />
                    </label>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                      <Button tone="berry" size="lg" type="submit">
                        Send the request
                      </Button>
                      <span className="hand flex items-center gap-2 text-lg text-forest">
                        we reply within 2 days
                        <Snail className="size-8" />
                      </span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      <GrassDivider fill="fill-forest" className="absolute inset-x-0 bottom-0 h-20" />
    </section>
  );
}
