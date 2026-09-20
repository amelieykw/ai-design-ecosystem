---
name: mastergo-magic-mcp
title: "MasterGo Magic MCP"
description: "MasterGo 官方 MCP,AI 直接读写设计稿,团队版以上免费"
layer: ⑥底座
status: 按需
purpose: MasterGo(蓝湖系)官方 MCP,AI 直接读设计稿 DSL/D2C 数据,2026-07 升级为画布双向读写
tags: [MCP, 国产, 设计稿, D2C, MasterGo]
install: |
  claude mcp add mastergo-magic-mcp -- npx -y @mastergo/magic-mcp --token=<TOKEN> --url=https://mastergo.com
docs: https://github.com/mastergo-design/mastergo-magic-mcp
repo: https://github.com/mastergo-design/mastergo-magic-mcp
featured: false
addedAt: "2026-09-18"
---

## mastergo-magic-mcp · 详细教程

## 是什么

MasterGo(蓝湖系)官方 MCP:AI 直接读设计稿 DSL/D2C 数据。
2026-07 D20 峰会升级为**画布双向读写**——生成组件体系、一键初始化设计系统、批量多风格提案、D2C 增量 Diff 更新代码。
支持 Claude Code/Cursor/Trae/通义灵码;团队版以上免费可用(MCP 不耗积分)。

## 安装

见 frontmatter `install` 字段的命令,`<TOKEN>` 替换为你在 MasterGo 团队版账号里生成的个人 token(不要硬编码进仓库)。

## 什么时候用

有 MasterGo 设计稿协作需求的项目再装(设计稿→代码、代码→设计稿双向同步);
纯代码项目用不上,不必常驻。
