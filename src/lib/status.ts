// 工具安装状态:handbook 列表卡 + 详情页共用单一事实源
// 命名带 TOOL 前缀以避免与未来 assets-* 的"分类/主题/适用场景"等状态混淆
export const TOOL_STATUSES = ['已装', '未装', '按需'] as const
export type ToolStatus = (typeof TOOL_STATUSES)[number]

export const TOOL_STATUS_COLORS: Record<ToolStatus, string> = {
	已装: 'var(--color-status-installed)',
	未装: 'var(--color-status-missing)',
	按需: 'var(--color-status-optional)',
}

/** 状态 → 颜色 token。schema 已做 z.enum 校验,此处出现未知值即数据 bug:
 *  抛错阻断渲染,不静默降级(与 [id].astro 的 slug 防御同一策略) */
export function getToolStatusColor(status: string): string {
	const key = status as ToolStatus
	if (!(key in TOOL_STATUS_COLORS)) {
		throw new Error(`[status] 未知安装状态: "${status}"(允许值:${TOOL_STATUSES.join(' / ')})`)
	}
	return TOOL_STATUS_COLORS[key]
}
