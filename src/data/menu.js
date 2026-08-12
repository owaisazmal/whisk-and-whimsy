/**
 * The full menu, exactly as priced by the client.
 * `art` maps to a key in components/art/Treats.jsx.
 * `unit` renders next to the price. `blurb` is placeholder copy.
 */
export const menu = [
  {
    id: "dozen",
    name: "By the Dozen",
    kicker: "Twelve little somethings",
    accent: "matcha",
    note: "Priced per dozen. Colours and themes matched to your party.",
    items: [
      {
        name: "Cakesicles",
        price: 45,
        unit: "/ dozen",
        art: "cakesicle",
        blurb: "Cake on a stick, shelled in chocolate and dressed up.",
        star: true,
      },
      {
        name: "Rice Krispies",
        price: 25,
        unit: "/ dozen",
        art: "krispie",
        blurb: "Thick, chewy squares with a drizzle and a scatter.",
      },
      {
        name: "Pretzels",
        price: 20,
        unit: "/ dozen",
        art: "pretzel",
        blurb: "Rods or twists, dipped and sprinkled.",
      },
      {
        name: "Oreos",
        price: 15,
        unit: "/ dozen",
        art: "oreo",
        blurb: "Chocolate-dipped and decorated to theme.",
      },
      {
        name: "Mini Loaf Cakes",
        price: 45,
        unit: "/ dozen",
        art: "loaf",
        blurb: "Pocket-sized loaves with a glaze that drips just right.",
        star: true,
      },
      {
        name: "Wafers",
        price: 15,
        unit: "/ dozen",
        art: "wafer",
        blurb: "Crisp, dipped, and dangerously snackable.",
      },
      {
        name: "Decorated Cookies",
        price: 45,
        unit: "/ dozen",
        art: "cookie",
        blurb: "Sugar or chocolate chip, iced by hand.",
        star: true,
      },
    ],
  },
  {
    id: "cakes",
    name: "Cakes",
    kicker: "The centrepiece",
    accent: "diamond",
    note: "Additional pricing for decorations — florals, figures, hand-painting.",
    items: [
      {
        name: "Number Cake — Single",
        price: 50,
        unit: "each",
        art: "numberCake",
        blurb: "One sculpted digit, piped and berried.",
        star: true,
      },
      {
        name: "Number Cake — Double",
        price: 80,
        unit: "each",
        art: "numberCakeDouble",
        blurb: "Two digits, twice the flowers.",
      },
      {
        name: "12-inch Cake",
        price: 50,
        unit: "each",
        art: "roundCake",
        blurb: "A proper round cake, dripped and topped.",
      },
    ],
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    kicker: "Always a good idea",
    accent: "grape",
    note: "Swirled, sprinkled, and boxed by the dozen.",
    items: [
      {
        name: "Cupcakes",
        price: 40,
        unit: "/ dozen",
        art: "cupcake",
        blurb: "Tall swirls with whatever's blooming on top.",
        star: true,
      },
    ],
  },
  {
    id: "breads",
    name: "Breads",
    kicker: "Straight from the oven",
    accent: "sage",
    note: "Add-ins — chocolate chips, walnuts, streusel — +$2.50 per loaf.",
    items: [
      {
        name: "Banana Bread",
        price: 15,
        unit: "/ loaf",
        art: "bananaBread",
        blurb: "Deeply banana. Slightly under-baked in the middle, on purpose.",
      },
      {
        name: "Zucchini Bread",
        price: 15,
        unit: "/ loaf",
        art: "zucchiniBread",
        blurb: "Garden-green, warm-spiced, quietly excellent.",
      },
      {
        name: "Pumpkin Bread",
        price: 15,
        unit: "/ loaf",
        art: "pumpkinBread",
        blurb: "All the spice, none of the fuss.",
      },
    ],
  },
  {
    id: "rolls",
    name: "Cinnamon Rolls",
    kicker: "Sunday morning, bottled",
    accent: "coral",
    note: "Sold by the half dozen. Best warmed for 20 seconds.",
    items: [
      {
        name: "Cinnamon Rolls",
        price: 23,
        unit: "/ 6",
        art: "cinnamonRoll",
        blurb: "Soft spiral, cream-cheese glaze, obvious choice.",
        star: true,
      },
    ],
  },
];

export const packages = [
  {
    name: "Small Party",
    price: 80,
    size: "8 – 10 guests",
    accent: "matcha",
    includes: [
      "1 dozen decorated cookies",
      "1 dozen cake pops or oreos",
      "1 dozen pretzels",
      "Themed colour match",
    ],
  },
  {
    name: "Medium Party",
    price: 155,
    size: "15 – 20 guests",
    accent: "grape",
    featured: true,
    includes: [
      "2 dozen decorated cookies",
      "1 dozen cakesicles",
      "1 dozen rice krispies",
      "1 dozen pretzels",
      "12-inch cake",
      "Themed colour match",
    ],
  },
  {
    name: "Large Party",
    price: 215,
    size: "25 – 35 guests",
    accent: "coral",
    includes: [
      "3 dozen decorated cookies",
      "2 dozen cakesicles",
      "2 dozen rice krispies",
      "2 dozen wafers",
      "Number cake or 12-inch cake",
      "Themed colour match",
    ],
  },
];

export const packageAddOn = {
  label: "Gift wrapping",
  price: 5.5,
  note: "Cello bags, ribbon, and a hand-written tag for every piece.",
};

export const featured = [
  { art: "cakesicle", name: "Cakesicles", price: 45, unit: "/ dozen", accent: "diamond", tag: "Most loved" },
  { art: "numberCake", name: "Number Cakes", price: 50, unit: "from", accent: "matcha", tag: "Birthdays" },
  { art: "cinnamonRoll", name: "Cinnamon Rolls", price: 23, unit: "/ 6", accent: "coral", tag: "Weekend bake" },
  { art: "cookie", name: "Decorated Cookies", price: 45, unit: "/ dozen", accent: "aqua", tag: "Hand-iced" },
  { art: "cupcake", name: "Cupcakes", price: 40, unit: "/ dozen", accent: "grape", tag: "Party staple" },
  { art: "loaf", name: "Mini Loaf Cakes", price: 45, unit: "/ dozen", accent: "sage", tag: "New" },
  { art: "bananaBread", name: "Banana Bread", price: 15, unit: "/ loaf", accent: "sunbutter", tag: "Comfort" },
  { art: "pretzel", name: "Dipped Pretzels", price: 20, unit: "/ dozen", accent: "blush", tag: "Sweet + salty" },
];

export const testimonials = [
  {
    quote:
      "The cakesicles showed up looking like little jewels. Three separate people asked if they were real or decoration.",
    name: "Priya R.",
    detail: "Baby shower, 30 guests",
    accent: "diamond",
  },
  {
    quote:
      "Ordered the medium party package for my daughter's birthday and genuinely did not have to think about dessert once.",
    name: "Marcus T.",
    detail: "Medium Party Package",
    accent: "grape",
  },
  {
    quote:
      "I asked for 'mushrooms and bugs but make it elegant' and somehow that is exactly what I got.",
    name: "Dee L.",
    detail: "Garden-theme number cake",
    accent: "matcha",
  },
  {
    quote:
      "Still thinking about the cinnamon rolls. It has been four months. Please help.",
    name: "Sam O.",
    detail: "Standing weekend order",
    accent: "coral",
  },
];

export const steps = [
  {
    title: "Tell us the vibe",
    body: "Colours, theme, the one weird detail you're attached to. Screenshots welcome.",
    art: "note",
  },
  {
    title: "We quote & confirm",
    body: "You get a sketch and a price. A 50% deposit locks the date in.",
    art: "calendar",
  },
  {
    title: "We bake & decorate",
    body: "Everything is made fresh in the 48 hours before pickup. Nothing sits.",
    art: "whisk",
  },
  {
    title: "Pickup or delivery",
    body: "Boxed, ribboned, and photographed before it leaves the kitchen.",
    art: "box",
  },
];
