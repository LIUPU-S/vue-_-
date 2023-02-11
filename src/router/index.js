import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "Login",
    hidden: true,
  },
  {
    path: "/login",
    name: "Login",
    hidden: true,
    component: () => import("../views/account/Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      title: "控制台",
    },
    children: [
      {
        path: "/console",
        name: "Console",
        meta: {
          title: "首页",
        },
        component: () => import("../views/console/ConIndex.vue"),
      },
    ],
    component: () => import("../views/account/LayoutIdex.vue"),
  },
  {
    path: "/news",
    name: "News",
    meta: {
      title: "信息管理",
    },
    children: [
      {
        path: "/newsIndex",
        name: "NewsIndex",
        meta: {
          title: "信息列表",
        },
        component: () => import("../views/info/infoIndex.vue"),
      },
      {
        path: "/newsCategory",
        name: "NewsCategory",
        meta: {
          title: "信息分类",
        },
        component: () => import("../views/info/infoCategory.vue"),
      },
      {
        path: "/newsDetailed",
        name: "NewsDetailed",
        meta: {
          title: "信息详情",
        },
        component: () => import("../views/info/infoDetailed.vue"),
      },
    ],
    component: () => import("../views/account/LsitPape.vue"),
  },
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户管理",
    },
    children: [
      {
        path: "/userIndex",
        name: "UserIndex",
        meta: {
          title: "用户列表",
        },
        component: () => import("../views/user/userIndex.vue"),
      },
    ],
    component: () => import("../views/account/LsitPape.vue"),
  },
  {
    path: "/list",
    name: "ListPape",
    component: () => import("../views/account/LsitPape.vue"),
  },
  {
    path: "/detailed",
    name: "DeTailed",
    component: () => import("../views/info/infoDetailed.vue"),
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
