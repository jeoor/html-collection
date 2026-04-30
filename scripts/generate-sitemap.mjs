import { readdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "../site.config.js";

const root = process.cwd();
const siteUrl = process.env.SITE_URL ?? siteConfig.siteUrl;
const publicDir = join(root, "public");
const distDir = join(root, "dist");

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function toIsoDate(date) {
  return date.toISOString().split("T")[0];
}

async function hasIndexHtml(name) {
  try {
    const entry = await stat(join(publicDir, name, "index.html"));
    return entry.isFile();
  } catch {
    return false;
  }
}

const works = [];

try {
  const entries = await readdir(publicDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && (await hasIndexHtml(entry.name))) {
      const entryPath = join(publicDir, entry.name, "index.html");
      const info = await stat(entryPath);
      works.push({ name: entry.name, lastmod: info.mtime });
    }
  }
} catch {
  // No public directory yet.
}

const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const today = toIsoDate(new Date());

const pages = [
  {
    loc: `${normalizedSiteUrl}/`,
    lastmod: today,
    changefreq: "daily",
    priority: "1.0",
  },
  ...works
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((w) => ({
      loc: `${normalizedSiteUrl}/${w.name}/`,
      lastmod: toIsoDate(w.lastmod),
      changefreq: "weekly",
      priority: "0.8",
    })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${escapeXml(p.loc)}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

await writeFile(join(distDir, "sitemap.xml"), xml, "utf8");
