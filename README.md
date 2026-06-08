# 🎣 Fishing Lights（北岸钓鱼红绿灯）

Auckland North Shore fishing conditions checker — single-file HTML SPA with strict 3-color light logic.

## 项目结构（整理后）

```
fishing-lights/
├── .gitignore
├── README.md
├── index.html                     # 主入口（推荐直接打开这个）
├── fishing_lights_app_v5.12.html  # 当前生产版本（带完整注释和版本历史）
└── archive/
    └── previous-versions/         # 所有历史迭代版本（v1 ~ v5.20 等）
```

### 为什么这样组织？

- **根目录干净**：只保留当前可用的文件。
- **index.html**：方便本地双击打开，也适合 GitHub Pages 直接预览。
- **版本化主文件**：`fishing_lights_app_v5.12.html` 保留清晰的版本号，便于追溯。
- **archive**：把所有旧版本集中存放，保留开发历史但不干扰当前工作。
- 移除了简历、密钥文件（api.txt）、portfolio 等无关内容。

## 快速开始

1. 克隆或下载本仓库。
2. 用浏览器直接打开 `index.html`（或 `fishing_lights_app_v5.12.html`）。
3. 无需构建、无需 Node，纯前端（Tailwind CDN + 原生 JS + SVG）。

## 核心功能

- **红绿灯逻辑**（严格计算）：
  - 🟢 绿灯：轻型路亚 + 中型路亚 都适合
  - 🟡 黄灯：仅推荐中型路亚
  - 🔴 红灯：不推荐出钓
- **Apple Weather 风格图表**（SVG 实现）：
  - 风况（风速 + 阵风 + 风向箭头，每 2 小时一个，过去/未来区分）
  - 气温（带体感）
  - Hover / Touch 实时 tooltip + 跟踪高亮
- **24 小时一致数据**：今天和所有预报天都使用 25 个数据点（00:00 ~ 24:00），箭头分布完全一致。
- **真实潮汐**：World Tides（支持自定义 Key），跨日显示“次日高/低潮”。
- **移动端优化**：微信内置浏览器、Safari 均经过大量测试。

## 数据来源

- 天气 / 海洋：Open-Meteo（Pacific/Auckland 时区）
- 潮汐：World Tides v3（/extremes + datum=MSL）
- 内置安全默认 Key + 支持用户自定义 Key（设置面板）

## 部署

- 当前线上地址：https://fishinglights.netlify.app/
- GitHub Pages：可直接把 `index.html` 设为入口。
- Netlify / Vercel / GitHub Pages 都只需上传单文件即可。

## 开发历史

所有旧版本都保存在 `archive/previous-versions/` 中（包括早期 Canvas 实现、各种 bug 修复迭代）。

当前主文件内部版本为 **v5.19+**（文件名仍保留 v5.12 以便 Netlify 覆盖）。

## 注意事项

- api.txt 等敏感文件已从仓库移除，请勿提交密钥。
- 本项目故意保持**单文件**形态，方便直接分享和部署。
- 所有判断仅供参考，钓鱼请以安全第一。

---

如有问题或想贡献，请提 Issue 或 PR。

**安全第一，享受钓鱼！** 🎣