/**
 * Section transitions and hand-drawn marginalia.
 * Dividers are full-bleed SVGs with preserveAspectRatio="none" so they stretch
 * to any viewport without distorting the illustrations around them.
 */

/** Piped buttercream scallops — the default seam between sections. */
export function ScallopDivider({ fill = "fill-cream", flip = false, className = "" }) {
  const n = 24;
  const w = 1440;
  const step = w / n;
  let d = `M0 60`;
  for (let i = 0; i < n; i += 1) {
    d += ` A${step / 2} ${step / 2} 0 0 0 ${(i + 1) * step} 60`;
  }
  d += ` L${w} 120 L0 120 Z`;

  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path d={d} className={fill} />
    </svg>
  );
}

/** Softer rolling wave, for calmer seams. */
export function WaveDivider({ fill = "fill-cream", flip = false, className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${flip ? "rotate-180" : ""} ${className}`}
    >
      <path
        d="M0 54 C120 4 240 4 360 44 C480 84 600 88 720 60 C840 32 960 24 1080 52 C1200 80 1320 84 1440 44 L1440 120 L0 120 Z"
        className={fill}
      />
    </svg>
  );
}

/** Grassy horizon with a few blades poking up — used above the footer. */
export function GrassDivider({ fill = "fill-forest", className = "" }) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block w-full ${className}`}
    >
      <path
        d="M0 40 C60 22 90 46 140 34 C190 22 210 44 260 36 C310 28 340 48 400 38 C460 28 480 46 540 36 C600 26 630 48 690 38 C750 28 780 46 840 34 C900 22 930 44 990 36 C1050 28 1080 48 1140 38 C1200 28 1230 46 1290 34 C1350 22 1390 44 1440 34 L1440 80 L0 80 Z"
        className={fill}
      />
    </svg>
  );
}

/** Hand-drawn underline for headings. */
export function Squiggle({ tone = "stroke-coral", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 200 20" fill="none" aria-hidden="true" className={className} {...rest}>
      <path
        d="M4 13 C28 4 44 18 70 11 C96 4 112 18 138 11 C160 5 176 15 196 8"
        className={tone}
        strokeWidth={6}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Curved arrow for pointing at things. */
export function ArrowDoodle({ tone = "stroke-forest", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className} {...rest}>
      <path
        d="M10 12 C46 6 78 26 78 62"
        className={tone}
        strokeWidth={5}
        strokeLinecap="round"
      />
      <path d="M64 48 L78 66 L92 46" className={tone} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Organic background blob — soft colour fields behind sections. */
export function Blob({ tone = "fill-matcha", className = "", ...rest }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className} {...rest}>
      <path
        d="M164 52 C186 82 178 126 148 152 C118 178 70 184 42 160 C14 136 6 84 26 52 C46 20 96 4 128 14 C150 21 152 35 164 52 Z"
        className={tone}
      />
    </svg>
  );
}

/** Comic-book burst behind price tags and badges. */
export function StarBurst({ tone = "fill-sunbutter", points = 14, className = "", ...rest }) {
  const cx = 50;
  const cy = 50;
  let d = "";
  for (let i = 0; i < points * 2; i += 1) {
    const r = i % 2 === 0 ? 48 : 36;
    const a = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} {...rest}>
      <path d={`${d}Z`} className={`${tone} stroke-ink`} strokeWidth={3} strokeLinejoin="round" />
    </svg>
  );
}

/** Washi tape strip, for the scrapbook feel on photo cards. */
export function Tape({ tone = "bg-aqua/70", className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute h-7 w-28 ${tone} ${className}`}
      style={{
        clipPath:
          "polygon(3% 0%, 97% 4%, 100% 96%, 4% 100%, 0% 52%)",
        boxShadow: "0 2px 6px rgb(47 67 39 / 0.18)",
      }}
    />
  );
}
