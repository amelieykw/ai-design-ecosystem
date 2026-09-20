---
name: terrazzo
title: "Terrazzo"
description: "DTCG 原生 token 构建,CSS 模式选择器玩转多品牌多主题"
layer: ①规范
status: 未装
purpose: DTCG 原生的 token 构建工具链:`npx tz init` 可从 Adobe Spectrum/GitHub Primer 等开源设计系统起步,`tz build` 经插件出 CSS/Sass/JS/Swift/Tailwind;lint/check/format 全套校验
tags: [token, DTCG, CLI, 多主题]
install: |
  npm i -D @terrazzo/cli
docs: https://github.com/terrazzoapp/terrazzo
repo: https://github.com/terrazzoapp/terrazzo
stars: 1k+
featured: false
addedAt: "2026-09-18"
---

## terrazzo · 详细教程

## 是什么

terrazzoapp 维护的 DTCG 原生 token 构建工具链(前身 Cobalt UI):CLI 读 DTCG tokens JSON,经插件生成 CSS/Sass/JS/TS/Swift/Tailwind 代码。
与 Style Dictionary 的差异:DTCG 是第一公民(不是兼容层);核心卖点是 CSS 插件支持模式选择器(`.dark`、`[data-theme]` 等约定),一份 token 原生出多品牌/多主题样式;`tz init` 还能直接从 Adobe Spectrum、GitHub Primer、IBM Carbon、Shopify Polaris 等 OSS 设计系统起盘。

## 安装

见 frontmatter `install` 字段的命令,作为项目 devDependency:

```bash
npx tz init      # 生成 terrazzo.config.ts,可从开源设计系统起步
npx tz build     # 构建 + lint,支持 --watch
npx tz check tokens.json   # 校验 DTCG 规范合规
```

## 什么时候用

多品牌/多主题(明暗、多子品牌)是硬需求、token 要原生映射 CSS 模式选择器时,选它而非 Style Dictionary;
从零起盘想抄大厂作业时,`tz init` 直接以 Carbon/Primer 为起点;
什么时候不用:已有 Style Dictionary 体系或需要 Android/iOS 全家桶输出的事实标准场景,别为单点特性迁移。
