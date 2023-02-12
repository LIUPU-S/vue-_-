<!-- eslint-disable vue/valid-v-for -->
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const { options } = useRouter();
    const routers = options.routes;
    return {
      routers,
    };
  },
};
</script>

<template>
  <el-menu
    default-active="4"
    background-color="#344a5f"
    text-color="#fff"
    active-text-color="#ff04b"
    router
  >
    <template v-for="item in routers" :key="item.path">
      <template v-if="!item.hidden">
        <!-- 一级菜单 -->
        <el-menu-item v-if="!item.children" :index="item.path">
          <template #title>{{ item.meta && item.meta.title }}</template>
        </el-menu-item>
        <!-- 二级菜单 -->
        <el-sub-menu v-else :index="item.path">
          <template #title>{{ item.meta && item.meta.title }}</template>
          <template v-for="child in item.children" :key="child.path">
            <el-menu-item v-if="!child.hidden" :index="child.path">
              {{ child.meta && child.meta.title }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>
