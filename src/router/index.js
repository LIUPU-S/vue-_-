import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "Login",
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/account/Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../layout/index.vue"),
  },
  {
    path: "/list",
    name: "ListPape",
    component: () => import("../views/account/LsitPape.vue"),
  },
  {
    path: "/onetwo",
    name: "OneTwo",
    component: () => import("../views/account/OneTwo.vue"),
  },
  {
    path: "/detailed",
    name: "DeTailed",
    component: () => import("../views/account/DeTailed.vue"),
  },
  {
    path: "/tabelindex",
    name: "TableIndex",
    component: () => import("../views/account/TableIndex.vue"),
  },
  {
    path: "/tainfo",
    name: "TaInfo",
    component: () => import("../views/account/TaInfo.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
