import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { navLinks } from "../../site.config";
import Button from "../ui/Button";
import Logo from "./Logo";
import { Ladybug } from "../art/Critters";

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollY, "change", (v) => setStuck(v > 40));

  /* Highlight the nav link for whichever section is currently on screen. */
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  /* Lock scroll behind the mobile sheet. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[28px] px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            stuck ? "sticker bg-paper/95 backdrop-blur-md" : "border-[3px] border-transparent bg-transparent"
          }`}
        >
          <Logo compact={stuck} />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative block rounded-full px-4 py-2 text-sm font-extrabold transition-colors ${
                      isActive ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border-2 border-ink bg-matcha"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Button href="#requests" tone="coral" size="sm" className="hidden sm:inline-flex">
              Order now
            </Button>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="sticker-sm grid size-10 place-items-center rounded-full bg-matcha lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* reading progress — a vine growing across the top of the page */}
        <motion.div
          style={{ scaleX: progress }}
          className="mx-auto mt-1.5 h-1.5 max-w-7xl origin-left rounded-full bg-forest"
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="sticker-lg relative m-3 grain rounded-[32px] bg-cream p-6 pt-5"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="sticker-sm grid size-10 place-items-center rounded-full bg-coral"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <ul className="mt-6 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="wonk sticker-sm flex items-center justify-between rounded-2xl bg-paper px-5 py-4 font-display text-2xl font-black"
                    >
                      {link.label}
                      <span className="text-coral">→</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between gap-4">
                <Button href="#requests" tone="forest" onClick={() => setOpen(false)}>
                  Start an order
                </Button>
                <Ladybug className="size-12 animate-sway" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
