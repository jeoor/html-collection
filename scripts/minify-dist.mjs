import { readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import CleanCSS from "clean-css";
import { minify as minifyHtml } from "html-minifier-terser";
import { minify as minifyJs } from "terser";

const root = process.cwd();
const distDir = join(root, "dist");
const cleanCss = new CleanCSS({ level: 2 });

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else if (entry.isFile()) {
      files.push(path);
    }
  }

  return files;
}

async function fileSize(path) {
  const info = await stat(path);
  return info.size;
}

async function minifyHtmlFile(path) {
  const source = await readFile(path, "utf8");
  const result = await minifyHtml(source, {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    decodeEntities: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    removeRedundantAttributes: true,
    sortAttributes: true,
    sortClassName: true,
  });

  await writeFile(path, result, "utf8");
}

async function minifyCssFile(path) {
  const source = await readFile(path, "utf8");
  const result = cleanCss.minify(source);

  if (result.errors.length > 0) {
    throw new Error(`CSS minify failed for ${path}: ${result.errors.join("; ")}`);
  }

  await writeFile(path, result.styles, "utf8");
}

async function minifyJsFile(path) {
  if (path.endsWith(".min.js")) {
    return;
  }

  const source = await readFile(path, "utf8");
  const result = await minifyJs(source, {
    compress: true,
    mangle: true,
    format: {
      comments: false,
    },
  });

  if (!result.code) {
    throw new Error(`JS minify produced no output for ${path}`);
  }

  await writeFile(path, result.code, "utf8");
}

const files = await walk(distDir);
let before = 0;
let after = 0;
let changed = 0;

for (const file of files) {
  const ext = file.slice(file.lastIndexOf(".")).toLowerCase();

  if (ext === ".map") {
    await rm(file, { force: true });
    continue;
  }

  if (![".html", ".css", ".js", ".xml"].includes(ext)) {
    continue;
  }

  const originalSize = await fileSize(file);
  before += originalSize;

  if (ext === ".html") {
    await minifyHtmlFile(file);
  } else if (ext === ".css") {
    await minifyCssFile(file);
  } else if (ext === ".js") {
    await minifyJsFile(file);
  } else if (ext === ".xml") {
    const source = await readFile(file, "utf8");
    await writeFile(file, source.replace(/>\s+</g, "><").trim(), "utf8");
  }

  const minifiedSize = await fileSize(file);
  after += minifiedSize;

  if (minifiedSize !== originalSize) {
    changed += 1;
  }
}

const saved = before - after;
const percent = before > 0 ? ((saved / before) * 100).toFixed(1) : "0.0";

console.log(`Minified ${changed} files, saved ${saved} bytes (${percent}%).`);
