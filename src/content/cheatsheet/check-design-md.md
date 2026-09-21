---
name: check-design-md
title: "校验 DESIGN.md"
description: "lint 视觉契约文件,自动查 WCAG 对比度等硬性问题"
tags: [design.md, 校验, WCAG, DESIGN.md]
featured: true
addedAt: "2026-09-18"
section: 校验
order: 1
command: npx @google/design.md lint DESIGN.md
---

在项目根目录执行,校验 DESIGN.md 契约(对比度不达 WCAG AA 会报出)。免安装,`lint`/`diff`/`spec`/`export` 子命令即用。

> `npx @google/design.md spec` 实测可用,可用来反向导出现有项目的 spec。
