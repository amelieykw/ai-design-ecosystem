// 详情页主展示区"是否有可渲染数据"的判定聚合:8 个子类的结构化字段
// 集中到这里,避免 [id].astro 在接线与占位判定两处分别维护同一组守卫(原 8 行 OR
// 现收为 1 行 import + 1 行调用)。
//
// 设计原则:
// - 只做"有没有可渲染数据"的纯函数判定,不参与字段提取(提取留在 [id].astro,渲染需要)
// - 字段名按 schema 单一事实源(content.config.ts),不在此重复声明类型
// - 谓词接受 assets-* 联合 entry,内部用 'in' 守卫收窄(与现有 [id].astro 同模式)
import type { CollectionEntry } from 'astro:content'

// 8 个 assets-* 子类的 union —— 仅用作字段守卫上下文,不导出强制收敛类型给上层
type AssetsEntry =
  | CollectionEntry<'assets-colors'>
  | CollectionEntry<'assets-fonts'>
  | CollectionEntry<'assets-layout'>
  | CollectionEntry<'assets-motion'>
  | CollectionEntry<'assets-textures'>
  | CollectionEntry<'assets-styles'>
  | CollectionEntry<'assets-components'>
  | CollectionEntry<'assets-prompts'>

// 数组字段守卫:'in' 收窄到带该字段的 union 分支,再判 length。空数组视为无数据
// —— 渐进补全契约下空数组与 undefined 等价
const hasPalette = (d: AssetsEntry['data']): boolean =>
  'palette' in d && Array.isArray(d.palette) && d.palette.length > 0

const hasPairing = (d: AssetsEntry['data']): boolean =>
  'pairing' in d && Array.isArray(d.pairing) && d.pairing.length > 0

const hasLayout = (d: AssetsEntry['data']): boolean =>
  'typeScale' in d &&
  Array.isArray(d.typeScale) &&
  d.typeScale.length > 0
    ? true
    : 'grid' in d && d.grid !== undefined

const hasMotion = (d: AssetsEntry['data']): boolean =>
  'curves' in d && Array.isArray(d.curves) && d.curves.length > 0
    ? true
    : 'durations' in d && Array.isArray(d.durations) && d.durations.length > 0

const hasTextures = (d: AssetsEntry['data']): boolean =>
  'patterns' in d && Array.isArray(d.patterns) && d.patterns.length > 0

// styles 集合:references(url 列表)+ linkedAssets(跨素材引用),任一非空即展示
// linkedAssets 在 schema 默认 [] —— 需要判长度而不只是 undefined
const hasStyles = (d: AssetsEntry['data']): boolean =>
  ('references' in d && Array.isArray(d.references) && d.references.length > 0) ||
  ('linkedAssets' in d && Array.isArray(d.linkedAssets) && d.linkedAssets.length > 0)

// components 集合:level 必填(只要条目合规就存在),code 或 preview 任一即可展示
// code 缺失时仅剩 level 徽章,也算展示
const hasComponents = (d: AssetsEntry['data']): boolean =>
  'level' in d ||
  ('code' in d && typeof d.code === 'string' && d.code.length > 0)

// prompts 集合:prompt 必填,model 必填,只要条目合规即可展示
const hasPrompts = (d: AssetsEntry['data']): boolean => 'prompt' in d && 'model' in d

// 聚合:任一子类专属字段有可渲染数据,详情页即渲染 showcase 区
// 外层 [!hasShowcase] 触发 V2 占位
export const hasShowcase = (data: AssetsEntry['data']): boolean =>
  hasPalette(data) ||
  hasPairing(data) ||
  hasLayout(data) ||
  hasMotion(data) ||
  hasTextures(data) ||
  hasStyles(data) ||
  hasComponents(data) ||
  hasPrompts(data)
