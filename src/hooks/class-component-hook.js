import { Vue } from "vue-class-component";

// 在class组件原型内注册路由变化的方法
Vue.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate"
]);
