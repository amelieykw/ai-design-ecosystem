---
name: dataviz-diverging-red-green
title: 图表发散-红绿
description: 红-白-绿的发散色板,适合正负值、涨跌、差异对比
tags: [图表]
featured: false
addedAt: "2026-09-21"
palette:
  - { name: 强负值红, hex: "#B91C1C", role: negative-strong }
  - { name: 弱负值粉, hex: "#FCA5A5", role: negative-weak }
  - { name: 零值白, hex: "#FFFFFF", role: neutral }
  - { name: 弱正值浅绿, hex: "#86EFAC", role: positive-weak }
  - { name: 强正值绿, hex: "#15803D", role: positive-strong }
---

# 图表发散-红绿

## 使用建议

发散色板(diverging)的经典做法:负向红→中性白→正向绿。常用于同比环比、涨跌停、A/B 测试结果差异。注意红绿色盲用户(8% 男性)不易区分两端,务必配数值标签和方向图标。

## 对比度提示

零值白 `#FFFFFF` 是视觉锚点,数据跨度超过中性 2 倍以上时建议拆为两个单色序列,避免中性区被挤压看不清。