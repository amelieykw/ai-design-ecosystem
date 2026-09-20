---
name: figma-mcp
title: "Figma 官方 MCP"
description: "Figma 官方维护的 MCP,设计稿只读访问的首选通道"
layer: ⑥底座
status: 已装
version: "2.1.7"
purpose: Figma 官方维护的 MCP server,把设计稿上下文直接接入 AI 工作流:读设计信息、提取 token、审计图层结构;本机定位为只读基线,所有"看 Figma"场景首选
tags: [MCP, Figma, 设计稿]
docs: https://github.com/figma/mcp-server-guide
repo: https://github.com/figma/mcp-server-guide
stars: "1k+"
featured: false
addedAt: "2026-09-18"
---

## figma-mcp · 详细教程

## 是什么

Figma 官方维护的 MCP server(官方口径:把 Figma 设计上下文直接带进 AI 工作流),远程端点 `https://mcp.figma.com/mcp`,浏览器 OAuth 授权即用。
本机以官方 plugin 形式安装(2.1.7,随 claude-plugins-official 集合分发,另随附 figma-use / figma-implement-design 等 7 个官方工作流 skill)。定位:全 handbook 的只读基线——看设计稿、批量提取 token、对照代码实现,都先走它;cursor-talk-to-figma-mcp / figma-console-mcp / plumb 三个条目均以它为参照系。官方 guide 仓库 star 当日实测 2005(GitHub API)。

## 安装

/plugin 面板启用官方 figma 插件,或手动接 MCP 端点:

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

浏览器 OAuth 授权一次即用,不需要 personal access token。

## 什么时候用

什么时候用:只读场景首选——拿到 Figma 链接看设计稿信息、对照代码实现找偏差、批量提取 token/变量喂给样式管线;
什么时候不用:按本机分工,写入场景(代码→设计反向生成、改画布)不走官方 MCP——反向生成改用 mastergo-magic-mcp / figma-console-mcp,Figma↔代码双向验证用 plumb;要拿 token 管设计系统双向同步时,figma-console-mcp 的 DTCG 管线更对口。
