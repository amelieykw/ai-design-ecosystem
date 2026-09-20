---
name: design-token-kit
title: "Design Token Kit"
description: "dtokens CLI:校验转换 DTCG,DESIGN.md 直出多端代码"
layer: ①规范
status: 未装
purpose: dtokens CLI:按 DTCG 2025.10 校验 token(schema/lint/引用环检测),DTCG JSON/HRDT YAML/DESIGN.md 三格式互转,生成 CSS/SCSS/Tailwind v4 @theme/SwiftUI/Android 资源
tags: [token, DTCG, CLI, DESIGN.md]
install: |
  npm install -g @design-token-kit/cli && dtokens check tokens.json
docs: https://github.com/design-token-kit/design-token-kit
repo: https://github.com/design-token-kit/design-token-kit
stars: <100
featured: false
addedAt: "2026-09-18"
---

## design-token-kit · 详细教程

## 是什么

design-token-kit 组织维护的 token 工具集,主打 `dtokens` CLI(@design-token-kit/cli + @design-token-kit/core 两个包)。三层输入(DTCG JSON / 自家 HRDT YAML / DESIGN.md 前置元数据)统一过 DTCG 2025.10 校验——schema、未解析引用、引用环、类型不匹配、跨层引用、裸值位置等 lint 规则——再转出 CSS custom properties、SCSS、Tailwind v4 `@theme`、SwiftUI、Android res/values,附 HTML showcase 与 token 统计。
与库内分工:style-dictionary 是跨平台构建事实标准(管 build 管线),terrazzo 管 DTCG 原生构建与多主题;design-token-kit 的差异点是**校验深度**(引用环/lint 规则)与 DESIGN.md 直读——google-design-md 词条的 export 能做格式转换,这里多一层 DTCG 级 lint。

## 安装

按需项——token 流水线要严格 lint 或 DESIGN.md→多端转换时再装(见 frontmatter `install` 字段,Node 20.19+);免安装试用走 npx:

```bash
npx @design-token-kit/cli check tokens.json
npx @design-token-kit/cli convert tokens.json --out ./tokens.css
```

## 什么时候用

token 文件要进 CI 前严格校验(引用环、裸值、类型不匹���这类 style-dictionary 不报的错);
DESIGN.md 或 HRDT YAML 一份源转 Tailwind v4/SwiftUI/Android 多端产出;
什么时候不用:已有 style-dictionary 管线且无校验刚需——两套转换管线并存只会让 token 单一事实源变模糊。
