// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue';
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components.js'

import { vuePlugin } from "vitepress-demo-editor";
import "vitepress-demo-editor/dist/style.css";

export default {
  // ...DefaultTheme,
  Layout,
  NotFound,
  // enhanceApp({ app }) {
  //   registerComponents(app);

  //   app.use(vuePlugin, {
  //     defaultDirection: "row", // 默认显示方向
  //     ms: 30, // 编辑器防抖时间
  //     handleError(errs) {}, // 错误信息
  //     onMonacoCreated(monaco) {}, // monaco 创建成功时触发
  //   });
  // },
}
