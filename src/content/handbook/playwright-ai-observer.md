---
name: playwright-ai-observer
title: "playwright-ai-observer"
description: "GPT-4V 看截图找 UI 缺陷,不需要 baseline 首跑即报"
layer: ⑥底座
status: 未装
purpose: Playwright 插件:测试中自动截图交 GPT-4V 语义分析,免 baseline 发现重叠元素/布局破裂/文本截断/低对比度/空状态/卡加载六类缺陷,报告含修复建议
tags: [Playwright, audit, 检测]
install: |
  npm install playwright-ai-observer
docs: https://github.com/dstekanov/playwright-ai-observer
repo: https://github.com/dstekanov/playwright-ai-observer
stars: <100
featured: false
addedAt: "2026-09-18"
---

## playwright-ai-observer · 详细教程

## 是什么

dstekanov 维护的 Playwright 视觉 QA 插件:测试里加 `aiObserver.watch(page)` 两行代码,运行中对页面截图交 GPT-4V 做**语义级**分析(非像素 diff),不需要 Percy/Chromatic 那套 baseline 截图,首跑就能发现重叠元素、布局破裂、文本截断、低对比度、空状态缺失、加载卡死六类问题,报告附修复建议。需 OPENAI_API_KEY。
与库内分工:spec-a11y 是规则引擎出合规证据;impeccable detect 扫 AI 味反模式;这个的差异点是**无 baseline 也能发现新缺陷**——传统视觉回归只能抓"和上次不一样",它抓"本来就是错的",适合没有历史截图的新项目与探索性测试。

## 安装

按需项——视觉 QA 有刚需再装(见 frontmatter `install` 字段,Playwright 1.40+):

```typescript
await aiObserver.watch(page);          // 测试开头开启观察
console.log(aiObserver.getReport('Login Test'));  // 结束取报告
```

## 什么时候用
新项目没有历史截图、传统视觉回归工具无从 baseline 时,首跑即查 UI 缺陷;
E2E 流程里想顺带抓"按钮被 cookie 横幅挡住""文案被截断"这类规则引擎测不出的语义问题;
什么时候不用:已有成熟 baseline 管线(Percy/Chromatic)只需查回归;CI 高频跑注意 GPT-4V 按截图计费,全量跑成本可观——挑关键路径页开观察即可。
