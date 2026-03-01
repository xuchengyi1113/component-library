import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  title: "My Enterprise UI",
  description: "企业级 Vue 3 组件库",
  
  // 注入 demoblock 解析器，让 markdown 认识 :::demo 语法
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' }
          ]
        }
      ]
    }
  }
})