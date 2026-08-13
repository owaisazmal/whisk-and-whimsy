# Caked Up — bakery site (first pass)

Bakery site with a whimsical garden *aesthetic* — bugs, mushrooms and
botanicals as decoration, not a claim about the business. Built from the
client's two mood boards: the pastel "garden umbrella" palette and the
watercolour hedgehog board.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

React 19 · Vite · Tailwind v4 · Motion (Framer) · Embla Carousel.

---

## Where to change things

| I want to change…                     | Edit                                             |
| ------------------------------------- | ------------------------------------------------ |
| Business name, phone, email, hours    | `src/site.config.js`                             |
| Footer credit line / build attribution | `src/site.config.js` (`builtBy`)                |
| Menu items and prices                 | `src/data/menu.js`                               |
| Party packages / testimonials / steps | `src/data/menu.js`                               |
| Colours, fonts, the sticker look      | `src/index.css` (`@theme` block)                 |
| Section order                         | `src/App.jsx`                                    |

Nothing hard-codes the business name — it all flows from `site.config.js`.

## Palette

Pulled straight off the mood boards, plus a few edible neutrals the treats
needed. All defined as Tailwind theme colours in `src/index.css`, so
`bg-matcha`, `fill-coral`, `stroke-forest` etc. work everywhere.

`matcha #D1EFBD` · `botanist #89D385` · `aqua #6CD1F0` · `grape #A1A1F7` ·
`diamond #EFCCEA` · `blush #F5CCCC` · `coral #FAA0A2` · `berry #C92B29` ·
`sunbutter #F8D048` · `olive #979920` · `sage #DCDE9E`

## Structure

```
src/
  site.config.js          brand copy + nav
  data/menu.js            menu, packages, testimonials, steps
  index.css               theme tokens, keyframes, sticker/grain/marker utilities
  components/
    motion/               reusable animation primitives
    ui/                   Button, Pill, PriceTag, SectionHeading, Carousel
    art/                  every illustration on the site (inline SVG)
    layout/               Nav, Footer, Logo, GardenScatter
    sections/             Hero, Ticker, FeaturedTreats, Menu, Packages,
                          Story, Testimonials, Requests
```

### The animation module

Each is a drop-in wrapper — compose them rather than writing one-off animations.
All of them respect `prefers-reduced-motion` (entrances become plain fades,
infinite loops and autoplay stop entirely).

| Component  | What it does                                                    |
| ---------- | --------------------------------------------------------------- |
| `Reveal`   | Scroll-triggered entrance. `variant="up\|pop\|wonk\|sprout\|…"`  |
| `Stagger`  | Container + `Stagger.Item` for list entrances                    |
| `Float`    | Endless bobbing/rotating — every critter uses it                 |
| `Drift`    | Scroll parallax, spring-smoothed                                 |
| `Marquee`  | Seamless infinite ticker                                         |
| `Wobble`   | Hover lift/tilt + press squash for anything clickable            |

Entrance timings and easings live in `components/motion/variants.js` — change
them there and the whole site's personality shifts at once.

### Carousel

One component (`ui/Carousel.jsx`) drives both the featured-treats slider and the
testimonials slider: drag/swipe, arrows, dot pager, autoplay that pauses on
hover. Pass `slideClassName` to control how many slides are visible per
breakpoint.

## Illustrations

Every image is hand-authored inline SVG under `components/art/` — nothing raster,
nothing to re-export, and they recolour automatically with the palette.

- `Botanicals.jsx` — mushrooms, daisies, blooms, tulips, ferns, clover, trees,
  berry sprigs, grass, sparkles
- `Critters.jsx` — ladybug, bee, butterfly, snail, dragonfly, and the hedgehog
  mascot from the mood board
- `Treats.jsx` — one illustration per menu item, all routed through
  `<TreatArt name="cakesicle" />`
- `Doodles.jsx` — scallop/wave/grass section dividers, squiggles, arrows, blobs,
  starbursts, washi tape

**To swap in real photography later**, change the `REGISTRY` map at the bottom of
`Treats.jsx` to return `<img>` elements. Every card on the site goes through
`TreatArt`, so that one edit updates all of them.

## Still to wire up

- **The request form** (`sections/Requests.jsx`) currently opens the visitor's
  mail client with everything pre-filled. Swap `handleSubmit` for a `fetch()` to
  Formspree / Resend / an API route once the client picks an inbox.
- **Copy is placeholder** — business name, story, testimonials, hours, phone and
  the `500+ orders` stats are all invented. Prices are the client's real ones.
- **Party package contents** are a plausible guess; only the three prices
  ($80 / $155 / $215) and the $5.50 wrapping add-on came from the client.
