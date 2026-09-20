---
name: google-design-md
title: "Google design.md"
description: "DESIGN.md 格式官方规范,lint/diff/export CLI 免安装即用"
layer: ①规范
status: 未装
purpose: DESIGN.md 格式官方规范 + CLI(lint 含 WCAG 对比度检查 / diff / export 到 Tailwind/DTCG)
tags: [规范, CLI, WCAG, Tailwind, DTCG]
docs: https://github.com/google-labs-code/design.md
repo: https://github.com/google-labs-code/design.md
featured: false
addedAt: "2026-09-18"
---

## google-design-md · 详细教程

## 是什么

Google 实验室出的 DESIGN.md 格式官方规范 + 命令行工具。
`npx @google/design.md lint/diff/export` 即用,无需安装,本机已实测免安装可用。

## 安装

见 frontmatter `docs` 链接,无需 npm 安装。

## 什么时候用

新项目写完 DESIGN.md 后跑 `lint` 校验 WCAG 对比度。
老项目(已有 DESIGN.md)用 `diff` 看改动。`export` 可生成 Tailwind config 或 DTCG JSON。
