import { useId } from "react";

/**
 * Product illustrations — one per menu item.
 *
 * These stand in for photography until the client sends real shots. Because
 * they're SVG they never pixelate, they recolour with the palette, and they
 * cost a few KB instead of a few MB. Swap any one for an <img> later without
 * touching the components that render them (everything goes through
 * <TreatArt name="…" />).
 */

const OUTLINE = "stroke-ink";
const SW = 3;
const base = (className) => `overflow-visible ${className}`;

/** Sprinkles scattered on a treat — deterministic, so no render-to-render jitter. */
function Sprinkles({ points, tones = ["fill-berry", "fill-aqua", "fill-sunbutter", "fill-grape"] }) {
  return (
    <g>
      {points.map(([x, y, rot], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width="8"
          height="3.6"
          rx="1.8"
          transform={`rotate(${rot} ${x + 4} ${y + 1.8})`}
          className={tones[i % tones.length]}
        />
      ))}
    </g>
  );
}

/** Scalloped (piped-edge) circle used by cookies. */
function scallopPath(cx, cy, r, n) {
  let d = "";
  for (let i = 0; i < n; i += 1) {
    const a1 = (i / n) * Math.PI * 2;
    const a2 = ((i + 1) / n) * Math.PI * 2;
    const x1 = cx + Math.cos(a1) * r;
    const y1 = cy + Math.sin(a1) * r;
    const x2 = cx + Math.cos(a2) * r;
    const y2 = cy + Math.sin(a2) * r;
    const br = ((Math.PI * 2 * r) / n / 2) * 1.2;
    if (i === 0) d += `M${x1.toFixed(2)} ${y1.toFixed(2)}`;
    d += ` A${br.toFixed(2)} ${br.toFixed(2)} 0 0 1 ${x2.toFixed(2)} ${y2.toFixed(2)}`;
  }
  return `${d} Z`;
}

/* ====================================================================== */

export function Cakesicle({ shell = "fill-diamond", drip = "fill-grape", className = "", ...rest }) {
  const id = useId();
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <defs>
        <clipPath id={`${id}-c`}>
          <path d="M28 46 C28 24 42 12 60 12 C78 12 92 24 92 46 L92 76 C92 88 80 94 60 94 C40 94 28 88 28 76 Z" />
        </clipPath>
      </defs>
      <rect x="53" y="80" width="14" height="36" rx="7" className={`fill-honey ${OUTLINE}`} strokeWidth={SW} />
      <path
        d="M28 46 C28 24 42 12 60 12 C78 12 92 24 92 46 L92 76 C92 88 80 94 60 94 C40 94 28 88 28 76 Z"
        className={`${shell} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${id}-c)`}>
        <path
          d="M26 10 L94 10 L94 44 C88 54 84 40 78 50 C72 60 66 44 60 54 C54 64 48 46 42 54 C37 60 31 50 26 44 Z"
          className={drip}
        />
        <ellipse cx="42" cy="30" rx="7" ry="12" transform="rotate(-18 42 30)" className="fill-paper/35" />
      </g>
      <path
        d="M28 46 C28 24 42 12 60 12 C78 12 92 24 92 46 L92 76 C92 88 80 94 60 94 C40 94 28 88 28 76 Z"
        className={OUTLINE}
        strokeWidth={SW}
        fill="none"
        strokeLinejoin="round"
      />
      <Sprinkles
        points={[
          [38, 62, 24],
          [64, 68, -32],
          [50, 78, 12],
          [74, 58, 58],
          [44, 46, -8],
        ]}
      />
    </svg>
  );
}

/* ====================================================================== */

export function RiceKrispie({ className = "", ...rest }) {
  const puffs = [
    [32, 42], [46, 38], [60, 44], [74, 40], [88, 46],
    [36, 56], [52, 58], [68, 54], [84, 60],
    [30, 70], [46, 72], [62, 70], [78, 74], [90, 68],
    [40, 84], [58, 84], [76, 86],
  ];
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <path
        d="M20 40 C20 32 26 26 36 26 L86 26 C96 26 102 32 102 40 L102 84 C102 92 96 98 86 98 L36 98 C26 98 20 92 20 84 Z"
        className={`fill-dough ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <g className="fill-caramel/60">
        {puffs.map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx="6" ry="4.4" transform={`rotate(${(i * 47) % 90} ${x} ${y})`} />
        ))}
      </g>
      <g className={OUTLINE} strokeWidth={2} fill="none" opacity="0.35">
        {puffs.slice(0, 9).map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx="6" ry="4.4" transform={`rotate(${(i * 47) % 90} ${x} ${y})`} />
        ))}
      </g>
      {/* drizzle */}
      <path
        d="M24 46 C36 38 44 54 56 46 C68 38 76 54 88 46 C94 42 98 44 100 46"
        className="stroke-icing"
        strokeWidth={5}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M24 72 C36 64 44 80 56 72 C68 64 76 80 88 72 C94 68 98 70 100 72"
        className="stroke-berry"
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />
      <Sprinkles points={[[36, 62, 20], [70, 62, -25], [52, 88, 40]]} />
    </svg>
  );
}

/* ====================================================================== */

export function Pretzel({ dip = "stroke-diamond", className = "", ...rest }) {
  const knot =
    "M60 100 C20 96 14 44 44 36 C62 31 72 52 60 70 C48 52 58 31 76 36 C106 44 100 96 60 100";
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <path d={knot} className={OUTLINE} strokeWidth={24} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d={knot} className="stroke-caramel" strokeWidth={18} fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M60 100 C20 96 14 44 44 36"
        className={OUTLINE}
        strokeWidth={24}
        fill="none"
        strokeLinecap="round"
      />
      <path d="M60 100 C20 96 14 44 44 36" className={dip} strokeWidth={18} fill="none" strokeLinecap="round" />
      <path
        d="M60 100 C42 98 30 86 24 70"
        className="stroke-paper/40"
        strokeWidth={5}
        fill="none"
        strokeLinecap="round"
      />
      <Sprinkles points={[[18, 62, 70], [26, 84, 30], [40, 92, -10], [22, 46, 50]]} />
    </svg>
  );
}

/* ====================================================================== */

export function Oreo({ dip = "fill-aqua", className = "", ...rest }) {
  const id = useId();
  const notches = Array.from({ length: 18 }, (_, i) => (i / 18) * 360);
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <defs>
        <clipPath id={`${id}-o`}>
          <circle cx="60" cy="60" r="46" />
        </clipPath>
      </defs>
      <circle cx="60" cy="60" r="46" className={`fill-cocoa ${OUTLINE}`} strokeWidth={SW} />
      <g className="fill-ink/35">
        {notches.map((deg) => (
          <rect key={deg} x="58.4" y="17" width="3.2" height="9" rx="1.6" transform={`rotate(${deg} 60 60)`} />
        ))}
      </g>
      <circle cx="60" cy="60" r="32" className="stroke-ink/30" strokeWidth={2.5} fill="none" />
      <circle cx="60" cy="60" r="13" className="fill-ink/25" />
      <g clipPath={`url(#${id}-o)`}>
        <path
          d="M6 66 C18 60 24 74 36 68 C48 62 54 76 66 70 C78 64 86 76 98 70 C106 66 112 68 116 66 L116 116 L6 116 Z"
          className={dip}
        />
        <path
          d="M6 66 C18 60 24 74 36 68 C48 62 54 76 66 70 C78 64 86 76 98 70 C106 66 112 68 116 66"
          className={OUTLINE}
          strokeWidth={2.6}
          fill="none"
        />
      </g>
      <circle cx="60" cy="60" r="46" className={OUTLINE} strokeWidth={SW} fill="none" />
      <Sprinkles points={[[34, 84, 22], [58, 90, -18], [78, 82, 46], [46, 76, -40]]} />
    </svg>
  );
}

/* ====================================================================== */

export function LoafCake({ glaze = "fill-icing", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <path
        d="M18 48 C18 40 24 34 36 34 L84 34 C96 34 102 40 102 48 L96 98 C95 105 89 109 80 109 L40 109 C31 109 25 105 24 98 Z"
        className={`fill-caramel ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M18 48 C18 40 24 34 36 34 L84 34 C96 34 102 40 102 48 L101 60 C96 66 93 54 88 61 C83 68 77 55 71 63 C65 71 59 57 53 65 C47 73 41 57 35 64 C30 69 23 60 19 55 Z"
        className={`${glaze} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <g className="fill-cocoa/25">
        <ellipse cx="40" cy="82" rx="5" ry="3.4" />
        <ellipse cx="62" cy="92" rx="4" ry="2.8" />
        <ellipse cx="80" cy="78" rx="5" ry="3.2" />
        <ellipse cx="52" cy="70" rx="4" ry="2.6" />
      </g>
      <circle cx="66" cy="44" r="7" className={`fill-berry ${OUTLINE}`} strokeWidth={2.4} />
      <path d="M66 37 C66 32 70 30 74 30" className="stroke-forest" strokeWidth={2.6} fill="none" strokeLinecap="round" />
      <Sprinkles points={[[34, 48, 18], [84, 52, -22], [50, 42, 8]]} />
    </svg>
  );
}

/* ====================================================================== */

export function Wafer({ dip = "fill-blush", className = "", ...rest }) {
  const id = useId();
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <defs>
        <clipPath id={`${id}-w`}>
          <rect x="26" y="18" width="68" height="86" rx="8" />
        </clipPath>
      </defs>
      <rect x="26" y="18" width="68" height="86" rx="8" className={`fill-dough ${OUTLINE}`} strokeWidth={SW} />
      <g clipPath={`url(#${id}-w)`}>
        <g className="stroke-caramel/50" strokeWidth={2.4}>
          {[32, 46, 60, 74, 88].map((x) => (
            <line key={x} x1={x} y1="14" x2={x} y2="108" />
          ))}
          {[30, 44, 58, 72, 86, 100].map((y) => (
            <line key={y} x1="22" y1={y} x2="98" y2={y} />
          ))}
        </g>
        <path
          d="M22 62 C32 56 38 70 50 64 C62 58 68 72 80 66 C88 62 94 64 98 62 L98 110 L22 110 Z"
          className={dip}
        />
        <path
          d="M22 62 C32 56 38 70 50 64 C62 58 68 72 80 66 C88 62 94 64 98 62"
          className={OUTLINE}
          strokeWidth={2.6}
          fill="none"
        />
      </g>
      <rect x="26" y="18" width="68" height="86" rx="8" className={OUTLINE} strokeWidth={SW} fill="none" />
      <Sprinkles points={[[38, 76, 24], [62, 84, -20], [74, 92, 40]]} />
    </svg>
  );
}

/* ====================================================================== */

export function Cookie({ icing = "fill-matcha", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <path d={scallopPath(60, 60, 46, 11)} className={`fill-dough ${OUTLINE}`} strokeWidth={SW} strokeLinejoin="round" />
      <path d={scallopPath(60, 60, 35, 11)} className={`${icing} ${OUTLINE}`} strokeWidth={2.6} strokeLinejoin="round" />
      {/* piped dots around the icing */}
      <g className="fill-icing">
        {Array.from({ length: 11 }, (_, i) => {
          const a = (i / 11) * Math.PI * 2 + 0.28;
          return <circle key={i} cx={60 + Math.cos(a) * 27} cy={60 + Math.sin(a) * 27} r="3.4" />;
        })}
      </g>
      {/* little flower in the middle */}
      <g>
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="60"
            cy="48"
            rx="6"
            ry="9"
            transform={`rotate(${deg} 60 60)`}
            className={`fill-diamond ${OUTLINE}`}
            strokeWidth={2}
          />
        ))}
        <circle cx="60" cy="60" r="6" className={`fill-sunbutter ${OUTLINE}`} strokeWidth={2} />
      </g>
    </svg>
  );
}

/* ====================================================================== */

export function Cupcake({ liner = "fill-grape", frosting = "fill-diamond", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      {/* liner */}
      <path
        d="M28 62 L92 62 L83 108 C82 113 78 116 72 116 L48 116 C42 116 38 113 37 108 Z"
        className={`${liner} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <g className="stroke-ink/25" strokeWidth={2.4}>
        <line x1="45" y1="64" x2="43" y2="112" />
        <line x1="60" y1="64" x2="60" y2="114" />
        <line x1="75" y1="64" x2="77" y2="112" />
      </g>
      {/* frosting, piped bottom-up */}
      <path
        d="M24 64 C24 50 38 42 60 42 C82 42 96 50 96 64 Z"
        className={`${frosting} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M32 46 C32 34 44 27 60 27 C76 27 88 34 88 46 Z"
        className={`${frosting} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M42 30 C42 20 50 14 60 14 C70 14 78 20 78 30 Z"
        className={`${frosting} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* cherry */}
      <circle cx="60" cy="12" r="9" className={`fill-berry ${OUTLINE}`} strokeWidth={2.6} />
      <path d="M60 4 C62 -2 68 -4 74 -2" className="stroke-forest" strokeWidth={3} fill="none" strokeLinecap="round" />
      <circle cx="57" cy="9" r="2.4" className="fill-paper/60" />
      <Sprinkles points={[[34, 56, 22], [72, 54, -30], [50, 36, 14], [78, 38, 44]]} />
    </svg>
  );
}

/* ====================================================================== */

function Rosettes({ spots }) {
  return (
    <g>
      {spots.map(([x, y, r, tone], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} className={`${tone} ${OUTLINE}`} strokeWidth={2.2} />
          <path
            d={`M${x} ${y - r * 0.55} A${r * 0.55} ${r * 0.55} 0 1 1 ${x - r * 0.55} ${y} A${r * 0.3} ${r * 0.3} 0 1 1 ${x + r * 0.2} ${y + r * 0.1}`}
            className="stroke-ink/40"
            strokeWidth={1.8}
            fill="none"
          />
        </g>
      ))}
    </g>
  );
}

function NumeralCake({ digits, className = "", ...rest }) {
  const wide = digits.length > 1;
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <text
        x="60"
        y="88"
        textAnchor="middle"
        className={`fill-icing ${OUTLINE}`}
        strokeWidth={4}
        strokeLinejoin="round"
        style={{
          fontFamily: "Fraunces, Georgia, serif",
          fontWeight: 800,
          fontSize: wide ? 74 : 96,
          fontVariationSettings: '"SOFT" 100, "WONK" 1',
        }}
      >
        {digits}
      </text>
      <Rosettes
        spots={
          wide
            ? [
                [26, 40, 8, "fill-diamond"],
                [44, 30, 7, "fill-coral"],
                [62, 34, 8, "fill-matcha"],
                [82, 28, 7, "fill-grape"],
                [96, 42, 8, "fill-blush"],
              ]
            : [
                [34, 40, 9, "fill-diamond"],
                [52, 28, 8, "fill-coral"],
                [72, 32, 9, "fill-matcha"],
                [88, 46, 7, "fill-grape"],
              ]
        }
      />
      <g>
        <circle cx="66" cy="22" r="5" className={`fill-berry ${OUTLINE}`} strokeWidth={2} />
        <circle cx="22" cy="56" r="4.5" className={`fill-berry ${OUTLINE}`} strokeWidth={2} />
      </g>
    </svg>
  );
}

export const NumberCake = (props) => <NumeralCake digits="3" {...props} />;
export const NumberCakeDouble = (props) => <NumeralCake digits="21" {...props} />;

/* ====================================================================== */

export function RoundCake({ body = "fill-diamond", drip = "fill-icing", className = "", ...rest }) {
  const drips = [
    [22, 14], [34, 22], [46, 12], [58, 26], [70, 16], [82, 24], [94, 13],
  ];
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      {/* stand */}
      <path d="M32 108 L88 108" className={OUTLINE} strokeWidth={4} strokeLinecap="round" />
      {/* body */}
      <path
        d="M18 50 L18 90 C18 99 37 105 60 105 C83 105 102 99 102 90 L102 50 Z"
        className={`${body} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* drips */}
      <g className={drip}>
        {drips.map(([x, h], i) => (
          <path key={i} d={`M${x - 5} 48 L${x - 5} ${48 + h} A5 5 0 0 0 ${x + 5} ${48 + h} L${x + 5} 48 Z`} />
        ))}
        <ellipse cx="60" cy="48" rx="42" ry="14" />
      </g>
      <g className={OUTLINE} strokeWidth={2.6} fill="none">
        {drips.map(([x, h], i) => (
          <path key={i} d={`M${x - 5} 50 L${x - 5} ${48 + h} A5 5 0 0 0 ${x + 5} ${48 + h} L${x + 5} 50`} />
        ))}
      </g>
      <ellipse cx="60" cy="48" rx="42" ry="14" className={OUTLINE} strokeWidth={SW} fill="none" />
      {/* candles */}
      {[46, 60, 74].map((x, i) => (
        <g key={x}>
          <rect x={x - 3.5} y={20} width="7" height="24" rx="3" className={`${["fill-coral", "fill-aqua", "fill-sunbutter"][i]} ${OUTLINE}`} strokeWidth={2.2} />
          <path d={`M${x} 8 C${x + 5} 14 ${x + 4} 20 ${x} 20 C${x - 4} 20 ${x - 5} 14 ${x} 8 Z`} className={`fill-sunbutter ${OUTLINE}`} strokeWidth={2} />
        </g>
      ))}
      <Rosettes spots={[[26, 86, 7, "fill-coral"], [60, 92, 7, "fill-matcha"], [94, 86, 7, "fill-grape"]]} />
    </svg>
  );
}

/* ====================================================================== */

function Loaf({ crumb, speckle, garnish, className = "", ...rest }) {
  const bits = [
    [38, 74], [56, 84], [74, 70], [48, 62], [82, 88], [64, 60], [32, 90],
  ];
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <path
        d="M14 64 C14 46 30 32 60 32 C90 32 106 46 106 64 L106 92 C106 101 97 106 84 106 L36 106 C23 106 14 101 14 92 Z"
        className={`${crumb} ${OUTLINE}`}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      {/* the crack down the top of every quick bread */}
      <path
        d="M22 52 C36 44 48 56 62 46 C76 36 90 48 100 50"
        className="stroke-cocoa/45"
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />
      <g className={speckle}>
        {bits.map(([x, y], i) => (
          <ellipse key={i} cx={x} cy={y} rx="5" ry="3.6" transform={`rotate(${(i * 53) % 90} ${x} ${y})`} />
        ))}
      </g>
      {garnish}
    </svg>
  );
}

export const BananaBread = (props) => (
  <Loaf
    crumb="fill-caramel"
    speckle="fill-cocoa/35"
    garnish={
      <g>
        <path
          d="M74 22 C88 20 100 26 104 38 C96 34 86 32 76 34 C70 32 70 24 74 22 Z"
          className={`fill-sunbutter ${OUTLINE}`}
          strokeWidth={2.6}
          strokeLinejoin="round"
        />
      </g>
    }
    {...props}
  />
);

export const ZucchiniBread = (props) => (
  <Loaf
    crumb="fill-olive"
    speckle="fill-matcha/70"
    garnish={
      <g>
        <rect x="72" y="14" width="34" height="15" rx="7.5" transform="rotate(-14 89 21)" className={`fill-forest ${OUTLINE}`} strokeWidth={2.6} />
        <path d="M74 20 C70 14 70 10 72 6" className="stroke-forest" strokeWidth={3} fill="none" strokeLinecap="round" />
      </g>
    }
    {...props}
  />
);

export const PumpkinBread = (props) => (
  <Loaf
    crumb="fill-pumpkin"
    speckle="fill-cocoa/30"
    garnish={
      <g>
        <ellipse cx="88" cy="20" rx="17" ry="14" className={`fill-honey ${OUTLINE}`} strokeWidth={2.6} />
        <path d="M80 10 C82 18 82 24 80 30 M96 10 C94 18 94 24 96 30" className="stroke-ink/40" strokeWidth={2} fill="none" />
        <path d="M88 6 L88 2" className="stroke-forest" strokeWidth={4} strokeLinecap="round" />
      </g>
    }
    {...props}
  />
);

/* ====================================================================== */

export function CinnamonRoll({ className = "", ...rest }) {
  return (
    <svg viewBox="0 0 120 120" className={base(className)} {...rest}>
      <circle cx="60" cy="62" r="46" className={`fill-dough ${OUTLINE}`} strokeWidth={SW} />
      <path
        d="M60 24 A38 38 0 1 1 22 62 A30 30 0 1 1 60 32 A22 22 0 1 1 82 62 A14 14 0 1 1 60 48"
        className="stroke-caramel"
        strokeWidth={11}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M60 24 A38 38 0 1 1 22 62 A30 30 0 1 1 60 32 A22 22 0 1 1 82 62 A14 14 0 1 1 60 48"
        className="stroke-cocoa/45"
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
      />
      {/* icing */}
      <path
        d="M24 50 C36 42 44 58 56 50 C68 42 76 58 88 50 C94 46 98 48 100 50"
        className="stroke-icing"
        strokeWidth={8}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M28 70 C40 62 48 78 60 70 C72 62 80 78 92 70"
        className="stroke-icing"
        strokeWidth={7}
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="60" cy="62" r="46" className={OUTLINE} strokeWidth={SW} fill="none" />
    </svg>
  );
}

/* ====================================================================== */

const REGISTRY = {
  cakesicle: Cakesicle,
  krispie: RiceKrispie,
  pretzel: Pretzel,
  oreo: Oreo,
  loaf: LoafCake,
  wafer: Wafer,
  cookie: Cookie,
  cupcake: Cupcake,
  numberCake: NumberCake,
  numberCakeDouble: NumberCakeDouble,
  roundCake: RoundCake,
  bananaBread: BananaBread,
  zucchiniBread: ZucchiniBread,
  pumpkinBread: PumpkinBread,
  cinnamonRoll: CinnamonRoll,
};

/**
 * Single entry point used by every card on the site.
 * Swapping an illustration for a real photograph later means changing this
 * one map, not the twelve places that render a treat.
 */
export default function TreatArt({ name, className = "", ...rest }) {
  const Art = REGISTRY[name] ?? Cakesicle;
  return <Art className={className} {...rest} />;
}
