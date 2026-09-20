---
name: web-a11y-agent-skills
title: "web-a11y-agent-skills"
description: "10 个便携 a11y skills + 5 subagents,跨四家 agent 通用"
layer: ⑥底座
status: 未装
purpose: 框架无关的 a11y skills 集:10 个 skills(orchestrator/authoring/review/testing/forms/navigation/dynamic-ui/css/web-components/debugging)+ 5 个 subagents,Cursor/Claude Code/Copilot/OpenCode 四端各带安装器
tags: [a11y, 知识库, 多平台]
install: |
  npx skills@latest add klovaaxel/web-a11y-agent-skills/skills/web-a11y-authoring
docs: https://github.com/klovaaxel/web-a11y-agent-skills
repo: https://github.com/klovaaxel/web-a11y-agent-skills
stars: <100
featured: false
addedAt: "2026-09-18"
---

## web-a11y-agent-skills · 详细教程

## 是什么

klovaaxel 维护的框架无关 a11y 技能库(public preview,1.0 前命名与安装流程可能变):10 个便携 skills 覆盖 authoring(写组件)→ review(PR 审查)→ testing(验流程)全环节,外加 forms/navigation/dynamic-ui/css/web-components/debugging 六个专题与 orchestrator 总调度;每种 agent 形态各配 5 个 subagents(Cursor 原生、Claude Code 走 ~/.claude/agents 安装器、Copilot/OpenCode 各有其器)。
全景图将其列为 a11y 按需包的推荐入口(有 WCAG 硬要求再装,日常 impeccable audit 兜底)。与库内分工:spec-a11y 出检测报告,skill-wcag-accessibility 出法条映射,这个管**开发期把 a11y 做对**。

## 安装

按需项——有 WCAG 硬要求的项目再装。skills 按需单装(示例装 authoring,见 frontmatter `install` 字段),Claude Code subagents 走仓库自带安装器:

```bash
node scripts/install-claude-agents.mjs   # 装 5 个 Claude Code subagents
```

## 什么时候用

团队开始用 AI 写组件、想在**生成时**就带上语义 HTML/焦点管理/表单可访问性习惯——装 web-a11y-authoring 当写作规范;
PR 评审要系统过 a11y 时装 web-a11y-review,或整包装 orchestrator 让它调度各专题;
什么时候不用:项目无 WCAG 硬要求时,impeccable audit 的基础 a11y 检查够用;已过设计阶段只差合规证据的,直接 spec-a11y。
