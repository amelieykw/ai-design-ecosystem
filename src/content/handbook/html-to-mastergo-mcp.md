---
name: html-to-mastergo-mcp
title: "html-to-mastergo-mcp"
description: "Refore 网页转设计:agent 批量把网页导入 MasterGo 画布"
layer: ⑥底座
status: 按需
purpose: Refore 系网页转设计 MCP(npm @refore-ai/html-to-mastergo-mcp,v0.3.1):agent 打开页面逐个导入 MasterGo 画布,18 个工具(导入 8 / 读画布 7 / 导航 3),刻意只写不读改——文档修改交给同系 talk-to-design-mcp
tags: [MCP, 国产, 设计稿, MasterGo]
install: |
  claude mcp add refore-html-to-mastergo -- npx -y @refore-ai/html-to-mastergo-mcp
docs: https://www.npmjs.com/package/@refore-ai/html-to-mastergo-mcp
repo: https://www.npmjs.com/package/@refore-ai/html-to-mastergo-mcp
featured: false
addedAt: "2026-09-18"
---

## html-to-mastergo-mcp · 详细教程

## 是什么

Refore(挂 MasterGo 社区插件生态)的网页转设计 MCP:npm 包 @refore-ai/html-to-mastergo-mcp v0.3.1,配合 MasterGo 内的"Refore 网页转设计"插件把 HTML 文件或网页 DOM 导入 MasterGo 画布。设计意图是批量场景——让 agent 按要求走完一个操作流程/所有子模块,逐页导入形成完整设计稿。工具共 18 个分三组:导入 8 个(import_html 首选入口,支持本地文件与浏览器 dump 两类来源、target 定位插入/替换、get_capture_guide 抓取 SOP、no_browser_fallback 兜底,另有 dev_import_demo/remove_import/wait_task/get_status)、读画布自检 7 个(get_design_context/get_selection/query_nodes/get_nodes/get_local_styles/get_available_fonts/export_node_image)、导航 3 个(select_nodes/scroll_into_view/set_current_page)。
README 明确该 MCP **不提供任何修改文档的工具**——导入是唯一写入路径,改节点用同系列 @refore-ai/talk-to-design-mcp。与库内分工:mastergo-magic-mcp 是 MasterGo 官方桥梁(读稿+画布双向读写),这个补的是**反向**——网页→设计稿,与 html-to-design 类工具同赛道但 agent 原生、支持逐页批量。同系列另有四平台包,覆盖即时设计/Pixso/Figma。

## 安装

按需项(见 frontmatter `install` 字段,Node 18+)。前置两件:MasterGo 里安装 Refore 网页转设计社区插件,并在插件的 MCP tab 连接后 agent 才能导入;Codex/Cursor/Windsurf 的配置格式见 npm README。

## 什么时候用
已有网页(官网/竞品页/自己产品的历史页面)要在 MasterGo 里变成可编辑设计稿、且页面多到手动逐页导不划算时;
跨设计工具团队:同系列包对 MasterGo/即时设计/Pixso/Figma 各出一个,工作流一致;
什么时候不用:方向反了(设计稿→代码)用 mastergo-magic-mcp;目标画布是 Figma 且只做单页,plumb-mcp 的 plumb_import_web 附带语义图更省事。
