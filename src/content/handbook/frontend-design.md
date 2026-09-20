---
name: frontend-design
title: "Frontend Design(官方审美主 skill)"
description: "Anthropic 官方审美主 skill:先定 bold 美学方向,再出避开 AI 模板味的生产级前端"
layer: ②审美
status: 已装
purpose: Anthropic 官方审美主 skill——任何 UI/视觉项目的首张视觉稿生成入口:先逼选一个大胆美学方向,再按方向产出避开泛 AI 模板味(AI slop)的生产级前端代码
tags: [审美, 反模板味, 设计工程师]
docs: https://github.com/anthropics/skills
featured: false
addedAt: "2026-09-18"
---

## frontend-design · 详细教程

## 是什么

Anthropic 官方审美主 skill,一切审美 skill 的源头——anthropics/skills 仓库的招牌成员,与本机同集合的 canvas-design / brand-guidelines 同源。
工作方式:写码前先逼你明确 Purpose / Tone / Constraints / Differentiation 四件事,并从 brutally minimal、maximalist、retro-futuristic 等极端方向里选一个执行到底;产出是可运行的生产级前端代码,目标是 distinctive、避开 AI slop。
分工上:它管审美总纲与首稿,taste-skill 管风格变体、emil-skills 管动效细节、ui-ux-pro-max 管知识层。本机以官方 plugin 集合形式安装(不占独立 repo,无独立版本号);Gemini CLI 侧同款能力由 gemini-skills 的原样移植承担。

## 安装

不单独安装,随 anthropics/skills 官方插件集合分发:

```bash
claude plugin marketplace add anthropics/skills
```

之后在 /plugin 面板启用对应集合即随附生效,无需额外配置。

## 什么时候用

什么时候用:启动新 UI 项目的默认入口;spec/plan 定稿后要出第一张视觉稿时——先跑它定美学方向,再谈组件和布局;
什么时候不用:它只管视觉稿与样式实现,不动状态/业务逻辑,别当生产代码生成器;电影质感/品牌大片向改用 taste-skill 的 high-end-visual-design 变体;已有成熟设计系统的项目走 Figma MCP 管线对照实现,而不是重新生成视觉稿。
