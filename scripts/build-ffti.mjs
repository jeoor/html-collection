import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const fftiDir = join(rootDir, "apps", "ffti");
const fftiPackageJson = join(fftiDir, "package.json");
const fftiNodeModules = join(fftiDir, "node_modules");
const fftiDistDir = join(fftiDir, "dist");
const publicFftiDir = join(rootDir, "public", "ffti");
const viteCli = join(fftiDir, "node_modules", "vite", "bin", "vite.js");

if (!existsSync(fftiPackageJson)) {
  throw new Error(
    "FFTI submodule is missing. Run `git submodule update --init --recursive` first."
  );
}

function run(command, args, cwd) {
  const needsCmdShim =
    process.platform === "win32" &&
    !/[\\/]/.test(command) &&
    !/\.[a-z0-9]+$/i.test(command);
  const executable = needsCmdShim ? `${command}.cmd` : command;
  const result = spawnSync(executable, args, {
    cwd,
    stdio: "inherit",
    shell: false,
  });

  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(" ")}`);
  }
}

if (!existsSync(fftiNodeModules)) {
  run("npm", ["ci"], fftiDir);
}

run(process.execPath, [viteCli, "build", "--configLoader", "runner"], fftiDir);

rmSync(publicFftiDir, { recursive: true, force: true });
mkdirSync(publicFftiDir, { recursive: true });
cpSync(fftiDistDir, publicFftiDir, { recursive: true });
