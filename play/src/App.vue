<script setup lang="ts">
import { MyButton } from '@my-ui/components';
</script>

<template>
  <div class="app-container">
    <h2>按钮类型</h2>
    <MyButton>默认按钮</MyButton>
    <MyButton type="primary">主要按钮</MyButton>
    
    <h2>按钮尺寸 & 状态</h2>
    <MyButton type="primary" size="large">大型按钮</MyButton>
    <MyButton type="primary" round>圆角按钮</MyButton>
    <MyButton type="primary" disabled>禁用按钮</MyButton>
  </div>
</template>

<style scoped>
.app-container {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}
</style>