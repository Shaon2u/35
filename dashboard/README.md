# AlphaXBot user dashboard — performance & permissions

Target: [https://alphaxbot-user-dashboard.vercel.app/user/dashboard](https://alphaxbot-user-dashboard.vercel.app/user/dashboard)

That URL redirects unauthenticated users to `/no-auth/login`. The login page currently pulls the full Metronic stack.

## What’s slow today

| Asset | Uncompressed | Needed on login? |
| --- | ---: | --- |
| `/frontend/assets/js/plugins.bundle.js` | ~2.4 MB | No (jQuery + ApexCharts + Select2 + …) |
| `/frontend/assets/css/style.bundle.css` | ~1.3 MB | No |
| `/frontend/assets/css/plugins.bundle.css` | ~0.7 MB | No |
| Google Fonts Inter + Font Awesome CDN | extra RTT | Avoidable |
| **Total login critical CSS/JS** | **~4.5 MB** | — |

Also missing browser permission / security headers:

- no `Permissions-Policy`
- no `Content-Security-Policy`
- no `X-Frame-Options` / `X-Content-Type-Options`
- static assets use `Cache-Control: public, max-age=0, must-revalidate`
- `X-Powered-By: Express` is exposed

Session cookie is already good: `HttpOnly; Secure; SameSite=Lax`.

## What this folder provides

1. **`middleware/security-headers.js`** — Express middleware for Permissions-Policy, CSP, frame/nosniff/HSTS + long-cache for static files.
2. **`vercel.json`** — same permission/security headers + immutable cache for asset paths (merge into the Vercel Express project).
3. **`templates/login-slim.html` + `public/axb-slim/*`** — brand-matched login that keeps `POST /no-auth/login` field names, without Metronic. Slim assets ≈ **15 KB** (~99.7% smaller than the current login critical path).

## Apply to the live Vercel project

1. Copy `middleware/security-headers.js` into the Express app and wire it:

```js
const { securityHeaders, staticAssetCache } = require("./middleware/security-headers");
app.disable("x-powered-by");
app.use(securityHeaders);
app.use(staticAssetCache);
```

2. Merge `vercel.json` headers into the project root `vercel.json`.
3. For `/no-auth/login` (and forgot-password), switch the layout to `templates/login-slim.html` and serve `/axb-slim/**` as static files. Keep injecting the real CSRF `_token`.
4. On authenticated dashboard pages, keep Metronic/plugins if charts need them — but:
   - load chart plugins only on pages that render charts
   - keep the long-cache headers for `/frontend/assets/**`
5. Redeploy on Vercel.

## Local demo

```bash
cd dashboard
npm install
npm start
# open http://127.0.0.1:3010/no-auth/login
# or http://127.0.0.1:3010/user/dashboard  (demo shows login when unauthenticated)
```

Check headers:

```bash
curl -sI http://127.0.0.1:3010/no-auth/login | grep -iE 'permissions-policy|content-security|x-frame|x-content|x-powered'
```
