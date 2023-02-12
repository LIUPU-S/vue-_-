<template>
  <el-container id="layout-container">
    <el-aside id="layout-aside" width="250px"><LayoutAside /></el-aside>
    <el-container>
      <el-header id="layout-header" width="75px"><LayoutHeader /></el-header>
      <el-main id="layout-main"><LayoutMain /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import LayoutAside from "./components/AsideName.vue";
import LayoutHeader from "./components/HeaderName.vue";
import LayoutMain from "./components/MainName.vue";
export default {
  name: "CsIndex",
  // eslint-disable-next-line vue/no-unused-components
  components: { LayoutAside, LayoutHeader, LayoutMain },
  setup() {},
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
  background-color: #ffffff;
}
</style>
