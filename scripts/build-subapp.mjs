import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");

const appOverrides = {
  ffti: {
    install: { command: "npm", args: ["ci"] },
    build: {
      command: process.execPath,
      args: [
        join(rootDir, "apps", "ffti", "node_modules", "vite", "bin", "vite.js"),
        "build",
        "--configLoader",
        "runner",
      ],
    },
  },
  "cat-survivors": {
    install: {
      command: "npm",
      args: ["install", "--ignore-scripts", "--no-package-lock"],
    },
    build: { command: "npm", args: ["run", "build"] },
  },
  "react-tetris": {
    publishDir: join(rootDir, "public", "tetris"),
  },
};

function run(command, args, cwd) {
  const needsCmdShim =
    process.platform === "win32" &&
    !/[\\/]/.test(command) &&
    !/\.[a-z0-9]+$/i.test(command);
  const result = needsCmdShim
    ? spawnSync(
        process.env.ComSpec || "cmd.exe",
        ["/d", "/s", "/c", [command, ...args].join(" ")],
        {
          cwd,
          stdio: "inherit",
          shell: false,
        }
      )
    : spawnSync(command, args, {
        cwd,
        stdio: "inherit",
        shell: false,
      });

  if (result.status !== 0) {
    throw new Error(`Command failed: ${command} ${args.join(" ")}`);
  }
}

function getAppConfig(appName) {
  const sourceDir = join(rootDir, "apps", appName);
  const override = appOverrides[appName] ?? {};

  return {
    sourceDir,
    publishDir: override.publishDir ?? join(rootDir, "public", appName),
    install: override.install ?? { command: "npm", args: ["ci"] },
    build: override.build ?? { command: "npm", args: ["run", "build"] },
  };
}

function getAppNames() {
  const appsDir = join(rootDir, "apps");

  if (!existsSync(appsDir)) {
    return [];
  }

  return readdirSync(appsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((appName) => existsSync(join(appsDir, appName, "package.json")))
    .sort();
}

function buildApp(appName) {
  const appConfig = getAppConfig(appName);
  const appPackageJson = join(appConfig.sourceDir, "package.json");
  const appNodeModules = join(appConfig.sourceDir, "node_modules");
  const appDistDir = join(appConfig.sourceDir, "dist");

  if (!existsSync(appPackageJson)) {
    throw new Error(
      `${appName} submodule is missing. Run \`git submodule update --init --recursive\` first.`
    );
  }

  if (!existsSync(appNodeModules)) {
    run(appConfig.install.command, appConfig.install.args, appConfig.sourceDir);
  }

  run(appConfig.build.command, appConfig.build.args, appConfig.sourceDir);

  rmSync(appConfig.publishDir, { recursive: true, force: true });
  mkdirSync(appConfig.publishDir, { recursive: true });
  cpSync(appDistDir, appConfig.publishDir, { recursive: true });
}

const appArg = process.argv[2];
const appNames = appArg === "--all" ? getAppNames() : [appArg];

if (!appArg) {
  throw new Error("Missing app name. Pass a sub-app name or `--all`.");
}

if (appArg === "--all" && appNames.length === 0) {
  throw new Error("No buildable apps were found in `apps/`.");
}

for (const appName of appNames) {
  buildApp(appName);
}
