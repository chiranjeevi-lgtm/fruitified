const GREEN = "#4a7c2f"
const PRICE = "#b5451b"

export type Fruit = {
  slug: string
  name: string
  emoji: string
  category: string
  tagline: string
  shortDesc: string
  desc: string
  seasonal: string
  badge: string
  badgeColor: string
  placeholderBg: string
  images: string[]
  price: string
  highlights: string[]
  shopVisible?: boolean
}

export const fruits: Fruit[] = [
  {
    slug: "banginapalli-mangoes",
    name: "Banginapalli Mangoes",
    emoji: "🥭",
    category: "Mangoes",
    tagline: "The King of Mangoes",
    shortDesc: "Fibre-free, honey-sweet mangoes handpicked from Andhra Pradesh orchards. No artificial ripening.",
    desc: "Banginapalli mangoes — also called Safeda — are celebrated for their large size, thin skin, minimal fibre, and rich honey-sweet flavour. Grown under the sun of Kurnool and Nandyal districts, every fruit carries generations of farming tradition.",
    seasonal: "Apr – Jun",
    badge: "Seasonal",
    badgeColor: PRICE,
    placeholderBg: "linear-gradient(135deg, #fff8e1 0%, #ffe0b2 100%)",
    images: [
      "/images/b2b/varieties/banganapalli-mangoes.jpeg",
      "/images/fruits/banganapalli-mangoes/mangoes-2.jpeg",
    ],
    price: "₹120 / kg",
    highlights: [
      "Sourced directly from Andhra Pradesh farms",
      "Handpicked at peak ripeness",
      "No artificial ripening agents",
      "Fibre-free, honey-sweet flesh",
      "Available as gift packs & bulk orders",
    ],
  },
  {
    slug: "apple",
    name: "Kashmiri Apples",
    emoji: "🍎",
    category: "Apples",
    tagline: "Crisp, Crunchy & Naturally Sweet",
    shortDesc: "Fresh Kashmiri apples with a satisfying crunch and natural sweetness — no wax coating, no cold storage shortcuts.",
    desc: "Our Kashmiri apples are sourced from the valleys of Himachal Pradesh and Kashmir — crisp, aromatic, and naturally sweet. No wax coating, no artificial polishing.",
    seasonal: "Sep – Feb",
    badge: "Seasonal",
    badgeColor: GREEN,
    placeholderBg: "linear-gradient(135deg, #fff1f2 0%, #fecdd3 100%)",
    images: [
      "/images/fruits/apples/apples.jpeg",
      "/images/fruits/apples/apples-2.jpeg",
    ],
    price: "By weight",
    shopVisible: false,
    highlights: [
      "Sourced from Himachal Pradesh & Kashmir",
      "No wax coating or artificial polish",
      "Rich in dietary fibre & Vitamin C",
      "Available as cut bowls or whole",
      "Natural colour, natural taste",
    ],
  },
  {
    slug: "pomegranate",
    name: "Pomegranate",
    emoji: "🔴",
    category: "Pomegranate",
    tagline: "Ruby Red & Antioxidant-Rich",
    shortDesc: "Juicy pomegranate arils bursting with sweetness, packed with powerful antioxidants — served fresh or cold-pressed.",
    desc: "Our pomegranates are sourced from farms in Solapur and Nashik — celebrated for their deep ruby arils, rich sweetness, and minimal bitterness. Naturally high in antioxidants, Vitamin C, and anti-inflammatory compounds.",
    seasonal: "Sep – Feb",
    badge: "Seasonal",
    badgeColor: PRICE,
    placeholderBg: "linear-gradient(135deg, #fff1f2 0%, #fda4af 100%)",
    images: [
      "/images/fruits/pomegranates/pomegranta-image.jpeg",
      "/images/fruits/pomegranates/pomegranates-2.jpeg",
    ],
    price: "By weight",
    shopVisible: false,
    highlights: [
      "Sourced from Nashik & Solapur farms",
      "Deep ruby, naturally sweet arils",
      "High in antioxidants & Vitamin C",
      "No chemicals or wax coating",
      "Also available as cold-pressed juice",
    ],
  },
  {
    slug: "guava",
    name: "Guava",
    emoji: "🍐",
    category: "Guava",
    tagline: "Crisp & Vitamin-Rich",
    shortDesc: "Fresh pink-fleshed guavas loaded with Vitamin C, served as cut bowls with a sprinkle of chaat masala.",
    desc: "Our guavas are sourced fresh every morning — crisp on the outside with a soft, aromatic pink flesh inside. Naturally high in Vitamin C and dietary fibre, guava is one of the most wholesome tropical fruits.",
    seasonal: "Aug – Nov",
    badge: "Available",
    badgeColor: GREEN,
    placeholderBg: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
    images: [
      "/images/fruits/guava/guava.jpeg",
      "/images/fruits/guava/guava-image-2.jpeg",
    ],
    price: "By weight",
    shopVisible: false,
    highlights: [
      "Naturally high in Vitamin C",
      "Fresh pink-fleshed variety",
      "Served as cut bowls or whole",
      "Lightly seasoned on request",
      "Sourced fresh every morning",
    ],
  },
  {
    slug: "blueberry",
    name: "Blueberry",
    emoji: "🫐",
    category: "Blueberry",
    tagline: "Superfood Packed with Goodness",
    shortDesc: "Plump imported blueberries bursting with antioxidants, served fresh in our premium exotic fruit bowls.",
    desc: "Blueberries are one of the most nutrient-dense foods on the planet — packed with antioxidants, Vitamin C, and Vitamin K. We source premium imported blueberries that are plump, juicy, and naturally sweet.",
    seasonal: "Year-round",
    badge: "Available",
    badgeColor: GREEN,
    placeholderBg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
    images: [
      "/images/fruits/blue-berries/blue-berry.jpeg",
      "/images/fruits/blue-berries/blue-berry-2.jpeg",
    ],
    price: "By weight",
    shopVisible: false,
    highlights: [
      "Premium imported variety",
      "Rich in antioxidants & Vitamin C",
      "Plump and naturally sweet",
      "No preservatives or coatings",
      "Available in exotic fruit bowls",
    ],
  },
  {
    slug: "dasheri-mangoes",
    name: "Dasheri Mangoes",
    emoji: "🥭",
    category: "Mangoes",
    tagline: "The Aromatic Queen of UP",
    shortDesc: "Silky-smooth Dasheri mangoes from Malihabad — naturally sweet, intensely aromatic, and ripened without any chemicals.",
    desc: "Dasheri mangoes from Malihabad, UP are celebrated for their elongated shape, thin skin, and uniquely fragrant flesh. Rich in sweetness with a delicate fibre, every bite delivers a burst of tropical aroma.",
    seasonal: "May – Jul",
    badge: "Seasonal",
    badgeColor: PRICE,
    placeholderBg: "linear-gradient(135deg, #fffde7 0%, #fff9c4 100%)",
    images: [
      "/images/fruits/dasheri-mangoes/dasheri-mangoes.jpeg",
      "/images/fruits/dasheri-mangoes/dasheri-mangoes-3.jpeg",
    ],
    price: "₹180 / kg",
    highlights: [
      "Sourced from Malihabad orchards, UP",
      "Naturally ripened — no chemicals",
      "Intensely aromatic with smooth flesh",
      "Thin skin, minimal fibre",
      "Available as gift packs & bulk orders",
    ],
  },
  {
    slug: "alphonso-mangoes",
    name: "Alphonso Mangoes",
    emoji: "🥭",
    category: "Mangoes",
    tagline: "The King of All Mangoes",
    shortDesc: "GI-tagged Alphonso from Ratnagiri — saffron-gold flesh, zero fibre, and a rich creamy sweetness like no other mango.",
    desc: "Alphonso — known as Hapus — is India's most prized export mango, grown in the coastal belt of Ratnagiri and Devgad. Its saffron-gold flesh is fibre-free, buttery, and incomparably rich in flavour.",
    seasonal: "Mar – Jun",
    badge: "Seasonal",
    badgeColor: PRICE,
    placeholderBg: "linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)",
    images: [
      "/images/fruits/alphonso-mangoes/fresh-alphonso-mangoes.jpeg",
      "/images/fruits/alphonso-mangoes/alphonso-mangoes-2.jpeg",
    ],
    price: "By weight",
    highlights: [
      "GI-tagged Ratnagiri & Devgad variety",
      "Zero fibre — buttery saffron flesh",
      "No artificial ripening or chemicals",
      "Handpicked at peak natural ripeness",
      "Available as gift boxes & bulk supply",
    ],
  },
  {
    slug: "rasalu-mangoes",
    name: "Rasalu Mangoes",
    emoji: "🥭",
    category: "Mangoes",
    tagline: "Andhra's Heirloom Sweet Mango",
    shortDesc: "Rasalu — Andhra's best-kept secret — juicy, sweet, and refreshing with a unique honey-citrus balance.",
    desc: "Rasalu is a traditional heirloom mango variety from Andhra Pradesh, prized for its sweet, watery, and refreshingly citrusy flavour. Slightly smaller than Banginapalli, it is juicier and perfect for fresh eating.",
    seasonal: "May – Jun",
    badge: "Seasonal",
    badgeColor: PRICE,
    placeholderBg: "linear-gradient(135deg, #f9fbe7 0%, #f0f4c3 100%)",
    images: [
      "/images/fruits/rasalu-mangoes/rasalu-mangoes-box.jpeg",
    ],
    price: "₹150 / kg",
    highlights: [
      "Rare heirloom variety from Andhra Pradesh",
      "Honey-citrus sweetness, juicy flesh",
      "Naturally ripened on the tree",
      "No cold storage or chemical treatment",
      "Limited seasonal availability",
    ],
  },
  {
    slug: "custard-apple",
    name: "Custard Apple",
    emoji: "🍏",
    category: "Custard Apple",
    tagline: "Creamy & Naturally Sweet",
    shortDesc: "Soft, custard-like flesh with a naturally rich sweetness, enjoyed fresh or as a chilled dessert bowl.",
    desc: "Custard apple — known as Sitaphal in India — has a uniquely creamy, melt-in-mouth texture with a flavour reminiscent of vanilla and caramel. Rich in natural sugars, Vitamin C, and dietary fibre.",
    seasonal: "Sep – Feb",
    badge: "Seasonal",
    badgeColor: PRICE,
    placeholderBg: "linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%)",
    images: [
      "/images/fruits/custard-apple/Custard-apple.jpeg",
      "/images/fruits/custard-apple/custard-apple-2.jpeg",
    ],
    price: "₹2 / kg",
    highlights: [
      "Naturally creamy, custard-like texture",
      "Rich in Vitamin C and dietary fibre",
      "No added sugar or flavouring",
      "Served fresh-scooped in bowls",
      "Seasonal — limited availability",
    ],
  },
]
