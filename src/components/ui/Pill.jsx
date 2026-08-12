const TONES = {
  matcha: "bg-matcha",
  botanist: "bg-botanist",
  aqua: "bg-aqua",
  grape: "bg-grape",
  diamond: "bg-diamond",
  blush: "bg-blush",
  coral: "bg-coral",
  sage: "bg-sage",
  sunbutter: "bg-sunbutter",
  paper: "bg-paper",
};

/** Small outlined chip — category tags, "Most loved", allergen notes. */
export default function Pill({ children, tone = "matcha", className = "", ...rest }) {
  return (
    <span
      className={`sticker-sm inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold tracking-wide text-ink uppercase ${TONES[tone] ?? TONES.matcha} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}

/** The circular price stamp used on treat cards. */
export function PriceTag({ price, unit, tone = "sunbutter", className = "" }) {
  return (
    <div
      className={`sticker-sm flex flex-col items-center justify-center rounded-full leading-none ${TONES[tone] ?? TONES.sunbutter} ${className}`}
    >
      <span className="font-display text-xl font-black">${price}</span>
      {unit && <span className="mt-0.5 text-[9px] font-bold tracking-wide uppercase opacity-70">{unit}</span>}
    </div>
  );
}
