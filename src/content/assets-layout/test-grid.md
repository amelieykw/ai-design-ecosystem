---
name: test-grid
title: 12 列栅格与字号阶梯(测试)
description: Task 16 临时测试条目,验证 LayoutView 的 typeScale 表格与栅格示意渲染,Task 24 填正式数据时可能覆盖或删除。
tags: [test, layout, grid]
featured: false
addedAt: "2026-09-18"
typeScale:
  - step: display
    px: 64
  - step: h1
    px: 48
  - step: h2
    px: 32
  - step: body
    px: 16
  - step: caption
    px: 12
grid:
  cols: 12
  gutter: "16px"
---

用于测试字号阶梯表(降序渲染、serif specimen)与 12 列栅格示意。
