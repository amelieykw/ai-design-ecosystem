---
name: taste-skill
title: "taste-skill"
description: "反 AI 模板味风格变体集,三旋钮调出非默认审美"
layer: ②审美
status: 已装
purpose: 10+ 独立风格变体按需单装(soft/minimalist/brutalist/stitch…);VARIANCE/MOTION/DENSITY 三旋钮控制变化度、动效量、信息密度;stitch 变体原生支持 DESIGN.md 导出
tags: [审美, 反模板味]
install: |
  npx skills add https://github.com/Leonxlnx/taste-skill --skill "high-end-visual-design"
docs: https://github.com/Leonxlnx/taste-skill
repo: https://github.com/Leonxlnx/taste-skill
stars: "10k+"
featured: false
addedAt: "2026-09-18"
---

## taste-skill · 详细教程

## 是什么

Leonxlnx 维护的反 AI 模板味风格变体集,10+ 个独立 skill 按需单装而非全家桶。
本机通过 `--skill` 参数 13 选 1 只装了 soft 变体 high-end-visual-design(高端机构审美)。它与 frontend-design 同为审美总纲、职责重叠,装了就二选一主用:默认 frontend-design,特殊风格项目显式点名 taste;动效细节交给 emil-skills(taste 管整体风格,emil 管动效)。

## 安装

见 frontmatter `install` 字段的命令,`--skill` 精确单装 soft 变体即可,不必整仓全装。

## 什么时候用

电影质感/高端机构审美的项目:显式点名 high-end-visual-design 代替 frontend-design 生成;
想换非默认审美方向时:按项目气质挑 minimalist/brutalist 等其他变体,用同样的 `--skill` 参数单独装;
什么时候不用:普通项目默认走 frontend-design 即可,同一会话别让两个审美总纲抢激活。
