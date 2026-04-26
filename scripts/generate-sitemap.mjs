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

async function hasIndexHtml(name) {
  try {
    const entry = await stat(join(publicDir, name, "index.html"));
    return entry.isFile();
  } catch {
    return false;
  }
}

const workNames = [];

try {
  const entries = await readdir(publicDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && (await hasIndexHtml(entry.name))) {
      workNames.push(entry.name);
    }
  }
} catch {
  // No public directory yet. Generate a sitemap with the homepage only.
}

const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
const urls = [
  `${normalizedSiteUrl}/`,
  ...workNames.sort((a, b) => a.localeCompare(b)).map((name) => `${normalizedSiteUrl}/${name}/`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`).join("\n")}
</urlset>
`;

await writeFile(join(distDir, "sitemap.xml"), xml, "utf8");
