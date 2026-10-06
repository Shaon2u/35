const path = require("path");
const fs = require("fs");
const express = require("express");
const { securityHeaders, staticAssetCache } = require("./middleware/security-headers");

const app = express();
const port = process.env.PORT || 3010;

app.disable("x-powered-by");
app.use(securityHeaders);
app.use(staticAssetCache);
app.use("/axb-slim", express.static(path.join(__dirname, "public/axb-slim")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.get(["/", "/no-auth/login", "/user/dashboard"], (_req, res) => {
  // /user/dashboard redirects to login when unauthenticated — same as production.
  const html = fs
    .readFileSync(path.join(__dirname, "templates/login-slim.html"), "utf8")
    .replace("{{CSRF_TOKEN}}", "demo-csrf-token");
  res.type("html").send(html);
});

app.listen(port, () => {
  console.log(`AlphaXBot slim auth demo on http://127.0.0.1:${port}/no-auth/login`);
});
