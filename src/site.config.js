/**
 * Single source of truth for brand-level copy.
 * Everything here is placeholder-friendly — swap the values and the whole
 * site follows. Nothing else in the codebase hard-codes the business name.
 */
/** Handle only — the @ prefix and the profile URL are derived from it below. */
const instagramHandle = "caked_uptreats";

export const site = {
  name: "Caked Up",
  // The wordmark renders `lead` plain and `accent` in colour.
  nameParts: { lead: "Caked", accent: "Up" },
  // Optional line under the wordmark. Leave empty to show the name on its own.
  tagline: "",
  blurb:
    "Small-batch cakesicles, cupcakes, cookies and warm breads — baked to order, decorated by hand, and packed like a present.",
  phone: "(555) 014-2288",
  email: "hello@cakedup.com",
  instagram: `@${instagramHandle}`,
  instagramUrl: `https://www.instagram.com/${instagramHandle}/`,
  city: "Baked fresh in your neighbourhood",
  hours: [
    { day: "Tue – Fri", time: "9am – 5pm" },
    { day: "Saturday", time: "9am – 2pm" },
    { day: "Sun – Mon", time: "Resting the dough" },
  ],
  leadTime: "Please order 5–7 days ahead. Rush orders when the oven allows.",
  builtBy: "Owais Khan",
};

export const navLinks = [
  { label: "Treats", href: "#treats" },
  { label: "Menu", href: "#menu" },
  { label: "Parties", href: "#packages" },
  { label: "Our Story", href: "#story" },
  { label: "Requests!?", href: "#requests" },
];
