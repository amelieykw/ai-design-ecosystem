---
name: claude-code-templates
title: "claude-code-templates"
description: "Claude Code 生态应用商店,组件模板一键装"
layer: ⑥底座
status: 未装
purpose: Claude Code 生态组件市场:100+ agents/commands/settings/hooks/MCP 经 CLI 或 aitmpl.com 网页按需一键装,非设计专用
tags: [CLI, 知识库]
install: |
  npx claude-code-templates@latest
docs: https://github.com/davila7/claude-code-templates
repo: https://github.com/davila7/claude-code-templates
stars: 10k+
featured: false
addedAt: "2026-09-18"
---

## claude-code-templates · 详细教程

## 是什么

davila7 维护的 Claude Code 生态应用商店(aitmpl.com),README 口径:100+ agents、commands、settings、hooks、MCP 组件,`--agent/--command/--mcp` 参数按组件精确安装。注意它本身**不是设计类仓库**——收录理由是它作为生态入口的发现价值:新 agent/MCP 上线常第一时间进这里,浏览一遍等于逛生态货架;组件数字持续增长,以 README 实时值为准。
全景图明确本机"故意不装":设计工作流所需的 skill 与 marketplace 已由 handbook 其余条目(anthropics-skills、designer-skills 等)精确覆盖。

## 安装

暂不安装。需要临时浏览/安装某个组件时免安装直接跑:

```bash
npx claude-code-templates@latest            # 交互式浏览
npx claude-code-templates@latest --agent development-tools/code-reviewer --yes
```

## 什么时候用

选型调研时当目录逛:找某类 agent/MCP 的社区现成实现,先来这搜再决定自建;
什么时候不用:日常设计工作流——本 handbook 已有的条目是精挑结果,再从这里批量装通用开发组件只会稀释 skill 匹配精度;设计能力不在它的覆盖范围。
