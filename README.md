# HTML Collection

一个 HTML5 互动作品合集。首页使用 React + Vite 构建，单页小游戏、Canvas 动画、音频互动页面放在 `public` 根目录下作为静态作品保留。

## 本地开发

```bash
npm install
npm run dev
```

首页：

```text
http://localhost:5173/
```

静态作品短地址：

```text
http://localhost:5173/tetris
http://localhost:5173/time-compass
http://localhost:5173/code-rain
```

推荐使用带尾部斜杠的形式，例如 `http://localhost:5173/code-rain/`。不带尾部斜杠时，本地开发服务器会自动跳转到带斜杠地址，避免页面里的相对 CSS、JS、图片路径解析错误。

## 构建

```bash
npm run build
```

构建流程：

1. 扫描 `public/*/index.html`，生成首页分类清单
2. 使用 Vite 构建 React 首页
3. 生成 `dist/sitemap.xml`
4. 压缩 `dist` 里的 HTML、CSS、JS、XML，并移除 source map

## 添加新作品

新建目录：

```text
public/your-game/index.html
```

如果要配置首页名称和分类，在 `site.config.js` 的 `works` 中添加：

```js
works: {
  经典游戏: {
    "your-game": {
      title: "你的游戏",
      meta: "Your Game",
    },
  },
}
```

构建后地址：

```text
https://fun.kayro.cn/your-game
```

规范地址会使用带尾部斜杠的形式：

```text
https://fun.kayro.cn/your-game/
```

## 站点配置

所有站点信息集中在 `site.config.js`。

主要字段：

- `siteUrl`：站点域名，用于 canonical 和 sitemap
- `title`：浏览器标题
- `name`：首页标题
- `description`、`keywords`、`author`：SEO 信息
- `favicon`：站点图标
- `footer`：页脚版权和备案链接
- `works`：作品分类、标题和英文标识

`works` 的结构是：

```js
works: {
  分类名: {
    作品目录名: {
      title: "首页显示名称",
      meta: "右侧英文标识",
    },
  },
}
```

分类顺序就是 `works` 对象中分类的书写顺序；分类内作品顺序就是作品对象的书写顺序。没有配置但存在 `public/<slug>/index.html` 的作品会自动归入 `其他`。

## 部署配置

| 配置项 | 填写 |
| --- | --- |
| 框架 / Framework | `Vite` |
| 构建架构 / Build preset | `Node.js / Static site` |
| Node.js 版本 | `18` 或 `20` |
| 安装命令 | `npm install` 或 `npm ci` |
| 构建命令 | `npm run build` |
| 输出目录 | `dist` |
| 根目录 | 项目根目录，通常留空即可 |

建议设置环境变量：

```text
SITE_URL=https://fun.kayro.cn
```

## 目录

```text
html-collection/
├─ public/
│  ├─ tetris/
│  ├─ code-rain/
│  └─ ...
├─ scripts/
│  ├─ generate-sitemap.mjs
│  ├─ generate-works.mjs
│  └─ minify-dist.mjs
├─ src/
├─ index.html
├─ package.json
├─ site.config.js
└─ vite.config.js
```
