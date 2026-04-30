import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { createReadStream, existsSync } from "node:fs";
import { join, normalize, sep } from "node:path";
import { siteConfig } from "./site.config.js";

const siteUrl = siteConfig.siteUrl.replace(/\/$/, "");

function cleanStaticRoutes() {
  const publicDir = join(process.cwd(), "public");

  function serveCleanRoute(req, res, next) {
    if (!req.url || req.method !== "GET") {
      next();
      return;
    }

    const pathname = req.url.split("?")[0];

    if (!/^\/[^/.]+\/?$/.test(pathname)) {
      next();
      return;
    }

    const slug = decodeURIComponent(pathname.replace(/^\/|\/$/g, ""));
    const file = normalize(join(publicDir, slug, "index.html"));

    if (!file.startsWith(publicDir + sep) || !existsSync(file)) {
      next();
      return;
    }

    if (!pathname.endsWith("/")) {
      res.statusCode = 302;
      res.setHeader(
        "Location",
        `${pathname}/${
          req.url.includes("?") ? `?${req.url.split("?")[1]}` : ""
        }`
      );
      res.end();
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    createReadStream(file).pipe(res);
  }

  return {
    name: "clean-static-routes",
    configureServer(server) {
      server.middlewares.use(serveCleanRoute);
    },
    configurePreviewServer(server) {
      server.middlewares.use(serveCleanRoute);
    },
  };
}

export default defineConfig({
  site: siteUrl,
  output: "static",
  trailingSlash: "always",
  vite: {
    plugins: [cleanStaticRoutes()],
  },
  integrations: [
    sitemap({
      customPages: Object.keys(siteConfig.works).flatMap((category) =>
        Object.keys(siteConfig.works[category]).map(
          (slug) => `${siteUrl}/${slug}/`
        )
      ),
    }),
  ],
});
