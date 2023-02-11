<!-- eslint-disable vue/no-unused-components -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <el-container id="layout-container">
    <el-aside id="layout-aside" width="250px">
      <el-menu
        default-active="4"
        background-color="#344a5f"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="data.collapse"
      >
        <template v-for="item in routers" :key="item.path">
          <template v-if="!item.hidden">
            <!-- 一级菜单 -->
            <tempalte v-if="hasOnlyChild(item.children)">
              <el-menu-item :index="item.children[0].path">
                <template #title>
                  {{ item.children[0].meta && item.children[0].meta.title }}
                </template>
              </el-menu-item>
            </tempalte>
            <!-- 子集菜单 -->
            <tempalte v-else>
              <el-sub-menu v-if="item.children && item.children.length">
                <template #title>{{ item.meta && item.meta.title }}</template>
                <template v-for="child in item.children" :key="child.path">
                  <el-menu-item v-if="!child.hidden" :index="child.path">
                    {{ child.meta && child.meta.title }}
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </tempalte>
          </template>
        </template>
      </el-menu>
    </el-aside>
    <el-container width="200px">
      <el-header id="layout-header" height="75px">头部信息</el-header>
      <el-main id="layout-main">数据视图</el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from "../../layout/AsideName.vue";
import LayoutHeader from "../../layout/HeaderName.vue";
import LayoutMain from "../../layout/MainName.vue";
import { useRouter } from "vue-router";
import { reactive } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  // eslint-disable-next-line vue/no-unused-components
  components: { LayoutAside, LayoutHeader, LayoutMain },
  setup() {
    const data = reactive({
      collapse: false,
    });
    const { options } = useRouter();
    const routers = options.routes;
    const hasOnlyChild = (children) => {
      if (!children) {
        return false;
      }
      // 存储路由
      if (!children) {
        return false;
      }
      const childRouter = children.filter((item) => {
        return item.hidden ? false : true;
      });

      // 只有一个子级路由
      if (childRouter.length === 1) {
        return true;
      }
      // 否则
      return false;
    };
    return {
      routers,
      hasOnlyChild,
      data,
    };
  },
};
</script>

<style lang="scss" scpoed>
#layout-container {
  height: 100vh;
}
#layout-aside {
  background-color: #344a5f;
}
#layout-aside .el-menu {
  border-right: none;
}
#layout-header {
  background-color: #77bc99;
}
#layout-main {
  background-color: #bc77a1;
}
</style>
