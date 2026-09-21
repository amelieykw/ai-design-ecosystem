// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 项目站:https://amelieykw.github.io/ai-design-ecosystem/
  // base 必须与仓库名一致,否则 CSS/内链在子路径下全部 404
  site: 'https://amelieykw.github.io',
  base: '/ai-design-ecosystem',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
