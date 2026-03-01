import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'

// 1. 引入你自己的组件库
import { MyButton } from '@my-ui/components'

// 2. 引入 demoblock 的核心组件和样式
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    // 全局注册你的自有组件
    app.component('MyButton', MyButton)
    
    // 全局注册 demoblock 演示组件
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}