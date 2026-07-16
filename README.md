# AI-PLC 实战工作坊 · HTML PPT（aiplc-bmad-slides）

**AI-PLC（AI-driven Product Lifecycle）实战工作坊**的网页版幻灯片，纯静态、中英双语，用于 GitHub Pages 展示。与 AWS Workshop Studio 仓库 `aiplc-bmad-workshop` **相互独立**。

## 在线访问

👉 **<https://yourlin.github.io/aiplc-bmad-slides/>**

## 特性

- **纯静态**，无构建步骤、无第三方框架依赖（不走 CDN，企业内网也能开）。
- **中英双语**，默认中文；点右下角语言按钮或按 `L` 切换，选择记忆在 localStorage。
- **键盘操作**：`← / →` 翻页，`空格` 下一页，`F` 全屏，`L` 切换语言，`Home / End` 跳首尾。
- **可分享定位**：URL `#页码`（如 `#8`）直达某页。
- 响应式，投影 / 笔记本 / 手机自适应。

## 本地预览

无需任何工具链，任选其一：

```bash
# 方式一：直接用浏览器打开
open index.html            # macOS

# 方式二：起个本地静态服务器（推荐，hash 定位更稳）
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 目录结构

```
aiplc-bmad-slides/
├── index.html              入口
├── css/style.css           样式（AWS 深色主题）
├── js/
│   ├── slides.js           幻灯片内容数据（中英双语，14 张）← 改内容主要在这里
│   ├── i18n.js             界面文案（中英）
│   └── app.js              渲染与交互逻辑
├── assets/                 图片等静态资源
├── .nojekyll               告诉 GitHub Pages 跳过 Jekyll
└── .github/workflows/deploy.yml   推送 main 自动部署到 Pages
```

## 维护内容

- **改幻灯片正文**：编辑 `js/slides.js`。每张 slide 有 `zh` 和 `en` 两份内容，`type` 决定布局（`cover` / `list` / `twocol` / `grid` / `stages` / `pipeline`）。**中英两份必须字段对齐**（同样的 `cards` / `steps` 数量）。
- **改界面文案**：编辑 `js/i18n.js`。
- **新增布局类型**：在 `js/app.js` 的 `renderSlide` 里加一个 `case`，并在 `css/style.css` 补样式。

## 部署到 GitHub Pages

1. 推送到 GitHub 仓库的 `main` 分支。
2. 仓库 `Settings → Pages → Build and deployment → Source` 选 **GitHub Actions**。
3. `.github/workflows/deploy.yml` 会自动把根目录发布，产出形如 `https://<org>.github.io/aiplc-bmad-slides/` 的地址。

> 内容与 AWS Workshop Studio / 指导手册保持一致：方法论有实质更新时，同步更新 `js/slides.js`。

## License

[MIT](./LICENSE) © 2026 Lin Ye
