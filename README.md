# HTML 小游戏合集

一个纯 HTML/CSS/JavaScript 实现的浏览器小游戏合集，无需安装，即开即玩。

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ 特点

- 🚀 **零安装** - 直接在浏览器中运行，无需任何依赖
- ⚡ **轻量快速** - 纯前端实现，加载迅速，运行流畅
- 📱 **响应式设计** - 支持桌面和移动设备
- 🎮 **多样化游戏** - 包含经典游戏、趣味工具和休闲娱乐
- 🎓 **学习资源** - 代码规范，适合学习 Web 游戏开发

## 🎮 游戏列表

### 经典游戏
- **俄罗斯方块** (Tetris) - 经典的方块消除游戏
- **扫雷** (Minesweeper) - 支持桌面和移动端的扫雷游戏
- **贪吃蛇** (Snake) - 简单有趣的贪吃蛇游戏
- **消消乐** (Match-3) - 三消益智游戏

### 趣味工具
- **答案之书** - 寻求答案的神秘之书
- **春节倒计时** - 春节倒计时动画
- **时间罗盘** - 时间可视化工具
- **元素周期表** - 3D 交互式元素周期表

### 休闲娱乐
- **谷歌恐龙** (Chrome Dino) - 经典的离线小恐龙游戏
- **压扁滑稽** (Squishy Bird) - 趣味飞行游戏
- **水桶** - 水桶益智游戏
- **代码雨** - Matrix 风格的代码雨效果
- **催眠** - 催眠动画效果
- **架子鼓** - 虚拟架子鼓模拟器

> 📖 查看 [完整游戏列表](docs/GAMES.md) 了解更多详情

## 🚀 快速开始

### 方式一：直接打开
直接在浏览器中打开 `index.html` 文件即可。

### 方式二：本地服务器（推荐）

使用 Python 启动本地服务器：
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

使用 Node.js 启动：
```bash
npx http-server -p 8000

# 或使用 npm scripts
npm start
```

然后访问：http://localhost:8000

## 📁 项目结构

```
html-collection/
├── index.html                  # 主入口页面
├── assets/                     # 共享资源
│   ├── styles/                 # 样式文件
│   │   └── ui.css              # 全局样式
│   └── audio/                  # 音频文件
│       ├── bomb.wav
│       ├── DADADA.wav
│       └── shoot.wav
├── games/                      # 游戏目录
│   ├── tetris/                 # 俄罗斯方块
│   ├── minesweep/              # 扫雷
│   ├── snake/                  # 贪吃蛇
│   └── ...                     # 其他游戏
├── docs/                       # 文档目录
│   ├── DEVELOPMENT.md          # 开发指南
│   └── GAMES.md                # 游戏列表
├── README.md                   # 项目说明
├── CONTRIBUTING.md             # 贡献指南
├── LICENSE                     # MIT 许可证
└── package.json                # 项目配置
```

> 📖 查看 [完整目录结构](DIRECTORY_STRUCTURE.md) 了解详细说明

## 🛠️ 技术栈

- **HTML5** - Canvas API, Audio API, Local Storage
- **CSS3** - Flexbox, Grid, Animations, Transitions
- **JavaScript** - 原生 ES5/ES6，无框架依赖
- **Three.js** - 仅用于元素周期表的 3D 渲染

## 🌐 浏览器兼容性

支持所有现代浏览器：
- ✅ Chrome / Edge (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ 移动端浏览器

## 📝 开发说明

- 无需构建工具，直接编辑即可
- 每个游戏独立开发，互不依赖
- 遵循项目代码规范（见 `.amazonq/rules/memory-bank/`）
- 查看 [开发指南](docs/DEVELOPMENT.md) 了解详细信息

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

在贡献之前，请阅读 [贡献指南](CONTRIBUTING.md)。

### 快速贡献步骤

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/your-game`)
3. 提交更改 (`git commit -m '添加新游戏: 游戏名称'`)
4. 推送到分支 (`git push origin feature/your-game`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 [MIT 许可证](LICENSE)。

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

## 📮 联系方式

如有问题或建议，欢迎创建 Issue。

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！