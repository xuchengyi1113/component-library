# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`size` 和状态属性来定义按钮的样式。

:::demo
```vue
<template>
  <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
    <MyButton>默认按钮</MyButton>
    <MyButton type="primary">主要按钮</MyButton>
    <MyButton type="primary" size="large" round>大型圆角</MyButton>
    <MyButton type="primary" disabled>禁用状态</MyButton>
  </div>
</template>
:::
---

### 见证奇迹的时刻

这两个文件保存好之后，回到**项目根目录**（`my-enterprise-ui`）的终端，运行之前配置好的文档启动命令：

```bash
pnpm run docs:dev