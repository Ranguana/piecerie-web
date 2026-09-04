# animalnewyork.com visual style spec (captured 2026-09-04 from live site)

Source of truth for making the app and marketing site match ANIMAL New York.
Extracted from computed styles + theme.min.css of the live WordPress theme.

## Fonts (Google Fonts)
- **Bebas Neue 400** — all headings, card titles, nav/footer labels, tabs. Uppercase by nature.
- **Lato 400** — body copy, paragraphs, lists, meta. 16px / 24px line-height.
- **Courier New / Courier** (system mono) — prices, dates/bylines, nav buttons, add-to-cart buttons, breadcrumbs. Closest Google Font: **Courier Prime**. Prefer `"Courier New", "Courier Prime", Courier, monospace`.

## Color tokens
| Token | Hex | Use |
|---|---|---|
| bg | #FFFFFF | page ground |
| ink | #000000 | headings, nav text, footer bg, date tag bg, breadcrumb bar |
| body-text | #212529 | body copy |
| yellow | #FFEA03 | title slabs behind headings, nav buttons, arrows, callout boxes |
| yellow-alt | #FFE905 | commerce buttons (add to cart) |
| red | #FF0000 | header bottom rule (1px), link underlines, link hover, panel borders, Hunting Club title text + 5px border |
| green-price | #03D43E | prices |
| gray-menu | #4E555B | secondary link buttons (white Bebas text on gray) |
| gray-rule | #808080 | 1px hr between sections |
| primary-bs | #5533FF | button hover bg (commerce buttons) |
| overlay | rgba(0,0,0,.7) | menu-open dim |
| stock | #958E09 | "in stock" text |

## Type scale
- H1: Bebas 40px/48px, black, `display:inline-block; padding:10px; background:#FFEA03` (yellow slab).
- H2: Bebas 32px/38px. H3: Bebas 28px.
- Card title slabs: Bebas 25px (18px small / 35px large), yellow slab padding 10px, overlapping image top-left offset -15px.
- Hunting Club H1: Bebas 50px/60px, color #FF0000, bg #FFEA03, border 5px solid #FF0000, padding 20px, centered.
- Footer nav: Bebas 24px, letter-spacing 2px, white on black.
- Nav buttons: Courier bold uppercase underlined, ls 1px, 16–22px.
- Date/author tag: Courier 16px, white on black, padding 10px.
- Price: Courier bold 20px/30px, #03D43E.

## Buttons
- Primary/nav: block, bg #FFEA03, text #000, padding 5px, radius 0, Courier bold uppercase underlined. Hover: bg #FF0000, text #FFF.
- Commerce: bg #FFE905, #000, Courier 16px, padding 6px 12px, no border, radius 0, full card width. Hover: bg #5533FF, #FFF.
- **Border radius is 0 everywhere.** No shadows anywhere.

## Layout & components
- Header 92px, white, `border-bottom:1px solid #FF0000`, logo left (300x65), 3-bar hamburger right (bars 5px tall, 10px gaps, black).
- Menu panel: black bg, `border:1px solid #FF0000`, grid of yellow buttons, huge Bebas "Buy Some Art" block with pigeon.
- Cards: image with yellow Bebas title slab overlapping top-left; no borders/shadows/radius. Sections separated by 1px #808080 hr.
- Product cards: square thumbnails, Bebas title, green Courier price, full-width yellow button.
- Content links: black text, `border-bottom:1px solid #FF0000`, hover color red.
- Footer: margin-top 100px, bg #000, padding 50px 0, white "N" mark, Bebas centered nav (Shop · Contact · Legal), 50px social circles.

## Voice
Tagline "art. culture. nyc." Short, blunt, uppercase headings. Irreverent, insider NYC.
About: "ANIMAL is a hub of street art & graffiti, counter culture, and all things NYC. We create original content, curate art, and produce experiential events."

## Assets (in public/brand/)
- animal-logo-new.svg — primary wordmark (black)
- animal-n-white.svg — footer "N" mark (white)
- pigeon.svg — pigeon icon
- animal-wordmark.png — raster wordmark (868x357)
