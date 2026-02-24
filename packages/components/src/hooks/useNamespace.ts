// packages/components/src/hooks/useNamespace.ts

export const defaultNamespace = 'my'; // 你的组件库命名前缀

export const useNamespace = (block: string) => {
  // 生成块级类名: my-btn
  const b = () => `${defaultNamespace}-${block}`;
  
  // 生成元素类名: my-btn__icon
  const e = (element: string) => element ? `${b()}__${element}` : '';
  
  // 生成修饰符类名: my-btn--primary
  const m = (modifier: string) => modifier ? `${b()}--${modifier}` : '';
  
  // 生成状态类名: is-disabled
  const is = (name: string, state: boolean | undefined) => (state ? `is-${name}` : '');

  return { b, e, m, is };
};