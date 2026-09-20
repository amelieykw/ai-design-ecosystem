---
name: w3c-dtcg
title: "W3C DTCG"
description: "设计 token 行业标准,2025.10 落定首个稳定版"
layer: ①规范
status: 未装
purpose: 设计 token 行业标准(W3C Design Tokens Community Group),2025.10 首个稳定版,定义 JSON token 格式与 $value/$type/$extension 结构
tags: [token, DTCG, 规范]
docs: https://www.designtokens.org/
version: "2025.10"
featured: false
addedAt: "2026-09-18"
---

## w3c-dtcg · 详细教程

## 是什么

W3C Design Tokens Community Group 维护的设计 token 行业标准,2025.10 发布首个稳定版。它不定工具,只定格式:DTCG JSON 的 `$value`/`$type`/`$extension` 结构与分组语义,让 token 在设计工具与代码之间有共同语言。Figma variables、Tokens Studio、Style Dictionary(本库 style-dictionary 词条 v4 原生支持)、Terrazzo(本库 terrazzo 词条 DTCG 原生)、figma-console-mcp 的导出方言均以此为基准。
本机无需"安装"——它是格式标准,落地方式是你的 token 文件按它组织。

## 安装

标准本身无需安装。要读规范原文或跟踪草案,直接访问 designtokens.org;token 流水线工具对 DTCG 的支持程度查各自词条。

## 什么时候用

写 token 文件、评审工具导出的 token JSON 时,拿它当格式裁判:字段结构是否标准、别名字段怎么写;
选 token 工具链(style-dictionary vs terrazzo vs figma-console-mcp 导出)时,把"DTCG 2025.10 兼容"当硬指标;
什么时候不用:它只是纸面规范,不执行任何 lint/转换——动手校验交给 design-token-kit 或 style-dictionary。
