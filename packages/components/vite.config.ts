// packages/components/vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    // 自动生成 TypeScript 声明文件
    dts({
      outDir: 'dist/types',
      insertTypesEntry: true, // 在 package.json 的 types 字段对应的文件中自动插入入口
    }),
  ],
  build: {
    // 开启库编译模式
    lib: {
      entry: resolve(__dirname, './index.ts'), // 组件库入口文件
      name: 'MyEnterpriseUI', // UMD 模式下的全局变量名
      fileName: (format) => `my-ui-components.${format}.js`, // 输出的文件名格式
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      // 绝不能把 vue 打包进去，否则业务项目里会出现两个 Vue 实例，导致报错！
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
        // 让打包后的 CSS 不再内联，而是抽离成独立的文件
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'index.css';
          return assetInfo.name || '';
        },
      },
    },
  },
});