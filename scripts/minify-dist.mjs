import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { minify as minifyHTML } from "html-minifier-terser";
import CleanCSS from "clean-css";
import { minify as minifyJS } from "terser";
import { optimize as optimizeSVG } from "svgo";

const root = process.cwd();
const distDir = join(root, "dist");

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

const cleanCss = new CleanCSS({ level: 2 });

async function minifyFile(path) {
  const ext = path.slice(path.lastIndexOf(".")).toLowerCase();
  const source = await readFile(path, "utf8");
  let result;

  switch (ext) {
    case ".html":
      result = await minifyHTML(source, {
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
      break;

    case ".css":
      result = cleanCss.minify(source).styles;
      break;

    case ".js":
      if (path.endsWith(".min.js")) return;
      const jsResult = await minifyJS(source, {
        compress: true,
        mangle: true,
        format: { comments: false },
      });
      result = jsResult.code;
      break;

    case ".json":
      result = JSON.stringify(JSON.parse(source));
      break;

    case ".xml":
      result = source.replace(/>\s+</g, "><").trim();
      break;

    case ".svg":
      result = optimizeSVG(source, { path }).data;
      break;

    default:
      return;
  }

  const originalSize = Buffer.byteLength(source, "utf8");
  const minifiedSize = Buffer.byteLength(result, "utf8");

  if (minifiedSize < originalSize) {
    await writeFile(path, result, "utf8");
    const saved = originalSize - minifiedSize;
    const percent = ((saved / originalSize) * 100).toFixed(1);
    console.log(`${path.replace(distDir, "")}: saved ${saved} bytes (${percent}%)`);
  }
}

console.log("Minifying dist...");
const files = await walk(distDir);
let totalSaved = 0;

for (const file of files) {
  await minifyFile(file);
}

console.log("Done!");
