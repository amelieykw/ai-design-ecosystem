---
name: design-systems-index
title: "Design Systems Index"
description: "Material/Fluent/Carbon/Polaris 主流设计系统导航索引 skill"
layer: ③知识
status: 未装
purpose: 主流设计系统的 dispatch index skill:SKILL.md 每类内联 2-3 个首选,全量列表按需加载于 5 个 reference 文件(大厂 DS/token 资源/pattern library/React DS/RN DS)
tags: [知识库, 设计系统, 索引]
install: |
  npx skills add https://github.com/Ezra-Y/design-systems-index --skill design-systems-index
docs: https://github.com/Ezra-Y/design-systems-index
repo: https://github.com/Ezra-Y/design-systems-index
featured: false
addedAt: "2026-09-18"
---

## design-systems-index · 详细教程

## 是什么

ezra-y 维护的外部链接索引 skill:Material、Fluent、Carbon、Polaris、Atlassian、Lightning 等主流公司设计系统,外加 token 资源、pattern library、React/RN DS 组件库五个类目。
结构是 dispatch index——SKILL.md 只内联每类 2-3 个首选,全量清单放在 per-category reference 文件按需加载,省 token。注意它只管"去哪找",token 架构方法论在独立的 design-system skill,不在此处。

## 安装

见 frontmatter `install` 字段的命令(或 `git clone` 到 `~/.claude/skills/design-systems-index` 后重启)。未装时,同类事实可由 ui-ux-pro-max 的行业规则库和 `design-systems` 独立 skill 部分替代。

## 什么时候用

要参考某家大厂成熟 DS(或为 React/RN 项目选型组件库)时,先查它再考虑联网搜索;
搭设计系统要找 token 工具链、pattern library 时翻 references/design-tokens.md;
什么时候不用:本机已有 `design-systems` 独立 skill + ui-ux-pro-max 覆盖大半场景,频次不高可先不装,装了也只是几 KB 的索引无负担。
