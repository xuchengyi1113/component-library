<template>
  <button 
    :class="[
      ns.b(), 
      ns.m(type), 
      ns.m(size), 
      ns.is('disabled', disabled),
      ns.is('plain', plain),
      ns.is('round', round)
    ]"
    :disabled="disabled"
  >
    <slot>默认按钮</slot>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from './hooks/useNamespace';
import type { ButtonProps } from './types';

defineOptions({ name: 'MyButton' });

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'default',
  size: 'default',
  disabled: false,
  plain: false,
  round: false
});

// 初始化 namespace，传入 block 名称 'btn'
const ns = useNamespace('btn');
</script>

<style scoped lang="scss">
@import './styles/mixins.scss';

/* 使用 mixin 自动生成 .my-btn */
@include b(btn) {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  color: #606266;
  background: #ffffff;
  padding: 8px 15px;
  font-size: 14px;
  border-radius: 4px;
  transition: .1s;

  /* 使用 mixin 自动生成 .my-btn--primary */
  @include m(primary) {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    
    /* 嵌套状态变体 */
    @include when(disabled) {
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }

  /* 生成 .my-btn--large */
  @include m(large) {
    padding: 12px 19px;
    font-size: 16px;
  }

  /* 使用 mixin 自动生成状态 .my-btn.is-disabled */
  @include when(disabled) {
    cursor: not-allowed;
    opacity: 0.6;
  }

  @include when(round) {
    border-radius: 20px;
  }
}
</style>