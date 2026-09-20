---
name: anti-slop
title: "anti-slop (ANTISLOP.md)"
description: "38 条强制反 AI 味规则,交付门前最后闸"
layer: ②审美
status: 未装
purpose: ANTISLOP.md:38 条强制规则(禁三卡片/禁纯黑/禁默认字体等)加交付门报告机制;与 DESIGN.md、AGENTS.md 组成项目三件套,不依赖任何运行时
tags: [审美, 反模板味, 规范, DESIGN.md]
docs: https://github.com/miqdadbadjuber/anti-slop
repo: https://github.com/miqdadbadjuber/anti-slop
stars: <100
featured: false
addedAt: "2026-09-18"
---

## anti-slop · 详细教程

## 是什么

miqdadbadjuber 维护的轻量规则集:核心交付物是一个 ANTISLOP.md——38 条强制规则加"交付门报告"(任务收尾时逐条自查出报告)。
纯文本、无运行时、<100★ 的新兴仓库。定位与 impeccable 互补:impeccable 是可执行的确定性扫描(61 条规则进 CI/hook),anti-slop 是喂给任何 LLM 的指令文件——三件套里 DESIGN.md 管目标、AGENTS.md 管流程、ANTISLOP.md 管禁令。

## 安装

不作为 skill 安装,直接把 ANTISLOP.md 拷进项目根,作为三件套的一份契约文件:

```bash
curl -O https://raw.githubusercontent.com/miqdadbadjuber/anti-slop/main/ANTISLOP.md
```

交给 agent 时明确"遵循 ANTISLOP.md"即可。

## 什么时候用

老项目/多工具协作项目(Claude Code、Cursor、其他 LLM 都吃同一份禁令)想统一反 AI 味底线时;
什么时候不用:本机日常已有 impeccable hook 全局兜底(编辑即扫 + Stop 深扫),单机 Claude Code 工作流不必再叠一层文本禁令——两者同开会重复报错。
