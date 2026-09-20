---
name: anthropics-skills
title: "Anthropic Skills"
description: "Agent Skills 官方源头与格式规范,官方设计插件集散地"
layer: ①规范
status: 已装
purpose: Agent Skills 格式与规范的源头(agentskills.io 开放标准出处);维护 frontend-design、canvas-design、brand-guidelines、document-skills 等官方设计插件;以 plugin marketplace 分发,装一次全局生效
tags: [规范, SKILL, 插件市场, frontend-design]
install: |
  claude plugin marketplace add anthropics/skills
docs: https://github.com/anthropics/skills
repo: https://github.com/anthropics/skills
stars: 1k-10k
featured: false
addedAt: "2026-09-18"
---

## anthropics-skills · 详细教程

## 是什么

Anthropic 官方维护的 Agent Skills 仓库——skill 格式(frontmatter + 渐进式加载协议)的源头,agentskills.io 开放标准即出自这里。
本机以官方插件形式启用 27 个插件,其中 frontend-design、canvas-design、brand-guidelines、document-skills 等设计相关成员都出自该仓库;已入库的 frontend-design(一切审美 skill 的源头)就是这个生态的成员。

## 安装

见 frontmatter `install` 字段的命令添加 marketplace,再在 `/plugin` 面板逐个选装;本机已装齐,更新与启停统一走 `/plugin` 面板,不手动改 `~/.claude/skills/`。

## 什么时候用

想找某个能力的"官方正主"时先来这里核对,避免装到第三方仿制品;
想自己写 skill 时,对照这里的格式规范与示例起步;
已有插件要更新/停用时在 `/plugin` 面板操作——同名 skill 若另装了独立版本(如 ui-ux-pro-max 的教训),记得 disable 旧 plugin 避免双源抢激活。
