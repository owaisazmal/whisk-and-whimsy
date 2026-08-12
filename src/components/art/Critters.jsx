import { useId } from "react";

/**
 * The bugs. Every critter is a self-contained SVG component with a `className`
 * for sizing and colour props for re-skinning, so they can be scattered
 * anywhere without dragging image assets along.
 */

const OUTLINE = "stroke-ink";
const SW = 3.2;
const base = (className) => `overflow-visible ${className}`;

/* -------------------------------------------------------------------- */

export function Ladybug({ shell = "fill-berry", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      {/* legs */}
      <g className={OUTLINE} strokeWidth={3} strokeLinecap="round" fill="none">
        <path d="M20 44 L6 34" />
        <path d="M16 60 L2 60" />
        <path d="M20 76 L8 86" />
        <path d="M80 44 L94 34" />
        <path d="M84 60 L98 60" />
        <path d="M80 76 L92 86" />
      </g>
      {/* antennae */}
      <g className={OUTLINE} strokeWidth={3} strokeLinecap="round" fill="none">
        <path d="M40 20 C34 10 30 8 24 6" />
        <path d="M60 20 C66 10 70 8 76 6" />
      </g>
      <circle cx="22" cy="5" r="4.5" className={`fill-ink`} />
      <circle cx="78" cy="5" r="4.5" className={`fill-ink`} />

      {/* shell */}
      <ellipse cx="50" cy="58" rx="36" ry="34" className={`${shell} ${OUTLINE}`} strokeWidth={SW} />
      {/* head */}
      <path
        d="M28 32 C32 20 40 14 50 14 C60 14 68 20 72 32 Z"
        className={`fill-ink`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M50 30 L50 92" className={OUTLINE} strokeWidth={SW} strokeLinecap="round" />
      {/* spots */}
      <circle cx="32" cy="48" r="7.5" className="fill-ink" />
      <circle cx="68" cy="48" r="7.5" className="fill-ink" />
      <circle cx="34" cy="72" r="6" className="fill-ink" />
      <circle cx="66" cy="72" r="6" className="fill-ink" />
      {/* shine */}
      <ellipse cx="36" cy="38" rx="8" ry="5" transform="rotate(-28 36 38)" className="fill-paper/45" />
    </svg>
  );
}

/* -------------------------------------------------------------------- */

export function Bee({ body = "fill-sunbutter", className = "", ...rest }) {
  const id = useId();
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      <defs>
        <clipPath id={`${id}-body`}>
          <ellipse cx="52" cy="58" rx="30" ry="26" />
        </clipPath>
      </defs>

      {/* wings, behind */}
      <ellipse
        cx="42"
        cy="26"
        rx="20"
        ry="12"
        transform="rotate(-28 42 26)"
        className={`fill-aqua/55 ${OUTLINE}`}
        strokeWidth={2.6}
      />
      <ellipse
        cx="68"
        cy="24"
        rx="17"
        ry="10"
        transform="rotate(16 68 24)"
        className={`fill-aqua/55 ${OUTLINE}`}
        strokeWidth={2.6}
      />

      {/* stinger */}
      <path d="M80 66 L94 74 L78 78 Z" className={`fill-ink`} strokeLinejoin="round" />

      {/* body */}
      <ellipse cx="52" cy="58" rx="30" ry="26" className={`${body} ${OUTLINE}`} strokeWidth={SW} />
      <g clipPath={`url(#${id}-body)`} className="fill-ink">
        <rect x="42" y="28" width="11" height="62" transform="rotate(-12 47 58)" />
        <rect x="62" y="28" width="11" height="62" transform="rotate(-12 67 58)" />
      </g>
      <ellipse cx="52" cy="58" rx="30" ry="26" className={OUTLINE} strokeWidth={SW} fill="none" />

      {/* head */}
      <circle cx="22" cy="52" r="15" className={`fill-ink`} />
      <circle cx="17" cy="48" r="4" className="fill-paper" />
      <path d="M16 40 C10 30 8 26 4 22 M28 40 C26 28 26 24 24 18" className={OUTLINE} strokeWidth={2.6} fill="none" strokeLinecap="round" />
      <circle cx="4" cy="20" r="3.4" className="fill-ink" />
      <circle cx="24" cy="16" r="3.4" className="fill-ink" />
    </svg>
  );
}

/* -------------------------------------------------------------------- */

export function Butterfly({ upper = "fill-grape", lower = "fill-diamond", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      {/* antennae */}
      <path d="M46 34 C40 20 34 12 26 6 M54 34 C60 20 66 12 74 6" className={OUTLINE} strokeWidth={2.8} fill="none" strokeLinecap="round" />
      <circle cx="25" cy="5" r="3.6" className="fill-ink" />
      <circle cx="75" cy="5" r="3.6" className="fill-ink" />

      {/* lower wings */}
      <path
        d="M48 54 C34 62 14 68 8 84 C4 96 20 98 32 90 C42 84 47 70 48 54 Z"
        className={`${lower} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M52 54 C66 62 86 68 92 84 C96 96 80 98 68 90 C58 84 53 70 52 54 Z"
        className={`${lower} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* upper wings */}
      <path
        d="M48 56 C34 52 10 44 6 28 C3 14 18 8 30 16 C42 24 47 40 48 56 Z"
        className={`${upper} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M52 56 C66 52 90 44 94 28 C97 14 82 8 70 16 C58 24 53 40 52 56 Z"
        className={`${upper} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />

      {/* wing markings */}
      <circle cx="26" cy="30" r="6" className="fill-paper/70" />
      <circle cx="74" cy="30" r="6" className="fill-paper/70" />
      <circle cx="27" cy="82" r="4" className="fill-paper/60" />
      <circle cx="73" cy="82" r="4" className="fill-paper/60" />

      {/* body */}
      <path d="M50 30 C56 44 56 68 50 84 C44 68 44 44 50 30 Z" className={`fill-ink`} />
    </svg>
  );
}

/* -------------------------------------------------------------------- */

export function Snail({ shell = "fill-honey", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      {/* body */}
      <path
        d="M8 84 C4 66 14 56 30 56 L70 56 C84 56 92 66 92 78 C92 84 88 88 82 88 L14 88 C10 88 8 86 8 84 Z"
        className={`fill-matcha ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* eye stalks */}
      <path d="M18 60 C12 46 10 36 12 26 M32 58 C32 46 34 38 40 30" className={OUTLINE} strokeWidth={3} fill="none" strokeLinecap="round" />
      <circle cx="11" cy="22" r="6" className={`fill-paper ${OUTLINE}`} strokeWidth={2.6} />
      <circle cx="42" cy="27" r="6" className={`fill-paper ${OUTLINE}`} strokeWidth={2.6} />
      <circle cx="11" cy="22" r="2.4" className="fill-ink" />
      <circle cx="42" cy="27" r="2.4" className="fill-ink" />
      {/* smile */}
      <path d="M18 74 C22 79 28 79 32 74" className={OUTLINE} strokeWidth={2.6} fill="none" strokeLinecap="round" />

      {/* shell */}
      <circle cx="62" cy="46" r="32" className={`${shell} ${OUTLINE}`} strokeWidth={SW} />
      <path
        d="M62 20 A26 26 0 1 1 40 58 A19 19 0 1 1 74 52 A11 11 0 1 1 56 46"
        className={OUTLINE}
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------- */

export function Dragonfly({ wing = "fill-aqua/50", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={base(className)} {...rest}>
      <g className={`${wing} ${OUTLINE}`} strokeWidth={2.4}>
        <ellipse cx="24" cy="34" rx="24" ry="8" transform="rotate(-14 24 34)" />
        <ellipse cx="76" cy="34" rx="24" ry="8" transform="rotate(14 76 34)" />
        <ellipse cx="28" cy="52" rx="20" ry="7" transform="rotate(10 28 52)" />
        <ellipse cx="72" cy="52" rx="20" ry="7" transform="rotate(-10 72 52)" />
      </g>
      <path
        d="M50 20 C56 20 58 26 56 36 C55 56 54 76 50 94 C46 76 45 56 44 36 C42 26 44 20 50 20 Z"
        className={`fill-grape-deep ${OUTLINE}`}
        strokeWidth={2.8}
        strokeLinejoin="round"
      />
      <circle cx="50" cy="16" r="10" className={`fill-ink`} />
      <circle cx="45" cy="13" r="3" className="fill-paper/70" />
    </svg>
  );
}

/* -------------------------------------------------------------------- */

/**
 * House mascot, straight off the client's watercolour board.
 * The quills are generated around the body arc rather than hand-drawn so the
 * spacing stays even.
 */
export function Hedgehog({ className = "", ...rest }) {
  const cx = 50;
  const cy = 84;
  const r = 40;
  const spikes = Array.from({ length: 12 }, (_, i) => {
    const a = Math.PI * (1 - i / 11) * 0.94 + Math.PI * 0.03;
    const d = 0.115;
    const p = (rad, ang) => [cx + Math.cos(ang) * rad, cy - Math.sin(ang) * rad];
    const [x1, y1] = p(r - 2, a + d);
    const [x2, y2] = p(r + 13, a);
    const [x3, y3] = p(r - 2, a - d);
    return `M${x1.toFixed(1)} ${y1.toFixed(1)} L${x2.toFixed(1)} ${y2.toFixed(1)} L${x3.toFixed(1)} ${y3.toFixed(1)} Z`;
  });

  return (
    <svg viewBox="0 0 130 100" className={base(className)} {...rest}>
      {/* quills */}
      <g className={`fill-olive ${OUTLINE}`} strokeWidth={2.2} strokeLinejoin="round">
        {spikes.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      {/* body */}
      <path
        d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy} Z`}
        className={`fill-olive ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* quill texture */}
      <g className="stroke-ink/30" strokeWidth={2} fill="none" strokeLinecap="round">
        <path d="M30 78 L36 64" />
        <path d="M44 80 L50 62" />
        <path d="M58 78 L66 64" />
        <path d="M70 80 L78 68" />
      </g>
      {/* snout */}
      <path
        d="M84 66 C102 62 122 70 126 78 C122 88 104 92 86 88 C80 82 80 72 84 66 Z"
        className={`fill-dough ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <circle cx="124" cy="77" r="5" className="fill-ink" />
      <circle cx="94" cy="72" r="4.4" className="fill-ink" />
      <circle cx="92.6" cy="70.6" r="1.6" className="fill-paper" />
      <circle cx="92" cy="83" r="6" className="fill-coral/60" />
      <path d="M104 84 C108 88 114 88 118 85" className={OUTLINE} strokeWidth={2.2} fill="none" strokeLinecap="round" />
      {/* ear */}
      <circle cx="80" cy="60" r="7" className={`fill-blush ${OUTLINE}`} strokeWidth={2.6} />
      {/* feet */}
      <ellipse cx="34" cy="90" rx="9" ry="5" className={`fill-blush ${OUTLINE}`} strokeWidth={2.6} />
      <ellipse cx="72" cy="90" rx="9" ry="5" className={`fill-blush ${OUTLINE}`} strokeWidth={2.6} />
    </svg>
  );
}
