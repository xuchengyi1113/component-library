// packages/components/src/types.ts

// 1. 定义按钮的类型 (类似原生 button 的 type，以及 UI 风格的 type)
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default';

// 2. 定义按钮的尺寸
export type ButtonSize = 'large' | 'default' | 'small';

// 3. 定义 Button 组件的 Props 接口
export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  plain?: boolean;
  round?: boolean;
}