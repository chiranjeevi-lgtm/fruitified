export type FruitExtended = {
  slug: string
  origin: string
  annotations: [string, string, string]
  description: string
  howWeSource: string[]
  shelfLife: string
  nutrition: { label: string; value: string }[]
  healthBenefits: { title: string; desc: string }[]
  howToEnjoy: string
}

const extended: Record<string, FruitExtended> = {
  "banginapalli-mangoes": {
    slug: "banginapalli-mangoes",
    origin: "Kurnool, Andhra Pradesh",
    annotations: ["No Artificial Ripening", "Farm Handpicked", "Honey-Sweet & Fibre-Free"],
    description:
      "Banginapalli mangoes — known locally as Safeda — are one of India's most prized mango varieties, grown in the sun-drenched orchards of Kurnool and Nandyal districts. These large, oblong mangoes have a thin skin, deep golden-yellow flesh, and virtually no fibre, making every bite pure melting sweetness. We source directly from farmers and deliver within 24 hours of harvest — no cold storage, no middlemen.",
    howWeSource: [
      "Sourced directly from orchard farmers in Kurnool & Nandyal",
      "Uniform golden-yellow skin with a naturally sweet aroma",
      "Zero artificial ripening — no calcium carbide or ethylene gas",
      "Fibre-free flesh, firm and naturally ripe at time of delivery",
      "Fruit with blemishes, soft spots, or irregular shape is rejected",
      "Each batch quality-checked and graded before packing",
    ],
    shelfLife:
      "Banginapalli mangoes stay fresh for 4–5 days at room temperature. Store in a cool, dry place away from direct sunlight. Once fully ripe, refrigerate and consume within 2 days. Avoid storing alongside other fruits as mangoes emit ethylene gas, which accelerates the ripening and spoilage of nearby produce.",
    nutrition: [
      { label: "Calories",      value: "60 kcal" },
      { label: "Carbohydrates", value: "15 g"    },
      { label: "Dietary Fibre", value: "1.6 g"   },
      { label: "Sugars",        value: "14 g"    },
      { label: "Vitamin C",     value: "36 mg"   },
      { label: "Vitamin A",     value: "54 µg"   },
    ],
    healthBenefits: [
      {
        title: "Boosts Immunity",
        desc: "Rich in Vitamin C and antioxidants, Banginapalli mangoes help strengthen the immune system and protect against infections and seasonal illnesses.",
      },
      {
        title: "Supports Digestion",
        desc: "Mangoes contain digestive enzymes like amylases that help break down complex carbohydrates and ease the digestive process naturally.",
      },
      {
        title: "Rich in Vitamins A & C",
        desc: "High in Vitamins A and C, mangoes promote healthy skin, improve vision, and support cellular repair and overall growth.",
      },
    ],
    howToEnjoy:
      "Enjoy Banginapalli mangoes fresh — simply peel, slice, and eat. They pair beautifully with a squeeze of lime and a pinch of chaat masala. Blend them into a thick mango lassi, churn into kulfi, or add to a fresh fruit salad. Their low-fibre flesh makes them ideal for fresh mango juice with zero straining.",
  },

  apple: {
    slug: "apple",
    origin: "Himachal Pradesh & Kashmir",
    annotations: ["No Wax Coating", "Crisp & Naturally Sweet", "Selectively Picked"],
    description:
      "Round to slightly oblong in shape with smooth skin covered in a bright red blush that deepens as the fruit matures. Our Kashmiri apples are known for their perfect blend of mild sweetness and subtle tartness. Sourced from the high-altitude valleys of Himachal Pradesh and Kashmir, each apple is firm, aromatic, and free from any artificial wax or polishing agents.",
    howWeSource: [
      "Sourced from verified farmers in Himachal Pradesh & Kashmir",
      "Vibrant, uniform red colour with no discolouration",
      "Firm and solid — no soft spots or indentations",
      "Smooth skin, symmetrical in size and shape",
      "Sweet & mild fruity scent with a crisp, juicy bite",
      "Fruit with browning, mould, holes, or inappropriate size is rejected",
    ],
    shelfLife:
      "Kashmiri apples have a shelf life of 5–7 days and are best consumed soon after arrival. If eating within a day or two, keep them on the countertop. For longer storage, place in a plastic bag and refrigerate. Avoid storing with other fruits as apples produce ethylene gas, which can accelerate ripening of nearby produce.",
    nutrition: [
      { label: "Calories",      value: "80 kcal" },
      { label: "Carbohydrates", value: "22 g"    },
      { label: "Dietary Fibre", value: "4 g"     },
      { label: "Sugars",        value: "17 g"    },
      { label: "Vitamin C",     value: "10.3 mg" },
      { label: "Potassium",     value: "195 mg"  },
    ],
    healthBenefits: [
      {
        title: "Antioxidant Properties",
        desc: "Apples are rich in Vitamin C, an antioxidant that helps defend against infections such as colds and viruses and reduces oxidative stress.",
      },
      {
        title: "High in Fibre",
        desc: "Thanks to their rich fibre content, apples make you feel fuller and support gut health by promoting healthy digestion and regularity.",
      },
      {
        title: "Heart Health",
        desc: "Apples are high in potassium, a key mineral that helps regulate blood pressure and maintain healthy fluid balance in the body.",
      },
    ],
    howToEnjoy:
      "Eat Kashmiri apples whole or slice them up for a quick snack. They are excellent in apple sauce, pies, jams, and cakes. Add crunch to salads by pairing with other fruits or greens. Sprinkle a pinch of chaat masala on top for a zesty twist that complements their natural sweetness.",
  },

  pomegranate: {
    slug: "pomegranate",
    origin: "Nashik & Solapur, Maharashtra",
    annotations: ["Ruby Red Arils", "No Chemicals", "Antioxidant Rich"],
    description:
      "Our pomegranates are sourced from the fertile farms of Nashik and Solapur — celebrated regions known for producing fruit with deep ruby arils, rich sweetness, and minimal bitterness. Each pomegranate is hand-selected for uniform size, full colour, and firmness. The arils are naturally juicy, bursting with flavour, and packed with powerful antioxidants.",
    howWeSource: [
      "Sourced from verified farms in Nashik and Solapur",
      "Deep ruby-red arils with natural sweetness and aroma",
      "No wax coating, no chemicals, no artificial colouring",
      "Firm outer skin with no cracks, mould, or discolouration",
      "Uniform size and weight — each fruit individually inspected",
      "Packed and dispatched within 24 hours of harvest",
    ],
    shelfLife:
      "Pomegranates can be stored whole at room temperature for up to 1 week, or refrigerated for up to 2–3 weeks. Once the arils are removed, store in an airtight container in the refrigerator and consume within 3–5 days. Avoid exposing cut arils to air for long as they lose freshness.",
    nutrition: [
      { label: "Calories",      value: "83 kcal" },
      { label: "Carbohydrates", value: "19 g"    },
      { label: "Dietary Fibre", value: "4 g"     },
      { label: "Sugars",        value: "14 g"    },
      { label: "Vitamin C",     value: "10.2 mg" },
      { label: "Folate",        value: "38 µg"   },
    ],
    healthBenefits: [
      {
        title: "Powerful Antioxidants",
        desc: "Pomegranates contain punicalagins and punicic acid — exceptionally potent antioxidants that protect cells from damage and reduce inflammation.",
      },
      {
        title: "Heart Health",
        desc: "Regular consumption of pomegranate has been shown to reduce blood pressure, lower LDL cholesterol, and improve overall cardiovascular health.",
      },
      {
        title: "Anti-Inflammatory",
        desc: "Pomegranates have strong anti-inflammatory properties that may help reduce the risk of chronic diseases including diabetes and cancer.",
      },
    ],
    howToEnjoy:
      "Eat pomegranate arils straight as a snack, or sprinkle them over yoghurt, oatmeal, or salads for a burst of colour and flavour. Cold-press them into fresh juice for a vibrant, tangy drink. Add arils to biryanis and grain bowls for a sweet-savoury combination that elevates any dish.",
  },

  guava: {
    slug: "guava",
    origin: "Andhra Pradesh",
    annotations: ["Vitamin C Rich", "Farm Fresh Daily", "Pink-Fleshed Variety"],
    description:
      "Our guavas are sourced fresh every morning from farms in Andhra Pradesh — crisp on the outside with a soft, aromatic pink flesh inside. Naturally high in Vitamin C and dietary fibre, guava is one of the most wholesome and underrated tropical fruits. Each guava is selected for firmness, uniform colour, and fresh fragrance before delivery.",
    howWeSource: [
      "Sourced fresh every morning from Andhra Pradesh farms",
      "Pink-fleshed variety — crisp skin, soft interior",
      "No pesticide residue — tested before dispatch",
      "Firm and ripe — no over-softening or bruising",
      "Uniform light-green skin with a natural fresh fragrance",
      "Overripe, blemished, or undersized guavas are rejected",
    ],
    shelfLife:
      "Fresh guavas are best consumed within 2–3 days of delivery at room temperature. If you'd like to extend freshness, refrigerate in a loosely sealed bag for up to 5 days. Once cut, wrap in cling film and refrigerate — consume within 1–2 days. Avoid storing near ethylene-emitting fruits like mangoes and apples.",
    nutrition: [
      { label: "Calories",      value: "68 kcal" },
      { label: "Carbohydrates", value: "14 g"    },
      { label: "Dietary Fibre", value: "5.4 g"   },
      { label: "Sugars",        value: "9 g"     },
      { label: "Vitamin C",     value: "228 mg"  },
      { label: "Potassium",     value: "417 mg"  },
    ],
    healthBenefits: [
      {
        title: "Exceptional Vitamin C Source",
        desc: "A single guava contains 4× the Vitamin C of an orange — boosting immunity, supporting skin health, and accelerating wound healing.",
      },
      {
        title: "Gut Health",
        desc: "Guava is rich in dietary fibre, which feeds healthy gut bacteria, aids regular bowel movements, and supports a healthy digestive system.",
      },
      {
        title: "Blood Sugar Regulation",
        desc: "Guava leaf and fruit have been shown to help regulate blood sugar levels, making them a smart choice for managing or preventing diabetes.",
      },
    ],
    howToEnjoy:
      "Eat guava whole for maximum nutrition, or slice and serve with a sprinkle of chaat masala and black salt for a classic Indian snack. Blend into a guava smoothie with lime and ginger, or boil down into guava jam. The pink-fleshed variety pairs wonderfully with mint in fresh fruit bowls.",
  },

  blueberry: {
    slug: "blueberry",
    origin: "Premium Imported",
    annotations: ["No Preservatives", "Antioxidant Superfood", "Premium Imported"],
    description:
      "Blueberries are one of the most nutrient-dense foods on the planet — plump, naturally sweet, and bursting with antioxidants. We source premium imported blueberries that are fresh, firm, and free from any preservatives or coatings. Each batch is selected for uniform size, deep blue-purple colour, and a naturally sweet flavour with just the right tang.",
    howWeSource: [
      "Premium imported variety from verified international suppliers",
      "Deep blue-purple colour — uniform and unblemished",
      "Plump and firm — no shrivelling or moisture loss",
      "Zero preservatives, pesticide residues, or wax coatings",
      "Chilled supply chain maintained from import to delivery",
      "Berries that are overripe, discoloured, or crushed are rejected",
    ],
    shelfLife:
      "Blueberries are delicate and best consumed within 3–5 days of delivery. Keep them refrigerated in their original container or a breathable container. Avoid washing until just before eating, as moisture accelerates spoilage. For long-term storage, blueberries freeze exceptionally well and retain most of their nutrients.",
    nutrition: [
      { label: "Calories",      value: "57 kcal" },
      { label: "Carbohydrates", value: "14 g"    },
      { label: "Dietary Fibre", value: "2.4 g"   },
      { label: "Sugars",        value: "10 g"    },
      { label: "Vitamin C",     value: "9.7 mg"  },
      { label: "Vitamin K",     value: "19 µg"   },
    ],
    healthBenefits: [
      {
        title: "Antioxidant Powerhouse",
        desc: "Blueberries have one of the highest antioxidant capacities of all commonly consumed fruits — protecting cells from DNA damage and ageing.",
      },
      {
        title: "Brain Health",
        desc: "Studies show regular blueberry consumption improves memory, delays brain ageing, and reduces the risk of neurodegenerative diseases.",
      },
      {
        title: "Heart Health",
        desc: "Blueberries reduce LDL cholesterol oxidation and blood pressure, significantly lowering the risk of heart attacks and cardiovascular disease.",
      },
    ],
    howToEnjoy:
      "Eat blueberries fresh as a guilt-free snack, or toss them into your morning cereal, oatmeal, or yoghurt. Blend into smoothies with banana and almond milk, or fold into pancake and muffin batter. A simple bowl of blueberries with cream or Greek yoghurt makes for an indulgent yet healthy dessert.",
  },

  "custard-apple": {
    slug: "custard-apple",
    origin: "Deccan Belt, India",
    annotations: ["Creamy Texture", "Naturally Sweet", "Seasonal & Limited"],
    description:
      "Custard apple — known as Sitaphal in India — has a uniquely creamy, melt-in-mouth texture with a flavour reminiscent of vanilla and caramel. Rich in natural sugars, Vitamin C, and dietary fibre, it is one of the most indulgent yet wholesome fruits of the season. Each fruit is sourced from farms across the Deccan belt and delivered when it's at peak creaminess.",
    howWeSource: [
      "Sourced from Deccan belt farms during peak seasonal harvest",
      "Naturally ripened on the tree — no ethylene gas or chemicals",
      "Uniform dark-green skin with deep segmentation pattern",
      "Soft to touch — indicating natural ripeness and creamy interior",
      "Sweet vanilla-caramel aroma at the time of delivery",
      "Fruit that is overripe, blackened, or dry inside is discarded",
    ],
    shelfLife:
      "Custard apples ripen quickly once harvested. At room temperature, they are typically ready to eat within 1–2 days of delivery. Once ripe (soft to touch), consume immediately or refrigerate for 1 additional day. Do not store in the freezer as the texture deteriorates significantly. Consume at room temperature for the best flavour.",
    nutrition: [
      { label: "Calories",      value: "94 kcal" },
      { label: "Carbohydrates", value: "24 g"    },
      { label: "Dietary Fibre", value: "2.4 g"   },
      { label: "Sugars",        value: "21 g"    },
      { label: "Vitamin C",     value: "19.2 mg" },
      { label: "Vitamin B6",    value: "0.2 mg"  },
    ],
    healthBenefits: [
      {
        title: "Natural Energy Boost",
        desc: "Rich in natural sugars and complex carbohydrates, custard apple provides a sustained energy release — making it an excellent pre-workout or mid-day snack.",
      },
      {
        title: "Supports Immunity",
        desc: "A good source of Vitamin C and antioxidants, custard apple strengthens the immune system and helps the body fight infections and inflammation.",
      },
      {
        title: "Healthy Skin & Hair",
        desc: "The Vitamin A and C content in custard apple supports collagen synthesis, promoting healthy, glowing skin and strong hair growth.",
      },
    ],
    howToEnjoy:
      "Custard apple is best eaten fresh — cut in half and scoop out the creamy flesh with a spoon. Discard the seeds. For an indulgent dessert, blend the flesh into a smooth custard apple ice cream or kheer. Mix with banana and coconut milk for a tropical smoothie bowl that doubles as a healthy dessert.",
  },

  "dasheri-mangoes": {
    slug: "dasheri-mangoes",
    origin: "Malihabad, Uttar Pradesh",
    annotations: ["Naturally Ripened", "Intensely Aromatic", "No Calcium Carbide"],
    description:
      "Dasheri mangoes — originating from the village of Dasheri near Malihabad in Uttar Pradesh — are one of North India's most beloved mango varieties. Known for their elongated shape, thin golden-yellow skin, and silky-smooth flesh with minimal fibre, Dasheri mangoes carry a distinctive floral fragrance that sets them apart. Malihabad, often called the 'Mango Capital of the World', produces over 25 lakh tonnes of mangoes annually, and Dasheri reigns as its crown jewel.",
    howWeSource: [
      "Sourced directly from certified orchards in Malihabad",
      "Golden-yellow skin, uniform colour with no green patches",
      "Zero artificial ripening — no calcium carbide or ethylene gas",
      "Firm yet soft flesh with minimal fibre and intense aroma",
      "Each fruit individually inspected for size, weight, and freshness",
      "Packed and dispatched within 24 hours of orchard harvest",
    ],
    shelfLife:
      "Dasheri mangoes stay fresh for 3–5 days at room temperature. Store in a cool, dry place away from direct sunlight. Once fully ripe and fragrant, refrigerate and consume within 2 days. Avoid storing alongside other ethylene-sensitive produce as mangoes accelerate ripening of nearby fruits.",
    nutrition: [
      { label: "Calories",      value: "65 kcal" },
      { label: "Carbohydrates", value: "17 g"    },
      { label: "Dietary Fibre", value: "1.8 g"   },
      { label: "Sugars",        value: "15 g"    },
      { label: "Vitamin C",     value: "28 mg"   },
      { label: "Vitamin A",     value: "50 µg"   },
    ],
    healthBenefits: [
      {
        title: "Rich in Antioxidants",
        desc: "Dasheri mangoes are loaded with Vitamin C and beta-carotene, which neutralise free radicals, strengthen immunity, and protect cells from oxidative damage.",
      },
      {
        title: "Supports Digestion",
        desc: "The natural enzymes and dietary fibre in Dasheri mangoes aid smooth digestion, regulate bowel movements, and support a healthy gut microbiome.",
      },
      {
        title: "Energy & Skin Health",
        desc: "High in natural sugars and Vitamin A, Dasheri mangoes provide quick, sustained energy and promote healthy, glowing skin and sharp vision.",
      },
    ],
    howToEnjoy:
      "Peel and slice Dasheri mangoes for the most satisfying fresh experience — their minimal fibre makes every bite smooth and clean. Blend into a mango lassi with yoghurt and cardamom, or churn into a thick aamras served chilled. Their floral fragrance makes them perfect for mango kulfi or a simple chilled mango bowl.",
  },

  "alphonso-mangoes": {
    slug: "alphonso-mangoes",
    origin: "Ratnagiri & Devgad, Maharashtra",
    annotations: ["GI Tagged", "Zero Fibre", "Saffron-Gold Flesh"],
    description:
      "Alphonso — known across Maharashtra as Hapus — is India's most celebrated and internationally exported mango variety. Grown along the volcanic laterite soil of the Konkan coast in Ratnagiri and Devgad districts, the Alphonso has earned its GI tag for a reason: its deep saffron-orange flesh is utterly fibre-free, buttery in texture, and carries an incomparably rich, honeyed sweetness unlike any other mango. Each fruit we source is hand-selected at natural ripeness and delivered without cold storage compromise.",
    howWeSource: [
      "GI-tagged fruit sourced from Ratnagiri & Devgad farms",
      "Uniform saffron-yellow skin — no green or blemished patches",
      "Zero artificial ripening — no carbide or ethylene gas",
      "Completely fibre-free, buttery flesh with deep aroma",
      "Weighed and graded — only Premium A-grade fruit dispatched",
      "Packed in ventilated crates and delivered within 24–36 hours",
    ],
    shelfLife:
      "Alphonso mangoes are best consumed within 3–4 days of delivery. Store at room temperature until fully ripe — once the skin turns uniformly yellow and the fruit yields slightly to touch, refrigerate and consume within 1–2 days. Avoid over-refrigerating as it dulls the flavour. Never store alongside strong-smelling produce.",
    nutrition: [
      { label: "Calories",      value: "70 kcal" },
      { label: "Carbohydrates", value: "17 g"    },
      { label: "Dietary Fibre", value: "1.4 g"   },
      { label: "Sugars",        value: "15 g"    },
      { label: "Vitamin C",     value: "40 mg"   },
      { label: "Vitamin A",     value: "65 µg"   },
    ],
    healthBenefits: [
      {
        title: "Exceptional Vitamin C",
        desc: "Alphonso mangoes are one of the richest fruit sources of Vitamin C — boosting immunity, accelerating collagen production, and protecting against infections.",
      },
      {
        title: "Eye & Skin Health",
        desc: "The high beta-carotene (Vitamin A) content in Alphonso mangoes supports healthy vision, prevents night blindness, and keeps skin radiant and supple.",
      },
      {
        title: "Heart & Gut Health",
        desc: "Rich in pectin and dietary fibre, Alphonso mangoes help lower LDL cholesterol, support digestion, and promote a healthy cardiovascular system.",
      },
    ],
    howToEnjoy:
      "Eat Alphonso mangoes chilled — slice in half, score the flesh, and scoop directly. Their zero-fibre flesh makes them perfect for aamras: simply pulp, sweeten lightly, and serve with puri. Blend into mango ice cream, fold into cheesecake, or drizzle over vanilla panna cotta. The Alphonso's richness shines best when enjoyed pure and unadorned.",
  },

  "rasalu-mangoes": {
    slug: "rasalu-mangoes",
    origin: "Andhra Pradesh & Odisha",
    annotations: ["Heirloom Variety", "Honey-Citrus Taste", "Farm Fresh"],
    description:
      "Rasalu is Andhra Pradesh's most treasured heirloom mango — a variety that remains largely unknown outside its home state, making it a rare seasonal treat. Smaller than Banginapalli but far juicier, Rasalu mangoes have a thin yellowish-green skin, exceptionally watery flesh, and a flavour profile that balances honey-sweet richness with a refreshing citrus tang. Traditionally eaten scooped from the skin with a spoon, Rasalu is the mango that keeps you reaching for more.",
    howWeSource: [
      "Sourced from heirloom orchards in Andhra Pradesh & Odisha",
      "Pale yellow-green skin that deepens as the fruit ripens",
      "Zero cold storage — dispatched fresh from the orchard",
      "Naturally ripened on the tree with no artificial treatment",
      "Selected for uniform size, weight, and natural sweetness",
      "Overripe, cracked, or blemished fruit is strictly rejected",
    ],
    shelfLife:
      "Rasalu mangoes ripen quickly — they are typically ready to eat within 1–2 days of delivery. Once fully ripe, consume within 2 days or refrigerate for up to 3 days. The flesh is very juicy, so consume soon after cutting. Store unripe fruit at room temperature in a single layer, away from direct sunlight.",
    nutrition: [
      { label: "Calories",      value: "62 kcal" },
      { label: "Carbohydrates", value: "16 g"    },
      { label: "Dietary Fibre", value: "1.5 g"   },
      { label: "Sugars",        value: "14 g"    },
      { label: "Vitamin C",     value: "30 mg"   },
      { label: "Potassium",     value: "160 mg"  },
    ],
    healthBenefits: [
      {
        title: "Natural Hydration",
        desc: "Rasalu's exceptionally high water content makes it one of the most hydrating mangoes — ideal for summer heat, replenishing electrolytes and keeping the body cool.",
      },
      {
        title: "Boosts Immunity",
        desc: "Packed with Vitamin C and antioxidants, Rasalu mangoes help fortify the immune system, fight seasonal infections, and reduce inflammation naturally.",
      },
      {
        title: "Digestive Support",
        desc: "The natural enzymes and soluble fibre in Rasalu mangoes aid digestion, ease bloating, and support a healthy gut environment during the summer season.",
      },
    ],
    howToEnjoy:
      "The traditional way to eat Rasalu is to squeeze and knead the whole fruit gently until the flesh loosens, then cut off the tip and sip the pulp directly — no knife, no plate, pure joy. You can also halve and scoop with a spoon. Their juicy flesh makes outstanding mango panna, summer coolers, and fresh fruit sorbets. Best enjoyed ice-cold straight from the refrigerator.",
  },
}

export function getFruitExtended(slug: string): FruitExtended | null {
  return extended[slug] ?? null
}
