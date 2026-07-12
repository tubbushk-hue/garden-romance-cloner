## Goal
Adjust Hero couple positioning per breakpoint, and tune mobile name/text placement so it doesn't overlap the couple.

## Changes (Hero only, `src/routes/index.tsx` + `src/styles.css`)

### Desktop (≥1024px) — unchanged
- Keep `object-position: center` (full image as it currently is).

### Tablet (768px–1023px) — nudge couple toward center
- In `src/styles.css`, update the existing `.hero-bg-img` tablet media query from `object-position: 55% center` to `50% center` so the couple sits more centered horizontally.

### Mobile (<768px) — fully center the couple + fix names
- Change the mobile couple layer (currently `top:18%` / `background-position: center bottom`) to be vertically centered:
  - `top: 0; bottom: 0; background-position: center center;`
- Reduce the top gradient height so it doesn't wash over the couple's faces (`55%` → `40%`).
- Reposition the name block so "Jack & Rose" and sub-text sit at the very top area (above the centered couple), tighter spacing:
  - Reduce `h1` font-size from `3.5rem` → `3rem` on small screens
  - Keep "The Wedding Of" and "Forever Together" but tighten margins so the whole text block fits cleanly in the top 25% while the couple stays centered
- Keep scroll-cue chevron at bottom.

## Out of Scope
- No changes to animations, other sections, routing, or logo/nav.
