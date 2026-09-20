// 状态 → 颜色 token 映射:列表卡片与详情页共用(单一事实源)
export const STATUS_COLORS: Record<string, string> = {
	已装: 'var(--color-status-installed)',
	未装: 'var(--color-status-missing)',
	按需: 'var(--color-status-optional)',
}
