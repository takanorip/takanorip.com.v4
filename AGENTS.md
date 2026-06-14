# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single-product **Astro** portfolio site (`takanorip_portfolio`). Package manager is **npm** (`package-lock.json`). There is no backend/database in this repo; dynamic "Works" content is fetched at build/render time from a hosted **microCMS** API (key hardcoded in `src/pages/*.astro`), so building/running requires outbound internet access.

### Running

- Dev server: `npm run dev` (alias `npm start`). Despite the README saying `localhost:3000`, modern Astro serves on **`http://localhost:4321/`** — use that URL.
- Build: `npm run build` (static output to `./dist/`; fetches microCMS data, needs network).
- Preview built site: `npm run preview`.

### Lint / format

- CSS lint: `npm run lint:css` (Stylelint). Note: the committed CSS currently has ~10 pre-existing Stylelint errors (property-order / specificity); these are not caused by env setup. `npm run fix:css` can auto-fix most.
- Format: `npm run fix:prettier`.
- There is **no** JS/TS lint script, no `test` script, and no test framework configured. "End-to-end testing" means running the dev server (or `build` + `preview`) and verifying pages render.

### Node

- Use Node 18.20.8+ / 20.3+ / 22+ (Astro 5 / React 19 requirement). `sandbox.config.json` says Node 14 but that is stale — ignore it.
