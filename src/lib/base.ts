// 站点内链统一加 base 前缀(GitHub Pages 项目站部署在 /ai-design-ecosystem/ 子路径)
// 所有指向站内路由的 href 必须经此函数,禁止裸写 "/handbook/..."(子路径下会 404)
// 外链(https://)和锚点(#开头)原样返回
export function withBase(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('#')) {
    return path
  }
  const base = import.meta.env.BASE_URL
  // BASE_URL 产线为 '/ai-design-ecosystem/',开发为 '/'
  return base.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}
