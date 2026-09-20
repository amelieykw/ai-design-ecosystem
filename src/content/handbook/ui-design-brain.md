---
name: ui-design-brain
title: "ui-design-brain"
description: "60 个组件的最佳实践知识库,两个 md 文件零成本常驻"
layer: ③知识
status: 已装
purpose: 60 组件最佳实践知识库(源自 component.gallery):布局模式/别名/反模式/无障碍规则,另附 5 风格预设;全部内容就 2 个 md 文件,装完零维护
tags: [知识库, 组件, a11y]
install: |
  git clone https://github.com/carmahhawwari/ui-design-brain.git ~/.claude/skills/ui-design-brain && rm -rf ~/.claude/skills/ui-design-brain/.git
docs: https://github.com/carmahhawwari/ui-design-brain
repo: https://github.com/carmahhawwari/ui-design-brain
featured: false
addedAt: "2026-09-18"
---

## ui-design-brain · 详细教程

## 是什么

carmahhawwari 维护的组件知识库:60 个组件的最佳实践,数据源自 component.gallery,涵盖布局模式/别名/反模式/无障碍规则,另附 5 个风格预设。
本机已 git clone 到 `~/.claude/skills/ui-design-brain` 并删了 `.git/`(skills 目录不带版本控制元数据)。与 ui-ux-pro-max 的分工:pro-max 管宏观(行业→设计系统),brain 管微观(单个组件怎么摆、有哪些反模式);与 ui-skills 的分工见 ui-skills 词条。

## 安装

见 frontmatter `install` 字段的命令,clone 完顺手 `rm -rf .git`;两个 md 文件,后续更新重跑一遍 clone 即可。

## 什么时候用

写某个具体组件(表格/抽屉/表单/导航…)前让它对答案:布局模式选哪个、别名叫什么、常见反模式别踩、无障碍规则过一遍;
什么时候不用:还没定设计系统方向时先跑 ui-ux-pro-max 定宏观,再回来查组件级细节。
