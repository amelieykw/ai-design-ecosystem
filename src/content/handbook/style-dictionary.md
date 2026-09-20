---
name: style-dictionary
title: "Amazon Style Dictionary"
description: "Amazon 出品的 token 构建事实标准,一份 token 出全平台"
layer: ①规范
status: 未装
purpose: Amazon 出品的跨平台 token 构建系统事实标准:tokens JSON 深合并 + 引用解析 + 逐平台 transformGroup,输出 CSS/SCSS/JS/Android/iOS 等;v4 原生 DTCG 兼容($value/$type)
tags: [规范, token, CLI, DTCG, 多平台]
install: |
  npm install -D style-dictionary
docs: https://github.com/amzn/style-dictionary
repo: https://github.com/amzn/style-dictionary
stars: 10k+
featured: false
addedAt: "2026-09-18"
---

## style-dictionary · 详细教程

## 是什么

Amazon 官方维护的跨平台 token 构建系统,该品类的事实标准,10k+★。
工作方式:config 声明 `source`(token 文件 glob,深合并)+ `platforms`(每个平台一组 transformGroup/buildPath/files),跑 `style-dictionary build` 把一份 token 输出到 CSS/SCSS/JS/Android/iOS 等任意目标。v4 原生前向兼容 DTCG(`$value`/`$type`,自动检测,新旧格式二选一不可混用)。与 google-design-md 的 export、figma-console-mcp 的 token sync 在同一链路:design.md 产出 DTCG → Style Dictionary 构建 → 各平台产物。

## 安装

见 frontmatter `install` 字段的命令,作为 devDependency 装进具体项目(构建工具不进全局):

```bash
npx style-dictionary init basic
style-dictionary build
```

## 什么时候用

项目 token 要同时供给 web + App(或多平台)时,用 config 把一份 tokens 出到所有平台;
token 文件多了要拆分/合并/互相引用时,靠它的深合并与引用解析;
什么时候不用:单平台纯 web 项目,design.md export 直接出 Tailwind config 就够,不必引入构建层。
