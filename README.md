# AI 设计生态仓库

把一份 AI 设计工具生态的调研文档,长成可检索、可浏览、可一键复用的静态站点。

**32 个工具 · 6 层架构 · 零 JS 运行时**

## 这是什么

- **目录手册**(`/handbook/`):32 个 AI 设计生态工具的详细档案(定位/安装/使用时机/替代品),按六层架构(规范/审美/知识/资产/流程/底座)组织
- **工作流教程**(`/workflow/`)与**速查手册**(`/cheatsheet/`):V1.1 上线
- **灵感资产库**(`/assets/`):V1.1 上线

## 开发

```bash
npm install
npm run dev        # astro dev --background(http://localhost:4321)
npm run build      # 产出 dist/
npx astro check    # TypeScript 检查
```

## 添加内容

工具数据:`src/content/handbook/*.md`(frontmatter schema 见 `src/content.config.ts`,写法范本见该目录现有文件)

视觉契约:根目录 `DESIGN.md`(tokens 落地在 `src/styles/tokens.css`)

## 工作流

本项目自身就是「DESIGN.md 工作流」的范例:ui-ux-pro-max 定方向 → DESIGN.md 立契约 → frontend-design 生成 → impeccable audit 终检。任何 AI 工具(Claude Code / Cursor / Google AI Studio)读同一份 DESIGN.md 就能得到一致的视觉输出。

## 部署

经典 GitHub Pages 模式(零 Actions 依赖):

1. 仓库 Settings → Pages → Build and deployment → Source 选 **"Deploy from a branch"** → Branch 选 **`gh-pages`** / **`(root)`**
2. 每次发布前本地运行:
   ```bash
   npm run deploy    # build + 推送 dist/ 到 gh-pages 分支
   ```
3. 等 GitHub Pages 几十秒完成分发即可

**为什么不走 Actions?** 部署到 gh-pages 分支是 Pages 自身的 quota,**不消耗 Actions 分钟数**,对私人仓库无任何限制。Actions 路径留给将来需要服务端构建(动态 OG 图、Sitemap 生成等)时再用。

**为什么用 `gh-pages` 而不是手 push?** 单一命令覆盖 build + 推送,减少出错面;commit message 含 commit SHA 便于溯源。

## License

MIT