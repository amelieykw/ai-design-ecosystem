---
name: gemini-skills
title: "gemini-skills"
description: "Gemini CLI 扩展:nano-banana-pro 生图 + frontend-design 移植"
layer: ⑥底座
status: 未装
purpose: Gemini CLI 扩展包,两个 skill:nano-banana-pro(Gemini 2.5 Flash 文生图/参考图,uv 脚本驱动)+ frontend-design(anthropics/skills 原样移植,让 Gemini CLI 获得同款审美总纲)
tags: [CLI, 审美, 生成式 UI]
install: |
  gemini extensions install https://github.com/buildatscale-tv/gemini-skills
docs: https://github.com/buildatscale-tv/gemini-skills
repo: https://github.com/buildatscale-tv/gemini-skills
stars: <100
featured: false
addedAt: "2026-09-18"
---

## gemini-skills · 详细教程

## 是什么

buildatscale-tv 维护的 Gemini CLI 扩展,只含两个 skill:nano-banana-pro 走 Gemini 2.5 Flash 生图(uv 跑 Python 脚本,支持 landscape/square/portrait 与参考图,需 GEMINI_API_KEY);frontend-design 是 anthropics/skills 同名 skill 的**原样移植**——README 注明 copy 自官方,目的是让 Gemini CLI 用户拿到与 Claude Code 相同的审美总纲。
收录价值在跨工具对齐:本库 frontend-design 的方法论文档若在 Gemini CLI 里复用,这份移植是现成载体。本机主用 Claude Code,生图另有即梦/jimeng-mcp 管线,故不装。

## 安装

暂不安装。有 Gemini CLI 工作流时一条命令装(见 frontmatter `install` 字段):

```bash
gemini extensions install https://github.com/buildatscale-tv/gemini-skills
gemini extensions list   # 确认 buildatscale-gemini-skills 已启用
```

## 什么时候用

同一套 DESIGN.md 契约要在 Gemini CLI 里也按 frontend-design 的品味出页面时——装它而不是手工搬运 SKILL.md;
需要 Gemini 侧生图(参考图驱动、原生 landscape 比例)且团队统一走 Gemini API 时;
什么时候不用:纯 Claude Code 用户——frontend-design 已装,生图走 jimeng-mcp,重复装同款审美总纲会造成双源抢激活。
