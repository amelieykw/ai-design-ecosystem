---
name: spec-a11y
title: "SpecA11y"
description: "Playwright 驱动的 WCAG 检查器,113 规则含键盘陷阱实测"
layer: ⑥底座
status: 未装
purpose: Playwright 驱动的自动化 WCAG 检查器:113 条内置规则(含 WCAG 3.0 草案支持),真实浏览器渲染下跑像素级视觉检查、键盘模拟交互检查(键盘陷阱/焦点指示器对比/reflow)与语义启发式
tags: [a11y, audit, CLI, WCAG, Playwright]
install: |
  pnpm add -g @speca11y/cli && pnpm exec playwright install chromium
docs: https://github.com/OKlueck/SpecA11y
repo: https://github.com/OKlueck/SpecA11y
featured: false
addedAt: "2026-09-18"
---

## spec-a11y · 详细教程

## 是什么

OKlueck 维护的自动化 WCAG 检查器:用 Playwright 开真实浏览器跑 113 条规则,覆盖静态扫描做不了的三类检查——像素级截图分析(焦点指示器对比)、键盘模拟(键盘陷阱)、reflow 测试,另含语义启发式与 WCAG 3.0 草案支持。
与既有工具的分工:impeccable audit 是 AI 味+基础 a11y 的日常兜底,axe/Playwright 插件管 CI 断言,SpecA11y 补的是"键盘真的按进去会怎样"的交互级 a11y;可 SARIF 输出直接接 CI。

## 安装

见 frontmatter `install` 字段的命令(先装 core + chromium 内核,再装全局 CLI),按需项——有 WCAG 硬要求的项目再装:

```bash
speca11y https://example.com
speca11y https://example.com --level AAA --format sarif
```

## 什么时候用

合同/合规明确要 WCAG AA/AAA 报告时,对成品页跑 `speca11y <URL> --level AA` 出证据;
复杂交互组件(模态/下拉/表格键盘导航)上线前,专测键盘陷阱与焦点可见性;
什么时候不用:日常开发用 impeccable audit 兜底即可;CI 门禁若已用 axe-core,SpecA11y 作为深检补充而非替代。
