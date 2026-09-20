---
name: plumb-mcp
title: "Plumb MCP"
description: "Figma/网页同图语义设计图,verify+fit 闭环代码自愈"
layer: ⑥底座
status: 未装
purpose: AI 原生设计工程平台(单 MCP):Figma 或任意 URL 归一化为同一语义设计图(token 去重/flexbox 已解/角色标注),plumb_verify/plumb_fit 让生成代码对照源自愈到像素级,plumb_studio 反向从一句 brief 生成带自评循环的 Figma 文件
tags: [MCP, Figma, 设计稿, 审查]
install: |
  npm install -g plumb-mcp && plumb-mcp init
docs: https://github.com/tathagat22/plumb-mcp
repo: https://github.com/tathagat22/plumb-mcp
stars: <100
featured: false
addedAt: "2026-09-18"
---

## plumb-mcp · 详细教程

## 是什么

tathagat22 维护的 AI 原生设计工程平台,以单个 MCP server 交付。核心是语义设计图:plumb_node 读 Figma、plumb_import_web 读任意在线网页,两者归一化到同一张图——token 去重、auto-layout 预解为 flexbox、保守角色标注(nav/hero/card…)——178 节点对话框实测约 2.6k token(对比 Figma API 的数十万级),绕开官方 Dev Mode 的 25k token 上限与按月调用配额(走 Figma 桌面插件通道,免费版可用,不碰 REST 限流)。
两个方向共用这张图:读方向 plumb_emit_react 出 React 后用 plumb_verify/plumb_fit 对照源 diff 出修复清单、自愈到像素级;写方向 plumb_studio 从一句 brief 调研参考站→提品牌→生成 Figma 文件→plumb_review 自评迭代,是唯一同时闭合"代码→设计"验证回路与"提示→设计"生成回路的 Figma MCP。与库内分工见 figma-console-mcp、cursor-talk-to-figma-mcp 词条。

## 安装

暂不安装(本机 Figma 侧已有官方 MCP plugin 2.1.7 + figma-console-mcp 词条覆盖 token 同步)。需要时三步(见 frontmatter `install` 字段):`plumb-mcp init` 自动探测 Claude Code/Cursor/VS Code/Windsurf 写配置;再一次性 sideload Figma 插件(manifest 在 `$(npm root -g)/plumb-mcp/figma-plugin/manifest.json`,Figma 桌面端 Plugins → Development 导入后 Pair)。免 Figma 账号先跑 `npx plumb-mcp demo` 看自愈闭环演示(离线、无 key)。

## 什么时候用
Figma 官方 MCP 撞 25k token 上限/免费版调用配额、或 Variables API 要 Enterprise 档时,换它读稿;
要**验证**生成代码真的还原了设计(或对照竞品 URL)并自动修到位时——这是它区别于一切单向转换器的核心能力;
什么时候不用:只做设计稿只读分析,官方 MCP + figma-console-mcp 已够;团队无 Figma 协作且只对网页参考感兴趣,plumb_import_web 可单独用,但整平台能力发挥需要 Figma 侧配合。
