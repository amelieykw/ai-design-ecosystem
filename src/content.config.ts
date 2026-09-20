import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

/**
 * 约定:assets-* 系列的结构化字段(palette/pairing/typeScale 等)为 optional,
 * 支持"渐进补全"——正文 md 先行,结构化数据后续补充。
 * 但渲染层(详情页主展示区)依赖这些字段,填数据时(Task 9/V2)应尽量给全。
 */
// 共用基础字段(SPEC §5.1)
const baseFields = {
  name: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).max(10),
  featured: z.boolean().default(false),
  addedAt: z.string().date(),
}

// handbook 集合(SPEC §5.2)
const handbook = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/handbook' }),
  schema: z.object({
    ...baseFields,
    layer: z.enum(['①规范', '②审美', '③知识', '④资产', '⑤流程', '⑥底座']),
    status: z.enum(['已装', '未装', '按需']),
    version: z.string().optional(),
    purpose: z.string(),
    install: z.string().optional(),
    docs: z.string().url().optional(),
    repo: z.string().url().optional(),
    stars: z.string().optional(),
  }),
})

// cheatsheet 集合(SPEC §5.3)
const cheatsheet = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cheatsheet' }),
  schema: z.object({
    ...baseFields,
    section: z.enum(['装机', '校验', '扫描', '速记']),
    order: z.number().int(),
  }),
})

// 8 个素材子类共用基础 + 子类专属
const assetsColors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assets-colors' }),
  schema: z.object({
    ...baseFields,
    palette: z
      .array(z.object({ name: z.string(), hex: z.string(), role: z.string() }))
      .optional(),
  }),
})

const assetsFonts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assets-fonts' }),
  schema: z.object({
    ...baseFields,
    pairing: z
      .array(
        z.object({
          role: z.string(),
          family: z.string(),
          weight: z.number().int(),
          source: z.string().optional(),
        })
      )
      .optional(),
  }),
})

const assetsLayout = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assets-layout' }),
  schema: z.object({
    ...baseFields,
    typeScale: z.array(z.object({ step: z.string(), px: z.number().int() })).optional(),
    grid: z.object({ cols: z.number().int(), gutter: z.string() }).optional(),
  }),
})

const assetsMotion = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assets-motion' }),
  schema: z.object({
    ...baseFields,
    curves: z.array(z.object({ name: z.string(), css: z.string() })).optional(),
    durations: z.array(z.object({ name: z.string(), ms: z.number().int() })).optional(),
  }),
})

const assetsTextures = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assets-textures' }),
  schema: z.object({
    ...baseFields,
    patterns: z
      .array(z.object({ name: z.string(), css: z.string(), preview: z.string().optional() }))
      .optional(),
  }),
})

const assetsStyles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assets-styles' }),
  schema: z.object({
    ...baseFields,
    references: z.array(z.string().url()).optional(),
    linkedAssets: z.array(z.string()).default([]),
  }),
})

const assetsComponents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assets-components' }),
  schema: z.object({
    ...baseFields,
    level: z.enum(['组件级', '元素级', '区块级']),
    code: z.string().optional(),
    preview: z.string().optional(),
  }),
})

const assetsPrompts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/assets-prompts' }),
  schema: z.object({
    ...baseFields,
    prompt: z.string(),
    model: z.enum(['即梦', 'MJ', 'FLUX', '其他']),
    negative: z.string().optional(),
  }),
})

export const collections = {
  handbook,
  cheatsheet,
  'assets-colors': assetsColors,
  'assets-fonts': assetsFonts,
  'assets-layout': assetsLayout,
  'assets-motion': assetsMotion,
  'assets-textures': assetsTextures,
  'assets-styles': assetsStyles,
  'assets-components': assetsComponents,
  'assets-prompts': assetsPrompts,
}
