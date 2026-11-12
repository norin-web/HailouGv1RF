# Hailou Guides — promo site

Promo site for the iOS app **Hailou Guides** (App Store ID 6810614815).
React 18 + TypeScript + Vite 6 + Tailwind 4 (layout in `src/styles/index.css`), React Router 7.

## Run

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build into dist/
pnpm preview    # serve the build
```

## Deploy

Every push to `main` builds and publishes to GitHub Pages (`.github/workflows/deploy.yml`).
The workflow copies `dist/index.html` to `dist/404.html` so deep links load the app.
In the repo settings, Pages → Source must be **GitHub Actions**.

### `base` and the custom domain — read before touching

- No domain (now): `base: "/HailouGv1RF/"` in `vite.config.ts`, no `public/CNAME`.
  The site lives at https://norin-web.github.io/HailouGv1RF/.
- Domain attached in Pages settings: switch to `base: "/"` **and** add `public/CNAME`
  with the bare domain **in the same commit**. Otherwise every asset 404s → white screen.

Image paths always go through `img()` (`src/app/utils/img.ts`), never a plain `"/images/…"` string.

## Where content lives

- `src/app/content/site.ts` — brand, email, App Store link, guides, features, FAQ, specs.
  `PLACEHOLDER` values are hidden on the page until real data arrives.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, **verbatim** from the owner
  (only `## ` headings and `- ` lists may change). While `body` is `null` the page shows a
  "coming soon" note.
- Images: `public/images/` (WebP). Sources and Figma exports: `../File/materials/`.

## Reveal animations

Hidden reveal states apply only under `html.js` (set inline in `index.html`), and
`useReveal` never leaves content hidden: fallbacks are gated on the element really being
in the viewport. Don't add opacity-0 start states outside `.js`.
