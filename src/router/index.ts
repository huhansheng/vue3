import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/index";
// import Nav from "../views/Nav.vue";
// import User from "../views/User.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home //
    // children: [
    //   {
    //     path: "/about",
    //     name: "About",
    //     component: () => import("../views/About.vue")
    //   }
    // ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
