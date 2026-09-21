---
name: test-comp
title: 组件测试件
description: Task 17 临时测试条目,验证 components 子类内联 level 徽章 + code 块 + 可选 preview。
tags: [test, components]
featured: false
addedAt: "2026-09-18"
level: "组件级"
code: |
  export function Card({ title, children }) {
    return (
      <article className="card">
        <h3>{title}</h3>
        {children}
      </article>
    )
  }
---

用于测试配件子类展示。
