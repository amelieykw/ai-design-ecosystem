---
name: ui-skills
title: "ibelick ui-skills"
description: "Design Engineer 单点深课库,npx 或 MCP 按需取用零负担"
layer: ③知识
status: 未装
purpose: Design Engineer 单点深课库(motion、baseline-ui、create-design-md 等),CLI `npx ui-skills get <slug>` 或 MCP(list_skills/get_skill)按需取用,无需常驻安装
tags: [知识库, Design Engineer, CLI, MCP]
docs: https://github.com/ibelick/ui-skills
repo: https://github.com/ibelick/ui-skills
featured: false
addedAt: "2026-09-18"
---

## ui-skills · 详细教程

## 是什么

ibelick(前端组件库作者)维护的 Design Engineer 单点深课库:每个 skill 是一个独立主题的深课,如 `motion`(动效)、`baseline-ui`(间距/字体/布局的约束基线)、`create-design-md`(把设计语言落成 DESIGN.md)。
免安装:CLI(`npx ui-skills get <slug>`)和 MCP(`https://www.ui-skills.com/mcp`,list_skills/get_skill 两个工具)都是按需取用。与 ui-design-brain 的关系:brain 是 60 组件逐个查的参考书,ui-skills 是按主题读的单点深课,粒度更粗、解释更深。

## 安装

无需安装,直接用 npx:

```bash
npx ui-skills start
npx ui-skills list --category motion
npx ui-skills get baseline-ui
```

也可作为 MCP 接入 `https://www.ui-skills.com/mcp`。

## 什么时候用

做某类 UI 前想先补一课:`npx ui-skills get <slug>` 取对应主题深课;
想让 agent 自动按需取课:接 MCP,交给 list_skills/get_skill 路由;
要把设计语言沉淀成契约:跑 `create-design-md` 深课,产出直接进项目根的 DESIGN.md;
什么时候不用:日常生成走 frontend-design + ui-ux-pro-max 即可,深课是"写之前补课",不是常驻生成层。
