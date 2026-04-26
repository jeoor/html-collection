import { readdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "../site.config.js";

const root = process.cwd();
const publicDir = join(root, "public");
const worksOutput = join(root, "src", "works.generated.js");
const siteOutput = join(root, "src", "site.generated.js");

const configuredSections = siteConfig.works ?? {};
const fallbackCategory = "其他";

function titleFromSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function flattenConfiguredWorks() {
  const bySlug = new Map();
  const order = new Map();
  let index = 0;

  for (const [category, works] of Object.entries(configuredSections)) {
    for (const [slug, config] of Object.entries(works)) {
      bySlug.set(slug, {
        category,
        ...config,
      });
      order.set(slug, index);
      index += 1;
    }
  }

  return { bySlug, order };
}

async function hasIndexHtml(name) {
  try {
    const entry = await stat(join(publicDir, name, "index.html"));
    return entry.isFile();
  } catch {
    return false;
  }
}

const { bySlug: workConfigBySlug, order: workOrder } = flattenConfiguredWorks();
const sectionsByTitle = new Map();

try {
  const entries = await readdir(publicDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory() || !(await hasIndexHtml(entry.name))) {
      continue;
    }

    const config = workConfigBySlug.get(entry.name);
    const sectionTitle = config?.category ?? fallbackCategory;

    if (!sectionsByTitle.has(sectionTitle)) {
      sectionsByTitle.set(sectionTitle, []);
    }

    sectionsByTitle.get(sectionTitle).push({
      slug: entry.name,
      title: config?.title ?? titleFromSlug(entry.name),
      meta: config?.meta ?? entry.name,
      href: `/${entry.name}/`,
    });
  }
} catch {
  // No public directory yet. Keep the homepage renderable.
}

const categoryOrder = [...Object.keys(configuredSections), fallbackCategory];
const extraCategories = [...sectionsByTitle.keys()].filter((title) => !categoryOrder.includes(title));
const sections = [...categoryOrder, ...extraCategories]
  .filter((title) => sectionsByTitle.has(title))
  .map((title) => ({
    title,
    items: sectionsByTitle
      .get(title)
      .sort((a, b) => {
        const aOrder = workOrder.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
        const bOrder = workOrder.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
        return aOrder - bOrder || a.href.localeCompare(b.href);
      })
      .map(({ slug, ...item }) => item),
  }));

await writeFile(
  worksOutput,
  `export const sections = ${JSON.stringify(sections, null, 2)};\n`,
  "utf8",
);

await writeFile(
  siteOutput,
  `export const site = ${JSON.stringify(
    {
      name: siteConfig.name,
      footer: siteConfig.footer,
    },
    null,
    2,
  )};\n`,
  "utf8",
);
