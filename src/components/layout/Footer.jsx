import { navLinks, site } from "../../site.config";
import Reveal from "../motion/Reveal";
import Float from "../motion/Float";
import Wobble from "../motion/Wobble";
import { GrassTuft, Mushroom, Sparkle, Tree } from "../art/Botanicals";
import { Hedgehog, Ladybug, Snail } from "../art/Critters";

function Column({ title, children }) {
  return (
    <div>
      <h3 className="hand text-2xl text-sunbutter">{title}</h3>
      <div className="mt-3 space-y-2 text-[15px] text-matcha">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest pt-20 pb-40 text-cream sm:pb-48">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
        <div className="flex items-end justify-between px-4 opacity-90">
          <Float amplitude={4} rotate={2} duration={8}>
            <Tree canopy="fill-botanist" className="w-24 sm:w-32" />
          </Float>
          <Mushroom cap="fill-coral" className="w-12 sm:w-16" />
          <GrassTuft tone="stroke-botanist" className="w-20 sm:w-28" />
          <Float amplitude={5} rotate={3} duration={7} delay={0.5}>
            <Snail shell="fill-sunbutter" className="w-14 sm:w-20" />
          </Float>
          <GrassTuft tone="stroke-matcha" className="hidden w-24 sm:block" />
          <Mushroom cap="fill-grape" className="w-10 sm:w-14" />
          <Float amplitude={4} rotate={2} duration={9} delay={1}>
            <Tree canopy="fill-matcha" className="w-20 sm:w-28" />
          </Float>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <Reveal variant="up">
            <div className="flex items-center gap-3">
              <Float amplitude={6} rotate={5} duration={5}>
                <Mushroom cap="fill-coral" className="size-12" />
              </Float>
              <span className="wonk font-display text-3xl font-black">
                {site.nameParts[0]}
                <span className="text-sunbutter"> {site.nameParts[1]} </span>
                {site.nameParts[2]}
              </span>
            </div>

            <p className="mt-5 max-w-[38ch] leading-relaxed text-matcha">{site.blurb}</p>

            <div className="mt-6 flex items-center gap-3">
              <Wobble
                as="a"
                href={site.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${site.name} on Instagram`}
                className="sticker-sm grid size-11 place-items-center rounded-2xl bg-diamond text-ink"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2.2" />
                  <circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" />
                </svg>
              </Wobble>

              <Wobble
                as="a"
                href={`mailto:${site.email}`}
                aria-label="Email us"
                className="sticker-sm grid size-11 place-items-center rounded-2xl bg-sunbutter text-ink"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2.2" />
                  <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </Wobble>

              <Wobble
                as="a"
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                aria-label="Call us"
                className="sticker-sm grid size-11 place-items-center rounded-2xl bg-coral text-ink"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                  <path
                    d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </Wobble>
            </div>
          </Reveal>

          <Reveal variant="up" delay={0.06}>
            <Column title="wander off to">
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="transition-colors hover:text-sunbutter">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Column>
          </Reveal>

          <Reveal variant="up" delay={0.12}>
            <Column title="we're about">
              <ul className="space-y-2">
                {site.hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-3">
                    <span>{h.day}</span>
                    <span className="text-cream/70">{h.time}</span>
                  </li>
                ))}
              </ul>
            </Column>
          </Reveal>

          <Reveal variant="up" delay={0.18}>
            <Column title="say hello">
              <p>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-sunbutter">
                  {site.email}
                </a>
              </p>
              <p>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="transition-colors hover:text-sunbutter">
                  {site.phone}
                </a>
              </p>
              <p className="text-cream/70">{site.city}</p>
            </Column>
          </Reveal>
        </div>

        {/* mascot sign-off */}
        <div className="relative mt-16 flex flex-col items-center">
          <Float amplitude={7} rotate={3} duration={6}>
            <Hedgehog className="w-32 sm:w-40" />
          </Float>
          <p className="hand mt-3 text-2xl text-sunbutter">thanks for scrolling this far</p>
          <Sparkle tone="fill-sunbutter" className="absolute top-0 right-1/3 size-6 animate-twinkle" />
          <Ladybug className="absolute bottom-8 left-1/3 size-8 animate-sway" />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t-2 border-matcha/25 pt-6 text-xs text-cream/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Baked with butter.
          </p>
          <p>Placeholder copy &amp; illustrations — swap in real photos any time.</p>
        </div>
      </div>
    </footer>
  );
}
