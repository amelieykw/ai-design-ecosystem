---
name: install-impeccable
title: "安装 impeccable"
description: "装 impeccable 检测引擎 + 设计 hook,PostToolUse 即时扫 + Stop 深扫一次到位"
tags: [impeccable, 装机, hook, 确定性检测]
featured: true
addedAt: "2026-09-18"
section: 装机
order: 1
command: npx impeccable install --providers=claude --scope=global
---

装 impeccable skill + 引擎,并自动注册设计 hook:每次 Edit/Write UI 文件即时扫,Stop 时全规则深扫。装完 `detect`/`ignores`/`update` 子命令即可用。

> 本机 v4.3.1 实测:若 GitHub releases 直连超时,见工作流页「装机坑」一节走 gh-proxy.com 手动路径。
