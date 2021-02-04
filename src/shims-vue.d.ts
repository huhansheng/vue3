
// 虽然 TypeScript 本身不支持导入非 JavaScript 内容，但是为了支持其他工具接下来的工作，所以做了这么个语法支持/
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

