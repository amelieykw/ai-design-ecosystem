---
name: cursor-talk-to-figma-mcp
title: "Cursor Talk to Figma MCP"
description: "Grab 开源 Cursor↔Figma 双向 MCP,WebSocket 实时读写画布"
layer: ⑥底座
status: 未装
purpose: Grab 开源的 AI↔Figma 双向 MCP(WebSocket 中继,默认 3055 端口):agent 经 join_channel 连上 Figma 插件后,可直接读设计并编程化改画布;社区 6.9k+ 安装
tags: [MCP, 设计稿, Figma, 双向同步]
install: |
  claude mcp add TalkToFigma -- bunx cursor-talk-to-figma-mcp@latest
docs: https://github.com/grab/cursor-talk-to-figma-mcp
repo: https://github.com/grab/cursor-talk-to-figma-mcp
stars: 1k+
featured: false
addedAt: "2026-09-18"
---

## cursor-talk-to-figma-mcp · 详细教程

## 是什么

Grab 开源的 AI agent↔Figma 双向 MCP:三件套 = MCP server(bunx 分发)+ WebSocket 中继(`bun socket`,默认 localhost:3055)+ Figma 插件。agent 先调 `join_channel` 与插件加入同一频道,之后可读设计稿并编程化改画布(本机 Figma 官方 MCP 只读,这是它的读写补位)。
与 figma-console-mcp 的差异:这个走 WebSocket 实时通道、要自持中继进程、偏"操作画布";console 走 REST+插件桥、121 工具、偏"设计系统管理"。

## 安装

见 frontmatter `install` 字段的命令装 MCP server;但 WebSocket 中继和 Figma 插件不在 npm 包里,须 clone 仓库:

```bash
git clone https://github.com/grab/cursor-talk-to-figma-mcp.git
cd cursor-talk-to-figma-mcp && bun socket   # 常驻中继,WSL 下需放开 hostname 0.0.0.0
```

Figma 侧从社区页装插件(或本地导入 `src/cursor_mcp_plugin/manifest.json`),先 `join_channel` 再用。

## 什么时候用

要 AI 在 Figma 里真正动手(改图层/排版/建 frame)而不只是读稿时;
与 Figma 官方 MCP 的取舍:只读分析用官方插件,写画布才需要它——用前记得开中继,三进程(MCP/中继/插件)缺一不可。
