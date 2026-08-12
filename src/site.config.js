/**
 * Single source of truth for brand-level copy.
 * Everything here is placeholder-friendly — swap the values and the whole
 * site follows. Nothing else in the codebase hard-codes the business name.
 */
export const site = {
  name: "Whisk & Whimsy",
  nameParts: ["Whisk", "&", "Whimsy"],
  tagline: "A little garden bakery",
  blurb:
    "Small-batch cakesicles, cupcakes, cookies and warm breads — baked to order, decorated by hand, and packed like a present.",
  phone: "(555) 014-2288",
  email: "hello@whiskandwhimsy.com",
  instagram: "@whiskandwhimsy",
  instagramUrl: "https://instagram.com",
  city: "Baked fresh in your neighbourhood",
  hours: [
    { day: "Tue – Fri", time: "9am – 5pm" },
    { day: "Saturday", time: "9am – 2pm" },
    { day: "Sun – Mon", time: "Resting the dough" },
  ],
  leadTime: "Please order 5–7 days ahead. Rush orders when the oven allows.",
};

export const navLinks = [
  { label: "Treats", href: "#treats" },
  { label: "Menu", href: "#menu" },
  { label: "Parties", href: "#packages" },
  { label: "Our Story", href: "#story" },
  { label: "Requests!?", href: "#requests" },
];
