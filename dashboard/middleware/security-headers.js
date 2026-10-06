/**
 * Drop-in Express security + permission headers for AlphaXBot dashboard.
 *
 * Usage (in your existing Express app, before routes):
 *   const { securityHeaders } = require("./middleware/security-headers");
 *   app.disable("x-powered-by");
 *   app.use(securityHeaders);
 */

function securityHeaders(req, res, next) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Permissions-Policy",
    [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
      "browsing-topics=()",
    ].join(", ")
  );
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );

  // Tight default CSP for the user dashboard. Adjust connect-src if you call
  // extra APIs (charts CDNs, analytics, websocket hosts).
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-ancestors 'self'",
    "form-action 'self'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data: https://fonts.gstatic.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "script-src 'self' 'unsafe-inline'",
    "connect-src 'self'",
  ].join("; ");
  res.setHeader("Content-Security-Policy", csp);

  next();
}

/**
 * Long-cache immutable static assets (hashed Metronic bundles, images, fonts).
 * Mount AFTER securityHeaders, BEFORE express.static or as a dedicated route.
 */
function staticAssetCache(req, res, next) {
  if (
    /\.(?:js|css|woff2?|ttf|otf|png|jpe?g|gif|svg|webp|avif|ico)$/i.test(req.path)
  ) {
    res.setHeader(
      "Cache-Control",
      "public, max-age=31536000, immutable"
    );
  }
  next();
}

module.exports = { securityHeaders, staticAssetCache };
