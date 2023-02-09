<template>
  <el-container id="layout-container">
    <el-aside id="layout-aside" width="250px"><layout-aside /></el-aside>
    <el-container>
      <el-header id="layout-header" height="75px"><layout-header /></el-header>
      <elmain id="layout-main"><layout-main /></elmain>
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
