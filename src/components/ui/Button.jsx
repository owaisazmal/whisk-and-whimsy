import Wobble from "../motion/Wobble";

const TONES = {
  forest: "bg-forest text-cream",
  coral: "bg-coral text-ink",
  grape: "bg-grape text-ink",
  sunbutter: "bg-sunbutter text-ink",
  matcha: "bg-matcha text-ink",
  paper: "bg-paper text-ink",
  berry: "bg-berry text-cream",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

/**
 * The site's one button. Renders as <a> when given `href`, otherwise <button>.
 * Everything clickable shares the same sticker outline + Wobble press so the
 * whole page feels like one physical object.
 */
export default function Button({
  children,
  href,
  tone = "forest",
  size = "md",
  className = "",
  innerClassName = "",
  icon,
  ...rest
}) {
  const Tag = href ? "a" : "button";

  return (
    <Wobble as={Tag} href={href} tilt={-1.5} className={`inline-block ${className}`} {...rest}>
      <span
        className={`sticker inline-flex items-center gap-2.5 rounded-full font-extrabold tracking-tight ${TONES[tone] ?? TONES.forest} ${SIZES[size] ?? SIZES.md} ${innerClassName}`}
      >
        {children}
        {icon}
      </span>
    </Wobble>
  );
}
