import { readdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const publicDir = join(root, "public");

async function hasIndexHtml(name) {
  try {
    const entry = await stat(join(publicDir, name, "index.html"));
    return entry.isFile();
  } catch {
    return false;
  }
}

const slugs = [];

try {
  const entries = await readdir(publicDir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && (await hasIndexHtml(entry.name))) {
      slugs.push(entry.name);
    }
  }
} catch {
  // No public directory yet.
}

slugs.sort((a, b) => a.localeCompare(b));

const config = {
  redirects: slugs.map((slug) => ({
    source: `/${slug}`,
    destination: `/${slug}/`,
    statusCode: 302,
  })),
};

await writeFile(join(root, "edgeone.json"), JSON.stringify(config, null, 2) + "\n", "utf8");
