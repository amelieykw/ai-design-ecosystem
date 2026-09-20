---
name: ai-design-ecosystem
colors:
  text-primary: "#1a1a1a"
  text-secondary: "#6b6b6b"
  bg-primary: "#faf9f6"
  bg-dark: "#1a1a1a"
  accent: "#d4a574"
  status-installed: "#5b8c9e"
  status-optional: "#c08552"
  status-missing: "#9b6b6b"
typography:
  display: { fontFamily: "Source Han Serif SC", fontSize: "3.815rem", fontWeight: 700 }
  h1: { fontFamily: "Source Han Serif SC", fontSize: "3.052rem", fontWeight: 700 }
  h2: { fontFamily: "Source Han Serif SC", fontSize: "2.441rem", fontWeight: 700 }
  h3: { fontFamily: "Source Han Serif SC", fontSize: "1.953rem", fontWeight: 700 }
  h4: { fontFamily: "Source Han Serif SC", fontSize: "1.563rem", fontWeight: 700 }
  body: { fontFamily: "PingFang SC", fontSize: "1rem" }
  code: { fontFamily: "JetBrains Mono", fontSize: "0.9em" }
rounded: { sm: "4px", md: "8px", lg: "16px" }
spacing: { 1: "4px", 2: "8px", 3: "12px", 4: "16px", 6: "24px", 8: "32px", 12: "48px", 16: "64px", 24: "96px" }
shadow: { sm: "0 1px 3px rgba(0,0,0,0.04)", md: "0 4px 12px rgba(0,0,0,0.08)" }
motion: { ease-out: "cubic-bezier(0.16, 1, 0.3, 1)", duration-fast: "160ms", duration-base: "240ms", duration-stagger: "40ms" }
---

# AI 设计生态仓库 · 视觉契约

> 本文件是站点的 DESIGN.md,既是 spec §3 视觉契约的 markdown 落地,也是
> 工作流的 dogfooding 样板(给读者看一份合格的 DESIGN.md 应该长什么样)。
> 对应的 CSS 落地见 `src/styles/tokens.css`。

## Overview

**数字工作室气质**——杂志气质为皮(衬线大标题、米白底、偶发引言分隔),
工程手册为骨(8pt 网格栅格、严格的反模式禁令、可访问性硬指标)。

参考:Stripe Press / Apple Design Resources / Anthropic 工程博客。

## Colors

| 角色 | 色值 | 用途 | 备注 |
|------|------|------|------|
| 文本主 | `#1a1a1a` | 正文、标题 | 不用纯黑 |
| 文本次 | `#6b6b6b` | 元数据、辅助 | |
| 背景主 | `#faf9f6` | 米白底,80% 页面 | 不用纯白 |
| 背景深 | `#1a1a1a` | 详情页 hero 段,20% 页面 | |
| 强调 | `#d4a574` | 银杏黄,**仅装饰** | ⚠️ 不做正文与链接 |
| 已装/成功 | `#5b8c9e` | 状态徽章 | 淡青 |
| 按需/警示 | `#c08552` | 状态徽章 | 琥珀 |
| 未装/危险 | `#9b6b6b` | 状态徽章 | 暗红 |

**为什么银杏黄不做正文与链接**:对比度仅 2.4:1,不达 WCAG AA(4.5:1)。
只在装饰/图标/hover 反馈用,文字色用近黑 `#1a1a1a`。

## Typography

**衬线管标题**(杂志感),无衬线管正文(可读性),等宽管代码。

字体栈(中文优先):
- 正文:`'PingFang SC', 'Source Han Sans SC', 'Noto Sans CJK SC', 'Microsoft YaHei', system-ui, -apple-system, sans-serif`
- 标题:`'Source Han Serif SC', 'Songti SC', 'Noto Serif CJK SC', serif`
- 代码:`'JetBrains Mono', 'SF Mono', monospace`

字号阶 Major Third 1.250:`3.815rem / 3.052rem / 2.441rem / 1.953rem / 1.563rem / 1rem / 0.8rem`

## Spacing & Radius

8pt 网格:`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96`
圆角:`4px(小元素) / 8px(卡片) / 16px(主容器)`

## Motion

缓动曲线 `cubic-bezier(0.16, 1, 0.3, 1)`(弹性收紧,非弹跳)。
时长体系:`160ms / 240ms`,卡片入场 stagger `40ms`。

**三禁**:`❌ 弹跳缓动 / ❌ 视差 / ❌ 弹窗 toast`

## 反模式硬禁令

- ❌ 纯黑 `#000` / 纯白 `#fff`
- ❌ Inter 作主字体超过 2 处(本站直接不用 Inter,中文优先)
- ❌ 渐变紫/蓝作主色
- ❌ 三卡片等宽布局
- ❌ 卡片入场用弹跳缓动
- ❌ 银杏黄 `#d4a574` 做正文与链接

## 可访问性硬指标

- AA 对比度全部达标
- focus ring 可见(`outline: 2px solid #d4a574 + offset 3px`,装饰色用此足够)
- 键盘导航全通
- 所有图片有 alt

## 实施清单

站点通过以下文件落地本契约:
- `src/styles/tokens.css` — CSS 变量全部 token
- `src/styles/global.css` — 全局规则 + reset,规则包进 `@layer base` 让 Tailwind utilities 可覆盖
- `src/pages/index.astro` — `lang="zh-CN"` 与字体声明配合

每次新增组件前,引用本文档的 token,不要硬编码颜色/字号/间距。