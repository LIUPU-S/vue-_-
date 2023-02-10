<template>
  <el-container id="layout-container">
    <el-aside id="layout-aside" width="250px"
      >恻栏菜单<layout-aside
    /></el-aside>
    <el-container>
      <el-header id="layout-header" height="75px"
        >头部信息<layout-header
      /></el-header>
      <elmain id="layout-main">数据试图<layout-main /></elmain>
    </el-container>
  </el-container>
</template>

<script>
// import LayoutAside from "./components/Aside";
// import LayoutHeader from "./components/Header";
// import LayoutMain from "./components/Main";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Layout",
  // components: { LayoutAside, LayoutHeader, LayoutMain },
};
</script>
<style lang="scss" scpoed>
#layout-container {
  height: 100vh;
}
#layout-aside {
  background-color: #77acbc;
}
#layout-header {
  background-color: #77bc99;
}
#layout-main {
  background-color: #bc77a1;
}
</style>
