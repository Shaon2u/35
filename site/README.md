# AlphaXBot marketing site (optimized)

Performance rebuild of the Vercel landing page at [alphaxbot.vercel.app](https://alphaxbot.vercel.app).

## What was slow

Hero/feature “SVGs” were wrappers around multi‑MB embedded PNGs (~37 MB total media). That dominated load time.

## What changed

- Converted assets to resized WebP (~316 KB total, ~99% smaller)
- Eager-load LCP hero images (`priority`) instead of lazy-loading above the fold
- Self-host Syne via `next/font` (no render-blocking Google Fonts CSS)
- Add security / permission headers: `Permissions-Policy`, CSP, `X-Frame-Options`, `nosniff`, HSTS, long-cache for `/images`
- Replace placeholder FAQ copy with real product Q&A

## Develop

```bash
cd site
npm install
npm run dev
```

## Deploy to Vercel

Point the Vercel project **Root Directory** to `site`, then redeploy. Or from this folder:

```bash
npx vercel --prod
```
