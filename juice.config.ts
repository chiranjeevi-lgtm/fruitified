/**
 * JUICE VISIBILITY CONFIG
 * =======================
 * Juices are currently HIDDEN from the UI.
 * All code is preserved — nothing was deleted.
 *
 * To re-enable juices: search for JUICE_HIDDEN_START in each file below
 * and un-comment the marked block. Also undo the JUICE_HIDDEN inline comments.
 *
 * export const SHOW_JUICES = false  ← flip to true when ready to re-launch
 */

export const SHOW_JUICES = false

/**
 * ─────────────────────────────────────────────────────────────────────────
 * FILE-BY-FILE RESTORATION GUIDE
 * ─────────────────────────────────────────────────────────────────────────
 *
 * 1. components/menu-tabs.tsx
 *    WHAT:  The entire "Fresh Juices" tab (9 juice menu items) + default tab state.
 *    HOW:   Un-comment the JUICE_HIDDEN_START block in the `sections` array.
 *           Change useState("bowls") back to useState("juices") on the marked line.
 *    ITEMS: Cold Pressed ABC Vitality, Tropical Mixed Fruit, Watermelon, Mosambi,
 *           Pineapple, Pomegranate, Farm Fresh Mango, Papaya, Sapota juices.
 *
 * 2. components/pure-goodness.tsx
 *    WHAT:  "Cold Pressed Juices" category card (2nd card in the 4-card grid).
 *    HOW:   Un-comment the JUICE_HIDDEN_START block in the `cards` array.
 *    NOTE:  Card sits between "Fruit Bowls" and "Smoothie Bowls".
 *
 * 3. components/best-sellers.tsx
 *    WHAT:  "Immunity Booster Juice" product card (₹199, Bestseller tag).
 *    HOW:   Un-comment the JUICE_HIDDEN_START line in the `products` array.
 *    NOTE:  Was the 2nd item, between "Classic Fruit Bowl" and "Mango Smoothie Bowl".
 *
 * 4. components/category-section.tsx
 *    WHAT:  "COLD PRESSED JUICES" category card in the horizontal scroll carousel.
 *    HOW:   Un-comment the JUICE_HIDDEN_START block in the `categories` array.
 *    NOTE:  Was the 2nd card, between "FRUIT BOWLS" and "SMOOTHIE BOWLS".
 *
 * 5. components/b2b-banner.tsx
 *    WHAT:  "Fruit Juice Places" partner tile in the B2B banner 2×2 grid.
 *    HOW:   Un-comment the JUICE_HIDDEN line in the `partners` array.
 *           Restore Citrus import: add `Citrus` back to the lucide-react import on line 3.
 *           Remove the JUICE_HIDDEN import comment on line 4.
 *
 * 6. app/gallery/page.tsx  (Our Specials page)
 *    WHAT:  "Farm Fresh Sapota Juice" special card (last item in the specials grid).
 *    HOW:   Un-comment the JUICE_HIDDEN_START block in the `specials` array.
 *
 * ─────────────────────────────────────────────────────────────────────────
 * REFERENCES LEFT AS-IS (text mentions only, not visual UI elements)
 * ─────────────────────────────────────────────────────────────────────────
 * These files contain the word "juice" in copy/metadata but do NOT render
 * dedicated juice UI cards or sections — they were left unchanged:
 *
 *  - components/hero.tsx               line 56  — tagline copy
 *  - components/about.tsx              line 14  — brand description copy
 *  - components/footer.tsx             line 52  — footer tagline copy
 *  - components/features.tsx           lines 25, 46, 60 — feature card copy
 *  - components/subscribe-section.tsx  line 15  — subscription copy
 *  - app/layout.tsx                    lines 20–23 — SEO metadata
 *  - app/menu/page.tsx                 line 8   — page metadata description
 *  - app/gallery/page.tsx              line 7   — page metadata description
 *  - lib/fruits-data.ts                lines 72, 78, 85, 137 — pomegranate product data
 *  - app/b2b/page.tsx                  lines 72, 76, 310, 395–417, 432, 501 — B2B page content
 *  - app/mangoes/page.tsx              line 174 — "juice bars" in target customers copy
 */
