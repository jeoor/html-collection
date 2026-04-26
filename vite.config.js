import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createReadStream, existsSync } from "node:fs";
import { join, normalize, sep } from "node:path";
import { siteConfig } from "./site.config.js";

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
      res.setHeader("Location", `${pathname}/${req.url.includes("?") ? `?${req.url.split("?")[1]}` : ""}`);
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
  plugins: [
    cleanStaticRoutes(),
    react(),
    {
      name: "site-config-html",
      transformIndexHtml(html) {
        return html
          .replaceAll("__SITE_TITLE__", siteConfig.title)
          .replaceAll("__SITE_DESCRIPTION__", siteConfig.description)
          .replaceAll("__SITE_KEYWORDS__", siteConfig.keywords)
          .replaceAll("__SITE_AUTHOR__", siteConfig.author)
          .replaceAll("__SITE_URL__", siteConfig.siteUrl.replace(/\/$/, ""))
          .replaceAll("__SITE_FAVICON__", siteConfig.favicon);
      },
    },
  ],
  define: {
    __SITE_CONFIG__: JSON.stringify(siteConfig),
  },
  envPrefix: ["VITE_"],
  server: {
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
