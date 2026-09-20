---
name: mengto-skills
title: "MengTo skills"
description: "123 个跨 Codex/Claude/Cursor 的 skills,视觉捕捉转超提示词"
layer: ③知识
status: 未装
purpose: 123 个 skills(README 口径,以实时值为准;agent-skills/ 下实见 3d/codex/game-development/media/ui/web-design 六个子目录),主打的视频→超提示词、整页截长图→分段提示词、Three.js/GSAP 风格复刻等捕捉-复刻工作流
tags: [设计稿, 知识库, 动效]
docs: https://github.com/MengTo/skills
repo: https://github.com/MengTo/skills
stars: 1k-10k
featured: false
addedAt: "2026-09-18"
---

## mengto-skills · 详细教程

## 是什么

MengTo(Sketch 设计师社区出身)维护的 agent skills 集,README 口径:123 个 skills(agent-skills/ 下实见 3d / codex / game-development / media / ui / web-design 六个子目录),数字以 README 实时值为准。特色是"捕捉→复刻"链路:video-to-superprompt 把设计录屏转成超详细提示词、stitched-full-page-capture 抓整页而非仅首屏、html-to-interaction-prompts 把现成页面拆成单区/单动效/单 hover 的可复用提示,另有 Awwwards 站风格研究、Three.js/GSAP 风格、3D 场景与四季天空盒等重渲染向内容。
定位为纯 Markdown skill 文件夹,格式可移植:Codex 直接读 SKILL.md,Claude Code 复制进 skills 目录,Cursor 指到对应文件夹。
与库内分工:emil-skills 管动效品味与审查,MengTo 这批管的是"把看到的好东西变成可复刻提示词"的素材工作流,更偏灵感捕捉而非工程规范。

## 安装

暂不安装(刻意保留的空白区)。单点取用时按官方推荐格式复制对应 skill 文件夹:

```bash
git clone --depth 1 https://github.com/MengTo/skills /tmp/mengto-skills
cp -r /tmp/mengto-skills/agent-skills/web-design/<skill-name> ~/.claude/skills/
```

## 什么时候用
想复刻某个 Awwwards 级站点的具体动效/氛围时,取 video-to-superprompt 或 html-to-interaction-prompts 单点装;
做 Three.js/3D 展示类页面时,3d 子目录有现成场景配方(虚拟导览/四季天空盒/Retina 200% 渲染);
什么时候不用:常规 UI 生成走本库审美层(frontend-design + emil-skills)已够;123 个全量装会像 designer-skills 一样过重,且捕捉类工作流使用频率低。
