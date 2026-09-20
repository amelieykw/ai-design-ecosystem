---
name: figma-console-mcp
title: "Figma Console MCP"
description: "121 工具把设计系统变成 API,token 双向同步直推 Figma"
layer: ⑥底座
status: 未装
purpose: '把设计系统变成 API 的 Figma MCP——Local 模式 121 工具(Cloud 101/Remote 只读 9),DTCG token 双向同步(export 10 格式/import 全量 apply)、figma_ds_* 设计系统提取(代码→token→Storybook)、截图调试'
tags: [MCP, Figma, token, DTCG, 设计系统]
install: |
  claude mcp add figma-console -s user -e FIGMA_ACCESS_TOKEN=<TOKEN> -e ENABLE_MCP_APPS=true -- npx -y figma-console-mcp@latest
docs: https://github.com/southleft/figma-console-mcp
repo: https://github.com/southleft/figma-console-mcp
stars: 1k+
featured: false
addedAt: "2026-09-18"
---

## figma-console-mcp · 详细教程

## 是什么

southleft 维护的 Figma MCP,口号"把设计系统变成 API":Local 模式全量 121 工具(Cloud 101 / Remote 只读 9)。
看家能力:figma_export_tokens/figma_import_tokens 双向 token 同步(DTCG 2025.10 方言 + 9 种格式,import 有完整 apply 阶段:建集合/写别名/重命名,官方称替代 Style Dictionary 与 Tokens Studio 的导出管线);figma_ds_* 七件套从生产代码库反推设计系统并 scaffold Storybook;另有截图校验、控制台日志流。与 cursor-talk-to-figma-mcp 的分工见该词条。

## 安装

见 frontmatter `install` 字段的命令;`<TOKEN>` 在 Figma Manage personal access tokens 生成(须 `figd_` 开头,勾只读 File content 即可起步),不要硬编码进仓库。
还需在 Figma Desktop 导入 Desktop Bridge 插件(服务端自动落盘 `~/.figma-console-mcp/plugin/manifest.json`,路径固定)。

## 什么时候用

token 体系要以 Figma variables 为单一事实源、和代码双向同步时(这是它最强的差异化能力);
老代码库要反提设计系统(ds_extract_tokens 挖出事实 token、scaffold 出包与 Storybook)时;
什么时候不用:已有 Figma 官方 MCP 且只做只读分析;团队 token 管线已定在 Style Dictionary/Tokens Studio 且无意迁移。
