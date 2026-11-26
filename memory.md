# Project memory

## Product intent & audience

- Landing page with a WhatsApp CTA (Brazilian Portuguese audience — "Agendar avaliação pelo WhatsApp")
- Likely a service/business landing page; mobile-first concerns are prioritized (375px viewport tested explicitly)

## Brand personality & voice

- Portuguese (Brazil) as the working language
- Visual brand uses warm tones (sand-900 color token) and a display font family

## Visual design & UX direction

- React + Tailwind CSS stack (no standalone CSS file; styles live in `src/index.css` via `@apply` and custom utility classes)
- Custom color tokens: `sand-900` (dark warm text color)
- Typography: `font-display` family used for headings; H1 sizes scale `text-3xl` (mobile) → `sm:text-5xl` → `lg:text-[3.4rem]`
- Spacing: Hero container uses `px-5` (20px) for mobile lateral breathing room
- CTA button class `.btn-whatsapp-lg` uses `whitespace-nowrap` to prevent text wrapping; media query `max-width: 26rem` reduces padding/font for narrow screens
- Responsive breakpoints: default (mobile-first), `sm:` (≥640px), `lg:` (≥1024px)
- User strictly requires preserving existing layout, colors, fonts, and structure — changes must be surgical and isolated

## Decisions, constraints & rationale

- Project was previously a plain CSS version but reverted to React/Tailwind; all future edits should target `.tsx` components and `src/index.css`
- Icons via lucide-react only; no other UI packages
- Path alias `@/` maps to `src/`
- When responding to layout-fix requests, show only the changed code snippet and explain where to apply it

## Open questions & assumptions

- Full set of sections beyond Hero is unknown (assumed multi-section landing page)
- Exact brand color palette beyond `sand-900` not yet catalogued
- Whether the business is a clinic, salon, or other service type is unconfirmed