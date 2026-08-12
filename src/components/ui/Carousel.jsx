import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "motion/react";
import Wobble from "../motion/Wobble";

/**
 * One carousel for the whole site.
 *
 * Drag / swipe / arrow-key / trackpad all work out of the box via Embla;
 * this wrapper adds the sticker-styled arrows, the dot pager, autoplay that
 * pauses on hover, and a reduced-motion path that disables autoplay entirely.
 *
 *   <Carousel slidesToShow="basis-[80%] sm:basis-1/2 lg:basis-1/3">
 *     {items.map(i => <div key={i.id}>…</div>)}
 *   </Carousel>
 */
export default function Carousel({
  children,
  autoplay = true,
  delay = 4200,
  options = {},
  slideClassName = "min-w-0 shrink-0 grow-0 basis-full",
  className = "",
  /**
   * Spacing between slides. Applied as left padding on each slide, with a
   * matching negative margin on the track — NOT as flex `gap`.
   *
   * In loop mode Embla repositions wrapped slides by a distance derived from
   * slide box widths, and CSS `gap` is not part of that box. Using `gap` makes
   * the spacing collapse at the seam where the last slide meets the first.
   * Padding lives inside the slide's box, so Embla measures it correctly.
   */
  gap = "1.5rem",
  showArrows = true,
  showDots = true,
  label = "carousel",
  dotActive = "bg-forest",
  dotIdle = "bg-paper hover:bg-matcha",
}) {
  const reduce = useReducedMotion();

  const plugins =
    autoplay && !reduce
      ? [Autoplay({ delay, stopOnInteraction: false, stopOnMouseEnter: true })]
      : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps", dragFree: false, ...options },
    plugins,
  );

  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState([]);

  const onSelect = useCallback((api) => setSelected(api.selectedScrollSnap()), []);

  useEffect(() => {
    if (!emblaApi) return undefined;
    setSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", (api) => {
      setSnaps(api.scrollSnapList());
      onSelect(api);
    });
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);
  const prev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const slides = Array.isArray(children) ? children : [children];

  return (
    <div className={className}>
      <div className="overflow-hidden" ref={emblaRef} aria-roledescription="carousel" aria-label={label}>
        <div className="flex touch-pan-y" style={{ marginLeft: `calc(${gap} * -1)` }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className={slideClassName}
              style={{ paddingLeft: gap }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {(showArrows || showDots) && (
        <div className="mt-8 flex items-center justify-center gap-5">
          {showArrows && (
            <Wobble as="button" tilt={-6} lift={-2} onClick={prev} aria-label="Previous slide"
              className="sticker-sm grid size-11 place-items-center rounded-full bg-paper text-ink">
              <Chevron className="rotate-180" />
            </Wobble>
          )}

          {showDots && (
            <div className="flex items-center gap-2.5">
              {snaps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === selected}
                  className={`h-3 rounded-full border-2 border-ink transition-all duration-300 ${
                    i === selected ? `w-8 ${dotActive}` : `w-3 ${dotIdle}`
                  }`}
                />
              ))}
            </div>
          )}

          {showArrows && (
            <Wobble as="button" tilt={6} lift={-2} onClick={next} aria-label="Next slide"
              className="sticker-sm grid size-11 place-items-center rounded-full bg-paper text-ink">
              <Chevron />
            </Wobble>
          )}
        </div>
      )}
    </div>
  );
}

function Chevron({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`size-5 ${className}`} aria-hidden="true">
      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
