---
name: test-motion
title: 缓动曲线与时长标注(测试)
description: Task 16 临时测试条目,验证 MotionView 的 CSS-only 缓动 demo 与时长列表渲染,Task 24 填正式数据时可能覆盖或删除。
tags: [test, motion, easing]
featured: false
addedAt: "2026-09-18"
curves:
  - name: ease-out-expo(站点主曲线)
    css: "cubic-bezier(0.16, 1, 0.3, 1)"
  - name: linear(进度条)
    css: "linear"
durations:
  - name: 微反馈
    ms: 160
  - name: 常规过渡
    ms: 240
  - name: 大区块转场
    ms: 480
---

用于测试缓动曲线滑块 demo(纯 CSS,站点同款 ease-out)与时长标注列表。
