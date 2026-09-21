// 灵感资产库 8 子类单一事实源:content.config.ts 的 assets-* 集合名、
// 入口页(/assets/)与子类页(/assets/<key>/)共用此常量,后续子类相关组件也从这里 import
export const SUBCLASSES = [
  { key: 'colors', name: '配色', desc: '品牌色板、主题色系与用色契约' },
  { key: 'fonts', name: '字体', desc: '字族搭配、字重阶梯与授权说明' },
  { key: 'layout', name: '排版', desc: '字号阶梯、栅格系统与留白节奏' },
  { key: 'motion', name: '动效', desc: '缓动曲线、时长规范与适用场景' },
  { key: 'textures', name: '纹理', desc: '噪点、渐变、图案等表面质感' },
  { key: 'styles', name: '风格', desc: '视觉风格参考与整体气质定调' },
  { key: 'components', name: '配件', desc: '可复用的组件级、元素级设计件' },
  { key: 'prompts', name: 'AIGC 咒语', desc: '图像生成提示词与负面词模板' },
] as const

export type Subclass = (typeof SUBCLASSES)[number]
export type SubclassKey = Subclass['key']

// 子类 key → content collection 名;模板字面量类型收窄为
// 'assets-colors' | ... | 'assets-prompts',与 content.config.ts 注册的 key 对齐
export const collectionOf = (sc: Subclass): `assets-${SubclassKey}` => `assets-${sc.key}`
