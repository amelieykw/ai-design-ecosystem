---
name: skill-wcag-accessibility
title: "WCAG Accessibility Skill"
description: "WCAG 2.2 AA 四模式 skill,发现可直接映射司法管辖义务"
layer: ⑥底座
status: 未装
purpose: WCAG 2.2 AA Claude skill 四模式:组件顾问(语义 HTML/ARIA/键盘规格)、测试执行(axe-core 扫描)、结构化问题报告、司法管辖映射(ADA/Section 508/EAA/AODA 等法律基线对照)
tags: [a11y, WCAG, 知识库]
docs: https://github.com/salawi45/skill-wcag-accessibility
repo: https://github.com/salawi45/skill-wcag-accessibility
stars: <100
featured: false
addedAt: "2026-09-18"
---

## skill-wcag-accessibility · 详细教程

## 是什么

salawi45 维护的单文件 Claude skill(SKILL.md + 3 个 references:15+ 常见组件的 ARIA 模式、WCAG 2.2 AA 全条款表、各司法管辖法律对照)。四模式:开发时当组件顾问给语义 HTML/键盘行为规格;PR/CI 里跑 axe-core 扫描与键盘检查;发现按固定表格出结构化报告(条款/严重度/用户影响/修复建议);独有的一层是把技术发现映射到 ADA Title II/III、Section 508、EU EAA/EN 301 549、加拿大 AODA、英国 Equality Act 的法律基线——工程标准恒为 WCAG 2.2 AA,法律层单独分层。
与库内分工:spec-a11y 是真实浏览器跑 113 规则出检测证据,web-a11y-agent-skills 是开发期技能包;这个 skill 的差异点是**合规报告与法条映射**,面向"要给法务/客户交代"的场景。

## 安装

按需项。官方安装路径面向 Claude.ai 网页版(release 页下载 .skill 文件 → Settings → Skills 安装);Claude Code 侧可取仓库 wcag-accessibility/SKILL.md 复制进 `~/.claude/skills/`(需自建 skills 目录结构,非官方路径):

```bash
git clone --depth 1 https://github.com/salawi45/skill-wcag-accessibility /tmp/wcag-skill
cp -r /tmp/wcag-skill/wcag-accessibility ~/.claude/skills/
```

## 什么时候用
交付物要写明合规基线、或客户问"这网站在欧盟/美国法律下什么标准"时,用模式 4 出司法管辖对照;
给 a11y 问题写正式修复清单时,用模式 3 的结构化报告格式(比口头描述可追责);
什么时候不用:纯技术检测交给 spec-a11y(有真实浏览器证据);日常开发期 a11y 指导用 web-a11y-agent-skills 的 authoring skill 更细。
