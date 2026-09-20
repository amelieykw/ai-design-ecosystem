---
name: impeccable
title: "impeccable"
description: "确定性设计反模式检测工具,61 条无 LLM 规则保证可重复输出"
layer: ②审美
status: 已装
version: "4.3.1"
purpose: 确定性反模式检测,61 条无 LLM 规则 + 24 命令闭环
tags: [确定性检测, audit, polish, design-hook]
install: |
  npx impeccable install --providers=claude --scope=global
docs: https://github.com/pbakaus/impeccable
repo: https://github.com/pbakaus/impeccable
stars: 10k+
featured: false
addedAt: "2026-09-18"
---

## impeccable · 详细教程

## 是什么

确定性反模式检测,61 条无 LLM 规则 + 24 命令闭环。

## 安装

见 frontmatter `install` 字段的命令。

## 什么时候用

写完 UI 代码后跑 `/impeccable audit` 做终检;全局 hook 已生效时每次编辑自动扫。
