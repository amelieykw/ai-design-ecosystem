// 工具安装状态:handbook 列表卡 + 详情页共用单一事实源
// 命名带 TOOL 前缀以避免与未来 assets-* 的"分类/主题/适用场景"等状态混淆
export const TOOL_STATUSES = ['已装', '未装', '按需'] as const
export type ToolStatus = (typeof TOOL_STATUSES)[number]

export const TOOL_STATUS_COLORS: Record<ToolStatus, string> = {
	已装: 'var(--color-status-installed)',
	未装: 'var(--color-status-missing)',
	按需: 'var(--color-status-optional)',
}
