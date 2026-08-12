import Float from "../motion/Float";
import Drift from "../motion/Drift";

/**
 * Decorative layer of floating garden things.
 *
 * Each entry pairs a parallax `Drift` with an infinite `Float`, so the scatter
 * both bobs on its own and moves at a different rate to the content as you
 * scroll. Purely ornamental — the whole layer is aria-hidden and
 * pointer-events-none so it never gets in the way of the actual page.
 *
 *   <GardenScatter items={[{ el: <Ladybug className="size-12" />, at: "top-10 left-8" }]} />
 */
export default function GardenScatter({ items = [], className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {items.map((item, i) => (
        <Drift
          key={i}
          speed={item.drift ?? 30}
          rotate={item.driftRotate ?? 0}
          className={`absolute ${item.at}`}
        >
          <Float
            amplitude={item.amp ?? 10}
            rotate={item.rot ?? 0}
            duration={item.dur ?? 6}
            delay={item.delay ?? 0}
          >
            {item.el}
          </Float>
        </Drift>
      ))}
    </div>
  );
}
