---
name: ai-vision-mcp
title: "AI Vision MCP"
description: "Gemini 视觉 MCP,audit_design 出 WCAG 对比度与设计合规审计"
layer: ⑥底座
status: 未装
purpose: Gemini/Vertex AI 视觉分析 MCP:audit_design 工具做像素级设计合规审计(主色提取、视觉复杂度、WCAG 对比度 AA/AAA 校验、Gemini AI 批注修复建议),palette/components 工具提取 token 与组件目录
tags: [MCP, a11y, 审查]
install: |
  claude mcp add ai-vision-mcp -e IMAGE_PROVIDER=google -e VIDEO_PROVIDER=google -e GEMINI_API_KEY=<TOKEN> -- npx ai-vision-mcp
docs: https://github.com/tan-yong-sheng/ai-vision-mcp
repo: https://github.com/tan-yong-sheng/ai-vision-mcp
stars: <100
featured: false
addedAt: "2026-09-18"
---

## ai-vision-mcp · 详细教程

## 是什么

tan-yong-sheng 维护的通用视觉分析 MCP(Gemini API 与 Vertex AI 双 provider,共 30+ 分析工具),与设计相关的核心是 audit_design:对设计图/截图做像素分析(W3C 相对亮度公式算 WCAG 对比度、AA/AAA 校验、色彩/复杂度/亮度问题检测)再叠加 Gemini 视觉批注产出修复建议;palette 提取设计 token、components 盘点 UI 组件与设计系统成熟度。
与库内分工:spec-a11y 用真实浏览器跑规则、证据硬但只测成品页;ai-vision-mcp 吃**任意截图/设计稿**(不需要可访问的 URL),适合设计评审期提前发现对比度问题,但 AI 批注属启发式、结论需复核。全景图将其归入 design-eval 场景(多维度 UI 评估:启发式/WCAG/token 一致性)。

## 安装

暂不安装。需要截图级设计审计时按 README 配置(见 frontmatter `install` 字段;`<TOKEN>` 在 Google AI Studio 的 API keys 页生成,不要硬编码进仓库)。Vertex AI 路线另需服务账号五件套环境变量;建议把 MCP 启动超时调到 1 分钟、工具执行超时调到 5 分钟(README 明确要求)。

## 什么时候用
设计稿评审阶段(还没可跑的页面)就想查对比度/视觉合规——直接喂 Figma 导出图;
从竞品截图反推设计系统(token 提取 + 组件成熟度盘点)时;
什么时候不用:页面已上线要出合规证据——用 spec-a11y 跑真实浏览器;日常生成期的 a11y 兜底交给 impeccable audit。
