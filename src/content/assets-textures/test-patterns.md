---
name: test-patterns
title: 纹理测试样例
description: Task 17 临时测试条目,验证 TextureView live CSS 演示 + preview 叠加 + 白名单净化。
tags: [test, textures]
featured: false
addedAt: "2026-09-18"
patterns:
  - name: 米白斜纹
    css: "background: repeating-linear-gradient(45deg, #f5efe6 0 8px, #fffdf8 8px 16px);"
  - name: 噪点叠加
    preview: "https://example.com/noise-preview.png"
    css: "background-color: #faf9f6; background-image: url(https://example.com/noise.png);"
---

用于测试 TextureView 的 live CSS 演示、白名单净化与 preview 叠加。
