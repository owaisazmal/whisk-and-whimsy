/**
 * Garden botanicals — mushrooms, flowers, trees, ferns.
 *
 * All art is inline SVG on a 0 0 100 100 grid and coloured with Tailwind
 * fill-/stroke- utilities, so a palette change in index.css repaints every
 * illustration on the page. No raster assets, nothing to re-export.
 */

const OUTLINE = "stroke-ink";
const SW = 3.2;

const base = (className) => `overflow-visible ${className}`;

/* -------------------------------------------------------------------- */

export function Mushroom({ cap = "fill-coral", dots = "fill-paper", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      {/* stem */}
      <path
        d="M36 54 C34 76 36 88 40 93 L60 93 C64 88 66 76 64 54 Z"
        className={`fill-paper ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* skirt */}
      <path
        d="M35 62 C42 68 58 68 65 62"
        className={OUTLINE}
        strokeWidth={SW}
        fill="none"
        strokeLinecap="round"
      />
      {/* cap */}
      <path
        d="M6 55 C6 25 24 10 50 10 C76 10 94 25 94 55 C94 60 89 62 84 62 L16 62 C11 62 6 60 6 55 Z"
        className={`${cap} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <ellipse cx="30" cy="34" rx="9" ry="7" className={dots} />
      <ellipse cx="58" cy="26" rx="11" ry="8" className={dots} />
      <ellipse cx="76" cy="45" rx="7" ry="5.5" className={dots} />
      <ellipse cx="44" cy="49" rx="6" ry="4.5" className={dots} />
    </svg>
  );
}

export function ToadstoolTrio({ className = "", ...rest }) {
  return (
    <svg viewBox="0 0 160 100" className={base(className)} {...rest}>
      <g transform="translate(0,18) scale(0.62)">
        <Inner cap="fill-grape" />
      </g>
      <g transform="translate(52,0) scale(0.9)">
        <Inner cap="fill-coral" />
      </g>
      <g transform="translate(112,26) scale(0.5)">
        <Inner cap="fill-aqua" />
      </g>
    </svg>
  );
}

/** Shared mushroom body used by ToadstoolTrio (avoids nesting <svg>). */
function Inner({ cap }) {
  return (
    <>
      <path
        d="M36 54 C34 76 36 88 40 93 L60 93 C64 88 66 76 64 54 Z"
        className={`fill-paper ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M6 55 C6 25 24 10 50 10 C76 10 94 25 94 55 C94 60 89 62 84 62 L16 62 C11 62 6 60 6 55 Z"
        className={`${cap} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <ellipse cx="32" cy="34" rx="9" ry="7" className="fill-paper" />
      <ellipse cx="60" cy="27" rx="10" ry="7" className="fill-paper" />
    </>
  );
}

/* -------------------------------------------------------------------- */

export function Daisy({ petal = "fill-paper", center = "fill-sunbutter", className = "", ...rest }) {
  const petals = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      {petals.map((deg) => (
        <ellipse
          key={deg}
          cx="50"
          cy="24"
          rx="11"
          ry="19"
          transform={`rotate(${deg} 50 50)`}
          className={`${petal} ${OUTLINE}`}
          strokeWidth={SW}
        />
      ))}
      <circle cx="50" cy="50" r="15" className={`${center} ${OUTLINE}`} strokeWidth={SW} />
    </svg>
  );
}

export function Bloom({ petal = "fill-diamond", center = "fill-berry", className = "", ...rest }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      {petals.map((deg) => (
        <path
          key={deg}
          d="M50 48 C34 46 26 32 32 20 C38 8 56 6 62 16 C68 26 62 42 50 48 Z"
          transform={`rotate(${deg} 50 50)`}
          className={`${petal} ${OUTLINE}`}
          strokeWidth={SW}
          strokeLinejoin="round"
        />
      ))}
      <circle cx="50" cy="50" r="12" className={`${center} ${OUTLINE}`} strokeWidth={SW} />
      <circle cx="46" cy="46" r="3" className="fill-paper/70" />
    </svg>
  );
}

export function Tulip({ petal = "fill-coral", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      <path
        d="M50 46 L50 96"
        className={OUTLINE}
        strokeWidth={SW}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M50 70 C36 70 28 62 26 52 C40 50 50 58 50 70 Z"
        className={`fill-botanist ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M50 82 C64 82 72 74 74 64 C60 62 50 70 50 82 Z"
        className={`fill-botanist ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M28 26 C28 12 38 6 50 6 C62 6 72 12 72 26 C72 42 62 52 50 52 C38 52 28 42 28 26 Z"
        className={`${petal} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M50 8 L50 50 M36 12 C34 30 40 44 50 50 M64 12 C66 30 60 44 50 50"
        className={OUTLINE} strokeWidth={2.2} fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

/* -------------------------------------------------------------------- */

export function Leaf({ tone = "fill-botanist", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      <path
        d="M14 86 C14 40 44 12 88 10 C90 54 60 86 14 86 Z"
        className={`${tone} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M18 84 C40 62 62 38 84 16"
        className={OUTLINE}
        strokeWidth={2.4}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M40 62 L36 44 M56 46 L54 28 M28 74 L22 60"
        className={OUTLINE}
        strokeWidth={2}
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function Fern({ tone = "stroke-forest", className = "", ...rest }) {
  const leaflets = [22, 32, 42, 52, 62, 72, 82];
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      <path
        d="M50 98 C48 70 46 40 56 8"
        className={tone}
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />
      {leaflets.map((y, i) => {
        const spread = 30 - i * 3.2;
        const x = 50 - (y - 50) * 0.14;
        return (
          <g key={y}>
            <path
              d={`M${x} ${y} C${x - spread * 0.6} ${y - 4} ${x - spread} ${y - 10} ${x - spread} ${y - 16}`}
              className={tone}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
            />
            <path
              d={`M${x} ${y} C${x + spread * 0.6} ${y - 4} ${x + spread} ${y - 10} ${x + spread} ${y - 16}`}
              className={tone}
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
            />
          </g>
        );
      })}
    </svg>
  );
}

export function Clover({ tone = "fill-matcha", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      <path d="M50 56 C52 74 50 86 44 96" className={OUTLINE} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {[0, 120, 240].map((deg) => (
        <path
          key={deg}
          d="M50 52 C36 52 26 42 26 30 C26 18 38 12 50 22 C62 12 74 18 74 30 C74 42 64 52 50 52 Z"
          transform={`rotate(${deg} 50 52) scale(0.72) translate(19 20)`}
          className={`${tone} ${OUTLINE}`}
          strokeWidth={4}
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

/* -------------------------------------------------------------------- */

export function Tree({ canopy = "fill-botanist", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      <path
        d="M44 96 L44 58 L56 58 L56 96 Z"
        className={`fill-honey ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M44 74 L32 62 M56 68 L70 56" className={OUTLINE} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* one continuous cloud outline — scalloped like a piped buttercream border */}
      <path
        d="M22 60 C8 58 4 44 14 36 C8 24 18 12 30 15 C34 4 52 2 58 12 C72 6 86 16 82 30 C94 36 92 54 78 58 C70 66 58 66 50 62 C40 68 28 68 22 60 Z"
        className={`${canopy} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <circle cx="36" cy="30" r="4" className="fill-paper/45" />
      <circle cx="64" cy="42" r="3" className="fill-paper/40" />
    </svg>
  );
}

export function BerrySprig({ berry = "fill-berry", className = "", ...rest }) {
  const dots = [
    [40, 44],
    [58, 38],
    [52, 60],
    [30, 62],
    [70, 58],
  ];
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      <path d="M50 58 C52 76 48 88 42 96" className="stroke-forest" strokeWidth={3.4} fill="none" strokeLinecap="round" />
      <path
        d="M52 74 C64 72 74 62 76 50 C62 50 52 60 52 74 Z"
        className={`fill-botanist ${OUTLINE}`}
        strokeWidth={2.6}
        strokeLinejoin="round"
      />
      {dots.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="13" className={`${berry} ${OUTLINE}`} strokeWidth={2.6} />
      ))}
      {dots.map(([cx, cy], i) => (
        <g key={`h${i}`} opacity="0.5">
          <circle cx={cx - 4} cy={cy - 4} r="3" className="fill-paper" />
        </g>
      ))}
    </svg>
  );
}

export function GrassTuft({ tone = "stroke-forest", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 60" className={base(className)} {...rest}>
      <path d="M10 58 C14 36 22 24 30 16" className={tone} strokeWidth={4} fill="none" strokeLinecap="round" />
      <path d="M30 58 C30 38 34 22 40 8" className={tone} strokeWidth={4} fill="none" strokeLinecap="round" />
      <path d="M50 58 C52 40 60 26 70 18" className={tone} strokeWidth={4} fill="none" strokeLinecap="round" />
      <path d="M70 58 C70 40 76 30 88 22" className={tone} strokeWidth={4} fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Sparkle({ tone = "fill-sunbutter", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      <path
        d="M50 2 C56 34 66 44 98 50 C66 56 56 66 50 98 C44 66 34 56 2 50 C34 44 44 34 50 2 Z"
        className={`${tone} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
    </svg>
  );
}
