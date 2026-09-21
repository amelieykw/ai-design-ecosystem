// 详情页"复制 → 反馈 2 秒回 idle"共享核心:被 ColorView 与 PromptView 的
// <script> 各自 import 使用。Astro <script> 在 build 时按模块去重,共用实现无
// 运行时开销。
//
// 行为契约(沿用原 ColorView):
// - 用 navigator.clipboard.writeText;不可用或抛错时静默返回,不弹 toast、不改态
// - 多次连按同一按钮:后一次清除前一次的 setTimeout,避免提前回 idle
// - "已复制 · 2 秒" 反馈文案由调用方在按钮 DOM 内准备(本文件只切 is-copied)
//
// 用法(调用方):
//   import { bindCopyButtons } from '@/scripts/copy-feedback'
//   bindCopyButtons('.copy-btn')
const FEEDBACK_MS = 2000

export function bindCopyButtons(selector: string): void {
  const timers = new WeakMap<HTMLButtonElement, number>()
  document.querySelectorAll<HTMLButtonElement>(selector).forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = btn.dataset.copy ?? ''
      if (!text) return
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(text)
        } else {
          return // 不弹提示,保持 idle(DESIGN.md 三禁:toast 禁)
        }
      } catch {
        return
      }
      const prev = timers.get(btn)
      if (prev) window.clearTimeout(prev)
      btn.classList.add('is-copied')
      const t = window.setTimeout(() => {
        btn.classList.remove('is-copied')
        timers.delete(btn)
      }, FEEDBACK_MS)
      timers.set(btn, t)
    })
  })
}
