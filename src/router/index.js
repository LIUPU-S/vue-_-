import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  // 根路由
  {
    path: "/",
    name: "home",
    redirect: "Login",
    hidden: true,
  },
  {
    path: "/s",
    name: "CsIndex",
    meta: {
      title: "控制台",
    },
    component: () => import("../layout/Index.vue"),
  },

  // 集中子路由
  {
    path: "/news",
    name: "News",
    meta: {
      title: "信息管理",
    },
    component: () => import("../layout/Index.vue"),
    children: [
      {
        path: "/login",
        name: "Login",
        meta: {
          title: "登陆",
        },
        component: () => import("../views/account/Login.vue"),
      },
      {
        path: "/list",
        name: "ListPage",
        meta: {
          title: "列表数据",
        },
        component: () => import("../views/account/ListPape.vue"),
      },
      {
        path: "/tree",
        name: "infoCategory",
        meta: {
          title: "树形表单",
        },
        component: () => import("../views/info/infoCategory.vue"),
      },
      {
        path: "/tainfo",
        name: "TaInfo",
        meta: {
          title: "组件复用",
        },
        component: () => import("../views/account/TaInfo.vue"),
      },
    ],
  },
  {
    path: "/infoDetailed",
    name: "infoDetailed",
    meta: {
      title: "信息页",
    },
    component: () => import("../views/info/infoDetailed.vue"),
  },
  {
    path: "/c",
    name: "cs",
    component: () => import("../views/cs.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
